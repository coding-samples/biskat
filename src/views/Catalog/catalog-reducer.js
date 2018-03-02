import { handleActions } from 'redux-actions'

import catalogActions from './catalog-actions'
import combineReducers from "redux/es/combineReducers"

const catalogIndexReducer = handleActions({
  [catalogActions.index.applyFilter]: (state, action) =>
    ({...state, filter: {
      category: action.payload.category || '',
          sort: action.payload.sort || ''}
    })
}, {
  filter: {
    sort: '',
    category: ''
  }
})

const catalogShowReducer = handleActions({
  [catalogActions.show.setBusinessId]: (state, action) =>
    ({businessId: Number(action.payload)}),
}, {})

export default combineReducers({
  show: catalogShowReducer,
  index: catalogIndexReducer,
})
