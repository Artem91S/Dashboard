import { useQuery } from "@tanstack/react-query"
import { fetchDateQuery } from "../utils/fetchDateQuery.js"

export const useGetData =()=>{
    return  useQuery(['info'],
     ()=> fetchDateQuery(),
     {
        select:({data})=>data
     })
}
