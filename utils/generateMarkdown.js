const lic = require("./licenses");

// function to generate markdown for README

function generateMarkdown(data) {
  const licenseIndex = +data.license[0];

  return `
  ${lic.licenses[licenseIndex][1]}

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
  
  ${lic.licenses[licenseIndex][0]}
  
  ---
  
  ## Questions?

  For any questions, please contact me :
 
  GitHub: [@${data.user}](https://api.github.com/users/${data.user})
  email: [@${data.email}](${data.email})

`;
}

module.exports = generateMarkdown;
