import Typography from "@/styles/components/ui/Typography";
import Box from "@/styles/components/ui/Box";
import Stack from "@/styles/components/ui/Stack";
import Button from "@/styles/components/ui/Button";

export default function Home() {
  return (
    <>
      <Typography variant="h1">This is the h1</Typography>
      <Typography variant="h2">This is the h2</Typography>
      <Typography variant="h3">This is the h3</Typography>
      <Typography variant="h4">This is the h4</Typography>
      <Typography variant="p">This is the p</Typography>
      <Typography variant="blockquote">This is the blockquote</Typography>
      <Typography variant="lead">This is the lead</Typography>
      <Typography variant="large">This is the large</Typography>
      <Typography variant="small">This is the small</Typography>
      <Typography variant="muted">This is the muted</Typography>
      <Box className="w-full">This is a BOX</Box>
      <Stack>
        <Box className="bg-blue-100">box1</Box>
        <Box className="bg-blue-100">box2</Box>
        <Box className="bg-blue-100">box3</Box>
      </Stack>
      <Button></Button>
    </>
  );
}
