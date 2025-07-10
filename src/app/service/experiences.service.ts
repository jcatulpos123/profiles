import { Injectable } from '@angular/core';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor() { }

  getExperiences() : Experience[] {
    let experiences : Experience[] = []

    // position : '',
    // company : '',
    // year : '',
    // role    : ''
    experiences.push(
      {
        position : 'Junior Developer I',
        company : 'Magaya Corporation',
        year : '2024 - Present',
        role : 'As a full-stack developer, I build new features, enhancements, and maintains system integrity.'
      } as Experience
    ) 

    experiences.push(
      {
        position : 'Salesforce Admin / Developer',
        company : 'Accenture Inc.',
        year : '2022 - 2024',
        role : 'Address Business-As-Usual issues; Fix bugs and develop new Salesforce features in an Agile Scrum environment.'
      } as Experience
    ) 

    experiences.push(
      {
        position : 'Intern',
        company : 'Accenture Inc.',
        year : 'Jan 2022 - April 2024',
        role : 'Developed a desktop application using Python and Selenium for automating recurring tasks.'
      } as Experience
    ) 

    return experiences as Experience[]
  }

}
