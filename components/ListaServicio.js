import React, { Component } from 'react';
import { Container, Item, Input, Button, Text, Header, Icon, Content, Card, Thumbnail, CardItem} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import imgDefault from './../assets/1.png';

class ListaServicio extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Header searchBar rounded style={styles.search}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder>
          <Card>
           <CardItem button  onPress={() => navigation.navigate('FormTanque')}>
           <Grid>
              <Col size={35}><Thumbnail square source={imgDefault} style={styles.img}/></Col>
              <Col size={65}>
                <Text style={styles.title}>Gas / Tanque</Text>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi dui.
                  Maecenas.
                </Text>
                {/* <Button rounded success transparent>
                  <FontAwesome name="plus" size={24} color="black"/>
                </Button> */}
              </Col>
            </Grid>
           </CardItem>
          </Card>
          <Card>
           <CardItem button  onPress={() => navigation.navigate('FormEstacionario')}>
           <Grid>
              <Col size={35}><Thumbnail square source={imgDefault} style={styles.img}/></Col>
              <Col size={65}>
                <Text style={styles.title}>Gas / Estacionario</Text>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi dui.
                  Maecenas.
                </Text>
              </Col>
            </Grid>
           </CardItem>
          </Card>
          <Card>
           <CardItem button  onPress={() => navigation.navigate('FormAgua')}>
           <Grid>
              <Col size={35}><Thumbnail square source={imgDefault} style={styles.img}/></Col>
              <Col size={65}>
                <Text style={styles.title}>Agua Purificada</Text>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi dui.
                  Maecenas.
                </Text>
              </Col>
            </Grid>
           </CardItem>
          </Card>
          </Content>
      </Container>
    );
  }
}

export default ListaServicio;
{/* <Thumbnail source= {require(`../images/${person.id}.jpg`)} /> */}
const styles = StyleSheet.create({
  search:{
    backgroundColor: '#f37d10'
  },
  img:{
    height: 100,
    width: 100
  },
  title:{
    fontWeight: 'bold'
  },
  text:{
    textAlign: 'justify'
  }
});