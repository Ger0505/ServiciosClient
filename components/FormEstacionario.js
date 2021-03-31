import React, { Component } from "react";
import { Container, Content, Form, Input, Item, Text, Label, CheckBox, Button, ListItem, Body } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

class FormEstacionario extends Component {
  state = {
    litros: '0',
    costo: 10,
    isLleno: false
  };

  handleLitros = value =>{
    if(/[1-9]+$/.test(value)){
        this.setState({litros: value});
      }else if(value == ''){
        this.setState({litros: ''});
      }else{
        this.setState({litros: '0'});
      }
  }

  handleLleno = () =>{
      this.setState({isLleno: !this.state.isLleno});
  }

  handleSubmit = () =>{
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Text style={styles.title}>Gasesosa "Flama Azul"</Text>
          <Text style={styles.subtitle}>Gas / Estacionario</Text>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Número de Litros</Label>
              <Input onChangeText={this.handleLitros} keyboardType='numeric' value={this.state.litros}/>
            </Item>
            <ListItem>
                <CheckBox checked={this.state.isLleno} color="green" onPress={this.handleLleno}/>
                <Body>
                <Text>Lleno</Text>
                </Body>
            </ListItem>
            <Text style={styles.costo}>Precio: ${this.state.litros * this.state.costo}</Text>
            <Button warning 
              onPress={this.handleSubmit}
              style={styles.btn}>
                <FontAwesome name="plus" size={24} color="white"/>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default FormEstacionario;

const styles = StyleSheet.create({
  container:{
      justifyContent:"center"
  },
  content:{
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
  form:{
    marginTop: 20
  },
  btn:{
    borderRadius: 50,
    padding: 13,
    marginRight: 0,
    marginTop: 20,
    alignSelf: 'flex-end'
  },
  costo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20
  }
});
