import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function WinItem({ win, onPress}: any) {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.row}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>{win.text}</Text>
                <Text style={styles.arrow}>></Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#e0f7fa",
    marginVertical: 5,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
  arrow: {
    marginLeft: "auto",
    fontSize: 18,
    color: "#555",
  },
});

