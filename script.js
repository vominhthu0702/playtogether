// ====== ELEMENTS ======
const grid = document.getElementById("grid");
const createBtn = document.getElementById("createGrid");
const resetAllBtn = document.getElementById("resetAll");
const clearCardsBtn = document.getElementById("clearCards");

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const iconTools = document.querySelectorAll(".tool");

// ====== STATE ======
let selectedIcon = "";

// ====== FUNCTIONS ======
function createGrid() {
  const rows = parseInt(rowsInput.value) || 1;
  const cols = parseInt(colsInput.value) || 1;

  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${cols}, 60px)`;

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    // CLICK = ghi thẻ
    cell.addEventListener("click", () => {
      if (
        cell.classList.contains("disabled") ||
        cell.classList.contains("matched") ||
        !selectedIcon
      ) return;

      cell.textContent = selectedIcon;
      cell.dataset.icon = selectedIcon;

      checkMatched();
    });

 

    grid.appendChild(cell);
  }
}

// ====== MATCH LOGIC ======
function checkMatched() {
  const cells = document.querySelectorAll(".cell");
  const iconMap = {};

  cells.forEach(cell => {
    const icon = cell.dataset.icon;
    if (!icon) return;

    if (!iconMap[icon]) iconMap[icon] = [];
    iconMap[icon].push(cell);
  });

  Object.keys(iconMap).forEach(icon => {
    if (iconMap[icon].length === 2) {
      iconMap[icon].forEach(cell => {
        cell.textContent = "❌";
        cell.dataset.icon = "";
        cell.classList.add("matched");
      });
    }
  });
}

// ====== EVENTS ======

// tạo lưới
createBtn.addEventListener("click", createGrid);

// reset toàn bộ (xoá grid)
resetAllBtn.addEventListener("click", () => {
  grid.innerHTML = "";
});

// clear thẻ (GIỮ layout)
clearCardsBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(cell => {
    if (!cell.classList.contains("disabled")) {
      cell.textContent = "";
      cell.dataset.icon = "";
      cell.classList.remove("matched");
    }
  });
});

// chọn icon
iconTools.forEach(btn => {
  btn.addEventListener("click", () => {
    iconTools.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedIcon = btn.dataset.icon || "";
  });
});

// ====== INIT ======
createGrid();