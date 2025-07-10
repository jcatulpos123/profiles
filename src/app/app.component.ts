import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsService } from './service/skills.service';
import { CommonModule } from '@angular/common';
import { Experience } from './model/experience';
import { ExperiencesService } from './service/experiences.service';
import { EducationService } from './service/education.service';
import { PersonalProjectsService } from './service/personal-projects.service';
import { Education } from './model/education';
import { PersonalProjects } from './model/personal-projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [SkillsService]
})
export class AppComponent {
  title = 'CV'
  MY_NAME : string = 'Jhon Diode O. Catulpos'
  CURRENT_POSITION : string = 'Junior Developer'
  ABOUT_ME : string = 'I\'m a goal-oriented developer passionate in learning new things and in delivering projects that meet standards. I am committed in learning and getting things done.'

  frontendStack : string[] = []
  backendStack : string[] = []
  databaseStack : string[] = []

  fColumns : number
  bColumns : number
  dColumns : number

  myExperiences : Experience[]
  myEducation : Education[]
  myPersonalProjects : PersonalProjects[]

  constructor(
    private skillService : SkillsService,
    private experienceService : ExperiencesService,
    private educationService : EducationService,
    private personalProjectsService : PersonalProjectsService
  ) {
    this.frontendStack = skillService.getFrontendSkills()
    this.backendStack = skillService.getBackendSkills()
    this.databaseStack = skillService.getDatabaseSkills()

    this.fColumns = this.frontendStack.length % 5 == 0 ? Math.trunc(this.frontendStack.length / 5) : Math.trunc(this.frontendStack.length / 5) + 1
    this.bColumns = this.backendStack.length % 5 == 0 ? Math.trunc(this.backendStack.length / 5) : Math.trunc(this.backendStack.length / 5) + 1
    this.dColumns = this.databaseStack.length % 5 == 0 ? Math.trunc(this.databaseStack.length / 5) : Math.trunc(this.databaseStack.length / 5) + 1

    //experience
    this.myExperiences = experienceService.getExperiences()
    this.myEducation = educationService.getEducations()
    this.myPersonalProjects = personalProjectsService.getPersonalProjects()
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
}
