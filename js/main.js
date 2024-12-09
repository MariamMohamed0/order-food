function openVideo() {
//   window.open('../img/bestBurger.mp4', 'videoWindow', 'width=400,height=300,scrollbars=no');
window.open('../img/bestBurger.mp4', 'videoWindow', 'width=400,height=300,scrollbars=no').document.write(`
  <html>
  <head>
      <title>Video</title>
      <style>
          body {
              margin: 0;
              overflow: hidden;
              background: black;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              padding:0;
          }
      </style>
  </head>
  <body>
      <video src="../img/bestBurger.mp4" width="100%" height="100%" controls autoplay></video>
  </body>
  </html>
`);

}
window.openVideo = openVideo;

