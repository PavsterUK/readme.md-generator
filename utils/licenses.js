//Licenses and badges.
const licenses = [
  [
    "MIT License",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  ],
  [
    "GNU General Public License (GPL v3)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  ],
  [
    "Apache License 2.0",
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  ],
  [
    "GNU Lesser General Public License (LGPL v3)",
    "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  ],
  [
    "BSD 2-Clause License",
    "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  ],
  [
    "Mozilla Public License 2.0",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  ],
  [
    "The Unlicense",
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  ],
];

//Returns array of all licenses with their index number at the front.
// Example: "1 - GNU General Public License (GPL v3)"
const listLicenses = () => {
  return licenses.map((license, index) => {
    return `${index} - ${license[0]}`;
  });
};

module.exports = { listLicenses: listLicenses, licenses: licenses };
