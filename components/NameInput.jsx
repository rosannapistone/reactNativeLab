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
        backgroundColor: 'coral',
        borderRadius: 10,
        marginBottom: 1,
        color: 'white',
        width: 100,
        padding: 10
    }
})