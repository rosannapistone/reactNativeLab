import { StyleSheet, Text } from 'react-native';

export default function Greeting(props) {
    
    return (
        <Text style={styles.greeting}>
            Hello{" "}{props.value}!
        </Text>
    )
}

const styles = StyleSheet.create({
    greeting: {
        marginBottom: 10,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    }
})