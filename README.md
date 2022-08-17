<div id="top" align="center">

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

<div align="center">
  <h3 align="center">My Website</h3>
  Find my website <a href="https://www.wimon.dev/">here</a>
  <br />
  Read about the technologies used <a href="https://www.wimon.dev/blog/creating-my-website">here</a>
</div>
<hr />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#scripts">Scripts</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

### Built With

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://reactjs.org/)
- [Sanity CMS](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Turborepo](https://turborepo.org/)

<!-- GETTING STARTED -->

## Getting Started

This website contains two parts. A CMS part, used to manage the content for my website and the website itself, used to display the content.
The `cms` directory contains a React app to manage the content and the `site` directory contains a SvelteKit app to display that content.

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
- node

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Wimonder/website/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Scripts

#### Turborepo

The turborepo commands operate and both the `cms` and `site` apps.

- development server
  ```sh
  npm run dev
  ```
- build the production version
  ```sh
  npm run build
  ```
- format
  ```sh
  npm run format
  ```
- lint
  ```sh
  npm run lint
  ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/Wimonder/website.svg?style=for-the-badge
[issues-url]: https://github.com/Wimonder/website/issues
[license-shield]: https://img.shields.io/github/license/Wimonder/website.svg?style=for-the-badge
[license-url]: https://github.com/Wimonder/website/blob/main/LICENSE
