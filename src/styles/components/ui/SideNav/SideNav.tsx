import Box from "@/styles/components/ui/Box";
import Stack from "@/styles/components/ui/Stack";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

export default function SideNav() {
  const navElements = [
    { name: "Dashboard", icon: Home },
    { name: "Orders", icon: ShoppingCart },
    { name: "Products", icon: Package },
    { name: "Customers", icon: Users },
    { name: "Analytics", icon: LineChart },
  ];
  return (
    <Stack
      direction="column"
      gapY="md"
      className="bg-white h-full items-start shadow-md justify-center w-full"
    >
      {navElements.map((elem) => {
        const Icon = elem.icon;
        return (
          <Box
            key={elem.name}
            className="flex items-center gap-x-2 w-full pl-4 py-2 text-gray-600 font-medium transition-all hover:text-blue-600 hover:bg-blue-50 hover:cursor-pointer"
          >
            <Icon className="size-5" />
            {elem.name}
          </Box>
        );
      })}
    </Stack>
  );
}
