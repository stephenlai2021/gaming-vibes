import { useEffect, useState, useContext } from "react";
import AuthContext from "../stores/authContext";

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "http://localhost:8888/.netlify/functions/supermario"
//   )
//   const mario = await res.json()

//   return {
//     props: {
//       mario
//     },
//     revalidate: 1
//   }
// }

// export default function Guides({ mario }) {
export default function Guides() {
  const [guides, setGuides] = useState(null);
  const { user, authReady } = useContext(AuthContext);

  // console.log(user.token.access_token)

  useEffect(async () => {
    if (authReady) {
      const res = await fetch("/.netlify/functions/guides", user && {
        headers: {
          Authorization: "Bearer " + user.token.access_token,
        },
      });
      const data = await res.json();
      console.log(data)
      setGuides(data);
    }
  }, [user, authReady]);

  // if (!guides) {
  //   return (
  //      <div>Ooops, you are not logged in yet!</div>
  //   )
  // }

  return (
    <div className="guides">
      <h2>All Guides</h2>

      {/* {!user && (
        <div>Ooops, you are not logged in yet</div>
      )}

      {user && guides && guides.map(guide => (
        <div key={guide.id}>
          <p>Title: { guide.title }</p>
          <p>Author: { guide.author }</p>
        </div>
      ))} */}

      <style jsx>{`
        .guides {
          max-width: 960px;
          margin: 40px auto;
          letter-spacing: 1px;
          line-height: 1.6em;
        }
      `}</style>
    </div>
  );
}
