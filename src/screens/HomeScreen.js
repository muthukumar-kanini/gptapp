import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
import recordingIcon from '../../assets/recordingIcon.png';
import { TouchableOpacity } from 'react-native';
import voiceLoading from '../../assets/voiceLoading.gif';
import Voice from '@react-native-community/voice';

export default function HomeScreen() {
    const [message, setMessage] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(true);
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (text) => {
        setUserInput(text);
    };

    const handleSend = () => {
        if (userInput.trim() !== '') {
            setMessage([...message, { role: 'user', content: userInput.trim() }]);
            console.log(userInput.trim()); // Console log the typed value
            setUserInput('');
            Keyboard.dismiss(); // Hide the keyboard after sending message
        }
    };

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5 ">
                <View className="flex-row justify-center">
                    <Image source={require('../../assets/bot.png')} style={{ height: hp(15), width: hp(15) }} />
                </View>

                {/* Chat History */}
                <View style={{ flex: 1 }}>
                    {
                        message.length > 0 ? (
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: wp(5) }} className="ml-2 font-semibold text-grey-700">Assistant</Text>
                                <View style={{ height: hp(60) }} className="bg-neutral-200 rounded-3xl p-4 ">
                                    <ScrollView bounces={false} showsVerticalScrollIndicator={false} className="space-y-4">
                                        {
                                            message.map((messages, index) => {
                                                if (messages.role === 'assistant') {
                                                    if (messages.content.includes('https')) {
                                                        return (
                                                            <View key={index} className='flex-row justify-start'>
                                                                <View className=" bg-emerald-100 rounded-xl p-3 rounded-tl-none ">
                                                                    <Image source={{ uri: messages.content }} style={{ height: wp(60), width: wp(60) }} className="rounded-2xl " />
                                                                </View>
                                                            </View>
                                                        )
                                                    } else {
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
                </View>

                {/* Input Form */}
                <View style={{ padding: 10 }}>
                    <TextInput
                        className="bg-white"
                        value={userInput}
                        onChangeText={handleInputChange}
                        placeholder="Type here..."
                        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10, }}
                    />
                    <TouchableOpacity className="bg-emerald-100"  onPress={handleSend} style={{  borderRadius: 10, padding: 10 ,}}>
                        <Text style={{ fontWeight: 'bold' }}>Send</Text>
                    </TouchableOpacity>
                    {
                        message.length > 0 && (
                            <TouchableOpacity className="top-1 mr-2" style={{ position: 'absolute', right: 10, padding: 10, borderRadius: 20, backgroundColor: '#CBD5E0', marginTop: 10 }} onPress={() => setMessage([])}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Clear</Text>
                            </TouchableOpacity>
                        )
                    }
                   
                </View>
            </SafeAreaView>
        </View>
    );
}
