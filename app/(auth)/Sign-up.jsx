import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import { TextInput } from "react-native-paper";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignUp = () => {
const [form, setForm] = useState({userName : '' , email : '' , password : ''})
const [text, setText] = useState('')
return (
<SafeAreaView className="flex-1 bg-primary p-1">
    <ScrollView
    
    //  style={{minHeight : 450}}
      // contentContainerStyle={{flex: 1 }}
     >
        <View className="w-full  p-4   h-[700px]">
            <Image source={images.logo} className="w-[130px] h-[84px] " resizeMode="contain" />
            <Text className="text-white text-2xl font-pbold mt-8">Sign-up</Text>
            <FormField
            otherstyle={'my-7'}
            placeholder={'user name'}
            value={form.userName}
             onChangeText={(e)=>setForm({...form , userName : e})}
             />
            <FormField
              // otherstyle={'my-7'}
            placeholder={'email'}
            value={form.email}
             onChangeText={(e)=>setForm({...form , email : e})}
             keyboardType={'email-address'}
             />
            <FormField
              otherstyle={'my-7'}
            // label={password}
              placeholder={'password'}
            value={form.password}
             onChangeText={(e)=>setForm({...form , password : e})}
             keyboardType={'numeric'}
             />
        <CustomButton title={'sign-up'} handlePress={()=>router.push('/profile')}/>
          <Link className=" text-center mt-4 text-white" href={'/(auth)/sign-in'}> i have acount <Text className="text-secondary-100">login-in</Text> </Link>
             
        </View>
    </ScrollView>
</SafeAreaView>
)
};

export default SignUp;
