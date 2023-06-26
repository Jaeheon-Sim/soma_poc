import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Stepper,
} from '@mantine/core';

import Flow from './Flow';
import Draw from './Draw';

const MyStep = () => {
  const [active, setActive] = useState(1);
  return (
    <Stepper active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="First step" description="Create an account">
        Step 1 content: Create an account
      </Stepper.Step>
      <Stepper.Step label="Second step" description="Verify email">
        Step 2 content: Verify email
      </Stepper.Step>
      <Stepper.Step label="Final step" description="Get full access">
        Step 3 content: Get full access
      </Stepper.Step>
      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
};

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    // <AppShell
    //   styles={{
    //     main: {
    //       background:
    //         theme.colorScheme === "dark"
    //           ? theme.colors.dark[8]
    //           : theme.colors.gray[0],
    //     },
    //   }}
    //   navbarOffsetBreakpoint="sm"
    //   asideOffsetBreakpoint="sm"
    //   navbar={
    //     <Navbar
    //       p="md"
    //       hiddenBreakpoint="sm"
    //       hidden={!opened}
    //       width={{ sm: 200, lg: 300 }}
    //     >
    //       <Text>Application navbar</Text>
    //     </Navbar>
    //   }
    //   aside={
    //     <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
    //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
    //         <div className="text-xl font-bold underline">hello</div>
    //         <Text className="text-xl font-bold underline">
    //           Application sidebar
    //         </Text>
    //       </Aside>
    //     </MediaQuery>
    //   }
    //   footer={
    //     <Footer height={60} p="md">
    //       Application footer
    //     </Footer>
    //   }
    //   header={
    //     <Header height={{ base: 50, md: 70 }} p="md">
    //       <div
    //         style={{ display: "flex", alignItems: "center", height: "100%" }}
    //       >
    //         <MediaQuery largerThan="sm" styles={{ display: "none" }}>
    //           <Burger
    //             opened={opened}
    //             onClick={() => setOpened((o) => !o)}
    //             size="sm"
    //             color={theme.colors.gray[6]}
    //             mr="xl"
    //           />
    //         </MediaQuery>
    //         <MyStep />
    //       </div>
    //     </Header>
    //   }
    // >
    //   {/* <Flow /> */}

    // </AppShell>
    <Draw />
  );
}
