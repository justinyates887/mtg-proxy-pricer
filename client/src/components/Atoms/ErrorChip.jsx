import { useDispatch, useSelector } from "react-redux"
import { setNotFoundList } from "../../actions/actions"

export function ErrorChip(props){
    const dispatch = useDispatch()
    const notFoundList = useSelector((state) => state.notFoundList)

    const handleRemove = () => {
        console.log('clicked');
        const newList = notFoundList.filter(item => item !== props.card)
        dispatch(setNotFoundList(newList))
    }
    
    return(
        <div class="error-chip">
            {props.card}
            <span className="closebtn" onClick={handleRemove}>&times;</span>
        </div>
    )
}