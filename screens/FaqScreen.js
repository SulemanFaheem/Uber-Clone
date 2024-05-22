import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FaqScreen({ navigation }) {
  const handleRedirect = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => handleRedirect('City')}>
        <Ionicons name="location" size={30} color="black" />
        <Text style={styles.cardText}>City</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => handleRedirect('Carpooling')}>
        <Ionicons name="car" size={30} color="black" />
        <Text style={styles.cardText}>Carpooling</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => handleRedirect('Night')}>
        <Ionicons name="moon" size={30} color="black" />
        <Text style={styles.cardText}>Night Agent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => handleRedirect('AgentAppIssues')}>
        <Ionicons name="bug" size={30} color="black" />
        <Text style={styles.cardText}>App Issues</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => handleRedirect('AboutHerDrive')}>
        <Ionicons name="information-circle" size={30} color="black" />
        <Text style={styles.cardText}>About HerDrive</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9e2379'
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
