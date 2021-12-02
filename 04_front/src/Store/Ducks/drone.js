export const Types = {
  GET_DRONES_REQUEST: "drone/GET_DRONES_REQUEST",
  GET_DRONES_SUCCESS: "drone/GET_DRONES_SUCCESS",
  GET_DRONES_ERROR: "drone/GET_DRONES_ERROR",
  POST_DRONE_REQUEST: "drone/POST_DRONE_REQUEST",
  POST_DRONE_SUCCESS: "drone/POSRT_DRONE_SUCCESS",
  POST_DRONE_ERROR: "drone/POSRT_DRONE_ERROR",
  GET_DRONE_BY_ID_REQUEST: "drone/GET_DRONE_BY_ID_REQUEST",
  GET_DRONE_BY_ID_SUCCESS: "drone/GET_DRONE_BY_ID_SUCCESS",
  GET_DRONE_BY_ID_ERROR: "drone/GET_DRONE_BY_ID_ERROR",
  PUT_DRONE_BY_ID_REQUEST: "drone/PUT_DRONE_BY_ID_REQUEST",
  PUT_DRONE_BY_ID_SUCCESS: "drone/PUT_DRONE_BY_ID_SUCCESS",
  PUT_DRONE_BY_ID_ERROR: "drone/PUT_DRONE_BY_ID_ERROR",
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  hasError: false,
  success: false,
  item: {},
}

export default function drone(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_DRONES_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],
        success: false,
        hasError: false,
      }

    case Types.GET_DRONES_SUCCESS:
      return { ...state, loading: false, data: action.data }

    case Types.GET_DRONES_ERROR:
      return { ...state, loading: false }

    case Types.POST_DRONE_REQUEST:
      return { ...state, loading: true, hasError: false }

    case Types.POST_DRONE_SUCCESS:
      return { ...state, loading: false, success: true }

    case Types.POST_DRONE_ERROR:
      return { ...state, loading: false, hasError: true, success: false }

    case Types.GET_DRONE_BY_ID_REQUEST:
      return { ...state, loading: true, hasError: false }

    case Types.GET_DRONE_BY_ID_SUCCESS:
      return { ...state, loading: false, hasError: false, item: action.item }

    case Types.GET_DRONE_BY_ID_ERROR:
      return { ...state, loading: false, hasError: true }

    case Types.PUT_DRONE_BY_ID_REQUEST: {
      return { ...state, loading: true, hasError: false }
    }

    case Types.PUT_DRONE_BY_ID_SUCCESS: {
      return { ...state, loading: false, hasError: false, success: true }
    }

    case Types.PUT_DRONE_BY_ID_ERROR: {
      return { ...state, loading: false, hasError: true, success: false }
    }

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
  postDroneError: () => ({ type: Types.POST_DRONE_ERROR }),
  getDroneByIdRequest: (id) => ({ type: Types.GET_DRONE_BY_ID_REQUEST, id }),
  getDroneByIdSuccess: (item) => ({
    type: Types.GET_DRONE_BY_ID_SUCCESS,
    item,
  }),
  getDroneByIdError: () => ({ type: Types.GET_DRONE_BY_ID_ERROR }),
  putDroneByIdRequest: (id, payload) => ({
    type: Types.PUT_DRONE_BY_ID_REQUEST,
    id,
    payload,
  }),
  putDroneByIdSuccess: () => ({ type: Types.PUT_DRONE_BY_ID_SUCCESS }),
  putDroneByIdError: () => ({ type: Types.PUT_DRONE_BY_ID_ERROR }),
}
