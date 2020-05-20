import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Form from "./components/Form";
import Weather from "./components/Weather";

const App: () => React$Node = () => {
  const [search, setSearch] = useState({ city: "", country: "" });
  const [call, setCall] = useState(false);
  const { city, country } = search;
  const [resultAPI, setResult] = useState({ name: "", main: "" });
  const [backgroundColor, setBackgroundColor] = useState("rgb(71, 149, 212)");

  useEffect(() => {
    if (call) {
      const appId = "b08c7a8af338f1d0490c3f3640508501";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      const callApi = async () => {
        try {
          const response = await fetch(url);
          const result = await response.json();
          setResult(result);
          setCall(false);

          const kelvin = 237.15;
          const { main } = result;
          const now = main.temp - kelvin;
          if (now < 10) {
            setBackgroundColor("rgb(105, 108, 149)");
          } else if (now >= 10 && now < 25) {
            setBackgroundColor("rgb(71, 149, 212)");
          } else {
            setBackgroundColor("rgb(178, 28, 61)");
          }
        } catch (error) {
          openAlert();
        }
      };
      callApi();
    }
  }, [call]);

  const openAlert = () => {
    Alert.alert("Error", "No hay resultados", [{ text: "Ok" }]);
  };
  const hiddenKey = () => Keyboard.dismiss();

  const bg = { backgroundColor };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => hiddenKey()}>
        <View style={[styles.app, bg]}>
          <View style={styles.contain}>
            <Weather resultAPI={resultAPI} />
            <Form search={search} setSearch={setSearch} setCall={setCall} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
  },
  contain: {
    marginHorizontal: "2.5%",
  },
});

export default App;
