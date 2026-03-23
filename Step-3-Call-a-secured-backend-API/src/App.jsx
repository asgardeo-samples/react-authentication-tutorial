import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'
import MyProfile from './MyProfile'
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
        <MyProfile />
      </main>
    </>
  )
}
export default App
