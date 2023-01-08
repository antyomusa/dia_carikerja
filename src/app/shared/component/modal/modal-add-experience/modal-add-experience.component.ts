import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-experience',
  templateUrl: './modal-add-experience.component.html',
  styleUrls: ['./modal-add-experience.component.scss']
})
export class ModalAddExperienceComponent implements OnInit {


  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
