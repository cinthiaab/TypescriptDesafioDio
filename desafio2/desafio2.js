"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz,
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.padeiro,
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
};
let pessoa4 = {
    nome: "Beatriz",
    idade: 18,
};
