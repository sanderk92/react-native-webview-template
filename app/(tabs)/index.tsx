import React from "react";
import {WebView} from 'react-native-webview';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function WebViewScreen() {
    return (
        // TODO Safe area does not work
        // <SafeAreaProvider>
        //     <SafeAreaView>
                <WebView source={{ uri: 'https://sanderkrabbenborg.com/' }} style={{ flex: 1 }} />
            // </SafeAreaView>
        // </SafeAreaProvider>
    )
}

