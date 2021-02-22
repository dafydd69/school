//Zoom URLs
let urlHomeroom = "https://us04web.zoom.us/j/2095620461?pwd=d25ZWUlTbHIwSE5JZm1XV3VoZ0JGdz09"
const urlScience = "https://zoom.us/j/6633356513?pwd=SDJrdFdBRWZzcWExVzgyOWs2dzFKQT09"
const urlSocial = "https://us04web.zoom.us/j/78355055579?pwd=N0kyMHJhSUg2Y2czbG0rSkdzYlVsUT09"
const urlReligion = "https://us02web.zoom.us/j/85383015191?pwd=Sk93WHZIZnFQell1UExiOEZVNWlJUT09"
const urlELA = "https://us04web.zoom.us/j/71912985544?pwd=cXRNR0FZY3VRUVNnZk81eW01Q1B5dz09"
let urlMath = "https://us04web.zoom.us/j/75638256861?pwd=MFZ6RE1XZzZ4Zyt0UjAybmtFcG1OQT09"

//Google Classroom URLs
const scienceURL = "https://classroom.google.com/u/1/c/MTIzMTc2NzM3MDY4"
const socialURL = "https://classroom.google.com/u/1/c/MTE3Nzg2OTg3ODMy"
const religionURL = "https://classroom.google.com/u/1/c/MTIyNDY5MzkzMjQ1"
const elaURL = "https://classroom.google.com/u/1/c/NDczMjA5MjY3MTJa"
const mathURL = "https://classroom.google.com/u/1/c/MTA4NzQ1NTgxOTQy"

//Time
class DigitalClock {
    constructor(element) {
      this.element = element;
    }
  
    start() {
      this.update();
  
      setInterval(() => {
        this.update();
      }, 500);
    }
  
    update() {
      const parts = this.getTimeParts();
      const minuteFormatted = parts.minute.toString().padStart(2, "0");
      let timeFormatted = `${parts.hour}:${minuteFormatted}`;
      const amPm = parts.isAm ? "AM" : "PM";
  
      this.element.querySelector(".clock-time").textContent = timeFormatted;
      this.element.querySelector(".clock-ampm").textContent = amPm;
      
    }
  
    getTimeParts() {
      const now = new Date();
  
      return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
      };
    }
  }
  
  const clockElement = document.querySelector(".clock");
  const clockObject = new DigitalClock(clockElement);
  
  clockObject.start();

  //Day Specific Zooms
let date2 = new Date()
let day2 = date2.getDay()
if(day2 === 3) {
  urlHomeroom = 'https://zoom.us/j/98312299397?pwd=RzVRRjVVQ2F1Q3VlWG5yOHR1QWNHUT09'
} else if (day2 === 5) {
  urlMath = 'https://us04web.zoom.us/j/2095620461?pwd=d25ZWUlTbHIwSE5JZm1XV3VoZ0JGdz09'
}

//Buttons
const startHomeroom = document.getElementById("startHomeroom")
const startScience = document.getElementById("startScience")
const startSocial = document.getElementById("startSocial")
const startReligion = document.getElementById("startReligion")
const startELA = document.getElementById("startELA")
const startMath = document.getElementById("startMath")

const beginScience = document.getElementById("openScience")
const beginSocial = document.getElementById("openSocial")
const beginReli = document.getElementById("openReligion")
const beginELA = document.getElementById("openELA")
const beginMath = document.getElementById("openMath")

//Open Zoom Functions
let windows

function openHome() {
  let windows = window.open(urlHomeroom)
  setTimeout(function(){
    windows.close()
  }, 10000)
}

function openSci() {
  let windows = window.open(urlScience)
  setTimeout(function(){
    windows.close()
  }, 10000)
}

function openSocial() {
  let windows = window.open(urlSocial)
  setTimeout(function(){
    windows.close()
  }, 10000)
}

function openReli() {
  let windows = window.open(urlReligion)
  setTimeout(function(){
    windows.close()
  }, 10000)
}

function openELA() {
  let windows = window.open(urlELA)
  setTimeout(function(){
    windows.close()
  }, 10000)
}

function openMath() {
  let windows = window.open(urlMath)
  setTimeout(function(){
    windows.close()
  }, 10000)
}

function science() {
window.open(scienceURL)
}

function social() {
  window.open(socialURL)
}

function religion() {
    window.open(religionURL)
}

function ela() {
      window.open(elaURL)
    }

function math() {
        window.open(mathURL)
}