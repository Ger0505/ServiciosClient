import React, { useState } from 'react'
import { Form, Item, Input, Button, Text } from 'native-base'
import { Alert } from 'react-native'
import { useForm, Controller, set } from "react-hook-form"
import { FontAwesome } from "@expo/vector-icons"
import axios from 'axios'

const ChangePwdForm = ({ styles, _id, url }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm()
    const [pwdError, setPwdError] = useState("");

    const onSutmit = data => {
        if (data.nuevo !== data.re) {
            setPwdError(true)
        } else {
            data._id = _id
              axios.put(url + 'usu/resetPwd', data)
              .then(res => {
                if(res.data.hasOwnProperty("msg")) setPwdError(res.data.msg)
                else if(res.status === 200){
                    Alert.alert(
                        'Cambiar Contraseña', 'Su contraseña fue cambiada correctamente',
                        [
                          {
                            text: 'Cancel',
                            style: 'cancel'
                          },
                        ],
                        {cancelable: true},
                    )
                    reset()
                }
              })
              .catch(err => console.log("ERROR:" + err))
        }
    }

    return (
        <Form style={styles.form}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Item rounded style={styles.input}>
                        <FontAwesome name="lock" size={24} color="gray" />
                        <Input placeholder="Contraseña Actual"
                            secureTextEntry={true}
                            onBlur={onBlur}
                            value={value}
                            onChangeText={value => onChange(value)}
                            onChange = {() => setPwdError("")}
                        />
                    </Item>
                )}
                name="actual"
                rules={{
                    required: { value: true, message: 'La contraseña es requerida' }
                }}
                defaultValue=""
            />
            {errors.actual && <Text style={styles.textError}>{errors.actual?.message}</Text>}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Item rounded style={styles.input}>
                        <FontAwesome name="lock" size={24} color="gray" />
                        <Input placeholder="Nueva Contraseña"
                            secureTextEntry={true}
                            onBlur={onBlur}
                            value={value}
                            onChangeText={value => onChange(value)}
                            onChange={() => setPwdError("")}
                        />
                    </Item>
                )}
                name="nuevo"
                rules={{
                    required: { value: true, message: 'La contraseña es requerida' },
                    minLength: { value: 8, message: 'Tener al menos 8 carácteres' }
                }}
                defaultValue=""
            />
            {errors.nuevo && <Text style={styles.textError}>{errors.nuevo?.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Item rounded style={styles.input}>
                        <FontAwesome name="unlock-alt" size={24} color="gray" />
                        <Input placeholder="Confirmar Contraseña"
                            secureTextEntry={true}
                            onBlur={onBlur}
                            value={value}
                            onChangeText={value => onChange(value)}
                            onChange={() => setPwdError("")}
                        />
                    </Item>
                )}
                name="re"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.re && <Text style={styles.textError}>La confirmación es requerida</Text>}
            {pwdError !== "" && <Text style={styles.textError}>{pwdError}</Text>}
            <Button warning block onPress={handleSubmit(onSutmit)}>
                <Text>Cambiar</Text>
            </Button>
        </Form>
    );
}

export default ChangePwdForm;