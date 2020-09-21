const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const pkg = require('./package.json');
const config = require("./config.json"); 


client.on('ready', () => {
    console.log(`O ${client.user.username} foi iniciado com sucesso! Com ${client.users.size} usuários, ${client.channels.size} canais e ${client.guilds.size} servidores.`);
    let status = [
        {name:`redeleasy.net`, type: 'PLAYING'},
        {name:`Rede Leasy!`, type: 'PLAYING'},
        {name:`.help`, type: 'PLAYING'},
        {name:`redeleasy.net`, type: 'PLAYING'},
        {name: `Eu amo a Rede Leasy`, type: 'WATCHING'},
        {name:`.help`, type: 'PLAYING'},
        {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
        {name:`By Glitch14`, type: 'STREAMING', url:'https://twitch.tv/glitch144'},
        {name:`redeleasy.net`, type: 'PLAYING'},
        {name: `Eu amo a Rede Leasy`, type: 'WATCHING'}
    ]
    function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({game: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(),5000)
});
client.on("message", async message => {

    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    if (!message.content.indexOf(config.prefix) == -1) return;
});



//dm
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();


	if (comando === "info") {
		
	let mcIP = "redeleasy.net";
	let mcPort = "25565"
		
	/*
	*
	*	Salve, Glitch14 :D
	*	Seguinte, na variavel mcIP vc coloca o ip do servidor.
	*	Se quiser mudar os textos e tal, você que sabe tlgd?
	*	Só não mexe na parada do JSON.parse(body), nem com o nome das variaveis pq nem eu saberia
	*   renomear tudo de novo...
	*
	*	Se puder colocar os créditos no comando de help ficaria agradecido :=D :thumbsup:
	*
	*/
	
		var request = require('request');
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Erro ao coletar informações do servidor...');
            }
            body = JSON.parse(body);
            var status = 'O servidor está offline';
            var eStatus = "Offline <:off:743337870634254399>"
            var colorStatus = "RED"
            if(body.online) {
                status = 'O servidor está online!  -  ';
                eStatus = "Online <:on:743339229089890354>"
                colorStatus = 'GREEN'
                if(body.players.now) {
                    status += '**' + body.players.now + '** players online jogando agora!';
                } else {
                    status += 'Ninguém está jogando atualmente';
                }
            }
            var e = new Discord.RichEmbed()
              .setTitle('<:corantevermelho:743190573430603789> Info do servidor <:corantevermelho:743190573430603789>')
              .setDescription('Informações da Rede Leasy <:Leasy:743192718980677725>\n\n' + '<:tempo:743339932105441321>' + ' │ Status: ' + eStatus + '\n' + '<:user:743339932172550156>' + ' │ Players Online: **' + body.players.now + '**\n' + '<:memoria:743339228800221275>' + ' │ IP: **' + mcIP + '**')
              .setFooter(message.author.username, message.author.displayAvatarURL)
              .setColor(colorStatus)
              .setTimestamp(new Date().now)
            message.channel.send(e)
              
        });
	}
  

    //help
    if(comando === "help") {
        let AvatarAuthorMessage = message.author.displayAvatarURL
        let usernameAuthorCommand = message.author.username
        const HelpMeCommand = await message.channel.send("Carregando...")
        let embed = new Discord.RichEmbed()
            .addField(`__Meu prefixo__: **${config.prefix}**\n`, `\n**Comandos Superficiais** 🔥\n\n**${config.prefix}**vida **-** **Para ver se o bot está On-Line.**\n**${config.prefix}**avatar **-** **Lhe enviará seu avatar.****\n**${config.prefix}**ip **-** **Lhe enviará o IP do servidor.**\n**${config.prefix}**servericon **-** **Lhe enviará a logo do server.**\n**${config.prefix}**piada **-** **Para tentar te fazer rir.**\n**${config.prefix}**sugerir **-** **Para enviar uma sugestão.**\n**${config.prefix}**teste **-** **Vê se o bot/servidor está ok.**\n**${config.prefix}**form **-** **Para ver o formulário.**\n**${config.prefix}**ping **-** **Checa a latência entre você e o Discord e o bot.**\n**${config.prefix}**convite **-** **Lhe envia o convite ilimitado do servidor.**\n\n:wink: **Comandos do Autor do bot (<@658479583141691393>)**`)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("A pedido de " + usernameAuthorCommand, AvatarAuthorMessage)
        .setAuthor("Lista de comandos")
        HelpMeCommand.edit(embed)
    }



    //comando de aviso
    if(comando === "anunciar") {
        if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
        return message.reply("Desculpe, você não tem permissão para usar isto!")
		if (args. length ===0){
		return message.reply("Use: `.anunciar [text]`")
        }
	let sugestao = args.join(" ");
	
	const embed22 = new Discord.RichEmbed()
	.setAuthor("🔔Um aviso foi enviado!🔔")
	.addField("Aviso:", "**"+sugestao+"**")
	.setColor("RANDOM")
	.setThumbnail(client.user.avatarURL)
	message.delete()  
	let bChannel = client.channels.get("738158463200264232").send(embed22).then(async msg => {

        await msg.react("🔔")
        await msg.react("741692340518912050")
        await msg.react("741692340518912050")


	})
    }





   //comando de enquete
   if(comando === "enquete") {
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!")
    if (args. length ===0){
    return message.reply("Use: `.enquete [text]`")
    }
let sugestao = args.join(" ");

const embed22 = new Discord.RichEmbed()
.setAuthor("💠 Uma enquete foi enviada! 💠")
.addField("Proposta:", "**"+sugestao+"**")
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
message.delete()  
let bChannel = client.channels.get("738158464492240947").send(embed22).then(async msg => {

    await msg.react("564156789977776132")
    await msg.react("743190573430603789")

})
}





    //comando de sugestão
    if(comando === "sugerir") {

		if (args. length ===0){
		return message.reply("Use: `.sugerir [text]`")
        }
    
	let sugestao = args.join(" ");
	
	const embed22 = new Discord.RichEmbed()
	.setAuthor("Uma sugestão foi enviada")
	.addField("Enviada por:", message.author)
	.addField("Sugestão:", "**"+sugestao+"**")
	.setColor("RANDOM")
	.setThumbnail(client.user.avatarURL)
	
	message.delete()  
	let bChannel = client.channels.get("698659139701964800").send(embed22).then(async msg => {

	    await msg.react("564156789977776132")
        await msg.react("743190573430603789")

	})
    }
      




 //comando ping
 if (comando === "ping") {
    const m = await message.channel.send("Ping?");
    let embed = new Discord.RichEmbed()
        .addField("             🏓 Pong\n\n", ` <:user:743339932172550156> O seu Ping é: ${m.createdTimestamp - message.createdTimestamp}ms. \n \n <:memoria:743339228800221275> O Ping do BOT é: **${Math.round(client.ping)}ms**.`)
    .setColor(message.guild.me.highestRole.color)
    m.edit(embed);
    message.delete()

}




