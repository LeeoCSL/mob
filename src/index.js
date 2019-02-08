import React, {Component, Fragment} from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
// import styles from './styles';
import linhaVermelha from './linhas/linhaVermelha/LinhaVermelha';

const jsonVermelha = require('./linhas/linhaVermelha/linha-vermelha');





const linhas = jsonVermelha.features.map(estacao => (
        estacao.geometry.coordinates.map(coordenada => (
                    // console.log(coordenada)
                {latitude: coordenada[1],
                longitude: coordenada[0]}
            )
        )
   
   )
)

const coords = 
        linhas.map(cord => (
            <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={cord}
                            >
            { console.log('coord', cord)}

                            </Polyline>
            )
        )
    // console.log("linhas", linhas)

export default class App extends Component {

    state = {
        coords:[
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
        ],
        mostraInfo: false,
        nomeEst: null,
        
            
    }

    cliqueRepublica = (nome) =>  {
        // console.log('pq eu te tirei daqui?')
       
        // this.setState({mostraInfo:true}, () =>{
        //     console.log('CCC', this.state.mostraInfo)
        // })
    }

   

    marcarEstacoes = () => {
        this.state.coords.map(
            
            )
        
    }
  

    render(){
        const mostra = this.state.mostraInfo;

       
       
        const marcas = this.state.coords.map(
            coord => (
                <Marker 
                    coordinate={{
                        latitude:coord.latitude ,
                        longitude: coord.longitude,
                    }}
                    anchor={{ x:0, y:0 }} 
                    onPress={() => {this.setState({mostraInfo:true, nomeEst: coord.nome})}}
                    >
                    {/* {console.log(coord.nome)} */}
                </Marker>
        )
        )
        return(
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: -23.5436226,
                        longitude: -46.6514515,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }}
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.mapView = el}
                        
                >
               {marcas}
               {/* {console.log('aqui')} */}
               {coords}
               {console.log(coords)}

               {/* <Marker 
                    coordinate={{
                        latitude:-23.5391515 ,
                        longitude: -46.651456,
                    }}
                    anchor={{ x:0, y:0 }} 
                    onPress={() => {this.setState({mostraInfo:true, nomeEst:"República"})}}
                    >
                </Marker>
                    
                <Marker 
                     coordinate={{
                        latitude:-23.5380181 ,
                        longitude: -46.6463978,
                    }}
                    anchor={{ x:1, y:1 }} 
                    onPress={() => {this.setState({mostraInfo:true, nomeEst:"Santa Cecília"})}}
                    >
                </Marker> */}
              
                {/* <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.CorinthiansAteArtur}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.ArturAtePatriarca}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.PatriarcaAteGuilhermina}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.GuilherminaAteVilaMatilde}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.VilaMatildeAtePenha}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.PenhaAteCarrao}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.CarraoAteTatuape}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.TatuapeAteBelem}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.BelemAteBresser}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.BresserAteBras}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.BrasAtePedroII}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.PedroIIAteSe}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.SeAteAnhangabau}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.AnhangabauAteRepublica}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.RepublicaAteSantaCecilia}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.SantaCeciliaAteMarechal}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.MarechalAteBarraFunda}
                /> */}
                       

                </MapView>
 
                {mostra ? 
                (
                   <View
                   style={styles.infoEst}>
                   <Text
                   style={styles.title}
                   >{this.state.nomeEst}</Text>
                   <Text style={styles.escrita}>Há um problema nessa estação?</Text>
                <View style={styles.botoes}>
                <TouchableOpacity 
                     onPress={() => {this.setState({mostraInfo: null, nomeEst: null})}}
                    >
                    <Text style={styles.optNao}>Não</Text>
                </TouchableOpacity>
                    <TouchableOpacity
                // onPress={() => {}}
                >
                    <Text style={styles.optSim}>Sim</Text>
                </TouchableOpacity>
                </View>
                   </View>
                ): (
               null
                )}
            </View>

        )
    }
}



const styles = StyleSheet.create({
    infoEst:{
        alignItems: 'center',
        padding: 20

    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    escrita:{
        fontSize: 14,
        marginTop: 10,
    },
    botoes:{
        flexDirection: 'row',
        marginTop: 20
    },  
    optNao:{
        color: '#fff',
        backgroundColor: '#f00',
        fontWeight: 'bold',
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 16
    },
    optSim:{
        color: '#fff',
        backgroundColor: '#0f0',
        fontWeight: 'bold',
        marginLeft: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,        
        fontSize: 16
    },
})