import { Text, StyleSheet } from "react-native";
const SubTitle = ({ title }) => {
    return <Text style={styles.subTitle}>
        {title}
    </Text>
}

const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 6,
        textAlign: 'center',
        borderBottomColor: '#F15152',
        borderBottomWidth: 1,
        padding: 4,
        marginHorizontal: 'auto',
        color: '#F15152'
    }
})


export default SubTitle;