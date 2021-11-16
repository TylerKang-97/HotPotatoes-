import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';
// import Pages from '../components/Pages';
import Pages from '../components/Pages';
import Test from './Test';
const Home = ({ navigation, locale, pages }) => {
    // const [pages, setPages] = useState(Pages.kor);
    const [init, setInit] = useState(true);
    // const [lang, setLang] = useState(locale);
    // useEffect(() => {
    //     lang !== undefined ? setInit(true) : setInit(false);
    // }, [lang]);

    console.log('Home.js에서 navigation:', navigation);
    console.log('Home.js에서 locale:', locale);
    console.log('Home.js에서 pages:', pages);

    return init ? (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={{ textAlign: 'center' }}>뜨거운 감자 앱</Text>
            </View>
            <View style={styles.mainScreen}>
                {/* <Text>mainScreen</Text> */}
                <Button title="토론 목록으로 입장" style={styles.enterDebateList} onPress={() => navigation.navigate(pages.debateList)} />

                <Button
                    title="Go to Test"
                    onPress={() => {
                        navigation.navigate(pages.test);
                    }}
                />
            </View>
            <View style={styles.bottomBar}>
                {/* <Text style={styles.button} onPress={() => navigation.navigate('Login')}>
                    LOGIN
                </Text> */}
                <Button title="로그인 하기" style={styles.login} onPress={() => navigation.navigate(pages.login)} />
            </View>
            <BottomNav locale={locale} now={pages.home} pages={pages} navigation={navigation} />
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>로딩중... 잠시만 기다려주세요.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingBottom: '2%',
        color: 'white',
    },
    topBar: {
        backgroundColor: 'tomato',
        flex: 1,
        justifyContent: 'center',
    },
    mainScreen: {
        backgroundColor: 'teal',
        flex: 8,
        justifyContent: 'center',
    },
    bottomBar: {
        flex: 1,
        justifyContent: 'center',
    },
    login: {
        // padding: 10,
        // margin: 10,
        backgroundColor: 'blue',
    },
    enterDebateList: {
        padding: 10,
        margin: 10,
        backgroundColor: 'green',
    },
    addDebate: {
        padding: 10,
        margin: 10,
        backgroundColor: 'orange',
    },
});

export default Home;
