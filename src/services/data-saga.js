import { takeLatest, call, put } from "redux-saga/effects"

import API from './api'
import dataActions from './data-actions'

function* fetchBusinesses() {
  const businesses = yield call(API.fetchBusinesses)
  yield put(dataActions.fetchBusinessesCompleted(businesses))
}

function* fetchBusiness({payload}) {
  const business = yield call(API.fetchBusiness, payload)
  yield put(dataActions.fetchBusinessCompleted(business))
}

function* fetchReviews({payload}) {
  const reviews = yield call(API.fetchReviews, payload)
  yield put(dataActions.fetchReviewsCompleted({businessId: payload, reviews: reviews}))
}

export default function* dataSagas() {
  yield takeLatest(dataActions.fetchBusinesses, fetchBusinesses)
  yield takeLatest(dataActions.fetchBusiness, fetchBusiness)
  yield takeLatest(dataActions.fetchReviews, fetchReviews)
}
