import React from 'react';
import { Marker } from 'react-native-maps';

const coords = [
    {
        latitude: -23.5391515,
        longitude: -46.651456,
        nome: 'republica'
    },
    {
        latitude: -23.5380181,
        longitude: -46.6463978,
        nome: 'santa cecilia'
    }
]

export const marcas = coords.map(
    coord => ( 
        <Marker 
            coordinate={{
                latitude:coord.latitude ,
                longitude: coord.longitude,
            }}
            anchor={{ x:1, y:1 }} 
            >
            {/* {console.log(coord.nome)} */}
        </Marker>
)
)
