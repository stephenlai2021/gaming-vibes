import { useEffect, useState, useContext } from "react";
import AuthContext from "../../stores/authContext";

export default function useNetliyFunction(function) {
  const [guides, setGuides] = useState(null);
  const { user, authReady } = useContext(AuthContext);
  const [error, setError] = useState(null);

  useEffect(async () => {
    if (authReady) {
      try {
        const res = await fetch(
          "/.netlify/functions/guides",
          user && {
            headers: {
              Authorization: "Bearer " + user.token.access_token,
            },
          }
        );
        if (!res.ok) {
          throw Error("You must be logged in to view this content");
        }
        const data = await res.json();
        setGuides(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setGuides(null);
      }
    }
  }, [user, authReady]);

  return { guides, user, error }
}
