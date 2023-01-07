## Description

This is a basic dynamic react website to display some cool facts about react

# Preview:

![react_facts_dark_and_light_mode](https://user-images.githubusercontent.com/65996001/211163045-71176562-8fe8-4a42-9097-f1910c32358e.jpg)

- The `public` directory contains the html page
- The `src` directory contains the images and the components folder and all other js and css files.
- The project has 3 components:
  - `NavBar.js`: inlcudes the navigation bar that displays the website logo and has a toggle button to toggle between dark/light modes
  - `Main.js`: displays react facts section
- `App.js` then collates `Navbar.js` & `Main.js` together and exports to `index.js`
- `index.js` renders the page using `style.css`.

## Installation

The dependencies required are all included in the `package.json` file. They will all be installed by running the `npm install` command.

## Set-up

To start the project run `npm start`.

## Technologies

This project was bootstrapped with create-react-app. `npx create-react-app`.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png">
  <source media="(prefers-color-scheme: light)" srcset="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png">
  <img width="30px" alt="Shows a logo of c-sharp" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png">
</picture>
