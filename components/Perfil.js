import React, { Component } from "react";
import { Container, Form, Item, Input, Content, Button, Text, Card, CardItem} from 'native-base';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
 
class Perfil extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={styles.title}>Configuración de Usuario</Text>
          <Form>
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
              <Input placeholder="Teléfono" />
            </Item>
            <Item rounded style={styles.input}>
              <FontAwesome name="map-marker" size={24} color="gray" />
              <Input placeholder="Dirección" />
            </Item>
            <Item rounded style={styles.input}>
              <Ionicons name="mail" size={16} color="gray" />
              <Input placeholder="Correo Electrónico" />
            </Item>
            <Button block>
              <Text>Guardar</Text>
            </Button>
            <Button info block>
              <Text>Resetear</Text>
            </Button>
            <Button danger block>
              <Text>Eliminar</Text>
            </Button>
          </Form>
          <Card style={styles.card}>
            <CardItem header>
              <Text style={styles.textPass}>Cambiar contraseña</Text>
            </CardItem>
            <Form style={styles.form}>
              <Item rounded style={styles.input}>
                <FontAwesome name="lock" size={24} color="gray" />
                <Input placeholder="Contraseña Actual" />
              </Item>
              <Item rounded style={styles.input}>
                <FontAwesome name="unlock-alt" size={24} color="gray" />
                <Input placeholder="Nueva Contraseña" />
              </Item>
              <Item rounded style={styles.input}>
                <FontAwesome name="unlock-alt" size={24} color="gray" />
                <Input placeholder="Confirmar Nueva Contraseña" />
              </Item>
              <Button warning block>
                <Text>Eliminar</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Perfil;

const styles = StyleSheet.create({
    title:{
      fontSize: 30,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10
    },
    textPass:{
      fontWeight: "bold"
    },
    input:{
      marginTop: 5,
      marginBottom: 5,
      paddingLeft: 10
    },
    form:{
      padding: 5
    },
    card:{
      marginTop:20
    }
  });