  const projects = document.querySelector('.MyProjects');
  const menu_projects = document.querySelector('.menu_MyProjects');
projects.addEventListener("click",  ()=> {
      window.scrollTo({
        top: 1210,
        behavior: "smooth"
      });
    })
menu_projects.addEventListener("click",  ()=> {
      window.scrollTo({
        top: 1320,
        behavior: "smooth"
      });
    })
    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".card");

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Uncomment this if you want it to animate ONLY once:
            // observer.unobserve(entry.target);
          } else {
            // If you want elements to hide again when scrolling out, use this:
            entry.target.classList.remove("show");
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => observer.observe(section));
    });
 const project = document.querySelectorAll(".Projects");
 const lang1 = document.querySelectorAll(".lang1");
 const lang2 = document.querySelectorAll(".lang2");
 const lang3 = document.querySelectorAll(".lang3");
 const heading = document.querySelectorAll(".tech_heading");
 const hero = document.querySelectorAll(".container");

const show = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // optional
    }
  });
};

const options = { threshold: 0.2 };
const observer = new IntersectionObserver(show, options);

// observe each element
project.forEach(project => observer.observe(project));
lang1.forEach(project => observer.observe(project));
lang2.forEach(project => observer.observe(project));
lang3.forEach(project => observer.observe(project));
heading.forEach(project => observer.observe(project));
hero.forEach(project => observer.observe(project));
function cls(){
  const close=document.querySelector(".menu_box");
  close.style.display="none";
}
function opn(){
    const on=document.querySelector(".menu_box");
  on.style.display="flex";
}

