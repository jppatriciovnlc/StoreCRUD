import * as S from './styled';

const GeneralTable = (props) => {

    return(
        <S.Container>
            <S.Header>
                Produtos
            </S.Header>
            <S.TableContainer>
                <S.Table>
                    <S.THead>
                        <S.TR>
                            <S.TH>produtos</S.TH>
                            <S.TH>categoria</S.TH>
                            <S.TH>status</S.TH>
                            <S.TH>cadastrado em</S.TH>
                            <S.TH>ação</S.TH>
                        </S.TR>
                    </S.THead>
                    <S.TBody>
                        <S.TR>
                            <S.TD width='50%'>Tênis Nike</S.TD>
                            <S.TD>calçados</S.TD>
                            <S.TD>Ativo</S.TD>
                            <S.TD>23/04/21</S.TD>
                            <S.TD>Editar</S.TD>
                        </S.TR>
                        <S.TR>
                            <S.TD>Tênis Nike</S.TD>
                            <S.TD>calçados</S.TD>
                            <S.TD>Ativo</S.TD>
                            <S.TD>23/04/21</S.TD>
                            <S.TD>Editar</S.TD>
                        </S.TR>
                    </S.TBody>
                </S.Table>
            </S.TableContainer>
        </S.Container>
    )
}

export default GeneralTable;