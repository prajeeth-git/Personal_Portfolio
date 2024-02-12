import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sri-sai-prajeeth-v-6962bb208" target="_blank" rel="noreferrer" ><BsLinkedin /> Linkedin</a>
      <a href="https://github.com/prajeeth-git" target="_blank" rel="noreferrer" ><FaGithub /> GitHub</a>
    </div>
  )
}

export default HeaderSocials