# MERN Project – Frontend + Backend (Client/Server)

Ce projet est une application MERN complète (MongoDB, Express.js, React.js, Node.js) prête à l'emploi avec une configuration simple pour le développement et le déploiement.

---

## 🧱 Structure du projet

```
mern-project-final/
├── client/       # Frontend React avec Vite
├── server/       # Backend Node.js + Express + MongoDB
├── package.json  # Script racine pour lancer les deux projets
```

---

## 🚀 Lancer le projet en local

### 1. Prérequis

- Node.js v18+ recommandé
- MongoDB local ou MongoDB Atlas (cloud)
- npm installé globalement

---

### 2. Installation

Dans le terminal :

```bash
git clone <ce dépôt>
cd mern-project-final

# Installer les dépendances racine + client + serveur
npm install
cd client && npm install
cd ../server && npm install
cd ..
```

---

### 3. Configuration de l’environnement

Crée un fichier `.env` dans `server/` :

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/mern_db
```

⚠️ Si tu utilises MongoDB Atlas, remplace `MONGO_URI` par l'URL fournie dans ton tableau de bord Atlas.

---

### 4. Démarrage

```bash
npm run dev
```

- Frontend accessible via : [http://localhost:5173](http://localhost:5173)
- Backend API via : [http://localhost:4000/api](http://localhost:4000/api)

---

## 🌐 Déploiement

### Backend (Render)

1. Crée un nouveau service sur [Render.com](https://render.com/)
2. Connecte ton dépôt GitHub
3. Ajoute les variables d’environnement :
   - `PORT=4000`
   - `MONGO_URI` (URI MongoDB Atlas)
4. Commande de démarrage :

```bash
npm install && npm run start
```

---

### Frontend (Vercel)

1. Va sur [Vercel](https://vercel.com)
2. Importer ton dépôt GitHub
3. Ajouter la variable `VITE_API_URL` pointant vers l'URL Render du backend :

```
VITE_API_URL=https://mon-backend.onrender.com/api
```

---

## 📂 Routes API

```
GET    /api/products
POST   /api/products
PATCH  /api/products/:id
DELETE /api/products/:id
```

---

## ✅ Fonctions incluses

- CRUD produits
- Pagination + recherche
- Modales, toasts, formulaire contrôlé
- UI responsive en CSS natif
- Contexte React pour centraliser les données

---

## 🧪 À venir (extensions possibles)

- Authentification JWT
- Tests (Jest, Vitest)
- Docker + docker-compose
- Upload images (Cloudinary)

---

## 👤 Auteur

Projet MERN généré automatiquement par ChatGPT pour [@comptechatgpt2027](mailto:comptechatgpt2027@gmail.com)