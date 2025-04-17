import {useEffect, useState} from "react"
import {fetchPokemons, wait} from "./fetchPokemonsProducts"
import {logValue} from "./log"


export const PollingWithLoginState = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)


    return (
        <div>
            <h1>Polling without cleanup</h1>
            <h2>{isLoggedIn ? '✅✅✅✅' : '🔐🔐🔐🔐' }</h2>
            <button onClick={() => {setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? 'Logout ' : 'Login'}</button>
            <button onClick={() => {setShowMenu(!showMenu)}}>Toggle Menu</button>
            {
                showMenu ? (
                    <Menu isLoggedIn={isLoggedIn} />
                ) : null
            }
        </div>
    )
}



const TIMEOUT = 1000

const Menu = ({isLoggedIn} : {isLoggedIn: boolean}) => {
    const [number, setNumber] = useState<number>();

    useEffect(() => {
        let timeout: number;

        const pollLoop = async () => {
            logValue('executing polling')
            await wait(2000)
            await fetchPokemons().then(p => {
                setNumber(p.length)
            })

            timeout = window.setTimeout(pollLoop, TIMEOUT)
        }

        timeout = window.setTimeout(pollLoop, TIMEOUT);

        return () => {
            if(timeout) {
                window.clearTimeout(timeout)
            }
        }
    }, [isLoggedIn])

    return (
        <div>
            <div>
                Pending Items Count: {number}
            </div>
        </div>
    )
}


