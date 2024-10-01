import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss'
})
export class StudentPageComponent {
  studentName! : string;
  route: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.studentName = (params.get('studentName'))!
    })
  }


}
