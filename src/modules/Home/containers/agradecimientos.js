import React, {Component} from 'react'; 
import { View,Image} from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import {StyleSheet,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';


class Agredecimientos extends Component {

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
            <Title style={styles.title}>Agradecimientos</Title>
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
                <Text style={styles.textCenterHeader}>GRESApp es una aplicación:</Text>
            </CardItem>
            <CardItem bordered>
                 <Text style={styles.textCenterText}>Financiada por Fortalecimiento de programas y proyectos en ciencias médicas y de la salud con talento joven e impacto regional del Ministerios de Ciencia, Tecnología e Innovación (Minciencias), bajo el contrato RC752-2018, administrado por la CAEPT ( Corporación Académica para el Estudio de Patologías Tropicales). Agradecemos a la Corporación Mahavir Kmina por los diferentes contenidos brindados para la aplicación .</Text>
            </CardItem>
            <CardItem bordered>
                <Image source={require('../../../../assets/minciencias.png')} style={styles.logo} />
            </CardItem>
            <CardItem bordered>
                <Image source={require('../../../../assets/udealogo.png')} style={styles.logo} />
            </CardItem>
            <CardItem bordered>
                <Image source={require('../../../../assets/kaminalogo.png')} style={styles.logo} />
            </CardItem>
            
          </Card>

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
    fontFamily:'Quicksand-Regular',
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
    
  logo:{

    width:'100%',
    height:100,

    resizeMode:'contain'// trata de acuerdo a la imagen y al tamaño ponerla de la mejor manera

    },

 

})


export default Agredecimientos