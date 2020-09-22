import React, {Component} from 'react'; 
import { View,Linking} from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import {StyleSheet,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';


class Contactenos extends Component {

  constructor(props){
    super(props);
    this.state={
      isReady:false,
      fontLoaded:false,

    };
    
  }
  UNSAFE_componentWillMount(){
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
            <Title style={styles.title}>Contáctenos</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
        </Header>
        <Content padder contentContainerStyle={styles.Content}>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <View style={styles.MainContainer}>
          <Card>
            <CardItem bordered>
                <Text style={styles.textCenterHeader}>¡No dudes en contactarnos!</Text>
            </CardItem>
            <CardItem bordered>
                 <Text style={styles.textCenterText}>Tenemos un correo electrónico siempre disponible para que te contactes con nosotros en caso de tener alguna duda referente a la rehabilitación de una amputación, sólo haz click en el siguiente enlace y escríbenos.</Text>
            </CardItem>
          </Card>
          {/* Se despliega una ventana de email para contactarse*/}
          <Button onPress= {()=>{
            Linking.openURL("mailto:contactanosgresapp@gmail.com");
          }} block danger style={styles.boton}>
            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Ir al correo</Text>

          </Button>
        </View>
        </Content>
        
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenterHeader:{
    
    textAlign:'center',
    fontFamily:'Quicksand-SemiBold',
    color: "#0A7FBA",
    fontSize:24
  },
  textCenterText:{
    
    textAlign:'justify',
    fontFamily:'Quicksand-SemiBold',
    color: "#0A7FBA",
    fontSize:17
  },
  
  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  Content:{

    alignItems:'center',
    backgroundColor:'#FFF'
    
  },
  boton:{
    marginBottom:10,
    backgroundColor:'#ee8506'
    
  },
  
  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2'
  },
  MainContainer:
      {
        
        alignItems: 'center',
        backgroundColor:'#FFF'
      },

 

})


export default Contactenos