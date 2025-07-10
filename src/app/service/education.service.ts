import { Injectable } from '@angular/core';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducations() : Education[]{
    let educations : Education[] = []

    educations.push(
      {
        program : 'BS - Information Technology',
        school : 'University of Southern Philippines Foundation',
        year_graduated : '2022',
        award : 'Magna Cum Laude'
      } as Education
    )


    return educations
  }
}
