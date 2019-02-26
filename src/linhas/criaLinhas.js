import React from "react";
import { Polyline } from "react-native-maps";

const jsonRuby = require("./linhaRuby/linha-ruby.json");

const linhaRuby = jsonRuby.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsRuby = linhaRuby.map((cord, index) => (
  <Polyline
    strokeColor={jsonRuby.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    lineJoin={"bevel"}
    key={index}
  />
));

const jsonVermelha = require("./linhaVermelha/linha-vermelha.json");

const linhaVermelha = jsonVermelha.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsVermelha = linhaVermelha.map((cord, index) => (
  <Polyline
    strokeColor={jsonVermelha.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));

const jsonAmarela = require("./linhaAmarela/linha-amarela.json");

const linhaAmarela = jsonAmarela.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsAmarela = linhaAmarela.map((cord, index) => (
  <Polyline
    strokeColor={jsonAmarela.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));

const jsonDiamante = require("./linhaDiamante/linha-diamante.json");

const linhaDiamante = jsonDiamante.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsDiamante = linhaDiamante.map((cord, index) => (
  <Polyline
    strokeColor={jsonDiamante.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonAzul = require("./linhaAzul/linha-azul.json");

const LinhaAzul = jsonAzul.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsAzul = LinhaAzul.map((cord, index) => (
  <Polyline
    strokeColor={jsonAzul.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonCoral = require("./linhaCoral/linha-coral.json");

const linhaCoral = jsonCoral.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsCoral = linhaCoral.map((cord, index) => (
  <Polyline
    strokeColor={jsonCoral.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonEsmeralda = require("./linhaEsmeralda/linha-esmeralda.json");

const linhaEsmeralda = jsonEsmeralda.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsEsmeralda = linhaEsmeralda.map((cord, index) => (
  <Polyline
    strokeColor={jsonEsmeralda.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));

const jsonJade = require("./linhaJade/linha-jade.json");

const linhaJade = jsonJade.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsJade = linhaJade.map((cord, index) => (
  <Polyline
    strokeColor={jsonJade.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonLilas = require("./linhaLilas/linha-lilas.json");

const linhaLilas = jsonLilas.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsLilas = linhaLilas.map((cord, index) => (
  <Polyline
    strokeColor={jsonLilas.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonPrata = require("./linhaPrata/linha_prata.json");

const linhaPrata = jsonPrata.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsPrata = linhaPrata.map((cord, index) => (
  <Polyline
    strokeColor={jsonPrata.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonSafira = require("./linhaSafira/linha-safira.json");

const linhaSafira = jsonSafira.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsSafira = linhaSafira.map((cord, index) => (
  <Polyline
    strokeColor={jsonSafira.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonTurquesa = require("./linhaTurquesa/linha-turquesa.json");

const linhaTurquesa = jsonTurquesa.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsTurquesa = linhaTurquesa.map((cord, index) => (
  <Polyline
    strokeColor={jsonTurquesa.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));
const jsonVerde = require("./linhaVerde/linha-verde.json");

const linhaVerde = jsonVerde.features.map(estacao =>
  estacao.geometry.coordinates.map(coordenada => ({
    latitude: coordenada[1],
    longitude: coordenada[0]
  }))
);
const coordsVerde = linhaVerde.map((cord, index) => (
  <Polyline
    strokeColor={jsonVerde.features[0].properties.stroke}
    strokeWidth={6}
    coordinates={cord}
    key={index}
  />
));

const linhas = {
  coordsRuby,
  coordsAmarela,
  coordsVermelha,
  coordsAzul,
  coordsDiamante,
  coordsCoral,
  coordsEsmeralda,
  coordsJade,
  coordsLilas,
  coordsPrata,
  coordsSafira,
  coordsTurquesa,
  coordsVerde
};

export default linhas;
