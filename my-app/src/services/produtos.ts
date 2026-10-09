import type { DadosProduto, Produto } from "../types/produto";

const URL = "http://localhost:3000/produtos";

// fetch não rejeita automaticamente respostas HTTP como 404.
function verificarResposta(resposta: Response): void {
    if (!resposta.ok) {
        if (resposta.status === 404) {
            throw new Error("Produto não encontrado.");
        }
        throw new Error(`A operação falhou. HTTP ${resposta.status}.`);
    }
}

export async function listarProdutos(signal?: AbortSignal): Promise<Produto[]> {
    const resposta = await fetch(URL, { signal });
    verificarResposta(resposta);
    return resposta.json();
}

export async function buscarProduto(id: string, signal?: AbortSignal): Promise<Produto> {
    const resposta = await fetch(`${URL}/${encodeURIComponent(id)}`, { signal });
    verificarResposta(resposta);
    return resposta.json();
}

export async function criarProduto(dados: DadosProduto): Promise<Produto> {
    const resposta = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
    verificarResposta(resposta);
    return resposta.json();
}

export async function atualizarProduto(id: string, dados: DadosProduto): Promise<Produto> {
    const resposta = await fetch(`${URL}/${encodeURIComponent(id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
    verificarResposta(resposta);
    return resposta.json();
}

export async function excluirProduto(id: string): Promise<void> {
    const resposta = await fetch(`${URL}/${encodeURIComponent(id)}`, {
        method: "DELETE",
    });
    verificarResposta(resposta);
}
