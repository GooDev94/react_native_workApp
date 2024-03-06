import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,TouchableWithoutFeedback, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0}>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback  
          onPress={() => console.log("pressed")}>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableWithoutFeedback >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //padding: "50px 10px",
    paddingHorizontal: 20,
  },
  header:{
    justifyContent: "space-between",
    flexDirection:"row",
    marginTop: 100
  },
  btnText:{
    color: "grey",
    fontSize: 40,
    fontWeight: "600"
  }
});