//teste
if (comando === "teste") {
    let embed = new Discord.RichEmbed()
        .addField("Ok, vamos verificar. <:grfico:743337870835843082>",`**Discord sem bugs!💖**`)
.setColor(message.guild.me.highestRole.color)
.setAuthor("")
.setFooter(message.author.username, message.author.displayAvatarURL)
message.channel.send(embed);
        message.delete()
};




//comando say
if (comando === "say") {
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage);
  
}
if (comando === "falar") {
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage);
  
}



//comando limpar
if (comando === "limpar") {
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 10000000000000000000000000000)
        return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)
    
    message.delete()
}
if (comando === "clean") {
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 10000000000000000000000000000)
        return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)
    
    message.delete()
}



 //formulário
 if (comando === "form") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("<:forms:743339932591980544> Formulário. <:forms:743339932591980544>", `**Aqui está! --> https://forms.gle/BbYJQQcBtTgzX7DJ7** <:Leasy:743192718980677725>`)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
    message.delete()
}
if (comando === "formulario") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("<:forms:743339932591980544> Formulário. <:forms:743339932591980544>", `**Aqui está! --> https://forms.gle/BbYJQQcBtTgzX7DJ7** <:Leasy:743192718980677725>`)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
    message.delete()
}

//loja
if (comando === "loja") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("<:Dinheiro:743337870441316416> Nossa loja. <:Dinheiro:743337870441316416>", `**Aqui está! --> https://redeleasy.net** <:Leasy:743192718980677725>`)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
    message.delete()
}
if (comando === "site") {
    let usernameAuthorCommand = message.author.username
    let AvatarAuthorMessage = message.author.displayAvatarURL
    let embed = new Discord.RichEmbed()
        .addField("<:Dinheiro:743337870441316416> Nossa loja. <:Dinheiro:743337870441316416>", `**Aqui está! --> https://redeleasy.net** <:Leasy:743192718980677725>`)
        .setColor(message.guild.me.highestRole.color)
        .setFooter("Comando feito por " + usernameAuthorCommand, AvatarAuthorMessage)
    message.channel.send(embed)
    message.delete()
}



        //convite
    if (comando === "convite") {
            let usernameAuthorCommand = message.author.username
            let AvatarAuthorMessage = message.author.displayAvatarURL
            let embed = new Discord.RichEmbed()
                .addField("<:Discord:743337871162736681> Convite do Discord! <:Discord:743337871162736681>", `**Aqui está! -->** https://discord.gg/7un67rX <:Leasy:743192718980677725>`)
                .setColor(message.guild.me.highestRole.color)
                .setFooter("Comando pedido por " + usernameAuthorCommand, AvatarAuthorMessage)
            message.channel.send(embed)
            message.delete()
        }
    if (comando === "invite") {
        let usernameAuthorCommand = message.author.username
        let AvatarAuthorMessage = message.author.displayAvatarURL
        let embed = new Discord.RichEmbed()
            .addField("<:Discord:743337871162736681> Convite do Discord! <:Discord:743337871162736681>", `**Aqui está! -->** https://discord.gg/7un67rX <:Leasy:743192718980677725>`)
            .setColor(message.guild.me.highestRole.color)
            .setFooter("Comando pedido por " + usernameAuthorCommand, AvatarAuthorMessage)
        message.channel.send(embed)
        message.delete()
    }



      //ip
    if (comando === "ip") {
        let usernameAuthorCommand = message.author.username
        let AvatarAuthorMessage = message.author.displayAvatarURL
        let embed = new Discord.RichEmbed()
            .addField("<:Leasy:743192718980677725> Ip do servidor! <:picareta:741692340518912050>", `**Aqui está! -->** RedeLeasy.net <:Leasy:743192718980677725>`)
            .setColor(message.guild.me.highestRole.color)
            .setFooter("Comando pedido por " + usernameAuthorCommand, AvatarAuthorMessage)
        message.channel.send(embed)
        message.delete()
    }


             //vida
    if (comando === "vida") {
        embed = new Discord.RichEmbed()
          .addField("<:sopa:741692341508767794> Online <:sopa:741692341508767794>", "Estou vivo! \n Se não estivesse, bom... não responderia.");
        message.channel.send(embed);
        message.delete()

    }
    //membros
    if(comando === "membros") {
        embed = new Discord.RichEmbed()
        .addField( "**<:user:743339932172550156> Membros no server**", `Existem **${client.users.size}** membros no servidor neste momento!`);
    message.channel.send(embed);
    message.delete()
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
        
        
        }  
    };
    //kick
