import { View, Button, FlatList, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { getWins } from "../../data/winsStore";
//import WinItem from "../../components/WinItem";
import { useEffect, useState } from "react";

export default function HomeScreen() {
    const router = useRouter();
    const [wins, setWins] = useState(getWins());

    useEffect(() => {
        setWins(getWins());
    }, []);
    return (
        <View style={styles.container}>
            <Button
                title="Add New Win"
                onPress={() => router.push("/add")}
            />
            <FlatList
                data={wins}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <WinItem
                    win={item}
                    onPress={() =>
                        router.push({
                            pathname: "/details",
                                params: {
                                    text: item.text,
                                    date: item.date,
                                },

                        })
                    }
                  />
                )}
            />
            <Text style={styles.helperText}>
                Tap a win to see it's Details
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});


