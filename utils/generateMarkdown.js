// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 

  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  
  ## Installation
  
  ${data.installation}

  ## Usage 
  
  ${data.usage}

  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## License
  
  ${data.license}
  
  ---
  
  ## Questions?

  For any questions, please contact me :
 
  GitHub: [@PavsterUK](https://api.github.com/users/PavsterUK)

`;
}

module.exports = generateMarkdown;
