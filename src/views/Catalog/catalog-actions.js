import { createActions } from 'redux-actions'
import { identity } from 'ramda'

const { catalog } = createActions({
  CATALOG: {
    INDEX: {
      START: identity,
      LOAD_BUSINESSES: identity,
      APPLY_FILTER: identity,
      SET_LOCATION_FILTER: identity,
    },
    SHOW: {
      SET_BUSINESS_ID: identity
    }
  }
})

export default catalog


