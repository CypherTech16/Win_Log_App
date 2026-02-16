import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { addWin } from "../../data/winsStore";
import { useRouter } from "expo-router";

export default function AddScreen() {
    const [text, setText] = useState("");
    const router = useRouter();

    const handleSave = () => {
        if (!text.trim()) {
            Alert.alert("Error, Win cannot be Empty..!!");
            return;
        }
        addWin(text);
        router.back();
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter you Today's Win .."
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <Button title="Save Win" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20},
    input: {
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
})