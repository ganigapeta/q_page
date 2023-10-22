import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  dropdownList: any = [];
  dropdownSettings = {};

  get f() {
    return this.registerForm.controls;
  }

  constructor() {
    this.registerForm = this.createForm();
  }

  ngOnInit(): void {
    this.initDropDownList()
  }

  createForm() {
     return new FormGroup({
      fullName: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      gender: new FormControl('', [ Validators.required ]),
      dob: new FormControl('', [ Validators.required ]),
      state: new FormControl('', [ Validators.required ]),
      multi: new FormControl('')
    });
  }

  submitForm() {
    console.log('Form Data>>', this.registerForm.value);
  }

  initDropDownList() {
    this.dropdownList = [
      { id: 1, text: 'Name', isSelected: true },
      { id: 2, text: 'Description', isSelected: true },
      { id: 6, text: 'Inactive Date', isSelected: true },
      { id: 7, text: 'Comments', isSelected: true },
      { id: 8, text: 'Modified By', isSelected: true },
      { id: 9, text: 'Modified Date', isSelected: true },
      { id: 10, text: 'Actions', isSelected: true }
    ];
  }

  onCurrentRow(event: any) {}
}
