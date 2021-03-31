//import logo from './logo.svg';
import './App.css';

function App() {
  return (
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>*/
    <main id="gridContainer">
      <nav id="navGridItem">
        <ul id="navFlexContainer">
          <li className="navItemFlex"><a href="">Menu</a></li>
          <li className="navItemFlex"><a href="index.html" target="_self">About Me</a></li>
          <li className="navItemFlex"><a href="#" target="_self">Professional Path</a></li>
          <li className="navItemFlex"><a href="#" target="_self">Projects</a></li>
        </ul>
      </nav>
      <section id="myselfTitle">
        <div id="myselfTitleFlexContainer">
          <h1 id="myselfTitleItemFlex">Who am I?</h1>
        </div>
      </section>
      <section id="myselfInfo">
        <div id="myselfFlexContainer">
          <img src='images/myself2.jpg' alt="myself" id="myPhoto"/>
          <div id="myselfItemFlexC">
            <h1 id="myName">Jorge Blancas Cruz</h1>
            <p id="myInfo">Graduated from Computational Embedded Systems engineering. An enthusiast when it comes to technology and innovation, who always tries to think of a way to solve the problems that may arise. Not giving up easily, keeping on going until the goal has met. Nevertheless, a flexible person who can change the strategies according to the needs.</p>
          </div>
        </div>
      </section>
      <section id="educationTitle">
        <div id="educationTitleFlexContainer">
          <h1 id="educationTitleItemFlex">Education</h1>
        </div>
      </section>
      <section id="education">
        <div id="educationFlexContainer">
          <img src="images/upy2.png" alt="" id="schoolLogo"/>
          <div id="educationItemFlex">
            <h1 id="schoolName">Universidad Politecnica de Yucatan</h1>
            <p id="schoolInfo">Computational Embedded Systems Engineering from september 2016 to april 2020.</p>
          </div>
        </div>
      </section>
      <section id="skillsTitle">
        <div id="skillsTitleFlexContainer">
          <h1 id="skillsTitleItemFlex">Technologies</h1>
        </div>
      </section>
      <section id="skills">
        <ul id="skillsFlexContainer">
            <li className="skillsItemFles"><img src="images/skills/python2.png" alt="Python" className="skillsImage" id="python"/></li>
            <li className="skillsItemFles"><img src="images/skills/c2.png" alt="C programming" className="skillsImage" id="cp"/></li>
            <li className="skillsItemFles"><img src="images/skills/js2.png" alt="JavaScript" className="skillsImage" id="js"/></li>
            <li className="skillsItemFles"><img src="images/skills/html2.png" alt="HTML" className="skillsImage" id="htmli"/></li>
            <li className="skillsItemFles"><img src="images/skills/css2.png" alt="CSS" className="skillsImage" id="cssi"/></li>
            <li className="skillsItemFles"><img src="images/skills/git.png" alt="Git" className="skillsImage" id="git"/></li>
            <li className="skillsItemFles"><img src="images/skills/latex.png" alt="LaTex" className="skillsImage" id="latex"/></li>
            <li className="skillsItemFles"><img src="images/skills/vhdl2.png" alt="VHDL" className="skillsImage" id="vhdl"/></li>
            <li className="skillsItemFles"><img src="images/skills/picc2.png" alt="Pic C Compiler" className="skillsImage" id="picc"/></li>
            <li className="skillsItemFles"><img src="images/skills/proteus2.png" alt="Proteus 8" className="skillsImage" id="proteus"/></li>
            <li className="skillsItemFles"><img src="images/skills/arduino.png" alt="Arduino" className="skillsImage" id="arduino"/></li>
            <li className="skillsItemFles"><img src="images/skills/keil2.png" alt="Keil U-vision" className="skillsImage" id="keil"/></li>
            <li className="skillsItemFles"><img src="images/skills/psoc2.png" alt="PSoC" className="skillsImage" id="psoc"/></li>
            <li className="skillsItemFles"><img src="images/skills/labview2.png" alt="LabView" className="skillsImage" id="labview"/></li>
            <li className="skillsItemFles"><img src="images/skills/siemens_tia.png" alt="Siemens Tia Portal Software" className="skillsImage" id="tia"/></li>
            <li className="skillsItemFles"><img src="images/skills/gx2.png" alt="Mitsubishi electric gx works 3 software" className="skillsImage" id="gx"/></li>
            <li className="skillsItemFles"><img src="images/skills/raspbian2.png" alt="Raspbian" className="skillsImage" id="rasp"/></li>
            <li className="skillsItemFles"><img src="images/skills/eagle2.png" alt="Eagle Autodesk PCB design" className="skillsImage" id="eagle"/></li>
            <li className="skillsItemFles"><img src="images/skills/orcad.png" alt="OrCAD PCB design" className="skillsImage" id="orcad"/></li>
            <li className="skillsItemFles"><img src="images/skills/matlab2.png" alt="Matlab" className="skillsImage" id="matlab"/></li>
        </ul>
      </section>
      <section id="hobbiesTitle">
        <div id="hobbiesTitleFlexContainer">
          <h1 id="hobbiesTitleItemFlex">Hobbies</h1>
        </div>
      </section>
      <section id="hobbies">
        <ul id="hobbiesFlexContainer">
          <li className="hobbiesItemFlex">Cooking</li>
          <li className="hobbiesItemFlex">Watch anime</li>
          <li className="hobbiesItemFlex">Read</li>
          <li className="hobbiesItemFlex">Challenge myself</li>
        </ul>
      </section>
      <footer id="footerGridItem">
        <ul id="footerFlexContainer">
          <li className="footerItemFlex"><a href="https://github.com/BlancasJ" target="_blank"><img src="images/footer/github.png" alt="GitHub Account" className="footerImage"/></a></li>
          <li className="footerItemFlex"><a href="mailto:Jorge.Blancas@theksquaregroup.com" target="_blank"><img src="images/footer/mail.png" alt="mail" className="footerImage"/></a></li>
          <li className="footerItemFlex"><a href="https://www.linkedin.com/in/jorge-blancas-cruz-4b6b311aa/" target="_blank"><img src="images/footer/linkedin.png" alt="Linkedin Account" className="footerImage"/></a></li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
