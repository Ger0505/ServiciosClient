import React, { Component } from "react";
import { Container, Content, Form, Input, Item, Text, Label, Picker, Icon, Button } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

class FormAgua extends Component {
  state = {
    garrafones: '0',
    costo: 10
  };

  handleGarrafones = value =>{
    if(/[1-9]+$/.test(value)){
      this.setState({garrafones: value});
    }else if(value == ''){
      this.setState({garrafones: ''});
    }else{
      this.setState({garrafones: '0'});
    }
  }

  handleSubmit = () =>{
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Text style={styles.title}>Gugar</Text>
          <Text style={styles.subtitle}>Agua Purificada</Text>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Número de garrafones</Label>
              <Input onChangeText={this.handleGarrafones} keyboardType='numeric' value={this.state.garrafones}/>
            </Item>
            <Text style={styles.costo}>Precio: ${this.state.costo * this.state.garrafones}</Text>
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

export default FormAgua;

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
