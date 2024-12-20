import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

function NavbarLink({ to, text }: { to: string; text: string }) {
  return (
    <Button color={"whitesmoke"} backgroundColor="blue.700">
      <Link to={to}>{text}</Link>
    </Button>
  );
}

export default NavbarLink;