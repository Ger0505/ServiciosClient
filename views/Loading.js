import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, Animated, ActivityIndicator } from 'react-native'
import { colors } from '../app.json'

import Logo from '../assets/logo.png'


const Loading = ({navigation}) =>{
    const [logoAnime, setLogoAnime] = useState(new Animated.Value(0))
    const [logoText, setLogoText] = useState(new Animated.Value(0))
    const [loadingSpinner, setLoadingSpinner] = useState(false)

    useEffect(() =>{
        Animated.parallel([
            Animated.spring(logoAnime, {
              toValue: 1,
              tension: 10,
              friction: 2,
              duration: 1000,
              useNativeDriver: true
            }).start(),
      
            Animated.timing(logoText, {
              toValue: 1,
              duration: 1200,
              useNativeDriver: true
            }),
          ]).start(() => {
            setLoadingSpinner(true)
      
            setTimeout(() => navigation.navigate('Login'), 1500);
          });
    },[])

    return(
        <View style={styles.container}>
        <Animated.View
          style={{
            opacity: logoAnime,
            transform:[{
                translateY: logoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [80, 0],
                })
            }]
          }}>
          <Image source={Logo}  style={styles.image}/>

          {loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color="#5257f2"
            />
          ) : null}
        </Animated.View>
        <Animated.View style={{opacity: logoText}}>
          <Text style={styles.logoText}> Servicios </Text>
        </Animated.View>
      </View>
    )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
      width: 230,
      height: 170
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 29.1,
    fontWeight: '300',
  },
});
