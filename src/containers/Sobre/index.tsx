import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem
      incidunt accusantium sint sapiente cum accusamus voluptatibus iure quae
      soluta iste veritatis praesentium vitae, molestias similique libero vel!
      Voluptatibus, aliquid?
    </Paragrafo>
    <GithubSecao>
      <img
        alt="Grafico gihub"
        src="https://github-readme-stats.vercel.app/api?username=matheuz0liveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        alt="Grafico Github"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheuz0liveira&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
