import { createActions } from 'redux-actions'
import { identity } from 'ramda'

const { data } = createActions({
  data: {
    FETCH_BUSINESS: identity,
    FETCH_BUSINESS_COMPLETED: identity,

    FETCH_BUSINESSES: identity,
    FETCH_BUSINESSES_COMPLETED: identity,

    FETCH_REVIEWS: identity,
    FETCH_REVIEWS_COMPLETED: identity,
  }
})

export default data


