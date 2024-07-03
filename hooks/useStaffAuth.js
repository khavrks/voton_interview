import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useStaffAuth = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //write logic here 
  }, [user, token]);

  return { token, user, isLoaded };
};

export default useStaffAuth;
