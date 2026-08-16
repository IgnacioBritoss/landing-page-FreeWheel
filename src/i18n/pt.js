// ============================================================================
//  pt.js — Portugués (de Brasil)
// ----------------------------------------------------------------------------
//  Traducción de es.js. Se eligió el portugués de Brasil y no el de Portugal
//  porque el turismo que llega a Buenos Aires es brasileño: "carro" y no
//  "carro alugado à portuguesa", "celular" y no "telemóvel", el tratamiento en
//  "você".
// ============================================================================

export default {
  meta: {
    title: "Freewheel — Alugue o carro de um vizinho. Ou ganhe com o seu.",
    description:
      "A Freewheel é a plataforma argentina de aluguel de carros entre pessoas: identidade verificada, calendário real de disponibilidade, entrega com código, chat com áudios e suporte em cinco idiomas.",
  },

  nav: {
    links: ["Como funciona", "Plataforma", "Confiança", "Para donos", "Perguntas"],
    home: "Freewheel, voltar ao início",
    sections: "Seções da página",
    toLight: "Mudar para o modo claro",
    toDark: "Mudar para o modo escuro",
    light: "Modo claro",
    dark: "Modo escuro",
    language: "Idioma",
    languageOf: "Ver a página em",
    cta: "Abrir a Freewheel",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
  },

  hero: {
    kicker: "Aluguel de carros entre pessoas · Argentina",
    titleLines: ["O carro que você precisa", "está a três quadras"],
    lead:
      "Alugue o carro de alguém do seu bairro pelos dias em que realmente precisa dele, ou faça o seu trabalhar nos dias em que fica parado. Os dois lados verificam a identidade antes de começar, e a entrega fica registrada.",
    scrollHint: "Continue descendo",
    flag: "Argentina",
  },

  statement: {
    text: "Emprestar o carro para um desconhecido não é um problema de tecnologia. É um problema de confiança. Tudo o que está aqui embaixo existe para resolver isso.",
    highlight: ["confiança"],
  },

  journey: {
    label: "Como funciona",
    titleLines: ["Sem balcão, sem fila", "e sem depósito de garantia"],
    steps: [
      {
        title: "Você cria sua conta em cinco minutos",
        text: "Preenche seus dados, confirma o e-mail e fotografa o documento e a habilitação. A revisão é na hora, e se alguma foto saiu tremida você fica sabendo na mesma hora, em vez de esperar dois dias para descobrir que precisa repetir.",
        aside: "Você faz isso uma vez só. Depois reserva em dois toques.",
      },
      {
        title: "Você encontra o carro que serve para você",
        text: "Busca perto de você, marca os dias em que precisa dele e vê apenas os carros que estão livres nessas datas. Filtra por tamanho, câmbio automático ou manual, combustível e até quanto quer gastar por dia.",
        aside: "Você nunca vai mandar mensagem para alguém só para ouvir que justo nesses dias não dá.",
      },
      {
        title: "Você reserva e combinam a entrega",
        text: "O pagamento é feito pelo aplicativo e abre um chat com o dono para combinar onde e a que horas. Dá para mandar um áudio enquanto dirige ou uma foto da esquina onde vai esperar.",
        aside: "O pagamento acontece antes de vocês se verem, então ninguém precisa andar com dinheiro.",
      },
      {
        title: "Vocês entregam o carro com um código",
        text: "Na hora da entrega, um mostra o código na tela e o outro confirma. Fica registrado quem entregou, quem recebeu e a que horas. Na devolução, o mesmo ao contrário.",
        aside: "Se depois aparecer um desacordo, existe um registro com hora, e não a palavra de um contra a do outro.",
      },
    ],
  },

  platform: {
    label: "A plataforma",
    title: "Tudo o que fizemos para você poder confiar",
    lead:
      "Emprestar o carro ou dirigir o de outra pessoa dá um frio na barriga. Cada uma destas oito coisas tira um desses receios do caminho.",
    items: [
      {
        title: "Ninguém entra sem dizer quem é",
        text: "Para anunciar ou para reservar é preciso enviar o documento e a habilitação. Revisamos antes de liberar a conta. Quem vai alugar o seu carro passou exatamente pelo mesmo que você.",
      },
      {
        title: "As fotos são do carro que você vai receber",
        text: "Cada imagem publicada é revisada antes de entrar no ar. Não passam fotos baixadas da internet nem de outro modelo: o que você vê no anúncio é o carro que vão te entregar.",
      },
      {
        title: "Anunciar leva um minuto",
        text: "Você informa marca, modelo e ano, e a ficha se completa sozinha: porta-malas, portas, potência, consumo. Não precisa procurar o manual do carro para preencher quinze campos.",
      },
      {
        title: "Seu carro só é alugado quando você quer",
        text: "Marca os dias em que vai usá-lo e eles somem do calendário. Ninguém pode reservar o fim de semana em que você vai para a praia.",
      },
      {
        title: "Tudo se combina pelo chat, sem dar seu telefone",
        text: "Mensagens, fotos, arquivos e áudios dentro do aplicativo. Os áudios são transcritos, então você pode ler no ônibus sem fone de ouvido.",
      },
      {
        title: "Se algo der errado, tem para quem avisar",
        text: "Você pode denunciar um anúncio ou uma pessoa anexando a prova. Cada caso é revisado por alguém da equipe, e as contas que não deveriam estar aqui são desativadas.",
      },
      {
        title: "Você sabe com quem está tratando",
        text: "Cada pessoa carrega as avaliações dos aluguéis concluídos e um nível conquistado com o tempo. Platina não se compra: são trinta aluguéis com quase cinco estrelas de média.",
      },
      {
        title: "Funciona igual se você não fala espanhol",
        text: "O aplicativo inteiro está em espanhol, inglês, português, italiano e chinês. Um turista se verifica, reserva e combina a entrega no seu idioma.",
      },
    ],
  },

  ai: {
    label: "Inteligência artificial",
    title: "Tiramos a parte chata das suas costas",
    lead:
      "Anunciar um carro em outro lugar são quinze minutos preenchendo campos que você não sabe de cor. Aqui você informa marca, modelo e ano, e o resto sai sozinho. O mesmo com os documentos: revisamos na hora em vez de fazer você esperar dois dias.",
    barTitle: "Freewheel · assistente",
    barState: "em andamento",
    input: "Entrada",
    output: "Resposta",
    typing: "digitando",
    uses: [
      {
        label: "Completar a ficha técnica",
        prompt: "Toyota Corolla 2021",
        output: [
          "Porta-malas 371 litros",
          "Portas 4",
          "Potência 122 cv",
          "Consumo misto 6.8 l/100km",
          "Tração dianteira",
        ],
        note: "Você informa marca, modelo e ano. O resto se completa sozinho, e o que não bater você corrige.",
      },
      {
        label: "Revisar as fotos do carro",
        prompt: "4 imagens enviadas",
        output: [
          "Imagem 1 · veículo detectado",
          "Imagem 2 · veículo detectado",
          "Imagem 3 · nenhum veículo reconhecido",
          "Imagem 4 · veículo detectado",
        ],
        note: "Cada foto é revisada antes de ir ao ar. O que você vê no anúncio é o carro que vão te entregar.",
      },
      {
        label: "Verificar o documento",
        prompt: "Frente do documento",
        output: [
          "Tipo de documento correto",
          "Nome legível",
          "Número legível",
          "Dentro da validade",
        ],
        note: "Revisamos o documento e a habilitação na hora e avisamos ali mesmo se a foto precisa ser refeita.",
      },
      {
        label: "Responder dúvidas",
        prompt: "Como cancelo uma reserva?",
        output: [
          "Entre em Minhas reservas",
          "Abra a reserva que quer cancelar",
          "Toque em Cancelar e escolha o motivo",
          "O dono recebe o aviso na hora",
        ],
        note: "Um assistente em todas as telas, que conhece a sua reserva, a qualquer hora.",
      },
    ],
  },

  trust: {
    label: "Confiança",
    title: "Do outro lado tem alguém com nome, sobrenome e histórico",
    lead:
      "Você não está deixando o carro com um usuário anônimo. É uma pessoa que mostrou o documento, a habilitação e tudo o que já fez na plataforma.",
    kycTitle: "Verificação de identidade",
    kycNote: "Quatro passos que cada pessoa cumpre antes de poder usar a Freewheel.",
    kyc: [
      ["Confirma o e-mail", "Um código de seis dígitos. Sem isso, não entra."],
      ["Mostra o documento", "Frente e verso. Conferimos se é o documento e se está válido."],
      ["Mostra a habilitação", "Sem habilitação em dia não dirige o seu carro. Ponto."],
      ["Alguém revisa", "Se uma foto não dá para ler, pedimos de novo antes de liberar a conta."],
    ],
    kycFoot:
      "Seu endereço não é publicado. Quem olha o seu carro vê o bairro; a esquina exata só aparece quando a reserva está paga.",
    tiersTitle: "Níveis por avaliações reais",
    tiersNote: "O nível não se compra nem se acelera:",
    tiersNoteEm: "conquista-se alugando bem",
    tiers: [
      { name: "Bronze", req: "o primeiro aluguel concluído" },
      { name: "Prata", req: "5 aluguéis, 4 estrelas ou mais" },
      { name: "Ouro", req: "15 aluguéis, média 4.5" },
      { name: "Platina", req: "30 aluguéis, quase cinco estrelas" },
    ],
    tiersFoot:
      "Se alguém está começando agora, a gente avisa: você não vai ver cinco estrelas numa conta criada ontem.",
  },

  showcase: {
    label: "Como é",
    title: "Veja como é por dentro",
    lead: "Não são rascunhos: é o aplicativo funcionando. Mexa no mapa, ouça o áudio, abra o perfil.",
    blocks: [
      {
        title: "Você se verifica em um minuto, não em três dias",
        text: "Você fotografa o documento e dizemos ali mesmo se está bom. Nada de mandar um e-mail e esperar alguém olhar na segunda-feira. E se saiu tremida, você repete na hora.",
      },
      {
        title: "Encontre um na esquina da sua casa",
        text: "Cada ponto é um carro disponível. Você vê o bairro onde ele está, não a porta do dono: o endereço exato aparece quando a reserva já está feita. É a mesma privacidade que você vai querer quando anunciar o seu.",
      },
      {
        title: "Combinem a entrega sem dar o telefone",
        text: "Tudo acontece dentro do aplicativo: mensagens, fotos do estado do carro e áudios transcritos para ler no ônibus. E tocando no nome você vê quem é a outra pessoa antes de encontrá-la.",
      },
    ],

    scan: {
      country: "REPÚBLICA ARGENTINA",
      kind: "DOC",
      fields: ["Sobrenome e nome", "Documento", "Validade"],
      checks: [
        "Tipo de documento correto",
        "Nome legível",
        "Número legível",
        "Dentro da validade",
      ],
    },

    map: {
      approx: "(região aprox.)",
      perDay: "/dia",
    },

    chat: {
      messages: [
        { body: "Oi! Sim, está disponível nesses dias." },
        { body: "Ótimo. Onde eu retiro?" },
        { transcript: "Na esquina de Godoy Cruz com Santa Fe, a uma quadra do metrô. Te espero às dez." },
        { caption: "Estado atual do carro" },
        { body: "Perfeito, nos vemos lá. Obrigado!" },
      ],
      placeholder: "Escreva uma mensagem...",
      send: "Enviar",
      typing: "digitando",
      transcript: "Transcrição",
      play: "Reproduzir o áudio",
      pause: "Pausar o áudio",
      sent: "Enviado",
      delivered: "Entregue",
      read: "Lido",
    },

    profile: {
      open: "Perfil",
      close: "Fechar",
      closeScrim: "Fechar o perfil",
      since: "Na Freewheel desde março de 2026",
      verified: "Identidade verificada",
      ratings: "Avaliações",
      asOwner: "Como dono:",
      trips: "aluguéis concluídos",
      reviewsTitle: "Avaliações recebidas",
      stars: "de 5 estrelas",
      reviews: [
        {
          role: "Como dona do carro",
          date: "12 de março de 2026",
          body: "Pontual, cuidadoso e devolveu o carro com o tanque cheio. Queria que todos alugassem assim.",
        },
        {
          role: "Como dono do carro",
          date: "28 de fevereiro de 2026",
          body: "Avisou cada coisa pelo chat e combinou a entrega sem nenhuma volta. Um luxo.",
        },
        {
          role: "Como dona do carro",
          date: "9 de fevereiro de 2026",
          body: "Segunda vez que alugo para ele. Devolve o carro impecável e sempre no horário.",
        },
      ],
    },
  },

  preview: {
    label: "O aplicativo",
    title: "Quatro telas, um só percurso",
    screens: [
      { label: "Buscar", title: "Para onde você vai?" },
      { label: "Ficha do carro", title: "Toyota Corolla 2021" },
      { label: "Reserva", title: "Escolha as datas" },
      { label: "Entrega", title: "Retirada do veículo" },
    ],
    tabs: ["Início", "Buscar", "Reservas", "Perfil"],
    search: {
      rows: [
        ["Onde", "Palermo, Buenos Aires"],
        ["Retirada", "18 mar"],
        ["Devolução", "21 mar"],
      ],
      button: "Buscar carros",
      results: [
        ["Toyota Corolla 2021", "$8.500", "Palermo · 4.8"],
        ["Volkswagen T-Cross 2022", "$12.000", "Belgrano · 4.6"],
      ],
    },
    detail: {
      specs: [
        ["Porta-malas", "371 L"],
        ["Portas", "4"],
        ["Potência", "122 cv"],
        ["Consumo", "6.8 L"],
      ],
      owner: "Roberto O.",
      ownerMeta: "Nível ouro · identidade verificada",
      note: "O endereço exato aparece quando a reserva está confirmada.",
    },
    booking: {
      picked: "Escolhidos",
      taken: "Ocupados",
      total: "$8.500 × 3 dias",
      totalValue: "$25.500",
      button: "Confirmar reserva",
    },
    qr: {
      alt: "Código QR que abre",
      steps: ["Pagamento confirmado", "Carro pronto para retirada", "Retirada confirmada"],
    },
  },

  earnings: {
    label: "Para donos",
    title: "Seu carro perde dinheiro todo dia em que você não o usa",
    lead:
      "Seguro, imposto e garagem custam o mesmo esteja ele na rua ou na sua vaga. Anunciar é grátis, você escolhe em que dias ele fica disponível, e quem aluga mostrou documento e habilitação antes de poder reservar.",
    points: [
      ["Você nunca fica sem carro", "Bloqueia os dias em que precisa dele e ninguém pode reservar."],
      ["Você sabe quem vai dirigir", "Vê o nome, as avaliações e o nível antes de aceitar."],
      ["Você recebe sem correr atrás de ninguém", "O pagamento entra junto com a reserva, antes de entregar as chaves."],
    ],
    calcTitle: "Quanto você poderia ganhar?",
    calcSub: "Arraste e veja o número.",
    type: "Tipo de carro",
    categories: ["Hatch", "Sedã", "SUV", "Premium"],
    daysLabel: "Dias alugado por mês",
    result: "Fica para você por mês",
    day: "dia",
    days: "dias",
    fee: "Comissão Freewheel",
    note: "Estimativa orientativa. O preço final é você quem define ao anunciar.",
  },

  languages: {
    label: "Idiomas",
    title: "Um turista pode alugar um carro aqui",
    text:
      "O aplicativo está traduzido de ponta a ponta em cinco idiomas: cada tela, cada aviso e cada mensagem de erro. Quem chega de fora se verifica, reserva e combina a entrega sem precisar entender uma palavra de espanhol.",
    list: "Idiomas",
    demoLabel: "Tela inicial",
  },

  faq: {
    label: "Perguntas",
    title: "O que você certamente está se perguntando",
    lead:
      "E se ficar alguma dúvida, dentro do aplicativo tem um assistente que responde a qualquer hora.",
    items: [
      {
        q: "O que preciso para alugar?",
        a: "Ter mais de 18 anos, habilitação válida e uma forma de pagamento. Você envia a habilitação e o documento uma vez só, quando cria a conta; a partir daí reserva em dois toques.",
      },
      {
        q: "Como sei que posso confiar?",
        a: "Porque ela passou pelo mesmo que você: sem documento e habilitação aprovados não dá para anunciar nem para reservar. Além disso você vê as avaliações dos aluguéis concluídos e o nível dela, que se conquista com o tempo e não se compra.",
      },
      {
        q: "E se aparecer um amassado?",
        a: "A entrega e a devolução ficam registradas com um código de cada parte, com data e hora. Na hora dá para tirar fotos pelo chat, e qualquer um dos dois pode abrir uma denúncia anexando essa prova. Não fica na palavra de um contra a do outro.",
      },
      {
        q: "Posso usar quando quiser?",
        a: "É seu, então sim. Marca os dias em que vai usá-lo e eles somem do calendário: ninguém pode reservar nesses dias. Você anuncia quando quer e tira do ar quando quer.",
      },
      {
        q: "Quanto dá para ganhar?",
        a: "Depende do modelo, do estado e de quantos dias por mês você o deixa disponível. Mais acima nesta página tem uma calculadora para ter uma ideia do seu caso. Anunciar não custa nada: a Freewheel cobra comissão só quando alguém aluga de você.",
      },
      {
        q: "E se der algum problema?",
        a: "Você tem o chat com a outra pessoa e um assistente dentro do aplicativo que responde a qualquer hora. E se o problema for sério, a denúncia chega a alguém da equipe que revisa.",
      },
    ],
  },

  close: {
    titleLines: ["Tem um carro livre", "a três quadras da sua casa"],
    cta: "Abrir a Freewheel",
    note:
      "Criar a conta é grátis e não pede cartão. Você verifica sua identidade uma vez só e já pode reservar, ou anunciar o seu e começar a receber pelos dias em que não o usa.",
    tagline: "Aluguel de carros entre pessoas. Feito na Argentina.",
    footerNav: "Links do rodapé",
    columns: [
      {
        title: "Como funciona",
        links: ["O percurso completo", "A plataforma", "O aplicativo por dentro"],
      },
      {
        title: "Confiança",
        links: ["Verificação de identidade", "Avaliações e níveis", "Perguntas frequentes"],
      },
      {
        title: "Para donos",
        links: ["Quanto você pode ganhar", "Como anunciar", "Idiomas disponíveis"],
      },
    ],
    bottom: "Aluguel de carros entre pessoas · Argentina",
  },
};
