import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash';
import { ScrollView, StyleSheet } from 'react-native'
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import { Input, NativeBaseProvider, Icon, Text, View, Button } from 'native-base'
import { Formik } from 'formik';
import * as yup from 'yup';
import { db } from '../../database/firebase';


const Formularios = () => {

    const [trainer, settrainer] = useState([])

    useEffect(() => {
        getTrainers()
    }, [saveNewTrainer])
    

    
    console.log('assad', trainer);

    const loginValidationSchema = yup.object().shape({
        nombre: yup
            .string()
            .required('Se requiere el nombre'),
        descripcion: yup
            .string()
            .required('Se requiere una descripción'),
        ubicacion: yup
            .string()
            .required('Se requiere una ubicación'),
        calificacion: yup
            .number()
    })

    const saveNewTrainer = async (values) => {
        try {
            await db.collection('gymbe').add({
                ...values,
            })
            console.log('Se guardo correctamente');
        } catch (error) {
            console.log(error);
        }
    }

    const getTrainers = async () => {
        const data = await db.collection('gymbe').get()
        const trainers = []
        data.forEach(doc => {
            const trainer = doc.data()
            trainers.push({ id: trainer.id, ...trainer })
        })
        settrainer(trainers)
    }

    return (
        <NativeBaseProvider>
            <ScrollView style={{ marginTop: 50, flex: 1 }} >
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ nombre: '', descripcion: '', ubicacion: '', calificacion: '' }}
                    onSubmit={values => saveNewTrainer(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, isValid, errors }) => (

                        <View style={{ flex: 1, marginTop: 25, justifyContent: 'space-around' }} >
                            <Input
                                onChangeText={handleChange('nombre')}
                                onBlur={handleBlur('nombre')}
                                value={values.nombre}
                                keyboardType='default'
                                size="2xl"
                                variant="rounded"
                                mx="3"
                                space={4}
                                placeholder="Nombre"
                                w={{
                                    base: "90%",
                                    md: "25%",
                                }}
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialIcons name="person" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                            />
                            {errors.nombre &&
                                <Text style={{ marginLeft: 15, fontSize: 10, color: 'red' }}>{errors.nombre}</Text>
                            }

                            <Input
                                onChangeText={handleChange('descripcion')}
                                onBlur={handleBlur('descripcion')}
                                value={values.descripcion}
                                keyboardType='default'
                                size="2xl"
                                variant="rounded"
                                mx="3"
                                space={4}
                                placeholder="Descripcion"
                                w={{
                                    base: "90%",
                                    md: "25%",
                                }}
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialIcons name="person" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                            />
                            {errors.descripcion &&
                                <Text style={{ marginLeft: 15, fontSize: 10, color: 'red' }}>{errors.descripcion}</Text>
                            }
                            <Input
                                onChangeText={handleChange('ubicacion')}
                                onBlur={handleBlur('ubicacion')}
                                value={values.ubicacion}
                                keyboardType='default'
                                size="2xl"
                                variant="rounded"
                                mx="3"
                                space={4}
                                placeholder="Ubicacion"
                                w={{
                                    base: "90%",
                                    md: "25%",
                                }}
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialIcons name="person" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                            />
                            {errors.ubicacion &&
                                <Text style={{ marginLeft: 15, fontSize: 10, color: 'red' }}>{errors.ubicacion}</Text>
                            }
                            <Input
                                onChangeText={handleChange('calificacion')}
                                onBlur={handleBlur('calificacion')}
                                value={values.calificacion}
                                keyboardType='numeric'
                                size="2xl"
                                variant="rounded"
                                mx="3"
                                space={4}
                                placeholder="calificacion"
                                w={{
                                    base: "90%",
                                    md: "25%",
                                }}
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialIcons name="person" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                            />
                            {errors.calificacion &&
                                <Text style={{ marginLeft: 15, fontSize: 10, color: 'red' }}>{errors.calificacion}</Text>
                            }

                            <View style={{ alignItems: 'center' }} >
                                <Button
                                    disabled={!isValid}
                                    onPress={() => { handleSubmit() }}
                                    width={'90%'}
                                    height={50}
                                    leftIcon={<AntDesign name="arrowright" size={30} color="white" />}
                                    colorScheme="blue"
                                >
                                </Button>
                            </View>

                        </View>

                    )}
                </Formik>

                {
                    trainer.map(trainer => (
                        <View key={trainer.id} style={{ backgroundColor: 'blue', marginTop: 20 }} >
                            <Text>Nombre, {trainer.nombre}</Text>
                            <Text>Descripcion, {trainer.descripcion}</Text>
                            <Text>Ubicacion, {trainer.ubicacion}</Text>
                            <Text>Calificacion, {trainer.calificacion}</Text>
                        </View>
                    ))
                }


            </ScrollView>
        </NativeBaseProvider>
    )
}

export default Formularios

const styles = StyleSheet.create({})

