import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { VehiclesContext } from "../../context/VehiclesContext";

import { FilterSide } from "../FilterSide";

export const ShowCase = () => {
  const { selectHandler, vehicles } = useContext(VehiclesContext);
  return (
    <Box
      display="flex"
      flexDir="column"
      w="100%"
      maxW="1300px"
      margin={["0", "0", "0 auto"]}
      rounded="10px 10px 0 0"
      p={4}
      gap={4}
    >
      <Heading as="h3" size="sm">
        Carros Usados
      </Heading>
      <Box>
        <FilterSide />
        <Box mt="4">
          <Flex align="center" justify="space-between">
            <Text color="gray.500">{vehicles.length} Resultados</Text>
            <Flex align="center" gap={1} mb="4">
              <Text>Ordernar:</Text>
              <Select
                onChange={(e) => selectHandler(e.target.value)}
                border="none"
                color="blue"
              >
                <option value="new">Recentes</option>
                <option value="price">Preço</option>
              </Select>
            </Flex>
          </Flex>
          <Grid
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
            ]}
            gap={5}
            w="95%"
          >
            {vehicles?.map((vehicle) => {
              return (
                <GridItem
                  key={vehicle.id}
                  w="100%"
                  boxShadow="1px 2px 3px 0px rgba(138,136,138,1)"
                  rounded="10px 10px 0 0 "
                  cursor="ponter"
                  _hover={{
                    boxShadow: "1px 2px 10px 2px rgba(138,136,138,1)",
                  }}
                >
                  <Image
                    rounded="10px 10px 0 0"
                    src={vehicle.image}
                    alt={vehicle.name}
                  />
                  <Flex p="4" flexDir="column" gap={2}>
                    <Heading as="h3" size="sm">
                      {vehicle.name}
                    </Heading>
                    <Text>
                      {vehicle.brand} - {vehicle.model}{" "}
                    </Text>
                    <Heading color="blue.500" mt="4" as="h2" size="lg">
                      {vehicle.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Heading>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
