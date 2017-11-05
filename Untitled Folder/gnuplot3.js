var gnuplot = require('gnuplot');

var x= [1,3,2,4,2,5,6];
gnuplot()
    .setgrid()
    .set('term png')
    .set('output "out1.png"')
    .set('title "exaple graph"')
    .set('xrange [-10:10]')
    .set('yrange [-6:6]')
    .set('zeroaxis')
    .plot(f(x))
    .end();
