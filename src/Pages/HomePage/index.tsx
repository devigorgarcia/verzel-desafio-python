import { Flex } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { ShowCase } from "../../components/Showcase";

export const HomePage = () => {
  return (
    <Flex flexDir="column" width="100vw">
      <Header />
      <SearchBar />
      <ShowCase />
      <Footer />
    </Flex>
  );
};
