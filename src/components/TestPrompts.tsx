import {createImageScentence} from "../data_models/prompts";
import {Template} from '../data_models/Template';


function TestPrompts() {
    return(
    <p>
        {createImageScentence(4,4)}
    </p>)
}

export default TestPrompts;