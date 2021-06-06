import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {Button} from "react-native-paper";

export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const buttonFunction = () => {
    alert("Enter some names!");
    navigation.navigate("Input");
};
  

return (
    <View style={styles.container}>
    
    <LinearGradient
        colors={['#00d4ff', '#090979', '#020024']}
        style={styles.background} >

        <Image style={styles.logo} source={require('./logo2.png')}/>
  
        <Text style={styles.slogan}> Pair Names Randomly! </Text>

        <Button style={styles.Button} mode="contained" onPress={() => buttonFunction() }>
        <Text style={styles.buttonText}> Create a list </Text>
        </Button> 

    </LinearGradient>

      

    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    justifyContent: "center",
  },
  logo:{
    alignSelf: "center",
    marginTop: 80,
  },
  slogan:{
    fontFamily: "Inter_900Black",
    color: "white",
    padding: 90,
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  Button: {
    alignSelf: "center",
    backgroundColor: "white",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    alignSelf: "center",
    right: 45,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: "white",
  },
  background: {
    height: 1000,
    top: 0,
  }
});
