import { useState } from "react"
import Todolist from "./todoform"
import Todoform from "./todolist"

function Todocontainer(props) {

    const [list, setlist] = useState([
        {
            id: 1,
            activity: "Go For A Walk"
        },

        {
            id: 2,
            activity: "Have A Healthy breakfast"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                {/* Todolist */}
                <Todolist list={list} setlist={setlist}/>

                {/* Todoform */}
                <Todoform list={list} setlist={setlist}/>
            </div>
        </div>
    )
}

export default Todocontainer