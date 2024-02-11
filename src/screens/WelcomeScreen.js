import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation()
  return (
   <SafeAreaView className="flex-1 flex justify-around bg-white" >
    <View className="space-y-2">
        <Text style={{fontSize: wp(10)}}  className="text-center font-bold text-grey-800">
            Jarvis
        </Text>
        <Text style={{fontSize:wp(4)}} className="text-center font-semibold -tracking-wider text-gray-900" >
            The Future Is Here Powered By AI 
        </Text>
    </View>

    <View className="flex-row justify-center">
    <Image source={require('../../assets/welcome.png')}  style={{width: wp(75) , height:wp(75)}}/>
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-5">
        <Text className="text-center text-2xl font-bold text-white">Get Started </Text>
    </TouchableOpacity>

   </SafeAreaView>
  )
}