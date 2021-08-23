import React from "react";

export const withHook = <T1, T2>(
  hook: (params: T1) => T2, // Primeiro param recebe a função hook
  Component: (props: T2) => JSX.Element // Segundo param recebe o Componente View
): ((props: T1) => JSX.Element) => {
  return (props) => {
    return <Component {...hook(props)} />; // RENDERIZA O COMPONENTE RECEBIDO NO PARAMETRO, INJETANDO OS RETORNOS DO HOOK COMO PROPS NO COMPONENTE
  };
};
