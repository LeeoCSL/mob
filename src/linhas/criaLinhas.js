import React from 'react';
import { Polyline } from 'react-native-maps';

const jsonRuby = require('./linhaRuby/linha-ruby.json');

const linhaRuby = jsonRuby.features.map(estacao => (
    estacao.geometry.coordinates.map(coordenada => (
            {latitude: coordenada[1],
            longitude: coordenada[0]}
        ))))
const coordsRuby = 
    linhaRuby.map(cord => (
        <Polyline
                strokeColor={jsonRuby.features[0].properties.stroke}
                strokeWidth={6}
                coordinates={cord}
                lineJoin={"bevel"}
                        />
        ))

const jsonVermelha = require('./linhaVermelha/linha-vermelha.json');


const linhaVermelha = jsonVermelha.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsVermelha = 
            linhaVermelha.map(cord => (
                <Polyline
                        strokeColor={jsonVermelha.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))

const jsonAmarela = require('./linhaAmarela/linha-amarela.json');
 

const linhaAmarela = jsonAmarela.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsAmarela = 
            linhaAmarela.map(cord => (
                <Polyline
                        strokeColor={jsonAmarela.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))

const jsonDiamante = require('./linhaDiamante/linha-diamante.json');

const linhaDiamante = jsonDiamante.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsDiamante = 
        linhaDiamante.map(cord => (
                <Polyline
                        strokeColor={jsonDiamante.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonAzul = require('./linhaAzul/linha-azul.json');

const LinhaAzul = jsonAzul.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsAzul = 
    LinhaAzul.map(cord => (
                <Polyline
                        strokeColor={jsonAzul.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonCoral = require('./linhaCoral/linha-coral.json');

const linhaCoral = jsonCoral.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsCoral = 
        linhaCoral.map(cord => (
                <Polyline
                        strokeColor={jsonCoral.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonEsmeralda = require('./linhaEsmeralda/linha-esmeralda.json');

const linhaEsmeralda = jsonEsmeralda.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsEsmeralda = 
        linhaEsmeralda.map(cord => (
                <Polyline
                        strokeColor={jsonEsmeralda.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))

const jsonJade = require('./linhaJade/linha-jade.json');

const linhaJade = jsonJade.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsJade = 
        linhaJade.map(cord => (
                <Polyline
                        strokeColor={jsonJade.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonLilas = require('./linhaLilas/linha-lilas.json');

const linhaLilas = jsonLilas.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsLilas = 
        linhaLilas.map(cord => (
                <Polyline
                        strokeColor={jsonLilas.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonPrata = require('./linhaPrata/linha_prata.json');

const linhaPrata = jsonPrata.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsPrata = 
        linhaPrata.map(cord => (
                <Polyline
                        strokeColor={jsonPrata.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonSafira = require('./linhaSafira/linha-safira.json');

const linhaSafira = jsonSafira.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsSafira = 
        linhaSafira.map(cord => (
                <Polyline
                        strokeColor={jsonSafira.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonTurquesa = require('./linhaTurquesa/linha-turquesa.json');

const linhaTurquesa = jsonTurquesa.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsTurquesa = 
        linhaTurquesa.map(cord => (
                <Polyline
                        strokeColor={jsonTurquesa.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))
const jsonVerde = require('./linhaVerde/linha-verde.json');

const linhaVerde = jsonVerde.features.map(estacao => (
            estacao.geometry.coordinates.map(coordenada => (
                    {latitude: coordenada[1],
                    longitude: coordenada[0]}
                ))))
const coordsVerde = 
        linhaVerde.map(cord => (
                <Polyline
                        strokeColor={jsonVerde.features[0].properties.stroke}
                        strokeWidth={6}
                        coordinates={cord}
                                />
                ))

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
    coordsVerde,

}

export default linhas