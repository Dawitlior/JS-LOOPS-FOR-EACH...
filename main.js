// שימוש בלולאת פור איץ
//לא עושה שינוי במערך המקורי
// פונקציית VOID היא לא מחזירה לנו ערך
const colors = ["red", "green", "blue", "black"];
colors.forEach((colorItem) => {
  console.log(colorItem.toLocaleUpperCase());
});

const colors1 = ["brown", "red", "yellow", "green"];
colors1.forEach((item) => item.toUpperCase());

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
function someFunc(usersArray) {
  usersArray.forEach((user) => {
    if (user.age>18) {
      log(user.firstName);
    }
    else{
      console.log(user.lastName);
    }
  });
}
someFunc([])
