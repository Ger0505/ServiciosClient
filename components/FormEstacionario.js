import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Text,
  Label,
  CheckBox,
  Button,
  ListItem,
  Body
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Alert } from "react-native";
import { API, Session } from "../helpers";

const COSTO_X_LITRO = 10;

const FormEstacionario = ({ navigation, route }) => {
  const [litros, setLitros] = useState("");
  const [isLleno, setLleno] = useState(false);
  const [error, setError] = useState(false);
  const { idEmp, empresa } = route.params;

  const _onSubmit = async () => {
    if (litros === "" && !isLleno) {
      setError(true);
      return;
    }
    try {
      let usuario = await Session.getSession();
      if (usuario !== null) {
        let params = {
          tipo: "Estacionario",
          cantidad: isLleno ? -1 : parseInt(litros),
          precio: isLleno ? -1 : parseInt(litros) * COSTO_X_LITRO,
          descripcion: isLleno ? "Tanque Lleno" : "",
          empresa: idEmp,
          usuario: usuario._id
        };
        let res = API.getBody("ped/insert", "POST", params);
        if (res.hasOwnProperty("status")) console.log(res.msg);
        else
          Alert.alert(
            "Realización de pedido",
            "Su pedido fue registrado",
            [
              {
                text: "Cancel",
                onPress: () => {
                  navigation.navigate("ListaServicio");
                },
                style: "cancel"
              }
            ],
            { cancelable: true }
          );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <Text style={styles.title}>{empresa}</Text>
        <Text style={styles.subtitle}>Gas / Estacionario</Text>
        <Form style={styles.form}>
          <ListItem>
            <CheckBox
              checked={isLleno}
              color="green"
              onPress={() => {
                setLleno(!isLleno);
                setLitros("");
              }}
            />
            <Body>
              <Text>Llenado de tanque</Text>
            </Body>
          </ListItem>
          {isLleno ? (
            <Text style={{ color: "red" }}>
              Activar la opción de Lleno significa que el precio de llenado
              depende de lo requerido y el precio se establecerá hecho el
              servicio
            </Text>
          ) : (
            <>
              <Item floatingLabel>
                <Label>Número de Litros</Label>
                <Input
                  keyboardType="numeric"
                  value={litros}
                  onChangeText={(value) => setLitros(value)}
                  onChange={() => setError(false)}
                />
              </Item>
              <Text style={styles.costo}>
                Precio: ${litros * COSTO_X_LITRO}
              </Text>
            </>
          )}
          <Button warning onPress={_onSubmit} style={styles.btn}>
            <FontAwesome name="plus" size={24} color="white" />
          </Button>
          {error && <Text style={styles.textError}>Cantidad mayor a 0</Text>}
        </Form>
      </Content>
    </Container>
  );
};

export default FormEstacionario;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  content: {
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10
  },
  title: {
    fontSize: 30,
    marginTop: 20
  },
  subtitle: {
    fontSize: 20
  },
  form: {
    marginTop: 20
  },
  btn: {
    borderRadius: 50,
    padding: 13,
    marginRight: 0,
    marginTop: 20,
    alignSelf: "flex-end"
  },
  costo: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20
  }
});
