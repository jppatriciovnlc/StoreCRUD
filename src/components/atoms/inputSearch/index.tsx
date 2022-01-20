import * as S from './styled';

const InputSearch = (props) => {   

    const handleOnChange = (value) => { 
        if(props.handleOnChange !== undefined){
            props.handleOnChange(value)
        }
        else{
            console.log('handleOnChange not found')
        }             
        
    }

    return(
        <S.Container>
            <S.Input
                placeholder='Pesquisar'
                onChange={(e) => handleOnChange(e.target.value)}
            />
        </S.Container>
    )
}
export default InputSearch