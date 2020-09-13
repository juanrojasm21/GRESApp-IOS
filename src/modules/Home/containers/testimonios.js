import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, ActivityIndicator, Platform,StatusBar} from 'react-native';
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import { Video } from 'expo-av';
import { Container, Header,Left,Right,Content, Card, CardItem, Body, Button, Icon,Title} from 'native-base';
class Testimonios extends Component {
  _isMounted = false;
  constructor(props)
  {

    super(props);
    this.state = { 
    isLoading: true
  }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getData()
  }

  getData(){
  setTimeout(async()=>{
    this.getData()
    return fetch('https://caeptudea.com.co/gresapp/testimonios_ios.php')
    .then((response) => response.json())
    .then((responseJson) => {
      if(this._isMounted){
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          
        });
      }
      
    })
    .catch((error) => {
      console.error(error);
    });
    },1000
  )
  }

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  componentWillMount(){
    this.loadFonts();
  }
  componentWillUnmount() {
    this._isMounted = false;
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

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
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
              <Title style={styles.title}>Testimonios</Title>
          </Body>
          <Right>
          <Button transparent>
              
          </Button>
          </Right>
        </Header>
        <Content>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <View style={styles.MainContainer}>
  
            <FlatList
            
              data={ this.state.dataSource }

              renderItem={({item}) =>
              <View style={{  marginBottom:10, marginTop:10,overflow: 'hidden'}}>
                  <Video
                    source={{ uri: item.link }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    useNativeControls={true}
                    style={{ width: '100%', height: 300 }}
                  />
                  <Card>
                    <CardItem header bordered>
                        <Text style={styles.FlatListItemStyle} >{item.nombre} </Text>    
                    </CardItem>
                    <CardItem>
                        <Text style={styles.FlatListItemStyle} > {"Fecha: "}{item.fecha} </Text> 
                    </CardItem>
                  </Card>
                  
              </View>
              
              
              
              }

              keyExtractor={(item, index) => index.toString()}
              
              />


          </View>
        </Content>

      </Container>


            
    );
  }
}

const styles = StyleSheet.create({

  textCenter:{
    width:'100%',
    textAlign:'center',
    fontFamily:'CQuicksand-Regular'
  },

  MainContainer :{

    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    padding: 5,
  
  },

  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  Content:{
    backgroundColor:'#FFF'
    
  },

  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2'
  },

  FlatListItemStyle: {
      padding: 10,
      fontSize: 16,
      fontFamily:'Quicksand-Regular'
  },

});

export default Testimonios