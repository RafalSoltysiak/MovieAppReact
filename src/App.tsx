import "./App.css";

function Card({ title }: { title: string }) {
  return <div>{title}</div>;
}

export default function App() {
  return (
    <>
      <h2 className="">
        <Card title="test" />
        <Card title="test2" />
        <Card title="test3" />
      </h2>
    </>
  );
}
