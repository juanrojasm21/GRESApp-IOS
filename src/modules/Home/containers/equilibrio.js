import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import { Video } from 'expo-av';
import Constants from 'expo-constants'
import {StyleSheet,Platform,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content, Body, Button,Title, Card, CardItem, Text} from 'native-base';


class Equilibrio extends Component {

  constructor(props){
    super(props);
    this.state={
      isReady:false,
      fontLoaded:false,
    };
    
  }
  componentWillMount(){
    this.loadFonts();
  }
  

  async loadFonts() {
    await Font.loadAsync({
    
      'Quicksand-SemiBold': require('../../../../assets/fonts/Quicksand-SemiBold.ttf'),
      'Quicksand-Regular': require('../../../../assets/fonts/Quicksand-Regular.ttf'),
      'Roboto': require('../../../../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../../../../node_modules/native-base/Fonts/Roboto_medium.ttf')
      
    })
    
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View></View>
      );
    }
    return (
      
      <Container style={styles.Content}>
        
        <Header noShadow style={styles.header}>
        <Left>
        </Left>
        <Body>
            <Title style={styles.title}>Equilibrio</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
        </Header>
        <Content padder>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <View style={styles.MainContainer}>
        </View>
        <Video
            source={{ uri: 'https://caeptudea.com.co/gresapp/Equilibrio.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            useNativeControls={true}
            style={{ width: '100%', height: 300 }}
          />
        <Card>
          <CardItem  bordered>
            <Text style={styles.textCenter}>Estos ejercicios son una excelente guía, además de ser los recomendados por el equipo de rehabilitación de GresApp</Text>
          </CardItem>
          <CardItem>
          <Text style={styles.textCenter}>
            3 Ejercicios
            5 a 10 minutos
            </Text>
          </CardItem>
        </Card> 
        </Content>
        
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    fontSize:17,
    width:'100%',
    textAlign:'center',
    fontFamily:'Quicksand-Regular',
    color: "#0A7FBA"
  },
  Content:{

    backgroundColor:'#FFF',
    marginTop: Constants.statusBarHeight
  },
  
  title:{
    fontFamily:'Quicksand-SemiBold',
    color:'#FFF'
  },

  body:{
    paddingVertical:30
  },

  header:{
    backgroundColor:'#2ca0c2'
  },
  MainContainer:
      {
        paddingTop: (Platform.OS === 'ios') ? 0 : 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },

 

})



export default Equilibrio