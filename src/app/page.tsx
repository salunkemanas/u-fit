import Typography from "@/styles/components/ui/Typography";
import Box from "@/styles/components/ui/Box";
import Stack from "@/styles/components/ui/Stack";
import Button from "@/styles/components/ui/Button";
import { Button as BaseButton } from "@/styles/components/base/button";

export default function Home() {
  return (
    <Stack className="gap-y-4 p-10" direction="column">
      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 bg-brand-primary" />
        <Box className="h-10 w-40 bg-brand-secondary" />
        <Box className="h-10 w-40 bg-brand-tertiary" />
        <Box className="h-10 w-40 bg-brand-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 bg-success-primary" />
        <Box className="h-10 w-40 bg-success-secondary" />
        <Box className="h-10 w-40 bg-success-tertiary" />
        <Box className="h-10 w-40 bg-success-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 bg-warning-primary" />
        <Box className="h-10 w-40 bg-warning-secondary" />
        <Box className="h-10 w-40 bg-warning-tertiary" />
        <Box className="h-10 w-40 bg-warning-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 bg-error-primary" />
        <Box className="h-10 w-40 bg-error-secondary" />
        <Box className="h-10 w-40 bg-error-tertiary" />
        <Box className="h-10 w-40 bg-error-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 bg-neutral-primary" />
        <Box className="h-10 w-40 bg-neutral-secondary" />
        <Box className="h-10 w-40 bg-neutral-tertiary" />
        <Box className="h-10 w-40 bg-neutral-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 border rounded-sm border-brand-primary" />
        <Box className="h-10 w-40 border-sm rounded-sm border-brand-secondary" />
        <Box className="h-10 w-40 border-md rounded-sm border-brand-tertiary" />
        <Box className="h-10 w-40 border-lg rounded-sm border-brand-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 border rounded-md border-success-primary" />
        <Box className="h-10 w-40 border-sm rounded-md border-success-secondary" />
        <Box className="h-10 w-40 border-md rounded-md border-success-tertiary" />
        <Box className="h-10 w-40 border-lg rounded-md border-success-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 border rounded-lg border-warning-primary" />
        <Box className="h-10 w-40 border-sm rounded-lg border-warning-secondary" />
        <Box className="h-10 w-40 border-md rounded-lg border-warning-tertiary" />
        <Box className="h-10 w-40 border-lg rounded-lg border-warning-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 border rounded-xl border-error-primary" />
        <Box className="h-10 w-40 border-sm rounded-xl border-error-secondary" />
        <Box className="h-10 w-40 border-md rounded-xl border-error-tertiary" />
        <Box className="h-10 w-40 border-lg rounded-xl border-error-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Box className="h-10 w-40 border rounded-xl border-neutral-primary" />
        <Box className="h-10 w-40 border-sm rounded-xl border-neutral-secondary" />
        <Box className="h-10 w-40 border-md rounded-xl border-neutral-tertiary" />
        <Box className="h-10 w-40 border-lg rounded-xl border-neutral-quaternary" />
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Typography variant="h1" className="text-brand-primary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-brand-secondary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-brand-tertiary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-brand-quaternary">
          Sample
        </Typography>
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Typography variant="h1" className="text-success-primary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-success-secondary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-success-tertiary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-success-quaternary">
          Sample
        </Typography>
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Typography variant="h1" className="text-warning-primary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-warning-secondary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-warning-tertiary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-warning-quaternary">
          Sample
        </Typography>
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Typography variant="h1" className="text-error-primary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-error-secondary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-error-tertiary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-error-quaternary">
          Sample
        </Typography>
      </Stack>

      <Stack direction="row" className="gap-x-4">
        <Typography variant="h1" className="text-neutral-primary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-neutral-secondary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-neutral-tertiary">
          Sample
        </Typography>
        <Typography variant="h1" className="text-neutral-quaternary">
          Sample
        </Typography>
      </Stack>
    </Stack>
  );
}
