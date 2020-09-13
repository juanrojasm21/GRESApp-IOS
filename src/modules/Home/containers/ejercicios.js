import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import {StyleSheet,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content, Card, CardItem, Text, Body, Button, Icon,Title,Tab, Tabs, ScrollableTab} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

class Ejercicios extends Component {
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
      
      <Container>
        <Header noShadow style={styles.header}>
        <Left>
        <Button transparent>
          <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
        </Button>
        </Left>
        <Body>
            <Title style={styles.title}>Ejercicios de rehabilitación</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
      </Header>
        <Content padder contentContainerStyle={styles.Content}>
        <ScrollView>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <Card>
          <CardItem  bordered>
            <Text style={styles.textCenter}>A continuación encontrará una rutina de ejercicios planteada por expertos en el área de la salud y rehabilitación. Se recomienda seguir al pie de la letra la rutina con el fin de tener un exitoso proceso de rehabilitación</Text>
          </CardItem>
        </Card> 
        <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Lunes">
              <ScrollView>
                <Card>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Estiramiento</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        3 Ejercicios
                        10 repeticiones c/u
                        Sostener por 10 segundos
                        2 veces al día
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Estiramiento')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>   
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Fuerza</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        4 Ejercicios
                        8 a 10 repeticiones c/u
                        2 veces al día
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Fuerza')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Aeróbicos</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Aerobicos')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Marcha</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        20-30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Marcha')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Equilibrio</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        3 Ejercicios
                        5 a 10 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Equilibrio')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                </Card>
                </ScrollView>
            </Tab>
            <Tab heading="Martes">
            <ScrollView>
            <Card>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Aeróbicos</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Aerobicos')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem >
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Marcha</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        20-30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Marcha')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    
                </Card>
                </ScrollView>
            </Tab>
            <Tab heading="Miercoles">
            <ScrollView>
            <Card>
                    <CardItem >
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Hoy puedes descansar, aunque recuerda:</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        La alimentación también es un factor fundamental en la rehabilitación, procura siempre seguir las recomendaciones de hábitos alimenticios.
                        </Text>
                    </Body>
                    </CardItem>
                    
                </Card>
                </ScrollView>
            </Tab>
            <Tab heading="Jueves">
            <ScrollView>
            <Card>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Estiramiento</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        3 Ejercicios
                        10 repeticiones c/u
                        Sostener por 10 segundos
                        2 veces al día
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Estiramiento')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Fuerza</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        4 Ejercicios
                        8 a 10 repeticiones c/u
                        2 veces al día
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Fuerza')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Aeróbicos</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Aerobicos')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Marcha</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        20-30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Marcha')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}} >Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Equilibrio</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        3 Ejercicios
                        5 a 10 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Equilibrio')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                </Card>
                </ScrollView>
            </Tab>
            <Tab heading="Viernes">
            <ScrollView>
            <Card>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Aeróbicos</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Aerobicos')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Marcha</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        20-30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Marcha')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    
                </Card>
                </ScrollView>
            </Tab>
            <Tab heading="Sabado">
            <ScrollView>
            <Card>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Hoy puedes descansar, aunque recuerda:</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        La alimentación también es un factor fundamental en la rehabilitación, procura siempre seguir las recomendaciones de hábitos alimenticios.
                        </Text>
                    </Body>
                    </CardItem>
                    
                </Card>
                </ScrollView>
            </Tab>
            <Tab heading="Domingo">
            <ScrollView>
            <Card>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Estiramiento</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        3 Ejercicios
                        10 repeticiones c/u
                        Sostener por 10 segundos
                        2 veces al día
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Estiramiento')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Fuerza</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        4 Ejercicios
                        8 a 10 repeticiones c/u
                        2 veces al día
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Fuerza')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Aeróbicos</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Aerobicos')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Marcha</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        20-30 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Marcha')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontFamily:'Quicksand-SemiBold', color:'#0A7FBA'}}>Equilibrio</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{fontFamily:'Quicksand-Regular', color:'#0A7FBA'}}>
                        3 Ejercicios
                        5 a 10 minutos
                        </Text>
                        <Button onPress= {()=>{this.props.navigation.navigate('Equilibrio')
                          }} block danger style={styles.boton}>
                            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Ver ejercicios</Text>
                        </Button>
                    </Body>
                    </CardItem>
                </Card>
                </ScrollView>
            </Tab>
            </Tabs>
        
        </ScrollView>    
        </Content>
        
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    width:'100%',
    fontSize:17,
    textAlign:'center',
    color: "#0A7FBA",
    fontFamily:'Quicksand-Regular'
  },
  Content:{
    justifyContent:'center',
    backgroundColor:'#FFF',
  },
  boton:{
    marginBottom:10,
    backgroundColor:'#ee8506'
    
  },
  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2'
  },


})


export default Ejercicios