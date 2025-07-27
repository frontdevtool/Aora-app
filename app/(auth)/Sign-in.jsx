import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import { TextInput } from "react-native-paper";

const SignIn = () => {
  return (
    <SafeAreaView className="h-full border-8 border-red-600 ">
<ScrollView contentContainerStyle={{ padding: 20 }}>
  <Text>مرحبا</Text>
  <Text>محتوى</Text>
  <Text>كثير</Text>
  <Text>سيتم تمريره</Text>
</ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
