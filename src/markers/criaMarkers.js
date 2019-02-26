import api from '../services/api';

const response =  api.get("/estacao/pontos");
console.log(response.data.data[0].localizacao.coordinates[0]);
const marcas

if(response.data > 0)
{marcas = response.data.data.map( ponto => (
        <Marker
                    coordinate={{
                        latitude: ponto.localizacao.coordinates[1],
                        longitude: ponto.localizacao.coordinates[0],
                    }}
                    anchor={{ x:1, y:1 }}
                    key={ponto.key}
                    >
                    {console.log(ponto.nome)}
                </Marker>
    ))
                }
export default marcas;