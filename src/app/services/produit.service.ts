import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private lesProduits:Produit[] =[    
    {id:15, libelle:'montre', nouveau:false, madeIn:"Tunisie", categorie:"Accessoires"},    
    {id:32, libelle:'cartable', nouveau:true, madeIn:"Autre", categorie: "Fourniture"},
  ];
  constructor() { }

  getProduits(){
    return this.lesProduits;
  }

}
