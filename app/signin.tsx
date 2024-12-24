import React from "react"
import {View ,Text, ScrollView,Image, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import images from "@/constants/images"
import icons from "@/constants/icons"
const SignIn = ()=>{
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image 
                    source={images.onboarding} 
                    resizeMode="contain" 
                    className="w-full h-2/3"
                />
                <View className="px-10">
                    <Text className="text-xl text-center uppercase font-rubik text-black-200">Welcome To Restate</Text>
                    <Text className="text-3xl font-Rubik-ExtraBold text-black-300 text-center mt-2">Let's Get You Closer To</Text>
                    <Text className="text-3xl font-Rubik-ExtraBold text-primary-300 text-center">Your Ideal Home</Text>
                    <Text className="text-center font-Rubik-Regular mt-8 text-xl">Login to Restate with Google</Text>
                    <TouchableOpacity className="flex flex-row items-center justify-center gap-8 bg-white shadow-md shadow-zinc-300 mt-10 p-4 rounded-full w-full">
                        <Image source={icons.google} className="w-6 h-6" />
                        <Text className="font-Rubik-Bolt text-xl">Login with Google</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn