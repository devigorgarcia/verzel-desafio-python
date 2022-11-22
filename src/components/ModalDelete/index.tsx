import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IModalProps } from "../ModalEdit";
import { useContext } from "react";
import { VehiclesContext } from "../../context/VehiclesContext";

export const ModalDeleteVehicle = ({
  isOpen,
  onOpen,
  onClose,
  vehicle,
}: IModalProps) => {
  const { deleteVehicle } = useContext(VehiclesContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmação de Deleção</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size="md">
            Você deseja mesmo excluir o
            <Text color="blue.500" as="span">
              {vehicle.name}
            </Text>{" "}
            ?
          </Heading>
        </ModalBody>

        <ModalFooter gap="1rem">
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => deleteVehicle(vehicle.id)}
          >
            Confirmar
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
