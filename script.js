let numeroJoao = 5511955303539
let numeroCarlos = 5511972541477

function abrirWhatsApp() {
    const telefone = '5511955303539'; // Substitua pelo número da barbearia
    const mensagem = 'Olá! Gostaria de agendar um horário na Barbearia Estilo Fino.';
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
