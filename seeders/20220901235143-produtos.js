'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', 
      [
        {
          nome_prod:'Macbook Pro 2022',
          preco:500,
          desconto:3,
          categoria:'in-sale', 
          descricao:'Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD 13.3 Retina Display Apple Brand New Original. Importado dos EUA. Entregue com a fatura de compra para ter a garantia do fabricante.', 
          img:'img-macbook-pro-2019.jpg'
        },
        {
          nome_prod:'Samsung Galaxy S10',
          preco:72999,
          desconto:25,
          categoria:'in-sale', 
          descricao:'Experiência excepcional de visualização. Assista suas séries e filmes favoritos na melhor definição, com cores brilhantes e detalhes precisos em todo o seu conteúdo, e desfrute ainda mais do melhor entretenimento graças a sua tela grande e amplos ângulos de visão.', 
          img:'img-samsung-galaxy-s10.jpg'
        },
        {
          nome_prod:'Geladeira frost free Whirlpool WRM45A',
          preco:47900,
          desconto:10,
          categoria:'in-sale', 
          descricao:'Aproveite o frescor de sua comida e guarde-a de maneira prática e conveniente em seu refrigerador Whirlpool, o protagonista de sua cozinha. Seu sistema frost free evita a geração de gelo e lhe permitirá preservar o sabor e as propriedades nutricionais de seus produtos, enquanto seu freezer de 86 litros de capacidade facilitará a distribuição e a arrumação de seus alimentos congelados, para que você não tenha que se preocupar com a falta de espaço.', 
          img:'img-heladera-whirpool.jpg'
        },
        {
          nome_prod:'Nikon Reflex D3500 - Kit',
          preco:53000,
          desconto:20,
          categoria:'in-sale', 
          descricao:'Inclui a câmera D3500, a lente de zoom AF-P DX NIKKOR 18-55mm e a lente de zoom AF-P DX NIKKKOR 70-300mm super objetiva compacta. Ambas as lentes focalizam rápida e silenciosamente, tornando-as ideais para filmagens de vídeo com praticamente nenhum ruído de acionamento.', 
          img:'img-camara-nikon.jpg'
        },
        {
          nome_prod:'Ar Condicionado 3200w Frio / Calor',
          preco:20999,
          desconto:12,
          categoria:'in-sale', 
          descricao:'AIR SPLIT 3200W TACA-3200WCHSA/KC FC TCL. Capacidade fria 3200 Watts. Capacidade de aquecimento 3300 Watts. Potência elétrica (W) frio 996. Potência elétrica (W) calor 1028. Eficiência energética calor C. Eficiência energética frio A. Frigoríficos 2750 UNIDADE INDOOR. Peso bruto 10kg. Peso líquido 7 kg', 
          img:'img-aire-acondicionado.jpg'
        },
        {
          nome_prod:'Notebook Lenovo I3 Intel 8gb Ram',
          preco:36700,
          desconto:5,
          categoria:'in-sale', 
          descricao:'PROCESSADOR / CHIPSET. CPU: Intel Core i3(8ª geração) 8130U / 2,2 GHz. Velocidade máxima do turbo: 3, 4 GHz. Número de núcleos: Núcleo duplo. Cache: 4 MB. Arquitetura 64 bit: ss. MEMÓRIA CACHE. Capacidade instalada: 4 MB. ARMAZENAMENTO. Interface Serial ATA - 600', 
          img:'img-laptop-lenovo.jpg'
        },
        {
          nome_prod:'Apple iPhone 11 Pro Dual SIM 256 GB',
          preco:148000,
          desconto:2,
          categoria:'in-sale', 
          descricao:'O novo smartphone que tem tudo isso! Com este lançamento, a Apple quebrou todos os seus recordes. Seu design se destaca por suas linhas finas e distintas de uma única folha de vidro resistente, combinada com alumínio de excelente qualidade.', 
          img:'img-iphone-11.jpg'
        },
        {
          nome_prod:'Teclado Apple Magic Sem Fio',
          preco:11399,
          desconto:0,
          categoria:'visited', 
          descricao:'O Magic Keyboard combina um design elegante com uma bateria recarregável integrada e funções de chave aprimoradas. Com um mecanismo de tesoura estável sob cada chave, bem como um curso de chave otimizado e um perfil baixo, o Magic Keyboard oferece uma experiência de digitação notavelmente confortável e precisa.', 
          img:'img-apple-magic-keyboard.jpg'
        },
        {
          nome_prod:'Mouse Sem Fio Logitech M280',
          preco:1200,
          desconto:10,
          categoria:'visited', 
          descricao:'Uso mais confortável para a mão direita graças ao formato contornado com revestimento de borracha macia. A bateria dura até 18 meses, graças ao projeto de economia de energia. O M280 entra automaticamente em modo de repouso quando não está em uso.', 
          img:'img-mouse-logitech.jpg'
        },
      ], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
