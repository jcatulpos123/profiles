import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSalesforceSkills() : string[] {
    let salesforceSkills : string[] = []

    salesforceSkills.push('Salesforce Admin')
    salesforceSkills.push('SFDX')
    salesforceSkills.push('Apex')
    salesforceSkills.push('Lightning Web Component')
    salesforceSkills.push('Named Credentials & External Services')

    return salesforceSkills;
  }


  getFrontendSkills() : string[] {
    let frontendSkills : string[] = []

    // .push new acquired skills
    frontendSkills.push('Angular + rxjs')
    frontendSkills.push('Typescript')

    return frontendSkills
  }

  getBackendSkills() : string[] {
    let backendSkills : string[] = []

    // .push new acquired skills
    backendSkills.push('Java')
    backendSkills.push('Spring Boot')
    backendSkills.push('Spring WebFlux')
    backendSkills.push('REST API')
    backendSkills.push('Salesforce Apex')
    backendSkills.push('Python')

    return backendSkills
  }

  getDatabaseSkills() : string[] {
    let databaseSkills : string[] = []

    // .push new acquired skills
    databaseSkills.push('PostgreSQL')
    databaseSkills.push('MySQL')
    databaseSkills.push('Supabase')

    return databaseSkills
  }
}
