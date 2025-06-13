<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white" />
  <img src="https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white" />
  <img src="https://img.shields.io/badge/Jsforce-0099cc?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDBhMWUwIiBvcGFjaXR5PSIwLjYiIHJ4PSIyIi8+PC9zdmc+" />
</p>

<p align="center">
  <b>Salesforce - Integração com Node.js</b><br>
  <i>API RESTful para gestão de contatos no CRM Salesforce</i><br>
  <br>
</p>

---

# ☁ Salesforce integração com Node.js na gestão de contatos

Este projeto é uma **API RESTful** desenvolvida com **Node.js**, **TypeScript** e **Fastify**, com integração ao **Salesforce** via **Jsforce**.
Seu principal **objetivo** é fornecer **endpoints seguros e escaláveis** para **criação**, **leitura** e **atualização de contatos na plataforma Salesforce**, facilitando a comunicação entre aplicações externas e o CRM.

---

## 🚀 Funcionalidades

- ✅ Criar novos contatos no Salesforce
- ✅ Listar todos os contatos salvos
- ✅ Buscar um contato pelo ID
- ✅ Atualizar dados de um contato específico

---

## 🛠️ Tecnologias utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **TypeScript** – Tipagem estática e mais robustez no desenvolvimento
- **Fastify** – Framework leve e rápido para APIs
- **Zod** – Validação de esquemas e dados
- **Salesforce** – Plataforma de CRM utilizada
- **Jsforce** – Biblioteca para integração com Salesforce via Node.js

---

## 📁 Estrutura de Pastas

```
src/
├─ @types/
│  └─ contact.ts                 # Tipagem personalizada para contatos
├─ config/
│  ├─ salesforce.ts              # Configuração e autenticação com Salesforce
│  └─ schema.ts                  # Validações de entrada com Zod
├─ controller/
│  ├─ create-contact.controller.ts
│  ├─ get-contact-id.controller.ts
│  ├─ get-contacts.controller.ts
│  └─ update-contact.controller.ts
├─ service/
│  ├─ create-contact.service.ts
│  ├─ get-contact-id.service.ts
│  ├─ get-contacts.service.ts
│  └─ update-contact.service.ts
├─ route.ts                      # Definição das rotas da API
└─ server.ts                     # Inicialização do servidor Fastify
```

---

## 📜 Como rodar o projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/MatheusRodriguesdaSilveira/Salesforce_NodeJs_Integration.git

# 2. Acessar a pasta do projeto
cd Salesforce_NodeJs_Integration

# 3. Instalar as dependências
npm install

# 4. Criar um arquivo .env com as credenciais do Salesforce
# Exemplo de conteúdo do .env:
# SF_USERNAME=seu-usuario
# SF_PASSWORD=sua-senha
# SF_LOGIN_URL=https://login.salesforce.com

# 5. Iniciar o servidor em modo desenvolvimento
npm run dev
```

---

## 📌 Observações

- Este projeto simula a rotina de uma profissional de serviços com agendamentos personalizados.
- Pode ser facilmente adaptado para **barbearias**, **clínicas de estética**, **fisioterapeutas**, **consultórios médicos**, entre outros.

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, os principais aprendizados foram:

- Integração completa com a API do Salesforce utilizando `jsforce`
- Estrutura de API escalável com separação de responsabilidades
- Boas práticas com Fastify + TypeScript
- Autenticação baseada em variáveis de ambiente
- Modelagem simples de dados com foco em reuso e clareza
- Criação de rotas RESTful seguindo padrões HTTP
- Validação de entrada com `zod` para evitar dados inválidos

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
© 2025 - Matheus Rodrigues da Silveira

---

<p align="center">
  Feito com 💻 por <strong>Matheus Rodrigues</strong>
</p>
