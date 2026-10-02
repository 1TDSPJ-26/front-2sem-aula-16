import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import type { TipoProduto } from "../../types/types";
import { useForm } from "react-hook-form";

export default function EditarProdutos() {

  const { id } = useParams<string>();

  // const[produto, setProduto] = useState<{id:number, nome:string, preco:number}>();
  const [produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

  useEffect(() => {
    const prodEncontrado = listaProdutos.find((p) => p.id === Number(id));
    setProduto(prodEncontrado!);

  }, [])

  const navigate = useNavigate();

  const onSubmit  = async (data:TipoProduto)=>{
    try {
      
      const response = await fetch(`http://localhost:3001/produtos/${data.id}`, {
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      //ERRO
      if (!response.ok) {
        throw new Error(`Falha na atualização do produto... ${response.status} - ${response.statusText}`);
      }

      //SUCESSO
      alert("Produto atualizado com sucesso!");
      navigate("/produtos");

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h2>Editar Produtos</h2>

      {produto ? (
        <div>
          <p>Nome  do produto: {produto.nome}</p>
          <p>Preço do produto: {produto.preco}</p>
        </div>) :
        (<p>Produto não encontrado</p>)
      }

    </main>
  )
}