import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import { TextInput } from "react-native-paper";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
const [form, setForm] = useState({email : '' , password : ''})
const [text, setText] = useState('')
return (
<SafeAreaView className="flex-1 bg-primary p-2">
    <ScrollView
    //  className=' p-1' 
    
    //  style={{minHeight : 450}}
      // contentContainerStyle={{height : 600}}
     >
        <View className="w-full p-4 justify-center  h-full">
            <Image source={images.logo} className="w-[130px] h-[84px] " resizeMode="contain" />
            <Text className="text-white text-2xl font-pbold my-8">Sign-in</Text>
            <FormField
            placeholder={'email'}
            keyboardType={"email-address"}
            value={form.email}
             onChangeText={(e)=>setForm({...form , email : e})}
             />
            <FormField
            otherstyle={'my-7'}
            // label={password}
             keyboardType={"number-pad"}
              placeholder={'password'}
            value={form.password}
             onChangeText={(e)=>setForm({...form , password : e})}
             />
        <CustomButton title={'log-in'} handlePress={()=>router.push('/profile')}/>
          <Link className=" text-center mt-4 text-white" href={'/(auth)/sign-up'}>Don't have account ? <Text className="text-secondary-100">sign-up</Text></Link>
             
        </View>
    </ScrollView>
</SafeAreaView>
)
};

export default SignIn;
