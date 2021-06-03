import React, { useState } from 'react'
import { Form, Item, Input, Button, Text } from 'native-base'
import { Alert, StyleSheet } from 'react-native'
import { useForm, Controller } from "react-hook-form"
import { FontAwesome } from "@expo/vector-icons"
import { API } from '../helpers'

const ChangePwdForm = ({ styles, _id, url }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm()
    const [pwdError, setPwdError] = useState("");

    const onSutmit = async data => {
        if (data.nuevo !== data.re) {
            setPwdError("La confirmación no concuerda con la nueva contraseña")
            reset()
        } else {
            data._id = _id
            let res = await API.getBody('usu/resetPwd', 'PUT', data)
            if(res.hasOwnProperty("status")) setPwdError(res.msg)
            else if(res.code === 200){
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