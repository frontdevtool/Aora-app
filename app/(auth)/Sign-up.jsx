import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import { TextInput } from "react-native-paper";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  userName: z
    .string()
    .min(1, "اسم المستخدم مطلوب")
    .max(5, "يجب ان لا يتجاوز 5 احرف"),
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});
const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log("✅ بيانات النموذج:", data);
    router.push("/home");
  };
  return (
    <SafeAreaView className="flex-1 bg-primary p-1">
      <ScrollView

      //  style={{minHeight : 450}}
      // contentContainerStyle={{flex: 1 }}
      >
        <View className="w-full  p-4   h-[700px]">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] "
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-pbold mt-8">Sign-up</Text>

          <Controller
            control={control}
            name="userName"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-4">
                <FormField
                  placeholder="user Name"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.userName && (
                  <Text className="text-red-500 mt-1">
                    {errors.userName.message}
                  </Text>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-4">
                <FormField
                  placeholder="Email"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.email && (
                  <Text className="text-red-500 mt-1">
                    {errors.email.message}
                  </Text>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-4">
                <FormField
                  placeholder="Password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.password && (
                  <Text className="text-red-500 mt-1">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            )}
          />

          <CustomButton title={"sgin-up"} handlePress={handleSubmit(onSubmit)} />

          <Link
            className=" text-center mt-4 text-white"
            href={"/(auth)/sign-in"}
          >
            {" "}
            i have acount{" "}
            <Text className="text-secondary-100">sgin-in</Text>{" "}
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
