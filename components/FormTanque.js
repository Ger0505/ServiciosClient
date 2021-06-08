import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Text,
  Label,
  Picker,
  Icon,
  Button
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Alert } from "react-native";
import { API, Session } from "../helpers";

const FormTanque = ({ navigation, route }) => {
  const [tanques, setTanques] = useState("0");
  const [litros, setLitros] = useState("");
  const [costo, setCosto] = useState(0);
  const [error, setError] = useState("");
  const { idEmp, empresa } = route.params;

  const _onSubmit = async () => {
    if (tanques === "" || litros === "") {
      setError("Todo campo es requerido");
      return;
    } else if (parseInt(tanques) <= 0 || isNaN(parseInt(tanques))) {
      setError("Tanques mayor a 0");
      return;
    }
    try {
      let usuario = await Session.getSession();
      if (usuario !== null) {
        let params = {
          tipo: "Tanque",
          cantidad: parseInt(tanques),
          precio: parseInt(tanques) * parseFloat(costo),
          descripcion: litros,
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

  const _changeLitros = (value) => {
    if (value === "10") setLitros("10 Litros");
    else if (value === "20") setLitros("20 Litros");
    else if (value === "30") setLitros("30 Litros");
    else if (value === "40") setLitros("40 Litros");
    else if (value === "50") setLitros("50 Litros");
    else setLitros("");
    setCosto(value);
  };

  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <Text style={styles.title}>{empresa}</Text>
        <Text style={styles.subtitle}>Gas / Tanque</Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Número de Tanques</Label>
            <Input
              keyboardType="numeric"
              value={tanques}
              onChangeText={(value) => setTanques(value)}
              onChange={() => setError("")}
            />
          </Item>
          <Item picker style={{ marginLeft: 15, marginTop: 10 }}>
            <Label>No. de Litros</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={costo}
              onValueChange={_changeLitros}
            >
              <Picker.Item label="Selecciona" value="" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="50" value="50" />
            </Picker>
          </Item>
          <Text style={styles.costo}>
            Precio: ${parseFloat(costo) * parseInt(tanques)}
          </Text>
          <Button warning onPress={_onSubmit} style={styles.btn}>
            <FontAwesome name="plus" size={24} color="white" />
          </Button>
          {error !== "" && <Text style={styles.textError}>{error}</Text>}
        </Form>
      </Content>
    </Container>
  );
};

export default FormTanque;

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
  },
  textError: {
    color: "red",
    alignSelf: "center",
    fontStyle: "italic",
    fontSize: 12
  }
});
