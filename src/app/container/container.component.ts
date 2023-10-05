import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load the data from the JSON file
    this.http.get<{ posts: Post[] }>('assets/posts.json').subscribe((data) => {
      this.posts= data.posts;
      console.log(this.posts);
    });
  }
}