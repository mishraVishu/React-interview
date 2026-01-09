import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UseContext from './components/useContext';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseState from './components/UseState';
import Home from './components/light-dark-theme/Home';
import About from './components/light-dark-theme/About';
import Blog from './components/light-dark-theme/Blog';
import LightDarkThemeUsingUseContext from './components/light-dark-theme/light-dark-theme-using-useContext';
import { ThemeProvider } from './components/light-dark-theme/theme';
import UseReducerHook from './components/UseReducerHook';
import UseMemoAndUseCallbackHook from './components/useMemoAndUseCallbackHook';
import UseMemoPolyfill from './components/polyfills/UseMemoPolyfill';
import UseImperativeHandle from './components/useImperativeHandle';

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
      <UseMemoAndUseCallbackHook />
      <UseMemoPolyfill />
      <UseImperativeHandle />
    </div>
  )
}

export default App;
