# Fitness App

**Project description.**  
*A complete fitness application built with TypeScript, JavaScript, React, HTML, CSS, and MongoDB. This app helps users track their workouts, manage nutrition plans, and monitor fitness progress, providing an engaging user experience through an intuitive UI.*

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Screenshots](#screenshots)
5. [Technologies](#technologies)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Features

- **User Authentication:** Secure login and signup using MongoDB for user data storage.
- **Workout Tracking:** Log daily workouts, set fitness goals, and track exercise history.
- **Nutrition Management:** Track calories and macronutrients with built-in nutrition plans.
- **Community:** Can connect with fellow gym-goers.
- **Responsive Design:** Optimized for both desktop and mobile devices.


---

## Installation

### Prerequisites:
- **Node.js** and **npm** (Node Package Manager) installed.
  - [Download Node.js](https://nodejs.org/)
    
- **MongoDB** installed locally or set up with a cloud service like MongoDB Atlas.
  - [Download MongoDB](https://www.mongodb.com/try/download/community)

### Steps to Install:

1. Clone the repository:
   ```bash
   git clone https://github.com/rithikkumarcholleti/newsapp.git

2. Navigate to the project directory:
   ```bash
   cd newsapp

3. Install the necessary dependencies:
   ```bash
   npm install

4. Istall react-router-dom for routing:
   ```bash
   npm install react-router-dom

5. Sign up at News API to get your API key.

6. Create a .env file in the root of the project and add your API key:
   ```bash
   REACT_APP_NEWS_API_KEY=your_api_key_here

7. Run the project:
   ```bash
   npm run start

## Usage 
1. **Run locally**: Start the development server with:
   ```bash
   npm start

2. **Access the application:**  Open your browser and go to:
   ```bash
   http://localhost:3000

3. **Fetching News:** The app will automatically fetch the latest news articles using your News API key. You can filter news by categories like business, sports, entertainment, etc.


## Screenshots
![Screenshot 2024-10-21 222944](https://github.com/user-attachments/assets/4307fd5e-3e41-4b67-9941-1379b1311d2c)
![Screenshot 2024-10-21 223012](https://github.com/user-attachments/assets/25484a36-758b-40ca-95c1-6547b62d667f)
![Screenshot 2024-10-21 223031](https://github.com/user-attachments/assets/931f4dbb-7407-40fa-bd42-2935bd39b02f)
![Screenshot 2024-10-21 223100](https://github.com/user-attachments/assets/cc211920-c2c4-4687-9d69-2a98b1b6ae8e)


## Technologies
- React
- React Router DOM
- HTML
- News API
- CSS/Bootstrap/Material-UI (for styling)


## Project Structure

Overview of project structure:

```bash
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── NavBar.js
│   │   ├── NewsList.js
│   │   ├── News.js
│   │   ├── Footer.js
│   │   └── Spinner.js
│   ├── App.js
│   ├── index.js
│   └── .env
├── README.md
└── package.json
```

## Contributing

How others can contribute to this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push the changes to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Rithik Kumar Cholleti - [LinkedIn](https://www.linkedin.com/in/rithik-cholleti-394973317/) - [Email](mailto:rithikkumarcholleti@gmail.com)  
Project Link: [Newsapp](https://github.com/rithikkumarcholleti/newsapp)
