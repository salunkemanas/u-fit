import clsx from "clsx";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import Stack from "@/styles/components/ui/Stack";
import Typography from "@/styles/components/ui/Typography";
import Button from "@/styles/components/ui/Button";

const navElements = [
  { name: "Dashboard", icon: Home },
  { name: "Orders", icon: ShoppingCart },
  { name: "Products", icon: Package },
  { name: "Customers", icon: Users },
  { name: "Analytics", icon: LineChart },
];

export default function SideNav() {
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
