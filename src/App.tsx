import Button from "./components/Button";

export default function App() {
  return (
    <div>
      <div className="color-buttons">
        <Button color="red">Default</Button>
        <Button color="blue">Blue</Button>
        <Button color="gray">Gray</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="success">Success</Button>
        <Button color="failure">Failure</Button>
        <Button color="warning">Warning</Button>
        <Button color="purple">Purple</Button>
      </div>
      <div className="pills">
        <Button pill>Default</Button>
        <Button color="blue" pill={true}>
          Blue
        </Button>
        <Button color="gray" pill={true}>
          Gray
        </Button>
        <Button color="dark" pill={true}>
          Dark
        </Button>
        <Button color="light" pill={true}>
          Light
        </Button>
        <Button color="success" pill={true}>
          Success
        </Button>
        <Button color="failure" pill={true}>
          Failure
        </Button>
        <Button color="warning" pill={true}>
          Warning
        </Button>
        <Button color="purple" pill={true}>
          Purple
        </Button>
      </div>
      <div className="outlines">
        <Button outline>Purple to Blue</Button>
        <Button outline color="blue">
          Cyan to Blue
        </Button>
      </div>
      <div className="sizes">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Base</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra large</Button>
      </div>
      <div>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
