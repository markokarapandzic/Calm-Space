import * as Constants from '../../../../constants';

export default {
  btn: {
    backgroundColor: 'white',
    borderRadius: 30,
    ...Constants.SHADOWS_CSS,
  },
  btnContainer: {
    width: '60%',
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
    width: '50%',
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerTitle: {
    color: Constants.THEME.colors.white,
  },
  stat: {
    backgroundColor: Constants.THEME.colors.white,
    borderRadius: 20,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    width: '44%',
  },
  statData: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    position: 'relative',
    textAlign: 'center',
  },
  statTitle: {
    color: Constants.THEME.colors.darkgray,
    fontSize: 12,
    fontWeight: '200',
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    ...Constants.SHADOWS_CSS,
  },
  timer: {
    color: Constants.THEME.colors.white,
    fontSize: 60,
    textDecorationLine: 'underline',
  },
};
