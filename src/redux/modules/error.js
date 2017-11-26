export function newError(dispatch, type, data) {
  dispatch(`${type}_ERROR`, data)
}
