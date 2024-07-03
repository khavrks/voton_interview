import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { parseCookies } from 'nookies';
import { isStaff } from "../../config/defaltsRoles";
import AdminLayout from "../../layout/AdminLayout";

import useStaffAuth from "../../hooks/useStaffAuth";
import { Button } from "react-bootstrap";

export default function Staff() {
  const router = useRouter();
  const { token, user, isLoaded } = useStaffAuth();
  const [canRender, setCanRender] = useState(false);


  useEffect(() => {
    console.log("Staff Page");
    if (!isLoaded) {
        
      }
    
  }, [isLoaded, token, user, router]);

  if (!canRender) {
    return (
        <div>
            Return to the main page
            <Button onClick={() => router.push("/")}>Main Page</Button>
        </div>
    );
  }

  return (
    <AdminLayout user={user}>
      //logic here
    </AdminLayout>
  );
};


// you have API getUserAPI that gets the user data from the server
export async function getStaticProps(context) {
    try {
      const cookies = parseCookies(context);
      const token = cookies.token || null;
      let user = null;
      if (token) {
        user = await getUserAPI(token);
      }
  
      return {
        props: {
          initialAuthState: {
            token,
            user,
          },
        },
      };
    } catch (error) {
      console.error("Fetching error:", error.message);
      return { props: { error: error.message } };
    }
  }
