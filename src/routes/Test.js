import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SectionList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const Test = () => {
    const [comment, setComment ] = useState("");

    return (
      <View style={styles.container}>
        
    <Card style={styles.card}>
        <Card.Content>
        <Text>
              {comment ? comment : "글을 입력해 주세요 :)" }
        </Text>
        <StatusBar style="auto" />
        <TextInput 
          style={styles.input}
          onChangeText={text => setComment(text)}
          value={comment}
          returnKeyType="done" // 입력 종료:  done, 개행시: next
          />
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
      </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDEAEB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    card: {
    width: 300,
    height: 215,
    },
  });
export default Test;