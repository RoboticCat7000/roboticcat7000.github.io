import SimpleCardProps from "../types";
import { Text, Card, Heading } from "@chakra-ui/react";

function SimpleCard({ title, description, icon }: SimpleCardProps) {
  return (
    <Card.Root>
      <Card.Header>
        {icon}
        <Heading>{title}</Heading>
      </Card.Header>
      <Card.Body>
        <Text>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}

export default SimpleCard;