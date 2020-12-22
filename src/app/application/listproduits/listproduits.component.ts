import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {
  lesProduits :Produit[];

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.lesProduits = this.produitService.getProduits();
  }

}
