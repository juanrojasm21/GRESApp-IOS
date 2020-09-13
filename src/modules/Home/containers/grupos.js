import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import {StyleSheet, Image,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content, Accordion,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';
const dataArray = [
  { title: "Lacteos", content: "Leche, yogurt, quesos, preferiblemente bajos en grasa. Se recomienda 2 a 3 porciones diarias. Son fuente escencial de proteína y calcio para mantener los musculos y huesos sanos" },
  { title: "Carnes y equivalentes", content: "Carnes magras (con mínimo de grasa)de res, cerdo, cordero; pollo sin piel, pescados, mariscos y huevos. Se recomienda 2 a 3 porciones diarias. Fuente de proteínas, calcio, vitaminas y minerales, fundamentales para musculos y huesos." },
  { title: "Leguminosas", content: "Frijoles, lentejas, garbanzos, soya. Se recomienda 2 a 3 porciones diarias. Fuente de proteínas, calcio, vitaminas y minerales, fundamentales para musculos y huesos." },
  { title: "Frutas y verduras", content: "Preferiblemente de color intenso como: rojo (tomate,fresas), verde intenso(espinaca, acelga, brócoli), amarillo (zanahoria, papaya, mango). 5 porciones diarias es lo recomendado. Fuente de proteínas, calcio, vitaminas y minerales, fundamentales para musculos y huesos." },
  { title: "Cereales de grano entero", content: "Trigo, centeno, cebada, avena, arroz y maíz. Productos de panadería. Ej: Panes o tostadas integrales. Cereales listos para desayuno, o base de salvado de trigo o avena. La recomendación varia según la cantidad de calorías requeridas. Son fuente importante de vitaminas, minerales y fibra." },
  { title: "Cereales refinados, plátanos y tubérculos", content: "Harina de trigo refinada, arroz, maíz trillado y productos de panadería elaborados con harinas refinadas así como papas, plátanos, yuca, ñame, arracacha. No hay recomendaciones establecidas. Aunque no tienen las mismas ventajas de los granos enteros, hacen parte de la alimentación y son fuente de carbohidratos." },
  {title: "Azúcares", content: "Azúcar, miel, panela y todas las preparaciones que las contengan: dulces, postres, golosinas y gaseosas. No hay recomendaciones establecidas. Este grupo y el siguiente se consideran alimentos de alta densidad calórica (en pequeñas cantidades continen más calorías); hacen parte de la alimentación y son útiles cuando hay que incrementar el aporte calórico."},
  {title: "Grasas", content: "Aceites, mantecas, margarina, nueces, semillas, aguacate y coco."},
  {title: "Sal", content: "Sal de cocina, bicarbonato y alimentos procesados que continen alto contenido de sodio (salchichas, chorizos, salsas, caldos en polvo, etc). Moderar el consumo de sal. Es la principal fuente de sodio, necesario para el funcionamiento del organismo; pero en exceso hay riesgo de aumentar la presión arterial. Por eso se recomienda evitar el salero de mesa y los alimentos procesados."},
];

class Grupos extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 20,
        paddingRight: 1,
        justifyContent: "flex-start",
        alignItems: "center" ,
        backgroundColor: "#FFF" }}>
        
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}


      <Text style={{ marginRight:20, fontFamily:"Quicksand-SemiBold", color:'#2ca0c2' }}>

          {"  "}{item.title}{" "}
        
        </Text>
        
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#FAFAFA",
          padding: 10,
          fontFamily:"Quicksand-Regular",
          fontSize:17,
          justifyContent: "flex-start",

        }}
      >
        {item.content}
      </Text>
    );
  }
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
        <Button transparent>
          <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
        </Button>
        </Left>
        <Body>
            <Title style={styles.title}>Información nutricional</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
        </Header>
        <Content padder>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <View style={styles.MainContainer}>
        
        <Card > 
          
          <CardItem>
            <Image source={require('../../../../assets/grupos.jpg')} style={{ resizeMode: 'cover', height:200}}  />
          </CardItem>
          
        </Card>
          <CardItem bordered >
            <Text style={styles.textCenter}>A continuación encontrará los grupos, las opciones de alimentos, numero de porciones recomendas, así como principales nutrientes y sus funciones</Text>
          </CardItem>
          <Accordion dataArray={dataArray} expanded={0}
                     renderHeader={this._renderHeader}
                     renderContent={this._renderContent}/>
        </View>
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
  
  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  },

  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2'
  },

  MainContainer:
    {
      marginVertical:0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#FFF'
    },
  Content:{
    
    backgroundColor:'#FFF',
    //marginTop: Constants.statusBarHeight
  }
 

})


export default Grupos