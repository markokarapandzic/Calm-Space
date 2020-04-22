import { NavigationActions } from 'react-navigation';

let _navigator;

export const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  if (_navigator && routeName) {
    _navigator.dispatch(NavigationActions.navigate(routeName, params));
  }
};

export const goBack = () => {
  if (_navigator) {
    _navigator.dispatch(NavigationActions.back());
  }
};

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
