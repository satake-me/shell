# shell

Repositorio do **host** da solucao Angular Federation.

## Papel

Este projeto nao contem os remotes no mesmo workspace. Ele carrega:

- `mf1` em `http://localhost:4201/remoteEntry.json`
- `mf2` em `http://localhost:4202/remoteEntry.json`

As URLs ficam em `public/federation.manifest.json`.

## Executar

```bash
npm install
npm start
```

Abra `http://localhost:4200`.

## Rotas

- `/home`
- `/mf1`
- `/mf2`

## Validacao

```bash
npm run build
npm test -- --watch=false
```
