import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import CarpoolingScreen from './screens/Carpooling';
import { default as City, default as HomeScreen } from './screens/City';
import FaqScreen from './screens/FaqScreen';
import LoginScreen from './screens/Login';
import RequestHistory from './screens/RequestHistory';
import SafetyScreen from './screens/Safety';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';
import SupportScreen from './screens/SupportScreen';
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image style={styles.userImage} source={require('./assets/icon.png')} />
        <Text style={styles.username}>Suleman Faheem</Text>
        
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star-half" size={20} color="#FFD700" />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Splash' headerMode='false'>
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Carpooling' component={CarpoolingScreen} />
      <Stack.Screen name='Safety' component={SafetyScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='FAQ' component={FaqScreen} />
      <Stack.Screen name='Support' component={SupportScreen} />
    </Stack.Navigator>
  )
}

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{headerTransparent:true}} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name='City'
        component={City}
        options={{
          headerTitle: '',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Request History'
        component={RequestHistory}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'My Rides',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="timer" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Carpooling'
        component={CarpoolingScreen}
        options={{
          headerTitle: '',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Safety'
        component={SafetyScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Safety',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield-checkmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='FAQ'
        component={FaqScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'FAQ',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Support'
        component={SupportScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Support',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
