import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Description } from '../description.model';
import { Post } from '../posts.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  postId: number;
  desc: Description;

  constructor(private route: ActivatedRoute,private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['postId'];

    //   this.http.get(`assets/description.json`).subscribe((data: any) => {
    //     const foundDesc = data.description.find((p: any) => p.postId === this.postId);
    //     this.desc = foundDesc;
    //   });
    // });
    this.http.get(`assets/description.json`).subscribe((data: any) => {
      const foundDescription = data.postDescriptions.find(
        (d: Description) => d.postId === this.postId
      );
      this.desc = foundDescription;
    });
  });
  }
  
}
