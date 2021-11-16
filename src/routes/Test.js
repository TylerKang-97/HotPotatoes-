import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView,
Platform, TouchableWithoutFeedback, Keyboard, Text,
TextInput, View, Button
} from 'react-native';


const Test = () => {
    const [title, setTitle ] = useState("");
    const [content, setContent ] = useState("");
    const [isTouched, setIsTouched ] = useState(false);
    const [isTouched2, setIsTouched2 ] = useState(false);

    return (
    <KeyboardAvoidingView>
        <View>
          <View style={styles.Header}>
          <Text style={styles.title}>{isTouched ? title : "제목" }</Text>
          <Text style={styles.content}>{isTouched2 ? content : "내용" }</Text>
          </View>
          <View style={styles.contentForm}>
          <TextInput
          style={styles.inputTitle} 
          placeholder="제목을 입력해주세요"
          onChangeText={text => setTitle(text)}
          value={title}
          returnKeyType="next" // 입력 종료:  done, 개행시: next
          />
          <View>
            <Button title="제목" onPress={() => setIsTouched(true)}/>
          </View>
          
          <TextInput
          style={styles.inputContent}
          placeholder="내용 입력해주세요."
          onChangeText={text => setContent(text)}
          value={content}
          multiline={true} // 개행 가능
          returnKeyType="done"
          blurOnSubmit={true}
           />
          <View>
            <Button title="Submit" onPress={() => setIsTouched2(true)}/>
          </View>
          </View>
        </View>
    </KeyboardAvoidingView>
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDEAEB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '20px',
    },
    content: {
      textAlign: 'center',
    },
    inputTitle: {
      height: 40,
      marginTop: 10,
      marginLeft: 110,
      marginRight: 50,
      padding: 10,
    },
    inputContent: {
      marginLeft: 120,
      marginRight: 100,
      marginTop: 10,
      height: 23,
    },
    contentForm: {
      marginTop: 30,
      borderWidth: 3,
    },
    Header: {
      height: 100,
    }

  });
export default Test;