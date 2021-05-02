import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListaServicio from '../components/ListaServicio'
import ListaPedido from '../components/ListaPedido'
import ListaNotificacion from '../components/ListaNotificacion'
import Perfil from '../components/Perfil'
import FormTanque from '../components/FormTanque'
import FormEstacionario from '../components/FormEstacionario'
import FormAgua from '../components/FormAgua'

const Tab = createBottomTabNavigator();
const ServiceStack = createStackNavigator();

const ServiceStackScreen = () => (
  <ServiceStack.Navigator screenOptions={{
    headerShown: false,
    headerStyle: {
      backgroundColor: '#f37d10',  //#f4511e
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <ServiceStack.Screen name="ListaServicio" component={ListaServicio} options={{ title: 'Servicios' }} />
    <ServiceStack.Screen name="FormTanque" component={FormTanque} options={{ title: 'Gas Natural' }} />
    <ServiceStack.Screen name="FormEstacionario" component={FormEstacionario} options={{ title: 'Gas Estacionario' }} />
    <ServiceStack.Screen name="FormAgua" component={FormAgua} options={{ title: 'Agua' }} />
  </ServiceStack.Navigator>
)

const UserApp = ({navigation}) => {

  const   lacallbacion = () =>{
    navigation.navigate('Login')
  }

  const child = () => <Perfil cb={lacallbacion}/>

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Services') {
              iconName = 'list';
            } else if (route.name === 'ListaPedido') {
              iconName = 'shopping-basket';
            } else if (route.name === 'ListaNotificacion') {
              iconName = 'bell';
            } else if (route.name === 'Perfil') {
              iconName = 'cog';
            }

            return <FontAwesome name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Services" component={ServiceStackScreen} />
        <Tab.Screen name="ListaPedido" component={ListaPedido} />
        {/* <Tab.Screen name="ListaNotificacion" component={ListaNotificacion} /> */}
        <Tab.Screen name="Perfil" component={child} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default UserApp;
