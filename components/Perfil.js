import React, { useState, useEffect } from "react"
import { Container, Form, Item, Input, Content, Button, Text, Card, CardItem } from 'native-base'
import { StyleSheet, Alert } from 'react-native'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../global.json'
import { API } from '../helpers'
import { useForm, Controller } from "react-hook-form"
import ChangePwdForm from './ChangePwdForm'

const Perfil = ({ cb }) => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    direccion: "",
    correo: ""
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ defaultValues: usuario });

  useEffect(() => {
    session();
  }, []);

  const session = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@usuario");
      if (jsonValue != null) {
        let user = JSON.parse(jsonValue);
        user.telefono = user.telefono + "";
        setUsuario(user);
        reset(user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async data => {
    data._id = usuario._id
    data.telefono = parseInt(data.telefono)
    let res = await API.getBody('usu/update', 'PUT', data)
    if(res.code === 200){
      Alert.alert(
        'Actualizar Perfil', 'Su perfil fue actualizado correctamente',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
        ],
        { cancelable: true },
      )
      getNewSession(data)
    }
  }

  const getNewSession = async (data) => {
    await AsyncStorage.setItem("@usuario", JSON.stringify(data));
  };

  const eliminarPerfil = async () => {
    Alert.alert(
      "Eliminar Usuario",
      "¿Seguro que quiere eliminar la cuenta actual?",
      [
        {
          text: "Eliminar Cuenta",
          onPress: async () => {
            let res = await API.getData("usu/delete/" + usuario._id, "DELETE")
            if (res.code === 200) {
              cb()
            }
          }
        },
        {
          text: "No",
          style: "cancel"
        }
      ],
      {
        cancelable: true
      }
    );
  };

  const resetear = () => session();

  const cerrarSesion = async () =>{
    await AsyncStorage.removeItem("@usuario")
    await AsyncStorage.removeItem("@token")
    cb()
  }

  return (
    <Container>
      <Content padder>
        <Text style={styles.title}>Configuración de Usuario</Text>
        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item rounded style={styles.input}>
                <FontAwesome name="user" size={23} color="gray" />
                <Input
                  placeholder="Nombre(s)"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(value) => onChange(value)}
                />
              </Item>
            )}
            name="nombre"
            rules={{
              required: { value: true, message: "El nombre es requerido" },
              pattern: {
                value: /^[a-záéíúóñA-ZÁÉÍÓÚÑ '.-]*$/,
                message: "Formato de nombre inválido"
              }
            }}
            defaultValue={usuario.nombre}
          />
          {errors.nombre && (
            <Text style={styles.textError}>{errors.nombre?.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item rounded style={styles.input}>
                <FontAwesome name="user" size={23} color="gray" />
                <Input
                  placeholder="Apellidos"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(value) => onChange(value)}
                />
              </Item>
            )}
            name="apellidos"
            rules={{
              required: {
                value: true,
                message: "Los apellidos son requeridos"
              },
              pattern: {
                value: /^[a-záéíúóñA-ZÁÉÍÓÚÑ '.-]*$/,
                message: "Formato de apellidos inválido"
              }
            }}
            defaultValue={usuario.apellidos}
          />
          {errors.apellidos && (
            <Text style={styles.textError}>{errors.apellidos?.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item rounded style={styles.input}>
                <FontAwesome name="mobile-phone" size={28} color="gray" />
                <Input
                  placeholder="Teléfono"
                  keyboardType="numeric"
                  textContentType="telephoneNumber"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(value) => onChange(value)}
                />
              </Item>
            )}
            name="telefono"
            rules={{
              required: { value: true, message: "El teléfono es requerido" },
              minLength: { value: 10, message: "Longtud mínima de 10 dígitos" }
            }}
            defaultValue={usuario.telefono}
          />
          {errors.telefono && (
            <Text style={styles.textError}>{errors.telefono?.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item rounded style={styles.input}>
                <FontAwesome name="map-marker" size={24} color="gray" />
                <Input
                  placeholder="Dirección"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(value) => onChange(value)}
                />
              </Item>
            )}
            name="direccion"
            rules={{ required: true }}
            defaultValue={usuario.direccion}
          />
          {errors.direccion && (
            <Text style={styles.textError}>El dirección es requerido</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item rounded style={styles.input}>
                <Ionicons name="mail" size={16} color="gray" />
                <Input
                  placeholder="Correo Electrónico"
                  keyboardType="email-address"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(value) => onChange(value)}
                />
              </Item>
            )}
            name="correo"
            rules={{
              required: { value: true, message: "El correo es requerido" },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
                message: "Formato de correo incorrecto"
              }
            }}
            defaultValue={usuario.correo}
          />
          {errors.correo && (
            <Text style={styles.textError}>{errors.correo?.message}</Text>
          )}
          <Button block onPress={handleSubmit(onSubmit)}>
            <Text>Guardar</Text>
          </Button>
          <Button info block onPress={resetear}>
            <Text>Resetear</Text>
          </Button>
          <Button danger block onPress={eliminarPerfil}>
            <Text>Eliminar</Text>
          </Button>
        </Form>

        <Card style={styles.card}>
          <CardItem header>
            <Text style={styles.textPass}>Cambiar contraseña</Text>
          </CardItem>
          <ChangePwdForm styles={styles} _id={usuario._id} url={url} />
        </Card>

        <Card style={styles.card}>
          <Button danger block onPress={cerrarSesion}>
            <Text>Cerrar Sesión</Text>
          </Button>
        </Card>

      </Content>
    </Container>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10
  },
  textPass: {
    fontWeight: "bold"
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10
  },
  form: {
    padding: 5
  },
  card: {
    marginTop: 20
  },
  textError: {
    color: "red",
    alignSelf: "center",
    fontStyle: "italic",
    fontSize: 12
  }
});
