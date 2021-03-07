function executarSorteio() {
    ganhou = Math.round(Math.random() * 10)
    console.log(ganhou)
    chute = prompt("Escolhar um número de 0 a 10")




    sorteio = ganhou == chute

    if (sorteio) {
        paragrafoResultado.innerHTML = ` 
      <img src="https://i.pinimg.com/236x/06/5e/91/065e912c6cfb614a9de0f669de2fb5f2.jpg">
`
    }

    if (!sorteio) {
        paragrafoResultado.innerHTML = `
       <img src="https://i1.sndcdn.com/artworks-000133255147-3vc43e-t500x500.jpg">
`
    }

    if (chute < 0 || chute > 10) {
        paragrafoResultado.innerHTML = `Você digitou um número inválido, digite de 0 a 10`
    }


}