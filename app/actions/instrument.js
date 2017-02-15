export function openWindow () {
  return {
    type: 'OPEN_WINDOW'
  }
}

export function setStrings (strings) {
  return {
    type: 'SET_STRINGS',
    strings: strings
  }
}

export function setFrets (frets) {
  return {
    type: 'SET_FRETS',
    frets: frets
  }
}
