import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  child1Form: FormGroup;
  @Output() isChild1FormValid: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.child1Form = this.fb.group({
      projectName: ['', Validators.required],
      projectSource: ['', Validators.required],
    });

    this.child1Form.statusChanges.subscribe((value) => {
      if (value === 'VALID') {
        this.isChild1FormValid.emit(true);
      }
    });
  }
}
