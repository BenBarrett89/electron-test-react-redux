import { connect } from 'react-redux'
import Instrument from '../components/Instrument'
import { openWindow, setStrings, setFrets } from '../actions/instrument'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    openWindow: () => {
      dispatch(openWindow())
    },
    setStrings: (strings) => {
      dispatch(setStrings(strings))
    },
    setFrets: (frets) => {
      dispatch(setFrets(frets))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instrument)
