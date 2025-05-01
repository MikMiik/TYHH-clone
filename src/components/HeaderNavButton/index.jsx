function HeaderButton({ children }) {
    function handleClick(e) {
        console.log(e)
    }
    return <button onClick={(e) => handleClick(e)}>{children}</button>
}

export default HeaderButton
