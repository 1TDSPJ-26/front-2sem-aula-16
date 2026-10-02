import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/ListaProdutos";

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>();

  useEffect(() => {
    setProdutos(listaProdutos);

  }, []);
  return (
    <main>
      <h2>Produtos</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>
          {produtos?.map((p) => (
            <tr>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Quantidade de Produtos: {produtos?.length} </td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}


