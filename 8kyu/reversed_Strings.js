// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// my solution

// 1-method:
function solution(str) {
  return str.split("").reverse().join("");
}

// split("")-bir matnni belgilangan separator (bo'lishuvchi) orqali ajratib olib, undan tuzilgan qatorlar (qismlar) ro'yxatini qaytaradi.
// reverse()- qiymatni teskarisiga aylantirib beradi, faqat 1 dan ortiq element bo'lsagina ishlaydi
// join("")- string metodi. Arraydan stringga o'girib beradi

///////////////////////////////////////////////////////////////////////////////////////////////////

// 2-method:
function solution(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

// teskari string