import { useEffect, useState, useContext } from "react";
import AuthContext from "../../stores/authContext";
import { useRouter } from "next/router";

const GuideDetails = () => {
  const router = useRouter()
  
  return <div>ID: {router.query.guideSlug}</div>;
};

export default GuideDetails;
