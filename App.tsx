import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import MealDetailScreen from './src/screens/MealDetailScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: '#211C6A'},
          }}>
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
