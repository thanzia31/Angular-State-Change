import { CommonModule } from '@angular/common';
import { Component, OnInit ,HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'state-change';

  dis_text = '';        
  saved_text = '';      
  check_var = false;    
  ngOnInit(): void {
    console.log(this.dis_text);
  }

  changesMade() {
    if (this.dis_text === this.saved_text) {
      alert(' No changes made.');
      return;
    }
    this.saved_text = this.dis_text;
    this.check_var = true;
    console.log('Saved:', this.saved_text);
  }

    @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: BeforeUnloadEvent): void {
    if (this.dis_text !== this.saved_text) {
      $event.preventDefault();
      $event.returnValue = true; 
    }
  }
}
