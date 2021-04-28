import { useEffect, useState } from "react";

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
  const [mario, setMario] = useState(null);
  const [guides, setGuides] = useState(null);

  useEffect(async () => {
    const res = await fetch(
      // "http://localhost:8888/.netlify/functions/supermario"
      "http://localhost:8888/.netlify/functions/guides"
    );
    const data = await res.json();
    console.log(data);
    // setMario(data);
    setGuides(data)
  }, []);

  return (
    <div className="guides">
      <h2>All Guides</h2>
      {/* {mario && (
        <div>
          <p>Name: {mario.name}</p>
          <p>Age: {mario.age}</p>
          <p>Job: {mario.job}</p>
        </div>
      )} */}

      {/* {guides && guides.map(guide => (
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
