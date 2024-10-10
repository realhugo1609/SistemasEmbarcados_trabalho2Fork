const fs = require('fs');
var flag_plot_temp=0;
var flag_plot_batim=0;
var flag_plot_oxig=0;
var flag_salva_tbo=0;
var x_temp = 0;
var x_batim = 0;
var x_oxig = 0;
const { SerialPort, ReadlineParser }= require('serialport')
const port = new SerialPort({path:'COM7',baudRate: 115200})
const parser = port.pipe(new ReadlineParser())
parser.on('data', (line) =>
{
    var dado_recebido = line.split(':'); //amostra:temp:umid:dist
    
    console.log(dado_recebido);

    if(flag_plot_temp==1)
    {

        func_plot_temp2(x_temp,dado_recebido[0]);
        x_temp++;
    }

    if(flag_plot_batim==1)
    {

        func_plot_batim2(x_batim,dado_recebido[1]);
        x_batim++;
    }

    if(flag_plot_oxig==1)
    {

        func_plot_oxig2(x_oxig,dado_recebido[2]);
        x_oxig++;
    }

    if(flag_salva_tbo==1)
    {
        let d = new Date();
        let n = d.toLocaleTimeString();
        fs.appendFileSync("temperatura.txt",n + " - Temp: " + dado_recebido[0]+ "ºC Batim: " + dado_recebido[1]+ " bpm Oxig:" + dado_recebido[2] + '\n');
        
    }

});

