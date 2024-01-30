let initialFrameTimeStamp;
let done = false;

function step(currFrameTimeStamp) {
  if (initialFrameTimeStamp === undefined) {
    initialFrameTimeStamp = currFrameTimeStamp; // setting the initialFrameTimeStamp
  }
  const elapsedTime = currFrameTimeStamp - initialFrameTimeStamp;
  console.log({ elapsedTime });
  // In 200ms, we want to translate 300px
  // In elapsedTime, how many pixels ?
  const count = (elapsedTime / 200) * 300;
  console.log({ count });
  // element.style.transform = `translateX(${count}px)`;

  if (elapsedTime < 1000) {
    // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

// window.requestAnimationFrame(step);
fetch("http://localhost:5000/api/v1/users/showMe", {
  method: "GET",
  credentials: "include",
})
  .then((res) => {
    if (res.ok) {
      window.location.href = "http://localhost:5500/protected.html";
      return;
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
