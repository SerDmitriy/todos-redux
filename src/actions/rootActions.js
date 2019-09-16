import * as toDoActions from './toDoActions';
import * as authActions from './authActions';
import * as usersActions from './usersActions';

console.log({...toDoActions.db})

export const actions = {
  ...toDoActions.db,
  ...authActions.db,
  ...usersActions.db
}
