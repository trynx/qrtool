/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { Dimensions, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"
import { WebView } from "react-native-webview"
// import HTML from "./webview.html"

const htmlContent = require("./webview.html")

const chainReactLogo = require("../../assets/images/demo/cr-logo.png")
const reactNativeLiveLogo = require("../../assets/images/demo/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/demo/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/demo/rnn-logo.png")

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    /* 
  
  <script>function configureGrowSdk() {let config = {environment: 'DEV',version: 1,events: {onSuccess: (response) => {},onFailure: (response) => {},onError: (response) => {},onTimeout: (response) => {},onWalletChange: (state) => {},}};growPayment.init(config);}(function () {var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = 'https://cdn.meshulam.co.il/sdk/gs.min.js';s.onload = configureGrowSdk;var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);})(); function renderPaymentOptions() {growPayment.renderPaymentOptions('3496b2f2aee05fbb743e7ac9ecc00a31%NTE1ODIz');function show() {alert('Groot'})}}</script>
  */
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" tx="demoCommunityScreen.title" style={$title} />
        <Text tx="demoCommunityScreen.tagLine" style={$tagline} />
        <Text style={$tagline}>Groot</Text>
        {/* Reference: https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native */}
        <WebView
          // Reference: https://github.com/react-native-webview/react-native-webview/blob/master/docs/Debugging.md#debugging-webview-contents
          webviewDebuggingEnabled
          // injectJavaScript={() => {
          //   return "alert('second message')"
          // }}
          // injectedJavaScript={runFirst}
          // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
          onMessage={(event) => {}}
          // javaScriptEnabled
          originWhitelist={["*"]}
          // source={{
          //   // html: "<h1>Hello world</h1><button onclick='renderPaymentOptions()'>click me</button>",
          //   // html: "",
          //   // html: htmlContent,
          //   // baseUrl: "https://github.com/expo/config-plugins/issues/160",
          //   uri: "https://github.com/expo/config-plugins/issues/160",
          //   // uri: "https://sandbox.meshulam.co.il/credit-checkout?l=441e0d0311e7da167f134b8a62eb2ee1%NTE2Mjgx",
          // }}
          // Reference: https://stackoverflow.com/a/44140114/8394704
          source={htmlContent}
          style={{ backgroundColor: "blue", height: Dimensions.get("window").height / 2 }}
        />
        {/* <WebView
          source={{
            uri: "https://sandbox.meshulam.co.il/product-checkout?l=72d016aa053bae720bcdb2a5a0c904e0%NTE1ODIy",
          }}
          style={{ backgroundColor: "red", height: Dimensions.get("window").height * 0.7 }}
        /> */}

        <Text preset="subheading" tx="demoCommunityScreen.joinUsOnSlackTitle" />
        <Text tx="demoCommunityScreen.joinUsOnSlack" style={$description} />
        <ListItem
          tx="demoCommunityScreen.joinSlackLink"
          leftIcon="slack"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          onPress={() => openLinkInBrowser("https://community.infinite.red/")}
        />
        <Text
          preset="subheading"
          tx="demoCommunityScreen.makeIgniteEvenBetterTitle"
          style={$sectionTitle}
        />
        <Text tx="demoCommunityScreen.makeIgniteEvenBetter" style={$description} />
        <ListItem
          tx="demoCommunityScreen.contributeToIgniteLink"
          leftIcon="github"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite")}
        />
        <Text
          preset="subheading"
          tx="demoCommunityScreen.theLatestInReactNativeTitle"
          style={$sectionTitle}
        />
        <Text tx="demoCommunityScreen.theLatestInReactNative" style={$description} />
        <ListItem
          tx="demoCommunityScreen.reactNativeRadioLink"
          bottomSeparator
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeRadioLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://reactnativeradio.com/")}
        />
        <ListItem
          tx="demoCommunityScreen.reactNativeNewsletterLink"
          bottomSeparator
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeNewsletterLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://reactnativenewsletter.com/")}
        />
        <ListItem
          tx="demoCommunityScreen.reactNativeLiveLink"
          bottomSeparator
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeLiveLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://rn.live/")}
        />
        <ListItem
          tx="demoCommunityScreen.chainReactConferenceLink"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={chainReactLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://cr.infinite.red/")}
        />
        <Text preset="subheading" tx="demoCommunityScreen.hireUsTitle" style={$sectionTitle} />
        <Text tx="demoCommunityScreen.hireUs" style={$description} />
        <ListItem
          tx="demoCommunityScreen.hireUsLink"
          leftIcon="clap"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          onPress={() => openLinkInBrowser("https://infinite.red/contact")}
        />
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
  backgroundColor: "red",
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
  alignSelf: "stretch",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}
