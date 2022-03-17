import {Injectable} from '@nestjs/common';

@Injectable()
export class PlayersService {
    public players = [
        {
            name: 'Thibaut Curtois',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/carvajal_380x501_20210826062807.jpg',
            info: '11. Mai 1992, Bree - Belgium',
        },
        {
            name: 'Sergio Ramos',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/nacho_380x501_20210826062808.jpg',
            info: '30. March 1986, Camas - Spain',
        },
        {
            name: 'Raphael Varane',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/kroos_380x501_20210826062809.jpg',
            info: '25. April 1993, Lille - France',
        },
        {
            name: 'Garteh Bale',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/casemiro_380x501_20210826062810.jpg',
            info: '16. Juli 1989, Cardiff - Wales',
        },
        {
            name: 'Isco',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/lucasv_380x501_20210826062813.jpg',
            info: '21. April 1992, Benalmadena - Spain',
        },
        {
            name: 'Vinicius Junior',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/isco_380x501_20210826062811.jpg',
            info: '12. Juli 2000, Sao Goncalo - Brasil',
        },
        {
            name: 'Eden Hazard',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/jovic_380x501_20210826062816.jpg',
            info: '7. January 1991, La Louviere - Belgium',
        },
        {
            name: 'Karim Benzema',
            imgURL: 'https://www.realmadrid.com/img/vertical_380px/asensio_he19417_380x501_20210910082737.jpg',
            info: '19. December 1987, Lyon - France',
        },
    ];
}
