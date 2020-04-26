import * as Constants from '../../../../constants';

export default {
  alarm: {
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  alarmTime: {
    color: Constants.THEME.colors.white,
  },
  alarms: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 30,
    ...Constants.SHADOWS_CSS,
  },
  btnContainer: {
    width: '40%',
  },
  btnTitle: {
    color: Constants.THEME.colors.black,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  countdown: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerTitle: {
    color: Constants.THEME.colors.white,
  },
  timer: {
    color: Constants.THEME.colors.white,
    fontSize: 60,
    textDecorationLine: 'underline',
  },
};
