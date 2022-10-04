import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OnboardingClient2 = () => {

    const navigation = useNavigation()

    const [selectedImage, setSelectedImage] = useState(null);

    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            recording
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();

        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });

        setRecordings(updatedRecordings);
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
            return (
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Audio {index + 1} - {recordingLine.duration}</Text>
                    <TouchableOpacity
                        onPress={() => recordingLine.sound.replayAsync()}
                    >
                        <FontAwesome5 name="play-circle" size={35} color="white" />
                    </TouchableOpacity>
                </View>
            );
        });
    }


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        console.log(pickerResult.uri);
        setSelectedImage({ localUri: pickerResult.uri });
    };

    // if (selectedImage !== null) {
    //     return (
    //         <View style={styles.container}>
    //             <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
    //         </View>
    //     );
    // }

    return (
        <LinearGradient
            colors={['#333fff', '#737cff', '#959bf1']}
            style={{ flex: 1 }}>
            <View style={{ flex: 1, marginHorizontal:10 }} >

                <View style={{ marginTop: 50, height: '10%', paddingTop: 10, marginHorizontal: 10 }} >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >Datos de mantenimiento</Text>
                </View>


                <ScrollView style={{ height: '60%' }} >

                    <View style={{ marginHorizontal: 10, marginVertical: 10 }} >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }} >Imagen del proyecto</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            {
                                selectedImage ? (
                                    <View
                                        style={{ width: 300, height: 200, marginTop: 10 }}
                                    >
                                        <Image source={{ uri: selectedImage.localUri }} style={{
                                            width: 290, height: 200, borderRadius: 10, shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            shadowOpacity: 0.29,
                                            shadowRadius: 4.65,

                                            elevation: 7,
                                        }} />
                                    </View>
                                ) : (
                                    <View
                                        style={{ width: 300, height: 200, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => openImagePickerAsync()}
                                        >
                                            <AntDesign name="clouduploado" size={100} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 10, marginVertical: 10 }} >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }} >Audio del proyecto</Text>

                        <View
                            style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <TouchableOpacity
                                onPress={recording ? stopRecording : startRecording}
                            >
                                <MaterialCommunityIcons name="record-circle-outline" size={60} color="white" />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 18 }} >{recording ? 'Detener' : 'Grabar'}</Text>
                            {/* <Button
                                    title={recording ? 'Detener' : 'Grabar'}
                                    onPress={recording ? stopRecording : startRecording} /> */}
                        </View>
                        {getRecordingLines()}

                    </View>


                </ScrollView>


                <View style={{ height: '10%'}} >
                    <TouchableOpacity
                        style={{ backgroundColor: '#1331f7', padding: 10, borderRadius: 5, marginTop: 10 }}
                        onPress={() => navigation.navigate('ProtectedScreen')}
                    >
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }} >Aceptar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </LinearGradient>
    )
}

export default OnboardingClient2

const styles = StyleSheet.create({
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
})
