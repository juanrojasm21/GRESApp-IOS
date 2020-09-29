import React, {Component} from 'react'; 
import * as Font from 'expo-font';
import * as Linking from 'expo-linking';
import {StyleSheet, KeyboardAvoidingView,AsyncStorage,View,StatusBar,Image} from 'react-native'
import { Container, Header,Left,Right, Content, Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';
import {createDrawerNavigator} from 'react-navigation-drawer'
import Amputaciones from './amputaciones'
import Alimentacion from './alimentacion'
import Agradecimientos from './agradecimientos'
import Testimonios from './testimonios'
import Actividades from './actividades'
import Cuidados from './cuidados'
import Faqs from './faqs'
import Logout from './logout'
import Dolor from './dolor'
import Contactenos from './contactenos'
import Grupos from './grupos'
import Ejercicios from './ejercicios'
import Marcha from './marcha'
import Fuerza from './fuerza'
import Estiramiento from './estiramiento'
import Equilibrio from './equilibrio'
import Aerobicos from './aerobicos'
import { SafeAreaView } from 'react-navigation';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
SafeAreaView.setStatusBarHeight(0);


class Inicio extends Component {
  

  constructor(props){
    super(props);
    
    this.state={
      username:'', // recibo los parámetros pero el permiso lo recibo en cero
      perm:false, //controlo el permiso que me define si el usuario está logeado o no, para saber qué screen cargar
      isReady:false,//controla si se cargaron las fuentes
      fontLoaded:false,
      miToken:'',//guarda el token para las notificaciones
      sex:0//almacena el tipo de sexo para desplegar el saludo en la pantalla inicial, identifica si es hombre o mujer en la BD
    };
    
  }
  
  UNSAFE_componentWillMount(){
    this.loadFonts();
    //carga las fuentes
    
    
  }
  UNSAFE_componentWillUnmount() {
    this.listener && this.listener.remove();
    
  }
  _handleOpenWithLinking = () => {
    //despliega las referencias en una ventana de navegación
    Linking.openURL('http://gpc.minsalud.gov.co/gpc_sites/Repositorio/Conv_637/GPC_amputacion/GPC_Amputados_padres_cuidadores.pdf');
  };

  async componentDidMount(){
    
    // el componentDid se usa para obtener datos antes de cargarse el DOM de javascript o que se renderice la pantalla
    //AsyncStorage.removeItem('userLogin')
    let userLogin = await AsyncStorage.getItem('userLogin') // obtengo mi asyncstorage
    userLogin=JSON.parse(userLogin)
    this.setState({username:userLogin.user,perm:userLogin.perm,sex:userLogin.sex}) 
    let { status } = await Permissions.askAsync(
      Permissions.NOTIFICATIONS,
    );
    if (status !== 'granted') {
      return;
    }
    
    
    
  }
  
  async loadFonts() {
    //carga las fuentes a usar
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
      
      <Container>
        <Header noShadow style={styles.header}>
        <Left>
        <Button transparent>
            <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
          </Button>
        </Left>
        <Body>
            <StatusBar translucent={true} backgroundColor="#2ca0c2" />
            <Title style={styles.title}>Inicio</Title>
        </Body>
        <Right>
          
        </Right>
      </Header>
        
        <Content padder contentContainerStyle={styles.Content}>
        
          
          <Text style={styles.textCenterHeader}>¡Hola {this.state.username}!</Text>
          <Image source={require('../../../../assets/amoramistad.png')} style={{ resizeMode: 'contain', height:150}}  />
          <Card>
            <CardItem bordered>
                {this.state.sex==1 ? (
                  <Text style={styles.textCenterHeader}>Bienvenido a GRESapp</Text>
                ) : <Text style={styles.textCenterHeader}>Bienvenida a GRESapp</Text>}
            
            </CardItem>
            
            <Text style={styles.textCenter}>Una aplicación para para el diagnóstico y tratamiento
                                            preoperatorio, intraoperatorio
                                            y postoperatorio de la persona
                                            amputada, la prescripción de la
                                            prótesis y la rehabilitación integral. 
                                            Explora el contenido que tenemos para ti, haciendo
                                            click en nuestro menú.
            </Text>
          </Card>                     
          <KeyboardAvoidingView behavior='padding' enabled>
          </KeyboardAvoidingView>
          <Button onPress= {()=>this.props.navigation.openDrawer()} block danger style={styles.boton1}>
            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Menú</Text>
          </Button>
          <Text style={styles.textCenterTiny}>Toda la información médica de esta aplicación está basada en la siguiente guía desarrollada por expertos en el área de la salud.</Text>
          <Text
          onPress={this._handleOpenWithLinking}
          style={styles.textCenterTiny}> VER GUÍA COMPLETA
          </Text>
        </Content>
      </Container>
    );
  }
}
//Navigator para navegar entre las pantallas de ejercicios
const ExcerNavigator=createStackNavigator({

  Ejercicios:{
    screen:Ejercicios,
    navigationOptions:{
      
      header:null,
      

    }

  },
  Equilibrio:{
    screen:Equilibrio,
    navigationOptions:{
      
      header:null
    }
  },
  Fuerza:{
    screen:Fuerza,
    navigationOptions:{
      
      header:null
    }
  } ,
  Marcha:{
    screen:Marcha,
    navigationOptions:{
      
      header:null
    }
  },
  Estiramiento:{
    screen:Estiramiento,
    navigationOptions:{
      
      header:null
    }
  },
  Aerobicos:{
    screen:Aerobicos,
    navigationOptions:{
      
      header:null
    }
  }},
  {
    initialRouteName: 'Ejercicios',
  })

