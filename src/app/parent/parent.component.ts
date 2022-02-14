import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isChild1FormValid: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  enableSubmitButton(isValid: boolean) {
    this.isChild1FormValid = isValid;
  }

}