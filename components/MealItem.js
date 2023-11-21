import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({ title, image, id, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    const handlePress = (mealId) => {
        navigation.navigate('MealDetail', { mealID: mealId, title: title });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable onPress={() => handlePress(id)} android_ripple={{ color: '#ccc ' }} style={({ pressed }) => {
                return pressed ? { opacity: 0.25 } : null
            }} >
                <View>
                    <Image style={styles.image} source={{ uri: image }}>
                    </Image>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <MealDetails duration={duration} affordability={affordability} complexity={complexity}></MealDetails>
            </Pressable >
        </View >
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
})
export default MealItem;