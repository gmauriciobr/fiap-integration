import { call, put } from "redux-saga/effects"
import api from "../../Services/api"

import { Creators as MetricaActions } from "../Ducks/metrica"

export function* getMetrica() {
  try {
    const response = yield call(api.get, "/metrica")

    if (response.status === 200) {
      yield put(MetricaActions.getMetricaSuccess(response.data.content))
    }
  } catch (error) {
    throw new Error("houve um erro ao buscar metricas")
  }
}

export function* postMetrica(action) {
  try {
    const { payload } = action

    const response = yield call(api.post, `/metrica`, payload)

    if (response.status === 204) {
      yield put(MetricaActions.postMetricaSuccess())
    }
  } catch (error) {
    throw new Error("Houve um erro ao tentar cadastrar uma métrica")
  }
}
