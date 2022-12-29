import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private modalService: NgbModal) { }

  openEducCursos(educCursos: TemplateRef<any>) {
    this.modalService.open(educCursos, { size: 'lg' });
  }

}
