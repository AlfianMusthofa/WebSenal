function changePlaceholder() {
    const inputElement = document.querySelector('#searchInput');
    const placeholders = ["Staycation di Bandung", "Tur ke Bali", "Event di Jakarta"];
    let counter = 0;

    setInterval(() => {
        inputElement.placeholder = placeholders[counter];
        counter = (counter + 1) % placeholders.length;
    }, 1500)
}
changePlaceholder();