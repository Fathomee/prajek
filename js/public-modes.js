import { publicLightIcons, publicDarkIcons } from "../data/dark-light-mode.js";


const checkbox = document.querySelector('input[type="checkbox"]');
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');
const classroomIcon = document.querySelector('.classroom');
const homeIcon = document.querySelector('.home');
const vacantIcon = document.querySelector('.vacants');
//const twitterIcon = document.querySelector('.icon4');
//const githubIcon = document.querySelector('.icon5');
checkbox.addEventListener('change', () => 
{
 if (checkbox.checked) 
 {
  darkIcon.style.display = 'none';
  lightIcon.style.display = 'inline';
  const root = document.documentElement;
  root.style.setProperty('--day-background-color', '#181818');
  root.style.setProperty('--day-text-color', '#fbfbfb');
  root.style.setProperty('--night-background-color', '#fbfbfb');
  root.style.setProperty('--night-text-color', '#181818');
  publicLightIcons(classroomIcon, homeIcon, vacantIcon);

 }
 else
 {
  lightIcon.style.display = 'none';
  darkIcon.style.display = 'inline';
  const root = document.documentElement;
root.style.setProperty('--day-background-color', '#fbfbfb');
root.style.setProperty('--day-text-color', '#181818');
root.style.setProperty('--night-background-color', '#181818');
root.style.setProperty('--night-text-color', '#fbfbfb');
publicDarkIcons(classroomIcon, homeIcon,vacantIcon);

 }
});

