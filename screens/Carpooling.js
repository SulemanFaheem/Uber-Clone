import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function CarpoolingScreen() {
  const [pickupModalVisible, setPickupModalVisible] = useState(false);
  const [destinationModalVisible, setDestinationModalVisible] = useState(false);
  const [selectedPickupLocation, setSelectedPickupLocation] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const navigation = useNavigation();
  const pickupLocations = ['Wapda Town', 'Johar Town', 'Gulberg', 'Model Town', 'LDA'];
  const destinations = ['Wapda Town', 'Johar Town', 'Gulberg', 'Model Town', 'LDA'];
  const paymentMethods = ['Cash', 'JazzCash', 'Easypaisa'];

  const handlePickupLocationPress = () => {
    setPickupModalVisible(true);
  };

  const handleDestinationPress = () => {
    setDestinationModalVisible(true);
  };

  const handleLocationSelect = (location) => {
    setSelectedPickupLocation(location);
    setPickupModalVisible(false);
  };

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    setDestinationModalVisible(false);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleLetsGoPress = () => {
    navigation.navigate('City')
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.optionContainer} onPress={handlePickupLocationPress}>
          <Text style={styles.optionText}>Pickup Location: {selectedPickupLocation}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={handleDestinationPress}>
          <Text style={styles.optionText}>Destination: {selectedDestination}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={styles.input}
            placeholder="Pickup Time"
            value={pickupTime}
            onChangeText={setPickupTime}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
          <Text style={styles.paymentText}>Payment Method:</Text>
          <View style={styles.paymentContainer}>
            {paymentMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.paymentButton, selectedPaymentMethod === method && styles.selectedPaymentButton]}
                onPress={() => handlePaymentMethodSelect(method)}
              >
                <Text>{method}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.letsGoButton} onPress={handleLetsGoPress}>
            <Text style={styles.letsGoButtonText}>Let's Go Carpooling</Text>
          </TouchableOpacity>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={pickupModalVisible}
          onRequestClose={() => setPickupModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setPickupModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {pickupLocations.map((location, index) => (
                  <TouchableOpacity key={index} style={styles.modalOption} onPress={() => handleLocationSelect(location)}>
                    <Text>{location}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={destinationModalVisible}
          onRequestClose={() => setDestinationModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setDestinationModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {destinations.map((destination, index) => (
                  <TouchableOpacity key={index} style={styles.modalOption} onPress={() => handleDestinationSelect(destination)}>
                    <Text>{destination}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: '30%'
  },
  optionContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentText: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  selectedPaymentButton: {
    backgroundColor: '#ccc',
  },
  letsGoButton: {
    backgroundColor: '#9e2379',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  letsGoButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
