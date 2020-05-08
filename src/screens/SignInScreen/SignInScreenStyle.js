import * as Constants from '../../../constants';

export default {
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constants.THEME.colors.white,
    paddingHorizontal: Constants.BASE_PADDING * 2,
  },
  socialButtons: {
    width: '100%',
    marginVertical: 50,
  },
  input: {
    width: '100%',
  },
  loginButton: {
    marginVertical: 50,
  },
  loginButtonText: {
    color: Constants.THEME.colors.white,
  },
  forgotPassword: {
    fontSize: 15,
    color: Constants.THEME.colors.darkgray,
    textDecorationLine: 'underline',
  },
};
