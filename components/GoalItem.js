import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(itemData) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={itemData.onDeleteItem.bind(this, itemData.item)}
      >
        <Text style={{ color: "white", padding: 10 }} key={itemData.index}>
          {itemData.index + 1}‣ {itemData.item}
        </Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    fontSize: 18,
    backgroundColor: "#5e0acc",
    marginTop: 10,

    borderRadius: 5,
    marginBottom: 10,
  },
});
