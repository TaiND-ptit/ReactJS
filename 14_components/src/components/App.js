import './App.css';
import TopMenu from './TopMenu';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {
  return (
    <div >
      <TopMenu/>
        <Header/>
        <Content tieude ="so 1" vitri1="order-lg-2" anh="assets/img/01.jpg"/>
        <Content anh="assets/img/02.jpg"/>
        <Content vitri1=" order-lg-2" anh="assets/img/03.jpg"/>
        <Footer/>
    </div>
  );
}

export default App;
