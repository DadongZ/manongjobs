import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: 'update_has_next_page'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

function reducer (state, action) {
    //three action types: make-request, get-data, error
    //payload: the data for the type 
    switch (action.type) {
        //everty making a request, return to a new state and clear out all jobs we currently have
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, jobs: []} 
        //everyting in current state and put that in our new state
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
        //clean jobs if there's an eorror and return the error obj
            return {...state, loading: false, error: action.payload.error, jobs: []}
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return {...state, hasNextPage: action.payload.hasNextPage}
        default:
            return state
    }
}

//params: job key words, location:s
//everytime change page needs to run the code again
export default function useFetchJobs(params, page) {
    //const [state, dispatch] = useReducer(reducer, initialState);
    //dispatch is sort of an alias for action in reducer()
    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})

    //The Effect Hook lets you perform side effects in function components:
    //everytime params, page changes, rerun the code using useEffect hook 
    useEffect(() => {

        const cancelToken1 = axios.CancelToken.source()

        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: {markdown: true, page:page, ...params}
        }).then( res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
        }).catch(err => {
            if (axios.isCancel(err)) return 
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        })

        const cancelToken2 = axios.CancelToken.source()
        axios.get(BASE_URL, {
            cancelToken: cancelToken2.token,
            params: {markdown: true, page: page + 1, ...params}
        }).then( res => {
            dispatch({type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: {hasNextPage: res.data.length !==0}})
        }).catch(err => {
            if (axios.isCancel(err)) return 
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        })

        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }
    }, [params, page])

    return state
}