import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/Login.png')} style={{ height: Dimensions.get('window').height / 2.5 }}>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#4632A1', fontSize: 34 }}>
                        Welcome
                    </Text>
                    <Text>
                        Don't have an account?
                        <Text style={{ color: 'red', fontStyle: 'italic' }}>
                            {' '}
                            Register Now
                        </Text>
                    </Text>
                    <View style={{ marginTop: 40, flex: 1 }}>
                        <TextInput
                            style={[styles.input, styles.inputWithBorder]}
                            placeholder="Email"
                            placeholderTextColor="#4632A1"
                            onChangeText={text => setEmail(text)}
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={[styles.input, styles.inputWithBorder, { marginTop: 20 }]}
                            placeholder="Password"
                            placeholderTextColor="#4632A1"
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.icon}>
                                <Ionicons name="logo-facebook" size={30} color="#4267B2" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon}>
                                <Ionicons name="logo-google" size={30} color="#DB4437" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon}>
                                <Ionicons name="logo-instagram" size={30} color="#E4405F" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bottomView: {
        flex: 1,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    input: {
        backgroundColor: "#fff",
        padding: 15,
        width: "90%",
        color: "#000",
        flex: 1
    },
    inputWithBorder: {
        width: 'auto',
        borderWidth: 1,
        borderColor: '#4632A1',
        borderRadius: 8,
        flex: 1
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    icon: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
    },
    loginButton: {
        backgroundColor: '#4632A1',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
});
