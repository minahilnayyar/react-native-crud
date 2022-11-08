import useApi from "./ApiHook";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button,FlatList,ScrollView } from 'react-native';
import { useEffect } from "react";
import { AsyncStorage } from 'react-native';


export default function Languages(){
    

    const {loading,data} = useApi("https://jsonplaceholder.typicode.com/users")
    useEffect(()=>{

    },[])
    return(
        <View>
            <ScrollView>
            <FlatList
            data={(data)}
            renderItem={
                ({item}) => (
<View style={{backgroundColor:'blue', margin:10, height:50,borderRadius:10, elevation:20 }}>
                    
                    <Text style={{fontSize:20, color:'white'}}>  Name: {item.name}</Text>
                    <Text style={{fontSize:20, color:'white'}}>  Email: {item.email}</Text>
                </View>

                
                )
                }
            
        />
<FlatList
            data={(data)}
            renderItem={
                ({item}) => (


                <View style={{backgroundColor:'blue', margin:10, height:50,borderRadius:10, elevation:20 }}>
                    
                    <Text style={{fontSize:20, color:'white'}}>  Name: {item.name}</Text>
                    <Text style={{fontSize:20, color:'white'}}>  Email: {item.email}</Text>
                </View>
                )
                }
            
        />
        </ScrollView>
        </View>
    );
}