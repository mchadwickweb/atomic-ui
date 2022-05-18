import { Heading, Link, Text } from "@atomic-ui/elements";
import { Section } from "@atomic-ui/structure";
import React from "react";
import "./App.css";
import linearScreenshot from "./images/linear-screenshot.webp";

function App() {
  return (
    <main>
      <header className="page-header">
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
      <Section data-section="hero">
        <Heading as="h1">
          The issue tracking tool you&apos;ll enjoy using
        </Heading>
        <Text>
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. It&apos;s built for high-performance teams.
        </Text>
        <Link href="/" as="button">
          Sign up for free
        </Link>
      </Section>
      <Section data-section="demo">
        <img src={linearScreenshot} alt="Screen shot of linear app" />
      </Section>
      <Section data-section="customers"></Section>
      <Section data-section="features"></Section>
    </main>
  );
}

export default App;
