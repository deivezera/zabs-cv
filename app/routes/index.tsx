import { Center, Container,Title, Text, Box, Card, Transition } from "@mantine/core";

export default function Index() {
  
  return (
    <Container 
      size="lg"
    >
      <Center p={"lg"}>
        <Box sx={{width: "100%"}}> 
          <Box sx={{textAlign: "center"}}>
             <Title order={1}>
                Davi Szeremeta Zabroski
              </Title>
              <Text size="lg">
                Front-end developer
              </Text>
          </Box>
          <Box mt="md">
            <Card  shadow="lg" p="lg">
              <Card.Section p="md">
                <Text size="lg">
                  Descrição
                </Text>
              </Card.Section>
            </Card>
          </Box>          
        </Box>  
      </Center>
    </Container>
  );
}
