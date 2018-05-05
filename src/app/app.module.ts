import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkoutService } from './workout-service';
import { CategoryService } from './category-service';
import { WorkoutComponent } from './workout/workout.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
{ path: 'workout', component: WorkoutComponent },

  { path: 'create-workout', component: CreateWorkoutComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'track', component: TrackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    CreateWorkoutComponent,
    CategoryComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WorkoutService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
