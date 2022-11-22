import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/userContext";
import { ToastContainer } from "react-toastify";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const { createNewUser } = useContext(UserContext);

  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    username: yup.string().required("username Obrigatório"),
    email: yup.string().required("email Obrigatório").email("Email invalido"),
    password: yup.string().required("Senha Obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<RegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data: RegisterData) => {
    createNewUser(data);
  };
  return (
    <>
      <Header />
      <Flex align="center" justify="center">
        <Grid w={["0", "0", "0", "50%"]}>
          <Image
            src="https://cdn.buttercms.com/PNF2L0j5R8G5eoOGHzwA"
            display={{ base: "none", lg: "block" }}
          />
        </Grid>
        <Grid
          as="form"
          mt="14"
          width="50%"
          justifyContent="center"
          p="30px 15px"
          borderRadius="5px"
          onSubmit={handleSubmit(handleRegister)}
          mb="14"
        >
          <Heading fontWeight="700" lineHeight="30px" mt="4" mb="4" size="xl">
            Cadastro
          </Heading>
          <VStack spacing={5} mt="6">
            <Box w="100%">
              <Input
                icon={FaEnvelope}
                placeholder="Digite seu nome de usuario"
                label="Nome de usuario"
                error={errors.username}
                {...register("username")}
              />
              {!errors.username && (
                <Text ml={1} mt="1" color="gray.300">
                  Exemplo: fagoto
                </Text>
              )}
            </Box>
            <Box w="100%">
              <Input
                icon={FaEnvelope}
                placeholder="Digite seu email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
              {!errors.username && (
                <Text ml={1} mt="1" color="gray.300">
                  Exemplo: fagoto@mail.com
                </Text>
              )}
            </Box>
            <Input
              icon={FaKey}
              placeholder="Digite sua Senha"
              {...register("password")}
              type="password"
              label="Senha"
              error={errors.password}
            />
          </VStack>
          <Button
            width="100%"
            mt="10"
            h="60px"
            borderRadius="8px"
            bg="blue.500"
            border="2px solid"
            borderColor="blue.500"
            color="white"
            fontSize="18px"
            fontWeight="600"
            type="submit"
            _hover={{}}
          >
            Cadastrar
          </Button>
          <VStack mt="10">
            <Text color="gray.400" fontSize="14px">
              Já tem uma conta?
            </Text>
            <Button
              width="100%"
              mt="10"
              h="60px"
              borderRadius="8px"
              bg="gray.200"
              color="gray.300"
              fontSize="18px"
              fontWeight="600"
              type="button"
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => navigate("/register")}
            >
              Login
            </Button>
          </VStack>
        </Grid>
      </Flex>
     
      <Footer />
    </>
  );
};
