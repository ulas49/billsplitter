import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import billImage from '../assets/images/bill.jpg';
import {Button} from 'react-native-elements'
export default function Index() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:"#fff"
      }}
    >
      <View className="flex-1 items-center justify-center">
      <Image alt="home_image " source={billImage} className="w-full h-[18.75rem] "/>
      <View>
        <Text className="text-3xl font-[mont-semibold] mb-8 mt-12">Welcome to HesapOrtak </Text>
      </View>
      <View className="flex gap-3 ">
      <Button title="Login" type="outline" buttonStyle={{width:250}} onPress={handleLogin}  /> 
      <Button title="Register" type="outline" buttonStyle={{width:250}}/> 
      </View>
  
      </View>

    </SafeAreaView>
  );
}