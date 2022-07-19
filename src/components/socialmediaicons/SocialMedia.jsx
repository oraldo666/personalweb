import React from "react";
import "./SocialMediaStyle.css";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  return (
    <div className="social-media-icons-container">
      <SocialIcon
        url="https://www.linkedin.com/in/oraldo-hysaj/"
        target="_blank"
      />

      <SocialIcon
        url="https://www.facebook.com/oraldo.hysaj/"
        target="_blank"
      />

      <SocialIcon
        url="https://github.com/oraldo666"
        target="_blank"
        className="github-icon"
      />

      <SocialIcon
        url="https://www.youtube.com/channel/UCasOkv1YjzwLLEzwX3yjd2g"
        target="_blank"
      />
    </div>
  );
}

export default SocialMedia;
