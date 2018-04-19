import { TogglService } from './../../services/toggl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  name;
  constructor(public data: TogglService) { }

  ngOnInit() {
  }

  addProject() {
    this.data.addProject(name).subscribe((p) => {
      console.log(p);
    });
  }

}
