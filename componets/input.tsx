import React, {FC} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {TextInput} from "react-native-gesture-handler";

const {height, width} = Dimensions.get('screen')

//creting an inerface like properties zake
interface Props {
    placeholder: string
    secureTextEntry?: boolean
    onChageText: (text: string) => void
}

const Input: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputs} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={props.onChageText}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        alignSelf: "center",
        marginVertical:10


    },
    inputs: {
        padding: 15,
    }
})
export default Input;