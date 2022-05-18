import { Heading, Link, Text, List, ListItem } from "@atomic-ui/elements";
import { Section } from "@atomic-ui/structure";
import React from "react";
import "./App.css";
import linearScreenshot from "./images/linear-screenshot.webp";

function App() {
  return (
    <main>
      <header className="page-header">
        <nav className="navigation">
          <div className="container">
            <List as="ul">
              <ListItem>
                <Link href="/">Logo</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Features</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Method</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Changelog</Link>
              </ListItem>
              <ListItem>
                <Link href="/">About</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Pricing</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Blog</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Log in</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Sign up</Link>
              </ListItem>
            </List>
          </div>
        </nav>
      </header>
      <Section data-section="hero">
        <Heading as="h1">
          The issue tracking tool you&apos;ll enjoy using
        </Heading>
        <Text align="right">
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
