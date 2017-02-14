const setStrings = (state, strings) => Object.assign({}, state, {strings: strings})

const setFrets = (state, frets) => Object.assign({}, state, {frets: frets})

export default function (state = {}, action) {
  switch (action.type) {
    case 'SET_STRINGS':
      return setStrings(state, action.strings)
    case 'SET_FRETS':
      return setFrets(state, action.frets)
    default:
      return state
  }
}
