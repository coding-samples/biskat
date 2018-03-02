import { routerReducer } from "react-router-redux"
import catalogReducer from './views/Catalog/catalog-reducer'
import dataReducer from './services/data-reducer'
import { combineReducers } from "redux"

export default combineReducers({
  ui: (state = {}, action) => ({catalog: catalogReducer(state.catalog, action)}),
  data: dataReducer,
  routing: routerReducer,
})
