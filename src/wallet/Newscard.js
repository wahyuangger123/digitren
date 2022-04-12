import React from "react";
import {Text,View,StyleSheet,Image,} from "react-native";



export const Newscard = ({navigation,item}) => {
    return (
        <>
        <View style={styles.cardview}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Image style={styles.Image} source ={{uri: item.urlToImage}}/>
        <Text style={styles.description}>{item.description}</Text>
        </View>
       </>
    );
};

const styles = StyleSheet.create({
    cardview:{
    backgroundColor:'#EEEEEE',
    margin:10,
    borderRadius:5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 5,

    },
    title:{
        color: 'black',
        fontSize:20,
        fontWeight:'bold',

    },
    description:{
        color: 'black',
        fontSize:18,

    },
    Image:{
        width:390,
        height:300,
    },
    author:{
        fontSize:15,
        color:'black'
    }
})