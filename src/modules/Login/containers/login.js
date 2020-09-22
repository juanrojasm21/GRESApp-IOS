import React, { Component } from 'react';
import { View, Alert, } from "react-native";
import * as Font from 'expo-font';
import {StyleSheet, Image, AsyncStorage,StatusBar} from 'react-native'
import { Container, Content, Card, CardItem, Text, Body, Button,Item,Input} from 'native-base';
import api from '../../../utils/api';
//El login se maneja desde la API

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state={
      isReady:false,
      fontLoaded:false,
      username:'',
      pass:''
    };
    
  }
    Navegar=async(params) => {
      //paso los parametros de navegación
      //luego evaluo si los datos ingresados estan correctos o no existen en la BD
      if (params=="Loading"){
        let valLog=await api.valLog(this.state.username,this.state.pass)
        if(valLog.status==1){
          let userLogin={
            sex:valLog.sex,//obtengo el sexo del usuario de tal manera que se abra un mensaje personalizado si es hombre o es mujer
            user:this.state.username,
            perm:true,// permisos es uno cuando se logea el usuario
            //voy a utilizar asyncStorage para que se pueda pasar el usuario a las otras pantallas
          }
          AsyncStorage.setItem('userLogin',JSON.stringify(userLogin)) // creo el asyncStorage
          this.props.navigation.navigate(params)
        }else{
          Alert.alert('Error , usuario o clave invalida')
        }

      }else{
        this.props.navigation.navigate(params)
      }
      
        
    }
    
  
  

    UNSAFE_componentWillMount(){
    
    this.loadFonts();
  }
  

  async loadFonts() {
    await Font.loadAsync({
    
      'Roboto': require('../../../../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      'Courgette-Regular': require('../../../../assets/fonts/Courgette-Regular.ttf'),
      'Quicksand-SemiBold': require('../../../../assets/fonts/Quicksand-SemiBold.ttf'),
      'Quicksand-Regular': require('../../../../assets/fonts/Quicksand-Regular.ttf'),
      
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
      
      <Container>
        
        <Content padder contentContainerStyle={styles.Content}>
        <Image source={require('../../../../assets/logo3.png')} style={styles.logo} />
        <StatusBar translucent={true} backgroundColor="#fff" />
          
         
          <Card>
            <CardItem bordered>
              <Text style={styles.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.body}>
              <Item>
                <Input placeholder="Usuario" style={{fontFamily:'Quicksand-Regular',fontSize:18}} onChangeText={(username)=>this.setState({username})}/>
                </Item>
                <Item>
                <Input placeholder="Contraseña" style={{fontFamily:'Quicksand-Regular',fontSize:18
              }} secureTextEntry={true} onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Button block danger style={styles.boton1} onPress={()=>this.Navegar('Loading')}>
            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ingresar</Text>
          </Button>
          <Button block danger onPress={()=>this.Navegar('Register')} style={styles.boton2}>
            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Registrarse</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    width:'100%',
    textAlign:'center',
    fontFamily:'Quicksand-SemiBold',
    fontSize:23,
    color: "#0A7FBA",
  },
  Content:{
    flex:1,
    
    justifyContent:'center',
    //backgroundColor:'#FDBFBC'
    alignItems:'center',
    backgroundColor:'#fff'
    
  },
  boton1:{
    marginBottom:10,
    backgroundColor:'#2ca0c2'
    
    
  },
  boton2:{
    backgroundColor:'#ee8506'
  },

  body:{
    paddingVertical:30
  },
  fuente:{
    textShadowColor:'#67676B',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius:8,
    fontFamily:'Pacifico',
    fontSize:35,
    color:'#FFF',
    //color:'#FDBFBC',
    width:'100%',
    paddingLeft:105,
  },
  logo:{
    
    width:200,
    height:250,
    
    resizeMode:'contain'// trata de acuerdo a la imagen y al tamaño ponerla de la mejor manera
    
  },
  header:{
    //flex:1,
    //alignItems:'center',
    
    flexDirection:'row',//direcciona el contenedor de manera horizontal
    marginTop:40,
    justifyContent: 'center',

  }

})



