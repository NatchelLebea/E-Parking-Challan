import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage} from "./pages/LoginPage/LoginPage"
import { PaymentFormPage} from "./pages/PayementFormPage/PaymentFormPage"

const App = () => {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/paymentformpage" element={<PaymentFormPage />}/>      </Routes>
     </Router>
    </div>
  );
}

export default App;
