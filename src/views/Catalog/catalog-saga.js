import { takeLatest, put, all, takeEvery, select } from "redux-saga/effects"

import dataActions from '../../services/data-actions'
import catalogActions from './catalog-actions'
import { push } from "react-router-redux"
import * as qs from "query-string"

function* initializeCatalogIndex({payload}) {
  yield put(dataActions.fetchBusinesses())
  yield put(catalogActions.index.applyFilter(payload))
}

function* initializeCatalogShow() {
  const businessId = yield select((state) => state.ui.catalog.show.businessId)
  yield all([
    put(dataActions.fetchBusiness(businessId)),
    put(dataActions.fetchReviews(businessId))
  ])
}

function* storeFilterInLocation({payload}) {
  const filter = yield select((state) => state.ui.catalog.index.filter)
  filter[payload.name] = payload.value
  let queryString = qs.stringify(filter)
  yield put(push(`/businesses/catalog?${queryString}`))
}

export default function* catalogSagas() {
  yield takeLatest(catalogActions.index.start, initializeCatalogIndex)

  yield takeLatest(catalogActions.show.setBusinessId, initializeCatalogShow)

  yield takeEvery(catalogActions.index.setLocationFilter, storeFilterInLocation)
}
