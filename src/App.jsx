import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import './App.css'
import "./components/Navbar.module.css"
import History from "./components/History"
import CreatChat from "./components/CreatChat"
import "./components/CreatChat.module.css"
import FormListProvider from './store/Form_list';
import CustomerDetails from './components/CustomerDetails';
function App() {
  const [view, setView] = useState("showHistory");
  const [selectedChat , setSelectedChat] = useState(null);
   
  const handleMoreClick = (chat) => {
     setSelectedChat(chat);
    setView("showCustomerDetails");
  };

  let content;
  switch (view) {
    case "showHistory":
      content = <History onMoreClick={handleMoreClick} />;
      break;
    case "creatChat":
      content = <CreatChat setView = {setView}/>;
      break;
    case "showCustomerDetails":
      content = <CustomerDetails chat = {selectedChat}/>;
      break;
    default:
      content = <History onMoreClick={handleMoreClick} />;
      break;
  }
  return (
    <>

      <FormListProvider>
      <div className="display-container">
        <Sidebar view = {view} setView={setView} />
        <div className="main-display">
          <Navbar />
          <center>
            {content}
          </center>
          <hr />
          <Footer />
        </div>
      </div>
    </FormListProvider>
    </>
  )
}

export default App
