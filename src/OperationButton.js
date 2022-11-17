import { ACTIONS } from "./App"

export default function OperatiomButton({dispatch,operation}){
    return <button onClick={()=>dispatch({type:ACTIONS.OPERATION,payload:{operation}})}>{operation}</button>
}