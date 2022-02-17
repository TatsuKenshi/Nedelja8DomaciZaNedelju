## Incomes and Expenses React

The Incomes and Expenses React is a basic, one-page React.js app. It allows the user to calculate the monthly balance and add and remove incomes and expenses.

## Motivation

The project was made during the 8th week of the IT Bootcamp's Front End Development Course as the React.js remake of the first project assignment (done a few weeks earlier in good old vanilla JavaScript). Also, it was one of the first homeworks in which we used React.

## Build status

The project is considered finished, and there won't be any expansions in terms of features. Responsive design has been finalized, as well.

## Tech/framework used

This project is based on bare bones React.js, with the help of plain CSS3. Due to the simplistic nature of the project, there was no need to use the router. No CSS frameworks or preprocessors were used, either.

## Features

Main features of this app include:

- adding/removing incomes via the input form

- adding/removing expenses via the input form

- automatic calculation of the monthly balance, based on entered incomes and expenses

## Installation

1. To install this project on your machine and get it up and running, you should first clone this repository. Open the terminal, navigate to the desired destination on your drive, and run the following command:

git clone https://github.com/TatsuKenshi/Nedelja8DomaciZaNedelju

2. When the download is done, navigate to the project's folder with the following command:

cd Nedelja8DomaciZaNedelju

3. Next, you'll need to install the necessary dependencies. Use the following command (make sure you're in the project's main folder):

npm install

4. To spin up the local dev environment, open your code editor/IDE and bring up the terminal. Run the following command in the project's main folder:

npm start

If you get an error, try installing an older version of node.js (I recommend 14.18.3), switch to it, and try again.

## API Reference

No APIs were used in this project.

## How to use?

- how to add new income/expense
  Click on the Transaction drop-down menu and select the type of transactions (income or expense). After that, enter the description (salary, project 1, rent, food expenses, etc). After that, enter the sum amount field, and click on the Submit button. The app will automatically recalculate the balance.

- how to remove an income/expense
  To remove a transaction from either of the two lists, just click on the Delete button. The app will automatically recalculate the balance.
