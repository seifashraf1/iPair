import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';  
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {Button} from "react-native-paper";
import { set } from 'react-native-reanimated';

export default function List({route, navigation})  {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const {Members} = route.params;
  const [people, setPeople] = useState(Members);
  
    const shuffleDeck = () => {
    var array = [...people];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setPeople(array);
  };

        // useEffect(() => {
        //     fetch('http://162.214.119.62/~poheybmy/backend/databasePages/membersNames.php')
        //     .then((response) => response.json())
        //     .then((json) =>setMembers(json))
        //     .catch((error) => console.error(error))
        //     .finally(() => setLoading(false));
        // }, []);
  
  return (
    <View style={styles.container}>
     
     
      <LinearGradient
        colors={['#00d4ff', '#090979', '#020024']}
        style={styles.background} >

      <Text style={styles.slogan}> Randomly Allocated Pairs </Text>


      <Button
        style={styles.Button}
        onPress = {() => shuffleDeck()}
        mode="contained">
    
          <Text style={styles.buttonText}>Shuffle</Text>
     
      </Button>
      
        <FlatList 
            data = {people}
            numColumns = {2}
              renderItem={({ item }) => {
                return (
                  <View style={styles.pair}>
                      <Text style={styles.item}> {item.name} </Text>
                  </View>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        />
            
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
    marginTop: 60,
    marginBottom: 20,
    alignSelf: "center",
  },
  Button: {
    fontSize: 20,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: "white",
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "Inter_900Black",
    color: "#254B89",
    fontSize: 20,
  },
  pair: {
    marginVertical: 10,
    marginHorizontal: 50,
    padding: 10,
    flex: 90,
    backgroundColor: "white",
    //width: 10,
    borderRadius: 200,
    alignItems: "center",
  },
  item: {
    color: "#254B89",
    fontSize: 15,
  },
  background: {
    height: 1000,
    top: 0,
  }
});
