import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import RedditIcon from './icons/RedditIcon';
import EmailIcon from './icons/EmailIcon';
import GithubIcon from './icons/GithubIcon';

const Share = () => {
  return (
    <div className="share">

      <a
        className="twitter"
        href="https://twitter.com/intent/tweet/?text=Front-End%20Dev%20Links%20-%20Resources%20for%20Front-End%20Developers&amp;url=http://davidra.co/front-end-dev-links/"
        target="_blank"
      >
        <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          <TwitterIcon />
        </svg>
        <span>Tweet</span>
      </a>

      <a
        className="facebook"
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A//davidra.co/front-end-dev-links/&name=Front-End%20Dev%20Links&description=Resources%20for%20Front-End%20Developers"
        target="_blank"
      >
        <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          <FacebookIcon />
        </svg>
        <span>Share</span>
      </a>

      <a
        className="github"
        href="https://github.com/davidrayoussef/front-end-dev-links"
        target="_blank"
      >
        <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          <GithubIcon />
        </svg>
        <span>Star</span>
      </a>

    </div>
  );
};

export default Share;
