import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  title = 'mfe-hellow';
}
