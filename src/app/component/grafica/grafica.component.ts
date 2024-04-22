import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements AfterViewInit {

  @ViewChild('myChart') chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Ventas mensuales',
        data: [100, 200, 150, 300, 200, 250, 150, 280, 220, 350, 180, 400],
        fill: true,
        backgroundColor: 'rgba(212, 120, 15, 0.2)', // Color de fondo con opacidad
        borderColor: '#d4780f', // Color del borde
        tension: 0.1
      }]
    };

    const options = {
      scales: {
        y: {
          display: false // Oculta el eje Y y sus etiquetas
        },
        x: {
          grid: {
            display: false // Oculta la cuadrícula del eje X
          }
        }
      },
      maintainAspectRatio: false, // Permite que la gráfica no mantenga la proporción
      responsive: true // Habilita la capacidad de respuesta
    };

    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.renderChart();
  }
}
