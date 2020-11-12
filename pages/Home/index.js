import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [token, setToken] = useState('');

    const getToken = async () => {
        setToken(await AsyncStorage.getItem('@jwt'));
    }

    useEffect(()=>{
        getToken();
    }, [])

    return(
        <View>
            <Text>HOME</Text>
            <Text>{token}</Text>
        </View>
    )
}

export default Home;