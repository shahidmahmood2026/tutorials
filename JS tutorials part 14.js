// string methods = allow you to manipulate and work with text (strings)

let userName = "Shahid";

userName.charAt(0); //it say every letter from 0-...1...2...3.....etc.

userName.indexOf("a"); //it say like the opposite so its say which number of letter is that letter, 
//                       for example my Name is Shahid and the third letter is "a" ,
//                       so if i type 'indexOf("a")' then it shows 2.

userName.lastIndexOf("a"); //it say like the opposite so its say which number of letter is that letter but from the end

userName.trim(); //it remove the spaces from the beginning and end of the string, so it wouldnt be so long

userName.toUpperCase(); //it make the string uppercase

userName.toLowerCase(); //it make the string lowercase

userName.length; //it say how many letters are in the string

userName.repeat(3); //it repeat the string 3 times for example.

userName.startsWith("S"); //it say if the string starts with the letter S

userName.endsWith("d"); //it say if the string ends with the letter d

userName.includes("a"); //it say if the string includes the letter a

userName.replaceAll ("a", "o"); //it replace all the letters a with the letter o for example

userName.padStart(10, "0"); //it add 0 to the beginning of the string to make it 10 characters long

userName.padEnd(10, "0"); //it add 0 to the end of the string to make it 10 characters long