import loginSchema from "@/schemas/loginSchema"
import { Form, TextInput } from "@/components/Form"
import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <h3>Đăng nhập vào tài khoản của bạn</h3>
            <h4>Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước.</h4>
            <Form schema={loginSchema}>
                <TextInput name="email" placeholder="Email"></TextInput>
                <TextInput name="password" placeholder="Mật khẩu"></TextInput>
                <button>Đăng nhập</button>
            </Form>
            <Link to="/register">Đăng kí</Link>
        </>
    )
}

export default Login
