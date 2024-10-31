import Typography from "@/styles/components/ui/Typography";
import Stack from "@/styles/components/ui/Stack";

export default function Home() {
  return (
    <Stack className="gap-y-4 p-10" direction="column">
      {/* <Stack direction="row" className="gap-x-4">
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
      </Stack> */}
      <Stack direction="row" className="gap-x-lg flex-wrap">
        <Typography variant="h1" color="brand">
          Sample
        </Typography>
        <Typography variant="h1" color="neutral">
          Sample
        </Typography>
        <Typography variant="h1" color="success">
          Sample
        </Typography>
        <Typography variant="h1" color="warning">
          Sample
        </Typography>
        <Typography variant="h1" color="error">
          Sample
        </Typography>
        <Typography variant="h1" color="black">
          Sample
        </Typography>
        <Typography variant="h1" color="white">
          Sample
        </Typography>
        <Typography variant="h1" color="muted">
          Sample
        </Typography>
        <Typography variant="h1" color="disabled">
          Sample
        </Typography>
        <Typography variant="h1">Sample</Typography>
      </Stack>
    </Stack>
  );
  // return (
  //   <Stack className="p-lg gap-y-xl" direction="column">
  //     <Stack className="gap-x-xl" direction="row">
  //       <Button size="sm">Small</Button>
  //       <Button size="md">Medium</Button>
  //       <Button size="lg">Large</Button>
  //     </Stack>
  //     <Stack className="gap-x-xl" direction="row">
  //       <Button variant="solid" color="brand">
  //         Click me!
  //       </Button>
  //       <Button variant="outline" color="brand">
  //         Click me!
  //       </Button>
  //       <Button variant="ghost" color="brand">
  //         Click me!
  //       </Button>
  //       <Button variant="link" color="brand">
  //         Click me!
  //       </Button>
  //     </Stack>
  //     <Stack className="gap-x-xl" direction="row">
  //       <Button variant="solid" color="neutral">
  //         Click me!
  //       </Button>
  //       <Button variant="outline" color="neutral">
  //         Click me!
  //       </Button>
  //       <Button variant="ghost" color="neutral">
  //         Click me!
  //       </Button>
  //       <Button variant="link" color="neutral">
  //         Click me!
  //       </Button>
  //     </Stack>
  //     <Stack className="gap-x-xl" direction="row">
  //       <Button variant="solid" color="success">
  //         Click me!
  //       </Button>
  //       <Button variant="outline" color="success">
  //         Click me!
  //       </Button>
  //       <Button variant="ghost" color="success">
  //         Click me!
  //       </Button>
  //       <Button variant="link" color="success">
  //         Click me!
  //       </Button>
  //     </Stack>
  //     <Stack className="gap-x-xl" direction="row">
  //       <Button variant="solid" color="warning">
  //         Click me!
  //       </Button>
  //       <Button variant="outline" color="warning">
  //         Click me!
  //       </Button>
  //       <Button variant="ghost" color="warning">
  //         Click me!
  //       </Button>
  //       <Button variant="link" color="warning">
  //         Click me!
  //       </Button>
  //     </Stack>
  //     <Stack className="gap-x-xl" direction="row">
  //       <Button variant="solid" color="error">
  //         Click me!
  //       </Button>
  //       <Button variant="outline" color="error">
  //         Click me!
  //       </Button>
  //       <Button variant="ghost" color="error">
  //         Click me!
  //       </Button>
  //       <Button variant="link" color="error">
  //         Click me!
  //       </Button>
  //     </Stack>
  //     <Stack className="gap-x-xl" direction="row"></Stack>
  //   </Stack>
  // );
}
