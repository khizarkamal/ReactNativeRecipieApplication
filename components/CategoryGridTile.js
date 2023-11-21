import { View, Pressable, Text, StyleSheet } from "react-native";

// import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ id, title, color, onPress }) => {
    // const navigation = useNavigation();
    // console.log("Category Tile----", navigation);
    return <View style={[styles.gridItem, { backgroundColor: color }]}>
        <Pressable onPress={() => onPress(id)} android_ripple={{ color: color }} style={({ pressed }) => [styles.button,
        pressed ? styles.pressed : null
        ]}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View >
}
const styles = StyleSheet.create({
    gridItem: {
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        elevation: 4,
        // backgroundColor: 'white'
    },
    button: {
        flex: 1
    },
    pressed: {
        opacity: 0.25
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default CategoryGridTile;