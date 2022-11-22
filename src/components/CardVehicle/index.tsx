import {
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IVehicles } from "../../context/VehiclesContext";
import { ModalDeleteVehicle } from "../ModalDelete";
import { EditModalVehicle } from "../ModalEdit";

export interface ICardVehicles {
  vehicle: IVehicles;
}

export const CardVehicle = ({ vehicle }: ICardVehicles) => {
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
  } = useDisclosure();

  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteeOnClose,
  } = useDisclosure();

  return (
    <GridItem
      key={vehicle.id}
      id={vehicle.id}
      w="100%"
      boxShadow="1px 2px 3px 0px rgba(138,136,138,1)"
      rounded="10px 10px 0 0 "
      cursor="ponter"
      _hover={{
        boxShadow: "1px 2px 10px 2px rgba(138,136,138,1)",
      }}
    >
      <Image rounded="10px 10px 0 0" src={vehicle.image} alt={vehicle.name} />
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
        <Flex gap={4}>
          <Button
            variant="outline"
            bg="green.500"
            color="white"
            _hover={{}}
            onClick={editOnOpen}
          >
            Editar
          </Button>

          <Button
            variant="outline"
            bg="red.500"
            color="white"
            onClick={deleteOnOpen}
          >
            Apagar
          </Button>
        </Flex>
      </Flex>
      <EditModalVehicle
        isOpen={editIsOpen}
        onOpen={editOnOpen}
        onClose={editOnClose}
        vehicle={vehicle}
      />
      <ModalDeleteVehicle
        isOpen={deleteIsOpen}
        onOpen={deleteOnOpen}
        onClose={deleteeOnClose}
        vehicle={vehicle}
      />
    </GridItem>
  );
};
