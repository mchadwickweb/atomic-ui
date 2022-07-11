import { Divider, Heading, Text, TextField } from "@atomic-ui/core";

export default function TextFieldPage() {
  return (
    <>
      <Heading as="h1">Text Field</Heading>
      <Divider />
      <Heading as="h2">Examples</Heading>

      <Text>
        <strong>Simple text field with label</strong>
      </Text>
      <TextField id="example" name="example" labelText="Example" type="text" />
      <Divider />

      <Text>
        <strong>Simple text field with hint</strong>
      </Text>
      <TextField
        id="example"
        name="example"
        labelText="Example"
        type="text"
        hint="This is a hint"
      />
      <Divider />

      <Text>
        <strong>Simple text field with error</strong>
      </Text>
      <TextField
        id="example"
        name="example"
        labelText="Example"
        type="text"
        errorMessage="Uh oh!"
      />
      <pre>
        {`
        <TextField
          id="example"
          name="example"
          labelText="Example"
          type="text"
          errorMessage="Uh oh!"
        />
      `}
      </pre>
      <Divider />

      <Text>
        <strong>Simple text field with hint and error</strong>
      </Text>
      <TextField
        id="example"
        name="example"
        labelText="Example"
        type="text"
        hint="This is a hint"
        errorMessage="Uh oh!"
      />
      <pre>
        {`<TextField id="example" name="example" labelText="Example" type="text" hint="This is a hint" errorMessage="Uh oh!" />`}
      </pre>
    </>
  );
}
