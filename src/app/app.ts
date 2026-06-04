import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/pages/header/header';
import { Section } from './components/pages/section/section';
import { Footer } from './components/pages/footer/footer';
import { CampoData } from './components/pages/campo-data/campo-data';
import { Sidebar } from './components/pages/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Section, Footer, CampoData, Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('controle-mensal');
  iconeMenu = '/menu-lateral.png';
  iconeMenuHover = '/menuLateral.png';
}
