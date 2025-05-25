import { useState } from 'react';
import { Box, Burger, Button, Center, Container, Flex, Group, NavLink, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet } from 'react-router';
import { IconCalendarEvent, IconHome, IconSpeakerphone, IconUsersGroup } from '@tabler/icons-react';

const links = [
    { link: '/', label: 'Home', icon: <IconHome /> },
    { link: '/events', label: 'Events', icon: <IconCalendarEvent /> },
    { link: '/about', label: 'The Team', icon: <IconUsersGroup /> },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            component={Link}
            to={link.link}
            label={link.label}
            rightSection={link.icon}
            variant="subtle"
            active={link.link === active}
            onClick={() => setActive(link.link)}
            style={{
                width: "fit-content",
            }}
        />
    ))

    return (
        <Box>
            <Box
                size="md"
                style={{
                    backgroundColor: "var(--mantine-color-body)",
                    borderBottom: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
                }}
                mb={50}
                h={56}
            >
                <Container h={"inherit"}>
                    <Flex h={"inherit"} align={"center"}>
                        <Title order={3}>
                            FOSS SG
                        </Title>

                        <Group
                            justify="flex-end"
                            style={{ flexGrow: 1 }}
                            visibleFrom="xs">
                            {items}

                            <Button
                                rightSection={<IconSpeakerphone />}
                                color={"red"}
                                component={Link}
                                to={"/be-a-speaker"}
                                onClick={() => setActive("")}
                            >
                                Be a Speaker!
                            </Button>
                        </Group>

                        <Group
                            justify="flex-end"
                            style={{ flexGrow: 1 }}
                            hiddenFrom="xs"
                        >
                            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                        </Group>
                    </Flex>
                </Container>
            </Box>
            <Container>
                <Outlet />
            </Container>
        </Box>
    );
}