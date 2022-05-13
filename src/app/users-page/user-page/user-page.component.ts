import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  @Input('userData') user!: { id: number; name: string; surname: string; };
  
  id!: number;
  name!: string;
  surname!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
      this.surname = params['surname'];
    })
  }

  backToUsers() {
    this.router.navigate(['/users']);
  }
}
