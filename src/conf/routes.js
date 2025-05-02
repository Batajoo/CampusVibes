import { LoginPage, Home, RegisterPage } from "../pages";

export const routes = [
    {
        path:"/",
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:"login",
                Component: LoginPage,
            },
            {
                path:"register",
                Component: RegisterPage,
            }
        ]
    }
]