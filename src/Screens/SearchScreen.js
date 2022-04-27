import React from 'react';
import {Text , View, Button , StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';


const SearchScreen = () => {
    return (<View>
            <SearchBar />
        <Text> Hello</Text>
    </View>)
};

const styles = StyleSheet.create({

    text : {
        fontSize:12 
    }
}); 


export default SearchScreen;
