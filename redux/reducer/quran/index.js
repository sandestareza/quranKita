import { DETAIL_QURAN, GET_LIST_QURAN, SEARCH_QURAN } from '../../action/quranAction'

const initialState = {
    getListQuranLoading: false,
    getListQuranData: [],
    getListQuranError: false,
    getDetailQuranLoading: false,
    getDetailQuranData: [],
    getDetailQuranError: false,
}


const quran = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_QURAN:
            return {
                ...state,
                getListQuranLoading: action.payload.loading,
                getListQuranData: action.payload.data,
                getListQuranError: action.payload.error
            }   
        case SEARCH_QURAN:
            return {
                ...state,
                getListQuranLoading: action.payload.loading,
                getListQuranData: action.payload.data,
                getListQuranError: action.payload.error
            }       
        case DETAIL_QURAN:
            return {
                ...state,
                getDetailQuranLoading: action.payload.loading,
                getDetailQuranData: action.payload.data,
                getDetailQuranError: action.payload.error
            }       
        default: 
            return state
    }
}

export default quran
