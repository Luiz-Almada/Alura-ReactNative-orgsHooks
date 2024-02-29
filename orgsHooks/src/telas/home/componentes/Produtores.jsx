// import React, {useEffect, useState} from 'react';
import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

// import {carregaProdutores} from '../../../servicos/carregaDados';
import useProdutores from '../../../hooks/useProdutores';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  // const [titulo, setTitulo] = useState('');
  // const [lista, setLista] = useState([]);

  // //carrega apenas uma vez quando o componente é carregado
  // //quando aa segundo parâmetro, array, é vazio
  // useEffect(() => {
  //   const retorno = carregaProdutores();
  //   setTitulo(retorno.titulo);
  //   setLista(retorno.lista);
  //   //console.log(retorno);
  // }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      // renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      renderItem={({item}) => <Produtor {...item} />}      
      // keyExtractor={(nome) => nome}
      // ListHeaderComponent={() => <Text>{titulo}</Text> }
      ListHeaderComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
