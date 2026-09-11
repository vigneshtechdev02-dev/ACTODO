import { useState } from "react"

function Todoform(props) {

    const list = props.list
    const setlist = props.setlist

    const [input, setinput] = useState("")

    const handleinput = (evt) => {
        setinput(evt.target.value)
    }

    const handleadd = ()=>{
        setlist([...list,{id:list.length+1,activity:input}])
        setinput("")` `
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activity</h1>

                <div >
                    <input className="border-2 p-1 bg-transparent" placeholder="Next Activity?" value={input} onChange={handleinput} />
                    <button className="bg-black text-white border-2 p-1 border-black cursor-pointer" onClick={handleadd}>Add</button>
                </div>
            </div>
        </>
    )
}

export default Todoform