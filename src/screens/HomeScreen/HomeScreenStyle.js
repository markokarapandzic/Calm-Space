import { Platform } from 'react-native';
import * as Constants from '../../../constants';

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backgroundContainer: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
  },
  bottomContent: {
    alignSelf: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  quote: {
    color: Platform.OS === Constants.PLATFORM.ANDROID ? Constants.THEME.colors.lightgray : 'white',
    fontStyle: 'italic',
    fontWeight: '200',
    paddingHorizontal: 10,
  },
  author: {
    color: 'white',
    fontWeight: '400',
    fontSize: 24,
    paddingHorizontal: 10,
  },
  activities: {
    height: 150,
    marginTop: 20,
    paddingLeft: 10,
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
};
