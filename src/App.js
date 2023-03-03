import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PersonalInfo from './components/PersonalInfo';
import SelectYourPlan from './components/SelectYourPlan';
import PickAddOns from './components/PickAddOns';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PersonalInfo/>}/>
          <Route path='/selectyourplan' element={<SelectYourPlan/>}/>
          <Route path='/pickAddOns' element={<PickAddOns/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
