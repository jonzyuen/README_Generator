function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/license-MIT-blue.svg)](${renderLicenseLink(license)})`
  } else if (license === 'ISC License') {
    return `[![License](https://img.shields.io/badge/license-ISC-blue)](${renderLicenseLink(license)})`
  } else if (license === 'GNU GPLv3') {
    return `[![License](https://img.shields.io/badge/license-GNU_GPLv3-blue)](${renderLicenseLink(license)})`
  } else if (license === 'The Unlicense') {
    return `[![License](https://img.shields.io/badge/license-The_Unlicense-blue)](${renderLicenseLink(license)})`
  } else if (license === 'Mozilla Public 2.0') {
    return `[![License](https://img.shields.io/badge/license-Mozilla_Public_License_2.0-blue)](${renderLicenseLink(license)})`
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/license-APACHE_2.0-blue)](${renderLicenseLink(license)})`
  }
};

function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT') {
    return 'https://spdx.org/licenses/MIT.html'
  } else if (license === 'ISC License') {
    return 'https://choosealicense.com/licenses/isc/'
  } else if (license === 'GNU GPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  } else if (license === 'The Unlicense') {
    return 'https://choosealicense.com/licenses/unlicense/'
  } else if (license === 'Mozilla Public 2.0') {
    return 'https://choosealicense.com/licenses/mpl-2.0/'
  } else if (license === 'Apache 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  }
};

function generateMarkdown(data) {
return `# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [GitHub](#github)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is under the ${data.license} license.</br>
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## GitHub
GitHub username: ${data.userName}</br>
GitHub repository: [${data.link}](${data.link})

## Questions
Email: ${data.email}`;
}

module.exports = generateMarkdown;
