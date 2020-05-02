// YOUR CODE BELOW
function lastCharacter(string1, string2) {
    let string1last = string1.length - 1;
    let string2last = string2.length - 1;
    if (string1[string1last] === string2[string2last]) {
        return true;
    }
    else return false;
}