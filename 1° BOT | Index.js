const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.\nAutor do bot: Glitch#5584 !`);
    client.user.setPresence({game : {name: `${config.prefix}help`} });
   
});

client.on("guildCreate", guild => {

    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);

});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});


client.on("message", async message => {

    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    if (!message.content.indexOf(config.prefix) == -1) return;


    //help
    if(comando === "help") {
        let AvatarAuthorMessage = message.author.displayAvatarURL
        let usernameAuthorCommand = message.author.username
        const HelpMeCommand = await message.channel.send("Carregando...")
        let embed = new Discord.RichEmbed()
            .addField(`__Meu prefixo__: **${config.prefix}**`, `**Comandos Superficiais** 🔥\n**${config.prefix}**bio**-**Para ver a Biografia do Glitch14.\n**${config.prefix}**life**-**Para ver se o bot está On-Line.\n**${config.prefix}**mchead**-**Irá aparecer sua cabeça do Minecraft.\n**${config.prefix}**piada**-**Para tentar te fazer rir.\n**${config.prefix}**teste**-**Vê se o bot/servidor está ok.\n**${config.prefix}**canal**-** Para ver o canal do Glitch.\n**${config.prefix}**instagram**-** Para ver o instagram do Glitch.\n**${config.prefix}**facebook**-** Para ver o Facebook do Glitch.\n**${config.prefix}**Quiz**-** Faz perguntas sobre o dono.\n**${config.prefix}**ping **-** Checa a latência entre você e o Discord e o bot.\n**${config.prefix}**sugestão **-** cria uma sugestão do seu jeito.\n**${config.prefix}**convite **-** te manda o convite ilimitado do servidor.\n**Comandos de Administração** <:oncoming_police_car:580192702734270475>.\n**${config.prefix}**say**-**Repete oque você disse.\n**${config.prefix}**limpar**-**Limpa o Chat.\n**${config.prefix}**kick **-** expulsa um membro do servidor.\n**${config.prefix}**ban **-** expulsa permanentemente do servidor, a não ser que seja desbanido.\n\n :wink: **Comandos do Autor do bot (<@570423563572477972>)**`)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("A pedido de " + usernameAuthorCommand, AvatarAuthorMessage)
        .setAuthor("Lista de comandos")
        HelpMeCommand.edit(embed)
    }
    
//cargos
client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "631291178461167678") return

    let servidor = client.guilds.get("630903802677166090")
    let membro = servidor.members.get(dados.d.user_id)

    let Cargo1 = servidor.roles.get('630968195359965194'),
    Cargo2 = servidor.roles.get('631284509945364491'),
    Cargo3 = servidor.roles.get('631287477545599009'),
    Cargo4 = servidor.roles.get('631287479101554690'),
    Cargo5 = servidor.roles.get('631288469632712705'),
    Cargo6 = servidor.roles.get('631288469276065820'),
    Cargo7 = servidor.roles.get('631289483601379331'),
    Cargo8 = servidor.roles.get('631289340483600385'),
    Cargo9 = servidor.roles.get('631289571539157003'),
    Cargo10 = servidor.roles.get('631289574882017302'),
    Cargo11 = servidor.roles.get('631289775923396638'),
    Cargo12 = servidor.roles.get('631290015942574092')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "631281098571251733"){
            if(membro.roles.has(Cargo1)) return
            membro.addRole(Cargo1)
        }else if(dados.d.emoji.name === "🚺"){
            if(membro.roles.has(Cargo2)) return
            membro.addRole(Cargo2)
        }else if(dados.d.emoji.name === "🚹"){
            if(membro.roles.has(Cargo3)) return
            membro.addRole(Cargo3)
            if(dados.d.emoji.name === "👷"){
                if(membro.roles.has(Cargo4)) return
                membro.addRole(Cargo4)
            }else if(dados.d.emoji.name === "👷"){
                if(membro.roles.has(Cargo5)) return
                membro.addRole(Cargo5)
            }else if(dados.d.emoji.name === "🎒"){
                if(membro.roles.has(Cargo6)) return
                membro.addRole(Cargo6)
                if(dados.d.emoji.name === "🔞"){
                    if(membro.roles.has(Cargo7)) return
                    membro.addRole(Cargo7)
                }else if(dados.d.emoji.name === "💯"){
                    if(membro.roles.has(Cargo8)) return
                    membro.addRole(Cargo8)
                }else if(dados.d.emoji.name === "💖"){
                    if(membro.roles.has(Cargo9)) return
                    membro.addRole(Cargo9)
                    if(dados.d.emoji.name === "💔"){
                        if(membro.roles.has(Cargo10)) return
                        membro.addRoleCargo(Cargo10)
                    }else if(dados.d.emoji.name === ":flag_br:"){
                        if(membro.roles.has(Cargo11)) return
                        membro.addRole(Cargo11)
                    }else if(dados.d.emoji.name === ":flag_pt:"){
                        if(membro.roles.has(Cargo12)) return
                        membro.addRole(Cargo12)
                    }
               
                }
            }
        }

    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "631281098571251733"){
            if(membro.roles.has(Cargo1)) return
            membro.removeRole(Cargo1)
        }else if(dados.d.emoji.name === "🚺"){
            if(membro.roles.has(Cargo2)) return
            membro.removeRole(Cargo2)
        }else if(dados.d.emoji.name === "🚹"){
            if(membro.roles.has(Cargo3)) return
            membro.removeRole(Cargo3)
            if(dados.d.emoji.name === "👷"){
                if(membro.roles.has(Cargo4)) return
                membro.removeRole(Cargo4)
            }else if(dados.d.emoji.name === "😎"){
                if(membro.roles.has(Cargo5)) return
                membro.removeRole(Cargo5)
            }else if(dados.d.emoji.name === "🎒"){
                if(membro.roles.has(Cargo6)) return
                membro.removeRole(Cargo6)
                if(dados.d.emoji.name === "🔞"){
                    if(membro.roles.has(Cargo7)) return
                    membro.removeRole(Cargo7)
                }else if(dados.d.emoji.name === "💯"){
                    if(membro.roles.has(Cargo8)) return
                    membro.removeRole(Cargo18)
                }else if(dados.d.emoji.name === "💖"){
                    if(membro.roles.has(Cargo9)) return
                    membro.removeRole(Cargo9)
                    if(dados.d.emoji.name === "💔"){
                        if(membro.roles.has(Cargo10)) return
                        membro.removeRole(Cargo10)
                    }else if(dados.d.emoji.name === ":flag_br:"){
                        if(membro.roles.has(Cargo11)) return
                        membro.removeRole(Cargo11)
                    }else if(dados.d.emoji.name === ":flag_pt:"){
                        if(membro.roles.has(Cargo12)) return
                        membro.removeRole(Cargo12)
                    }
               
                }
            }
        }

    }

})
	//comando de sugestão
    if(comando === "sugestao") {

		if (args. length ===0){
		return message.reply("Use: `$sugestão [text]`")
        }
    
	let sugestao = args.join(" ");
	
	const embed22 = new Discord.RichEmbed()
	.setAuthor("Uma sugestão foi enviada")
	.addField("Enviada por:", message.author)
	.addField("Sugestão:", "`"+sugestao+"`")
	.setColor("RANDOM")
	.setThumbnail(client.user.avatarURL)
	
	message.delete()  
	let bChannel = client.channels.get("630959973748441088").send(embed22).then(async msg => {

		await msg.react("✅")
		await msg.react("❌")

	})
	}
    //comando de sugestão
    if(comando === "sugestão") {

		if (args. length ===0){
		return message.reply("Use: `$sugestão [text]`")
        }
    
	let sugestao = args.join(" ");
	
	const embed22 = new Discord.RichEmbed()
	.setAuthor("Uma sugestão foi enviada")
	.addField("Enviada por:", message.author)
	.addField("Sugestão:", "`"+sugestao+"`")
	.setColor("RANDOM")
	.setThumbnail(client.user.avatarURL)
	
	message.delete()  
	let bChannel = client.channels.get("630959973748441088").send(embed22).then(async msg => {

		await msg.react("✅")
		await msg.react("❌")

	})
	}
    
    
