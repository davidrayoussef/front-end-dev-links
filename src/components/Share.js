import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import RedditIcon from './icons/RedditIcon';
import EmailIcon from './icons/EmailIcon';
import GithubIcon from './icons/GithubIcon';

const Share = () => {
  return (
    <div className="share">

      <a href="https://twitter.com/intent/tweet/?text=Front-End Dev Links - Resources for Front-End Developers&amp;url=http://davidra.co/front-end-dev-links/" target="_blank">
        <svg className="twitter" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          <TwitterIcon />
        </svg>
        <span>Tweet</span>
      </a>

      <a target="_blank">
        <svg className="facebook" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          <FacebookIcon />
        </svg>
        <span>Share</span>
      </a>

      <a target="_blank">
        <svg className="github" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          <GithubIcon />
        </svg>
        <span>Star</span>
      </a>

    </div>
  );
};

export default Share;
