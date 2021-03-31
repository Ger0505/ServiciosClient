import React, { Component } from 'react';
import { Container, Card, CardItem, Text, Content, Body} from 'native-base';
import { StyleSheet } from 'react-native';

class ListaNotificacion extends Component {

  render() {
    return (
      <Container>
        <Content padder>
        <Card>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}>05-05-1999 15:00p.m.</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}>05-05-1999 15:00p.m.</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}>05-05-1999 15:00p.m.</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}>05-05-1999 15:00p.m.</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}>05-05-1999 15:00p.m.</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce quis viverra sapien. Curabitur tristique euismod mauris.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem >
            <Body>
            <Text style={styles.title}>Sin Título</Text>
            <Text style={styles.textHeader}>Gas Natural</Text>
            <Text style={styles.date, styles.textHeader}>05-05-1999 15:00p.m.</Text>
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

export default ListaNotificacion;

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'red',
  },
  textHeader:{
    color: 'gray'
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