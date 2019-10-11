# Eat-Da-Burger

## Summary 

A project that uses back end technologies to "eat" a burger.

## Site Picture

![alttext](public/assets/img/HWimage.png)

## Technologies Used

ORM - Used to manipulate data from a database without having to use SQL.

MVC - (Model, View Controller) Used to develope user interface that divides the logic in three interconnected components. 

## Challenges and Future Development

This biggest challenge to this project is the debugging process. Because all of the files are connected to each other, if one element is wrong in some form, you need to search for it as the console and terminal will not tell you exactly what the problem is. It'll only give you a starting point. 

Future development includes finishing the debugging process to make the project work. After that, stylize the page to make it appealing to other users. Add more features including a broader focus on different foods and create some sort of log so users can enter what they've eaten.

## Conde Snippet

As stated in the section above, the biggest challenge in this project is the debugging process. The function below has a for loop. The first major debugging process was wondering why the terminal read "Values" as empty. Because this project involves many files, I had to review each one and eventually ended noticing that I forgot to add ".length". It's always a good reminder that even the smallest mistakes can break your code and to check often so we don't have these mistakes. 

```js

function printQuestionMarks(num) {
    console.log("num", num);
    
    var arr = [];

    for (var i = 0; i < num.length; i++) {
        arr.push("?");
    }
    return arr.toString();
}