const date = document.querySelector(".date");
const day = document.querySelector(".day");
const dates = new Date();
const get_days = dates.getDay();
switch (get_days) {
  case 1:
    day.innerHTML = "Monday";
    break;
  case 2:
    day.innerHTML = "Tuesday";
    break;
  case 3:
    day.innerHTML = "Wednesday";
    break;
  case 4:
    day.innerHTML = "Thursday";
    break;
  case 5:
    day.innerHTML = "Friday";
    break;
  case 6:
    day.innerHTML = "Saturday";
    break;
  case 7:
    day.innerHTML = "Sunday";
    break;
}
const get_date = dates.getDate();
date.innerHTML = get_date.toString().padStart(2, 0);
const months = document.querySelector(".month");
const get_month = dates.getMonth();
// months.innerHTML = getMonth;
switch (get_month) {
  case 0:
    months.innerHTML = "Jan";
    break;
  case 1:
    months.innerHTML = "Fab";
    break;
  case 2:
    months.innerHTML = "March";
    break;
  case 3:
    months.innerHTML = "April";
    break;
  case 4:
    months.innerHTML = "May";
    break;
  case 5:
    months.innerHTML = "June";
    break;
  case 6:
    months.innerHTML = "July";
    break;
  case 7:
    months.innerHTML = "Aug";
    break;
  case 8:
    months.innerHTML = "Setp";
    break;
  case 9:
    months.innerHTML = "Oct";
    break;
  case 10:
    months.innerHTML = "Nov";
    break;
  case 11:
    months.innerHTML = "Dec";
    break;
}
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function createTaskAndStore() {
  Creat(); // this creates task in UI

  // Get the latest input values
  const reads = document.querySelectorAll(".read");
  const dates = document.querySelectorAll(".dates");

  const lastText = reads[reads.length - 1].value;
  const lastDate = dates[dates.length - 1].value;

  taskList.push({
    text: lastText,
    due: lastDate,
    completed: false
  });
  saveTasks();
}

function Creat(){
    const taskbox=document.querySelector(".taskbox");
    const task=document.createElement("div");
    const outer=document.createElement("div");
    const main=document.createElement("div");
    const series=document.createElement("p");
    const read=document.createElement("input");
    const due_date=document.createElement("p");
    const dates=document.createElement("input");
    const complete=document.createElement("button");
    const delet=document.createElement("button");
    const icon=document.createElement("i");
    const funcs=document.createElement("div");

 task.classList.add("task");
 outer.classList.add("outer");
 main.classList.add("main");
 series.classList.add("series");
 read.classList.add("read");
 due_date.classList.add("due_date");
 dates.classList.add("dates");
 complete.classList.add("complete");
 delet.classList.add("delet");
 icon.classList.add("fa-solid" ,"fa-trash");
 funcs.classList.add("funcs");

series.textContent="➡️";
 read.type="text";
 read.placeholder="What's your plan?";
 read.id="My_input";
 dates.type="date";
due_date.textContent="Due";
complete.textContent="Completed ✅";

 
 taskbox.appendChild(task);
 task.appendChild(outer);
 outer.appendChild(main);
 main.appendChild(series);
 main.appendChild(read);
 main.appendChild(delet);
 outer.appendChild(due_date);
 due_date.appendChild(dates);
 outer.appendChild(complete);
 outer.appendChild(funcs);
 delet.appendChild(icon);
 funcs.appendChild(due_date);
 funcs.appendChild(complete);


 delet.addEventListener("click",()=> task.style.display="none");
 complete.addEventListener("click",()=>{ const para=document.createElement("h1"); 
    let text=read.value;
    para.classList.add("done");
    para.append(text)
    main.appendChild(para);
    read.style.display="none";
    due_date.style.display="none";
    series.textContent="✅";
    complete.style.display="none";
  
});

}
window.onload = () => {
  taskList.forEach(task => {
    Creat(); // create UI
    const reads = document.querySelectorAll(".read");
    const dates = document.querySelectorAll(".dates");

    const lastRead = reads[reads.length - 1];
    const lastDate = dates[dates.length - 1];

    lastRead.value = task.text;
    lastDate.value = task.due;
  });
};
