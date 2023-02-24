import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PersonalInfo from './components/PersonalInfo';
import SelectYourPlan from './components/SelectYourPlan';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PersonalInfo/>}/>
          <Route path='/selectyourplan' element={<SelectYourPlan/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
