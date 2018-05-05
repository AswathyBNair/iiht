import { Component, OnInit } from '@angular/core';
import { workout } from '../workout';
import { WorkoutService } from '../workout-service';
@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
workoutForm: workout = {
    title: 'title1',
    note: 'Windstorm',
    category:'one'
  };
  constructor(private workoutService: WorkoutService) { }

submitForm(): void {
    this.workoutService.submitForm(this.workoutForm);
    alert("saved");
    }
  ngOnInit() {
  }

}
