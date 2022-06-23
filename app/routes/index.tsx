import { Center, Container,Title, Text, Box, Card, Transition, useMantineTheme } from "@mantine/core";

export default function Index() {
  const theme = useMantineTheme()
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
            <Card shadow="lg" p="lg">
              <Card.Section p="md">
                <Text size="lg">
                  Desenvolvedor de software experiente em criar interfaces tanto para sistemas robustos quanto para sistemas menores. Capaz de aprender rápido e ser autodidata quando precisa adquirir conhecimento de novas tecnologias. Sempre buscando se manter atualizado e aprender o que tem de melhor no mercado. Ótimo trabalho em equipe e relacionamento interpessoal.
                </Text>
              </Card.Section>
            </Card>
          </Box>          
        </Box>  
      </Center>
    </Container>
  );
}
