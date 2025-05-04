import { Form, TextInput } from "@/components/Forms"
import { Link, useNavigate, useSearchParams, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import loginSchema from "@/schemas/loginSchema"
import Button from "@/components/Button"
import config from "@/config"
import httpRequest from "@/utils/httpRequest"
import { getCurrentUser } from "@/features/auth/authAsync"
import authService from "@/services/authService"

function Login() {
    const [params] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [hasError, setHasError] = useState(false);
    const currentUser = useSelector((state) => state.auth.currentUser)

    if (currentUser) {
        return <Navigate to={params.get("continue") || config.routes.home} />
    }

    const onSubmit = async (data) => {
        try {
            const res = await authService.login(data)
            console.log(res)
            localStorage.setItem("token", res.data.access_token)
            localStorage.setItem("refresh_token", res.data.refresh_token)
            dispatch(getCurrentUser())
            // navigate(params.get("continue") || config.routes.home)
        } catch (error) {
            console.error(error)
            // setHasError(true)
        }
    }

    return (
        <>
            <h3>Đăng nhập vào tài khoản của bạn</h3>
            <h4>Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước.</h4>
            <Form
                schema={loginSchema}
                defaultValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={onSubmit}
            >
                <TextInput name="email" placeholder="Email"></TextInput>
                <TextInput name="password" placeholder="Mật khẩu"></TextInput>
                <Button>Đăng nhập</Button>
            </Form>
            <Link to="/register">Đăng kí</Link>
        </>
    )
}

export default Login
