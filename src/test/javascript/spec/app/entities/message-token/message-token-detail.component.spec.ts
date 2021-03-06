/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FixedAssetsTestModule } from '../../../test.module';
import { MessageTokenDetailComponent } from 'app/entities/message-token/message-token-detail.component';
import { MessageToken } from 'app/shared/model/message-token.model';

describe('Component Tests', () => {
  describe('MessageToken Management Detail Component', () => {
    let comp: MessageTokenDetailComponent;
    let fixture: ComponentFixture<MessageTokenDetailComponent>;
    const route = ({ data: of({ messageToken: new MessageToken(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FixedAssetsTestModule],
        declarations: [MessageTokenDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(MessageTokenDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MessageTokenDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.messageToken).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
