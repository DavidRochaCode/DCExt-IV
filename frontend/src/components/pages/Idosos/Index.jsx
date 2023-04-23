import React, { useEffect, useState } from "react";
import Navbar from '../../layout/navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import Button from '../../layout/Button';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Card from '../../layout/Card';
import Axios from "axios";

function Idosos() {
  
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("all");

  const getByCategory = async() => {
    try {
        const card = await Axios.get(`https://dcex.onrender.com/elder/get/category/${encodeURI(category)}`, {
        });
        setCards(card.data);
    } catch (error) {
        console.log(error)
    }
  }

  const getCards = async() => {
    Axios.get(`https://dcex.onrender.com/elder/get`)
      .then((response) => {
        setCards(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

const handleFilter = () => {
    if (category == "all") {
        getCards();
    } else {
        getByCategory();
    }
}

  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  card.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    console.log("Fetching cards...");
    Axios.get(`https://dcex.onrender.com/elder/get`)
      .then((response) => {
        setCards(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const props = {
        description: "Idosos",
        imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png",
        imageAltText: "Idosos",
        description2: "Muitos idosos querem ainda permanecer com uma certa independência sobre eles próprios, sendo mais específico, ainda desejam fazer as coisas sozinhos sem a ajuda de outras pessoas e isso pode ser possível com a ajuda de sistema tecnológicos que possam ajudar no dia-a-dia. Porém, existem, em quantidade mínima, aplicativos específicos para assistir a população idosa, e os que existem, em sua grande maioria, acabam prejudicando mais do que ajudando. Logo, buscamos pesquisar, testar e separar aplicativos que conseguissem ajudar o dia-a-dia de um idoso que busca ainda ter uma independência pessoal. Os aplicativos foram separados por desempenho, interface e quantidade de anúncios e os que se destacaram mais entre essa filtragem, estão neste catálogo, juntamente com…",
        circleColor: "blue"
      };


  return (
    <body id="page3">
      <Navbar />
      <Description {...props}/>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="card-filter">
        <div>
      {Array.isArray(filteredCards) &&
            filteredCards.map((cards) => (
              <Card
                category={cards.category}
                description={cards.description}
                type={cards.type}
                link={cards.link}
                name={cards.name}
                image={cards.image}
              />
            ))}
        </div>
      <div className="filter">
          <span>Categoria:</span>
          <select value={category} onChange={ev => setCategory(ev.target.value)}>
          <option value="all">Todos</option>
          <option value="Comunicação">Comunicação</option>
          <option value="Foco">Foco</option>
          <option value="Habilidades Cognitivas">Habilidades Cognitivas</option>
          <option value="Pensamento Lógico">Pensamento Lógico</option>
          <option value="Aprendizagem">Aprendizagem</option>
          <option value="Imaginação">Imaginação</option>
          <option value="Coordenação Motora">Coordenação Motora</option>
          <option value="Atenção">Atenção</option>
          <option value="Concentração">Concentração</option>
          <option value="Cores">Cores</option>
          <option value="Criatividade">Criatividade</option>
          <option value="Dedução">Dedução</option>
          <option value="Discriminação Visual">Discriminação Visual</option>
          <option value="Emoções Lúdicas">Emoções Lúdicas</option>
          <option value="Expressões de Sentimento">Expressões de Sentimento</option>
          <option value="Habilidades de Comunicação">Habilidades de Comunicação</option>
          <option value="Habilidadaes de Lógica">Habilidadaes de Lógica</option>
          <option value="Habilidades Motoras">Habilidades Motoras</option>
          <option value="Habilidades Sociais">Habilidades Sociais</option>
          <option value="Habilidades Sociais e Emocionais">Habilidades Sociais e Emocionais</option>
          <option value="Inteligência">Inteligência</option>
          <option value="Interação Social">Interação Social</option>
          <option value="Luzes">Luzes</option>
          <option value="Músicas">Músicas</option>
          <option value="Pensamento Estatégicos">Pensamento Estatégicos</option>
          <option value="Sons">Sons</option>
          <option value="Tranquilizar">Tranquilizar</option>
          </select>
          <Button name={"Filtrar"} onClick={handleFilter}></Button>
      </div>
      </div>
      <Footer />
    </body>
  );
} 
export default Idosos;
