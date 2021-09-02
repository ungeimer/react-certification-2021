import { types } from './types';

const initialApp = {
  passToChild: '',
  searchButton: true,
  playVideo: false,
  selectedVideo: {},
  darkMode: false
};

const AppReducer = (state = {}, action) => {
  switch (action?.type) {
    case types.setPassToChild:
      return {
        ...state,
        passToChild: action.payload,
      };

    case types.setSelectedVideo:
      return {
        ...state,
        selectedVideo: action.payload,
      };

    case types.setSearchButton:
      return {
        ...state,
        searchButton: action.payload,
      };

    case types.setPlayVideo:
      return {
        ...state,
        playVideo: action.payload,
      };
    case types.setDarkMode:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};
export { initialApp };
export default AppReducer;
