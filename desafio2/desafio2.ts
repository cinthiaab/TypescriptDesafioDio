interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

enum Profissao{
    atriz,
    padeiro,
}

let pessoa1 : Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz,
};

let pessoa2 : Pessoa = {
    nome:"Roberto",
    idade: 19,
    profissao: Profissao.padeiro,
}

let pessoa3 : Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
};

let pessoa4 : Pessoa = {
    nome: "Beatriz",
    idade: 18,
}