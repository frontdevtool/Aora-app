import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";

import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  userName : z.string().min(1,'اسم المستخدم مطلوب').max(5,'يجب ان لا يتجاوز 5 احرف'),
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

const SignIn = () => {
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
  
  console.log('errors: ', errors);
  const onSubmit = (data) => {
    console.log("✅ بيانات النموذج:", data);
    router.push("/home");
  };
  return (
    <SafeAreaView className="flex-1 bg-primary p-2">
      <ScrollView>
        <View className="w-full p-4 justify-center  h-full">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] "
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-pbold my-8">Sign-in</Text>
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
              <View className="mb-6">
                <FormField
                  placeholder="password"
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
          <CustomButton title={"log-in"} handlePress={handleSubmit(onSubmit)} />

          <Link
            className=" text-center mt-4 text-white"
            href={"/(auth)/sign-up"}
          >
            Don't have account ?{" "}
            <Text className="text-secondary-100">sign-up</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
