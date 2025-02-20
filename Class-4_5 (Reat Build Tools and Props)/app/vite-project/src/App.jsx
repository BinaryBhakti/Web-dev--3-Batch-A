import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Card title='Apple' description="Mackbook Pro 2020"/>
      <Card title='Nike' description='Shoes'/>
      <Card title='Home Applicance' description='Television'/>
      <Card title='Sunglasses' description='Rayban Glasses' />
      {/* <Counter/> */}
      {/* <Form/> */}
    </>
  );
}

export default App;
