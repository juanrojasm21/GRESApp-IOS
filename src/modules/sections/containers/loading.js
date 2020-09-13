import React,{Component} from 'react'
import {View, AsyncStorage,StyleSheet,StatusBar} from 'react-native'
import {Spinner} from 'native-base'

class Loading extends Component{
    //voy a crear un asyncStorage para que cargue o no el home
    componentDidMount(){
        setTimeout(async()=>{
            let validationLogin=await AsyncStorage.getItem('userLogin')
            if (validationLogin){
                validationLogin=JSON.parse(validationLogin)
                if(validationLogin.perm){
                    this.props.navigation.navigate('Home')
                }
                else{
                    this.props.navigation.navigate('UserLogin')
                }
            }
            else{
                this.props.navigation.navigate('UserLogin')    
            }
        },2000)
        
    }
    render(){
        return(

            <View style={styles.Content}> 
                <StatusBar translucent={true} backgroundColor="#FFF" />
                <Spinner color='red' style={{width: 200 , height:150}}></Spinner>
            </View>
        )
            
        
    }

}

export default Loading     

const styles= StyleSheet.create({

    Content:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#FFF',
        alignItems:'center'
        
      }


})