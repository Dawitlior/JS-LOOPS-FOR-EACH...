// רשימוש בלולאת  FOREACH()
//לא עושה שינוי במערך המקורי
// פונקציית VOID היא לא מחזירה לנו ערך
// const colors = ["red", "green", "blue", "black"];
// colors.forEach((colorItem) => {
//   console.log(colorItem.toLocaleUpperCase());
// });

// const colors1 = ["brown", "red", "yellow", "green"];
// colors1.forEach((item) => item.toUpperCase());

// צרו פונקציה המקבלת כארגומנט מערך של אובייקטים ולכל אבוייקט יש גיל שם פרטי ושם משפחה
// אם הגיל מעל 18 מדפיסה שם פרטי למסך אחרת מדפיסה שם משפחה למסך
// ------------------------------------------------
//NOT TRUE

// const user_obj = {
//   age: 12,
//   firstName: "lior",
//   lastName: "dawit",
// };
// function printNameAndAge(user_obj) {
//     user_obj.forEach((objItem) => {
//       if (user_obj.age < 18){
//         id_h1.innerHTML = objItem
//       }
//     });
// }
// printNameAndAge();
// -------------------------------------------------

//TRUE
// function someFunc(usersArray) {
//   usersArray.forEach((user) => {
//     if (user.age>18) {
//       log(user.firstName);
//     }
//     else{
//       console.log(user.lastName);
//     }
//   });
//   let obj = {
//     age:18,
//     firstName:"lior",
//     lastName:"dawit"
//   }
//   let obj1 = {
//     age:18,
//     firstName:"lior",
//     lastName:"dawit"
//   }

// }
// someFunc([obj,obj1]);


// --------------------------------------------------------------------------
// לולאת FOR OF 
//HTMLכל פנייה לדוקומנט שמחזירה לי אוסף של אלמנטים תחזיר לי אוסף של 
// -----------------------------------------------------------------------
// const colors12 = ["red", "green", "blue", "black"];

// for (let colorItems of colors12) {
//   console.log(colorItems);
// }



// const mySpan = document.getElementsByClassName("span1");
// for (const spanItem of mySpan) {
//   console.log(spanItem);
// }


// function changeText(){
// let clickMe = document.getElementsByClassName("myP");
// for (const items of clickMe ) {
// items.innerHTML = "<h1>"+"hello"+"</h1>";
// items.style.color = "blue";
// }
// }
//-------------------------------------------------------------------------
//------------------------------------------------------------------------
// לולאה שרצה פר שדה(KEY) באובייקט for in לולאת

// function someFunction(){
//   const person = {
//     firstName:"lior",
//     lastName:"dawit",
//     age:34
// }
// for(let some_key in person){
//   console.log(some_key);
//   console.log(person[some_key]);
//   console.log(`${some_key} : ${person [some_key]}`);
// }
// }
// someFunction();



3.
4.
function printTheKey(){
  const myself = {
    firstName: "lior",
    lastName: "dawit",
    age: 34,
    city:"kiryat-malachi"
  };
  for(let myItem in myself){
    console.log(myItem);
    console.log(myself[myItem]);
  }
}
printTheKey();
  let input = document.createElement("input");
  input.type = "number";

5.
function creatObjectAndPrint(){

  document.body.append("input");
  const myObject = {
    firstName: prompt(),
    lastName: prompt(),
    age:prompt()
  };
  for(let myKey in myObject){
    document.body.innerHTML += `<div>${myKey} : ${myObject[myKey]}</div>`
  }
}
creatObjectAndPrint();

6.



