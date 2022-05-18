import React from "react";
import { Heading, Link } from "@atomic-ui/elements";
import { Outlet } from "react-router-dom";

function Components() {
  return (
    <>
      <Heading as="h1">Components</Heading>
      <Link href="/components/elements">Elements</Link>
      <Outlet />
    </>
  );
}

export default Components;
