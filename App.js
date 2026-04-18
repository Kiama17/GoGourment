import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";

// 1. Import your newly organized screens
import Dashboard from "./src/screens/Dashboard";
import LoadingScreen from "./src/screens/LoadingScreen"; // A simple view with your splash logo
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  // 2. Logic to handle the Splash Screen timing
  useEffect(() => {
    setTimeout(() => {
      // This is where you'll later check the backend for a saved session
      setIsLoading(false);
    }, 2000); // Keeps splash visible for 2 seconds
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken == null ? (
          // 3. Auth Screens (User not logged in)
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          // 4. Main App (User logged in)
          <Stack.Screen name="Dashboard" component={Dashboard} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
