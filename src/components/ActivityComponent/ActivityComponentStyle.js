import * as Constants from '../../../constants';

export default {
  activity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 20,
    minWidth: 300,
  },
  activityText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 1000,
    marginLeft: 10,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textWhite: {
    color: Constants.THEME.colors.white,
  },
};
