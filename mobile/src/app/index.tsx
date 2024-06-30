import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'
import { Icon } from 'react-native-elements';
import { Inter_500Medium, useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Whisper_400Regular } from '@expo-google-fonts/whisper';
import * as Yup from 'yup'
import { router } from 'expo-router';
// import { Layout } from './(drawer)/index';



interface LoginProps {

}

const Login = (props: LoginProps) => {


    // Fontes 
    let [fontMain] = useFonts({
        Inter_500Medium,
        Inter_400Regular,
        Inter_700Bold,
        Whisper_400Regular,
    })

    if (!fontMain) {
        return null
    }

    // Função que vai lidar com o login
    const acessar = () => {

    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{ color: 'white', fontSize: 28, fontFamily: 'Inter_500Medium' }}>Acessar</Text>
                </View>

                <View style={styles.main}>

                    <Formik initialValues={{ usuario: '', senha: '' }}
                        onSubmit={acessar}
                        validationSchema={Yup.object({
                            usuario: Yup.string().min(3, "O campo deve ter ao menos 3 caracteres").required('O campo deve ser preenchido'),
                            senha: Yup.string().min(6, "A senha deve conter ao menos 6 caracteres").required("O campo deve ser preenchido corretamente")
                        })}

                    >
                        {({ errors, handleChange, handleSubmit}) => (
                            <>
                                <View style={styles.boxForm}>
                                    <View style={styles.containerInputs}>

                                        <View style={styles.boxInputs}>
                                            <Icon name='person-outline' type='ionicon' size={20} color='white' style={{}}></Icon>
                                            <TextInput style={styles.input} onChangeText={handleChange('usuario')} placeholder='Usuario' placeholderTextColor={'#ffffff4f'} />
                                        </View>

                                        {errors.usuario && <Text style={styles.textRequired}>{errors.usuario}</Text>}
                                    </View>


                                    <View style={styles.containerInputs}>

                                        <View style={styles.boxInputs}>
                                            <Icon name='lock-closed-outline' type='ionicon' size={20} color='white' style={{}}></Icon>

                                            <TextInput style={styles.input} onChangeText={handleChange('senha')} placeholder='Senha' placeholderTextColor={'#ffffff4f'} secureTextEntry={true} />
                                        </View>

                                        {errors.senha && <Text style={styles.textRequired}>{errors.senha}</Text>}
                                    </View>
                                    <TouchableOpacity style={styles.btnSubmit} onPress={()=>{
                                        handleSubmit()
                                        router.replace('/(drawer)/')
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Inter_500Medium' }}>Acessar</Text>
                                    </TouchableOpacity>

                                </View>
                            </>
                        )}

                    </Formik>

                </View>

                <View>
                    <Text style={styles.footer}>Jirituba</Text>
                </View>

            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#414755',
        width: '100%',
        height: '100%',

    },

    container: {
        height: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'column',

    },

    header: {
        left: 40
    },

    main: {
        // height: '70%',
        paddingVertical: 20,
        paddingHorizontal: 40
    },


    boxForm: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 60

    },


    containerInputs: {
        gap: 10
    },

    label: {
        fontFamily: 'Inter_500Medium'
    },

    boxInputs: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 1,
        borderColor: '#b8b06a'
    },

    input: {
        width: '100%',
        paddingVertical: 15,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Inter_400Regular'
    },

    textRequired: {
        color: '#ff0037',
        fontFamily: 'Inter_700Bold',
        fontSize: 12
    },

    btnSubmit: {
        backgroundColor: '#21242D',
        color: 'white',
        borderRadius: 40,
        paddingHorizontal: 10,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        fontFamily: 'Whisper_400Regular',
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    }

});




// #00747C Azul escuro
// #00BBC9 Azul claro
// #CACACA Cinza Claro
// #878787 Cinza Medio
// #202022 Cinza Escuro