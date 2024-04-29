class Random_Password_Generator_App {
    constructor() {
      console.log(`welcome to the password generator app`);
      this.pass = "";
    }
    generatepassword(passlen) {
      let capitalchars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
      let smallchars = `abcdefghijklmnopqrstuvwxyz`;
      let numbers = `0123456789`;
      let specialchars = `~!@#$%^&*()=+-_\|[{;:'"/?.>,<}]`;
      // ====================================== generated random password must match all the case to become the strong password ======================================
      if (passlen < 5) {
        console.error(`password length too short`);
      } else {
        let x = 0;
        while (x < passlen) {
          this.pass +=
            capitalchars[Math.floor(Math.random() * capitalchars.length)];
          this.pass += smallchars[Math.floor(Math.random() * smallchars.length)];
          this.pass += numbers[Math.floor(Math.random() * numbers.length)];
          this.pass +=
            specialchars[Math.floor(Math.random() * specialchars.length)];
          x += 4;
        }
        this.pass = this.pass.substring(0, passlen);
        return this.pass;
      }
    }
  }
  const copypasswordicon = document.getElementById("copypasswordicon");
  let randompassword_inputfield = document.getElementById("printpassword_inputfield");
  let generatepasswordbtn = document.querySelector(".generatepassword_btn");
  generatepasswordbtn.addEventListener("click", () => {
    let passwordgenerator = new Random_Password_Generator_App();
    let showpass = passwordgenerator.generatepassword(13);
    randompassword_inputfield.value = showpass;
    copypasswordicon.addEventListener("click",()=>{
      // ====================================== using the navigator api's clipboard method when the user clicks on the svg icon then copy the input element's value which is random password ======================================
        navigator.clipboard.writeText(randompassword_inputfield.value).then(()=>{
            console.log(randompassword_inputfield.value);
        }).catch((error)=>{
            console.log(error);
        })
    })
  });