import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <ProjectsPage />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
