import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProjectSkillService extends ApiService<ProjectSkillEntity> {

  constructor(@Inject('backendUrl') protected backendUrl: string,
              protected http: HttpClient) {
    super(backendUrl, http);
  }

  /**
   * @param {Record<string, any>} data
   * @returns {ProjectSkillEntity}
   */
  protected transformData(data: Record<string, any>): ProjectSkillEntity {
    return new ProjectSkillEntity(data);
  }

  /**
   * @returns {string}
   */
  protected endpointUrl(): string {
    return '/project-skills';
  }
}
