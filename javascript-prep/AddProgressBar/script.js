const container = document.getElementById("container");
const btn = document.getElementById("btn");

const addProgressbar = () => {
  let width = 0;
  const div = document.createElement("div");
  const progressBar1 = document.createElement("div");
  div.classList.add("progressBar-container");
  progressBar1.classList.add("progressBar");
  progressBar1.style.width = `${width}%`;
  div.appendChild(progressBar1);
  container.appendChild(div);

  let clearTime = setInterval(() => {
    width += 10;

    progressBar1.style.width = `${width}%`;
  }, 1000);

  clearInterval(clearTime);
};

btn.addEventListener("click", addProgressbar);
