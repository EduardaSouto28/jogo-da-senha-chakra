
import React, { useState, useEffect } from "react";
import { comparar } from "./components/Comparar.js";
import { resultadoA } from './components/Comparar.js';
import { resultadoB } from './components/Comparar.js';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';


import './App.css';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';


function App() {

  const [senha, setSenha] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [senhaOficial, setsenhaOficial] = useState("");
  const [resultadosSenha, setResultados] = useState([]);
  const [resultadosA, setResultadosA] = useState([]);
  const [resultadosB, setResultadosB] = useState([]);


  function salvarSenha() {
    setsenhaOficial(senha);
    setSenha("");
    //console.log("sajkux");
  }

  function chamaComparar() {
    comparar({ tentativa }, { senhaOficial });
    if (resultadoA > 0) {
      resultadosSenha.push(tentativa);
      resultadosA.push(resultadoA);
      resultadosB.push(resultadoB);
    }
    
  };

  return (

    <ChakraProvider>

      <div className="App">

        <div className='container'>
          <Text margin={6} fontSize='2xl' >JOGO DA SENHA</Text > 

          <div>
            <Input
              size='sm'
              width={300}
              variant='flushed'
              margin={4}

              disabled={senhaOficial}
              type='number'
              placeholder='Digite a senha secreta'
              value={senha}
              onChange={(evt) => setSenha(evt.target.value)}>
            </Input>
            <Button disabled={senhaOficial} colorScheme='teal' variant='outline' size='sm' onClick={salvarSenha}>Salvar senha</Button>

          </div>

          <div>
            <Input
              size='sm'
              width={300}
              variant='flushed'
              margin={4}

              disabled={!senhaOficial}
              type='number'
              placeholder='Tente adivinhar a senha secreta'
              value={tentativa}
              onChange={(evt) => setTentativa(evt.target.value)}>
            </Input>
            <Button disabled={!senhaOficial} colorScheme='teal' variant='outline' size='sm' onClick={chamaComparar}>Testar senha</Button>
          </div>

          <TableContainer margin={10}>
            <Table variant='simple'>

              <Thead>
                <Tr>
                  <Th isNumeric>Tentativas</Th>
                  <Th>Senhas</Th>
                  <Th>Resultados</Th>
                </Tr>
              </Thead>

              <Tbody>
                {resultadosSenha.map((senha, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{senha}</Td>
                    <Td>{resultadosA[index]}A{resultadosB[index]}B</Td>
                  </Tr>
                ))}
              </Tbody>

            </Table>
          </TableContainer>
        </div>
      </div>

    </ChakraProvider>
  );
}

export default App;
