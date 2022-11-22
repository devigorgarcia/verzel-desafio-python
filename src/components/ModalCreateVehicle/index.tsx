import {
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { VehiclesContext } from "../../context/VehiclesContext";
import { Input } from "../Input/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ICreateVehicle {
  name: string;
  brand: string;
  model: string;
  image: string;
  price: number;
}

export interface IModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalVehicle = ({ isOpen, onOpen, onClose }: IModalProps) => {
  const { createNewVehicle } = useContext(VehiclesContext);

  const signInSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    brand: yup.string().required("Campo Obrigatório"),
    model: yup.string().required("Campo Obrigatório"),
    image: yup.string().required("Campo Obrigatório"),
    price: yup.number().required("Campo Obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ICreateVehicle>({
    resolver: yupResolver(signInSchema),
  });

  const handleCreateData = (data: ICreateVehicle) => {
    createNewVehicle(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Carro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              as="form"
              border="3px solid"
              borderColor="gray.100"
              p="30px 15px"
              borderRadius="5px"
              onSubmit={handleSubmit(handleCreateData)}
              mb="14"
            >
              <VStack spacing={5}>
                <Input
                  placeholder="Digite o nome do carro"
                  type="name"
                  label="Nome"
                  error={errors.name}
                  {...register("name")}
                />

                <Input
                  placeholder="Digite a marca"
                  {...register("brand")}
                  type="text"
                  label="Marca"
                  error={errors.brand}
                />
                <Input
                  placeholder="Digite o modelo"
                  {...register("model")}
                  type="text"
                  label="Modelo"
                  error={errors.brand}
                />
                <Input
                  placeholder="Coloque a foto"
                  {...register("image")}
                  type="text"
                  label="Foto"
                  error={errors.image}
                />
                <Box w="100%">
                  <Input
                    placeholder="Digite o preço"
                    {...register("price")}
                    type="number"
                    label="Preço"
                    error={errors.price}
                    currency="R$"
                  />
                  {!errors.name && (
                    <Text ml={1} mt="1" color="gray.300">
                      Exemplo: R$3000,00
                    </Text>
                  )}
                </Box>
              </VStack>
              <VStack mt={8} gap="4" w="100%" flexDir="row">
                <Button
                  type="submit"
                  w="100%"
                  variant="ghost"
                  bg="blue.500"
                  color="white"
                >
                  Adicionar
                </Button>
                <Button
                  w="100%"
                  variant="outline"
                  colorScheme="red"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
              </VStack>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
