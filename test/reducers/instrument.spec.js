import { describe, it } from 'mocha'
import { expect } from 'chai'
import reducer from '../../app/reducers/instrument'

describe('reducers', () => {
  describe('instrument', () => {
    it('should handle SET_STRINGS', () => {
      const testStrings = 4
      const action = {
        type: 'SET_STRINGS',
        strings: testStrings
      }
      const expectedState = {
        strings: testStrings
      }
      expect(reducer({}, action)).to.deep.equal(expectedState)
    })
    it('should handle SET_FRETS', () => {
      const testFrets = 24
      const action = {
        type: 'SET_FRETS',
        frets: testFrets
      }
      const expectedState = {
        frets: testFrets
      }
      expect(reducer({}, action)).to.deep.equal(expectedState)
    })
  })
})
