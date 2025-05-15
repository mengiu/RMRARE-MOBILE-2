import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { Ricercadocumento } from '../../logic/ricercadocumento';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-ricerca-documenti',
  imports: [MatCardModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule],
  standalone: true,
  providers: [
    HttpClient
  ],
  templateUrl: './ricerca-documenti.component.html',
  styleUrl: './ricerca-documenti.component.css'
})

export class RicercaDocumentiComponent {
  ricercadocumento = new Ricercadocumento
  
  constructor(
    private data: DataService,
    private router: Router,
    private ui: UiService
   ) {}

  goList(ricercadocumento: Ricercadocumento) {
    this.router.navigate(["/documenti", ricercadocumento.codiceFiscalePaziente])
  }

  ngOnInit() {
    this.ui.setTitle("Ricerca Documenti");
    this.ui.setThemeColor("blue");
   }

}

