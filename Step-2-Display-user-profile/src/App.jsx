import { SignedIn, SignedOut, SignInButton, SignOutButton, UserProfile } from '@asgardeo/react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
      <main>
        <UserProfile />
      </main>
    </>
  )
}
export default App
