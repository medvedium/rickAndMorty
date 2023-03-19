import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import {useDispatch} from "../store";

const actions = {

}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}