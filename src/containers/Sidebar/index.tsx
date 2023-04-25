import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Oliveira</Titulo>
      <Paragrafo fontSize={14} tipo="secundario">
        matheuz0liveira
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
