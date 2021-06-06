import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';  
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {Button} from "react-native-paper";
import { set } from 'react-native-reanimated';

export default function Input({navigation})  {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  
    const [name, setName] = useState("");
    const [Members, setMembers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const enterMember = (x) => {
      var newArray = [...Members];
      newArray.push({name: x});
      setMembers(newArray);
      alert(x + " was added to the list");
  }

  //   const buttonFunction = () => {
  //     navigation.navigate("List");
  // };

    useEffect(() => {
      fetch('http://162.214.119.62/~poheybmy/backend/databasePages/membersNames.php')
      .then((response) => response.json())
      .then((json) =>setMembers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>

      <LinearGradient
        colors={['#00d4ff', '#090979', '#020024']}
        style={styles.background} >

        <Text style={styles.slogan}> Enter a name: </Text>
        
        <TextInput 
            style={styles.input}
            placeholder='e.g. Omar'
            onChangeText={(n)=>setName(n)}
            underlineColorAndroid="transparent"
            />

        <Button
                style={styles.Button}
                onPress = {() => enterMember(name)}
                mode="contained"
            >
                <Text style={styles.buttonText}>Add Name </Text>
        </Button>

            <Button style={styles.Button} mode="contained" onPress={() => navigation.navigate('List', {Members})}>
                <Text style={styles.buttonText}> Generate Random Pairs </Text>
            </Button>
       
                  
      </LinearGradient>

      

    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    justifyContent: "center",
  },
  slogan:{
    fontFamily: "Inter_900Black",
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 60,

  },
  Button: {
    alignSelf: "center",
    backgroundColor: "white",
    margin: 10,
  },
  buttonText: {
    fontFamily: "Inter_900Black",
    color: "black",
    fontSize: 20,
    alignSelf: "center",
  },
  input: {
      borderWidth: 2,
      borderColor: "white",
      padding: 5,
      margin: 5,
      width: 200,
      color: "white",
      alignSelf: "center",
      marginTop: 10,
  },
  background: {
    height: 1000,
    top: 0,
  }
});
