const ACTIVATE = 'prometheus/tab/ACTIVATE'

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case ACTIVATE: {
      const newState = {
        ...state,
        active: action.activeKey,
      }
      return newState
    }
    default:
      return state
  }
}

export function activate(activeKey) {
  return {
    type: ACTIVATE,
    activeKey,
  }
}
