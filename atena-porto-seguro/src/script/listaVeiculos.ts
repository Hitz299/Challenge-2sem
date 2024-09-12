export const listaVeiculos = [
    {
        modelo: "Fusca",
        placa: "ABC-1234",
        cor: "azul",
        chassi: "1FTHX26G7LKA01234",
        marca: "Volkswagen",
    },
    {
        modelo: "Civic",
        placa: "XYZ-5678",
        cor: "preto",
        chassi: "2HGFC2F59FH701234",
        marca: "Honda",
    },
    {
        modelo: "Hilux",
        placa: "LMN-9012",
        cor: "prata",
        chassi: "3TMCZ5AN4HM123456",
        marca: "Toyota",
    },
    {
        modelo: "Onix",
        placa: "GHI-3456",
        cor: "vermelho",
        chassi: "1G1BE5SM5J7134567",
        marca: "Chevrolet",
    }
];

if(!localStorage.getItem("lista")){
    localStorage.setItem("lista", JSON.stringify(listaVeiculos));
} 