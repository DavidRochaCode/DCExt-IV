import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/Footer";
import "./style.css";
import axios from 'axios';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const animatedComponents = makeAnimated();

const options = [
  { value: "Comunicação", label: "Comunicação" },
  { value: "Foco", label: "Foco" },
  { value: "Habilidades Cognitivas", label: "Habilidades Cognitivas" },
  { value: "Pensamento Lógico", label: "Pensamento Lógico" },
  { value: "Aprendizagem", label: "Aprendizagem" },
  { value: "Imaginação", label: "Imaginação" },
  { value: "Coordenação Motora", label: "Coordenação Motora" },
  { value: "Atenção", label: "Atenção" },
  { value: "Concentração", label: "Concentração" },
  { value: "Cores", label: "Cores" },
  { value: "Criatividade", label: "Criatividade" },
  { value: "Dedução", label: "Dedução" },
  { value: "Discriminação Visual", label: "Discriminação Visual" },
  { value: "Emoções Lúdicas", label: "Emoções Lúdicas" },
  { value: "Expressões de Sentimento", label: "Expressões de Sentimento" },
  { value: "Habilidades de Comunicação", label: "Habilidades de Comunicação" },
  { value: "Habilidadaes de Lógica", label: "Habilidadaes de Lógica" },
  { value: "Habilidades Motoras", label: "Habilidades Motoras" },
  { value: "Habilidades Sociais", label: "Habilidades Sociais" },
  { value: "Habilidades Sociais e Emocionais", label: "Habilidades Sociais e Emocionais" },
  { value: "Inteligência", label: "Inteligência" },
  { value: "Interação Social", label: "Interação Social" },
  { value: "Luzes", label: "Luzes" },
  { value: "Habilidades Sociais", label: "Habilidades Sociais" },
  { value: "Músicas", label: "Músicas" },
  { value: "Habilidades Sociais", label: "Habilidades Sociais" },
  { value: "Pensamento Estatégicos", label: "Pensamento Estatégicos" },
  { value: "Sons", label: "Sons" },
  { value: "Tranquilizar", label: "Tranquilizar" },



];

function Publicar() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    category:[],
    link: "",
    selected: "",
  });

  const handleChange = (selectedOption) => {
    const selectedValues = selectedOption
      ? selectedOption.map((option) => option.value)
      : [];
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedValues,
    }));
  };

  const handleNameChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: e.target.value,
    }));
  };
  
  const handleTypeChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      type: e.target.value,
    }));
  };
  
  const handleDescriptionChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: e.target.value,
    }));
  };
  
  const handleLinkChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      link: e.target.value,
    }));
  };

  const handleSelectChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selected: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      type: "",
      description: "",
      category:[],
      link: "",
      selected: "",
    });
    const categoryString = formData.category.join(", ");
    const data = {
      name: formData.name,
      type: formData.type,
      description: formData.description,
      category: categoryString,
      link: formData.link,
    };

    //  AXIOS AREA
    if (formData.selected === "autismo") {
      axios
      .post("https://dcex.onrender.com/autism/create", data)
      .then(response => {
        if (response.status === 200) {
          console.log("publicado");
          toast.success("publicado")
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
    } else if (formData.selected === "idosos") {
      axios
      .post("https://dcex.onrender.com/elder/create", data)
      .then(response => {
        if (response.status === 200) {
          console.log("publicado");
          toast.success("publicado")
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }else if(formData.selected === "TDAH"){
      axios
      .post("https://dcex.onrender.com/adhd/create", data)
      .then(response => {
        if (response.status === 200) {
          console.log("publicado");
          toast.success("publicado")
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }else if (formData.selected === "PCD"){
      axios
      .post("https://dcex.onrender.com/disabled/create", data)
      .then(response => {
        if (response.status === 200) {
          console.log("publicado");
          toast.success("publicado")
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formulario">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="type">Tipo:</label>
            <select
              id="selected"
              name="selected"
              value={formData.type}
              onChange={handleTypeChange}
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="Jogos Digitais">Jogos Digitais</option>
              <option value="Jogos Físicos">Jogos Físicos</option>
              <option value="Cartilhas">Cartilhas</option>
              <option value="Documentos">Documentos</option>
              <option value="Aplicativos">Aplicativos</option>
              <option value="Inteligência Artificial">Inteligência Artificial</option>
              
            </select>
          </div>
          <div>
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div className="category-container">
            <label htmlFor="category">Categoria(s):</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              onChange={handleChange}
              value={options.filter((option) =>
                formData.category.includes(option.value)
              )}
              required
              defaultValue={[options[0], options[2]]}
              className="category"
              isClearable={true}
              isSearchable={true}
              isDisabled={false}
              isLoading={false}
              isRtl={false}
            />
          </div>

          <div>
            <label htmlFor="link">Link:</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleLinkChange}
            />
          </div>
          <div>
            <label htmlFor="selected">Publicar em:</label>
            <select
              id="selected"
              name="selected"
              value={formData.selected}
              onChange={handleSelectChange}
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="autismo">Autismo</option>
              <option value="idosos">Idosos</option>
              <option value="TDAH">TDAH</option>
              <option value="PCD">PCD</option>
            </select>
          </div>
          <div>
            <button type="submit">Publicar</button>
          </div>
        </form>
            <ToastContainer/>
      </div>
      <Footer />
    </div>
  );
}

export default Publicar;
