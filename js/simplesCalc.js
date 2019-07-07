var attachement = 1;

var twelveRevenues;

var revenuesAttc1 = {
    // revenues: 2545.50,
    // revenusMono: 3000,
    // revenuesSt: 6000.54,
    // revenuesStandMono: 4877.56,
}

var revenuesAttc3 = {
    revenues: 2545.50,
    revenuesRetention: 3000,
}

function getFatAccumulated() {
    twelveRevenues = document.getElementById( "FatAcumulado" ).value;  
    return twelveRevenues;
}

function getReveneusAttchI() {
    revenuesAttc1 = {
        revenues: document.getElementById( "Vendas" ).value, 
        revenusMono: document.getElementById( "VendasMono" ).value, 
        revenuesSt: document.getElementById( "VendasSubst" ).value, 
        revenuesStandMono: document.getElementById( "VendasSubstMono" ).value
    }
    return revenuesAttc1
}

function getReveneusAttchIII() {
    var revenuesAttc3 = {
        revenues: 0,
        revenuesRetention: 3000,
    }
    return revenuesAttc3
}

const tradeBandsAttch1 = {
    firstBand:  [  4.00,      0, 5.50, 3.50, 12.74, 2.76, 41.50, 34.00 ],
    secondBand: [  7.30,   5940, 5.50, 3.50, 12.74, 2.76, 41.50, 34.00 ],
    thirdBand:  [  9.50,  13860, 5.50, 3.50, 12.74, 2.76, 42.00, 33.50 ],
    fourthBand: [ 10.70,  22500, 5.50, 3.50, 12.74, 2.76, 42.00, 33.50 ],
    fifthBand:  [ 14.30,  87300, 5.50, 3.50, 12.74, 2.76, 42.00, 33.50 ],
    sixthBand:  [ 19.00, 378000, 5.50, 3.50, 12.74, 2.76, 42.00, 33.50 ]
}

const tradeBandsAttch3 = {
    firstBand:  [ 6.00,      0, 43.40,	33.50,  3.50,  4.00, 12.82, 2.78 ],
    secondBand: [11.20,   9360, 43.40,	32.00,  3.50,  4.00, 14.05, 3.05 ],
    thirdBand:  [13.50,  17640, 43.40,	32.50,  3.50,  4.00, 13.64, 2.96 ],
    fourthBand: [16.00,  35640, 43.40,	32.50,  3.50,  4.00, 13.64, 2.96 ],
    fifthBand:  [21.00, 125640, 43.40,	32.50,  3.50,  4.00, 12.82, 2.78 ],
    sixthBand:  [33.00, 648000, 30.50,	 0.00, 15.00, 16.03, 16.03, 3.47 ]
}

function findBand() {
    var twelRev = twelveRevenues;
    var band;
    if( twelRev <= 180000 ) {
        band = 'firstBand'
    } else if( twelRev <= 360000 ) {
        band = 'secondBand'
    } else if( twelRev <=  720000 ){
        band = 'thirdBand'
    } else if( twelRev <= 1800000 ) {
        band = 'fourthBand'
    } else if( twelRev <= 3600000 ) {
        band = 'fifthBand'
    } else if( twelRev <= 4800000 ) {
        band = 'sixthBand'
    }
    if ( attachement == 1 ) {
        return tradeBandsAttch1[band];
    } else if ( attachement == 3) {
        return tradeBandsAttch3[band]
    }
}

function effectiveRate() {
    var band = findBand();
    var aliquot = ( ( ( twelveRevenues * ( band[0] / 100 ) ) - band[1] ) / twelveRevenues );
    return aliquot;
}

function othersRateAtt1() {
    var band = findBand()
    var aliquot = effectiveRate();
    var aliquotMono = aliquot - ( ( aliquot * ( band[4] + band[5] ) / 100) ) ;
    var aliquotSt = aliquot - ( ( aliquot * ( band[7] / 100) ) );
    var aliquotStMono = aliquot - ( ( aliquot * ( ( band[4] + band[5] + band[7] ) / 100) ) );
    return [ aliquot.toFixed(4), aliquotMono.toFixed(4), aliquotSt.toFixed(4), aliquotStMono.toFixed(4) ];
}

function othersRateAtt3() {
    var band = findBand()
    var aliquot = effectiveRate();
    var revenuesRetention = aliquot - ( ( aliquot * ( band[3] ) / 100) ) ;
    return [ aliquot.toFixed(4), revenuesRetention.toFixed(4) ];
}

function calculateSimples() {
    var aliquots;
    var simples = 1;
    if ( attachement == 1 ) {
        var aliquots = othersRateAtt1();
        console.log(aliquots)
        console.log( revenuesAttc1.revenues )
        var simples = ( revenuesAttc1.revenues * aliquots[0] ) +
                      ( revenuesAttc1.revenusMono * aliquots[1] ) +
                      ( revenuesAttc1.revenuesSt * aliquots[2] ) +
                      ( revenuesAttc1.revenuesStandMono * aliquots[3] );
    } else if ( attachement == 3 ) {
        var aliquots = othersRateAtt3();
        console.log(aliquots)
        var simples = ( revenuesAttc3.revenues * aliquots[0] ) +
                      ( revenuesAttc3.revenuesRetention * aliquots[1] )
    }
    return simples.toFixed(2);
}

function showResults() {
    twelveRevenues = getFatAccumulated()
    if ( attachement = 1) {
        revenuesAttc1 = getReveneusAttchI()
    } else {
        revenuesAttc3 = getReveneusAttchIII()
    }
    
    console.log(calculateSimples());
}





