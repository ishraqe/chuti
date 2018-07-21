import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import VersionNumber from 'react-native-version-number';

import styles from './styles';

const handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
};

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.versionContainer}>
                    <Text style={styles.version}>Version</Text>
                    <Text style={styles.version}>{VersionNumber.appVersion}</Text>
                </View>
               <View style={styles.termsContainer}>
                    <Text style={styles.terms}>
                        This is an open sourced project made with the hope of helping travelers from Bangladesh. And I believe, I won't be any kind of financially benefitted from this application.  
                        All the contents are collected and I hold no copyright of those contents. 
                        Upon complaint towards any contents, it will be taken down.
                    </Text>
                    <Text style={styles.thanks}>
                        Special Thanks to/ Contents collected from:
                    </Text>
                    <TouchableOpacity
                        onPress={()=> handleClick('https://www.facebook.com/ChutiTravels/')}
                    >
                        <Text style={styles.list}>1. Chuti Travel Group</Text>     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> handleClick('https://www.facebook.com/groups/mail.tob/')}
                    >
                        <Text style={styles.list}>2. Travelers of Bangladesh (ToB)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> handleClick('https://www.facebook.com/mhmehadi')}
                    >
                        <Text style={styles.list}>3. Mh. Mehedi</Text>     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> handleClick('https://www.facebook.com/jakir007')}
                    >
                        <Text style={styles.list}>4. Jakir Hossain</Text>  
                    </TouchableOpacity>
               </View>
            </View>
        </View>
    )
};

export default About;