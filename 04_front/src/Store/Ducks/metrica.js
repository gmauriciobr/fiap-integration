export const Types = {
  GET_METRICA_REQUEST: "metrica/GET_METRICA_REQUEST",
  GET_METRICA_SUCCESS: "metrca/GET_METRICA_REQUEST",
  GET_METRICA_ERROR: "metrica/GET_METRICA_ERROR",
  POST_METRICA_REQUEST: "metrica/POST_METRICA_REQUEST",
  POST_METRICA_SUCCESS: "metrica/POST_METRICA_SUCCESS",
  POST_METRICA_ERROR: "metrica/POST_METRICA_ERROR",
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  hasError: false,
  success: false,
}

export default function metrica(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_METRICA_REQUEST:
      return { ...state, loading: true, data: [], success: false }

    case Types.GET_METRICA_SUCCESS:
      return { ...state, loading: false, data: action.data }

    case Types.GET_METRICA_ERROR:
      return { ...state, loading: false }

    case Types.POST_METRICA_REQUEST:
      return { ...state, loading: true, hasError: false, success: false }

    case Types.POST_METRICA_SUCCESS:
      return { ...state, loading: false, success: true }

    case Types.POST_METRICA_ERROR:
      return { ...state, loading: false, hasError: true, success: false }

    default:
      return state
  }
}

export const Creators = {
  getMetricaRequest: () => ({ type: Types.GET_METRICA_REQUEST }),
  getMetricaSuccess: (data) => ({ type: Types.GET_METRICA_SUCCESS, data }),
  getMetricaError: () => ({ type: Types.GET_METRICA_ERROR }),
  postMetricaRequest: (payload) => ({
    type: Types.POST_METRICA_REQUEST,
    payload,
  }),
  postMetricaSuccess: () => ({ type: Types.POST_METRICA_SUCCESS }),
  postMetricaError: () => ({ type: Types.POST_METRICA_ERROR }),
}
