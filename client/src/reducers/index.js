import {combineReducers} from 'redux';
import GameData from './gameData';
import GameSetting from './gameSetting';
import UserGameData from './userGameData';
import OptionSelector from './optionSelector';
import LoginPageSelector from './loginPageSelector';
import LocationSelector from './locationSelector';
import UserGame from './userGame';
import User from './user';
import EditState from './editState';
import UserList from './userList';
import DeleteState from './deleteState';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  gameData: GameData, //
  userGameData: UserGameData,
  option: OptionSelector,
  loginPage: LoginPageSelector,
  setting: GameSetting, //this is most recently selected game - eg clicking edit on a game loads it into setting.
  location: LocationSelector,
  games: UserGame,
  user: User,
  edit:EditState,
  userList: UserList,
  deleteState: DeleteState
});

export default allReducers