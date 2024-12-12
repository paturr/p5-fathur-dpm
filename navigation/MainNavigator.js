import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Catatan Harian' }}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNoteScreen}
        options={{ title: 'Tambah Catatan' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
