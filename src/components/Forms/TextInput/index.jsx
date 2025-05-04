function TextInput({ type = "text", name, register = () => ({}), message = "", ...rest }) {
    return (
        <label>
            <input type={type} name={name} {...register} {...rest} />
            {message && <p style={{ color: "red" }}>{message}</p>}
            <br />
        </label>
    )
}

export default TextInput
