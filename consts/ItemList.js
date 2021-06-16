import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'

export default class ItemList extends React.Component{
    render(){
        const {img,title, bg, onPress} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:-20
                }}
            >
                    <Image
                        source={img}
                        style={{width:80,height:80, borderRadius:20}}
                    />

                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontFamily:"Bold",
                             fontSize:20,
                             paddingHorizontal:20,
                             width:300
                         }}>{title}</Text>
                          <Text style={{
                             color:"black",
                             fontFamily:"Medium",
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                           EMIS:33616
                         </Text>
                         <Text style={{
                             color:"#f58084",
                             fontFamily:"Medium",
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                           Peshawar
                         </Text>
                    </View>
                
            </TouchableOpacity>
        )
    }
}