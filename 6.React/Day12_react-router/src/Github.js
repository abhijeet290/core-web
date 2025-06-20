import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github() {
  // const data=useParams()
  const { name } = useParams();
  const [profile, setProfile] = useState(null);

  async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <h1>Welcome to github page</h1>
      {/* display the user data */}
      <div>
        <img src={profile?.avatar_url} />
        <h2>{profile?.login}</h2>
      </div>
    </>
  );
}
