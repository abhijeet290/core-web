import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";

export default function CoinCreate(){

    const dispatch=useDispatch()
    const{data,loading,error}=useSelector(state=state.slice1)
    useEffect(()=>{
        dispatch(FetchData(20))
    },[])

    // display info of 20 tokens
    if(loading){
        return <h1>Data is loading...</h1>
    }
    if(error){
        return <h1>Error Occured</h1>
    }
    return(
        <>
        <div>
            {data.map((value)=>)}
        </div>
        </>
    )
}