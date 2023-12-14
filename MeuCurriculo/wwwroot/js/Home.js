$(document).ready(function () {

});

$('#tecnologiaCsharpe').mouseenter(function () {
    if ($('#usaLogo').css('display') !== 'none') {
        $('#tituloTecnologia').text("C#");
        $('#textoTecnologia').text("Utilizo para programar back end, fazendo cruds, com a lógica de negócio e etc...");
    } else {
        $('#tituloTecnologia').text("C#");
        $('#textoTecnologia').text("I use it for back-end programming, handling CRUD operations, business logic, etc...");
    }
});
$('#tecnologiaJavascript').mouseenter(function () {
    if ($('#usaLogo').css('display') !== 'none') {
        $('#tituloTecnologia').text("JavaScript");
        $('#textoTecnologia').text("Utilizo para front end, fazendo algumas logicas, verificações e validações");
    } else {
        $('#tituloTecnologia').text("JavaScript");
        $('#textoTecnologia').text("I use it for front-end development, implementing various logics, checks, and validations");
    }
});
$('#tecnologiaHtml').mouseenter(function () {
    if ($('#usaLogo').css('display') !== 'none') {
        $('#tituloTecnologia').text("HTML");
        $('#textoTecnologia').text("Utlizo para front end");
    } else {
        $('#tituloTecnologia').text("HTML");
        $('#textoTecnologia').text("I use it for front-end development");
    }
});
$('#tecnologiaCss').mouseenter(function () {
    if ($('#usaLogo').css('display') !== 'none') {
        $('#tituloTecnologia').text("CSS");
        $('#textoTecnologia').text("Utilizo para arte");
    } else {
        $('#tituloTecnologia').text("CSS");
        $('#textoTecnologia').text("I use it for styling");
    }
});
$('#bancoDeDados').mouseenter(function () {
    if ($('#usaLogo').css('display') !== 'none') {
        $('#tituloTecnologia').text("Banco de Dados");
        $('#textoTecnologia').text("Trabalho hoje com SQL Server, trabalho com tabelas relacionais e etc...");
    } else {
        $('#tituloTecnologia').text("Database");
        $('#textoTecnologia').text("Currently, I work with SQL Server, dealing with relational tables, and more...");
    }
});

function EnviarEmail() {
    var name = document.getElementById('nomeEmailTitulo').value;
    var message = document.getElementById('mensagemEmail').value;

    var subject = 'Assunto do E-mail';

    var mailtoLink = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('Nome: ' + name + '\n\n' + message);

    window.location.href = mailtoLink;
}

function RedirecionarParaSite(site) {
    window.location.href = site;
}
