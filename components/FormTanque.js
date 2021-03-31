import React, { Component } from "react";
import { Container, Content, Form, Input, Item, Text, Label, Picker, Icon, Button } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

class FormTanque extends Component {
  state = {
    tanques: '0',
    costo: 10
  };

  handleTanques = value =>{
    if(/[1-9]+$/.test(value)){
      this.setState({tanques: value});
    }else if(value == ''){
      this.setState({tanques: ''});
    }else{
      this.setState({tanques: '0'});
    }
  }


  handleCosto = value =>{
    this.setState({costo: value});
  }

  handleSubmit = () =>{
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Text style={styles.title}>Seta Gasesosa</Text>
          <Text style={styles.subtitle}>Gas / Tanque</Text>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Número de Tanques</Label>
              <Input onChangeText={this.handleTanques} keyboardType='numeric' value={this.state.tanques}/>
            </Item>
            <Item picker style={{marginLeft: 15, marginTop: 10}}>
              <Label>No. de Litros</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.costo}
                onValueChange={this.handleCosto}
              >
                <Picker.Item label="10" value="10" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="50" value="50" />
              </Picker>
            </Item>
            <Text style={styles.costo}>Precio: ${this.state.costo * this.state.tanques}</Text>
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

export default FormTanque;

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
