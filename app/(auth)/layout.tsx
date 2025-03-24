import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import {ReactNode} from "react";

interface AuthProps {
    children: ReactNode
}

const AuthLayout = async ({ children }: AuthProps) => {
    const isUserAuthenticated = await isAuthenticated();
    
    if (isUserAuthenticated) redirect('/'); 
    return (
        <div className="auth-layout">
            {children}
        </div>
    )
}
export default AuthLayout