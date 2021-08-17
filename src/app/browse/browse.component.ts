import { Component } from '@angular/core';
import { Request } from "../models/Request";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.sass']
})
export class BrowseComponent {

  requests!: Request[];

  constructor() {
    // TODO get actual requests
    this.requests = [
      new Request('Request 1 Title', 'https://via.placeholder.com/150',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo ac nisl rhoncus aliquet. Sed turpis elit, consectetur ac maximus sed, vehicula eget odio. Nulla facilisi. Phasellus pharetra elit leo, a facilisis mauris ultricies vel. Nam porttitor maximus neque, eu condimentum ligula tincidunt eget. Sed mauris metus, gravida a magna id, faucibus sodales dui.',
        111111, '08/16/2021','test1', 'test1'),
      new Request('Request 2 Title', 'https://via.placeholder.com/150',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo ac nisl rhoncus aliquet. Sed turpis elit, consectetur ac maximus sed, vehicula eget odio. Nulla facilisi. Phasellus pharetra elit leo, a facilisis mauris ultricies vel. Nam porttitor maximus neque, eu condimentum ligula tincidunt eget. Sed mauris metus, gravida a magna id, faucibus sodales dui.',
        222222, '08/16/2021','test2', 'test2'),
      new Request('Request 3 Title', 'https://via.placeholder.com/150',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo ac nisl rhoncus aliquet. Sed turpis elit, consectetur ac maximus sed, vehicula eget odio. Nulla facilisi. Phasellus pharetra elit leo, a facilisis mauris ultricies vel. Nam porttitor maximus neque, eu condimentum ligula tincidunt eget. Sed mauris metus, gravida a magna id, faucibus sodales dui.',
        333333, '08/16/2021','test3', 'test3'),
      new Request('Request 4 Title', 'https://via.placeholder.com/150',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo ac nisl rhoncus aliquet. Sed turpis elit, consectetur ac maximus sed, vehicula eget odio. Nulla facilisi. Phasellus pharetra elit leo, a facilisis mauris ultricies vel. Nam porttitor maximus neque, eu condimentum ligula tincidunt eget. Sed mauris metus, gravida a magna id, faucibus sodales dui.',
        444444, '08/16/2021','test4', 'test4'),
    ];
  }

}
