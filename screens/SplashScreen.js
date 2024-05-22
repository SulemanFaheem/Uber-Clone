import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const animation = Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }
    );

    const onAnimationFinish = () => {
      navigation.navigate('Login');
    };

    animation.start(onAnimationFinish);

    return () => {
      animation.stop();
    };
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>HerDrive</Animated.Text>
      <Animated.Text style={[{ color: '#800080', opacity: fadeAnim }]}>HerDrive: Where Safety Meets Sisterhood.</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#800080',
  },
});
