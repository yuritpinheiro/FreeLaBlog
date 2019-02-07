import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PastPostsComponent } from './past-posts/past-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './masthead/masthead.component';
import { PreviewPostComponent } from './preview-post/preview-post.component';
import { AuthorPostComponent } from './author-post/author-post.component';
import { LoadingComponent } from './loading/loading.component';
import { PreviewCommentComponent } from './preview-comment/preview-comment.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CommentFormComponent } from './comment-form/comment-form.component';

import { MomentModule } from 'ngx-moment';
import { FormPostComponent } from './form-post/form-post.component';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListPostComponent } from './list-post/list-post.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PastPostsComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    PreviewPostComponent,
    AuthorPostComponent,
    LoadingComponent,
    PreviewCommentComponent,
    CommentFormComponent,
    FormPostComponent,
    FormCategoryComponent,
    ListCategoryComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule,
    MomentModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
