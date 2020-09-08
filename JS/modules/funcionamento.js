export default function initFuncionamento(){

    const fuincionamento = document.querySelector('[data-semana]');
    const diasSemana = fuincionamento.dataset.semana.split(',').map(Number)
    const horarioSemana = fuincionamento.dataset.horario.split(',').map(Number)

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

    if(semanaAberto && horarioAberto){
        fuincionamento.classList.add('aberto');
    }

} 


