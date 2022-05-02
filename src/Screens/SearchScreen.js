import React, {useState} from 'react';
import {Text , View, Button , StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../Api/yelp';

const SearchScreen = () => {
    const [term , setSearchTerm] = useState('');
    const [results , setResult] = useState([])
    
        const SearchApi= async () => {
            const response = await yelp.get('/search', {
                params: {
                    Limit: 50,
                    term : term,
                    location: 'london'
                }
            });
            setResult(response.data.businesses);
        };

    return (<View>
            <SearchBar 
             term={term}
             onTermChange= {newTerm => { setSearchTerm(newTerm)}}
                 onTermSubmit = { () =>  SearchApi()}
             />
            <Text>Search Screen</Text>
            <Text>we have {results.length}</Text>
    </View>)
};

const styles = StyleSheet.create({

    text : {
        fontSize:12 
    }
}); 


export default SearchScreen;
