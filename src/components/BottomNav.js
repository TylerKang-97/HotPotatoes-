import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Pages from './Pages';

import { FontAwesome } from '@expo/vector-icons';
/**
 * comments-o : 토론 아이콘( SMS같이 생김 )
 * sign-in : 로그인 아이콘
 * sign-out : 로그아웃 아이콘
 * info-circle : 내 정보 (원형 안에 i 적힌 모양)
 * home: 홈 모양
 *
 * 적용 예시
 * <FontAwesome name="comments-o" size={24} color="black" />
 */

const BottomNav = ({ now, pages, navigation, locale }) => {
    const [index, setIndex] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [locale, setLocale] = useState('kor');

    const [init, setInit] = useState(false);

    useEffect(() => {
        // if (navigation !== null && navigation !== undefined)
        setInit(true);
    }, []);

    console.log(now);
    const routesObj = [
        {
            page: pages.home,
            title: locale === 'kor' ? '홈' : 'home',
            icon: 'home',
        },
        {
            page: pages.debateList,
            title: locale === 'kor' ? '토론 목록' : 'Debates List',
            icon: 'comments-o',
        },
        {
            page: pages.login,
            title: locale === 'kor' ? (isLoggedIn ? '로그아웃' : '로그인') : isLoggedIn ? 'sign out' : 'sign in',
            icon: isLoggedIn ? 'sign-out' : 'sign-in',
        },
    ];

    return (
        <View style={styles.container}>
            {init ? (
                routesObj.map((m) => (
                    <TouchableOpacity
                        style={{
                            ...styles.buttonContainer,
                            backgroundColor: now === m.page ? 'teal' : 'white',
                        }}
                        key={m.page}
                        onPress={() => {
                            // navigation(m.page);

                            console.log('Login.js에서 navigation:', navigation);
                            console.log('Login.js에서 locale:', locale);
                            console.log('Login.js에서 pages:', pages);
                            console.log('Login.js에서 m:', m);
                        }}
                    >
                        <FontAwesome name={m.icon} size={24} color="black" />
                        <Text>{m.title}</Text>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>로딩중...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'tomato',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        // justifyContent: 'center',
        flex: 1,
        paddingBottom: '1%',
        paddingHorizontal: '3%',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
    },
});

export default BottomNav;
