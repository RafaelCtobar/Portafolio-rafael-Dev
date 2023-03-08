import { Route, } from 'wouter'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import MyParticles from './components/particles'
import ResponsiveMain from './pages/responsiveMain'
import useHammer from './hooks/useHammer'
import Skills from './pages/skills/skills'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'

function App() {
  const { elementoApp } = useHammer();
  return (
    <div className="App" >
      <MyParticles />
      <Header />
      <div ref={elementoApp}>
        <Route path={"/"} component={ResponsiveMain} />
        <Route path={"/Skills"} component={Skills} />
        <Route path={"/Projects"} component={Projects} />
        <Route path={"/contact"} component={Contact} />
      </div>
      <Footer />
    </div>
  )
}
export default App
