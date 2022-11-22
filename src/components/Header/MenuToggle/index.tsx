import { Box } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box
      color="blue.400"
      display={{ base: "block", md: "block", lg: "none" }}
      onClick={toggle}
    >
      {isOpen ? (
        <IoMdClose size={"35px"} cursor="pointer" />
      ) : (
        <GiHamburgerMenu size={"35px"} cursor="pointer" />
      )}
    </Box>
  );
};
