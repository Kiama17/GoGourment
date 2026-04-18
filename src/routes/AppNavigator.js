import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AppTabs from "./AppTabs";
import AuthStack from "./AuthStack";

export default function RootNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking login (replace with Firebase/Auth logic)
    const checkUser = async () => {
      const fakeUser = null; // replace with real auth check
      setUser(fakeUser);
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <AppTabs /> : <AuthStack />;
}
