import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadrumbs',
  templateUrl: './breadrumbs.component.html',
  styles: []
})
export class BreadrumbsComponent implements OnInit {

  label : string = '';

  constructor( private route:Router,
               public title:Title,
               public meta:Meta ) {
    this.getDataRoute()
        .subscribe( data => {
          console.log( data );
          this.label = data.titulo;
          this.title.setTitle( this.label );

          let metaTag:MetaDefinition = {
            name: 'description',
            content: this.label
          };
          this.meta.updateTag(metaTag);

        });
  }

  getDataRoute() {
    return this.route.events
        .filter( event => event instanceof ActivationEnd )
        .filter( (event:ActivationEnd) => event.snapshot.firstChild === null )
        .map( (event: ActivationEnd) => event.snapshot.data );
  }

  ngOnInit() {
  }

}
