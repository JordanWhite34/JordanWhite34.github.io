document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(event.target.hash);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
});

const githubUsername = 'JordanWhite34';

// Fetch public repositories from GitHub
async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${JordanWhite34}/repos`);
    const repos = await response.json();
    displayRepos(repos);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
  }
}

// Display repository information on the portfolio website
function displayRepos(repos) {
  const repoList = document.getElementById('repo-list');
  repos.forEach(repo => {
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repo');

    const repoName = document.createElement('h3');
    repoName.textContent = repo.name;

    const repoDescription = document.createElement('p');
    repoDescription.textContent = repo.description || 'No description available';

    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = 'View on GitHub';
    repoLink.target = '_blank';
    repoLink.rel = 'noopener noreferrer';

    repoDiv.appendChild(repoName);
    repoDiv.appendChild(repoDescription);
    repoDiv.appendChild(repoLink);
    repoList.appendChild(repoDiv);
  });
}

// Call the fetchGitHubRepos function when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubRepos);
