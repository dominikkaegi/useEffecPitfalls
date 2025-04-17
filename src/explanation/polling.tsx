import {useEffect, useState} from "react"
import {fetchPokemons} from "./fetchPokemonsProducts"
import {logValue} from "./log"


export const Polling = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <h1>Polling without cleanup</h1>
            <button onClick={() => {setShowMenu(!showMenu)}}>Toggle Menu</button>
            {
                showMenu ? (
                    <Menu />
                ) : null
            }
        </div>
    )
}



const TIMEOUT = 1000

const Menu = () => {
    const [number, setNumber] = useState<number>();

    useEffect(() => {
        if(!isLoggedIn) {
            return
        }


        let timeout: number;

        const pollLoop = async () => {
            logValue('executing polling')
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
    }, [])

    return (
        <div>
            <div>
                Pending Items Count: {number}
            </div>
        </div>
    )
}


