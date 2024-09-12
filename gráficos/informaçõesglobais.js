const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${ 7888000000 }</span> de pessoas e que aproximadamente <span>${ 5040000000 }</span> estão conectadas em alguma rede social e passam em média <span>${ 2.38 }</span> horas conectadas.`
console.log(paragrafo)
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)

    }

    visualizarInformacoesGlobais()