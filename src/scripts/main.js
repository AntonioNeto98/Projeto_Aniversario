const dataAteAniversario = new Date ("Jun 10, 2024 20:00:00");
const timeStampAni = dataAteAniversario.getTime();

const contaDias = setInterval (function() {
    const agora =new Date ();
    const timeStampAgora = agora.getTime();

    const distaAteAniversario = timeStampAni - timeStampAgora;

    const diasAteAniver = 1000 * 60 * 60 * 24;
    const horasAteAniver = 1000 * 60 * 60;
    const minutosAteAniver = 1000 * 60;

    const diasAteEvento = Math.floor(distaAteAniversario / (diasAteAniver));
    const horasAteEvento = Math.floor((distaAteAniversario% diasAteAniver) / horasAteAniver);
    const minutosAteEvento = Math.floor((distaAteAniversario % horasAteAniver) / minutosAteAniver);
    const segundosAteEvento = Math.floor((distaAteAniversario % minutosAteAniver) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distaAteAniversario < 0 ) {
        clearInterval (contaDias);

        document.getElementById('contador').innerHTML = `Aiversário já passou`;
    }
}, 1000);