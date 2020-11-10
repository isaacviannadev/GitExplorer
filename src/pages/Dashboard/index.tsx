import React from "react";
import { FiChevronRight } from 'react-icons/fi';

import logoImg from "../../assets/logogitexplorer.svg";
import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Explore</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/60493567?s=460&u=45ee2c64d56394687fc834339dc770ce09faebea&v=4"
            alt="Isaac Vianna"
          />
          <div>
              <strong>isaacviannadev/desafioNodego</strong>
              <p>Descrição do repo</p> 
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/60493567?s=460&u=45ee2c64d56394687fc834339dc770ce09faebea&v=4"
            alt="Isaac Vianna"
          />
          <div>
              <strong>isaacviannadev/desafioNodego</strong>
              <p>Descrição do repo</p> 
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/60493567?s=460&u=45ee2c64d56394687fc834339dc770ce09faebea&v=4"
            alt="Isaac Vianna"
          />
          <div>
              <strong>isaacviannadev/desafioNodego</strong>
              <p>Descrição do repo</p> 
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
