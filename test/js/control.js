// ボタンを押すと、ブロック内のプログラムが実行される
var video = document.getElementById('video');
var layout = document.getElementById('layout');
var twitchid = document.getElementById('frame_url');

$('#control_positionX').on("input", function() {
    video.style.left = control_positionX.value + "px";
});

$('#control_positionY').on("input", function() {
    video.style.top = control_positionY.value + "px";
});

$('#control_width').on("input", function() {
    video.style.width = control_width.value + "px";
});

$('#control_height').on("input", function() {
    video.style.height = control_height.value + "px";
});

$('#frame_width').on("input", function() {
    layout.style.width = frame_width.value + "px";
});

$('#frame_height').on("input", function() {
    layout.style.height = frame_height.value + "px";
});

$("#frame_button").on("click", function()  {
  video.src = "https://player.twitch.tv/?channel=" + twitchid.value + "&parent=microlemongrass.github.io";
});
