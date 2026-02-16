import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
    const { text, date } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Win:</Text>
            <Text>{text}</Text>
            <Text style={styles.title}>Date:</Text>
            <Text>{date}</Text>
        </View>
    );
}
const styles =StyleSheet.create({
    container: { padding: 20},
    title: {
        fontWidth: "bold",
        marginTop: 10,
    },
});