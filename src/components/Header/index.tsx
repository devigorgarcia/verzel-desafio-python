import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="flex-start"
      justify="space-between"
      wrap="wrap"
      w="100vw"
      p="2rem"
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
    >
      <Heading>KAVAK</Heading>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} />
    </Flex>
  );
};
