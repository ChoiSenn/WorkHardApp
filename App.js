import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import React, { useState } from 'react';
import { theme } from "./color";

export default function App() {
  const [working, setWorking] = useState(true);  // work를 누른 상태인지 아닌지
  const [text, setText] = useState("");
  const travel = () => setWorking(false);  // onPress를 통해 호출되면 실행
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: working ? theme.grey : "white"}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput onChangeText={onChangeText} value={text} placeholder={working ? "Add a To Do" : "Where do you want to go?"} style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header:{
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "space-between",
  },
  btnText:{
    fontSize: 38,
    fontWeight: "600",
  },
  input:{
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: 30,
    fontSize: 17,
  },
});
