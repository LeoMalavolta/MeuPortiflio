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
    $('#nomeHeader').addClass('text-dark');
    $('#sobreMimHeader').addClass('text-dark');
    $('#tecnologiasHeader').addClass('text-dark');
    $('#contatoHeader').addClass('text-dark');
    $('#nomeHeader').css('color', 'black');
    $('#sobreMimHeader').css('color', 'black');
    $('#tecnologiasHeader').css('color', 'black');
    $('#contatoHeader').css('color', 'black');
    $('#gitIcone').css('color', 'black');
    $('#emailIcone').css('color', 'black');
    $('#linkeIcone').css('color', 'black');
    $('#instagramIcone').css('color', 'black');
    $('#tecnologiaCsharpe').css('display', '');
    $('#tecnologiaHtml').css('display', '');
    $('#tecnologiaCss').css('display', '');
    $('#tecnologiaCsharpeBranco').css('display', 'none');
    $('#tecnologiaHtmlBranco').css('display', 'none');
    $('#tecnologiaCssBranco').css('display', 'none');
    $('#tecnologiaJavascript').css('color', '#1D5F57');
    $('#bancoDeDados').css('color', '#1D5F57');
    $('#bodyPrincipal').removeClass('modo-escuro');
    $('#bodyPrincipal').addClass('modo-claro');
    $('#header').removeClass('modo-escuro');
    $('#header').addClass('modo-claro');
}

function AlteraModoEscuro() {
    $('#modoClaro').css('display', '');
    $('#modoEscuro').css('display', 'none');
    $('#nomeHeader').removeClass('text-dark');
    $('#sobreMimHeader').removeClass('text-dark');
    $('#tecnologiasHeader').removeClass('text-dark');
    $('#contatoHeader').removeClass('text-dark');
    $('#nomeHeader').css('color', 'white');
    $('#sobreMimHeader').css('color', 'white');
    $('#tecnologiasHeader').css('color', 'white');
    $('#contatoHeader').css('color', 'white');
    $('#gitIcone').css('color', 'white');
    $('#emailIcone').css('color', 'white');
    $('#linkeIcone').css('color', 'white');
    $('#instagramIcone').css('color', 'white');
    $('#tecnologiaJavascript').css('color', 'white');
    $('#tecnologiaCsharpe').css('display', 'none');
    $('#tecnologiaHtml').css('display', 'none');
    $('#tecnologiaCss').css('display', 'none');
    $('#tecnologiaCsharpeBranco').css('display', '');
    $('#tecnologiaHtmlBranco').css('display', '');
    $('#tecnologiaCssBranco').css('display', '');
    $('#bancoDeDados').css('color', 'white');
    $('#bodyPrincipal').removeClass('modo-claro'); 
    $('#bodyPrincipal').addClass('modo-escuro');
    $('#header').removeClass('modo-claro');
    $('#header').addClass('modo-escuro');
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

