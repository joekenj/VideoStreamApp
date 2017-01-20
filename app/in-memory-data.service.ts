import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let videos = [
                    { id: 1, size:1000, name: 'souvenir', imageUrl: 'app/media/thumbnails/Own_goal.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'fancy' },
                    { id: 2, size:1500, name: 'fire', imageUrl: 'app/media/thumbnails/Own_goal.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'water' },
                    { id: 3, size:8900, name: 'car', imageUrl: 'app/media/thumbnails/Own_goal.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'jetta' },
                    { id: 4, size:1300, name: 'telly', imageUrl: 'app/media/thumbnails/VW_Jetta.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'fail' },
                    { id: 5, size:9900, name: 'goal', imageUrl: 'app/media/thumbnails/Own_goal.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'goalkeeper' }
    ];
    return {videos};
  }
}