if (comando === "kick") {
    //adicione o nome dos cargos que vc quer que use esse comando!
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
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
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
        return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if (!member)
        return message.reply("Por favor mencione um membro válido deste servidor.");
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
    message.channel.send(embed);
        message.delete()
}

//f5
if (comando === "f5") {
    if (!message.member.roles.some(r =>"CEO, Gerente".includes(r.name)))
    message.channel.setTopic(`:diamond_shape_with_a_dot_inside:  ${client.users.size} players no servidor! :diamond_shape_with_a_dot_inside: `)
        .then(updated => console.log(`O tópico do canal foi atualizado pra '${updated.topic}'`))
        .catch(console.error);
}

  
  if (comando === "avatar") {
    let memberAvatar = message.mentions.members.first() || message.member  
    let embed = new Discord.RichEmbed()
    .addField(`:frame_photo: Aqui está o avatar`,`**Clique [AQUI](${memberAvatar.user.avatarURL}) para baixar**`)
    .setImage(memberAvatar.user.displayAvatarURL)
    .setColor('RED')
    .setFooter(`Avatar solicitado por ${message.author.username}`, message.author.displayAvatarURL)
      message.channel.send(embed)
  }
  if (comando === "servericon") {
    let memberAvatar = message.mentions.members.first() || message.member  
    let embed = new Discord.RichEmbed()
    .addField(`:frame_photo: Aqui está a logo`,`**Clique [AQUI](${message.guild.iconURL}) para baixar**`)
    .setImage(message.guild.iconURL)
    .setColor('RED')
    .setFooter(`Logo solicitada por ${message.author.username}`, message.author.displayAvatarURL)
      message.channel.send(embed)
  }
    });

client.login(config.Token)  
