const counters = document.querySelectorAll(".counter");
const speed = 200;

const incrementCounter = () => {
  for (const counter of counters) {
    const updateCounter = () => {
      let maxAmount = +counter.getAttribute("data-counter");
      let actualValue = +counter.innerText;
      let increment = maxAmount / speed;

      if (actualValue < maxAmount) {
        counter.innerText = `${Math.ceil(actualValue + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = maxAmount;
      }
    };
    updateCounter();
  }
};

incrementCounter();
