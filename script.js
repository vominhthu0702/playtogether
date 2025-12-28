const grid = document.getElementById("grid");
const tools = document.querySelectorAll(".tool");
const resetBtn = document.getElementById("reset");

let selectedIcon = "🔥";

// tạo grid 4x4
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.addEventListener("click", () => {
    cell.textContent = selectedIcon;
  });
  grid.appendChild(cell);
}

// chọn tool
tools.forEach(tool => {
  tool.addEventListener("click", () => {
    tools.forEach(t => t.classList.remove("active"));
    tool.classList.add("active");
    selectedIcon = tool.dataset.icon;
  });
});

// reset
resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
  });
});