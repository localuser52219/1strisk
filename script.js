// QR code資料
const qrData = [
  [1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1],
  [0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0],
  [1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0],
  [1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0],
  [1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1],
  [1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1],
  [0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0],
  [0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1],
  [0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0],
  [1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1],
  [1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0],
  [1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0],
  [1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1],
  [1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0],
  [1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1],
  [1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0],
  [1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0],
  [1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0]
];
const N = 29;
const correctGateAnswers = [2, 3]; // Qx: C, Qy: H
const correctAnswers = [2, 0, 1, 3]; // Q1: K, Q2: M, Q3: S, Q4: Z
let selectedChoices = [null, null, null, null];
let gateChoices = [null, null];
let userGrid = null;

const choiceLabels = {
  X: ["A", "B", "C", "D"],  // Qx
  Y: ["E", "F", "G", "H"],  // Qy
  "1": ["A. 2017", "B. 2018", "C. 2019", "D. 2020"],
  "2": ["A. ttwedding.jp", "B. wedding2025.com", "tracydennis.jp", "loveintokyo.jp"],
  "3": ["A. 草泥馬", "B. 蝴蝶", "C. 老虎", "D. 狐狸"],
  "4": ["A. 新娘的美麗", "B. 新郎的元氣", "C. 賓客的祝福", "D. 求婚的戒指"]
};

function getHeartGrid() {
  const heart = Array.from({ length: N }, () => Array(N).fill(0));
  const cx = (N - 1) / 2, cy = (N - 1) / 2, r = N * 0.35;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const x = (j - cx) / r, y = -(i - cy) / r;
      const s = Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y;
      if (s <= 0) heart[i][j] = 1;
    }
  }
  return heart;
}

function isFinder(i, j) {
  return (i <= 6 && j <= 6) || (i <= 6 && j >= 22) || (i >= 22 && j <= 6);
}

function randomGrid() {
  return Array.from({ length: N }, (_, i) =>
    Array.from({ length: N }, (_, j) =>
      isFinder(i, j) ? qrData[i][j] : Math.random() > 0.5 ? 1 : 0
    )
  );
}

function drawGrid(grid) {
  const canvas = document.getElementById("dotgrid");
  const ctx = canvas.getContext("2d");
  const cell = canvas.width / N;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const color = allChoicesUnselected() ? "#c21c68" : "#222";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ctx.fillStyle = grid[i][j] ? color : "#fff";
      ctx.fillRect(j * cell, i * cell, cell, cell);
      ctx.strokeStyle = "#ccc";
      ctx.strokeRect(j * cell, i * cell, cell, cell);
    }
  }
}

function drawHeartGrid() {
  const canvas = document.getElementById("dotgrid");
  const ctx = canvas.getContext("2d");
  const grid = getHeartGrid();
  const cell = canvas.width / N;
  const cx = Math.floor(N / 2);
  const cy = Math.floor(N / 2);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(j * cell, i * cell, cell, cell);
      ctx.strokeStyle = "#ccc";
      ctx.strokeRect(j * cell, i * cell, cell, cell);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) {
        const dist = Math.hypot(i - cy, j - cx);
        const delay = dist * 20;
        setTimeout(() => {
          ctx.fillStyle = "#c21c68";
          ctx.fillRect(j * cell, i * cell, cell, cell);
          ctx.strokeStyle = "#ccc";
          ctx.strokeRect(j * cell, i * cell, cell, cell);
        }, delay);
      }
    }
  }
}

function updateQuarter(q, type) {
  let sr = (q < 2) ? 0 : 14;
  let sc = (q % 2 === 0) ? 0 : 14;
  let nr = Math.min(15, N - sr);
  let nc = Math.min(15, N - sc);
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      const gi = sr + i, gj = sc + j;
      if (!isFinder(gi, gj)) {
        userGrid[gi][gj] = (type === "qr") ? qrData[gi][gj] : Math.random() > 0.5 ? 1 : 0;
      }
    }
  }
}

function scanEffect(callback) {
  const canvas = document.getElementById("dotgrid");
  const ctx = canvas.getContext("2d");
  const cell = canvas.width / N;
  const backup = userGrid.map(row => row.slice());
  let step = 0;
  function drawStep() {
    drawGrid(backup);
    if (step < N) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#ffe560";
      for (let j = 0; j < N; j++) ctx.fillRect(j * cell, step * cell, cell, cell);
      ctx.globalAlpha = 1;
      step++;
      setTimeout(drawStep, 12);
    } else {
      drawGrid(backup);
      if (callback) callback();
    }
  }
  drawStep();
}

function flashAllQuarters(times, callback) {
  let count = 0;
  const original = userGrid.map(r => r.slice());
  function flashOnce() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!isFinder(i, j)) userGrid[i][j] = Math.random() > 0.5 ? 1 : 0;
      }
    }
    drawGrid(userGrid);
    count++;
    if (count < times) setTimeout(flashOnce, 100);
    else {
      userGrid = original;
      drawGrid(userGrid);
      callback && callback();
    }
  }
  flashOnce();
}

function typeStory(text, callback) {
  const el = document.getElementById("story-text");
  el.style.display = "block";
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    } else {
      callback && callback();
    }
  }
  type();
}

function makeGateChoices(qnum) {
  const key = qnum === 0 ? "X" : "Y";
  const labels = choiceLabels[key];
  const div = document.getElementById("choices" + key);
  div.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const btn = document.createElement("button");
    btn.textContent = labels[i];
    btn.className = gateChoices[qnum] === i ? "selected" : "";
    btn.onclick = () => {
      gateChoices[qnum] = i;
      makeGateChoices(qnum);
      checkGatePassed();
    };
    div.appendChild(btn);
  }
}

function makeChoices(qnum) {
  const labels = choiceLabels[qnum.toString()];
  const div = document.getElementById("choices" + qnum);
  div.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const btn = document.createElement("button");
    btn.textContent = labels[i];
    btn.className = selectedChoices[qnum - 1] === i ? "selected" : "";
    btn.onclick = () => {
      selectedChoices[qnum - 1] = i;
      const type = (i === correctAnswers[qnum - 1]) ? "qr" : "rand";
      updateQuarter(qnum - 1, type);
      makeChoices(qnum);
      const flashes = 2 + Math.floor(Math.random() * 2);
      document.getElementById("story-text").style.display = "none";
      flashAllQuarters(flashes, () => scanEffect(() => drawGrid(userGrid)));
    };
    div.appendChild(btn);
  }
}

function checkGatePassed() {
  const passed = gateChoices[0] === correctGateAnswers[0] && gateChoices[1] === correctGateAnswers[1];
  const mainBlock = document.getElementById("main-questions");
  const canvasContainer = document.querySelector(".canvas-container");
  mainBlock.style.display = passed ? "block" : "none";
  canvasContainer.style.display = passed ? "block" : "none";
  if (passed) for (let k = 1; k <= 4; k++) makeChoices(k);
}

function allChoicesUnselected() {
  return selectedChoices.every(c => c === null);
}

function refresh() {
  makeGateChoices(0);
  makeGateChoices(1);
  checkGatePassed();
  if (allChoicesUnselected()) {
    drawHeartGrid();
    typeStory("到底誰是神秘人呢？在婚禮中找出線索，一同守護這段緣分。");
  } else {
    drawGrid(userGrid);
    document.getElementById("story-text").style.display = "none";
  }
}

document.getElementById("reset-btn").onclick = () => {
  userGrid = randomGrid();
  selectedChoices = [null, null, null, null];
  gateChoices = [null, null];
  refresh();
};

userGrid = randomGrid();
refresh();
