import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Mock data for your menu
const FOOD_DATA = [
  {
    id: "1",
    name: "Grilled Chicken",
    price: "KES 450",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Fresh Salad",
    price: "KES 300",
    image: "https://via.placeholder.com/150",
  },
];

const Dashboard = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Food</Text>
      <FlatList
        data={FOOD_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
    paddingTop: 50,
  },
  header: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
  },
  image: { width: "100%", height: 150 },
  info: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodName: { fontSize: 18, fontWeight: "600" },
  price: { color: "#4CAF50", fontWeight: "bold" },
  addButton: {
    backgroundColor: "#4CAF50",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});

export default Dashboard;
