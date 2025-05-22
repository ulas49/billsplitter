import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import billImage from '../assets/images/bill.jpg';
export default function Index() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/login");
  };
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff"
      }}
    >
      <Image alt="home_image " source={billImage} className="w-full h-[18.75rem] "/>
      <View>
        <Text className="text-3xl font-bold">Welcome to  </Text>
        <Text className="text-3xl font-bold"> HesapOrtak </Text>
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
         <TouchableOpacity >
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
