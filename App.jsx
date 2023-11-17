import React from 'react';
import Splash from './screens/Splash';
import EmployeeList from './screens/EmployeeList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewEmployee from './screens/ViewEmployee';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="EmployeeList" component={EmployeeList} />
        <Stack.Screen name="ViewEmployee" component={ViewEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
