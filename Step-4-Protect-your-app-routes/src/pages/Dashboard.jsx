import { SignedIn, SignedOut, SignInButton, SignOutButton, UserProfile } from '@asgardeo/react'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <header>
            <SignedIn>
                <SignOutButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <p>
                <Link to="/profile">My Profile</Link>
            </p>
        </header>
    )
}
export default Dashboard
