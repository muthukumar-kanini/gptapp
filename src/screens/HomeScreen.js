import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import { useState } from 'react';
import Features from '../components/Features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
    const [message , setMessage] = useState(dummyMessages);
  return (
    <View className="flex-1 bg-white">
    <SafeAreaView className="flex-1 flex mx-5 ">
      <View className="flex-row  justify-center">
       
        <Image source={require('../../assets/bot.png')} style={{height : hp(15), width : hp(15)}} />
      </View>

      {
        message.length > 0 ? (
            <View className="flex-1 space-y-3">
              <Text style={{fontSize:wp(5)}} className="ml-2 font-semibold text-grey-700">Assistant</Text>
              <View style={{height: hp(60)}} className="bg-neutral-200 rounded-3xl p-4 ">
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} className="space-y-4">
                  {
                    message.map((messages , index )=>{

                        if(messages.role==='assistant'){
                            if(messages.content.includes){
                                //its a image 
                            }else{
                                //text content
                            }
                        }else{
                            //user 
                            
                        }
                       
                    })
                  }
                </ScrollView>
              </View>
            </View>
        ) : (
            <Features/>
        )
      }


    </SafeAreaView>
    </View>
  );
}
