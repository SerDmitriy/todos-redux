import * as toDoActions from './toDoActions';
import * as authActions from './authActions';
import * as usersActions from './usersActions';

console.log({...toDoActions})

export const actions = {
  ...toDoActions,
  ...authActions,
  ...usersActions
}
