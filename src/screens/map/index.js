import React, {Component, Fragment} from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import api from '../../services/api';
import linhas from '../../linhas/criaLinhas';

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

export default class Map extends Component {
    
    state = {
        mostraInfo: '',
        nomeEst: null,
        region: {latitude: -23.5436226,
            longitude: -46.6514515,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134},
        data: []
    }

    async componentDidMount(){
        // this.subscribeToEvents();
        console.log('response');
        const response = await api.get("/estacao/pontos");
        console.log('response2');
        console.log(response);
        this.setState({data: response.data.data});
    }

    cliqueEst(nome, lat, long){
        console.log('aq')
        this.setState({
            mostraInfo: true,
            nomeEst: nome,
            region:{
                latitude: lat,
            longitude: long,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
            }
        }, () => console.log(this.state.mostraInfo));
    }

    pegarMarker() {
        if(this.state.data != 0){
            return this.state.data.map( ponto => (
                <Marker
                    coordinate={{
                        latitude: ponto.localizacao.coordinates[1],
                        longitude: ponto.localizacao.coordinates[0],
                    }}
                    anchor={{ x:1, y:1 }}
                    title={ponto.nome}
                    onPress={() => this.cliqueEst(ponto.nome, 
                        ponto.localizacao.coordinates[1],
                        ponto.localizacao.coordinates[0]
                        )}/>
            ))
        }
    }

    render(){
        const mostra = this.state.mostraInfo;
        return(
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    provider={PROVIDER_GOOGLE}
                    region={
                        this.state.region
                    }
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.mapView = el}>
                
                    {this.pegarMarker()}
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
                            <TouchableOpacity>
                                <Text style={styles.optSim}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                   </View>
                ) : 
                (
                    null
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoEst:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
    },
    escrita:{
        fontSize: 14,
        marginTop: 10,
    },
    botoes:{
        flexDirection: 'row',
        marginTop: 20,
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
        fontSize: 16,
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
        fontSize: 16,
    },
})
