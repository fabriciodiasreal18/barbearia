// Preços dos produtos
const precos = {
    produto1: 19.90,
    produto2: 19.90,
    produto3: 89.90,
    produto4: 29.90,
    produto5: 25.90,
    produto6: 34.90
};

// Formatar valor em moeda
function formatarMoeda(valor) {
    return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
}

// Aumentar quantidade
function aumentarQuantidade(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
    calcularTotal();
}

// Diminuir quantidade
function diminuirQuantidade(id) {
    const input = document.getElementById(id);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
        calcularTotal();
    }
}

// Calcular o total
function calcularTotal() {
    let total = 0;
    
    for (let i = 1; i <= 6; i++) {
        const id = 'produto' + i;
        const quantidade = parseInt(document.getElementById(id).value) || 0;
        total += quantidade * precos[id];
    }
    
    document.getElementById('total').textContent = 'Total: R$ ' + formatarMoeda(total);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Botões de aumentar
    document.querySelectorAll('.btn-aumentar').forEach(btn => {
        btn.addEventListener('click', function() {
            aumentarQuantidade(this.getAttribute('data-produto'));
        });
    });
    
    // Botões de diminuir
    document.querySelectorAll('.btn-diminuir').forEach(btn => {
        btn.addEventListener('click', function() {
            diminuirQuantidade(this.getAttribute('data-produto'));
        });
    });
    
    // Inputs de quantidade
    document.querySelectorAll('.quantidade').forEach(input => {
        input.addEventListener('change', calcularTotal);
    });
    
    document.getElementById('btn-comprar').addEventListener('click', function () {
        const nomes = {
            produto1: "Gel Cola Black – Alfa Look’s",
            produto2: "Gel Cola – Alfa Look’s",
            produto3: "Minoxidil 70ml – Alfa Look’s Prime",
            produto4: "Pomada Modeladora – Alfa Look’s",
            produto5: "Shampoo 2 em 1 – Alfa Look’s",
            produto6: "Pomada Teia – Alfa Look’s"
        };

        let resumo = 'Resumo da Compra:\n\n';
        let total = 0;
        let algumProdutoSelecionado = false;

        for (let i = 1; i <= 6; i++) {
            const id = 'produto' + i;
            const quantidade = parseInt(document.getElementById(id).value) || 0;

            if (quantidade > 0) {
                const nome = nomes[id];
                const subtotal = quantidade * precos[id];
                total += subtotal;
                algumProdutoSelecionado = true;

                resumo += `${nome}\nQuantidade: ${quantidade} x R$ ${formatarMoeda(precos[id])} = R$ ${formatarMoeda(subtotal)}\n\n`;
            }
        }

        if (!algumProdutoSelecionado) {
            alert('Você ainda não selecionou nenhum produto.');
        } else {
            resumo += ` Total: R$ ${formatarMoeda(total)}`;
            alert(resumo);
        }
    });

    // Calcular total inicial
    calcularTotal();
});
