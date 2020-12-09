// TODO Завдання.Написати функцію, яка приймає два параметри trimString(str, maxlength).Функція перевіряє довжину рядка str, і якщо вона перевершує maxlength - замінює кінець str на "..."
function trimString(str, maxLength) {
  let num = str.length;
  if (num > maxLength) {
    let newStr = str.substring(0, maxLength);
    return (newStr = newStr.concat("..."));
  } else {
    return str;
  }
}
console.log(trimString("hello world", 5));
console.log(trimString("hello world", 10));
console.log(trimString("hello world", 0));
console.log(trimString("hello world", 20));