import Stack from "@/styles/components/ui/Stack";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import Typography from "@/styles/components/ui/Typography";
import clsx from "clsx";
import Button from "../Button";

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
      className="size-full items-start gap-y-sm justify-center"
    >
      {navElements.map((elem) => {
        const Icon = elem.icon;
        return (
          <Button
            key={elem.name}
            className={clsx(
              "items-center gap-x-xs w-full px-xs font-medium transition-all",
              "!rounded-none justify-start py-sm",
            )}
            variant="ghost"
          >
            <Icon className="size-6" />
            <Typography variant="large">{elem.name}</Typography>
          </Button>
        );
      })}
    </Stack>
  );
}
