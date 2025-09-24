import {
    Container,
    Title,
    Text,
    Button,
    Card,
    SimpleGrid,
    Stack,
    Group,
    Box,
    ThemeIcon,
    Center,
} from '@mantine/core';
import {IconBrandDiscord, IconSpeakerphone} from "@tabler/icons-react";
import {Link} from "react-router";

export default function OSSGLanding() {
    const features = [
        {
            icon: '🚀',
            title: 'Innovation Hub',
            description: 'Discover cutting-edge open source projects, from AI/ML frameworks to blockchain solutions, all developed and maintained by our passionate community members.'
        },
        {
            icon: '🤝',
            title: 'Collaborative Network',
            description: 'Connect with like-minded developers, contribute to meaningful projects, and build lasting professional relationships in Singapore\'s thriving tech ecosystem.'
        },
        {
            icon: '📚',
            title: 'Knowledge Sharing',
            description: 'Attend workshops, hackathons, and tech talks covering everything from cloud-native technologies to sustainable software development practices.'
        },
        // {
        //     icon: '🌟',
        //     title: 'Career Growth',
        //     description: 'Enhance your skills, showcase your contributions, and discover exciting opportunities in Singapore\'s dynamic tech landscape through open source involvement.'
        // },
        // {
        //     icon: '🎯',
        //     title: 'Impact Projects',
        //     description: 'Work on projects that matter - from civic technology initiatives to sustainability solutions that make a real difference in our community and beyond.'
        // },
        // {
        //     icon: '🔧',
        //     title: 'Technical Excellence',
        //     description: 'Learn best practices in software development, DevOps, security, and emerging technologies through hands-on collaboration and mentorship.'
        // }
    ];

    // const focusAreas = [
    //     {
    //         icon: '🐧',
    //         title: 'Linux & Infrastructure',
    //         description: 'From container orchestration to cloud-native solutions, we explore the backbone technologies powering modern applications.'
    //     },
    //     {
    //         icon: '🌐',
    //         title: 'Web Technologies',
    //         description: 'Frontend frameworks, backend APIs, progressive web apps, and the ever-evolving landscape of web development.'
    //     },
    //     {
    //         icon: '🤖',
    //         title: 'AI & Machine Learning',
    //         description: 'Open source ML frameworks, data science tools, and responsible AI development practices for real-world applications.'
    //     },
    //     {
    //         icon: '🔗',
    //         title: 'Blockchain & Web3',
    //         description: 'Decentralized applications, smart contracts, and exploring the future of distributed systems and digital ownership.'
    //     },
    //     {
    //         icon: '📱',
    //         title: 'Mobile Development',
    //         description: 'Cross-platform frameworks, native development, and creating mobile experiences that connect communities.'
    //     },
    //     {
    //         icon: '🏛️',
    //         title: 'Civic Technology',
    //         description: 'Building tools and platforms that enhance transparency, accessibility, and citizen engagement in Singapore.'
    //     }
    // ];

    return (
        <Box>
            <Center
                id={"welcome-section"}
                bg={"#0a192f"}
                pt={30}
                pb={20}
            >
                <Container size="lg">
                    <SimpleGrid cols={{base: 1, md: 2}} spacing="xl">
                        <Box>
                            <Text
                                component="h1"
                                variant="gradient"
                                gradient={{from: '#c92a2a', to: '#5f3dc4', deg: 90}}
                                fz={{base: "3.5rem", md: "5rem"}}
                                fw={800}
                                ta={{base: "center", md: "left"}}
                            >
                                Open Source Singapore
                            </Text>
                        </Box>
                        <Box
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                fz={{base: "1rem", md: "1.2rem"}}
                                c={"#f8f9fa"}
                                lh={1.7}
                                fw={500}
                                ta={"center"}
                            >
                                We are a community where ideas spark and collaboration thrives. At
                                OSSG, beginners and experts alike come together to learn, share, and
                                build openly. Join us in shaping the future of innovation in
                                Singapore—and beyond.
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Center>

            <Container
                id={'focus-section'}
                size="lg"
                py={80}
            >
                <Stack align="center" gap="xl">
                    <Title order={2} ta="center">
                        What We Focus On
                    </Title>
                    <SimpleGrid cols={{base: 1, md: 2, lg: 3}} spacing="xl">
                        {features.map((feature, index) => (
                            <Card key={index} shadow="sm" padding="lg" radius="md">
                                <Stack align="center" gap="md">
                                    <ThemeIcon variant="white" size={60} radius="xl">
                                        <Text size="2rem">{feature.icon}</Text>
                                    </ThemeIcon>
                                    <Title order={3} size="lg" ta="center">
                                        {feature.title}
                                    </Title>
                                    <Text ta="center" c="dimmed" size="sm">
                                        {feature.description}
                                    </Text>
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>

            {/* Focus Areas */}
            {/*<Container size="lg" py={80}>*/}
            {/*    <Stack align="center" gap="xl">*/}
            {/*        <Title order={2} ta="center">*/}
            {/*            What We Focus On*/}
            {/*        </Title>*/}
            {/*        <SimpleGrid cols={{base: 1, md: 2, lg: 3}} spacing="xl">*/}
            {/*            {focusAreas.map((area, index) => (*/}
            {/*                <Paper key={index} p="xl" radius="md" withBorder>*/}
            {/*                    <Stack align="center" gap="md">*/}
            {/*                        <Text size="2rem">{area.icon}</Text>*/}
            {/*                        <Title order={3} size="lg" ta="center">*/}
            {/*                            {area.title}*/}
            {/*                        </Title>*/}
            {/*                        <Text ta="center" c="dimmed" size="sm">*/}
            {/*                            {area.description}*/}
            {/*                        </Text>*/}
            {/*                    </Stack>*/}
            {/*                </Paper>*/}
            {/*            ))}*/}
            {/*        </SimpleGrid>*/}
            {/*    </Stack>*/}
            {/*</Container>*/}

            {/* Join Section */}
            <Box
                id="join-section"
                bg={"#0E0E55"}
                c={"#F5F5DC"}
                py={80}
            >
                <Container size="lg">
                    <Stack align="center" gap="xl">
                        <Title
                            order={2}
                            ta="center"
                        >
                            Ready to Make an Impact?
                        </Title>
                        <Text
                            size="xl"
                            ta="center"
                            maw={600}
                        >
                            At OSSG, everyone has a place — from seasoned developers to those just beginning their
                            journey. Together, we learn, share, and support one another as we build a stronger open
                            source community.
                        </Text>
                        <Group justify="center" gap="md">
                            <Button
                                rightSection={<IconSpeakerphone/>}
                                color={"#c92a2a"}
                                component={Link}
                                to={"/be-a-speaker"}
                            >
                                Be a Speaker!
                            </Button>
                            <Button
                                rightSection={<IconBrandDiscord/>}
                                color="#5f3dc4"
                                component="a"
                                href="https://discord.gg/mgBwDvkkn8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Discord
                            </Button>
                        </Group>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
