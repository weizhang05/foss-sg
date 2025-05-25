import { Box, Center, Container, Text, Title } from '@mantine/core';

export default function App() {
  return (
    <Box>
      <Center style={{ marginBottom: 30 }}>
        <Title order={1} ta="center">
          Welcome to Free and Open Source Software
          <br />
          Singapore
        </Title>
      </Center>
      <Center>
        <Text size="lg">
          A community for Free and Open Source Software in Singapore. Join us for meetups, talks, and more!
        </Text>
      </Center>
    </Box>
  )
}