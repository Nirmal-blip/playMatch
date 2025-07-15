import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sports from './Components/Sports';
import Playground from './Components/Playground';
import InterestedField from './Components/InterestedField';
import Login from './Components/Login';
import ProtectedLayout from './Components/ProtectedLayout';
import Register from './Components/RegisterUser';
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Hero />} />
        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/about" element={<Hero />} />
          <Route path="/sports" element={<><Sports /><Playground /></>} />
          <Route path="/explore" element={<><Sports /><Playground /><InterestedField /></>} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/interested-field" element={<InterestedField />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
