import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { PastPostsComponent } from 'src/app/past-posts/past-posts.component';
import { AuthorPostComponent } from 'src/app/author-post/author-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PastPostsComponent },
  { path: 'author-post', component: AuthorPostComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
