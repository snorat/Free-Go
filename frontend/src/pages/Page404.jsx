import { Link } from "react-router-dom";
import videoPage404 from "../assets/Video/videoPage404.mp4";
import "../styles/page404.css";

export default function Page404() {
  return (
    <div className="page404">
      <Link to="/Page404" className="video-main-title">
        <h1>Oops! Not Found</h1>
        <h2>Erreur Page 404</h2>
      </Link>
      <video src={videoPage404} autoPlay="true" loop="true">
        <source src="assets /video/videoPage404" type="video/mp4" />
        <track
          src="myvideo_en.vtt"
          kind="captions"
          srcLang="en"
          label="English"
        />
      </video>
    </div>
  );
}
