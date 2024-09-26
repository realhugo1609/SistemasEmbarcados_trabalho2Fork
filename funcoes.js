function func_fechar() {
    window.close();
}
function func_ajuda() {
    alert("Essa é uma janela de ajuda");
}


function func_plot_temp() 
{
    const dados_temp =
    {
        type: 'line',
        data:
        {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            datasets:
                [
                    {
                        label: 'Dados de Temperatura',
                        borderColor: 'rgba(0,0,255,0.8)',
                        data: [45, 34, 78, 23, 89, 54, 32, 78, 12, 72]
                    }
                ]
        }
    };
    const grafico_temp = new Chart(document.getElementById('plot1'), dados_temp);
    grafico_temp.update();
}