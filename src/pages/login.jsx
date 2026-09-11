import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()

    const user = props.user
    const setuser = props.setuser

    const [uinput, setuinput] = useState()
    const [pinput, setpinupt] = useState()
    const [clogin, setclogin] = useState(true)

    function handleinput(evt) {
        setuinput(evt.target.value)
    }

    function handlepass(evt) {
        setpinupt(evt.target.value)
    }

    function handlecheck() {

        var userfound = false

        user.forEach(function (item) {

            if (item.username === uinput && item.password === pinput) {
                console.log("Login Susses")
                userfound = true
                navigate("/Landing", { state: { user: uinput } })

            }
        })

        if (userfound === false) {
            setclogin(false)
        }


    }


    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    clogin ? <p>I help you manage your activityies after you login:)</p> : <p className="text-red-500">Please sigin up Before you Login!!</p>
                }


                <div className="flex flex-col gap-2 my-2">
                    <input
                        className="border-black border-2 w-52 rounded-md bg-transparent p-1"
                        placeholder="username" onChange={handleinput} />

                    <input
                        className="border-black border-2 w-52 rounded-md bg-transparent p-1"
                        placeholder="password" onChange={handlepass} />

                    <button className=" bg-[#8272DA] w-24 rounded-md p-1 cursor-pointer" onClick={handlecheck}>
                        Login
                    </button>

                    <p>Dont have an account? <Link className="underline" to={"/Signup"}>Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login