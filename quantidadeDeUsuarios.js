import { getCSS } from "./comum.js";

async function quantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const infos = [
        {
            x:nomeDasRedes,
            y:quantidadeDeUsuarios,
            type: 'bar', 
            marker: {
                color: getCSS('--cor-secundaria')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title:{
            text:'Redes sociais com mais usuários no mundo',
            x: 0,
            font:{
                color: getCSS('--cor-primaria'),
                family: getCSS('--fonte'),
                size: 30
            }
        }
    }

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, infos, layout);

}

quantidadeDeUsuarios();