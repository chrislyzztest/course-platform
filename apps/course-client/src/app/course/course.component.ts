import { Component, OnInit } from '@angular/core';
import { CourseListFacadeService } from '@course-platform/course-client-lib';
import { CourseSection } from '@course-platform/shared/interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  sections$: Observable<CourseSection[]>;
  isLoading$: Observable<Boolean>;

  constructor(private courseListFacadeService: CourseListFacadeService) {}

  ngOnInit() {
    this.isLoading$ = this.courseListFacadeService.isLoading$;
    this.sections$ = this.courseListFacadeService.sections$;
  }
}
