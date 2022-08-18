window.onload = function () {
  var img = document.getElementById("popcat1");
  var count = document.getElementById("score");
  var score = [];
  var audio = new Audio("./UI/pop.mp3");
  var audio2 = new Audio("./UI/nani.mp3");
  // mouse click
  img.addEventListener("mousedown", function () {
    img.src = "./UI/PopcatWow.png";
    audio.play();
    increaseScore();
  });
  img.addEventListener("mouseup", function () {
    img.src = "./UI/Popcat.png";
    if (score.length >= 10 && score.length < 15) {
      img.src = "./UI/PopcatFire.png";
      audio2.play();
    }
  });
  function increaseScore() {
    score.push(1);
    count.innerHTML = score.length;
    if (score.length >= 10 && score.length < 15) {
      img.src = "./UI/PopcatFire.png";
      audio2.play();
    }
  }
  console.log(score);

  if (window.width < 720) {
    // finger touch
    img.addEventListener("touchstart", function () {
      img.src = "./UI/PopcatWow.png";
      audio.play();
      increaseScore();
    });
    img.addEventListener("touchmove", function () {
      img.src = "./UI/Popcat.png";
      if (score.length >= 10 && score.length < 15) {
        img.src = "./UI/PopcatFire.png";
        audio2.play();
      }
    });
  }
};
