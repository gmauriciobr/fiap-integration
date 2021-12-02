import { call, put } from "redux-saga/effects"
import api from "../../Services/api"

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
    } else if (response.status === 400) {
      yield put(DroneActions.postDroneError())
    }
  } catch (error) {
    throw new Error("Houve um erro ao cadastrar o drone")
  }
}

export function* getDroneById(action) {
  try {
    const { id } = action

    const response = yield call(api.get, `/drone/${id}`)

    if (response.status === 200) {
      yield put(DroneActions.getDroneByIdSuccess(response.data))
    }
  } catch (error) {
    throw new Error("Houve um erro ao tentar buscar o drone pelo id")
  }
}

export function* putDroneById(action) {
  try {
    const { id, payload } = action

    const response = yield call(api.put, `/drone/${id}`, payload)

    if (response.status === 200) {
      yield put(DroneActions.putDroneByIdSuccess())
    } else if (response.status === 400) {
      yield put(DroneActions.putDroneByIdError())
    }
  } catch (error) {
    throw new Error("Houve um erro ao tentar editar o drone")
  }
}
