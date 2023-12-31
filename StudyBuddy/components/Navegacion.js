import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import BlocNotas from './BlocDeNotas';
import CronometroApp from './Cronometro';
import Recordatorio from './Recordatorio';
import NumAleatorio from './Aleatorio';
import TextoAVoz from './Texto-A-Voz';
import QRGenerador from './GenerarQR';
import Calendario from './Calendario';



// Importa otras pantallas si es necesario

const Stack = createNativeStackNavigator();
const NavegacionApp = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Notas" component={BlocNotas} />
        <Stack.Screen name="Cronómetro" component={CronometroApp}/>
        <Stack.Screen name="Recordatorio" component={Recordatorio}/>
        <Stack.Screen name="Aleatorio" component={NumAleatorio}/>
        <Stack.Screen name="Texto a Voz" component={TextoAVoz}/>
        <Stack.Screen name="Generador QR" component={QRGenerador}/>
        <Stack.Screen name="Calendario" component={Calendario}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavegacionApp;
