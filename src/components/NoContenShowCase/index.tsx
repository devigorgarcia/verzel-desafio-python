import { Box, Flex, Heading } from "@chakra-ui/react";

export const NoContentShowCase = () => {
  return (
    <Flex
      h="50vh"
      p="6"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Heading>Ainda não adicionou nenhum carro :(</Heading>
    </Flex>
  );
};
