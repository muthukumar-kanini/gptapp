import { View, Text ,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'


export default function Features() {
  return (
    <View style={{height:hp(60)}} className="space-y-5">
      <Text style={{fontSize:wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      <View className="bg-emerald-200 rounded-xl p-4  space-y-2 ">
        <View className="flex-row items-center space-x-3">
        <Image source={require('../../assets/chatgptIcon.png')} style={{height : hp(4), width : hp(4)}} />
        <Text style={{fontSize:wp(4.5)}} className="font-semibold text-grey-700"> Chat GPT</Text>
        </View>
        <Text  style={{fontSize:wp(3.8)}} className="font-medium text-grey-700">Chat GPT can provide with instance and knowledgeable response assist you with creative ideas on a wide range of topics </Text>
      </View>

      <View className="bg-purple-200 rounded-xl p-4  space-y-2 ">
        <View className="flex-row items-center space-x-3">
        <Image source={require('../../assets/dalleIcon.png')} style={{height : hp(4), width : hp(4)}} />
        <Text style={{fontSize:wp(4.5)}} className="font-semibold text-grey-700">DALL-E</Text>
        </View>
        <Text  style={{fontSize:wp(3.8)}} className="font-medium text-grey-700">DALL-E can generate imaginative and diverse images from textual description expanding the boundaries of visual creative  </Text>
      </View>

      <View className="bg-cyan-200 rounded-xl p-4  space-y-2 ">
        <View className="flex-row items-center space-x-3">
        <Image source={require('../../assets/smartaiIcon.png')} style={{height : hp(4), width : hp(4)}} />
        <Text style={{fontSize:wp(4.5)}} className="font-semibold text-grey-700">Smart-AI</Text>
        </View>
        <Text  style={{fontSize:wp(3.8)}} className="font-medium text-grey-700">A powerfull voice assistant with the abilities of ChatGPT and DALL-E providing you the best of both worlds</Text>
      </View>

    </View>
  )
}