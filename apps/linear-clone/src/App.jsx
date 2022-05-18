import React from "react";
import { Heading, Link, Text } from "@atomic-ui/elements";

import "./App.css";

function App() {
  return (
    <main>
      <header>
        <nav>
          <Link href="/">Logo</Link>
          <Link href="/">Features</Link>
          <Link href="/">Method</Link>
          <Link href="/">Changelog</Link>
          <Link href="/">About</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Log in</Link>
          <Link href="/">Sign up</Link>
        </nav>
      </header>
      <section data-section="hero">
        <Heading as="h1">
          The new standard for modern software development
        </Heading>
        <Text>
          With its meticulous design, breathtaking speed and opinionated yet
          flexible workflows, Linear unlocks your teams full potential. It is
          the tool of choice for high-performance teams to build products
          better.
        </Text>
        <Link href="/" as="button">
          Sign up for free
        </Link>
      </section>
      <section data-section="customers"></section>
      <section data-section="features"></section>
    </main>
  );
}

export default App;
