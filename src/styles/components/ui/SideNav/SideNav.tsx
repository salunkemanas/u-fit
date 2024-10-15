import Stack from "@/styles/components/ui/Stack";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import Typography from "@/styles/components/ui/Typography";

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
      className="bg-white size-full items-start shadow-md justify-center"
    >
      {navElements.map((elem) => {
        const Icon = elem.icon;
        return (
          <Stack
            key={elem.name}
            className="items-center gap-x-2 w-full pl-4 py-2 text-gray-600 font-medium transition-all hover:text-blue-600 hover:bg-blue-50 hover:cursor-pointer"
          >
            <Icon className="size-5" />
            <Typography variant="muted">{elem.name}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}
