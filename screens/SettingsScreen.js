import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingsScreen = ({ }) => {
  const navigation = useNavigation();

  const navigateToPhoneNumber = () => {
    navigation.navigate('EditPhoneNumber');
  };

  const navigateToLanguage = () => {
    navigation.navigate('LanguageSelection');
  };

  const navigateToDateTime = () => {
    navigation.navigate('DateTimeSettings');
  };

  const navigateToNightMode = () => {
    navigation.navigate('NightModeSettings');
  };

  const navigateToRulesAndTerms = () => {
    navigation.navigate('RulesAndTerms');
  };

  const handleLogout = () => {
    navigation.navigate('Login')
  };

  const handleDeleteAccount = () => {
    // Handle delete account action
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldsContainer}>
        <CardItem text="Edit Phone Number" onPress={navigateToPhoneNumber} />
        <CardItem text="Language" onPress={navigateToLanguage} />
        <CardItem text="Date and Time" onPress={navigateToDateTime} />
        <CardItem text="Night Mode" onPress={navigateToNightMode} />
        <CardItem text="Rules and Terms" onPress={navigateToRulesAndTerms} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
          <Text style={[styles.buttonText, { color: 'red' }]}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CardItem = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{text}</Text>
      <Ionicons name="arrow-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor:'#9e2379'
  },
  fieldsContainer: {
    paddingTop: '10%',
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '450',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  cardText: {
    fontSize: 15,
    textAlign: 'center',
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SettingsScreen;
