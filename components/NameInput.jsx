import { StyleSheet, TextInput } from 'react-native';

export default function NameInput(props) {
    
    return (
        
        <TextInput style={styles.input}
            onChangeText={newInput => props.setInput(newInput)}
        >   
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'lightcoral',
        borderRadius: 10,
        marginBottom: 20,
        color: 'white',
        width: 150,
        height: 30,
        padding: 5,
        paddingLeft: 20
    }
})