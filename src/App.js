import logo from './logo.svg';
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
          <li class="navItemFlex"><a href="">Menu</a></li>
          <li class="navItemFlex"><a href="index.html" target="_self">About Me</a></li>
          <li class="navItemFlex"><a href="professionalPath.html" target="_self">Professional Path</a></li>
          <li class="navItemFlex"><a href="projects.html" target="_self">Projects</a></li>
        </ul>
      </nav>
      <section id="myselfTitle">
        <div id="myselfTitleFlexContainer">
          <h1 id="myselfTitleItemFlex">Who am I?</h1>
        </div>
      </section>
      <section id="myselfInfo">
        <div id="myselfFlexContainer">
          <img src='../images/myself2.jpg' alt="myself" id="myPhoto"/>
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
          <img src="../images/upy2.png" alt="" id="schoolLogo"/>
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
            <li class="skillsItemFles"><img src="../images/skills/python2.png" alt="Python" class="skillsImage" id="python"/></li>
            <li class="skillsItemFles"><img src="../images/skills/c2.png" alt="C programming" class="skillsImage" id="cp"/></li>
            <li class="skillsItemFles"><img src="../images/skills/js2.png" alt="JavaScript" class="skillsImage" id="js"/></li>
            <li class="skillsItemFles"><img src="../images/skills/html2.png" alt="HTML" class="skillsImage" id="htmli"/></li>
            <li class="skillsItemFles"><img src="../images/skills/css2.png" alt="CSS" class="skillsImage" id="cssi"/></li>
            <li class="skillsItemFles"><img src="../images/skills/git.png" alt="Git" class="skillsImage" id="git"/></li>
            <li class="skillsItemFles"><img src="../images/skills/latex.png" alt="LaTex" class="skillsImage" id="latex"/></li>
            <li class="skillsItemFles"><img src="../images/skills/vhdl2.png" alt="VHDL" class="skillsImage" id="vhdl"/></li>
            <li class="skillsItemFles"><img src="../images/skills/picc2.PNG" alt="Pic C Compiler" class="skillsImage" id="picc"/></li>
            <li class="skillsItemFles"><img src="../images/skills/proteus2.png" alt="Proteus 8" class="skillsImage" id="proteus"/></li>
            <li class="skillsItemFles"><img src="../images/skills/arduino.png" alt="Arduino" class="skillsImage" id="arduino"/></li>
            <li class="skillsItemFles"><img src="../images/skills/keil2.png" alt="Keil U-vision" class="skillsImage" id="keil"/></li>
            <li class="skillsItemFles"><img src="../images/skills/psoc2.png" alt="PSoC" class="skillsImage" id="psoc"/></li>
            <li class="skillsItemFles"><img src="../images/skills/labview2.png" alt="LabView" class="skillsImage" id="labview"/></li>
            <li class="skillsItemFles"><img src="../images/skills/siemens_tia.png" alt="Siemens Tia Portal Software" class="skillsImage" id="tia"/></li>
            <li class="skillsItemFles"><img src="../images/skills/gx2.png" alt="Mitsubishi electric gx works 3 software" class="skillsImage" id="gx"/></li>
            <li class="skillsItemFles"><img src="../images/skills/raspbian2.png" alt="Raspbian" class="skillsImage" id="rasp"/></li>
            <li class="skillsItemFles"><img src="../images/skills/eagle2.png" alt="Eagle Autodesk PCB design" class="skillsImage" id="eagle"/></li>
            <li class="skillsItemFles"><img src="../images/skills/orcad.png" alt="OrCAD PCB design" class="skillsImage" id="orcad"/></li>
            <li class="skillsItemFles"><img src="../images/skills/matlab2.png" alt="Matlab" class="skillsImage" id="matlab"/></li>
        </ul>
      </section>
      <section id="hobbiesTitle">
        <div id="hobbiesTitleFlexContainer">
          <h1 id="hobbiesTitleItemFlex">Hobbies</h1>
        </div>
      </section>
      <section id="hobbies">
        <ul id="hobbiesFlexContainer">
          <li class="hobbiesItemFlex">Cooking</li>
          <li class="hobbiesItemFlex">Watch anime</li>
          <li class="hobbiesItemFlex">Read</li>
          <li class="hobbiesItemFlex">Challenge myself</li>
        </ul>
      </section>
      <footer id="footerGridItem">
        <ul id="footerFlexContainer">
          <li class="footerItemFlex"><a href="https://github.com/BlancasJ" target="_blank"><img src="../images/footer/github.png" alt="GitHub Account" class="footerImage"/></a></li>
          <li class="footerItemFlex"><a href="mailto:Jorge.Blancas@theksquaregroup.com" target="_blank"><img src="../images/footer/mail.png" alt="mail" class="footerImage"/></a></li>
          <li class="footerItemFlex"><a href="https://www.linkedin.com/in/jorge-blancas-cruz-4b6b311aa/" target="_blank"><img src="../images/footer/linkedin.png" alt="Linkedin Account" class="footerImage"/></a></li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
