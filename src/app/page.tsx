import Stack from "@/styles/components/ui/Stack";
import SideNav from "@/styles/components/ui/SideNav";
import TopNav from "@/styles/components/ui/TopNav";

export default function Home() {
  return (
    <Stack direction="column">
      <TopNav />
      <SideNav />
    </Stack>
  );
}
