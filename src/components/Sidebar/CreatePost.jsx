import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";

const CreatePost = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
    </>
  );
};
export default CreatePost;
