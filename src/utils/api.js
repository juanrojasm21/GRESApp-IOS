import { Alert } from "react-native"

const URL=''
const END_POINT='https://www.caeptudea.com.co/gresapp/'
class API{
    async getData(){

        const query=await fetch(URL)
        const data=await query.json()
        return data
    }
    async valLog(user,pass){

        const query=await fetch(`${END_POINT}login.php?user=${user}&pass=${pass}`)
        const data=await query.json()
        return data
    }

    registerData(user,pass,sexo,edad,ocupacion,tipo_amp){

        fetch(`${END_POINT}register.php`,{
            method:'POST',
            body:JSON.stringify({
                pUser:user,
                pPass:pass,
                pSexo:sexo,
                pEdad:edad,
                pOcupacion:ocupacion,
                pTipo:tipo_amp

            }),
            headers:{
               
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .catch(error=>console.error('Error',error))
        .then(response=>{
            if(response.status==1){
                Alert.alert('Exitoso Registro')
            }
            else{
                if(response.status==2){
                    Alert.alert('El usuario ya se encuentra registrado.')
                }
                else{
                    Alert.alert('Error al registrar el usuario')
                }
            }
        })
    }
    
    async getFaq(){
        const query=await fetch(`${END_POINT}faqs.php`)
        const data= await query.json()
        return data

    }
}




export default new API()
