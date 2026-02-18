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
        position : 'Salesforce Specialist (Contractor)',
        company : 'AppAid LLC',
        year : 'October 2025 - Present',
        role : `
        Results-driven Salesforce Administrator and Developer responsible for managing backend operations, maintaining system integrity, and optimizing business processes.
        Owns Salesforce Administration overseeing case management workflows, user access (profiles, roles, hierarchies, and permission sets), and approval processes.
        Proactively monitors system health, ensures data security through proper object and field-level configurations, and stays current with seasonal Salesforce releases.
        Designs and implements scalable automated solutions using Flows, Apex, and Lightning Web Components.
        Experienced integrating Salesforce with external platforms such as Slack, Nuxt, Supabase, and custom web apps using Named Credentials, External Services, and OAuth Tokens with Flows. `
      } as Experience
    )

    experiences.push(
      {
        position : 'Junior Developer I',
        company : 'Magaya Corporation',
        year : 'July 2024 - October 2025',
        role : `
        Full Stack Developer specializing in Angular and Java Spring Boot, responsible for designing, developing, and maintaining scalable web applications.
        Delivered new features and system enhancements while ensuring application stability, performance, and data integrity.
        Collaborated in agile environments to build RESTful APIs and integrate frontend and backend services efficiently.
        Participated in an Agile SCRUM environment.
        `
      } as Experience
    )

    experiences.push(
      {
        position : 'Salesforce Admin / Developer',
        company : 'Accenture Inc.',
        year : 'August 2022 - July 2024',
        role : `
        Managed Business-As-Usual (BAU) support, handling reports, data verification, and system-related tickets to ensure smooth daily operations.
        Configured and maintained Flows, Standard and Custom Objects, including page layouts, buttons, validation rules, global picklists, and custom metadata.
        Administered user access through profiles and roles and maintained Email-to-Case functionality.
        Participated in an Agile SCRUM environment.
        `
      } as Experience
    )

    experiences.push(
      {
        position : 'Intern',
        company : 'Accenture Inc.',
        year : 'Jan 2022 - April 2024',
        role : `
        Focused on building an application to be used by Supervisors and Team Leads that automate their recurring tasks.
        Built a user-friendly application with GUI written in Python with Selenium to automate and simulate web tasks.
        `
      } as Experience
    )

    return experiences as Experience[]
  }

}
