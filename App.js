
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/Screens/SearchScreen';

const navigator = createStackNavigator({
   Search : SearchScreen,
}
,
{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Search'
}
});


export default createAppContainer(navigator);  



















/*Client ID
5wq7whn-8Y2ohjt_S_JJ9A

API Key
*/