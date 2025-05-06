import { useUser } from "@clerk/clerk-react";

function TestClerk() {
  const { user } = useUser();

  if (!user) {
    return <div>No user is logged in.</div>;
  }

  return <div>Welcome, {user.firstName}!</div>;
}

export default TestClerk;
