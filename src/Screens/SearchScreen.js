import React, {useState} from 'react';
import {Text , View, Button , StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../Api/yelp';

const SearchScreen = () => {
    const [term , setSearchTerm] = useState('');
    const [results , setResult] = useState([]);
    const [errorMassage , setErrorMassage] =useState('');
        const SearchApi= async () => {
       
        try{     const response = await yelp.get('/search', {
                params: {
                    Limit: 50,
                    term : term,
                    location: 'london'
                }
            });
            setResult(response.data.businesses);
        }catch(err) {
            setErrorMassage('Something Went Wrong'); 
        }
        
    };

    return (<View>
            <SearchBar 
             term={term}
             onTermChange= {newTerm => { setSearchTerm(newTerm)}}
                 onTermSubmit = { () =>  SearchApi()}
             />
            {errorMassage ? <Text>{errorMassage}</Text> : null}
            <Text>we have {results.length}</Text>
    </View>)
};

const styles = StyleSheet.create({

    text : {
        fontSize:12 
    }
}); 


export default SearchScreen;
