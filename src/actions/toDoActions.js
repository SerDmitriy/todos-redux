const statuses = ['Request', 'Success', 'Failed', 'Clear'];
const actions = [
  'Add_Todo',
  'Remove_Todo',
  'Fetch_Todo',
  'Fetch_Todos',
  'Checked_Todo',
  'Clear_Completed'];
const db = {};

actions.map(action => {
  db[action] = {};
  statuses.map(status => {
    db[action][status] = (payload, callback, options) => ({
      type: `${action}_${status}`.toUpperCase(),
      payload,
      callback,
      options
    })
  })
})
export { db };
