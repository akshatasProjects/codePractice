let result = document.getElementById("result");

function throttle(fn, delay) {
  let lastCalled = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCalled >= delay) {
      fn.apply(this, args);
      lastCalled = now;
    }
  };
}

function log() {
  console.log(`Function Called at ${new Date().toLocaleDateString()}`);
}

const throttled = throttle(log, 2000);
let interval = setInterval(throttled, 500);
setTimeout(() => clearInterval(interval), 6000);

result.innerText = Date.now();
