import axios from "axios"

export const GET_LIST_QURAN = "GET_LIST_QURAN"
export const SEARCH_QURAN = "SEARCH_QURAN"
export const DETAIL_QURAN = "DETAIL_QURAN"


export const getListQuran = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_QURAN,
            payload: {
                loading: true,
                data: [],
                error: false
            }
        })

        // data
        axios.get("/api/listQuran")
        .then(res => {
            dispatch({
                type: GET_LIST_QURAN,
                payload: {
                    loading: false,
                    data: res.data.data,
                    error: false
                }
            })
        }).catch(err => {
            dispatch({
                type: GET_LIST_QURAN,
                payload: {
                    loading: false,
                    data: [],
                    error: err
                }
            })
        })
    }
}

export const searchQuran = (value, data) => {
    
    return (dispatch) => {

        // loading
        dispatch({
            type: SEARCH_QURAN,
            payload: {
                loading: true,
                data: [],
                error: false
            }
        })

        // data
            
        if (value) {
            
            const result = data.filter(val => val.nama.toLowerCase().includes(value.toLowerCase()))

            dispatch({
                type: SEARCH_QURAN,
                payload: {
                    loading: false,
                    data: result,
                    error: false
                }
            })
            
        } else {
            axios.get("/api/listQuran")
            .then(res => {
                const {data} = res.data
                dispatch({
                    type: SEARCH_QURAN,
                    payload: {
                        loading: false,
                        data: data,
                        error: false
                    }
                })
            }).catch((err)=>{

                dispatch({
                    type: SEARCH_QURAN,
                    payload: {
                        loading: false,
                        data: [],
                        error: err
                    }
                })
            })
        }

    }
}

export const getDetailQuran = (id) => {
    return (dispatch) => {

        // loading
        dispatch({
            type: DETAIL_QURAN,
            payload: {
                loading: true,
                data: [],
                error: false
            }
        })

        // data
        axios.get(`/api/detailQuran`, {params: {id}})
        .then(res => {
            dispatch({
                type: DETAIL_QURAN,
                payload: {
                    loading: false,
                    data: res.data.data,
                    error: false
                }
            })
        }).catch(err => {
            dispatch({
                type: DETAIL_QURAN,
                payload: {
                    loading: false,
                    data: [],
                    error: err
                }
            })
        })
    }
}
