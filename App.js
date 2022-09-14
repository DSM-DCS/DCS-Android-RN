 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Alert,
   BackHandler
 } from 'react-native';
import { WebView } from 'react-native-webview'
 
 const App = () => {
 
   return (
     <>
       <StatusBar/>
       <SafeAreaView style={styles.root}>
        <WebView 
             source={{ uri: 'https://amazing-buttercream-ff835c.netlify.app/' }}
             pullToRefreshEnabled={true}
             startInLoadingState={true}
             allowsBackForwardNavigationGestures={true}
             handleClose={()=>{
             Alert.alert('앱 종료', '앱을 종료하시겠습니까?', [
               {
                 text: '아니오',
                 onPress: () => null,
               },
               {text: '예', onPress: () => BackHandler.exitApp()},
             ]);
           }}/>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1
   },
 });
 
 export default App;