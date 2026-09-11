import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()

    const user = props.user
    const setuser = props.setuser

    const [uinput, setuinput] = useState()
    const [pinput, setpinupt] = useState()


    function handleinput(evt) {
        setuinput(evt.target.value)
    }

    function handlepass(evt) {
        setpinupt(evt.target.value)
    }

    function handleadd() {

        setuser([...user, { username: uinput, password: pinput }])
        navigate("/")
    }

    return (

        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here:)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        className="border-black border-2 w-52 rounded-md bg-transparent p-1"
                        placeholder="username" onChange={handleinput} />

                    <input
                        className="border-black border-2 w-52 rounded-md bg-transparent p-1"
                        placeholder="password" onChange={handlepass} />

                    <input
                        className="border-black border-2 w-52 rounded-md bg-transparent p-1"
                        placeholder="conform password" />

                    <button className=" bg-amber-600 w-24 rounded-md p-1 cursor-pointer" onClick={handleadd}>
                        Signup
                    </button>

                    <p>Alredy have an account? <Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup