const fact = document.querySelector(".fact");
const res = fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
  .then((res) => res.json())
  .then((data) => (fact.innerHTML = "💡" + data.text));
const today_fact = document.querySelector(".today");
function gen() {
  const fact_txt = document.querySelector(".today");
  fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then((res) => res.json())
    .then((data) => (today_fact.innerHTML = data.text));
  fact_txt.style.visibility = "visible";
}
