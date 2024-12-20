import NavbarLink from "@/components/NavbarLink.tsx";
import { HStack } from "@chakra-ui/react";

function Navbar() {
  return (
    <HStack>
      <NavbarLink to="/" text="Home" />
      <NavbarLink to="/projects" text="Projects" />
      <NavbarLink to="/cats" text="Cats" />
    </HStack>
  );
}

export default Navbar;