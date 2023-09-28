//Михайлова А.В. 
//Код ниже не учитывает регистр при поиске/замене

//Создайте функцию censor, которая не принимает аргументов.
//Функция должна возвращать новую функцию, принимающую опционально 1 или 2 параметра (оба - строки).
function censor() {
  const arr = [];
  return function (a, b = "default") {
    //Когда возвращаемая функция принимает 2 параметра,
    //то она ничего не возвращает, а сохраняет полученные знания как пару
    if (b !== "default") {
      arr.push([a, b]);
    }
    //Когда возвращаемая функция принимает 1 параметр,
    //то она возвращает полученную строку, заменив в ней все слова, согласно ранее сохранённым парам.
    else {
      let res = a;
      
      for (const row of arr) {
        if (a.toLowerCase().includes(row[0].toLowerCase())) {
          const reg = new RegExp(row[0], 'gi');
          res = res.replace(reg, row[1]);
        }
      }
      return res;
    }
  };
}

const changeScene = censor();
changeScene("JS", "PHP");
changeScene("frontend", "backend");

console.log(
  changeScene(
    "js is the most popular programming language for frontend web-development" 
    //PHP is the most popular programming language for backend web-development
  )
  );

const changeScene2 = censor();
changeScene2("js", "PHP");
changeScene2("client", "server");

console.log(changeScene(
  "JS is used for client side work"
  //PHP is used for client side work
  )
  ); 
  console.log(changeScene2(
    "JS is used for client side work"
    //PHP is used for server side work
    )
    ); 
