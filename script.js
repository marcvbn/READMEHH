function showYes() {
    alert("YEHEYYY! I LOVE YOUU MWAPIIESS!!💖");
  }
  
  function moveNo() {
    let noBtn = document.getElementById("noBtn");
    noBtn.classList.add("move");
  
    setTimeout(function() {
      noBtn.classList.remove("move");
    }, 1000);
  }
