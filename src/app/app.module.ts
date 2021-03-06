import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumbersSortPipePipe } from './numbers-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';
import { ConsumeLocalService2Component } from './consumeService/consume-local-service2/consume-local-service2.component';
import { UsersAPIComponentComponent } from './remote/users-apicomponent/users-apicomponent.component';
import { AutoSearchPipePipe } from './myPipes/auto-search-pipe.pipe';
import { UserDetailComponent } from './remote/user-detail/user-detail.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { AnimationComponent } from './animation/animation/animation.component';
import { SlideComponent } from './slide/slide.component';
import { ProductLoadingPageComponent } from './product-loading-page/product-loading-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe,
    NumbersSortPipePipe,
    ConsumeLocalService1Component,
    ConsumeLocalService2Component,
    UsersAPIComponentComponent,
    AutoSearchPipePipe,
    UserDetailComponent,
    TemplateFormComponent,
    ModelFormComponent,
    AnimationComponent,
    SlideComponent,
    ProductLoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'task',pathMatch:'full'
      },
      {
          path:'family', component:GrandParentComponent,
          children:[
                      {
                        path:'',redirectTo:'father',pathMatch:'full'
                      },
                      {
                        path:'father', component:FatherComponent
                      },
                      {
                        path:'mother',component:MotherComponent
                      }
          ]
      },
      {
        path:'task',component:TaskManagerComponent
      },
      {
        path:'consumeLocal1', component:ConsumeLocalService1Component
      },
      {
        path:'consumeLocal2', component:ConsumeLocalService2Component
      },
      {
        path:'remoteData', component:UsersAPIComponentComponent
      },
      {
        path:'remoteData/:id', component:UserDetailComponent
      },
      {
        path:'templateForm', component:TemplateFormComponent
      },
      {
        path:'modelForm', component:ModelFormComponent
      },
      {
        path:'animate', component:AnimationComponent
      },
      {
        path:'slide', component:SlideComponent
      },
      {
        path:'plp', component:ProductLoadingPageComponent
      },
      {
        path:'**', component:NotFoundComponent
      }]),
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
