import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Splash = ({navigation}) => {
 const [loadingTextVisible, setLoadingTextVisible] = useState(false);
 const fadeAnim = useState(new Animated.Value(0))[0];

 useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setLoadingTextVisible(true);
    }, 1500);

    setTimeout(() => {
      navigation.navigate('EmployeeList');
    }, 3000);
 }, []);

 return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome...</Text>
      <Animated.Text
        style={[
          styles.loadingText,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        App is loading
      </Animated.Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34a853',
 },
 welcomeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ec0666',
 },
 loadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
 },
});

export default Splash;