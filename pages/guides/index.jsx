import { useEffect, useState, useContext } from "react";
import AuthContext from "../../stores/authContext";
import Link from "next/link";

export default function Guides() {
  const [guides, setGuides] = useState(null);
  const { user, authReady } = useContext(AuthContext);
  const [error, setError] = useState(null);

  // console.log(user.token.access_token)

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

  return (
    <div>
      <div className="guides">
        <h2>All Guides</h2>

        {!authReady && <div>Loading...</div>}

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {guides &&
          guides.map((guide) => (
            <div key={guide.id} className="card">
              <Link href={`/guides/${guide.id}`}>
                <a>
                  <h3>{guide.title}</h3>
                </a>
              </Link>
              <h4>Written by {guide.author}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsa, vero beatae quod nesciunt, consequuntur perferendis,
                minima quas ipsum hic neque veritatis saepe ex! Minus,
                praesentium, quaerat voluptas hic sint maiores maxime possimus
                dignissimos quia unde facere, porro obcaecati! Dolorum dicta
                iure eius rerum vel placeat unde et, nobis autem.
              </p>
            </div>
          ))}

        <style jsx>{`
          .guides {
            max-width: 960px;
            margin: 40px auto;
            letter-spacing: 1px;
            line-height: 1.6em;
          }
          .error {
            background: pink;
            color: crimson;
            border: 1px solid crimson;
            text-align: center;
            border-radius: 6px;
            font-weight: 600;
          }
          .card {
            background: white;
            padding: 10px 20px;
            border-radius: 6px;
            margin: 20px auto;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          }
          .card h3 {
            margin-bottom: 0;
          }
          .card h4 {
            margin-top: 0;
            color: #777;
          }
        `}</style>
      </div>
    </div>
  );
}
