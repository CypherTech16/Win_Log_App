import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options {{ title: "Home"}} />
            <Tabs.Screen name="add" options {{ title: "Add Win"}} />
        </Tabs>
    );
}