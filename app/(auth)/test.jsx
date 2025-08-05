import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, Link } from "expo-router";
import FormField from "@/components/FormField";

// ✅ مخطط التحقق باستخدام zod
const schema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صالح"),
  password: z
    .string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("✅ بيانات النموذج:", data);
    router.push("/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <Text className="text-3xl font-bold text-center mb-8 text-black">
          تسجيل الدخول
        </Text>

        {/* 📨 حقل البريد الإلكتروني */}
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
                <Text className="text-red-500 mt-1">{errors.email.message}</Text>
              )}
            </View>
          )}
        />

        {/* 🔒 حقل كلمة المرور */}
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <View className="mb-6">
        
              <FormField
                placeholder="كلمة المرور"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {errors.password && (
                <Text className="text-red-500 mt-1">{errors.password.message}</Text>
              )}
            </View>
          )}
        />

        {/* زر تسجيل الدخول */}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-blue-600 rounded-md py-3"
        >
          <Text className="text-white text-center text-base font-semibold">
            تسجيل الدخول
          </Text>
        </TouchableOpacity>

        {/* رابط التسجيل */}
        <Link href="/(auth)/sign-up" className="text-center mt-4 text-blue-700">
          ليس لديك حساب؟ <Text className="underline">سجل الآن</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
