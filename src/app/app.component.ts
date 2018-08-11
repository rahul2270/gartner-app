import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gartner';

  ngOnInit() {
    const loadingContainer: HTMLElement = document.getElementsByClassName('loading-indicator').item(0) as HTMLElement;
    if (loadingContainer) {
      loadingContainer.style.display = 'none';
    }
  }
}
