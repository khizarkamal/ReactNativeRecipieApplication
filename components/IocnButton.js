import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ icon, color, onPress }) => {
    return (
        <Pressable style={({ pressed }) => {
            return pressed ? styles.pressed : null
        }}
            onPress={onPress}
        >
            <Ionicons name={icon} color={color} size={24}></Ionicons>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.25
    }
})
export default IconButton;