import { Component, OnInit } from '@angular/core';
import {wordtypes} from '../mockresponse'
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-sentence',
  templateUrl: './create-sentence.component.html',
  styleUrls: ['./create-sentence.component.css']
})
export class CreateSentenceComponent implements OnInit {

  wordtypes = wordtypes;
  constructor() { }

  ngOnInit(): void {
  }

}
