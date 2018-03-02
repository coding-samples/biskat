import { createSelector } from 'reselect'
import * as R from 'ramda';
import { identity, prop, uniq, compose, reverse, propEq, find, map } from "ramda"
import { sortBy } from "ramda"

const filterSelector = (state) =>
  state.ui.catalog.index.filter

const businessesSelector = (state) =>
  state.data.businesses

const businessIdSelector = (state) =>
  state.ui.catalog.show.businessId

const filteredBusinessesSelector = createSelector(
  businessesSelector, filterSelector,
  (businesses, filter) => {
    if (!filter.sort && !filter.category) {
      return businesses
    }

    const filters = []
    if (filter.category) {
      filters.push(R.filter(propEq('category', filter.category)))
    }

    if (filter.sort) {
      if (filter.sort === 'desc') {
        filters.push(reverse)
      }
      filters.push(sortBy(prop('name')))
    }

    return compose(...filters)(businesses)
  }
)

const categoriesSelector = createSelector(businessesSelector, (businesses) => {
  return sortBy(identity, uniq(map(prop('category'), businesses)))
})

const businessSelector = createSelector(
  businessIdSelector, businessesSelector,
  (businessId, businesses) => {
    return find(propEq('id', businessId), businesses) || {}
  }
)

export const catalogIndexSelector = (state) => ({
  businesses: filteredBusinessesSelector(state),
  categories: categoriesSelector(state),
  filter: filterSelector(state)
})

export const catalogShowSelector = (state) => ({
  business: businessSelector(state),
})
