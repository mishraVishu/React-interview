import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UseContext from "./components/useContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import LightDarkThemeUsingUseContext from './components/light-dark-theme-using-useContext';
import { ThemeProvider } from './components/theme';
import UseReducerHook from './components/UseReducerHook';

function App() {
  return (
    <div>
      <h2>React Hooks Interview Questions</h2>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseContext />
      
      <BrowserRouter>
        <ThemeProvider>
          <LightDarkThemeUsingUseContext />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
      <UseReducerHook />
    </div>
  )
}

export default App
