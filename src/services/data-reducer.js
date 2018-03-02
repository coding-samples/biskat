import { handleActions } from 'redux-actions'

import dataActions from './data-actions'
import { append, assoc, findIndex, merge, propEq, update } from "ramda"

export default handleActions({
  [dataActions.fetchBusinessesCompleted]: (state, action) =>
    assoc('businesses', action.payload, state),

  [dataActions.fetchBusinessCompleted]: (state, action) => {
    const idx = findIndex(propEq('id', action.payload.id), state.businesses)
    if (idx !== -1) {
      const business = merge(state.businesses[idx], action.payload)
      return assoc('businesses', update(idx, business, state.businesses), state)
    } else {
      return assoc('businesses', append(action.payload, state.businesses), state)
    }
  },

  [dataActions.fetchReviewsCompleted]: (state, action) => {
    const businessId = action.payload.businessId
    const reviews = action.payload.reviews
    const idx = findIndex(propEq('id', businessId), state.businesses)
    if (idx !== -1) {
      const business = merge(state.businesses[idx], {reviews: reviews})
      return assoc('businesses', update(idx, business, state.businesses), state)
    } else {
      return assoc('businesses', append({id: businessId, reviews: reviews}, state.businesses), state)
    }
  }
}, {
  businesses: []
})