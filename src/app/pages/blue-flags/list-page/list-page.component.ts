import { Component, OnInit } from '@angular/core';
import { BlueFlag } from 'src/app/core/models/blue-flag';
import { BlueFlagService } from 'src/app/core/services/blue-flag.service';

@Component({
  selector: 'bf-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  blueFlags: BlueFlag[] = [];

  constructor(private blueFlagService: BlueFlagService) { }

  ngOnInit(): void {
    this.blueFlags = this.blueFlagService.retrieveBlueFrags();
  }

}
