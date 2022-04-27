import React from 'react';
import {Text , View, Button , StyleSheet , TextInput}  from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const SearchBar = () => {
    return (<View style={styles.Searchtext}>
        <FontAwesome name='search' style={styles.iconstyle} />
         <TextInput  placeholder='Search' style={styles.SearchbarText}/>
    </View>)
};

const styles = StyleSheet.create({

    SearchBar : {
        backgroundColor:'grey',
        height: 30,
        marginTop:15,
        marginHorizontal: 15 ,
        borderRadius: 5,
        flexDirection:'row'
    }
    ,
    SearchbarText: {
        flex:1
    },
    iconstyle: {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal: 15
    }
}); 


export default SearchBar;
