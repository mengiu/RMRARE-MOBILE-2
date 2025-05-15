import { Component } from '@angular/core';
import { Documento } from '../../logic/documento';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { UiService } from "../../services/ui.service"
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-documenti',
  imports: [MatCardModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    NgFor],
  standalone: true,
  providers: [
  ],
  templateUrl: './lista-documenti.component.html',
  styleUrl: './lista-documenti.component.css'
})
export class ListaDocumentiComponent {
  list: Documento[] = [];

  constructor(
    private data: DataService,
    private router: Router,
    private ui: UiService
   ) {}

   goDetails(documento: Documento) {
      this.router.navigate(["/documento", documento._idDocumento])
   }

   ngOnInit() {
    this.data.getList((list: Documento[]) => {
      this.list = list;
    });
    this.ui.setTitle("Documenti");
    this.ui.setThemeColor("green");
   }

}
