import {
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  Card,
  CardHeader,
} from "@chakra-ui/react";
import { itemStyle } from "../id";

export default function Projects() {
  return (
    <Card
      sx={{ ...itemStyle, background: "background_lighter" }}
      boxShadow={"xl"}
      width={{ base: "87%", md: "88%" }}
    >
      <Tabs variant="soft-rounded" isFitted>
        <TabList marginTop={2}>
          <Tab _selected={{ bg: "primary" }}>Tab 1</Tab>
          <Tab _selected={{ bg: "primary" }}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
