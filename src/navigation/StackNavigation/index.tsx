import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { routes } from '../routes';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardOverlayEnabled: true,
        }}>
        {routes.map(({ name, component, showHeader, headerProps }) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
