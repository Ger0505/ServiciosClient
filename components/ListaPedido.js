import React, { Component } from 'react';
import { Container, Card, CardItem, Text, Content, Body} from 'native-base';
import { StyleSheet } from 'react-native';

class ListaPedido extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
        <Content padder>
        <Card>
          <CardItem header style={styles.header}>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}> 05-05-1999</Text>
          </CardItem>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header style={styles.header}>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}> 05-05-1999</Text>
          </CardItem>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header style={styles.header}>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}> 05-05-1999</Text>
          </CardItem>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header style={styles.header}>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}> 05-05-1999</Text>
          </CardItem>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        </Content>
      </Container>
        );
    }
}
 
export default ListaPedido;

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'red',
  },
  textHeader:{
    color: 'white'
  },
  date:{
    fontStyle: 'italic'
  },
  title:{
    fontWeight: 'bold'
  },
  text:{
    textAlign: 'justify'
  }
});