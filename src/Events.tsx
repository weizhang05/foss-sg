import { Box, Timeline, Title } from "@mantine/core";

import { Card, Image, Text, Badge, Button, Group, Tabs } from '@mantine/core';
import { IconCalendarEvent, IconClockFilled, IconMapPinFilled } from "@tabler/icons-react";
import { useState } from "react";


export default function Events() {
    const [activeTab, setActiveTab] = useState<string | null>('upcoming');

    return (
        <Box>
            <Tabs value={activeTab} onChange={setActiveTab} variant="pills" radius="xs">
                <Group gap={30}>
                    <Title order={1}>Events</Title>
                    <Group
                        justify="flex-start"
                        style={{ flexGrow: 1 }}
                    >
                        <Tabs.List>
                            <Tabs.Tab value="upcoming" >
                                Upcoming
                            </Tabs.Tab>
                            <Tabs.Tab value="past">
                                Past
                            </Tabs.Tab>
                        </Tabs.List>
                    </Group>
                </Group>

                <Tabs.Panel value="upcoming">
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>

                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                </Tabs.Panel>

                <Tabs.Panel value="past">
                    <Timeline color="gray" bulletSize={15} lineWidth={2}>
                        <Timeline.Item
                            lineVariant="dashed"
                        >
                            <Title order={4} mb={10}><IconCalendarEvent /> 20 Feb 2025</Title>

                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                        height={160}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Title order={3}>
                                        Free and Open Source Singapore Joint Meetup with FOSSASIA
                                    </Title>
                                </Group>

                                <Group gap={30}>
                                    <Text size="sm" c="dimmed">
                                        <IconClockFilled /> 7pm
                                    </Text>
                                    <Text size="sm" c="dimmed">
                                        <IconMapPinFilled /> Antler
                                    </Text>
                                </Group>

                            </Card>
                        </Timeline.Item>
                        <Timeline.Item>
                        </Timeline.Item>
                    </Timeline>
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}