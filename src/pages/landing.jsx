import Card from "../components/card"
import Header from "../components/header"
import Todocontainer from "../components/todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {

    const data = useLocation()

    return (
        <div className='bg-black p-16'>
            <div className="bg-white p-10 border rounded-md">

                {/* Header */}
                <Header username={data.state.user}/>

                {/* Card */}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolour={"#8272DA"} title={"26"} subtitle={"Vellore"} />
                    <Card bgcolour={"#FD6663"} title={"September"} subtitle={"13:05:04"} />
                    <Card bgcolour={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>

                {/* TodoContainer */}
                <Todocontainer />




            </div>
        </div>
    )
}

export default Landing