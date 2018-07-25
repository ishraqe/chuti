# Chuti Travel Group
![Preview](./src/assets/git-assets/02.jpg)

#### An app to help bangldeshi travellers, built on top of react-native. 
[![Preview](./src/assets/git-assets/play.png)](https://play.google.com/store/apps/details?id=com.chutitravelgroup)

## Use cases
This app describes tourist spots of Bangladesh and how to go there, with the aim of helping the travellers around Bangladesh


In popular places view you can review all the places and can press on them to view the detailed screen. All the data are coming from firebase .


Download the APK : [Installable APK](https://github.com/ishraqe/chuti/raw/master/apk/app-release.apk)

## How to create your own copy of this app?
### Prerequisites
To create an own copy of this application, you have some prerequisites. They are -

 - [NodeJS](https://nodejs.org/en/) installed on your system.
 - [React Native](https://facebook.github.io/react-native/) installed on your system.
 - Have the [Android SDK](https://developer.android.com/studio/index.html) and paths set properly. 
 - An android emulator or real device to run the app.
 - A google account for having [Firebase Web](https://firebase.google.com/docs/web/setup) configuration.


### Make own copy
First clone the repository using:

    git clone https://github.com/ishraqe/chuti.git

Then install the dependencies using:

    npm install

At this point you need to have the configurations for a Firebase App. Just go to [Firebase Console](https://firebase.google.com/docs/web/setup) and follow the instructions. Then open the file named `App.js` from the `src` folder. Add the Firebase configurations to the file. The file looks something like this:

    // import and configure firebase
    import  firebase from 'firebase';
    
    const firebaseConfig = {
      apiKey: [YOUR API KEY],
      authDomain: [YOUR AUTH DOMAIN],
      databaseURL: [YOUR DATABASE URL],
      storageBucket: [STORAGE BUCKET],
    }
    export const firebaseApp = firebase.initializeApp(firebaseConfig)

 Run the following command to run the app on the emulator.

    react-native run-android
Now, you have your own copy of this application!

## License
Do anything you wanna do!

## Credits
All credit goes to all library creators and contributors to those libraries and those awesome people from whome i have collected contents from.

## Built With
The project is built on top of react-native using the following major libraries:
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) - for a navigation system
* [redux](https://redux.js.org/) - for state management
* [Firebase](https://firebase.google.com/) - for storage and database
* [lottie-react-native](https://github.com/airbnb/lottie-react-native) - for beautiful animations
* [react-native-animatable](https://github.com/oblador/react-native-animatable) - for animating text and views
* [react-native-swiper](https://github.com/leecade/react-native-swiper) - for swiping through images
* [react-native-action-button](https://github.com/mastermoo/react-native-action-button) - for the floating action button
* [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast) - for toast message


Made with ❤️ by [Ishraqe Manjur](https://twitter.com/ishraqe_manjur)

