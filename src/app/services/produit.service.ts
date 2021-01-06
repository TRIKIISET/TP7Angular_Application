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


  getProduitById(id:number):Produit{
    return <Produit>this.lesProduits.find(p=>p.id ==id);
  }

  addProduit(pdt:Produit):boolean{
    if(this.getProduitById(pdt.id)==undefined){ 
          this.lesProduits.push(pdt);
          return true;
  }
      return false;  
  }

}
