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
    <View style={styles.backgroundContainer} data-test="screen-home">
      <ImageBackground
        source={require('../../../assets/forest-theme-background.jpg')}
        style={styles.backgroundImage}
        data-test="background-image"
      >
        <View style={styles.container} data-test="view-main">
          <NavBar navigation={navigation} data-test="nav-bar" />
          <View style={styles.bottomContent} data-test="view-bottom-content">
            <Text style={styles.quote} data-test="text-quote">
              {Constants.QUOTE}
            </Text>
            <Text style={styles.author} data-test="text-author">
              {Constants.AUTHOR}
            </Text>
            <View style={styles.activities} data-test="view-activities">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                data-test="scroll-view-activities"
              >
                <ActivityComponent data-test="component-activity-1" />
                <ActivityComponent data-test="component-activity-2" />
                <ActivityComponent data-test="component-activity-3" />
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
