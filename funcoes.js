function func_fechar() {
    window.close();
}
function func_ajuda() {
    alert("Esta é uma janela de Ajuda, Clique no botão para realizar o seu plot!\nCertifique-se que o microcontrolador está a porta COM8");

}

var quantidade_de_labels_temp = 0;
var grafico_temp;
var grafico_batim;
var grafico_oxig;
var dados_temp;
var dados_batim;
var dados_oxig;

function func_plot_temp() 
{
    if(flag_plot_temp==0) //cria o grafico pela primeira vez
    {
        flag_plot_temp=1;
        dados_temp =
        {
            type: 'line',
            data:
            {
                labels: [],
                datasets:
                    [
                        {
                            tension: 0.1,
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
function func_plot_batim() 
{
    if(flag_plot_batim==0) //cria o grafico pela primeira vez
    {
        flag_plot_batim=1;
        dados_batim =
        {
            type: 'line',
            data:
            {
                labels: [],
                datasets:
                    [
                        {
                            tension: 0.1,
                            label: 'Dados de Batimentos',
                            borderColor: 'rgba(0,0,255,0.8)',
                            data: []
                        }
                    ]
            }
        };
        grafico_batim = new Chart(document.getElementById('plot2'), dados_batim);
    }
}
function func_plot_oxig() 
{
    if(flag_plot_oxig==0) //cria o grafico pela primeira vez
    {
        flag_plot_oxig=1;
        dados_oxig =
        {
            type: 'line',
            data:
            {
                labels: [],
                datasets:
                    [
                        {
                            tension: 0.1,
                            label: 'Dados de Oxigenação',
                            borderColor: 'rgba(0,0,255,0.8)',
                            data: []
                        }
                    ]
            }
        };
        grafico_oxig = new Chart(document.getElementById('plot3'), dados_oxig);
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
function func_plot_batim2(x_label, meu_dado_recebido) 
{
    if (dados_batim.data.labels.length >= 10)
    {
        dados_batim.data.labels.shift(); //apaga o primeiro.... mantem apenas 20 temperaturas
        dados_batim.data.datasets[0].data.shift(); //apaga o primeiro... mantem apenas 20 temperaturas
    }
    dados_batim.data.labels.push(x_label);
    dados_batim.data.datasets[0].data.push(meu_dado_recebido);
    grafico_batim.update();
}
function func_plot_oxig2(x_label, meu_dado_recebido) 
{
    if (dados_oxig.data.labels.length >= 10)
    {
        dados_oxig.data.labels.shift(); //apaga o primeiro.... mantem apenas 20 temperaturas
        dados_oxig.data.datasets[0].data.shift(); //apaga o primeiro... mantem apenas 20 temperaturas
    }
    dados_oxig.data.labels.push(x_label);
    dados_oxig.data.datasets[0].data.push(meu_dado_recebido);
    grafico_oxig.update();
}

function muda_flag_salvar()
{
    if(flag_salva_tbo==0) flag_salva_tbo = 1;
    else flag_salva_tbo = 0;
}