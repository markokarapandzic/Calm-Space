import * as Constants from '../../../constants';

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Constants.THEME.colors.white,
    paddingHorizontal: Constants.BASE_PADDING * 2,
  },
  forgotPassword: {
    color: Constants.THEME.colors.darkgray,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
  },
  socialButtons: {
    marginVertical: 20,
    width: '100%',
  },
};
