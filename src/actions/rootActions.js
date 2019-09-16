import toDoActions from './toDoActions';
import authActions from './authActions';
import usersActions from './usersActions';

console.log(authActions)

export const actions = {
  ...toDoActions,
  ...authActions,
  ...usersActions
}


