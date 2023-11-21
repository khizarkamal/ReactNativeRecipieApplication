import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";

import { CATEGORIES } from './data/data';
import CategoriesScreen from './screens/CategoriesScreen';
// import MealsOverview from './screens/MealsOverviewScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import IconButton from './components/IocnButton';
import FavouritesScreen from './screens/FavouritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={
    {
      headerStyle: {
        backgroundColor: '#F15152'
      },
      sceneContainerStyle: {
        backgroundColor: '#F4D8CD'
      },
      drawerActiveTintColor: 'black',
      drawerActiveBackgroundColor: '#F15152',
      drawerStyle: {
        backgroundColor: '#F4D8CD',
        width: "80%"
      }
    }
  }>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => {
        return <Ionicons name="list" color={color} size={size}></Ionicons>
      }
    }}></Drawer.Screen>
    <Drawer.Screen name='Favourites' component={FavouritesScreen} options={{
      drawerIcon: ({ color, size }) => {
        return <Ionicons name="star" color={color} size={size}></Ionicons>
      }
    }}></Drawer.Screen>
  </Drawer.Navigator >
}

export default function App() {

  const pressHandler = () => {
    console.log("Press Handler");
  }


  return (
    <>
      <StatusBar ></StatusBar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F15152'
          },
          contentStyle: {
            backgroundColor: '#F4D8CD'
          }
        }}>
          <Stack.Screen
            name={'MealsCategories'}
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          // component={CategoriesScreen}
          // options={
          //   {
          //     title: 'All Categories',
          //   }
          // }
          >
          </Stack.Screen>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} options={({ route }) => {
            const catID = route.params.CategoryId;
            const category = CATEGORIES.find((category) => {
              return category.id === catID;
            });
            return {
              title: category.title
            }
          }}></Stack.Screen>
          <Stack.Screen name='MealDetail' component={MealDetailScreen} options={({ route }) => {
            const dishName = route.params.title;
            return {
              title: `${dishName.slice(0, 20)} ...`,
              headerRight: () => <IconButton icon="star" color="white" onPress={pressHandler}></IconButton>
            }
          }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create();
