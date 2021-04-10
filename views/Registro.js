import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { Form, Item, Input, Body, Text, Button, Container, Content } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../app.json'

class Registro extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <LinearGradient
            colors={[colors.main, colors.third]}
            // locations={[0.6, 0.8]}
            style={styles.background}
          >
            <View style={styles.middle}>
              <Text style={styles.textContainer}>Servicios</Text>
              <View style={styles.formArea}>
                <Text style={[styles.textContainer, styles.signin]}>Registro</Text>
                <Form style={styles.mainForm}>
                  <Item rounded style={styles.input}>
                    <FontAwesome name="user" size={23} color="gray" />
                    <Input placeholder="Nombre(s)" />
                  </Item>
                  <Item rounded style={styles.input}>
                    <FontAwesome name="user" size={23} color="gray" />
                    <Input placeholder="Apellidos" />
                  </Item>
                  <Item rounded style={styles.input}>
                    <FontAwesome name="mobile-phone" size={28} color="gray" />
                    <Input placeholder="Teléfono" keyboardType='numeric'  textContentType="telephoneNumber"/>
                  </Item>
                  <Item rounded style={styles.input}>
                    <FontAwesome name="map-marker" size={24} color="gray" />
                    <Input placeholder="Dirección" />
                  </Item>
                  <Item rounded style={styles.input}>
                    <Ionicons name="mail" size={16} color="gray" />
                    <Input placeholder="Correo Electrónico" keyboardType='email-address' />
                  </Item>

                  <Item rounded style={styles.input}>
                    <FontAwesome name="lock" size={24} color="gray" />
                    <Input placeholder="Contraseña" secureTextEntry={true}/>
                  </Item>
                  <Item rounded style={styles.input}>
                    <FontAwesome name="unlock-alt" size={24} color="gray" secureTextEntry={true} />
                    <Input placeholder="Confirmar Contraseña" />
                  </Item>

                  <Button block style={styles.mainBtn}>
                    <Text style={styles.btnText}>Registrar</Text>
                  </Button>
                </Form>
              </View>
            </View>
          </LinearGradient>
        </Content>
      </Container>
    )
  }
}

export default Registro;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    height: '100%',
    zIndex: 1
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  textContainer: {
    color: '#FCFDFF',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '10%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    top: '10%',
    paddingBottom: 50,
    marginBottom: 100
  },
  signin: {
    top: 0,
    color: '#2D3057',
    marginTop: 15,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontSize: 12,
  },
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    fontWeight: 'bold',
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
    marginTop: 50
  },
  mainBtn: {
    backgroundColor: colors.second,
    marginLeft: 2,
    marginRight: 2
  },
  btnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5
  }
});
