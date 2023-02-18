<img src="Frontend/public/wheel-logo-animation-v2.gif" alt="Velocity wheel logo rose" align="right" width="119" />

## Vélocity

**Vélocity helps customers and bicycle providers streamline their experience and access to city wide bike-sharing networks.**

Vélocity aims to:

- Develop a web app that provides access to the city bike network for direct users.
- Dynamically monitor and manage Velocity locations/availability and report losses/damages for both project managers and direct users quickly and easily without hassle.
- Streamline inventory tracking process for project managers.


## Installation

- Install latest version of _postgres_ (15.1).
- Create a database named velocity.
- Run _mockdb.sql_ script.
- After cloning the project, open a terminal for Frontend and another for Backend.
- On each terminal run _npm i_ , this will install all packages.
- After all packages are installed, on each terminal run _npm run dev_.
- Both applications should be running, navigate to 127.0.0.1:5173 on your browser and the homepage will be displayed and ready to be used.

## Front End Packages

#### React + Vite (set to port 5173)

```sh
npm i create vite@latest
```

#### React DOM

```sh
npm install react react-dom
```

#### React Router

```sh
npm i react-router-dom
```

#### React Bootstrap

```sh
npm i bootstrap react-bootstrap
```

#### MUI: Material UI

```sh
npm i @mui/material @mui/icons-material @emotion/styled @emotion/react
```

#### LottieFiles

```sh
npm i --save @lottiefiles/react-lottie-player
```

### React Cookie

```sh
npm i react-cookie
```

## Back End Packages

#### Express JS (set to port 3000 or env setup)

```sh
npm i express
```

#### Cors JS

```sh
npm i cors
```

#### node-postgres

```sh
npm i pg
```

## Database

#### In the backend folder you can find the mockdb.sql to intialize the database for this application.

## Brand Guidelines

![BrandGuidelines](Frontend/public/brandguidelines.png)

## Logo

### Wide Text

First picture displays a text in white font over a transparent background. Second picture displays a text in black font over a transparent background.

<img src="Frontend/public/velocity-logo-white.png" alt="Velocity logo white" height="175" />  
<img src="Frontend/public/velocity-logo-black.png" alt="Velocity logo black" height="175" />

### Standard Round

<img src="Frontend/public/wheel-logo-blue.png" alt="Velocity wheel logo blue" height="200" />&nbsp;&nbsp;<img src="Frontend/public/wheel-logo-orange.png" alt="Velocity wheel logo orange" height="200" />&nbsp;&nbsp;<img src="Frontend/public/wheel-logo-white.png" alt="Velocity wheel logo white" height="200" />

<img src="Frontend/public/wheel-logo-bw.png" alt="Velocity wheel logo black" height="200" />&nbsp;&nbsp;<img src="Frontend/public/wheel-logo-rose.png" alt="Velocity wheel logo rose" height="200" />&nbsp;&nbsp;<img src="Frontend/public/wheel-logo-green.png" alt="Velocity wheel logo green" height="200" />

## Acknowledgements

- Lara Mauricio: https://github.com/laradcm
- Ruben Perez: https://github.com/rubenarturopj
- Charles Bourassa: https://github.com/ccbbccbb
- Julien Lafontaine: https://github.com/lafontaju

Developed for McGill YCIT 099 Full Stack Javascript Capstone Project (2023).
