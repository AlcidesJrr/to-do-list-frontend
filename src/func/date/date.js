import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DateF =  {
     funcDate: (dt) => {
        const today = new Date(dt);
        const formattedDate = format(today, 'yyyy-MM-dd', { locale: ptBR });
        const dataFormatada = formattedDate;
        return dataFormatada
    },

    funcDateView: (dt) => {
        const today = new Date(dt);
        console.log(dt)
        const formattedDate = format(today, 'PP', { locale: ptBR });
        const dataFormatada = formattedDate;
        console.log(dataFormatada)
        return dataFormatada
    },

    funDateEst: () => {
        const today = new Date();
        const formattedDate = format(today, 'PPPP', { locale: ptBR });
        const dataFormatada = formattedDate.toUpperCase();
        return dataFormatada
    }
}

export default DateF

