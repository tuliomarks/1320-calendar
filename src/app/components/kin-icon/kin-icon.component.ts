import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kin-icon',
  templateUrl: './kin-icon.component.html',
  styleUrls: ['./kin-icon.component.scss'],
})
export class KinIconComponent implements OnInit {
  @Input() tone: number;
  @Input() seal: number;

  constructor() { }

  ngOnInit() {}

}
