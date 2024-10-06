"use client";

import Typography from "@/styles/components/ui/Typography";
import Box from "@/styles/components/ui/Box";
import Stack from "@/styles/components/ui/Stack";
import Button from "@/styles/components/ui/Button";
import { Button as BaseButton } from "@/styles/components/base/button";

export default function Home() {
  return (
    <Box className="p-4">
      <Typography variant="h1">This is the h1</Typography>
      <Typography variant="h2">This is the h2</Typography>
      <Typography variant="h3">This is the h3</Typography>
      <Typography variant="h4">This is the h4</Typography>
      <Typography variant="p">This is the p</Typography>
      <Typography variant="blockquote">This is the blockquote</Typography>
      <Typography variant="lead">This is the lead</Typography>
      <Typography variant="large">This is the large</Typography>
      <Typography variant="small">This is the small</Typography>
      <Typography variant="muted">This is the muted</Typography>

      <Box className="w-full bg-[red]">This is a BOX</Box>

      <Stack
        direction="row"
        gap="2xl"
        gapX="3xl"
        gapY="4xl"
        className="flex-col"
      >
        <Box className="bg-blue-100">box1</Box>
        <Box className="bg-blue-100">box2</Box>
        <Box className="bg-blue-100">box3</Box>
      </Stack>

      {/* <Stack className="py-4" gapX="xl">
        <Button variant="default">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="link">Button</Button>
      </Stack>

      <Stack className="py-4" gapX="xl">
        <Button size="default">Button</Button>
        <Button size="lg">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="icon">Button</Button>
      </Stack> */}
    </Box>
  );
}
