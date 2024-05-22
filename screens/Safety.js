import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SafetyScreen = () => {
    const handleContactPress = (contact) => {
        // You can implement logic to handle the press of each contact
        console.log(`Contact ${contact} pressed`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.safetyIconContainer}>
                <Ionicons name="shield-checkmark-outline" size={100} color="#FF6347" />
                <Text style={styles.contactText}>Who do you want to contact?</Text>
            </View>
            <View style={styles.contactContainer}>
                <TouchableOpacity style={styles.fieldContainer} onPress={() => handleContactPress('Ambulance')}>
                    <Ionicons name="call-outline" size={24} color="#000" />
                    <Text style={styles.input}>Ambulance</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fieldContainer} onPress={() => handleContactPress('Police')}>
                    <Ionicons name="call-outline" size={24} color="#000" />
                    <Text style={styles.input}>Police</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fieldContainer} onPress={() => handleContactPress('Night Agent')}>
                    <Ionicons name="call-outline" size={24} color="#000" />
                    <Text style={styles.input}>Night Agent</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffffff'
    },
    safetyIconContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    contactText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    contactContainer: {
        width: '90%',
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#ccc',
        paddingBottom: 20,
    },
    input: {
        flex: 1,
        marginLeft: 20,
        marginRight: 10,
    },
});

export default SafetyScreen;
