import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import Home from './Home';
import Languages from "./Languages"
import CoffeeList from './CoffeeList';
import UsersList from './UsersList'
import CreateUserScreen from "./CreateUserScreen";
import UserDetailScreen from "./UserDetailScreen";
import { useEffect, useState } from "react";
import  AsyncStorage  from "@react-native-async-storage/async-storage";

export default function App(prop) {

  const [isLogged,setIsLogged] = useState(false)
  const Stack = createNativeStackNavigator();
  _retrieveData=async ()=>{
    try {
      const value = await AsyncStorage.getItem("isloggedin")
      console.log(value)
      setIsLogged(value)
    } catch (error) {
      
    }
    
  }
  useEffect(()=>{
    _retrieveData()
    },[])
  
  
  
  return (
    
    isLogged=="false"?<NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Languages" component={Languages}></Stack.Screen>
                <Stack.Screen name="CoffeeList" component={CoffeeList}></Stack.Screen>
                <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Users List" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Create a New User" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      />
               
            </Stack.Navigator>
        </NavigationContainer> 
        :
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Languages" component={Languages}></Stack.Screen>
                <Stack.Screen name="CoffeeList" component={CoffeeList}></Stack.Screen>
                <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Users List" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Create a New User" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      />
               
            </Stack.Navigator>
        </NavigationContainer> 
        

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