//comando de enquete
if(comando === "enquete") {
    if (!message.member.roles.some(r =>"「🔥」CEO".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」CEE".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Diretor".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Gerente".includes(r.name)))
    if (!message.member.roles.some(r =>"570423563572477972".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!")
    if (args. length ===0){
    return message.reply("Use: `!enquete [text]`")
    }

let sugestao = args.join(" ");

const embed22 = new Discord.RichEmbed()
.setAuthor("Uma enquete foi enviada") 
.addField("Enviada por:", message.author) 
.addField("Enquete:", "`"+sugestao+"`")
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)

message.delete()  
let bChannel = client.channels.get("657077826515632138").send(embed22).then(async msg => {

    await msg.react("✅")
    await msg.react("❌")

})
}

   //ping
if (comando === "ping") {
    const m = await message.channel.send("Ping?");
    let embed = new Discord.RichEmbed()
        .addField("🏓Pong\n", ` 🖥️ O seu Ping é: ${m.createdTimestamp - message.createdTimestamp}ms. \n \n 💻O Ping do bot é: ${Math.round(client.ping)}ms.`)
    .setColor(message.guild.me.highestRole.color)
    m.edit(embed);
    message.delete()

}
//comando falar
if (comando === "say") {
    if (!message.member.roles.some(r =>"「🔥」CEO".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」CEE".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Diretor".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage);
  
}

//comando limpar
if (comando === "limpar") {
    if (!message.member.roles.some(r =>"「🔥」CEO".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」CEE".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Diretor".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 10000000000000000000000000000)
        return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)
    
    message.delete()
}
   
        //convite
    if (comando === "invite") {
        let usernameAuthorCommand = message.author.username
        let AvatarAuthorMessage = message.author.displayAvatarURL
        let embed = new Discord.RichEmbed()
            .addField("Server invite!\n", `Copie e cole em caso de divulgação --> :diamond_shape_with_a_dot_inside: https://discord.gg/xVv3YwF :diamond_shape_with_a_dot_inside: `)
            .setColor(message.guild.me.highestRole.color)
            .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
        message.channel.send(embed)
        message.delete()
        message.delete()
    }
    if (comando === "convite") {
        let usernameAuthorCommand = message.author.username
        let AvatarAuthorMessage = message.author.displayAvatarURL
        let embed = new Discord.RichEmbed()
            .addField("Server invite!", `Copie e cole em caso de divulgação --> :diamond_shape_with_a_dot_inside:  https://discord.gg/xVv3YwF :diamond_shape_with_a_dot_inside: `)
            .setColor(message.guild.me.highestRole.color)
            .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
        message.channel.send(embed)
        message.delete()
    }
      
             //vida
    if (comando === "life") {
        embed = new Discord.RichEmbed()
          .addField(":diamond_shape_with_a_dot_inside: Online :diamond_shape_with_a_dot_inside:", "Estou vivo! Se não estivesse, bom... não responderia.");
        message.channel.send(embed);
        message.delete()
    }
    //membros
    if(comando === "membros") {
        embed = new Discord.RichEmbed()
        .addField( "**💠Membros no server💠**\n", ` \n🔔 Existem ${client.users.size} membros no servidor neste momento!`);
    message.channel.send(embed);
    message.delete()
    }
    //quiz
    if (comando === "quiz") {

        let EmbedCase1QuizCommand = new Discord.RichEmbed().addField("Quiz!", `Qual o programa que o <@395970217290760192>usa para programar?`).setColor(message.guild.me.highestRole.color)
        let EmbedCase2QuizCommand = new Discord.RichEmbed().addField("Quiz!", `Qual o estilo de programação que o <@395970217290760192> usa?`).setColor(message.guild.me.highestRole.color)
        let EmbedCase3QuizCommand = new Discord.RichEmbed().addField("Quiz", `Qual o livro mais interessante que o <@395970217290760192> já leu?`).setColor(message.guild.me.highestRole.color)
        let EmbedCase4QuizCommand = new Discord.RichEmbed().addField("Quiz", `Qual é a músicas que mais marcou a vida de <@395970217290760192>`).setColor(message.guild.me.highestRole.color)
        let EmbedCase5QuizCommand = new Discord.RichEmbed().addField("Quiz!", `Qual é a bedida favorita de <@395970217290760192>?`).setColor(message.guild.me.highestRole.color)
        number = 2
        let random = Math.floor (Math.random() * (number - 1 + 1 + 1 + 1 + 1) + 1)
        switch (random) {
            case 1: message.channel.send(EmbedCase1QuizCommand); quizAnswer = "Visual Studio Code"; break;
            case 2: message.channel.send(EmbedCase2QuizCommand); quizAnswer = "JavaScript"; break;
            case 3: message.channel.send(EmbedCase3QuizCommand); quizAnswer = "Dom Quixote"; break;
            case 4: message.channel.send(EmbedCase4QuizCommand); quizAnswer = "Natural"; break;
            case 5: message.channel.send(EmbedCase5QuizCommand); quizAnswer = "Guarana"; break;
        };
        respondido = false;
        
    }
   //piada
   if (comando === "piada") {

    let EmbedCase1QuizCommand = new Discord.RichEmbed().addField("Piada!", `Na delegacia:\n– Seu delegado meu marido saiu de casa ontem a noite, disse que ia comprar arroz e até agora não voltou. O que eu faço doutor?\n– Sei lá, faz macarrão!!
    \n`).setColor(message.guild.me.highestRole.color)
    let EmbedCase2QuizCommand = new Discord.RichEmbed().addField("Piada!", `Sabe como é a piada do pintinho caipira?\n Pir. `).setColor(message.guild.me.highestRole.color)
    let EmbedCase3QuizCommand = new Discord.RichEmbed().addField("Piada!", `O que o pagodeiro foi fazer na igreja?\n Foi cantar Pá GOD.`).setColor(message.guild.me.highestRole.color)
    let EmbedCase4QuizCommand = new Discord.RichEmbed().addField("Piada", `Você conhece a piada do Poney?\n Pô nei EU.`).setColor(message.guild.me.highestRole.color)
    let EmbedCase5QuizCommand = new Discord.RichEmbed().addField("Piada", `Qual é a fórmula da água benta?\n H DEUS O.`).setColor(message.guild.me.highestRole.color)
    
    number = 2
    let random = Math.floor (Math.random() * (number - 1 + 1 + 1 + 1 + 1) + 1)
    switch (random) {
        case 1: message.channel.send(EmbedCase1QuizCommand); quizAnswer = "Sei lá, faz macarrão!!"; break;
        case 2: message.channel.send(EmbedCase2QuizCommand); quizAnswer = "Pir"; break;
        case 3: message.channel.send(EmbedCase3QuizCommand); quizAnswer = "Foi cantar Pá GOD"; break;
        case 4: message.channel.send(EmbedCase4QuizCommand); quizAnswer = "Pô nei EU"; break;
        case 5: message.channel.send(EmbedCase5QuizCommand); quizAnswer = "H DEUS O"; break;
       
    };
    
    
}
//bio
if(comando === "bio") {
    const DarkBioCommand = await message.channel.send("Loading Script Bio Information...")
    DarkBioCommand.edit(`...`)
    let embed = new Discord.RichEmbed()
    .addField("Biografia", `O nome dele é Allan, fã de Orochi e um pouco tímido. **RESPEITA ELE, ELE É MEU CRIADOR...**:heart:`)
    .setColor(message.guild.me.highestRole.color)
    DarkBioCommand.edit(embed);
    message.delete()
};
//mchead
if(comando === "mchead") {

    if(!skin){
                message.reply("Use o formato ``$mchead <nick>``")
                return
            }
    
            let anuncioembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField("Skin de:", `**${skin}**`)
            .setImage('minotar.net/cube/' + `${skin}`)
            .setFooter(`Skin Solicitada Por ${message.author.tag}`)
            .setTimestamp();
    
            message.channel.send(anuncioembed)
    }

//kick
if (comando === "kick") {
    //adicione o nome dos cargos que vc quer que use esse comando!
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")
    if (!message.member.roles.some(r =>"「🔥」CEO".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」CEE".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Diretor".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Gerente".includes(r.name)))
        return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.reply("Por favor mencione um membro válido deste servidor");
    if (!member.kickable)
        return message.reply("Eu não posso expulsar este usuário! Eles tem um cargo mais alto ou eu não tenho permissões de expulsar?");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Nenhuma razão fornecida";

    await member.kick(reason)
        .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
    message.reply(`${member.user.tag} foi kickado por ${message.author.tag} \nMotivo: ${reason}`);
    message.channel.send(embed);
    message.delete()
}

//comando de ban

if (comando === "ban") {

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")
    if (!message.member.roles.some(r =>"「🔥」CEO".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」CEE".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Diretor".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Gerente".includes(r.name)))
        return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if (!member)
        return message.reply("Por favor mencione um membro válido deste servidor");
    if (!member.bannable)
        return message.reply("Eu não posso banir este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de banir?");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Nenhuma razão fornecida";
    await member.ban(reason)
        .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o : ${error}`));
    message.reply(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`);
    message.channel.send(embed);
    message.delete()
}
//version
if (comando === "version") {

    let embed = new Discord.RichEmbed()
        .setTitle("Instalação feita com êxito!🔹")
        .setColor(message.guild.me.highestRole.color)
    message.channel.send(embed)
    message.channel.send(embed);
        message.delete()
}
//f5
if (comando === "f5") {
    if (!message.member.roles.some(r =>"「🔥」CEO".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」CEE".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Diretor".includes(r.name)))
    if (!message.member.roles.some(r =>"「🔥」Gerente".includes(r.name)))
    message.channel.setTopic(`:diamond_shape_with_a_dot_inside:  ${client.users.size} players no servidor! :diamond_shape_with_a_dot_inside: `)
        .then(updated => console.log(`O tópico do canal foi atualizado pra '${updated.topic}'`))
        .catch(console.error);
}

//teste
if (comando === "teste") {
    let embed = new Discord.RichEmbed()
        .addField("Teste", `🔔 Apenas um teste, para ver se não tem bug nenhum. 🔔 \n `)
.setColor(message.guild.me.highestRole.color)
.setAuthor("")
.setFooter(message.author.username, message.author.displayAvatarURL)
message.channel.send(embed);
message.channel.send(embed);
        message.delete()
};


if(message.tts) {
    let embed = new Discord.RichEmbed()
        .addField(':oncoming_police_car:', '**Se o ver <@395970217290760192>**')
        .setFooter('ta ferrado...')
    message.channel.send(embed)
}

//canal
if (comando === "canal") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("Canal!", `Link do canal do Glitch --> :diamond_shape_with_a_dot_inside: https://www.youtube.com/channel/UC8z4pn_IGKtLr3sepcUmh9g?view_as=subscriber :diamond_shape_with_a_dot_inside: `)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
}
//instagram
if (comando === "instagram") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("Intagram!", `Me segue la no meu Intagram nenem qual foi--> :diamond_shape_with_a_dot_inside: https://www.instagram.com/glitchs14/ :diamond_shape_with_a_dot_inside: `)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
}

//Facebook
if (comando === "facebook") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("Facebook!", `Me segue la no meu Facebook nenem qual foi--> :diamond_shape_with_a_dot_inside: https://www.facebook.com/allans.costa.94 :diamond_shape_with_a_dot_inside: `)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
}  
//quiz
if (respondido === false) {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    userAnswer = message.content;
    if (quizAnswer === userAnswer) {
        embed = new Discord.RichEmbed().addField("Correto!", `Resposta correta!`).setColor(message.guild.me.highestRole.color).setFooter("Vencedor -->  " + usernameAuthorCommand, AvatarAuthorMessage);
        message.channel.send(embed)
    }else {
        embed = new Discord.RichEmbed()
            .addField("Errado!", `Resposta incorreta!:(`)
            .setColor(message.guild.me.highestRole.color)
            .setFooter("Perdedor -->  " + usernameAuthorCommand, AvatarAuthorMessage);
        message.channel.send(embed)
    }
    respondido = true;
    quizAnswer = "VisualStudio";
    userAnswer = "VisualStudio";
}
//entrada e saída
client.on("guildMemberAdd", member => {
    let embed = new Discord.RichEmbed()
    .addField("Seja bem-vindo ao servidor :5999_DancingCockroach:", `${member}`)
    .setColor("RANDOM")
    member.guild.channels.get('630957853074522112').send(embed)
    member.addRole('642869525225799680')
  })

});

client.login(config.Token)
