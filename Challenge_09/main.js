let stringList = ["Hello","World","in","a","frame"];

let longestWord = 0;

let framed = document.getElementById("framed");

let newStringList = [];

let finalString = "";

for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestWord) {
        longestWord = stringList[i].length;
    };
};

for (let i = 0; i < stringList.length; i++) {
    newStringList[i] = "*" + "x" + stringList[i];
    while (newStringList[i].length < (longestWord + 3)) {
        newStringList[i] += "x";
    };

    newStringList[i] += "*<br>";
};

for (let i = 0; i < newStringList.length; i++) {
    finalString += newStringList[i];
};

while (finalString.indexOf("x") > 0) {
    finalString = finalString.replace("x", "&nbsp");
};

let starsLine = "";

for (i = 0; i <= longestWord + 3; i++) {
    starsLine += "*";
};

starsLine += "<br>";

finalString = starsLine + finalString + starsLine;

framed.innerHTML = finalString;