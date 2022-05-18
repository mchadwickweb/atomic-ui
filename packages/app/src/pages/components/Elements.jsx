import React from "react";
import {
  Heading,
  Divider,
  List,
  ListItem,
  Text,
  Blockquote,
  Link,
} from "@atomic-ui/elements";

function Elements() {
  return (
    <>
      <Heading as="h1">Heading level 1</Heading>
      <Heading as="h2">Heading level 2</Heading>
      <Heading as="h3">Heading level 3</Heading>
      <Heading as="h4">Heading level 4</Heading>
      <Heading as="h5">Heading level 5</Heading>
      <Heading as="h6">Heading level 6</Heading>
      <Divider />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        reiciendis fugit facere aliquam iusto quod delectus reprehenderit
        blanditiis ullam beatae. Natus, recusandae quam et expedita delectus
        molestias sed fuga minima?
      </Text>
      <Divider />
      <List as="ul">
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </List>
      <List as="ol">
        <ListItem>Do this</ListItem>
        <ListItem>Then this</ListItem>
        <ListItem>Lastly this</ListItem>
      </List>
      <Divider />
      <Blockquote cite="https://www.interactstudio.co.uk">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quibusdam? Minima assumenda consequatur sit nesciunt dolor suscipit
          nobis tempora ut repellat placeat explicabo, modi id distinctio autem
          facere! Recusandae, explicabo.
        </Text>
      </Blockquote>
      <Link href="https://www.interactstudio.co.uk">
        Interact Studio website
      </Link>
    </>
  );
}

export default Elements;
