import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Super_proyect';
  nombre = 'El Ban';
  layers: NodeListOf<HTMLElement>;

  constructor() {
    this.layers = document.querySelectorAll("[data-type='parallax']");
  }

  ngOnInit(): void {
    this.layers = document.querySelectorAll("[data-type='parallax']");
    window.addEventListener('scroll', (event) => {
      let depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = window.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i] as HTMLElement;
      depth = layer.getAttribute('data-depth');
      movement = -(Number(topDistance) * Number(depth) - Number(topDistance));
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'as any] = translate3d;
      layer.style['-moz-transform' as any] = translate3d;
      layer.style['-ms-transform' as any] = translate3d;
      layer.style['-o-transform' as any] = translate3d;
      layer.style.transform = translate3d;
      }
    });
  }
}