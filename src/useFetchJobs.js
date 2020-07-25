import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
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
        default:
            return state
    }
}

//params: job key words, locations
//everytime change page needs to run the code again
export default function useFetchJobs(params, page) {
    //const [state, dispatch] = useReducer(reducer, initialState);
    //dispatch is sort of an alias for action in reducer()
    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})

    //The Effect Hook lets you perform side effects in function components:
    //everytime params, page changes, rerun the code using useEffect hook 
    useEffect(() => {

        const cancelToken = axios.CancelToken.source()

        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: {markdown: true, page:page, ...params}
        }).then( res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
        }).catch(err => {
            if (axios.isCancel(err)) return 
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        })

        return ()=> [
            cancelToken.cancel()
        ]

    }, [params, page])

    return state
}