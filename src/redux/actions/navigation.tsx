import { ACTUAL_PAGE } from './types';

export const setPage = (page) => {
    return{
        type: ACTUAL_PAGE,
        payload: page
    }
        
    
}