import { useSession, signIn, signOut } from 'next-auth/react'
import { Block, Button } from 'react-bulma-components';

const LoginButton = () => {
    const { data: session, status } = useSession()

    const handleLogin = async () => {
        if (status === 'authenticated') {
            // User is already logged in, handle logout
            // You can use NextAuth.js signOut() method here
            await signOut();


        } else {
            // User is not logged in, handle login
            // You can use NextAuth.js signIn() method here
            await signIn();
        }
    }

    return (
        <Button onClick={handleLogin}>
            {status === 'authenticated' ? 'Logout' : 'Login'}
        </Button>
    )
}

export default LoginButton