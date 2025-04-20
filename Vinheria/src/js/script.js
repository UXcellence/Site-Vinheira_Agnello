function verificarIdade(maior) {
  if (maior) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    alert("Você precisa ser maior de 18 anos para acessar este site.");
    window.location.href = "https://www.google.com";
  }
}
