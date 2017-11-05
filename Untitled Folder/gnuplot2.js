var plot = require('plotter').plot;
plot({
    data:[ 3, 1, 2, 3, 4 ],
    filename:'output.pdf',
    style:'linespoints',
    title:'Example \'Title\', \\n runs onto multiple lines',
    logscale:true,
    xlabel:'time',
    ylabel:'length of string',
    format:'pdf'
});
