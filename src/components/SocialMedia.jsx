import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/ahmad-inc-442167245">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://github.com/ahmadabbainc">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://web.facebook.com/profile.php?id=100085320497762">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://mobile.twitter.com/Ahmad_Inc_">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ahmad_inc_official/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
