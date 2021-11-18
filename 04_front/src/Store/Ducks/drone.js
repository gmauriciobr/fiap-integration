export const Types = {
  GET_DRONES_REQUEST: "drone/GET_DRONES_REQUEST",
  GET_DRONES_SUCCESS: "drone/GET_DRONES_SUCCESS",
  GET_DRONES_ERROR: "drone/GET_DRONES_ERROR",
  POST_DRONE_REQUEST: "drone/POST_DRONE_REQUEST",
  POST_DRONE_SUCCESS: "drone/POSRT_DRONE_SUCCESS",
  POST_DRONE_ERROR: "drone/POSRT_DRONE_ERROR",
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  hasError: false,
}

export default function drone(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_DRONES_REQUEST:
      return { ...state, loading: true, data: [] }

    case Types.GET_DRONES_SUCCESS:
      return { ...state, loading: false, data: action.data }

    case Types.GET_DRONES_ERROR:
      return { ...state, loading: false }

    case Types.POST_DRONE_REQUEST:
      return { ...state, loading: true, hasError: false }

    case Types.POST_DRONE_SUCCESS:
      return { ...state, loading: false }

    case Types.POST_DRONE_ERROR:
      return { ...state, loading: false, hasError: true }
    default:
      return state
  }
}

export const Creators = {
  getDronesRequest: () => ({ type: Types.GET_DRONES_REQUEST }),
  getDronesSuccess: (data) => ({ type: Types.GET_DRONES_SUCCESS, data }),
  getDronesError: () => ({ type: Types.GET_DRONES_SUCCESS }),
  postDroneRequest: (payload) => ({ type: Types.POST_DRONE_REQUEST, payload }),
  postDroneSuccess: () => ({ type: Types.POST_DRONE_SUCCESS }),
  postDroneError: () => ({ type: Types.POST_DRONES_ERROR }),
}
