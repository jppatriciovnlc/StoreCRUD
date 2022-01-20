import { useEffect, useState } from 'react';
import * as S from './styled';

const ProgressBar = (props) => {

    
    const [ percent, setPercent] = useState(0);
    const [ color, setColor ] = useState('#e63672')

    useEffect(() => {
        if(props.actual !== undefined  && props.total !== undefined){
            let auxTotal = parseInt(props.total)
            let auxActual = parseInt(props.actual)
            if(auxTotal > 0  && auxActual >= 0){
               
                let auxPercent = auxActual*100/auxTotal;
                setPercent(auxPercent);
                if(auxPercent < 50){
                    setColor('#e63672');
                }
                else if(auxPercent >= 50 && auxPercent <100){
                    setColor('#3991ee');
                }
                else {
                    setColor('#4ea851');
                }
            }
        }
        else{

        }
    },[props])



    return(
        <S.Container>
            <S.OuterBar>
                <S.InnerBar 
                    width={`${percent}%`}
                    color={color}
                />
            </S.OuterBar>
        </S.Container>
    )
}

export default ProgressBar;