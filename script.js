function firstChar(text) {
  // your code here
 if (!text.trim()) {
        return '';
    }

    // Loop through the characters in the string
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Return the first non-space charactera
        if (char !== ' ') {
            return char;
        }
    }

    // Return an empty string if no non-space character is found
    return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
