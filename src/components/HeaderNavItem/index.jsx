import clsx from "clsx"
import { useNavigate } from "react-router-dom"

function Item({ goto = "/", children }) {
    const navigate = useNavigate()
    function handleClick() {
        navigate(goto)
    }
    return (
        <li style={{ padding: 10 }} className={clsx("li-no-style", "cursor-pointer")} onClick={handleClick}>
            {children}
        </li>
    )
}

export default Item
