function func_fechar() {
    window.close();
}
function func_ajuda() {
    alert("Essa é uma janela de ajuda");
}

var quantidade_de_labels_temp = 0;
var grafico_temp;
var dados_temp;

function func_plot_temp() 
{
    if(flag_plot_temp==0) //cria o grafico pela primeira vez
    {
        flag_plot_temp=1;
        console.log("TESTEEEEEEE");
        dados_temp =
        {
            type: 'line',
            data:
            {
                labels: [],
                datasets:
                    [
                        {
                            label: 'Dados de Temperatura',
                            borderColor: 'rgba(0,0,255,0.8)',
                            data: []
                        }
                    ]
            }
        };
        grafico_temp = new Chart(document.getElementById('plot1'), dados_temp);

    }

}




function func_plot_temp2(x_label, meu_dado_recebido) 
{
    if (dados_temp.data.labels.length >= 100)
    {
        dados_temp.data.labels.shift(); //apaga o primeiro.... mantem apenas 20 temperaturas
        dados_temp.data.datasets[0].data.shift(); //apaga o primeiro... mantem apenas 20 temperaturas
    }
    dados_temp.data.labels.push(x_label);
    dados_temp.data.datasets[0].data.push(meu_dado_recebido);
    grafico_temp.update();
}
