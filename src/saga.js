import dataSagas from "./services/data-saga"
import catalogSagas from "./views/Catalog/catalog-saga"

function* saga() {
  yield* dataSagas()
  yield* catalogSagas()
}

export default saga
