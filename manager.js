const video = document.querySelector('#my-video');

navigator.mediaDevices.getUserMedia({
  video: true
}).then( (stream) => {
  video.srcObject = stream;
}).catch( (err) => {
  console.log(err);
});

const close = document.querySelector('#close-button');

close.addEventListener('click', (e) => {
  window.close();
});
