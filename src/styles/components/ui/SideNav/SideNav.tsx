import Box from "@/styles/components/ui/Box";
import Stack from "@/styles/components/ui/Stack";

export default function SideNav() {
  const navElements = ["One", "Two", "Three", "Four"];
  return (
    <Stack direction="column">
      {navElements.map((elem) => {
        return <Box key={elem}>{elem}</Box>;
      })}
    </Stack>
  );
}
