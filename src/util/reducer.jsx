function actionCreatorWithNS(ac, namespace) {
  const result = {}
  for (const [key, value] of Object.entries(ac)) {
    result[key] = function wrapActionCreatorsped(...params) {
      const action = value.apply(this, params)
      action.type = `${action.type}@${namespace}`
      return action
    }
  }
  return result
}

function removeNamespace(str = '', namespace) {
  const cursor = str.indexOf(`@${namespace}`)
  if (cursor < 0) {
    return null
  }
  return str.slice(0, cursor)
}
function reducerWithNS(origin, namespace) {
  return function wrapped(state, action) {
    const newAction = {
      ...action,
      type: removeNamespace(action.type, namespace),
    }
    // console.log(newAction)
    const result = origin.call(this, state, newAction)
    return result
  }
}

export {
  actionCreatorWithNS,
  reducerWithNS,
}
