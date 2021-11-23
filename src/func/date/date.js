import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DateF =  {
     funcDate: (dt) => {
        const today = new Date(dt);
        const formattedDate = format(today, 'yyyy-MM-dd', { locale: ptBR });
        const dataFormatada = formattedDate;
        return dataFormatada
    },

    funDateEst: () => {
        const today = new Date();
        const formattedDate = format(today, 'PPPP', { locale: ptBR });
        const dataFormatada = formattedDate.toUpperCase();
        return dataFormatada
    },

    funDateExt: (dt) => {
    const meses = [
            'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez',
        ];
        let data = new Date(dt);
        let dataFormatada = data.getDate() + ' ' + meses[data.getMonth()] +' ' +data.getFullYear();
        return dataFormatada
    }

}

export default DateF

