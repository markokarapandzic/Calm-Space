import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import Styles from './HomeScreenStyle';

import * as Constants from '../../../constants';
import ActivityComponent from '../../components/ActivityComponent/ActivityComponent';
import NavBar from '../../components/NavBar/NavBar';

const styles = StyleSheet.create(Styles);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={require('../../../assets/forest-theme-background.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <NavBar navigation={navigation} />
          <View style={styles.bottomContent}>
            <Text style={styles.quote}>{Constants.QUOTE}</Text>
            <Text style={styles.author}>{Constants.AUTHOR}</Text>
            <View style={styles.activities}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ActivityComponent />
                <ActivityComponent />
                <ActivityComponent />
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
