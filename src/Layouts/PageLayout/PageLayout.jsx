import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

// Sidebar bileşenini her sayfaya eklemek yerine PageLayout bileşenine yalnızca bir kez ekleyip çocukları onunla sarabiliriz.
//Bu şekilde AuthPage dışındaki her sayfada bir kenar çubuğuna sahip olabiliriz.

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSideBar = pathname !== "/auth" && user;
  return (
    <Flex>
      {/* Sidebar on the left */}
      {canRenderSideBar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* the page content on the right */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
