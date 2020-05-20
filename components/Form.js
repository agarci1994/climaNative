import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Picker } from "@react-native-community/picker";
const Form = () => {
  const [animationButton] = useState(new Animated.Value(1));
  const animationOpen = () =>
    Animated.spring(animationButton, { toValue: 0.9 }).start();
  const animationClose = () =>
    Animated.spring(animationButton, { toValue: 1, friction:4, tension: 30 }).start();

  const styleAnimation = {
    transform: [{ scale: animationButton }],
  };
  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="ciudad"
            placeholderTextColor="#666"
          />
          <Picker itemStyle={{ height: 120, backgroundColor: "#FFF" }}>
            <Picker.Item label="--- Selecione un pais ---" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="España" value="SP" />
            <Picker.Item label="Mexico" value="MX" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="Peru-" value="PE" />
            <Picker.Item label="Reino Unido" value="GB" />
            <Picker.Item label="Francia" value="FR" />
            <Picker.Item label="Italia" value="IT" />
            <Picker.Item label="China" value="CH" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => animationOpen()}
          onPressOut={() => animationClose()}
        >
          <Animated.View style={[styles.btn, styleAnimation]}>
            <Text style={styles.btnText}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: "#FFF",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  btn: {
    marginTop: 50,
    backgroundColor: "#000",
    padding: 10,
    justifyContent: "center",
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 10,
  },
});

export default Form;
