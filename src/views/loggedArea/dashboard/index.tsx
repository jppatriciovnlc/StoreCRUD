import { CardDashboard, TableDashboard } from '../../../components/molecules';
import * as S from './styled'
import { MdPersonAdd, MdLeaderboard, MdStore, MdWeekend, MdMoreVert, MdCheck} from 'react-icons/md'

const Dashboard = (props) => {

    let items = [
        {
            name: 'camiseta nike',
            value: 'R$ 200,00',
            actual: '3',
            total: '10',
        },
        {
            name: 'camiseta rebook',
            value: 'R$ 200,00',
            actual: '6',
            total: '10',
        },
        {
            name: 'tênis Adidas',
            value: 'R$ 200,00',
            actual: '10',
            total: '10',
        }
    ]
    
    return(
        <S.Container>
            <S.CardsContainer>
               <CardDashboard
                    color1='#3e3e45'
                    color2='#1e1e1f'
                    icon={<MdWeekend/>}
                    title='Estoque'
                    value='281'
                    extra='+55% produtos novos'
                    
               />
               <CardDashboard
                    color1='#449ef0'
                    color2='#217ae9'
                    icon={<MdLeaderboard/>}
                    title='vendas'
                    value='R$2,300'
                    extra='+3% do último mês'
               />
               <CardDashboard
                    color1='#61b765'
                    color2='#47a34c'
                    icon={<MdStore/>}
                    title='Usuários'
                    value='34'
                    extra='+1% esta semana'
               />
               <CardDashboard
                    color1='#e93c77'
                    color2='#da1f62'
                    icon={<MdPersonAdd/>}
                    title='Seguidores'
                    value='+91'
                    extra='total este ano'
               />

            </S.CardsContainer>
            <S.TableContainer>
                <S.Header>
                    <S.Block1>
                        <S.Title>Vendas</S.Title>
                        <S.SubTitle>
                            <S.IconCheck>
                                <MdCheck/>
                            </S.IconCheck>
                            30 vendidos este mês
                        </S.SubTitle>
                    </S.Block1>
                    <S.IconMore>
                        <MdMoreVert/>
                    </S.IconMore>
                </S.Header>
                <TableDashboard items={items}/>
            </S.TableContainer>
        </S.Container>
    )
}

export default Dashboard;