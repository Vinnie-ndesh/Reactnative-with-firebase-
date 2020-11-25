import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");

interface Props {
  title: string;
  onPress: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} onPress={props.onPress}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 20,
    padding: 10,
  },
  text: { color: "white" },
});
export default Button;
