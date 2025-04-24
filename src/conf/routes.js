import { LoginPage, Home } from "../pages";

export const routes = [
    {
        path:"/",
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:"login",
                Component: LoginPage
            }
        ]
    }
]