function AlteraLinguagemIngles() {
    $('#brazilLogo').css('display', 'none');
    $('#usaLogo').css('display', '');
    AlterarSiteParaPortugues();
}

function AlteraLinguagemPortugues() {
    $('#brazilLogo').css('display', ''); 
    $('#usaLogo').css('display', 'none');
    AlterarSiteParaIngles();
}

function AlteraModoClaro() {
    $('#modoClaro').css('display', 'none');
    $('#modoEscuro').css('display', ''); 
}

function AlteraModoEscuro() {
    $('#modoClaro').css('display', '');
    $('#modoEscuro').css('display', 'none');
    $('#bodyPrincipal').removeClass('modo-claro'); // Remova outras classes se necessário
    $('#bodyPrincipal').addClass('modo-escuro');
}
function AlterarSiteParaIngles() {
    $('#sobreMimHeader').text('About Me');
    $('#tecnologiasHeader').text('Technologies');
    $('#contatoHeader').text('Contact');
    $('#botaoLinkeDin').text('Visit LinkeDin');

    $('#sejaBemVindo').text('Welcome! My name is');
    $('#souDesenvolvedor').text('I am a Full Stack developer.');
    $('#botaoGit').text('Visit GitHub');

    $('#sobreMimTitulo').text('About Me');
    $('#sobreMimTexto').text('I spent 5 years as a sales representative in the footwear industry, a period of intense learning and personal growth. However,' +
        'I decided to change professions in search of something that would bring me more fulfillment. After months of study and a 4-month internship,' +
        'I am now working as a Junior Full Stack developer. The year 2023 has been incredible for me, marking a significant phase in my journey! Check out the photos below!');

    $('#tituloTecnologia').text("Technologies");
    $('#textoTecnologia').text("Hover over the technologies to learn a bit about my work with each one!");

    $('#enviarEmailBotao').text("Send Email");
    $('#enviarEmail').text("Send Email");
    $('#nomeEmailTitulo').text("Name:");
    $('#mensagemEmailTitulo').text("Message:");
    $('#contatoTitulo').text("Contact");
    $('#contatoTexto').text("Get in touch for questions, suggestions, quotes, or support.");

}

function AlterarSiteParaPortugues() {
    $('#sobreMimHeader').text('Sobre Mim');
    $('#tecnologiasHeader').text('Tecnologias');
    $('#contatoHeader').text('Contato');
    $('#botaoLinkeDin').text('Visitar LinkeDin');

    $('#sejaBemVindo').text('Seja Bem Vindo! Me chamo');
    $('#souDesenvolvedor').text('Sou desenvolvedor Full Stack.');
    $('#botaoGit').text('Visitar GitHub');


    $('#sobreMimTitulo').text('Sobre Mim');
    $('#sobreMimTexto').text('Passei 5 anos como representante comercial no ramo calçadista, um período de aprendizado intenso e crescimento pessoal.' +
        'No entanto, decidi mudar de profissão em busca de algo que me trouxesse mais realização. Após meses de estudo e um estágio de 4 meses,' +
        'agora trabalho como Junior Full Stack. O ano de 2023 foi incrível para mim, marcando uma fase significativa na minha trajetória! ' +
        'Acompanhe as fotos logo abaixo!');

    $('#tituloTecnologia').text("Tecnologias");
    $('#textoTecnologia').text("Arraste o mouse por cima das técnologias para conhecer um pouco do meu trabalho com cada uma!");

    $('#enviarEmailBotao').text("Enviar E-mail");
    $('#enviarEmail').text("Enviar E-mail");
    $('#nomeEmailTitulo').text("Nome:");
    $('#mensagemEmailTitulo').text("Mensagem:");
    $('#contatoTitulo').text("Contato");
    $('#contatoTexto').text(" Entre em contato para dúvidas, sugestões, orçamentos ou suporte.");

}

