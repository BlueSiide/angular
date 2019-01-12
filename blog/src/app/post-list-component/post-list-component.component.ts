import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post-list-component.component.html',
	styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

	@Input() postName: string;
	@Input() postContent: string;
	@Input() postDate: string;
	@Input() postLoves: number;

	constructor() { }

	ngOnInit() {
	}

	downVote() {
		this.postLoves--;
		console.log(this.postLoves);
	}
	upVote() {
		this.postLoves++;
		console.log(this.postLoves);
	}
}
