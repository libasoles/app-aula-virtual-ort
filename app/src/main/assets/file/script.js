var file = "https://raw.githubusercontent.com/libasoles/app-aula-virtual-ort/master/app/src/main/assets/file/styles.css";

fetch(file)
    .then( (styles) => {  styles.text().then(applyStyles) } )

function applyStyles(styles) {
    var style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style);
}
