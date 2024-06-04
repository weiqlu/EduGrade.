# EduGrade

EduGrade is a web application designed to make picking classes easier by providing official grade distributions from previous semesters, allowing students to make more informed decisions. The application includes functionalities to search for class sections, view detailed information, and submit reviews.

Check out the live deployment of [EduGrade](https://edugrade.onrender.com/)!


![EduGrade_Home](https://github.com/weiqlu/EduGrade/assets/114836688/d329f33c-cde3-4ab1-9c36-1a8ce2ec398a)

![EduGrade_GradeDistribution](https://github.com/weiqlu/EduGrade/assets/114836688/38100b0a-9a2e-485f-8bca-f051c395f93c)

![EduGrade_Review](https://github.com/weiqlu/EduGrade/assets/114836688/f20fcb1f-d687-46d7-bd06-261cfd1c7f9a)

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Formatting](#formatting)

## About The Project

EduGrade is built to help students at Virginia Tech make better decisions when selecting their classes by providing them with grade distributions, course information, and the ability to submit anonymous reviews.

### Built With

- [React](https://reactjs.org/)
- [PrimeReact](https://www.primefaces.org/primereact/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have the following installed:

- Node.js v20.11.1 LTS
- MySQL
- An IDE or text editor (e.g., VS Code)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/your-username/edugrade.git
   ```

2. Navigate to the project directory

   ```
   cd edugrade
   ```

3. Install npm packages for both frontend and backend

   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the Application

1. Start the backend server

   ```
   cd server
   npm start
   ```

2. Start the frontend development server

   ```
   cd client
   npm start
   ```

## Usage

Showcasing the functionalities of EduGrade:

- Home Page: A welcoming page explaining the purpose of the application and providing a quick link to find your section.
- Grade Distribution: A searchable and sortable table displaying detailed grade distributions for each class section.
- Review: A page to search for class sections by CRN and submit or manage reviews for those sections.

## Formatting

This repository is formatted with Prettier.

To install on VSCode:

- Install the [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Open VSCode settings, (COMMAND + ,) on macOS or (CTRL + ,) on Windows
- Set `Editor: Default Formatter` to Prettier
- (Optional) Enable `Editor: Format On Save`
