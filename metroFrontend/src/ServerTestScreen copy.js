import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import axios from 'axios';

// 3
const API = axios.create({
    baseURL: 'http://10.0.2.2:8000/api',
    headers: {
        'Content-Type' : 'application/json',
    },
});
// axios.defaults. withCredentials = true;


const ServerTestScreen = () => {

    // fetch('http://127.0.0.1:8000/api/Station/?format=api', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //     },
    // })

    // const st = {
    //     id: '',
    //     lineNumber : '',
    //     stationName: '',
    //     stationNum: '',
    // }

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [station, setStation] = useState([])

    const getStation = async () => {
        try {
            setError(null);
            setLoading(true);
            alert('시작')
            await API.get(
                '/Station/'
            )
            .then(function (response) {
                alert('ㅎㅇ')
                console.log(response.data.result['id'])
                console.log(response.data.result)
                alert(response.data.result)
            })
            .catch(function (error) {
                alert('바로 억까')
                console.log(error.response);
            })
            alert('끝')

            } catch(e) {
                alert('크게 억까')
                setError(e);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

    useEffect(() => {
        getStation();
        }, []);

    const [now, setNow] = useState(-1);

    const MyButton = props => {
        console.log(props);

        return (
        <TouchableOpacity
            style={{
            backgroundColor: "#4B778D",
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => {
                setNow(props.num);
            }}
        >
            <Text style={{ fontSize: 24, color: "white" }}>{props.num}</Text>
        </TouchableOpacity>
        );
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyButton num='0' />
            <MyButton num='1' />
            <MyButton num='2' />
            <MyButton num='3' />
            <Text>{now}</Text>
            {loading ? <Text>True</Text> : 
            <Text>false</Text>
        }
            
        {loading ? <ActivityIndicator/> : (
            <SafeAreaView style={{ flex: 1, padding: 24, fontSize:14 }}>
                <Text>{station.stationName}</Text>
            
        <FlatList
            data={station}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
            <Text>{item.stationName}, {item.lineNumber}</Text>
            )}
        />
        </SafeAreaView>
        ) }
                
        </View>
    )

}

export default ServerTestScreen;
            //1 network requset failed
            // const response = await fetch('http://127.0.0.1:8000/api/Station/?format=api');
            // const json = await response.json();
            // setStation(json)

            //2 network requset failed
            // fetch('http://127.0.0.1:8000/api/Station?format=api')
            //     .then((response) => response.json())
            //     .then((json) => {setStation(json)})
            //     .catch((error) => {
            //         console.error(error);
            //     });

            //3 ㅁ?ㄹ 3번째줄
            // await API.get(
            //     `Station/format/${}`
            // )
            // .then(function (response) {

            // })
            // .catch(function (error) {
            //     console.log(error.response);
            // })

            // 4 이게 그나마...
            // alert('시작')
            // axios.request({
            //     method:'GET',
            //     url: 'http://127.0.0.1:8000/api/Station/',

            //     headers: {'Content-Type' : 'application/json'},

            // }).then((response) => response.json())
            // .then((json) => { 
            //     alert('실행')
            //     setStation(json)
            // }).catch(function (error) {
            //     alert('에러')
            //     console.log(error.response);
            // })

            // alert('시작')
            // axios.request({
            //     method:'GET',
            //     url: 'http://127.0.0.1:8000/api/Station/',

            //     headers: {'Content-Type' : 'application/json'},

            // }).then((response) => response.json())
            // .then((json) => { 
            //     alert('실행')
            //     setStation(json)
            // }).catch(function (error) {
            //     alert('에러')
            //     console.log(error.response);
            // })





            //5
            // const requset = new Request('http://127.0.0.1:8000/api/Station/?format=api', {
            //     method: 'GET',

            // })
            // fetch(requset)
            // .then((response) => response)
            //tq

            //6 4랑 마찬가지
            // axios.get(`http://127.0.0.1:8000/api/Station/get`, {
            //     headers: {
            //         'Content-Type' : 'application/json',
            //     },})
            //     .then(response => {setStation(response)})



            //post

            //1
            // axios({
            //     method: 'POST',
            //     url: 'http://127.0.0.1:8000/api/',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json;charset=UTF-8'
            //     },
            //     data:{
            //         id: 'test'
            //     }
            // });

            //2
            // API.post(data)
            // .then(function(response) {
            //     alert('완료!!!!');
            // })
            // .catch(function (error) {
            //     console.log(error.response);
            // });
