import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navber } from '../sidebar/navber';
import { header } from '../sidebar/header';
import { footer } from '../sidebar/footer';
import { Topbar } from './topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navber, header , footer , Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string ="the title is can be change"
  protected readonly title = signal('my-angular-app');
}
