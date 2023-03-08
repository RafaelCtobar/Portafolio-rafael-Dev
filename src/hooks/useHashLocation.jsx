import { useCallback, useEffect, useState } from "react";

const currentLoc = () => window.location.hash.replace("#", "") || "/";

export default function useHashLocation(){
  const [loc, setLoc] = useState(currentLoc());

  useEffect(() => {
    const handler = () => setLoc(currentLoc());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback(to => (window.location.hash = to), []);
  return [loc, navigate];
};