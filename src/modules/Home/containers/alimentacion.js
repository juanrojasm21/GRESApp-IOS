import React, { Component } from 'react';
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import { Container, Header,Left,Right,Content, Card,Text, CardItem, Body, Button, Icon,Title} from 'native-base';
import { Alert, Image, Platform, StyleSheet, TouchableHighlight, View,StatusBar} from 'react-native';

import PropTypes from 'prop-types';

class Selected_Items_Array {
  constructor() {
    selectedItemsArray = [];
  }

  pushItem(option) {
    selectedItemsArray.push(option);
  }

  getArray() {
    return selectedItemsArray;
  }
}

class Checkbox extends Component {

  constructor() {

    super();

    this.state = { checked: null }
  }
  componentWillMount() {
    
    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.selectedArrayObject.pushItem({
          'key': this.props.keyValue,
          'label': this.props.label,
          'value': this.props.value
        });
      });
    }
    else {
      this.setState({ checked: false });
    }
  }
  

  toggleState(key, label, value) {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.selectedArrayObject.pushItem({ 'key': key, 'label': label, 'value': value });
      }
      else {
        this.props.selectedArrayObject.getArray().splice(this.props.selectedArrayObject.getArray().findIndex(x => x.key == key), 1);
      }
    });
  }

  render() {
    
    return (
      
      <TouchableHighlight
        onPress={this.toggleState.bind(this, this.props.keyValue, this.props.label, this.props.value)}
        underlayColor="transparent"
        style={{ marginVertical: 10 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: this.props.size, height: this.props.size, backgroundColor: this.props.color, padding: 3 }}>
            {
              (this.state.checked)
                ?
                (<View style={styles.checkedView}>
                  <Image source={require('../../../../assets/check.png')} style={styles.checkBoxImage} />
                </View>)
                :
                (<View style={styles.uncheckedView} />)
            }

          </View>

          <Text style={[styles.checkBoxLabelText, { color: this.props.labelColor }]}>{this.props.label}</Text>

        </View>

      </TouchableHighlight>
    );
  }
}

export default class Alimentacion extends Component {

