import { all, takeLatest } from "redux-saga/effects"

import { Types as DroneTypes } from "../Ducks/drone"
import { Types as MetricaTypes } from "../Ducks/metrica"

import { getDrone, postDrone, getDroneById, putDroneById } from "./drone"
import { getMetrica, postMetrica } from "./metrica"

export default function* rootSaga() {
  yield all([
    takeLatest(DroneTypes.GET_DRONES_REQUEST, getDrone),
    takeLatest(DroneTypes.POST_DRONE_REQUEST, postDrone),
    takeLatest(DroneTypes.GET_DRONE_BY_ID_REQUEST, getDroneById),
    takeLatest(DroneTypes.PUT_DRONE_BY_ID_REQUEST, putDroneById),
    takeLatest(MetricaTypes.GET_METRICA_REQUEST, getMetrica),
    takeLatest(MetricaTypes.POST_METRICA_REQUEST, postMetrica),
  ])
}
