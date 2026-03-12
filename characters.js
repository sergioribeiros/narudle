const characters = [

    {
        name: "Naruto Uzumaki",
        genero: "Masculino",
        Vila: "Konoha",
        clan: "Uzumaki",
        elementos: ["Vento"],
        rank: "Genin",
        image: "silhouettes/naruto.webp"
    },

    {
        name: "Sasuke Uchiha",
        genero: "Masculino",
        Vila: "Konoha",
        clan: "Uchiha",
        elementos: ["Fogo", "Raio"],
        rank: "Genin",
        image: "silhouettes/sasuke.webp"
    },
    {
        name: "Itachi Uchiha",
        genero: "Masculino",
        Vila: "Nenhuma",
        clan: "Uchiha",
        elementos: ["Fogo", "Água", "Vento"],
        rank: "Genin",
        image: "silhouettes/itachi.webp"
    },
    {
        name: "Orochimaru",
        genero: "Masculino",
        Vila: "Nenhuma",
        clan: "Uchiha",
        elementos: ["Fogo", "Água", "Vento", "Raio", "Terra"],
        rank: "Genin",
        image: "silhouettes/orochimaru.webp"
    },
    {
        name: "Obito Uchiha",
        genero: "Masculino",
        Vila: "Nenhuma",
        clan: "Uchiha",
        elementos: ["Fogo"],
        rank: "Genin",
        image: "silhouettes/obito.webp"
    },

    {
        name: "Kakashi Hatake",
        genero: "Masculino",
        Vila: "Konoha",
        clan: "Hatake",
        elementos: ["Raio"],
        rank: "Jonin",
        image: "silhouettes/kakashi.webp"
    },

    {
        name: "Sakura Haruno",
        genero: "Feminino",
        vila: "Folha",
        clan: "Haruno",
        elementos: ["Terra", "Água"],
        rank: "Jounin",
        image: "silhouettes/sakura.webp"
    },
    {
        name: "Shikamaru Nara",
        genero: "Masculino",
        vila: "Folha",
        clan: "Nara",
        elementos: ["Fogo", "Terra"],
        rank: "Jounin",
        image: "silhouettes/shikamaru.webp"
    },
    {
        name: "Ino Yamanaka",
        genero: "Feminino",
        vila: "Folha",
        clan: "Yamanaka",
        elementos: ["Água", "Terra", "Fogo"],
        rank: "Jounin",
        image: "silhouettes/ino.webp"
    },
    {
        name: "Chouji Akimichi",
        genero: "Masculino",
        vila: "Folha",
        clan: "Akimichi",
        elementos: ["Terra", "Fogo"],
        rank: "Chuunin",
        image: "silhouettes/chouji.webp"
    },
    {
        name: "Neji Hyuga",
        genero: "Masculino",
        vila: "Folha",
        clan: "Hyuga",
        elementos: ["Fogo", "Água", "Vento"],
        rank: "Jounin",
        image: "silhouettes/neji.webp"
    },
    {
        name: "Tenten",
        genero: "Feminino",
        vila: "Folha",
        clan: "sem clan",
        elementos: [],
        rank: "Chuunin",
        image: "silhouettes/tenten.webp"
    },
    {
        name: "Hinata Hyuga",
        genero: "Feminino",
        vila: "Folha",
        clan: "Hyuga",
        elementos: ["Fogo", "Raio"],
        rank: "Chuunin",
        image: "silhouettes/hinata.webp"
    },
    {
        name: "Kiba Inuzuka",
        genero: "Masculino",
        vila: "Folha",
        clan: "Inuzuka",
        elementos: ["Raio"],
        rank: "Jounin",
        image: "silhouettes/kiba.webp"
    },
    {
        name: "Shino Aburame",
        genero: "Masculino",
        vila: "Folha",
        clan: "Aburame",
        elementos: ["Terra", "Fogo"],
        rank: "Jounin",
        image: "silhouettes/shino.webp"
    },
    {
        name: "Iruka Umino",
        genero: "Masculino",
        vila: "Folha",
        clan: "Umino",
        elementos: ["Água", "Fogo"],
        rank: "Chuunin",
        image: "silhouettes/iruka.webp"
    },
    {
        name: "Konohamaru Sarutobi",
        genero: "Masculino",
        vila: "Folha",
        clan: "Sarutobi",
        elementos: ["Fogo", "Raio", "Vento"],
        rank: "Jounin",
        image: "silhouettes/konohamaru.webp"
    },
    {
        name: "Might Guy",
        genero: "Masculino",
        vila: "Folha",
        clan: "Guy",
        elementos: ["Fogo", "Raio"],
        rank: "Jounin",
        image: "silhouettes/might.webp"
    },
    {
        name: "Asuma Sarutobi",
        genero: "Masculino",
        vila: "Folha",
        clan: "Sarutobi",
        elementos: ["Água", "Fogo", "Vento"],
        rank: "Jounin",
        image: "silhouettes/asuma.webp"
    },
    {
        name: "Kurenai Yuuhi",
        genero: "Feminino",
        vila: "Folha",
        clan: "Yuuhi",
        elementos: [],
        rank: "Jounin",
        image: "silhouettes/kurenai.webp"
    },
    {
        name: "Yamato",
        genero: "Masculino",
        vila: "Folha",
        clan: "sem clan",
        elementos: ["Água", "Terra"],
        rank: "Jounin",
        image: "silhouettes/yamato.webp"
    },
    {
        name: "Sai Yamanaka",
        genero: "Masculino",
        vila: "Folha",
        clan: "Yamanaka",
        elementos: ["Água", "Fogo", "Terra"],
        rank: "Anbu",
        image: "silhouettes/sai.webp"
    },
    {
        name: "Hashirama Senju",
        genero: "Masculino",
        vila: "Folha",
        clan: "Senju",
        elementos: ["Água", "Fogo", "Raio", "Terra", "Vento"],
        rank: "Kage",
        image: "silhouettes/hashirama.webp"
    },
    {
        name: "Tobirama Senju",
        genero: "Masculino",
        vila: "Folha",
        clan: "Senju",
        elementos: ["Água", "Fogo", "Raio", "Terra", "Vento"],
        rank: "Kage",
        image: "silhouettes/tobirama.webp"
    },
    {
        name: "Hiruzen Sarutobi",
        genero: "Masculino",
        vila: "Folha",
        clan: "Sarutobi",
        elementos: ["Água", "Fogo", "Raio", "Terra", "Vento"],
        rank: "Kage",
        image: "silhouettes/hiruzen.webp"
    },
    {
        name: "Minato Namikaze",
        genero: "Masculino",
        vila: "Folha",
        clan: "Namikaze",
        elementos: ["Fogo", "Raio", "Vento"],
        rank: "Kage",
        image: "silhouettes/minato.webp"
    },
    {
        name: "Tsunade Senju",
        genero: "Feminino",
        vila: "Folha",
        clan: "Senju",
        elementos: ["Água", "Fogo", "Raio", "Terra"],
        rank: "Kage",
        image: "silhouettes/tsunade.webp"
    }
];
