import React, {useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Form from "./components/Form";

const App: () => React$Node = () => {
  const hiddenKey = () => Keyboard.dismiss();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => hiddenKey()}>
        <View style={styles.app}>
          <View style={styles.contain}>
            <Form />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(71, 149, 212)",
    justifyContent: "center",
  },
  contain: {
    marginHorizontal: "2.5%",
  },
});

export default App;
