import {ReactNode} from "react";

interface AuthProps {
    children: ReactNode
}

const AuthLayout = ({ children }: AuthProps) => {
    return (
        <div className="auth-layout">
            {children}
        </div>
    )
}
export default AuthLayout