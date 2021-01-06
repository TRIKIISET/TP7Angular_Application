import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  produit:Produit = {
    id:0,
    libelle:"",
    nouveau: true,
    madeIn:"Tunisie",
    categorie:"Fourniture"
  }
  submitted :boolean = false;

  message:string="";
  onSubmit(f:NgForm){
    console.log(this.produit);
    console.log("--"+ f.value["id"]+ " " +f.value["lib"]+ " " +f.value["categ"]
    + " " +f.value["madeIn"]+ " " +f.value["nouv"]);

    
// 1ère Solution
 /*if(this.anasService.addProduit(f.value))
      this.message = "Votre nouveau produit a bien été ajouté";
  else
    this.message = "Le produit d'id " + f.value["id"] + " existe déjà";
*/
  
  //2ème Solution

  let pdt = Object.assign ({}, this.produit);
    if(this.anasService.addProduit(pdt))
      this.message = "Votre nouveau produit a bien été ajouté";
  else
    this.message = "Le produit d'id " + pdt.id + " existe déjà";

  this.submitted = true;
}

onVider(f:NgForm){
    f.reset(
      {
        id:0,
    lib:"",
    nouv: true,
    madeIn:"Tunisie",
    categ:"Fourniture"
      }
    );
    this.submitted = false;
}
  constructor(private anasService:ProduitService) { }

  ngOnInit(): void {
  }





}


