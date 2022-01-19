import React, { useState } from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
// import ImageChooser from "./ImageChooser";
import Styles from "./Styles";

const PersonalInfo = () => {
  return (
    <View>
      <Image source={require("../assets/wired-brain-cofee-logo.png")} />
      <View>
          <Text>Please enter your name</Text>
          <TextInput/>
      </View>
      <Button title='Start chatting' onPress={() => {}}/>
    </View>
  );
};

export default PersonalInfo;
