

import express from "express";
import { AfficherListeDesFounisseurs, CreerUnFounisseur, SupprimerUnFounisseurs } from "../controller/apiController.js";
import { AfficherListesDesStocks, CreerDesStocks, supprimerUnStock } from "../controller/stockController.js";
import { AfficherListesDesCategories, CreerCategories, SupprimerCategories } from "../controller/categorieController.js";
import { AfficherListeDesPersonnels, CreerUnPersonnels, supprimerUnPersonnel } from "../controller/personnelsController.js";
import { AfficherListesDesCommandes, CreerDesCommandes, SupprimerUneCommande } from "../controller/commandeController.js";
import { AfficherListesDesClients, CreerUnClients, supprimerUnClient } from "../controller/clientsController.js";
import { AfficherListesDesProduits } from "../controller/produitsController.js";







export const routes = express.Router();

routes.get('/listeDesFournisseurs', AfficherListeDesFounisseurs);
routes.post('/creationFournisseur', CreerUnFounisseur )
routes.delete('/supprimerUnFournisseur/:id', SupprimerUnFounisseurs)


routes.get('/listeDesStocks', AfficherListesDesStocks);
routes.post('/CreationStocks', CreerDesStocks);
routes.post('/SupprimerStocks/:id', supprimerUnStock);

routes.get('/listeDesCategories', AfficherListesDesCategories);
routes.post('/CreationCategories', CreerCategories);
routes.delete('/SupprimerCategories/:id', SupprimerCategories);

routes.get('/listeDesClients', AfficherListesDesClients);
routes.post('/CreationClients', CreerUnClients);
routes.delete('/SupprimerClients/:id', supprimerUnClient);

routes.get('/listeDesPersonnels', AfficherListeDesPersonnels);
routes.post('/CreationPersonnels', CreerUnPersonnels);
routes.delete('/SupprimerPersonnels/:id', supprimerUnPersonnel);


routes.get('/listeDesProduits',AfficherListesDesProduits);
routes.post('/CreationPersonnels', CreerUnPersonnels);
routes.delete('/SupprimerPersonnels/:id', supprimerUnPersonnel);



routes.get('/listeDesCommandes', AfficherListesDesCommandes);
routes.post('/CreationCommandes', CreerDesCommandes);
routes.post('/SupprimerCommandes/:id', SupprimerUneCommande);


