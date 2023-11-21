import { Text, StyleSheet, View } from "react-native";

const List = ({ data }) => {
    return (
        data.map((item) => {
            return <View key={item} style={styles.listItem}>
                <Text style={styles.itemText}>
                    {item}
                </Text>
            </View>
        })
    )
}


const styles = StyleSheet.create({
    listItem: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        // marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#F15152'
    },
    itemText: {
        color: 'white',
        textAlign: 'center'
    }
})
export default List;
