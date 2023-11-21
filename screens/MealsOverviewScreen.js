import { MEALS } from "../data/data";
import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
    const categoryId = route.params.CategoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) > 0;
    });

    return <View style={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={displayedMeals}
            keyExtractor={(item) => {
                return item.id
            }}
            renderItem={({ item }) => {
                return <MealItem
                    id={item.id}
                    title={item.title}
                    image={item.imageUrl}
                    duration={item.duration}
                    affordability={item.affordability}
                    complexity={item.complexity}
                ></MealItem>
            }}

        >

        </FlatList>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverviewScreen;

