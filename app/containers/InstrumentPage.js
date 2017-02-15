import { connect } from 'react-redux'
import Instrument from '../components/Instrument'
import { setStrings, setFrets } from '../actions/instrument'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStrings: (strings) => {
      dispatch(setStrings(strings))
    },
    setFrets: (frets) => {
      dispatch(setFrets(frets))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instrument)
