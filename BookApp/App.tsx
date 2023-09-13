//Referencelist:https://stackoverflow.com/questions/71941539/passing-parameter-to-bottom-tab-component-in-react-native-navigation-6/
//Referencelist:https://archive.reactnative.dev/docs/handling-text-input/
//Referencelist:https://reactnative.dev/docs/next/react-devtools/
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    
    <View style={styles.container}>
      {/* Heading */} 
      <Text style={styles.heading}>Best Book Tracker App</Text>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Genre</Text>
        </TouchableOpacity>
      </View>

        {/* Image */}
        <Image
          source={require('BookApp/images/book.png')} 
          style={styles.contentImage}
        />
      
      {/* Boxes */}
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Display details of the last book you have read here:EG Harry Potter hogwarts</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Display total pages you have read here Eg 254</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Display average pages per book you have read here: Eg 220</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
    
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    backgroundColor: 'white', 
    color: 'black', 

  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'grey',
    
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  navText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    backgroundColor: 'grey', 
    color: 'black',

  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  contentText: {
    fontSize: 25,
    marginBottom: 10,

  },
  contentImage: {
    width: 700,
    height: 600,
    resizeMode: 'cover', 
  },

  boxes: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20,
  },

  box: {
    width: 150,
    height: 250,
    backgroundColor: 'brown', 
    alignItems: 'center',
    justifyContent: 'center',

  },
  boxText: {
    fontSize: 25,
    color: 'black', 

  },
});

export default HomePage;