//Navigator principal para las secciones de la aplicacion
const drawerNavigator=createDrawerNavigator({
    Inicio,
    Amputaciones:{
      screen: Amputaciones,
      navigationOptions: {
        drawerLabel: "¿Qué es una amputación?"
      }
    },
    Dolor:{
      screen: Dolor,
      navigationOptions: {
        drawerLabel: "Dolor después de una amputación"
      }
    },
    Cuidados:{
      screen:Cuidados,
      navigationOptions: {
          drawerLabel: "Cuidados y vendajes del muñón"
        }},
    Alimentacion:{
      screen:Alimentacion,
      navigationOptions: {
          drawerLabel: "Test de hábitos alimenticios"
        }
    },
    Grupos:{
      screen:Grupos,
      navigationOptions: {
          drawerLabel: "Información nutricional"
        }},
    Ejercicios:{
      screen:ExcerNavigator,
      navigationOptions: {
          drawerLabel: "Ejercicios de rehabilitación"
        }},
    Actividades:{
      screen:Actividades,
      navigationOptions: {
          drawerLabel: "Retorno a las actividades diarias"
        }},
    Testimonios:{
      screen:Testimonios,
      navigationOptions: {
          drawerLabel: "Testimonios"
        }},
    Faqs:{
        screen:Faqs,
        navigationOptions: {
            drawerLabel: "Preguntas frecuentes"
          }
    },
    Contactenos:{
      screen:Contactenos,
      navigationOptions: {
          drawerLabel: "Contáctenos"
        }
    },
    Agradecimientos:{
      screen:Agradecimientos,
      navigationOptions: {
          drawerLabel: "Agradecimientos"
        }
    },
    Logout:{
      screen:Logout,
      navigationOptions: {
          drawerLabel: "Cerrar Sesión"
        }
    },
    
    },
    
    {
      contentOptions:{
        itemsContainerStyle: {
          marginVertical:Constants.statusBarHeight+50,
        },
      }
    })
const styles= StyleSheet.create({
  textCenter:{
    fontSize:17,
    color: "#0A7FBA",
    fontFamily:'Quicksand-Regular',
    //flexDirection: "row",
    padding: 5,
    textAlign:'justify',
    //justifyContent: "center",
    //alignItems: "center" ,
  },
  textCenterHeader:{
    fontSize:28,
    color: "#0A7FBA",
    fontFamily:'Quicksand-SemiBold',
    textAlign:'center',
  },
  textCenterTiny:{
    fontSize:13,
    color: "#0A7FBA",
    fontFamily:'Quicksand-SemiBold',
    flexDirection: "row",
    padding: 5,
    paddingRight: 1,
    paddingLeft:10,
    justifyContent: "center",
    textAlign:'justify',
    alignItems: "center" ,
  },

  boton1:{
    marginBottom:10,
    backgroundColor:'#2ca0c2'

    
  },
  boton2:{
    marginBottom:10,
    backgroundColor:'#ee8506'
    
  },
  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  Content:{
    alignItems:'center',
    backgroundColor:'#FFF'
  },

  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2',
    
  },



 

})


export default createAppContainer(drawerNavigator)
