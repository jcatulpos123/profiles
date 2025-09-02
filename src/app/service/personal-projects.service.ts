import { Injectable } from '@angular/core';
import { PersonalProjects } from '../model/personal-projects';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

  constructor() { }

  getPersonalProjects() : PersonalProjects[] {
    let personalProjects : PersonalProjects[] = []
    // 1
    personalProjects.push(
      {
        name : 'Profile Page',
        techstack : 'Angular & CSS',
        detail : 'My dynamic profile page',
        link : ''
      } as PersonalProjects
    )
    // 2
    personalProjects.push(
      {
        name : 'Church Record Logger',
        techstack : 'Angular & Supabase',
        detail : 'Small web app used in our church for logging records (in-progress)',
        link : 'https://bhcf-vip-logger.vercel.app/login'
      } as PersonalProjects
    )
    //3
    personalProjects.push(
      {
        name : 'Church Record Logger (SF)',
        techstack : 'Apex & LWC',
        detail : 'Salesforce dev org for vip logging and attendance',
        link : 'https://blessedhopechristianfellow2-dev-ed.develop.lightning.force.com/'
      } as PersonalProjects
    )

    return personalProjects
  }
}
