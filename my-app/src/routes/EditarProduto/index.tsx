import { useEffect } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";
import { useForm } from "react-hook-form";

export default function EditarProdutos() {

    const { id } = useParams<{ id: string }>();

    const { register, reset, setValue, formState: { errors } } = useForm<TipoProduto>({
        defaultValues: { id: "", nome: "", preco: 0, estoque: 0, avatar: "" },
        mode: "onBlur"
    });

    useEffect(() => {

        const carregaProduto = async () => {
            try {

                const response = await fetch(`http://localhost:3001/produtos/${id}`);

                if (!response.ok) {
                    throw new Error(`Falha na requisição do produto... ${response.status} - ${response.statusText}`);
                }

                const data: TipoProduto = await response.json();
                console.log(data);
                setValue("nome": data.nome);

            } catch (error) {
                console.error(error);
            }
        }
        carregaProduto();
    }, [])

    return (
        <main>
            <h2>Editar Produtos</h2>
            <form>
                <fieldset>
                    <legend>Dados do Produto</legend>
                    <div>
                        <label htmlFor="nome">Nome do Produto </label>
                        <input type="text" id="nome" {...register("nome"),{required: "Digite o nome do produto corretamente" }} />
                    </div>
                </fieldset>
            </form>
        </main>
    )
}