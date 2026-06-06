import { Component } from '@angular/core';

@Component({
  selector: 'app-shell-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class ShellHomeComponent {
  readonly projects = [
    {
      name: 'shell',
      port: '4200',
      description: 'Host que orquestra a navegacao e carrega os remotes em tempo de execucao.',
    },
    {
      name: 'mf1',
      port: '4201',
      description: 'Remote focado em uma vitrine de catalogo, carregado pela rota /mf1.',
    },
    {
      name: 'mf2',
      port: '4202',
      description: 'Remote focado em indicadores operacionais, carregado pela rota /mf2.',
    },
  ];
}
