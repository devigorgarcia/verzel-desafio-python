import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { VehiclesContext } from "../../context/VehiclesContext";

export const SearchBar = () => {
  const { filterByInput } = useContext(VehiclesContext);

  return (
    <Stack
      spacing={4}
      bg="blue.400"
      p="20px 0"
      display="flex"
      align="center"
      justifyContent="center"
    >
      <InputGroup
        w="90%"
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        maxW="1300px"
      >
        <InputRightElement
          color="gray.300"
          pointerEvents="none"
          top="5px"
          children={<BiSearchAlt2 size="30px" />}
        />
        <Input
          p={6}
          bg="white"
          type="text"
          placeholder="Busque por marca, modelo, ano, cor.."
          onChange={(e) => filterByInput(e.target.value)}
        />
      </InputGroup>
    </Stack>
  );
};
