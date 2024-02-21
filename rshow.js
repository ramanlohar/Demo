function loadPrism(callback) {
    var prismScript = document.createElement('script');
    prismScript.onload = callback;
    prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js';
    document.head.appendChild(prismScript);

    var prismStylesheet = document.createElement('link');
    prismStylesheet.rel = 'stylesheet';
    prismStylesheet.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css';
    document.head.appendChild(prismStylesheet);
}

function rshow(v) {
    const body = document.querySelector('body');
    var codescreen = document.getElementById('codescreen');

    if (!codescreen) {
        codescreen = document.createElement('div');
        codescreen.id = 'codescreen';
        body.appendChild(codescreen);
        codescreen.style.width = '90%'; // Add this style
        codescreen.style.padding = '10px'; // Add this style
        codescreen.style.color = 'white'; // Add this style
        codescreen.style.backgroundColor = 'black'; // Add this style
        codescreen.style.border = '4px solid white'; // Add this style
        codescreen.style.borderRadius = '20px'; // Add this style
        codescreen.style.margin = 'auto'; // Add this style
        codescreen.style.overflow = 'auto'; // Add this style
    }

    var pre = document.createElement('pre');
    pre.innerHTML = '<code class="language-javascript">' + Prism.highlight(v, Prism.languages.javascript, 'javascript') + '</code>';
    codescreen.appendChild(pre);
}

loadPrism(function() {
    // Prism.js is now loaded
    // Call rshow function here or wherever appropriate
});
