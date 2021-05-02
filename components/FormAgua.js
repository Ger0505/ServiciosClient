import React, { useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Container, Content, Form, Input, Item, Text, Label, Button } from "native-base"
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Alert } from "react-native"
import { API } from "../helpers"

const COSTO_X_LITRO = 10

const FormAgua = ({ navigation, route }) => {
  const [cantidad, setCantidad] = useState('')
  const [error, setError] = useState(false);
  const { idEmp, empresa } = route.params

  const getSession = async () => {
    const jsonValue = await AsyncStorage.getItem('@usuario')
    if (jsonValue != null) {
      let user = JSON.parse(jsonValue)
      return user
    }
    return null
  }

  const _onSubmit = async () => {
    if (cantidad === '') {
      setError(true)
      return
    }
    try {
      let usuario = await getSession()
      if (usuario !== null) {
        let params = {
          tipo: 'Garrafón',
          cantidad: cantidad,
          precio: cantidad * COSTO_X_LITRO,
          descripcion: '',
          empresa: idEmp,
          usuario: usuario._id
        }
        let res = API.getBody("ped/insert", "POST", params)
        if (res.hasOwnProperty("status")) console.log(res.msg)
        else
          Alert.alert(
            'Realización de pedido', 'Su pedido fue registrado',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  navigation.navigate('ListaServicio')
                },
                style: 'cancel'
              },
            ],
            { cancelable: true },
          )
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <Text style={styles.title}>{empresa}</Text>
        <Text style={styles.subtitle}>Agua Purificada</Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Número de garrafones</Label>
            <Input keyboardType='numeric'
              value={cantidad}
              onChange={() => setError(false)}
              onChangeText={value => setCantidad(value)} />
          </Item>
          <Text style={styles.costo}>Precio: ${COSTO_X_LITRO * parseInt(cantidad)}</Text>
          <Button warning
            onPress={_onSubmit}
            style={styles.btn}>
            <FontAwesome name="plus" size={24} color="white" />
          </Button>
          {error && <Text style={styles.textError}>Cantidad mayor a 0</Text>}
        </Form>
      </Content>
    </Container>
  )
}

export default FormAgua

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  content: {
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 30,
    marginTop: 20
  },
  subtitle: {
    fontSize: 20,
  },
  form: {
    marginTop: 20
  },
  btn: {
    borderRadius: 50,
    padding: 13,
    marginRight: 0,
    marginTop: 20,
    alignSelf: 'flex-end'
  },
  costo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20
  },
  textError: {
    color: 'red',
    alignSelf: 'center',
    fontStyle: 'italic',
    fontSize: 12
  }
})
