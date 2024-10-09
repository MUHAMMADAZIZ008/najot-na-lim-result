//import 1
import cowsay from "cowsay"

// improt common js
// const cowsay = require("cowsay")
// const chalk = require("chalk")
import chalk from "chalk";

console.log(
    chalk.bgBlueBright(
        cowsay.say({
            text: "moo",
            e: "><", 
            T: "U"
        })
    )
);

