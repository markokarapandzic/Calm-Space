import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Header, Icon, Image } from 'react-native-elements';
import { connect } from 'react-redux';

import { stopSoundsModal } from '../../store/actions/ActionCreator';
import * as Constants from '../../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    backgroundColor: 'white',
    ...Constants.CSS_SHADOW,
  },
  soundBtn: {
    height: '100%',
    width: '100%',
  },
  soundContainer: {
    flexBasis: 100,
    flexGrow: 1,
    height: 170,
    marginHorizontal: 10,
    marginVertical: 5,
    maxWidth: 105,
    padding: 10,
    ...Constants.SHADOWS_CSS,
  },
  soundImage: {
    height: '100%',
    width: '100%',
  },
  soundStatusText: {
    backgroundColor: Constants.THEME.colors.black,
    borderRadius: 8,
    color: Constants.THEME.colors.gold,
    fontWeight: 'bold',
    position: 'absolute',
    right: 5,
    textAlign: 'center',
    top: 5,
    width: 30,
  },
  soundText: {
    textAlign: 'center',
  },
  sounds: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
});

const SoundsComponent = ({ navigation, stopSoundsModal }) => {
  const images = [
    require('../../../assets/sounds-lofi.jpg'),
    require('../../../assets/sounds-rain-2.jpg'),
    require('../../../assets/sounds-swamp.jpg'),
    require('../../../assets/sounds-tropical.jpg'),
    require('../../../assets/sounds-wilderness.jpg'),
    require('../../../assets/sounds-winter.jpg'),
    require('../../../assets/sounds-city-night.jpg'),
  ];

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => stopSoundsModal()}>
            <Icon type={Constants.ICON_TYPE.FEATHER} name="x" size={Constants.MENU_ICON_SIZE} />
          </TouchableOpacity>
        }
        centerComponent={
          <Text h3 style={styles.headerTitle}>
            Sounds
          </Text>
        }
        containerStyle={styles.headerContainer}
        data-test="header"
      />
      <View style={styles.sounds}>
        <View style={styles.soundContainer}>
          <TouchableOpacity
            style={styles.soundBtn}
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          >
            <Image style={styles.soundImage} source={images[0]} />
            <Text style={styles.soundText}>Lofi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.soundContainer}>
          <TouchableOpacity
            style={styles.soundBtn}
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          >
            <Image style={styles.soundImage} source={images[1]} />
            <Text style={styles.soundText}>Rain</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.soundContainer}>
          <TouchableOpacity
            style={styles.soundBtn}
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          >
            <Image style={styles.soundImage} source={images[3]} />
            <Text style={styles.soundText}>Tropical</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.soundContainer}>
          <TouchableOpacity
            style={styles.soundBtn}
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          >
            <Image style={styles.soundImage} source={images[4]} />
            <Text style={styles.soundText}>Wilderness</Text>
            <Text style={styles.soundStatusText}>Pro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.soundContainer}>
          <TouchableOpacity
            style={styles.soundBtn}
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          >
            <Image style={styles.soundImage} source={images[5]} />
            <Text style={styles.soundText}>Winter</Text>
            <Text style={styles.soundStatusText}>Pro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.soundContainer}>
          <TouchableOpacity
            style={styles.soundBtn}
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          >
            <Image style={styles.soundImage} source={images[6]} />
            <Text style={styles.soundText}>Night City</Text>
            <Text style={styles.soundStatusText}>Pro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default connect(null, { stopSoundsModal })(SoundsComponent);
