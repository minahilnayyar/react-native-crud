import useApi from "./ApiHook";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button,FlatList,ScrollView } from 'react-native';
import { useEffect } from "react";


export default function CoffeeList(){
    

    const {loading,data} = useApi("https://api.sampleapis.com/coffee/hot")
    useEffect(()=>{

    },[])
    return(
        <View>
            <ScrollView>
            <FlatList
            data={(data)}
            renderItem={
                ({item}) => (


                <View style={{backgroundColor:'red', margin:10, height:150,borderRadius:10, elevation:20 }}>
                    
                    <Text style={{fontSize:20, color:'white'}}>  Title: {item.title}</Text>
                    <Text style={{fontSize:20, color:'white', padding:10}}>  Description: {item.description}</Text>
                </View>
                )
                }
            
        />

        </ScrollView>
        </View>
    );
}