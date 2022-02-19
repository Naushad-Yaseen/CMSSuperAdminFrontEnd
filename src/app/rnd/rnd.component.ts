import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RNDComponent implements OnInit {
  name: any;
  animal: any;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
