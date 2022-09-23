import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";

export default function App() {
	const Stack = createStackNavigator();

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: "transparent",
		},
	};

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
