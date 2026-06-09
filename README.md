# SpaceConnect - Módulo DevSecOps 

Este repositório contém a implementação do módulo de **DevSecOps** integrado à plataforma **SpaceConnect**, desenvolvido para a Global Solution do 1º Semestre de 2026 (FIAP)[cite: 1, 2].

O objetivo deste módulo é garantir a segurança cibernética no ciclo de vida de desenvolvimento do software (SDLC), protegendo dados sensíveis de telemetria e previsões climáticas voltadas a pequenos produtores rurais através de automações de segurança na esteira de Integração Contínua (CI/CD)[cite: 1, 2].

##  Integrantes do Grupo
* **Gilson Dias Ramos Junior** - RM552345[cite: 1]
* **Isabelle Toricelli da Silva** - RM552806[cite: 1]
* **Jeferson Gabriel de Mendonça** - RM553149[cite: 1]

---

## Tecnologias e Controles Utilizados

Para proteger o pipeline de desenvolvimento do projeto, foram adotadas as práticas de *Privacy by Design* utilizando as seguintes soluções automatizadas[cite: 1, 2]:

1. **Análise Estática de Segurança (SAST):** Varredura proativa construída diretamente na esteira para checar a sintaxe do projeto a cada novo commit, impedindo a publicação de falhas estruturais expostas[cite: 1, 2].
2. **Gestão Segura de Segredos (GitHub Secrets):** Armazenamento criptografado de credenciais de produção e tokens de APIs externas, injetando os valores estritamente em tempo de execução e de forma mascarada[cite: 1, 2].

---

##  Estrutura do Pipeline (`.github/workflows/`)

O fluxo de automação foi configurado via arquivo YAML (`main.yml`) e executa os seguintes passos lógicos a cada *push* ou *pull request* na branch principal[cite: 1, 2]:

1. **Gatilho:** Disparo automático pelo GitHub Actions[cite: 1].
2. **Checkout:** Clonagem do ambiente de código fonte[cite: 1].
3. **Security Audit (SAST):** Simulação de análise estática e varredura de strings vulneráveis[cite: 1].
4. **Vault Check:** Validação de conformidade buscando a chave de ambiente criptografada no cofre[cite: 1].
5. **Decisão Automática:**
   * **Se a chave falhar:** O deploy é interrompido imediatamente com `exit code 1`[cite: 1].
   * **Se a chave for validada:** O pipeline concede o status de sucesso e libera a publicação segura[cite: 1].

---

## Simulação de Riscos e Logs de Execução

O comportamento restritivo e preventivo do pipeline foi validado em laboratório através de dois cenários práticos[cite: 1, 2]:

* **Cenário de Falha:** O código foi enviado sem a prévia configuração da credencial `SPACECONNECT_API_KEY`. O pipeline barrou o processo preventivamente, registrando o log:  
  `FALHA: Chave de producao... nao encontrada no GitHub Secrets!`[cite: 1].
* **Cenário de Sucesso:** Após a inserção da chave no cofre criptográfico do repositório, a esteira concluiu todas as validações com sucesso, garantindo a conformidade com as diretrizes de segurança e as conformidades da LGPD[cite: 1].

---
_Desenvolvido para a Atividade de Cibersegurança - Engenharia de Software FIAP, 2026._
