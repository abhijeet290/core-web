import { useState, useEffect } from "react";

export default function useFetch() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState("");

  async function generateProfile(count) {
    const ran = Math.floor(1 + Math.random() * 10000);
    const response = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${count}`
    );
    const data = await response.json();

    setProfile(data);
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  return { Profile, numberofProfile, setnumberofProfile, generateProfile };
}
