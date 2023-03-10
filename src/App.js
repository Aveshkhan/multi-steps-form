import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PersonalInfo from './components/PersonalInfo';
import SelectYourPlan from './components/SelectYourPlan';
import PickAddOns from './components/PickAddOns';
import FinishingUp from './components/FinishingUp';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PersonalInfo/>}/>
          <Route path='/selectyourplan' element={<SelectYourPlan/>}/>
          <Route path='/pickAddOns' element={<PickAddOns/>}/>
          <Route path='/finishingUp' element={<FinishingUp/>}/>
          <Route path='/thankYou' element={<ThankYou/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
