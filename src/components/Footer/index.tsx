import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillApple,
  AiFillAndroid,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Box w="100%" bg="#000000" p="16px" color="white">
      <Heading textAlign={["left", "left", "center"]} mt={6}>
        KAVAK
      </Heading>
      <Flex
        flexDirection={["column", "column", "row"]}
        wrap="wrap"
        gap={["6"]}
        width={["100%", "50%"]}
        margin={["40px 0 0 0", "40px 0 0 0", "40px auto"]}
        align={["flex-start", "flex-start"]}
        justify={["flex-start", "flex-start", "space-evenly"]}
      >
        <Link href="/">Comprar carro</Link>
        <Link href="/">Vender Carro</Link>
        <Link href="/">App Kavak</Link>
        <Link href="/">Onde Estamos</Link>
        <Link href="/">Perguntas Frequentes</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Guia de Preços</Link>
        <Link href="/">Carreiras</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Imprensa</Link>
      </Flex>
      <Flex mt={16} gap="6" flexDir={"column"}>
        <Divider />
        <Flex gap="6" align="center" justify="center">
          <Link href="/">
            <AiFillFacebook size="40px" cursor="pointer" />
          </Link>
          <Link href="/">
            <AiFillInstagram size="40px" cursor="pointer" />
          </Link>
          <Link href="/">
            <AiFillLinkedin size="40px" />
          </Link>
          <Link href="/">
            <AiFillApple size="40px" cursor="pointer" />
          </Link>
          <Link href="/">
            <AiFillAndroid size="40px" cursor="pointer" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
