function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('identificacaoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var nome = document.getElementById('nome').value;
        var idade = document.getElementById('idade').value;
        var foto = document.getElementById('foto').files[0];
        
        if(foto) {
            var reader = new FileReader();
            reader.onload = function(e) {
                alert('Nome: ' + nome + '\nIdade: ' + idade + '\nFoto: ' + e.target.result);
            }
            reader.readAsDataURL(foto);
        } else {
            alert('Nome: ' + nome + '\nIdade: ' + idade);
        }
    });
});
