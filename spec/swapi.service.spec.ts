import "reflect-metadata";
import {SwapiService} from "../src/services/swapi.service";

describe('Swapi Service', () => {

    let swapiService: SwapiService;

    beforeEach(() => {
        swapiService = new SwapiService();
    });

    it('should throw an error if invalid page is received', (done) => {
            swapiService.getAllPlanets(26000)
                .then(() => {
                    fail('Should not accept invalid page.');
                    done();
                })
                .catch((err: Error) => {
                    expect(err.message).toBe('Page must be between 1-7');
                    done();
                });
    });
});