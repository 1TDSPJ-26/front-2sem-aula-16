export type Produto = {
    id: string;
    nome: string;
    preco: number;
    estoque: number;
};

// O cadastro não escolhe o identificador: a API o gera.
export type DadosProduto = Omit<Produto, "id">;
