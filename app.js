// ******************************
        // CHAPTER # 38 - 42:
// ******************************

        // Task # 01 :-

// function power(a,b){
//     var ans = 1
//     for(var i = 1 ; i <= b ; i++){
//         ans = ans * a ;
//     }
//     return a + " raised to " + b + " is : " + ans
// }
// alert(power(2,5))

        // Task # 02 :-

// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }

// var year = prompt("Enter year")
// if(leapYear(year) == true){
//         alert(year + " is a leap year")
// }else{
//         alert(year + " is a not leap year")
// }

        // Task # 03 :-

// function findS(a,b,c){
//         return((a+b+c)/2)
// }
// var a = 10
// var b = 6
// var c = 8
// var s = findS(a,b,c)
// function area(s){
//        var area=s*(s-a)*(s-b)*(s-c)
//        return area
// }
// document.write("Area is: " + area(s))

        // Task # 04 :-

// function average(sub1,sub2,sub3){
//         return((sub1+sub2+sub3)/3)
// }

// function percentage(sub1,sub2,sub3){
//         return((sub1+sub2+sub3)/300*100)
// }

// function mainFunction(){
//         var sub1 = +prompt("Enter Marks of Subject # 01")
//         var sub2 = +prompt("Enter Marks of Subject # 02")
//         var sub3 = +prompt("Enter Marks of Subject # 03")
//         document.write("Average: " + average(sub1,sub2,sub3))
//         document.write("<br>Percentage: " + percentage(sub1,sub2,sub3) + "%")
// }

// mainFunction()

        // Task # 05 :-

// function findIndex(myString,myChar){
//         for(i=0 ; i< myString.length ;i++){
//                 if(myString[i] === myChar){
//                         return i
//                 }
//         }
//         return -1
// }

// document.write(findIndex("Haseeb","s"))

        // Task # 06 :-

// function removeVowel(myString){
//         myString = myString.replace(/[aeiou]/g,'')
//         document.write(myString)
// }

// removeVowel("i am studying in ubit")

        // Task # 07 :-

// const def = prompt('Enter the string to count two vowels in succession : ');
// const answer = getResult(def);
// alert('The vowels in succession are ' + answer + ' times');

// function getResult(input) {
//   const words = input.split(' ');
//   var finalResult = 0;
//   words.forEach((word) => {
//     if (countVowelPair(word) > 0) {
//       finalResult++;
//     }
//   });

//   return finalResult;
// }

// function countVowelPair(word) {
//   var count = 0;
//   for (var i = 1; i < word.length; i++) {
//     if (isVowel(word[i]) && isVowel(word[i - 1])) {
//       count++;
//     }
//   }
//   return count;
// }

// function isVowel(char) {
//   var result = false;
//   switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       result = true;
//       break;

//     default:
//       break;
//   }

//   return result;
// }

        // Task # 08 :-

// var distance = prompt("Enter distance between two cities (in km.)")

// function inMeter(distance){
//         return distance*1000 + " meters"
// }

// function inFeet(distance){
//         return distance*3281 + " feet"
// }

// function inInch(distance){
//         return distance*39370 + " inches"
// }

// function inCentimeter(distance){
//         return distance*100000 + " centimeters"
// }
// document.write(inMeter(distance) + "<br>" +inFeet(distance) + "<br>" +inInch(distance) 
// + "<br>" +inCentimeter(distance))

        // Task # 09 :-

// var hours = prompt("Enter number of hours you worked")
// var rate = 12
// function overtimePay(hours){
//         if(hours > 40){
//                 return("Overtime Pay: " + (hours-40)*rate + " Rupees")
//         }else{
//                 return "No Overtime Pay "
//         }
// }

// alert(overtimePay(hours))

        // Task # 10 :-

// var amount = prompt("Enter amount to withdraw!!")
// document.write("you will have " + Math.floor(amount/100) + " hundred notes " 
// + Math.floor((amount % 100 ) / 50) + " fifty notes " 
// + (((amount % 100) % 50) / 10) + " ten notes.")





// ******************************
        // CHAPTER # 43 - 48:
// ******************************





        // Task # 01 :-

// function abc(){
//         alert("Are You Sure ?")
// }

        // Task # 02 :-

// function greet(){
//         alert("Thanks for purchasing a phone from us")
// }

        // Task # 03 :-

// function delete1(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete2(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete3(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete4(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete5(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete6(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete7(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete8(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete9(e) {
//   e.parentNode.parentNode.remove();
// }
// function delete10(e) {
//   e.parentNode.parentNode.remove();
// }

        // Task # 04 :-

