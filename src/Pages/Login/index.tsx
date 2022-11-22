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
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Input } from "../../components/Input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export interface SignInData {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const signInSchema = yup.object().shape({
    username: yup.string().required("username Obrigatório"),
    password: yup.string().required("Senha Obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    login(data);
  };
  return (
    <>
      <Header />
      <Flex
        align="center"
        justify="center"
        maxW="1400px"
        margin={["0", "0", "0", "0", "0 auto"]}
      >
        <Grid w={["0", "0", "0", "50%", "50%", "100%"]}>
          <Image
            src="https://cdn.buttercms.com/PNF2L0j5R8G5eoOGHzwA"
            display={{ base: "none", lg: "block" }}
          />
        </Grid>
        <Grid
          as="form"
          width={["50%", "50%", "50%", "50%", "50%", "100%"]}
          justifyContent="center"
          p="30px 15px"
          borderRadius="5px"
          onSubmit={handleSubmit(handleSignIn)}
          mb="14"
        >
          <Heading
            fontWeight="700"
            fontSize="24px"
            lineHeight="30px"
            mt="4"
            mb="4"
            size="lg"
          >
            Login
          </Heading>
          <VStack spacing={5} mt="6">
            <Box w="100%">
              <Input
                icon={FaEnvelope}
                placeholder="Digite seu usuario"
                label="Login"
                error={errors.username}
                {...register("username")}
              />
              {!errors.username && (
                <Text ml={1} mt="1" color="gray.300">
                  Exemplo: fagoto
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
            Entrar
          </Button>
          <VStack mt="10">
            <Text color="gray.400" fontSize="14px">
              Ainda não possui uma conta?
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
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
      <Footer />
    </>
  );
};
