import { Text, Box, Button, Group, Textarea, TextInput, Title, Grid } from "@mantine/core";
import { useForm } from '@mantine/form';

export default function About() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <Box>
            <Grid>
                <Grid.Col span={{ base: 12, sm: 6}}>
                    <Title order={2} mb={10}>
                        Have an opensource tool to recommend?
                        Know of an interesting hack?
                        Or having a topic you like to talk about?
                    </Title>
                    <Text c="dimmed">
                        Share with us about the topic you have in mind.
                        <br /><br />
                        The team is always happy to have avid and passionate individual to share new knowledge and skills.
                    </Text>
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            label="Name"
                            placeholder="Clyde"
                            key={form.key('name')}
                        />

                        <TextInput
                            label="Email"
                            placeholder="your@email.com"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />

                        <TextInput
                            label="Topic"
                            key={form.key('topic')}
                        />

                        <Textarea
                            label="Tell us more!"
                            resize="vertical"
                            autosize
                            minRows={5}
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                </Grid.Col>
            </Grid>

        </Box>
    )
}