import {useState} from 'react';
import {Box, Burger, Button, Container, Flex, Group, Image, Menu, NavLink, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Link, Outlet} from 'react-router';
import {IconBrandDiscord, IconCalendarEvent, IconSpeakerphone, IconUsersGroup} from '@tabler/icons-react';
import {useMediaQuery} from '@mantine/hooks';

const links = [
    // {link: '/', label: 'Home', icon: <IconHome/>},
    {link: '/events', label: 'Events', icon: <IconCalendarEvent/>},
    {link: '/about', label: 'The Team', icon: <IconUsersGroup/>},
];

export default function Template() {
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const [menuOpened, setMenuOpened] = useState(false);

    const isSm = useMediaQuery('(min-width: 576px) and (max-width: 767px)');

    const beAspeakerColor: string = "#c92a2a";
    const joinDiscordColor: string = "#5f3dc4";

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
                display:'none',
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
                pt={10}
                pb={10}
            >
                <Container h={"inherit"}>
                    {
                        isSm &&
                        <Group>
                            <Group>
                                <Image
                                    src={"/ossg_logo_big.png"}
                                    h={70}
                                    fit="contain"
                                />
                            </Group>
                            <Group
                                justify="flex-end"
                                style={{flexGrow: 1}}
                            >
                                <Button
                                    rightSection={<IconSpeakerphone/>}
                                    color={beAspeakerColor}
                                    component={Link}
                                    to={"/be-a-speaker"}
                                    onClick={() => setActive("")}
                                    style={{marginRight: 20}}
                                >
                                    Be a Speaker!
                                </Button>
                                <Button
                                    rightSection={<IconBrandDiscord/>}
                                    color={joinDiscordColor}
                                    component="a"
                                    href="https://discord.gg/mgBwDvkkn8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join Discord
                                </Button>
                            </Group>
                        </Group>
                    }

                    <Flex
                        h={"inherit"}
                        align={"center"}
                    >
                        <Group
                            visibleFrom="sm"
                        >
                            <Image
                                src={"/ossg_logo_big.png"}
                                h={70}
                                fit="contain"
                            />
                        </Group>

                        <Group
                            justify="flex-end"
                            style={{flexGrow: 1}}
                            visibleFrom="xs"
                        >
                            {items}
                        </Group>
                        <Group visibleFrom="sm">
                            <Button
                                rightSection={<IconSpeakerphone/>}
                                color={beAspeakerColor}
                                component={Link}
                                to={"/be-a-speaker"}
                                onClick={() => setActive("")}
                            >
                                Be a Speaker!
                            </Button>
                            <Button
                                rightSection={<IconBrandDiscord/>}
                                color={joinDiscordColor}
                                component="a"
                                href="https://discord.gg/mgBwDvkkn8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Discord
                            </Button>
                        </Group>

                        <Group
                            hiddenFrom="xs"
                            style={{
                                flexGrow: 1,
                            }}
                        >
                            <Group
                                justify="flex-start"
                            >
                                <Image
                                    src={"/ossg_logo_big.png"}
                                    h={70}
                                    fit="contain"
                                />
                            </Group>
                            <Group
                                style={{
                                    flexGrow: 1,
                                }}
                                justify="flex-end"
                            >
                                <Menu opened={menuOpened} onChange={setMenuOpened} shadow="md" width={200}>
                                    <Menu.Target>
                                        <Burger opened={opened} onClick={toggle} size="sm"/>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        {/*{*/}
                                        {/*    links.map((link) => (*/}
                                        {/*        <Menu.Item*/}
                                        {/*            key={link.label}*/}
                                        {/*            component={Link}*/}
                                        {/*            to={link.link}*/}
                                        {/*            leftSection={link.icon}*/}
                                        {/*            onClick={() => setActive(link.link)}*/}
                                        {/*        >*/}
                                        {/*            {link.label}*/}
                                        {/*        </Menu.Item>*/}
                                        {/*    ))*/}
                                        {/*}*/}
                                        {/*<Menu.Divider/>*/}
                                        <Menu.Item
                                            color={beAspeakerColor}
                                            leftSection={<IconSpeakerphone/>}
                                            component={Link}
                                            to={"/be-a-speaker"}
                                        >
                                            Be a Speaker!
                                        </Menu.Item>
                                        <Menu.Item
                                            color={joinDiscordColor}
                                            leftSection={<IconBrandDiscord/>}
                                            component="a"
                                            href="https://discord.gg/mgBwDvkkn8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Join Discord
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        </Group>
                    </Flex>
                </Container>
            </Box>

            <Outlet/>

            <Group
                justify={"center"}
                py={"lg"}
            >
                <Text>
                    Built with ❤️ by the 🤖 behind
                    <Image
                        style={{
                            display: 'inline-block',
                            verticalAlign: 'middle'
                        }}
                        src={"/ossg_logo_big.png"}
                        h={'auto'}
                        w={50}
                        fit="contain"
                    />
                </Text>
            </Group>
        </Box>
    );
}