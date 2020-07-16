const container = document.getElementById("container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16, 16);

function addHoverToGrid () {
  let gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item) => {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#333';
        this.style.border = '1px solid #333';
    })
  });
}

addHoverToGrid();

function removeGrid() {
  let gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item) => {
    item.remove();
  });
}

function resetBtn() {
  let block = prompt('How many blocks would you like?');
  removeGrid();
  makeGrid(block, block);
  addHoverToGrid();
}
