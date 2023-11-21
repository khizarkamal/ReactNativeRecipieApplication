import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";

import SubTitle from "../components/Subtitle";
import List from "../components/List";

const MealDetailScreen = () => {
    const { params: { mealID } } = useRoute();
    const meal = MEALS.find((meal) => {
        return meal.id === mealID;
    });

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: meal.imageUrl }}></Image>
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails duration={meal.duration} affordability={meal.affordability} complexity={meal.complexity}></MealDetails>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <SubTitle title="Ingredients"></SubTitle>
                    <List data={meal.ingredients}></List>
                    <SubTitle title="Steps"></SubTitle>
                    <List data={meal.steps}></List>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    container: {
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    },
    innerContainer: {
        width: '80%',
        marginBottom: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
})

export default MealDetailScreen;