  constructor() {

    super();

    selectedArrayOBJ = new Selected_Items_Array();
    this.state = { selectedItems: '',
    isReady:false,
    fontLoaded:false,
    checked:false}
    
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
  

  getSelectedItems = () => {
    
    if (selectedArrayOBJ.getArray().length == 0) {

      Alert.alert('Por favor responda las preguntas realizadas.');
    }
    else {
        if (selectedArrayOBJ.getArray().length==17){
            Alert.alert('Sus hábitos alimenticios son excelentes!!.');
        }
        else{
          if (selectedArrayOBJ.getArray().length >= 11 && selectedArrayOBJ.getArray().length < 17 ) {
          Alert.alert('','Tus hábitos son buenos!, aunque si es posible, mejora en los items que no marcaste en la encuesta');
          }
          else{
            Alert.alert('','Tus hábitos no son los recomendables, comienza a crear un estilo de vida más saludable con los consejos que te damos en el apartado de información nutricional.');
          }
        }
      // console.log(selectedArrayOBJ.getArray().map(item => item.label).join());
      this.setState(() => {
        return {
          selectedItems: selectedArrayOBJ.getArray().map(item => item.value).join()
        }
        
      });
    }
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
              <Title style={styles.title}>Test de hábitos alimenticios</Title>
          </Body>
          <Right>
          <Button transparent>
              
          </Button>
          </Right>
        </Header>
        <Content>
          <StatusBar translucent={true} backgroundColor="#2ca0c2" />
          <View style={styles.MainContainer}>
            <Card >  
              <CardItem>
                <Image source={require('../../../../assets/comida.jpg')} style={{ resizeMode: 'cover', height:200}}  />
              </CardItem>
              
            </Card>

            <Card>
              <CardItem bordered >
                <Text style={styles.textCenter}>Responda conscientemente las siguientes preguntas para evaluar sus hábitos alimenticios</Text>
              </CardItem>
              <CardItem >
              
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Tiene un horario regular de comidas?"
                    value="item_1" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Come 4 a 6 veces al día?"
                    value="item_2" />
              </CardItem>      
            </Card>

            <Card>
              <CardItem >
                
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Consume lacteos como: leche,queso,helados,jugos y postres preparados con leche?"
                    value="item_3" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Consume  frecuentemente carne de res,aves,pescados,mariscos,leguminosas(frijoles,lentejas,soya,garbanzos) o huevos?"
                    value="item_4" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Consume frutas,hortalizas,verduras o leguminosas verdes?"
                    value="item_5" />
              </CardItem>        
                    
            </Card>
            <Card>
              <CardItem >
                
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Consume más alimentos naturales que procesados?"
                    value="item_6" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Adiciona poca cantidad de azúcar?"
                    value="item_7" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Utiliza poca cantidad de grasa?"
                    value="item_8" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Adiciona poca sal a las preparaciones y no usa el salero en la mesa?"
                    value="item_9" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Utiliza hierbas y especias para dar sabor a los alimentos en lugar de exceso de sal?"
                    value="item_10" />
              </CardItem>          
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Prefiere las preparaciones cocidas, horneadas o crudas?"
                    value="item_11" />
              </CardItem>  
            </Card>
            
            <Card>

              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Se sirve los alimentos en pocillos, vasos o platos medianos o pequeños?"
                    value="item_12" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Sus porciones de alimentos son de tamaño mediano?"
                    value="item_13" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Evita repetir alimentos, aunque le gusten mucho?"
                    value="item_14" />
              </CardItem>
            </Card>
            <Card>
              <CardItem >
                
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Habitualmente come en casa o lleva lonchera al colegio o trabajo?"
                    value="item_15" />
              </CardItem>

              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Siempre come sentado a la mesa del comedor?"
                    value="item_16" />
              </CardItem>
              <CardItem>
                <Checkbox //size={30}
                    
                    keyValue={1}
                    selectedArrayObject={selectedArrayOBJ}
                    checked={this.state.checked}
                    color="#2ca0c2"
                    labelColor="#000"
                    label="¿Frecuentemente come en la compañía de familiares o amigos?"
                    value="item_17" />
              </CardItem>
              
            </Card>

            <Button onPress= {this.getSelectedItems} block danger style={styles.boton}>
              <Text  style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Evaluar alimentación</Text>
            </Button>

          </View>
        </Content>

      </Container>
      

        
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      paddingTop: (Platform.OS === 'ios') ? 0 : 0,
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    

    checkedView:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    checkBoxImage:
    {
      height: '80%',
      width: '80%',
      tintColor: 'white',
      resizeMode: 'contain'
    },

    uncheckedView:
    {
      flex: 1,
      backgroundColor: 'white'
    },

    checkBoxLabelText:
    {
      fontSize: 16,
      fontFamily:'Quicksand-Regular',
      paddingLeft: 10,
      paddingRight:50,
      width: '100%',
    },
    textCenter:{
      width:'100%',
      textAlign:'center',
      fontSize:17,
      fontFamily:'Quicksand-Regular',
      color: "#0A7FBA"
    },
    Content:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#FFF'
    },
    
    title:{
      color:'#FFF',
      fontFamily:'Quicksand-SemiBold'
    },
  
    body:{
      paddingVertical:30
    },

    boton:{
      marginBottom:10,
      backgroundColor:'#ee8506'
  
      
    },
    
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
    },

    header:{
      marginTop:Constants.statusBarHeight,
      backgroundColor:'#2ca0c2'
    }

  });

  Checkbox.propTypes =
    {
      size: PropTypes.number,
      keyValue: PropTypes.number.isRequired,
      selectedArrayObject: PropTypes.object.isRequired,
      color: PropTypes.string,
      label: PropTypes.string,
      labelColor: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool
    }

  Checkbox.defaultProps =
    {
      size: 30,
      color: '#2ca0c2',
      labelColor: '2ca0c2',
      label: 'Default',
      checked: false,
      value: 'Default'
    }