const express = require( 'express');
const app = express();

app.use(express.json());

const usuarios = {};

const funcoes = {
  UsuarioCriado: (usuario) =>{
    usuarios[usuario.id] =  usuario;
  },

  UsuarioLogado: (dados) =>{
    const {email, senha} = dados;
    const usuario = Object.values(usuarios).find(u => u.email === email && u.senha === senha);
    if(usuario){
      usuario.logado =  true;
      return true;
    }
    return false
  
  }
};

app.get("/usuarios", (req, res) => {
  res.status(200).send(usuarios)
})

app.post("/usuarios", (req, res) =>  {
  const usuario = req.body;
  usuarios[usuario.id] = usuario;
  res.status(201).send(usuario)

});

app.post("/eventos", (req, res) =>{
  const{tipo, dados} = req.body;
  console.log(`Evento Recebido: ${tipo}`, dados);

  if(funcoes[tipo]){
  const resultado = funcoes[tipo](dados)
  if(tipo==="UsuarioLogado" && !resultado){
    return res.status(200).send({mensagem: 'Login realizado com sucesso'})
  }
}else{
  return res.status(400).send({mensagem: 'Tipo evendo desconhecido '});

}
res.status(200).send(usuarios);



  }
);

app.use((err, req, res, next) =>{
  console.error(err.stack);
  res.status(500).send('Erro interno de servidor');

});

app.listen(5000, ()=>{
  console.log("Servidor executando na porta 5000")
});

