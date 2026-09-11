import Todoitems from "./todoitems"

function Todolist(props) {

    const list = props.list
    const setlist = props.setlist


    return (
        <>
            <div className="bg-purple-200 border rounded-md p-2 grow">
                <h1 className="text-2xl font-medium mb-2.5">Today's Activity</h1>


                {list.length === 0 ? <p>You Havent Added Anything Yet</p> : ("")}

                {
                    list.map(function (item, index) {
                        return <Todoitems id={item.id} activity={item.activity} index={index} list={list} setlist={setlist} />
                    })
                }
            </div>
        </>

    )
}

export default Todolist