import React from 'react';
import { Image, Text, View ,StyleSheet,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import MessageScreen from '../Screens/MessageScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <View style={{ flexDirection: 'row',flex: 1}}>
      <NavigationContainer >
        <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'white',
              tabBarInctiveTintColor: 'white',
              tabBarStyle: { backgroundColor: 'black' }
            }}
        
        ><Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/icons/home.png')}
                style={{ tintColor: focused ? color : 'white', height: 30, width: 30, top: 3 }}
              />
              <Text style={{ color: focused ? color : 'white', fontWeight: focused ? 'bold' : 'normal' }}>Accueil</Text>
            </View>
          ),
        }}
      />

          <Tab.Screen 
            name="Recherche" 
            component={HomeScreen} 
            options={{ 
              tabBarLabel: ({ focused, color }) => (
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image
                    source={require('../assets/icons/recherche.png')} 
                    style={{ tintColor: focused ? color : 'white',height:30,width:40,top:3}} 
                  />
                  <Text style={{ color: focused ? color : 'white', fontWeight: focused ? 'bold' : 'normal' }}>Recherche</Text>
                </View>
              ),
            }} 
          />

         <Tab.Screen 
            name="add" 
            component={MessageScreen} 
            options={{ 
              tabBarLabel: ({ focused, color }) => (
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image
                    source={require('../assets/icons/add.png')} 
                    style={{top:-15}} 
                  />
    
                </View>
              )
            }} 
          />

          <Tab.Screen 
            name="Message" 
            component={MessageScreen} 
            options={{ 
              tabBarLabel: ({ focused, color }) => (
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image
                    source={require('../assets/icons/message.png')} 
                    style={{tintColor: focused ? color : 'white',height:35,width:39 ,top:8}} 
                  />
                  <Text style={{ color: focused ? color : 'white', fontWeight: focused ? 'bold' : 'normal' }}>Message</Text>
                </View>
              )
            }} 
          />

<Tab.Screen 
            name="Profil" 
            component={MessageScreen} 
            options={{ 
              tabBarLabel: ({ focused, color }) => (
                <View style={{justifyContent:'center',alignItems:'center',top:0}}>
                  <Image
                    source={require('../assets/icons/profil.png')} 
                    style={{tintColor: focused ? color : 'white',height:35,width:35,top:3 }} 
                  />
                  <Text style={{ color: focused ? color : 'white', fontWeight: focused ? 'bold' : 'normal' }}>Profil</Text>
                </View>
              )
            }} 
          />
           
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}



export default BottomNavigation;
