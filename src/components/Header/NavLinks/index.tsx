import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { AiFillCar } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = ({ isOpen }: NavLinksProps) => {
  const navigate = useNavigate();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[4, 4, 3, 4]}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[10, 10, 10, 0]}
      >
        <MenuItem to="/" highlight icon={AiFillCar}>
          Comprar carro
        </MenuItem>
        <MenuItem to="/" icon={GiPriceTag}>
          Vender carro
        </MenuItem>
        <Divider display={["block", "block", "none", "none"]} />
        <MenuItem to="/">App Kavak</MenuItem>
        <MenuItem to="/">Sobre nós</MenuItem>
        <MenuItem to="/">Ajuda</MenuItem>
        <Divider display={["block", "block", "none", "none"]} />
        <Flex
          _hover={{ color: "gray.900" }}
          align={"center"}
          gap="2"
          mt={10}
          cursor="pointer"
          onClick={() => navigate("/login", { replace: true })}
        >
          <BiUserCircle fontSize="30px" color="gray" />
          <Text fontSize="20px" color="gray.500" _hover={{ color: "gray.900" }}>
            Minha Conta
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};
