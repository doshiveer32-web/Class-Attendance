function countCharacters(text)
{
    return text.length;
}

function countWords(text)
{
    var words = text.split(" ");
    return words.length;
}

function countVowels(text)
{
    var vowels = 0;
    text = text.toLowerCase();

    for (var i = 0; i < text.length; i++)
    {
        if (text[i] == "a" || text[i] == "e" ||
            text[i] == "i" || text[i] == "o" ||
            text[i] == "u")
        {
            vowels++;
        }
    }

    return vowels;
}

function checkJavaScript(text)
{
    text = text.toLowerCase();

    return text.includes("javascript");
}

function analyze()
{
    var text = document.getElementById("paragraph").value;

    var characters = countCharacters(text);
    var words = countWords(text);
    var vowels = countVowels(text);
    var javascript = checkJavaScript(text);

    document.getElementById("result").innerHTML =
        "Total Characters: " + characters + "<br>" +
        "Total Words: " + words + "<br>" +
        "Total Vowels: " + vowels + "<br>" +
        "Contains JavaScript: " + javascript;
}