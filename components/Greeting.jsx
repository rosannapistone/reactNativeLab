import { Text } from 'react-native';

export default function Greeting(props) {
    
    return (
        <Text>Hej{" "}{props.value}</Text>
    )
}