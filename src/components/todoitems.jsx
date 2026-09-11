function Todoitems(props) {

    const list = props.list
    const setlist = props.setlist

    const handledel = (delbtn)=>{

        var tempr = list.filter(function(item){

            if(item.id === delbtn)
            {
                return false
            }
            else{
                return true
            }
        })

        setlist(tempr)
    }


    return (
        <>
            <div className="flex justify-between gap-1">
                <p>{props.index + 1}. {props.activity}</p>
                <button className="bg-red-600 text-white mb-1 p-1 rounded-md cursor-pointer" onClick={()=>handledel(props.id)}>Delete</button>
            </div>
        </>
    )
}

export default Todoitems