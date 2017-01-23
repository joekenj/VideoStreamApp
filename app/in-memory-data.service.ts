import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let videos = [
                    { id: 1, size:1000, name: 'Own goal', imageUrl: 'http://127.0.0.1:8081/thumbnails/Own_goal.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'Own goal by goalkeer in Premier Leauge.' },
                    { id: 2, size:1500, name: 'Threadmill fail', imageUrl: 'http://127.0.0.1:8081/thumbnails/Threadmill.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'Threadmill fail on live TV.' },
                    { id: 3, size:8900, name: 'Fire brigade', imageUrl: 'http://127.0.0.1:8081/thumbnails/Fire_brigade.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'Fireman gets hit by water gun.' },
                    { id: 4, size:1300, name: 'Volkswagen jetta', imageUrl: 'http://127.0.0.1:8081/thumbnails/VW_Jetta.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'Funny Volkswagen Jetta commercial set in tropics.' },
                    { id: 5, size:9900, name: 'Souvenir from France', imageUrl: 'http://127.0.0.1:8081/thumbnails/Souvenir_from_france.JPG', videoUrl: 'app/media/videos/Own_goal.MP4', description: 'How to take a fancy souvenir from Paris.' }
    ];
    return {videos};
  }
}