/**
 * API ROUTING
 * @author parthiban
 * @param 
 * Module name : object
 * url : string
 * method : string
 * 
 */

import { environment } from "src/environments/environment"

export const API_ROUTER = {
    LOGIN  : {url :'users',method:'POST'}
}

export const SPINNER_BLOCK_API = [
   environment.BASE_API_URL[0]+'users'
]