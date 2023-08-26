import { Injectable } from '@nestjs/common';
import { Cat } from './models/cat.model';

@Injectable()
export class CatService {
  findAll(): Cat[] {
    return [
      {
        id: '1',
        name: 'Niaw',
        description: 'This cat is name "Niaw"',
        creationDate: new Date(),
      },
      {
        id: '2',
        name: 'First',
        description: 'This cat is name "First"',
        creationDate: new Date(),
      },
    ];
  }
}
