/* eslint-disable no-unused-vars */

import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDatatLayerValue } from "../DataLyer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDatatLayerValue();
  //console.log("this is playlist" + { playlists });
  return (
    <>
      <div className="sidebar">
        <img
          className="sidebar_logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />

        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <strong className="sidebar_title">PLAYLIST</strong>
        <hr />
        {playlists?.items?.map((playlist, index) => {
          return <SidebarOption key={index} title={playlist.name} />;
        })}
      </div>
    </>
  );
};

export default Sidebar;
