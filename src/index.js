import React, {Component, Fragment} from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
// import styles from './styles';
import api from './services/api';
import linhas from './linhas/criaLinhas';

// import coordsRuby from './linhas/criaLinhas/coordsRuby';
// import coordsVermelha from './linhas/criaLinhas/coordsVermelha';
// import coordsAmarela from './linhas/criaLinhas/coordsAmarela';
// import coordsAzul from './linhas/criaLinhas/coordsAzul';
// import coordsDiamante from './linhas/criaLinhas/coordsDiamante';

const coordsRuby = linhas.coordsRuby;
const coordsVermelha = linhas.coordsVermelha;
const coordsAmarela = linhas.coordsAmarela;
const coordsAzul = linhas.coordsAzul;
const coordsDiamante = linhas.coordsDiamante;
const coordsCoral = linhas.coordsCoral;
const coordsEsmeralda = linhas.coordsEsmeralda;
const coordsJade = linhas.coordsJade;
const coordsLilas = linhas.coordsLilas;
const coordsPrata = linhas.coordsPrata;
const coordsSafira = linhas.coordsSafira;
const coordsTurquesa = linhas.coordsTurquesa;
const coordsVerde = linhas.coordsVerde;

import marcas from './markers/markers';

const markers = marcas;
export default class App extends Component {

    state = {
        mostraInfo: false,
        nomeEst: null,   
        data: ''  
    }

    async componentDidMount(){
        // this.subscribeToEvents();
        console.log('aq');
        const response = await api.get("pontos");
        this.setState({data: response.data});
        console.log('funcionou');
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

    pegarMarkers = () => {
        const dados = this.state.data;
        const pontos = dados.map(
            ponto => (
                <Marker 
                    coordinate={{
                        latitude: ponto.localizacao.coordinates[1],
                        longitude: ponto.localizacao.coordinates[0],
                    }}
                    anchor={{ x:1, y:1 }} 
                    >
                    {console.log(ponto.nome)}
                </Marker>
            )
        )


    }
  
    render(){
        const mostra = this.state.mostraInfo;
        
        return(
            
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    provider={PROVIDER_GOOGLE}
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
                {/* {this.pegarMarkers} */}
                {coordsRuby}
                {coordsAmarela}
                {coordsVermelha}
                {coordsAzul}
                {coordsDiamante}
                {coordsCoral}
                {coordsEsmeralda}
                {coordsJade}
                {coordsLilas}
                {coordsPrata}
                {coordsSafira}
                {coordsTurquesa}
                {coordsVerde}
              

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