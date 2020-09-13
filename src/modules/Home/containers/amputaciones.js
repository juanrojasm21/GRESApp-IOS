import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import { Video } from 'expo-av';
import {StyleSheet, Image,Platform,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';


class Amputaciones extends Component {

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
      
      <Container style={{backgroundColor:'#FFF'}}>
        
        <Header noShadow style={styles.header}>
        <Left>
        <Button transparent>
          <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
        </Button>
        </Left>
        <Body>
            <Title style={styles.title}>Qué es una amputación</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
        </Header>
        <Content padder>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <View style={styles.MainContainer}>
        
        <Card bordered> 
          
          <CardItem bordered>
            <Image source={require('../../../../assets/amputacion1.jpg')} style={{ resizeMode: 'contain', height:200}}  />
          </CardItem>
          
        </Card>
          <CardItem bordered>
          <Text style={styles.textCenter}>Conoce la información que requieres saber de una amputación, acompañado por un experto en el siguiente video.</Text>
          
          </CardItem>
          
          
        </View>
        <Video
            source={{ uri: 'https://caeptudea.com.co/gresapp/amputacion1.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            useNativeControls={true}
            style={{ width: '100%', height: 300 }}
          />
        </Content>
        
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    width:'100%',
    textAlign:'center',
    fontFamily:'Quicksand-Regular',
    color: "#0A7FBA",
    fontSize:17
  },
  
  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  Content:{
    flex:1,
    
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF'
    
  },
  
  header:{
    marginTop:Constants.statusBarHeight,
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


export default Amputaciones