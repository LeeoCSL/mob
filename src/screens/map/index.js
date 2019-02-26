import React, { Component, Fragment } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import api from "../../services/api";
import linhas from "../../linhas/criaLinhas";
import { Row } from "native-base";

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
  static navigationOptions = {
    header: null
  };
  state = {
    estacaoPesquisa: "",
    mostraInfo: "",
    nomeEst: null,
    region: {
      latitude: -23.5436226,
      longitude: -46.6514515,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134
    },
    data: [],
    estacoes: []
  };

  async componentDidMount() {
    // this.subscribeToEvents();
    console.log("response");
    const response = await api.get("/estacao/pontos");
    console.log("response2");
    console.log(response);
    this.setState({ data: response.data.data });
  }

  cliqueEst(nome, lat, long) {
    console.log("aq");
    this.setState(
      {
        mostraInfo: true,
        nomeEst: nome,
        region: {
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        }
      },
      () => console.log(this.state.mostraInfo)
    );
  }

  pegarMarker() {
    if (this.state.data != 0) {
      return this.state.data.map((ponto, index) => (
        <Marker
          coordinate={{
            latitude: ponto.localizacao.coordinates[1],
            longitude: ponto.localizacao.coordinates[0]
          }}
          anchor={{ x: 1, y: 1 }}
          key={index}
          onPress={() =>
            this.cliqueEst(
              ponto.nome,

              ponto.localizacao.coordinates[1],
              ponto.localizacao.coordinates[0]
            )
          }
        >
          {/* {console.log(ponto.nome)} */}
          {/* {this.setState({ estacoes: this.state.estacoes.concat(ponto.nome) });} */}
        </Marker>
      ));
    }
  }

  // populaEstacoes = nome => {
  //   let array = this.state.estacoes.concat(nome);
  //   this.setState({ estacoes: array });
  // };

  handleInputPesquisa = estacaoPesquisa => {
    this.setState({ estacaoPesquisa });
  };

  pesquisar() {
    const pesq = this.state.estacaoPesquisa;
    const stations = this.state.estacoes;
    for (let i = 0; i < stations.length; i++) {
      if (pesq == stations[i]) {
        console.log(stations[i]);
        return;
      }
    }
    console.log("nao encontramos essa estação");
  }

  render() {
    const republica = "republica";
    const mostra = this.state.mostraInfo;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}
        >
          {this.pegarMarker()}
          {console.log(this.state.estacoes)}
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

        <View style={styles.inputView}>
          <TextInput
            placeholder="pesquisar estação"
            style={styles.input}
            onChangeText={this.handleInputPesquisa}
            value={this.state.estacaoPesquisa}
          />
          <TouchableOpacity onPress={() => this.pesquisar()}>
            <Text style={styles.btnPesquisa}> > </Text>
          </TouchableOpacity>
        </View>
        {mostra ? (
          <View style={styles.infoEst}>
            <Text style={styles.title}>{this.state.nomeEst}</Text>
            <Text style={styles.escrita}>Há um problema nessa estação?</Text>
            <View style={styles.botoes}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ mostraInfo: null, nomeEst: null });
                }}
              >
                <Text style={styles.optNao}>Não</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.optSim}>Sim</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoEst: {
    alignItems: "center",
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000"
  },
  escrita: {
    fontSize: 14,
    marginTop: 10
  },
  botoes: {
    flexDirection: "row",
    marginTop: 20
  },
  optNao: {
    color: "#fff",
    backgroundColor: "#f00",
    fontWeight: "bold",
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16
  },
  optSim: {
    color: "#fff",
    backgroundColor: "#0f0",
    fontWeight: "bold",
    marginLeft: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    top: 0,
    left: 5,
    right: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    flex: 2,
    height: 36,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    backgroundColor: "white"
  },
  btnPesquisa: {
    flex: 1,
    fontSize: 30,
    alignSelf: "center",
    marginTop: 20
  }
});
