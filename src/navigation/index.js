import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

const NavigationController = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomNavigationBar,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomNavigationBar = ({ navigation, previous }) => (
  <Appbar.Header>
    {previous ? (
      <Appbar.BackAction onPress={navigation.goBack} color="#ffffff" />
    ) : null}
    <Appbar.Content title="Taazaa" />
  </Appbar.Header>
);

export default NavigationController;