// var img = document.getElementById("img")
// function newPic(){
//         img.src = "images/p2.jpg"
// }
// function pic(){
//         img.src= "images/p3.jpg"
// }

        // Task # 05 :-

// var counter = document.getElementById("counter")
// var count = 0
// console.log(counter.innerHTML)
// function incr(){
//         counter.innerHTML = ++count
// }
// function decr(){
//         counter.innerHTML = --count
// }

// ******************************
        // CHAPTER # 49 - 52:
// ******************************

// var modal = document.getElementById('id01');

//   function getData()
//         {
//             var email = document.getElementById("email").value;
//             var password= document.getElementById("password").value; 
//             var telephone= document.getElementById("telephone").value;

            
//             localStorage.setItem("txtValue", email);
//             localStorage.setItem("txtValue1", password);
//             localStorage.setItem("txtValue2", telephone);
//         }

// document.getElementById("data").innerHTML=localStorage.getItem("txtValue");
// document.getElementById("data1").innerHTML=localStorage.getItem("txtValue1");
// document.getElementById("data2").innerHTML=localStorage.getItem("txtValue2");

// ******************************
        // CHAPTER # 52 - 57:
// ******************************

// var modal = document.getElementById('myModal');

// var img1 = document.getElementById('myImg1');
// var img2 = document.getElementById('myImg2');
// var img3 = document.getElementById('myImg3');
// var img4 = document.getElementById('myImg4');
// var img5 = document.getElementById('myImg5');
// var img6 = document.getElementById('myImg6');


// var modalImg = document.getElementById("img01");
// img1.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// img2.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// img3.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// img4.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// img5.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// img6.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//     modal.style.display = "none";
// }


// ******************************
        // CHAPTER # 58 - 67:
// ******************************

// Q1

// var contentt = document.getElementById("content");
// var contentt1 = document.getElementById("content1");
// var contentt2 = document.getElementById("content2");
// var contentt3 = document.getElementById("content3");
// var contentt4 = document.getElementById("content4");
// var contentt5 = document.getElementById("content5");
// var contentt6 = document.getElementById("content6");
// var contentt7 = document.getElementById("content7");
// var contentt8 = document.getElementById("content8");
// var contentt9 = document.getElementById("content9");
// var contentt10 = document.getElementById("content10");

// var main_content = document.getElementById("main-content");
// var main_content_print = main_content.innerHTML;
// contentt.innerText = main_content_print;

// var renderr = document.getElementsByClassName("render");
// for (var i = 0; i < renderr.length; i++) {
//   contentt1.innerHTML += "<br>" + renderr[i].innerText + "<br>";
// }

// var firstnamee = document.getElementById("first-name");
// firstnamee.value = "Muhammad";

// var lastnamee = document.getElementById("last-name");
// lastnamee.value = "Rameez";

// var emaill = document.getElementById("email");
// emaill.value = "muhammadrameez660@gmail.com";

// Q2

// var formcontentt = document.getElementById("form-content");

// contentt2.innerText =
//   "Node type of id form content is :" + formcontentt.nodeType;
// contentt3.innerText = "Node type of id last name is :" + lastnamee.nodeType;

// var lastnameee = document.getElementById("lastName");
// lastnameee.innerText = "Rameez";
// contentt4.innerText =
//   "updated last name of id lastName is bank to :- " + lastnameee.innerText;

// var main_content_first_child = document.getElementById("main-content")
//   .firstElementChild;
// contentt5.innerText =
//   "First child of id main-content :- " + main_content_first_child.innerText;

// var main_content_last_child = document.getElementById("main-content")
//   .lastElementChild;
// contentt6.innerText =
//   "Last child of id main-content :- " + main_content_last_child.innerText;

// var last_naem_next_sibling = document.getElementById("lastName")
//   .nextElementSibling;
// contentt7.innerText =
//   "next sibling of id lastName :- " + last_naem_next_sibling.innerText;

// var last_naem_previous_sibling = document.getElementById("lastName")
//   .previousElementSibling;
// contentt8.innerText =
//   "previous sibling of id lastName :- " + last_naem_previous_sibling.innerText;

// var email_parentnode = document.getElementById("email").parentNode;
// contentt9.innerText =
//   "parent node of id email :- " + email_parentnode.innerText;
// var email_nodetype = document.getElementById("email").nodeType;
// contentt10.innerText = "node type of id email :- " + email_nodetype.innerText;