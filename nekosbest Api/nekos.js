var container = document.getElementById("imageContainer");
var back = document.getElementById("back");
fetch("https://random.dog/woof.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var url = data.url;
    console.log(url);
    var lastthree = url.slice(-4);
    console.log(lastthree);
    if (lastthree == ".mp4" || lastthree == "webm") {
      var video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.src = url;
      video.id = "nesto";
      container.appendChild(video);
    } else {
      var image = document.createElement("img");
      image.id = "nesto";
      image.src = url;
      container.appendChild(image);
    }
  });
back.addEventListener("click", goSomewhere);
function goSomewhere() {
  window.location.href = "../index.html";
}
