import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authuser = useAuthStore((state) => state.user);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authuser.username}`}>
          <Avatar size={"lg"} src={authuser.profilePicURL} />
        </Link>

        <Link to={`${authuser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authuser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "trasnparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
