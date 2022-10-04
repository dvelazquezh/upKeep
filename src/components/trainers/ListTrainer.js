import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Trainers from './Trainers'

const ListTrainer = () => {
    return (
        <>
            <View style={{ bottom: 60, height: '80%', borderTopLeftRadius: 100, borderTopRightRadius: 100, backgroundColor: '#e0e0e0', borderTopLeftRadius: 50, borderTopRightRadius: 50 }} >
                <ScrollView
                    style={{ marginBottom: 250, marginTop: 6 }}
                >
                    <Trainers imagen='https://cdn.pixabay.com/photo/2016/11/21/22/56/naked-1847866_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2017/11/13/15/09/biceps-2945912_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2017/08/06/09/50/people-2590796_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2021/11/10/06/23/workout-6783020_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2016/11/21/22/56/naked-1847866_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2017/11/13/15/09/biceps-2945912_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2017/08/06/09/50/people-2590796_960_720.jpg' />
                    <Trainers imagen='https://cdn.pixabay.com/photo/2021/11/10/06/23/workout-6783020_960_720.jpg' />

                </ScrollView>
            </View>
        </>
    )
}

export default ListTrainer

const styles = StyleSheet.create({})
