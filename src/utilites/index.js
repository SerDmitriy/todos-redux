export const genKey = () => {
  return Math.random().toString(16).slice(3, 10);
}

export const actionsCreator = (statuses, actionTypes) => {
  const actions = {};
  actionTypes.map(actionType => {
    actions[actionType] = {};
    statuses.map(status => {
      actions[actionType][status] = (payload, callback, options) => ({
        type: `${actionType}_${status}`.toUpperCase(),
        payload,
        callback,
        options
      })
    })
  })
  return actions;
}