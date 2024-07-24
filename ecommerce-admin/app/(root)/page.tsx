import {
    ClerkProvider,
    UserButton,
    SignedIn,
    SignedOut,
    SignInButton,
 } from "@clerk/nextjs";

const SetupPage = () => {
    return (
        <div className='p-4'>
        <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
        </div>
    )
}

export default SetupPage;
