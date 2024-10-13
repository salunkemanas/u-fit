import { Avatar, AvatarFallback, AvatarImage } from "../../base/avatar";
import { Input } from "../../base/input";

import Box from "../Box";
import Stack from "../Stack";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function TopNav() {
  return (
    <Stack className="justify-between p-3 items-center px-6 bg-white w-screen">
      <Box className="font-bold text-lg">Logo</Box>
      <Stack className="w-1/3 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 items-center">
        <Input placeholder="Search" className="" />
        <MagnifyingGlassIcon className="ml-2" />
      </Stack>
      <Avatar className="w-10 h-10 rounded-full hover:shadow-md transition-shadow">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Stack>
  );
}
