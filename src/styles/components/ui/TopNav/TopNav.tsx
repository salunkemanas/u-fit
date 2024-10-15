import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/components/base/avatar";
import { Input } from "@/styles/components/base/input";

import Box from "@/styles/components/ui/Box";
import Stack from "@/styles/components/ui/Stack";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Typography from "@/styles/components/ui/Typography";
import Image from "next/image";

export default function TopNav() {
  return (
    <Stack className="justify-between p-3 items-center px-6 bg-white w-screen">
      <Box className="font-bold text-lg">
        <Image src="/logo.svg" alt="Logo" width={45} height={45} />
      </Box>
      <Stack className="w-1/3 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 items-center">
        <Input placeholder="Search" className="" />
        <MagnifyingGlassIcon className="size-7" />
      </Stack>
      <Avatar className="size-10 rounded-full hover:shadow-md transition-shadow">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          <Typography variant="large">CN</Typography>
        </AvatarFallback>
      </Avatar>
    </Stack>
  );
}
