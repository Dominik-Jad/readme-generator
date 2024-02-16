// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
 
  ## Description
  ${data.description}
  ## Table of Contents

  <details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Description">Description</a></li>
    <li><a href="#Installation">Installation</a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Contributing">Contributing</a></li>
    <li><a href="#Tests">Tests</a></li>
    <li><a href="#Questions">Questions</a></li>
    <li><a href="#License">License</a></li>
  </ol>
  </details>

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.username}
  
  ## License
  This project is licensed under the ${data.license} license
`;
}

module.exports = generateMarkdown;
