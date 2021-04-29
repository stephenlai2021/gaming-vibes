import { useEffect, useState, useContext } from "react";
import AuthContext from "../../stores/authContext";
import { useRouter } from "next/router";

const GuideDetails = () => {

  // useEffect(async () => {
  //   const res = await fetch(
  //     "/.netlify/functions/guides",
  //     user && {
  //       headers: {
  //         Authorization: "Bearer " + user.token.access_token,
  //       },
  //     }
  //   );
  //   if (!res.ok) {
  //     throw Error("You must be logged in to view this content");
  //   }
  //   const data = await res.json();
  //   console.log(data);
  // }, []);

  return <div>ID: {router.query.guideSlug}</div>;
};

export default GuideDetails;
