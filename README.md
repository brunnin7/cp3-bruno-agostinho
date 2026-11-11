# Site pessoal — CP3

Projeto acadêmico desenvolvido com HTML5, CSS3 e JavaScript.

## Páginas
- `index.html` — apresentação e lista interativa de objetivos de estudo.
- `curriculo.html` — currículo.
- `formulario.html` — formulário com validação e feedback.
- `multimidia.html` — recursos de áudio e vídeo.
- `graficos.html` — Canvas e SVG.

## Funcionalidade com localStorage
Na página inicial, é possível adicionar, concluir e excluir objetivos de estudo. A lista fica salva no navegador usando a chave `bruno_cp3_objetivos`.

## Executar localmente
Abra `index.html` no navegador. Não é necessário instalar dependências.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Em **Settings > Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. Salve e aguarde a publicação. O GitHub Pages fornece HTTPS.
5. Teste as cinco páginas na URL pública em uma janela anônima.

## Git e tag de entrega
Execute no terminal, dentro desta pasta:

```bash
git init
git add .
git commit -m "Adiciona estrutura do site CP2"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
git tag cp3-entrega
git push origin cp3-entrega
```

Faça commits adicionais e descritivos ao longo das alterações, por exemplo:
- `Adiciona lista de objetivos com localStorage`
- `Implementa validação e feedback no formulário`
- `Organiza JavaScript em arquivo externo`

Substitua a URL de exemplo pelo endereço real do seu repositório.
