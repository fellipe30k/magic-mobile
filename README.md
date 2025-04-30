# MagicMobile.js

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

**MagicMobile.js** é uma biblioteca JavaScript leve que transforma automaticamente qualquer página web para uma versão mobile otimizada, com estilo inspirado na Apple e utilizando Tailwind CSS. Como um "passe de mágica", ela reorganiza elementos, ajusta layouts e aplica estilos para garantir uma experiência perfeita em dispositivos móveis sem precisar reescrever o front-end.

## 🚀 Recursos

- ✨ **Transformação Automática**: Adapta páginas desktop para mobile sem precisar recodificar
- 📱 **Design Inspirado na Apple**: Componentes com estética clean e moderna
- 🔄 **Menu Responsivo**: Transforma navegação em menu hamburger em telas pequenas
- 🌙 **Modo Escuro**: Suporte automático para preferências de esquema de cores do usuário
- 📊 **Tabelas Responsivas**: Torna tabelas utilizáveis em telas pequenas
- 📝 **Formulários Otimizados**: Melhora a usabilidade de formulários em dispositivos móveis
- 🖼️ **Otimização de Imagens**: Carregamento lazy e ajuste responsivo de imagens
- 🔤 **Tipografia Aprimorada**: Ajusta fontes para melhor legibilidade em telas pequenas

## 📋 Requisitos

- Navegador moderno com suporte a ES6+

## 📦 Instalação

### Via CDN

```html
<!-- Tailwind CSS (opcional - a biblioteca pode carregá-lo automaticamente) -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">

<!-- MagicMobile.js -->
<script src="https://cdn.jsdelivr.net/gh/SEU-USUARIO/magic-mobile/MagicMobile.js"></script>
```

### Download Direto

Baixe [MagicMobile.js](https://github.com/SEU-USUARIO/magic-mobile/blob/main/MagicMobile.js) e inclua no seu projeto:

```html
<script src="caminho/para/MagicMobile.js"></script>
```

## 🔧 Uso

Inicialize a biblioteca após o carregamento da página:

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    MagicMobile.transform();
  });
</script>
```

### Opções de Configuração

Personalize a transformação usando as opções abaixo:

```javascript
MagicMobile.transform({
  appleStyle: true,     // Aplica estilo Apple aos componentes
  fixNavigation: true,  // Transforma navegação para formato mobile
  optimizeImages: true, // Otimiza imagens para carregamento
  adjustFonts: true,    // Ajusta tamanhos de fonte para legibilidade
  darkMode: false       // Habilita suporte a modo escuro
});
```

## 📱 Exemplos

### Antes e Depois

Veja como sua página pode ser transformada:

**Antes** (Desktop-only Design)
```html
<div class="row">
  <div class="col-md-4">
    <div class="card">
      <img src="produto1.jpg">
      <h3>Produto 1</h3>
      <p>Descrição do produto</p>
      <button>Comprar</button>
    </div>
  </div>
  <!-- mais colunas... -->
</div>
```

**Depois** (Mobile-Friendly)
```html
<div class="row mm-flex-col-mobile">
  <div class="col-md-4 mm-full-width-mobile">
    <div class="card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <img src="produto1.jpg" class="max-w-full h-auto" loading="lazy">
      <h3 class="font-medium leading-tight">Produto 1</h3>
      <p>Descrição do produto</p>
      <button class="rounded-lg px-4 py-2 font-medium bg-blue-500 text-white hover:bg-blue-600">Comprar</button>
    </div>
  </div>
  <!-- mais colunas... -->
</div>
```

## 🧩 Compatibilidade

- ✅ Funciona com Bootstrap
- ✅ Funciona com Tailwind CSS
- ✅ Funciona com Foundation
- ✅ Funciona com sites sem framework

## 📚 API

### MagicMobile.transform(options)

Transforma a página para exibição mobile.

| Opção | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| `appleStyle` | boolean | `true` | Aplica estilo inspirado na Apple aos componentes |
| `fixNavigation` | boolean | `true` | Transforma a navegação em menu mobile para telas pequenas |
| `optimizeImages` | boolean | `true` | Otimiza imagens para melhor exibição e performance |
| `adjustFonts` | boolean | `true` | Ajusta tamanhos de fontes para melhor legibilidade |
| `darkMode` | boolean | `false` | Adiciona suporte a modo escuro baseado nas preferências do usuário |

### Classes Utilitárias

| Classe | Uso |
|--------|-----|
| `mm-desktop-only` | Oculta o elemento em telas móveis |
| `mm-flex-col-mobile` | Altera flexbox para direção de coluna em telas móveis |
| `mm-full-width-mobile` | Define largura 100% em telas móveis |
| `mm-text-center-mobile` | Centraliza texto em telas móveis |
| `mm-my-2-mobile` | Adiciona margin vertical em telas móveis |
| `mm-px-4-mobile` | Adiciona padding horizontal em telas móveis |

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Abrir issues para reportar bugs ou sugerir melhorias
2. Enviar pull requests com novos recursos ou correções
3. Compartilhar feedback sobre a biblioteca

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 📝 Changelog

### v1.0.0
- Lançamento inicial
- Suporte a transformação de layout
- Estilos inspirados na Apple
- Suporte a modo escuro
- Otimização de imagens e formulários

---

Feito com ❤️ para tornar o desenvolvimento web mobile mais simples.
