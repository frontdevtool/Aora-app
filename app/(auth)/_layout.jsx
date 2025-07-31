import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
      <StatusBar barStyle={""} backgroundColor={"#161622"} />
    </>
  );
};

export default AuthLayout;
