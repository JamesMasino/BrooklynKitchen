import { Logo } from "./Logo";
import "./overlay.css";

export function Overlay({ isCredVisible, isTitlesVisible }) {
  return (
    <div className="screen">
      <div className="columnContainer">
        <div className="largeColumn">
          {isTitlesVisible && (
            <div className="block">
              <span className="title">
                It's about the <span className="styleText">little</span> moments
              </span>
            </div>
          )}
          {isTitlesVisible && (
            <div className="block">
              <div className="subTitle">
                <Logo />
              </div>
            </div>
          )}
        </div>
        <div className="smallColumn">
          {isCredVisible && (
            <div className="model">
              <h1>What is this?</h1>
              <p>
                Welcome to Brooklyn Kitchen! A React Three Fiber scene with a
                lot of meshes and texture maps meant to test scale and
                capability.
              </p>
              <h1>Credits</h1>
              <p>
                Brooklyn Kitchen is powered by{" "}
                <a href="https://github.com/LeviBroadnax/nitro-cold-brew">
                  NitroColdBrew
                </a>
                , put together by{" "}
                <a href="https://github.com/LeviBroadnax">Levi Broadnax</a>,
                which in itself is an open-source webGL experiment.
              </p>
              <p>
                All 3D models, textures, lighting, and front-end UI elements are
                created by <a href="https://jamesmasino.com/">James Masino</a>.
                Creative direction by{" "}
                <a href="https://www.maeganmann.com/">Mae Mann</a>.
              </p>
              <h1>Contact</h1>
              <p>
                Considering this medium for your brand or ad? You're in the
                right place. Check us out at:
              </p>
              <a href="https://mauve.film/">MAUVE.FILM</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
