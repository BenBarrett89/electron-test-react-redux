const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const url = require('url')

const setStrings = (state, strings) => Object.assign({}, state, {strings: strings})

const setFrets = (state, frets) => Object.assign({}, state, {frets: frets})

const openWindow = (state) => {
  console.log('Gets here')

  const modalPath = url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  })
  let win = new BrowserWindow({ width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()

  return state
}

export default function (state = {}, action) {
  switch (action.type) {
    case 'SET_STRINGS':
      return setStrings(state, action.strings)
    case 'SET_FRETS':
      return setFrets(state, action.frets)
    case 'OPEN_WINDOW':
      return openWindow(state)
    default:
      return state
  }
}
