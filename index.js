document.getElementById('formularZaTrosoci').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const kategorija = document.getElementById('kategorijaInput').value;
    const iznos = parseFloat(document.getElementById('iznosInput').value);
    
    if (isNaN(iznos) || iznos <= 0) {
        alert("Ве молам внесете валиден износ!");
        return;
    }

    let vkupno = parseFloat(localStorage.getItem('vkupno') || 0);
    vkupno += iznos;
    localStorage.setItem('vkupno', vkupno);

    document.getElementById('vkupno').textContent = vkupno + " денари";
    
    // Очисти ја формата по внесување
    document.getElementById('kategorijaInput').value = '';
    document.getElementById('iznosInput').value = '';
});
