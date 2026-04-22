import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AppNavigator from "./routes/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
