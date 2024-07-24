
import { Router } from "@fastly/expressly";

const router = new Router();

router.get("/", async (req, res) => {

  // http://s3.faast.life:32771/public-share/Fastly_Tour_du_proprieaitaire.mp4

  res.html(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player</title>
</head>
<body>
    <h1>Video Player</h1>
    <video width="640" height="360" controls>
        <source src="http://localhost:7676/stream/Fastly_Tour_du_proprieaitaire" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>
`);

});



router.get("/goal", async (req, res) => {

  // http://s3.faast.life:32771/public-share/Fastly_Tour_du_proprieaitaire.mp4

  res.html(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player</title>
</head>
<body>
    <h1>Video Player</h1>
    <video width="640" height="360" controls>
        <source src="http://s3.faast.life:32771/public-share/Fastly_Tour_du_proprieaitaire.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>
`);

});



router.get("/stream/:videoName", async (req, res) => {

  let videoName = req.params.videoName;

  if (!videoName){
    res.status(500).json({ error: true, msg: "No video name" });
    return;
  } 

  res.send( await fetch(
    `http://s3.faast.life:32771/public-share/${videoName}.mp4`,
    {
      backend: "s3_faast_life"
    }
  ));

});



router.listen();