import { Button } from 'react-native';

export default function ClickButton(props) {

  

    return (
        <Button color="#f194ff" title={props.submit} onPress={() => props.onClick()} />            
    )
    
}





