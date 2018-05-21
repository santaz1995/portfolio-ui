import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProjectImageService } from 'app/common/service/data/api-project-image.service';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  templateUrl: 'project-image-store.component.html',
})
export class ProjectImageStoreComponent {

  public projectId: number;

  /**
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {NotificationsService} notification
   * @param {ApiProjectImageService} projectImageService
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private notification: NotificationsService,
              private projectImageService: ApiProjectImageService) {
    this.projectId = this.route.snapshot.params.id;
  }
}
