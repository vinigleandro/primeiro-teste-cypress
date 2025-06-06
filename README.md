<h1>Primeiro Teste com Cypress</h1>

<p>Este projeto representa meu <strong>primeiro contato com Cypress</strong>, uma ferramenta de automação de testes end-to-end. Como exercício inicial, criei uma automação simples que realiza uma busca no site da Wikipédia.</p>

<h2>🧪 O que o teste faz?</h2>
<p>O teste acessa a página principal da Wikipédia em português, clica na barra de busca, digita <strong>"São Paulo FC"</strong> e pressiona Enter.</p>

<h2>📂 Estrutura do Projeto</h2>
<pre>
meu-primeiro-teste-cypress/
├── cypress/
│   └── e2e/
│       └── testewiki.cy.js       # Seu teste automatizado
├── cypress.config.js             # Configuração do Cypress
├── package.json                  # Dependências e scripts do projeto
└── .gitignore                    # Arquivos ignorados pelo Git
</pre>

<h2>▶️ Como executar</h2>
<ol>
  <li>Clone o repositório:
    <pre>git clone https://github.com/vinigleandro/primeiro-teste-cypress.git</pre>
  </li>
  <li>Entre na pasta do projeto:
    <pre>cd primeiro-teste-cypress</pre>
  </li>
  <li>Instale as dependências:
    <pre>npm install</pre>
  </li>
  <li>Execute o Cypress:
    <pre>npx cypress open</pre>
  </li>
</ol>

<h2>🚀 Resultado</h2>
<p>Se tudo estiver certo, o Cypress abrirá a interface gráfica e você poderá rodar o teste <code>testewiki.cy.js</code>, que fará a busca no Wikipédia.</p>

