import { call, put } from "redux-saga/effects"
import api from "../../Services/api"
import history from "../../Services/history"

import { Creators as DroneActions } from "../Ducks/drone"

export function* getDrone() {
  try {
    const response = yield call(api.get, `/drone`)

    if (response.status === 200) {
      yield put(DroneActions.getDronesSuccess(response.data))
    }
  } catch (error) {
    throw new Error("houve um erro ao buscar drones")
  }
}

export function* postDrone(action) {
  try {
    const { payload } = action

    const response = yield call(api.post, "/drone", payload)

    if (response.status === 201) {
      yield put(DroneActions.postDroneSuccess())
      history.push("/")
    }
  } catch (error) {
    throw new Error("Houve um erro ao cadastrar o drone")
  }
}
