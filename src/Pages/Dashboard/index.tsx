import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { VehiclesContext } from "../../context/VehiclesContext";
import { AiOutlinePlus } from "react-icons/ai";
import { ModalVehicle } from "../../components/ModalCreateVehicle";
import { EditModalVehicle } from "../../components/ModalEdit";
import { CardVehicle } from "../../components/CardVehicle";
import { Footer } from "../../components/Footer";
import { NoContentShowCase } from "../../components/NoContenShowCase";

export const AdminDashboard = () => {
  const { vehicles } = useContext(VehiclesContext);

  const {
    isOpen: createIsOpen,
    onOpen: createOnOpen,
    onClose: createOnClose,
  } = useDisclosure();

  return (
    <>
      <Header />

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
          Meus Carros
        </Heading>
        <Box>
          <Box mt="4">
            <Flex align="center" justify="space-between">
              <Text color="gray.500">{vehicles.length} Resultados</Text>
              <Flex align="center" gap={1} mb="4">
                <Button
                  display="flex"
                  bg="blue.500"
                  color="white"
                  leftIcon={<AiOutlinePlus />}
                  _hover={{}}
                  onClick={createOnOpen}
                >
                  Adicionar
                </Button>
              </Flex>
            </Flex>
            {vehicles.length === 0 ? (
              <NoContentShowCase />
            ) : (
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
                  return <CardVehicle key={vehicle.id} vehicle={vehicle} />;
                })}
              </Grid>
            )}
          </Box>
        </Box>
      </Box>

      <Footer />

      <ModalVehicle
        isOpen={createIsOpen}
        onOpen={createOnOpen}
        onClose={createOnClose}
      />
    </>
  );
};
