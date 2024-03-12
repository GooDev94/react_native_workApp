import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,TouchableWithoutFeedback, Pressable, TextInput} from 'react-native';
import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({}); //hashmap을 만들 예정으로 object로 진행
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChnageText = (payload) => setText(payload);
  const addToDo = () => {
    //텍스트가 비었는지 확인
    if(text == ""){
        return
    }

    //save to do
    //기존의 toDos와 새로운 ToDos를 결합하기 위해 Object.assign를 사용하였고 Date.now()를 사용하여 현재 date를 key로 사용함
    const newToDos = Object.assign(
                                    {}, 
                                    toDos, 
                                    {[Date.now()] : {text, work: working}}
                                  )
    setToDos(newToDos);
    setText("");
  }

  console.log(toDos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white" : theme.grey}}>Travel</Text>
        </TouchableOpacity >        
      </View>
      <View>
          <TextInput 
            onSubmitEditing={addToDo}
            onChangeText={onChnageText}
            returnKeyType='done'
            value={text}
            placeholder={working ? "Add a To Do" : "Where do you want to go?"} 
            style={styles.input}
          />
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
    color: "white",
    fontSize: 40,
    fontWeight: "600"
  },
  input:{
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 15
  }
});
