#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 40000; // Dollar
let myPin = 7654;

console.log(chalk.bgBlackBright("Welcome to Kashish Atm"));
let pinAnswer = await inquirer.prompt(
    [
        {
        name: "pin",
        message: "enter your pin",
        type: "number",
        }
    ]
);

if (pinAnswer.pin === myPin) 
    console.log(chalk.cyanBright("Correct pin code!!!"));

let operationAns = await inquirer.prompt(
     [
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:[ "Withdraw", "Check Balance", "Fast Cash", "Exit" ],
        },
     ]
);

console.log(operationAns);

if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt(
        [
          {
            name: "Amount",
            message:"enter your amount",
            type: "number"
          }
        ]
    );

    if (myBalance -=amountAns.Amount) {
        myBalance >=amountAns.Amount;
        console.log(chalk.yellowBright("your remaining balance is ${myBalance}"));

    }else if(myBalance > amountAns.amount) {
        console.log(chalk.red("Insufficient balance"));
    }
    else if(operationAns.operation === "Check Balance") {
        console.log(chalk.bgCyanBright("Your balance is ${myBalance}"));
    }
    else if(operationAns.operation === "Fast Cash"){
        let selectAmount = await inquirer.prompt([
        {
            name: "select",
            message: "please select a amount",
            type: "rawlist",
            choices: [1000, 5000, 10000, 15000, 25000, 35000]
        }])
        myBalance -= selectAmount.select
        console.log(chalk.yellowBright("Your remaining balance is ${myBalance}"))


    }else if (operationAns.operation === "Exit") {
        console.log(chalk.bold.greenBright("See you soon for another joyful transaction with Kashish ATM!")); 
    }
} else {
    console.log(chalk.bold.redBright("Your pin is incorrect"));
}
