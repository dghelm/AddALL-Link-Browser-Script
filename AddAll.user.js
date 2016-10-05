// ==UserScript==
// @name        Addall Link
// @namespace   dgh
// @description Adds a link to addall.com to amazon books for finding more ethical source
// @include     https://*amazon.com/*
// @version     1.00
// @grant       none
// ==/UserScript==
/*
var input=document.createElement("input");
input.type="button";
input.value="Search Addall.com";
input.onclick = showAlert;
input.setAttribute("style", "font-size:10px;margin-bottom:15px;background:none;border-color:#000;background-color:#fff;");
//input.setAttribute("class", "a-button-small")
//document.body.appendChild(input); 
*/
if (document.getElementsByTagName('body') [0].className.match(/book/)) {
  var url = 'http://used.addall.com/SuperRare/submitRare.cgi?isbn=';
  url += document.getElementById('averageCustomerReviews').getAttribute('data-asin');
  url += '&order=PRICE&ordering=ASC&binding=Any+Binding&nopod=on&match=Y&dispCurr=USD&timeout=20&store=ABAA&store=Alibris&store=Abebooks&store=AbebooksAU&store=AbebooksDE&store=AbebooksFR&store=AbebooksUK&store=Antiqbook&store=Biblio&store=BiblioUK&store=Bibliophile&store=Bibliopoly&store=Booksandcollectibles&store=ILAB&store=Half&store=Powells&store=ZVAB';
  console.log(url);
  var link = document.createElement('div');
  link.setAttribute('style', 'margin-bottom:15px;');
  var a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('style', 'font-size:12px;padding:10px;margin-bottom:15px; border:1px solid #000000;');
  a.text = 'Search AddALL.com for Used Copies';
  link.innerHTML = '<span class=\'a-button-liner\'>';
  link.innerHTML += '</span>';
  if (isbnObj = document.getElementById('isbn_feature_div'))
  {
    //var isbnObj = document.getElementById('isbn_feature_div');
    isbnObj.appendChild(link);
    link.appendChild(a);
  }
}
