const statuses = ['Request', 'Success', 'Failed', 'Clear'];
const actions = ['Auth'];
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