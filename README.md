# 🥗 Calculadora Nutrientes Diário

A **Calculadora Nutrientes Diário** é uma aplicação web desenvolvida para auxiliar no acompanhamento da ingestão diária de nutrientes essenciais. Com uma interface simples e intuitiva, permite ao usuário saber a quantidade de nutrientes necessário, com base em seu peso e estilo de vida.

---

## 🛠️ Tecnologias Utilizadas

* **HTML**: Estruturação das páginas web.
* **CSS**: Estilização das páginas para uma melhor experiência do usuário.
* **JavaScript**: Lógica de interação e cálculo dos nutrientes.
* **Gherkin**: Especificação de comportamentos para testes automatizados.

## 📁 Estrutura do Repositório

* `index.html`: Página principal da aplicação.
* `style.css`: Arquivo de estilos para a interface.
* `script.js`: Contém a lógica de cálculo dos nutrientes.
* `cypress/`: Diretório contendo testes automatizados utilizando Cypress.
* `calc.feature`: Arquivo de especificação de comportamentos em Gherkin.
* `package.json`: Gerenciador de dependências e scripts do projeto.

## 🚀 Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/Gloterianota349/Calculadora-Nutrientes-Diario.git
   ```
2. Acesse o diretório do projeto:

   ```bash
   cd Calculadora-Nutrientes-Diario
   ```
3. Abra o arquivo `index.html` em seu navegador para utilizar a aplicação.

## 🧪 Testes Automatizados

A aplicação utiliza o Cypress para testes automatizados. Para executar os testes:

1. Instale as dependências:

   ```bash
   npm install
   ```
2. Execute os testes:

   ```bash
   npx cypress open
   ```

Isso abrirá a interface do Cypress, onde você pode rodar os testes definidos em `cypress/integration`.

## 📊 Funcionalidades

* **Registro de Informações**: Permite ao usuário inserir seu peso e estilo de vida.
* **Cálculo de Nutrientes**: Calcula a ingestão de proteínas, carboidratos e lipídios.
* **Testes Automatizados**: Garante o bom funcionamento da aplicação através de testes automatizados.
