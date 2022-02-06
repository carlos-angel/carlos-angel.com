import { FaGithub, FaGitlab, FaTwitter } from 'react-icons/fa';

function Networks() {
  return (
    <section className="flex items-center justify-between w-auto space-x-4">
      <a href="https://twitter.com/Charly_Angel_x2" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://gitlab.com/carlos-angel" target="_blank" rel="noreferrer">
        <FaGitlab />
      </a>
      <a href="https://github.com/carlos-angel" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </section>
  );
}

export default Networks;
