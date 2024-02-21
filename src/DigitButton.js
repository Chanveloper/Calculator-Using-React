import { ACTIONS } from "./App"

export default function DigitButton({dispatch, digit}) {
 return ( <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit} })}
 >
    {digit}
    </button>

 )
} //-- "payload" refers to the digit we want to add to the orginal digit. the original digit is included between the open and close button tags.
