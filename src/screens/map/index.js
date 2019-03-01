import React, { Component, Fragment } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
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

const KEYS_TO_FILTERS = ["nome"];

export default class Map extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    estacaoPesquisa: "",
    mostraInfo: "",
    nomeEst: null,
    region: {
      latitude: -0.0,
      longitude: -0.0,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134
    },
    data: [],
    estacoes: [],
    a: "",
    searchTerm: "",
    pontos: [],
    scroll: "",
    markers: false
  };

  async componentDidMount() {
    // this.subscribeToEvents();
    // console.log("response");
    const response = await api.get("/estacao/pontos");
    // console.log("response2");
    console.log(response);
    this.setState({ data: response.data.data });

    this.ohGod();
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
      return this.state.data.map((ponto, index) => {
        console.log(ponto.Status);
        if (ponto.Status) {
          return (
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
            />
          );
        } else {
          return (
            <Marker
              coordinate={{
                latitude: ponto.localizacao.coordinates[1],
                longitude: ponto.localizacao.coordinates[0]
              }}
              pinColor={"#00f"}
              anchor={{ x: 1, y: 1 }}
              key={index}
              onPress={() =>
                this.cliqueEst(
                  ponto.nome,
                  ponto.localizacao.coordinates[1],
                  ponto.localizacao.coordinates[0]
                )
              }
            />
          );
        }
      });
    }
  }

  populaEstacoes = nome => {
    let array = this.state.estacoes.concat(nome);
    this.setState({ estacoes: array });
  };

  handleInputPesquisa = estacaoPesquisa => {
    this.setState({ estacaoPesquisa });
  };

  pesquisar() {
    let p = this.rodarPesquisa();
    console.log("p", p);
    for (let i = 0; i < p.length; i++) {
      if (this.state.estacaoPesquisa == p[i].nome) {
        this.setState({
          mostraInfo: true,
          nomeEst: p[i].nome,
          region: {
            latitude: p[i].localizacao.coordinates[1],
            longitude: p[i].localizacao.coordinates[0],
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      }
    }
  }

  // if (this.state.estacaoPesquisa == p.nome) {
  //   console.log("chegou aq");
  //   this.setState({
  //     mostraInfo: true,
  //     nomeEst: p.nome,
  //     region: {
  //       latitude: p.localizacao.coordinates[1],
  //       longitude: p.localizacao.coordinates[0],
  //       latitudeDelta: 0.0143,
  //       longitudeDelta: 0.0134
  //     }
  //   });
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        const location = JSON.stringify(position);
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          },
          a: true
        });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  searchUpdated(term) {
    this.setState({ searchTerm: term });
    if (term.length > 0) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: false });
    }
  }

  rodarPesquisa() {
    if (this.state.data != 0) {
      return this.state.data.map(ponto => ponto);
    }
  }

  ohGod() {
    let ponto = this.rodarPesquisa();
    console.log("ponto", ponto);

    this.setState({ pontos: ponto }, () =>
      console.log("eita", this.state.pontos)
    );
    // console.log("aaaa", nomes);
    // return nomes;
  }

  godPlease(ponto) {
    this.setState({
      mostraInfo: true,
      nomeEst: ponto.nome,
      region: {
        latitude: ponto.localizacao.coordinates[1],
        longitude: ponto.localizacao.coordinates[0],
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
      }
    });
  }

  mostraMarker() {
    // console.log("esse vai da undefined", this.mapView.props.longitudeDelta);
    // console.log("esse vai da certo", this.mapView.props.region.latitudeDelta);
    longD = this.mapView.props.region.longitudeDelta;
    latD = this.mapView.props.region.latitudeDelta;
    if (this.state.markers) {
      this.setState({
        markers: false
      });
    } else {
      this.setState({
        markers: true
      });
    }
  }

  render() {
    const republica = "republica";
    const mostra = this.state.mostraInfo;
    const pontos = this.state.pontos;
    const scroll = this.state.scroll;
    const filteredPontos = pontos.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <View style={{ flex: 1 }}>
        {this.state.a ? null : this.findCoordinates()}

        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}
        >
          {this.state.markers ? this.pegarMarker() : null}

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
        <TouchableOpacity
          style={{ backgroundColor: "transparent" }}
          onPress={() => {
            this.mostraMarker();
          }}
        >
          <Text
            style={{
              fontSize: 40,
              alignSelf: "flex-end",
              backgroundColor: "transparent"
            }}
          >
            Ligar
          </Text>
        </TouchableOpacity>
        {/* <TextInput
            placeholder="pesquisar estação"
            style={styles.input}
            onChangeText={this.handleInputPesquisa}
            value={this.state.estacaoPesquisa}
          />
          <TouchableOpacity onPress={() => this.pesquisar()}>
            <Text style={styles.btnPesquisa}> > </Text>
          </TouchableOpacity> */}
        <View style={styles.inputView}>
          <SearchInput
            style={styles.input}
            onChangeText={term => {
              this.searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="Digite a estação"
          />

          {scroll ? (
            <ScrollView style={styles.scrollStyle}>
              {filteredPontos.map(pontos => {
                return (
                  <TouchableOpacity onPress={() => this.godPlease(pontos)}>
                    <View>
                      <Text>{pontos.nome}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : null}
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
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trouble")}
              >
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
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 5,
    right: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    margin: 10
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
    borderColor: "#000",
    backgroundColor: "white"
  },
  btnPesquisa: {
    flex: 1,
    fontSize: 30,
    alignSelf: "center",
    marginTop: 20
  },
  scrollStyle: {
    marginTop: 0,
    flexWrap: "wrap",
    flexGrow: 0,
    maxHeight: 100
  }
});
