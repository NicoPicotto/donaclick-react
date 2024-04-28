import { Stack, Heading, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack p={5}>
      <Heading>DonáClick</Heading>
      <Text>Proyecto inicializado.</Text>
      <Stack direction='row'>
        <Button>Button Solid</Button>
        <Button variant='outline'>Button Outline</Button>
        <Button variant='ghost'>Button Ghost</Button>
        <Button color='azul' variant='link'>
          Button Link
        </Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
