import React, {Component} from 'react';
import Marker from 'react-native-maps';

export default class Republica extends Component{
    render(){
        return(
            <Marker 
                    coordinate={{
                        latitude:-23.5391515 ,
                        longitude: -46.651456,
                    }}
                    anchor={{ x:0, y:0 }} 
                    // onPress={() => {console.log('clique aqui')}}

                    >
                </Marker>
        )
    }
}