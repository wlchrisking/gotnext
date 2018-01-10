import {combineReducers} from 'redux';
import GameData from './gameData';
import GameSetting from './gameSetting';
import UserGameData from './userGameData';
import OptionSelector from './optionSelector';
import LoginPageSelector from './loginPageSelector';
import LocationSelector from './locationSelector';
import UserGame from './userGame';
import User from './user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  gameData: GameData,
  userGameData: UserGameData,
  option: OptionSelector,
  loginPage: LoginPageSelector,
  setting: GameSetting,
  location: LocationSelector,
  games: UserGame,
  user: User
});

export default allReducers