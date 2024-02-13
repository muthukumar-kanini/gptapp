import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from 'react-native';

import AppNavigation from './src/navigation';
import { apiCall } from './src/api/openAi';

export default function App() {
    useEffect(()=>{
      apiCall('what is computer');
    },[])
  return (
  <AppNavigation/>
  );
}


