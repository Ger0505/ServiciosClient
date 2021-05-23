import React, { useState, useEffect, Fragment } from "react";
import {
  Container,
  Item,
  Input,
  Button,
  Text,
  Header,
  Icon,
  Content,
  Card,
  Thumbnail,
  CardItem
} from "native-base";
import { StyleSheet } from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import { colors, url_file } from "../global.json";
import { API } from "../helpers";

import imgDefault from "./../assets/1.png";
const URL_FILE = url_file + "uploads/";

const ListaServicio = ({ navigation }) => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const getEmpresas = async () => {
      let res = await API.getData("emp")
      setEmpresas(res)
    }

    getEmpresas();
  }, []);

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
        {empresas.map((emp) => {
          if (emp.tipo === 1) {
            return (
              <Fragment key={emp._id}>
                <Card>
                  <CardItem
                    button
                    onPress={() =>
                      navigation.navigate("FormTanque", {
                        idEmp: emp._id,
                        empresa: emp.nombre
                      })
                    }
                  >
                    <Grid>
                      <Col size={35}>
                        <Thumbnail
                          square
                          source={{ uri: URL_FILE + emp.logo }}
                          style={styles.img}
                        />
                      </Col>
                      <Col size={65}>
                        <Text style={styles.title}>Gas / Tanque</Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: "gray",
                            fontStyle: "italic"
                          }}
                        >
                          {emp.nombre}
                        </Text>
                        <Text style={styles.text}>{emp.descripcion}</Text>
                      </Col>
                    </Grid>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem
                    button
                    onPress={() =>
                      navigation.navigate("FormEstacionario", {
                        idEmp: emp._id,
                        empresa: emp.nombre
                      })
                    }
                  >
                    <Grid>
                      <Col size={35}>
                        <Thumbnail
                          square
                          source={{ uri: URL_FILE + emp.logo }}
                          style={styles.img}
                        />
                      </Col>
                      <Col size={65}>
                        <Text style={styles.title}>Gas / Estacionario</Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: "gray",
                            fontStyle: "italic"
                          }}
                        >
                          {emp.nombre}
                        </Text>
                        <Text style={styles.text}>{emp.descripcion}</Text>
                      </Col>
                    </Grid>
                  </CardItem>
                </Card>
              </Fragment>
            );
          } else if (emp.tipo === 2) {
            return (
              <Card key={emp._id}>
                <CardItem
                  button
                  onPress={() =>
                    navigation.navigate("FormAgua", {
                      idEmp: emp._id,
                      empresa: emp.nombre
                    })
                  }
                >
                  <Grid>
                    <Col size={35}>
                      <Thumbnail
                        square
                        source={{ uri: URL_FILE + emp.logo }}
                        style={styles.img}
                      />
                    </Col>
                    <Col size={65}>
                      <Text style={styles.title}>Agua Purificada</Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "gray",
                          fontStyle: "italic"
                        }}
                      >
                        {emp.nombre}
                      </Text>
                      <Text style={styles.text}>{emp.descripcion}</Text>
                    </Col>
                  </Grid>
                </CardItem>
              </Card>
            );
          }
        })}
      </Content>
    </Container>
  );
};

export default ListaServicio;
{
  /* <Thumbnail source= {require(`../images/${person.id}.jpg`)} /> */
}
const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.main
  },
  img: {
    height: 100,
    width: 100
  },
  title: {
    fontWeight: "bold"
  },
  text: {
    textAlign: "justify"
  }
});
