import React, { useState } from "react";

export let resultadoA = 0;
export let resultadoB = 0;

export function comparar({ tentativa }, { senhaOficial }) {

  console.log("jknde")

  resultadoA = 0;
  resultadoB = 0;

  if (tentativa.length != senhaOficial.length) {
    alert(`A senha tem ${senhaOficial.length} dígitos, tente novamente`);
  }
  else if (tentativa === senhaOficial) {
    alert("Parabéns, você ganhou");

  } else {

    for (let i = 0; i < tentativa.length; i++) {

      const procurar = tentativa.indexOf(senhaOficial[i]);

      if (procurar == [i]) {
        resultadoA++;
        //console.log(resultadoA)
      } else if (procurar >= 0) {
        resultadoB++;
        //console.log(resultadoB)
      }
    }
  }
};
