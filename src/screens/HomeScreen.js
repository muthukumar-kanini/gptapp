import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
import recordingIcon from '../../assets/recordingIcon.png';
import {  TouchableOpacity } from 'react-native';
import voiceLoading from '../../assets/voiceLoading.gif';
import Voice from '@react-native-community/voice';


export default function HomeScreen() {
    const [message, setMessage] = useState(dummyMessages);
    const [recording , setRecording] = useState(false)//png
    const [speaking , setSpeaking] = useState(true); //stop

    const SpeechStartHandler = e=>{
        console.log('started ')
    }

    const SpeechEndHandler = e=>{
        setRecording(false)
     
        console.log('ended ')
    }

    const SpeechResultsHandler = e=>{
        setRecording(false)
        console.log('voice eveby ',e)
    }
   

    const  startRecording  = async() =>{
        setRecording(true)
        try{
            await Voice.start('en-GB')
        }catch(error){
            console.log(error)
        }
    }

    const  stopRecording  = async() =>{
       
        try{
            await Voice.stop()
            setRecording(false)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
      Voice.onSpeechStart = SpeechStartHandler;
      Voice.onSpeechEnd = SpeechEndHandler
      Voice.onSpeechResults =SpeechResultsHandler

      return ()=>{
        Voice.destroy().then(Voice.removeAllListeners)
      }
    }, []);

    const stopSpeaking = () =>{
        setSpeaking(false)
    }

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5 ">
                <View className="flex-row justify-center">
                    <Image source={require('../../assets/bot.png')} style={{ height: hp(15), width: hp(15) }} />
                </View>

                {
                    message.length > 0 ? (
                        <View className="flex-1 space-y-3">
                            <Text style={{ fontSize: wp(5) }} className="ml-2 font-semibold text-grey-700">Assistant</Text>
                            <View style={{ height: hp(60) }} className="bg-neutral-200 rounded-3xl p-4 ">
                                <ScrollView bounces={false} showsVerticalScrollIndicator={false} className="space-y-4">
                                    {
                                        message.map((messages, index) => {
                                            if (messages.role === 'assistant') {
                                                if (messages.content.includes('https')) {
                                                    // Code to display an image
                                                    return(
                                                        <View  key={index} className='flex-row justify-start'>
                                                           
                                                            <View className=" bg-emerald-100 rounded-xl p-3 rounded-tl-none ">
                                                            <Image source={{ uri: messages.content}} style={{height : wp(60) ,width: wp(60)}} className="rounded-2xl "/>
                                                            </View>
                                                        </View>
                                                    )
                                                } else {
                                                    // Code to display text content
                                                    return (
                                                        <View key={index} className="flex-row ">
                                                            <View>
                                                                <Text className="bg-emerald-100 rounded-xl p-3 rounded-tl-none">
                                                                    {messages.content}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    );
                                                }
                                            } else {
                                                // user 
                                                return (
                                                    <View key={index} className="flex-row justify-end">
                                                        <View>
                                                            <Text className="bg-white rounded-xl p-3 rounded-tr-none">
                                                                {messages.content}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                );
                                            }
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Features />
                    )
                }


                {/* recording features starts  */}
                <View className="flex justify-center items-center ">
                   {
                         recording ? (
                            <TouchableOpacity onPress={stopRecording}>
                            <Image source={voiceLoading}  style={{width: wp(20) , height:wp(20)}} className="rounded-full mt-6"/>
                            </TouchableOpacity>
                         )  :  

                         (
                            <TouchableOpacity onPress={startRecording}>
                            <Image source={recordingIcon}  style={{width: wp(20) , height:wp(20)}} className="rounded-full mt-6"/>
                            </TouchableOpacity>
                         )
                   }


                   {/* clear button  */}
                   {
                    message.length > 0  && (
                        <TouchableOpacity className="absolute right-10 p-3 rounded-3xl bg-neutral-400 mt-4"  onPress={() => setMessage([ ])}>
                            <Text className="text-white font-semibold " >Clear</Text>
                        </TouchableOpacity>
                    )
                   }

                   {/* stop button */}
                   
                   {
                    speaking  > 0  && (
                        <TouchableOpacity className="absolute left-10 p-3 rounded-3xl bg-red-400 mt-4"  onPress={stopSpeaking}>
                            <Text className="text-white font-semibold  " >stop</Text>
                        </TouchableOpacity>
                    )
                   }
                   

                </View>
            </SafeAreaView>
        </View>
    );
}

