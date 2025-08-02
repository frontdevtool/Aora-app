import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Icon, TextInput } from "react-native-paper";

const SearchInput = ({
  keyboardType,
  onChangeText,
  value,
  label,
  placeholder,
  otherstyle,
}) => {
  const [eye, setEye] = useState(true);
  return (
    <View style={{ justifyContent: "center" }} className={`${otherstyle}`}>
      <TextInput
        className=""
        // right={<TextInput.Icon icon={label} onPress={() => setEye(!eye)} />}
        // style={{ width: 300,marginTop :50 }}
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        // keyboardType={'numeric'}
        keyboardType={keyboardType}
        right={
          <TextInput.Icon
            icon="select-search"
            size={30}
            color={""}
            // style={{ backgroundColor: "red" }}
          />
        }
      />
    </View>
  );
};

export default SearchInput;
