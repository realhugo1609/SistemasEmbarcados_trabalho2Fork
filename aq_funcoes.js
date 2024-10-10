const fs = require('fs');
var flag_plot_temp=0;
var flag_salva_temp=0;
var x_temp = 0;
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

    if(flag_salva_temp==1)
    {
        fs.appendFileSync("temperatura.txt",dado_recebido[1]+'\n');
    }

});