import React from "react";
import trending from '../assets/icons/trending.svg'
import newReles from '../assets/icons/newRelease.svg'
import commingSoon from '../assets/icons/commingSoon.svg'
import fevarite from '../assets/icons/favourite.svg'
import Watch from '../assets/icons/watchLater.svg'

const SaidVer = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img
              src={trending}
              width="24"
              height="24"
              alt="ternding"
            />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={newReles}
              width="24"
              height="24"
              alt="newReles"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={commingSoon}
              width="24"
              height="24"
              alt="commingSoon"
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={fevarite}
              width="24"
              height="24"
              alt="fevarite"
            />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={Watch}
              width="24"
              height="24"
              alt="watch"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SaidVer;
