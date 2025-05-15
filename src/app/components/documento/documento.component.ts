import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from '../../logic/documento';

@Component({
  selector: 'app-documento',
  imports: [MatCardModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule],
  standalone: true,
  templateUrl: './documento.component.html',
  styleUrl: './documento.component.css'
})
export class DocumentoComponent {
  documento = new Documento();

  constructor(
    private data: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private ui: UiService
  ) {}

  ngOnInit() {
    //this.ui.setThemeColor("brown");
    //this.ui.setTitle("New")
    this.route.params.subscribe(params => {
      if (params["_idDocumento"]) {
        this.data.get(params["_idDocumento"], (response: any) => {
          this.documento = response; // TODO: convert the object to a Coffee instance
          //this.ui.setTitle(this.documento.codiceTipoDocumento);
        })
      }
    })
  }

}
