import { useEffect, useState } from 'react';
import { ProgressBar } from '../../atoms';
import * as S from './styled';



const TableDashboard = (props) => {

    interface Iitem {
        name?: string,
        value?: string,
        actual?: string,
        total?: string,
    
    }

    const [items, setItems] = useState <Iitem[]>([])

    useEffect(() => {        
        if(props.items !== undefined) {            
            setItems(() =>  [...props.items])
        }
    },[props])

    
    return(
        <S.Container>
            <S.Table>
                <S.THead>
                    <S.TR>
                        <S.TH>Produtos Vendidos</S.TH>
                        <S.TH> Clientes</S.TH>
                        <S.TH>Valor</S.TH>
                        <S.TH>Total estoque</S.TH>
                    </S.TR>
                </S.THead>
                <S.TBody>
                    {items.map((item, index) => {
                        return(
                            <S.TR key={index}>
                                <S.TD padding='20px' width='50%'>{item.name}</S.TD>
                                <S.TD>image</S.TD>
                                <S.TD>{item.value}</S.TD>
                                <S.TD>
                                    <ProgressBar
                                        actual={item.actual}
                                        total={item.total}
                                    />
                                </S.TD>
                            </S.TR>
                        )
                        
                    })}                    
                </S.TBody>
            </S.Table>
        </S.Container>
    )
}

export default TableDashboard;