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

    // CLICK = ghi thẻ luôn
    cell.addEventListener("click", () => {
      if (!cell.classList.contains("disabled")) {
        cell.textContent = selectedIcon;
      }
    });

    // DOUBLE CLICK = tắt / mở ô (chỉnh layout NGẦM)
    cell.addEventListener("dblclick", () => {
      cell.classList.toggle("disabled");
      cell.textContent = "";
    });

    grid.appendChild(cell);
  }
}

// ====== EVENTS ======

// tạo lưới
createBtn.addEventListener("click", createGrid);

// reset toàn bộ (xoá grid + layout + thẻ)
resetAllBtn.addEventListener("click", () => {
  grid.innerHTML = "";
});

// clear thẻ (CHỈ XOÁ ICON)
clearCardsBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
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