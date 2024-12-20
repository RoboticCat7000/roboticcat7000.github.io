import { SimpleGrid } from "@chakra-ui/react";
import SimpleCard from "@/components/SimpleCard.tsx";
import { CircleHelp, FileText, PanelBottom } from "lucide-react";

function HomePage() {
  return (
    <SimpleGrid gap="10" columns={[2, null, 2]}>
      <SimpleCard
        title="Who Am I"
        description="lorem ipsum dipsum"
        icon={<CircleHelp />}
      />
      <SimpleCard title="lorem" description="ipsum" icon={<FileText />} />
      <SimpleCard title="dipsum" description="lorem" icon={<PanelBottom />} />
    </SimpleGrid>
  );
}

export default HomePage;