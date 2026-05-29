const typed = new Typed("#typing",{
    strings: [
        "Frontend Developer",
        "Web Designer",
        "Cyber Security Enthusiast",
        "JavaScript Learner"
    ],
    typeSpeed:80,
    backSpeed:50,
    loop:true
});
AOS.init();

/*Theme Toogle*/
const themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML="🔆";
    }
    else{
        themeToggle.innerHTML="🌙";
    }
})
/*Particle js*/
particlesJS("particles-js",{
    particles:{
        number:{
            value:80
        },
        color:{
            value:"#0dcaf0"
        },
        shape:{
            type:"circle"
        },
        opacity:{
            value:0.5
        },
        size:{
            value:3
        },
        move:{
            enable:true,
            speed:2
        }
    }
});