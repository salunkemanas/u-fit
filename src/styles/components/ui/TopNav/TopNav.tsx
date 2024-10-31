import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/components/base/avatar";
import { Input } from "@/styles/components/base/input";
import Stack from "@/styles/components/ui/Stack";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Typography from "@/styles/components/ui/Typography";
import Image from "next/image";

export default function TopNav() {
  return (
    <Stack className="justify-between py-xs items-center px-xl w-full">
      <Image src="/logo.svg" alt="Logo" width={45} height={45} />
      <Stack className="w-1/3 items-center gap-x-xs">
        <Input placeholder="Search" className="px-xs py-xxs" />
        <MagnifyingGlassIcon className="size-7" />
      </Stack>
      <Avatar className="size-10 rounded-full hover:shadow-md transition-shadow">
        <AvatarFallback>
          <Typography variant="large">CN</Typography>
        </AvatarFallback>
      </Avatar>
    </Stack>
  );
}
