import { Component } from '@angular/core';

interface InputField {
  placeholder: string;
  dataType: string;
  inputValue: string;
  inputValueLength: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  inputFields: InputField[] = [
    {
      placeholder: 'name',
      dataType: 'text',
      inputValue: '',
      inputValueLength: 0,
    },
    {
      placeholder: 'age',
      dataType: 'number',
      inputValue: '',
      inputValueLength: 0,
    },
    {
      placeholder: 'email',
      dataType: 'email',
      inputValue: '',
      inputValueLength: 0,
    },
    {
      placeholder: 'password',
      dataType: 'password',
      inputValue: '',
      inputValueLength: 0,
    },
  ];

  getLength(index: number) {
    this.inputFields[index].inputValueLength =
      this.inputFields[index].inputValue.length;
  }
}
