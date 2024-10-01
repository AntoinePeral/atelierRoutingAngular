import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-searching-bar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './searching-bar.component.html',
  styleUrl: './searching-bar.component.scss'
})
export class SearchingBarComponent {
  studentName: String = '';

  router : Router = inject(Router); 

  onSubmit(){
    console.log(this.studentName);
    this.router.navigate(['/wcs', this.studentName])
  }

}
