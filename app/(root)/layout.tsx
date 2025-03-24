import {ReactNode} from 'react'

interface RootProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootProps) => {
    return (
        <div>{children}</div>
    )
}
export default RootLayout
