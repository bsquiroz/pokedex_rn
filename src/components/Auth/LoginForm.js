import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Keyboard,
} from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userBD";
import useAuth from "../../hooks/useAuth";

const initialvalues = {
    userName: "",
    password: "",
};

const validation = {
    userName: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
};

export const LoginForm = () => {
    const [error, setError] = useState(false);

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialvalues,
        validationSchema: Yup.object(validation),
        validateOnChange: false,
        onSubmit: (data) => {
            setError(false);
            const { userName, password } = data;

            if (userName === user.username && password === user.password) {
                login(userDetails);
            } else {
                setError("Credenciales incorrectas");
            }
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.error}>{formik.errors.userName}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <Text style={styles.title}>Iniciar sesión</Text>
            <View>
                <TextInput
                    placeholder="Nombre de usuario"
                    style={styles.styleInput}
                    autoCapitalize="none"
                    value={formik.values.userName}
                    onChangeText={(text) =>
                        formik.setFieldValue("userName", text)
                    }
                />
                <TextInput
                    placeholder="Contraseña"
                    style={styles.styleInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={(text) =>
                        formik.setFieldValue("password", text)
                    }
                />
                <Button title="Ingresar" onPress={formik.handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },
    styleInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error: {
        textAlign: "center",
        marginTop: 20,
        color: "#f00",
    },
});
