import { Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  children: ReactNode;
  to: string;
  icon?: IconType;
  highlight?: boolean;
}

export const MenuItem = ({
  children,
  to,
  icon: Icon,
  highlight,
  ...rest
}: MenuItemProps) => {
  return (
    <Link href={to} _hover={{ textDecor: "none" }}>
      <Text
        display={"flex"}
        alignItems="center"
        fontSize={"18px"}
        gap="2"
        color={{ base: highlight ? "blue.500" : "gray.500" }}
        _hover={{ base: !highlight && {color: 'gray.900'}}}
        {...rest}
      >
        {Icon && <Icon />}

        {children}
      </Text>
    </Link>
  );
};
