import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { Form, Item, Input, Body, Text, Button, Container, Content } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { API } from '../helpers'
import { colors, url } from '../global.json'
import { useForm, Controller } from "react-hook-form";
import { useFocusEffect } from '@react-navigation/native';
import Logo from '../assets/logo.png'

const Registro = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [pwdError, setPwdError] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        reset()
      };
    }, [])
  );

  const onSubmit = async data => {
    if (data.password !== data.repassword) {
      setPwdError("Las contraseñas no coinciden");
      return;
    }
    data.telefono = parseInt(data.telefono)
    let res = await API.getLog('log/usu/insert', data)
    if(res.hasOwnProperty("status")) setPwdError(res.msg)
    else if (res.code === 200) navigation.navigate('Login')
    else setPwdError("Error al insertar intentelo después")
  }

  return (
    <Container style={styles.container}>
      <Content>
        <LinearGradient
          colors={[colors.main, colors.third]}
          style={styles.background}
        >
          <View style={styles.middle}>
          <Image source={Logo} style={{width: '37%', height: '13%',alignSelf: "center",top: "2%", }}/>
            <View style={styles.formArea}>
              <Form style={styles.mainForm}>
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
                    required: {
                      value: true,
                      message: "El nombre es requerido"
                    },
                    pattern: {
                      value: /^[a-záéíúóñA-ZÁÉÍÓÚÑ '.-]*$/,
                      message: "Formato de nombre inválido"
                    }
                  }}
                  defaultValue=""
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
                  defaultValue=""
                />
                {errors.apellidos && (
                  <Text style={styles.textError}>
                    {errors.apellidos?.message}
                  </Text>
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
                    required: {
                      value: true,
                      message: "El teléfono es requerido"
                    },
                    pattern: {
                      value: /[0-9]{10}/,
                      message: "Longtud de 10 dígitos"
                    }
                  }}
                  defaultValue=""
                />
                {errors.telefono && (
                  <Text style={styles.textError}>
                    {errors.telefono?.message}
                  </Text>
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
                  defaultValue=""
                />
                {errors.direccion && (
                  <Text style={styles.textError}>
                    El dirección es requerido
                  </Text>
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
                    required: {
                      value: true,
                      message: "El correo es requerido"
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
                      message: "Formato de correo incorrecto"
                    }
                  }}
                  defaultValue=""
                />
                {errors.correo && (
                  <Text style={styles.textError}>{errors.correo?.message}</Text>
                )}

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Item rounded style={styles.input}>
                      <FontAwesome name="lock" size={24} color="gray" />
                      <Input
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        onBlur={onBlur}
                        value={value}
                        onChangeText={(value) => onChange(value)}
                        onChange={() => setPwdError("")}
                      />
                    </Item>
                  )}
                  name="password"
                  rules={{
                    required: {
                      value: true,
                      message: "La contraseña es requerida"
                    },
                    minLength: {
                      value: 8,
                      message: "Tener al menos 8 carácteres"
                    }
                  }}
                  defaultValue=""
                />
                {errors.password && (
                  <Text style={styles.textError}>
                    {errors.password?.message}
                  </Text>
                )}

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Item rounded style={styles.input}>
                      <FontAwesome name="unlock-alt" size={24} color="gray" />
                      <Input
                        placeholder="Confirmar Contraseña"
                        secureTextEntry={true}
                        onBlur={onBlur}
                        value={value}
                        onChangeText={(value) => onChange(value)}
                        onChange={() => setPwdError("")}
                      />
                    </Item>
                  )}
                  name="repassword"
                  rules={{ required: true }}
                  defaultValue=""
                />
                {errors.repassword && (
                  <Text style={styles.textError}>
                    La confirmación es requerida
                  </Text>
                )}
                {pwdError !== "" && (
                  <Text style={styles.textError}>{pwdError}</Text>
                )}

                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText} onPress={handleSubmit(onSubmit)}>
                    Registrar
                  </Text>
                </Button>
              </Form>
            </View>
          </View>
        </LinearGradient>
      </Content>
    </Container>
  );
};

export default Registro;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    position: "relative"
  },
  top: {
    position: "relative",
    height: "100%",
    zIndex: 1
  },
  middle: {
    width: "100%",
    height: "100%",
    flex: 1,
    zIndex: 2,
    backgroundColor: "transparent",
    paddingLeft: 26.3,
    paddingRight: 26.3
  },
  textContainer: {
    color: "#FCFDFF",
    fontSize: 24,
    marginBottom: 30,
    position: "relative",
    top: "5%",
    alignSelf: "center"
  },
  formArea: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    top: "5%",
    paddingBottom: 50,
    marginBottom: 100
  },
  signin: {
    top: 0,
    color: "#2D3057",
    marginTop: 15
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: "#2D3057"
  },
  Input: {
    fontSize: 12
  },
  loginText: {
    color: "#2D3057",
    fontSize: 10,
    fontWeight: "bold"
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
    marginTop: 50
  },
  mainBtn: {
    backgroundColor: colors.second,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5
  },
  btnText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold"
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5
  },
  textError: {
    color: "red",
    alignSelf: "center",
    fontStyle: "italic",
    fontSize: 12
  }
});
