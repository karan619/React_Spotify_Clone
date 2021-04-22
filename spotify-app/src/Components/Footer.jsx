import React from "react";
import "./Footer.css";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <img
            className="footer_albumLogo"
            src="https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png"
            alt="Eminem"
          />
          <div className="footer_songInfo">
            <h4>Godzilla (feat.Juice WRLD)</h4>
            <p>Eminem,Juice WRLD</p>
          </div>
        </div>
        <div className="footer_center">
          <ShuffleIcon className="footer_green" />
          <SkipPreviousIcon className="footer_icon" />
          <PlayCircleFilledOutlinedIcon
            fontSize="larger"
            className="footer_green"
          />
          <SkipNextIcon className="footer_icon" />
          <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
