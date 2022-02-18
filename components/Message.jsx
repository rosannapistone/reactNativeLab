import { StyleSheet, Text } from 'react-native';

export default function Message(props) {
    
    return (
        <Text style={styles.message}>
            What's your name?
        </Text>
    )
}

const styles = StyleSheet.create({
    message: {
        marginBottom: 20,
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
    }
})