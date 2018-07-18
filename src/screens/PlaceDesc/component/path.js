import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TextSpaced from 'react-native-letter-spacing';
import styles from '../styles';


const Path =(props) => {
     return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.infoContainer}>
                <TextSpaced
                style={styles.title}
                letterSpacing={3}
                >
                    { ` ${'How to go'} ` }
                </TextSpaced>
                <Text style={styles.text}>
                    {props.guide}
                </Text>
            </View>
            </ScrollView>
        </View>
    )
}


export default Path;