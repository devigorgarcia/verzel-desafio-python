import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
  currency?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, icon: Icon, label, currency, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel color="gray.500" fontSize="14px" lineHeight="18px">
          {label}
        </FormLabel>
      )}

      <InputGroup flexDir="column">
        {Icon && (
          <InputLeftElement color="gray.500" mt={2.5}>
            <Icon />
          </InputLeftElement>
        )}
        {currency && <InputLeftElement fontSize='19px' top='10px'>{currency}</InputLeftElement>}
        <ChakraInput
          name={name}
          id={name}
          bg="gray.50"
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
