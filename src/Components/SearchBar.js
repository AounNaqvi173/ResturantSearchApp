import React from 'react';
import {Text , View, Button , StyleSheet , TextInput}  from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term , onTermChange , onTermSubmit}) => {

    return (<View style={styles.SearchBar}>
        <Feather name='search' style={styles.iconstyle} />
         <TextInput autoCapitalize='none'
         autoCorrect={false} 
          placeholder='Search' 
         value={term}
         onChangeText= {newTerm => onTermChange(newTerm)}
         onEndEditing={() =>  onTermSubmit()}
          style={styles.SearchbarText}  />
    </View>)
};

const styles = StyleSheet.create({

    SearchBar : {
        backgroundColor:'grey',
        height: 45,
        marginTop:15,
        marginHorizontal: 15 ,
        borderRadius: 5,

        
        flexDirection:'row'
    }
    ,
    SearchbarText: {
        flex:1,
        fontSize:25
    },
    iconstyle: {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal: 15
    }
}); 


export default SearchBar;
