import React, { useState, useEffect } from "react";
import { Container, Card, CardItem, Text, Content, Body, Header, View } from "native-base";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from "../global.json";
import { API, Session } from "../helpers";
import { useFocusEffect } from "@react-navigation/native";

const ItemPedido = ({ data }) => (
  <Card key={data._id}>
    <CardItem header style={styles.header}>
      <Text style={(styles.textHeader, { flex: 2 })}>{data.tipo}</Text>
      <Text style={(styles.date, styles.textHeader, { flex: 2 })}>
        {" "}
        {data.fecha}
      </Text>
      <Text style={{ alignSelf: "flex-end" }}>{data.hora}</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text style={styles.title}>${data.precio}</Text>
        <Text style={styles.title}>Cantidad: {data.cantidad}</Text>
        <Text style={styles.text}>{data.descripcion}</Text>
        {
          data.repartidor ? (
            <View style={{flexDirection: "row"}}>
            <FontAwesome name="star" size={20} color="#fcc300" />
            <Text style={{fontStyle: "italic",fontSize: 15, marginLeft: 5}}>Asignado</Text>
            </View>
          ): null
        }
      </Body>
    </CardItem>
  </Card>
);

const ListaPedido = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      let usuario = await Session.getSession();
      if (usuario) {
        let res = await API.getData("ped/usu/" + usuario._id);
        setPedidos(res);
      }
    };

    getPedidos();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const getPedidos = async () => {
        let usuario = await Session.getSession();
        if (usuario) {
          let res = await API.getData("ped/usu/" + usuario._id);
          setPedidos(res);
        }
      };
      getPedidos();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Text style={{color: "white", fontWeight: 'bold', marginTop: 13, fontSize: 20}}>Pedidos Realizados</Text>
      </Header>
      <Content padder>
        {pedidos.map((ped) => (
          <ItemPedido data={ped} key={ped._id} />
        ))}
      </Content>
    </Container>
  );
};

export default ListaPedido;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.second
  },
  textHeader: {
    color: "black"
  },
  date: {
    fontStyle: "italic"
  },
  title: {
    fontWeight: "bold"
  },
  text: {
    textAlign: "justify"
  }
});
