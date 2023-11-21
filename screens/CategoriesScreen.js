import { CATEGORIES } from "../data/data";
import { Text, FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
    const pressHandler = (categoryId) => {
        navigation.navigate('MealsOverview', {
            CategoryId: categoryId
        });
    }
    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => {
            return item.id
        }}
        numColumns={2}
        renderItem={({ item }) => {
            return <CategoryGridTile onPress={pressHandler} id={item.id} title={item.title} color={item.color}></CategoryGridTile>
        }}
    >
    </FlatList>
}
export default CategoriesScreen;