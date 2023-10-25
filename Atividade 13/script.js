function abrirJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./imgs/janelaaberta.png')";
    document.getElementById('estado').textContent = "Janela aberta";
  }

  function fecharJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./imgs/janelafechada.png')";
    document.getElementById('estado').textContent = "Janela fechada";
  }

  function quebrarJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./imgs/janelaquebra.png')";
    document.getElementById('estado').textContent = "Janela quebrada";
  }