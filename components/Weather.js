import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Weather = ({ resultAPI }) => {
  const { name, main } = resultAPI;

  if (!name) {
    return null;
  }
  const kelvin = 273.15;

  return (
    <>
      <View style={styles.weather}>
        <Text style={[styles.text, styles.now]}>
          {parseInt(main.temp - kelvin)}
          <Text style={styles.temperature}>&#x2103;</Text>
          <Image
            style={{ width: 66, height: 58 }}
            source={{
              uri: `http://openweathermap.org/img/w/${resultAPI.weather[0].icon}.png`,
            }}
          />
        </Text>
        <View style={styles.temperatures}>
          <Text style={styles.text}>
            Min:
            <Text style={styles.temperature}>{parseInt(main.temp_min - kelvin)} &#x2103;</Text>
          </Text>
          <Text style={styles.text}>
            {" "}
            Max:
            <Text style={styles.temperature}>{parseInt(main.temp_max - kelvin)} &#x2103;</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  weather: {
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginRight: 20,
  },
  now: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temperatures: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Weather;
