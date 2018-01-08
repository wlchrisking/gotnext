import {combineReducers} from 'redux';
import GameData from './gameData';
import UserGameData from './userGameData';
import OptionSelector from './optionSelector';
import LoginPageSelector from './loginPageSelector';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  gameData: GameData,
  userGameData: UserGameData,
  option: OptionSelector,
  loginPage: LoginPageSelector
});

export default allReducers