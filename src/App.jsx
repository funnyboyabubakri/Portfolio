import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Education from "./components/Education.jsx"
import MySkills from './components/MySkills.jsx';
import SocialAccounts from './components/SocialAccounts.jsx';
import Footer from './components/Footer.jsx';
import RecentProjects from './components/RecentProjects.jsx';
import Mailer from './components/Mailer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Education />
      <RecentProjects/>
      <MySkills />
      <SocialAccounts />
      <Mailer/>
      <Footer />
    </>
  );
};

export default App;