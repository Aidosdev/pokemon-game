import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header title="This is title" descr="This is description!" />
      <Layout urlBg title="This is title(Image)" descr="This is description!" />
      <Layout title="This is title(ColorBg)" colorBg="red" descr="This is description!" />
      <Layout urlBg title="This is title(Image)" descr="This is description!" />
      <Footer />
    </>
  );
}

export default App;
