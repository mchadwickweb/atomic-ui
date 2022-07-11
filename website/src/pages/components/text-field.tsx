import { TextField } from "@atomic-ui/components";

export default function TextFieldPage() {
  return (
    <>
      <h1>Text Field</h1>
      <h2>Examples</h2>
      <p>
        <strong>Simple text field with label</strong>
      </p>
      <TextField id="example" name="example" labelText="Example" type="text" />

      <p>
        <strong>Simple text field with hint</strong>
      </p>
      <TextField
        id="example"
        name="example"
        labelText="Example"
        type="text"
        hint="This is a hint"
      />

      <p>
        <strong>Simple text field with error</strong>
      </p>
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

      <p>
        <strong>Simple text field with hint and error</strong>
      </p>
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
