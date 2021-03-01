import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Platform} from 'react-native';
import Helpshift from 'helpshift-react-native';

const App: () => React$Node = () => {
  async function init() {
    const apiKey = 'c5c522b08559cf0439ffbb5c63369595';
    const domain = 'wine.helpshift.com';
    const iosAppId = 'wine_platform_20201030140221771-446e07abeb46e78';
    const androidAppId = 'wine_platform_20201030140221799-de0b9230e5117f9';

    const appId = Platform.select({ios: iosAppId, android: androidAppId});
    Helpshift.init(apiKey, domain, appId);
  }

  async function login() {
    const user = {
      email: 'reynaldommaciel@gmail.com', // required if no identifier
      name: 'Reynaldo Marinho', // optional
    };
    Helpshift.login(user);
  }

  async function showFAQS() {
    Helpshift.showFAQs();
  }

  useEffect(() => {
    init();
    setTimeout(() => {
      login();
    }, 3000);
    setTimeout(() => {
      showFAQS();
    }, 6000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
