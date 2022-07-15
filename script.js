const remainingStudiesEl = document.getElementById('remainingStudies');
const studyTitleEl = document.getElementById('studyTitle');
const studyLinkEl = document.getElementById('studyLink');
const perspectiveEl = document.getElementById('perspective');

let studies = [
    {
        id: 1,
        title: 'Repertoire Quickstarter',
        link: 'XLR6iYQH',
        perspective: 'White / Black'
    },
    {
        id: 2,
        title: 'Italian',
        link: 'NLDOg7Kb',
        perspective: 'Black'
    },
    {
        id: 3,
        title: '1.e4 e5 Sidelines',
        link: 'PiZSxyJi',
        perspective: 'Black'
    },
    {
        id: 4,
        title: 'Albin Countergambit',
        link: 'iSiREkeM',
        perspective: 'Black'
    },
    {
        id: 5,
        title: "English, Larsen's, Sokolosky, Van 't Kruijs, and Bird's",
        link: 'Od7sNpeZ',
        perspective: 'Black'
    },
    {
        id: 6,
        title: 'London, Reversed Jobava London, and Reti',
        link: 'pU3Mc52p',
        perspective: 'Black'
    },
    {
        id: 7,
        title: 'Ruy Lopez',
        link: 'CxmscXlw',
        perspective: 'Black'
    },
    {
        id: 8,
        title: 'Scotch Game',
        link: '0E3TUjNE',
        perspective: 'Black'
    },
    {
        id: 9,
        title: 'Alapin Sicilian',
        link: '3p5uwHW5',
        perspective: 'White'
    },
    {
        id: 10,
        title: 'Caro-Kann',
        link: 'hl5DTibU',
        perspective: 'White'
    },
    {
        id: 11,
        title: 'French Defense',
        link: 'iNYke39X',
        perspective: 'White'
    },    {
        id: 12,
        title: 'Petrove Defense, Philidor Defense, Elephant Gambit, and Latvian Gambit',
        link: 'FMgo2I5N',
        perspective: 'White'
    },    {
        id: 13,
        title: "Pirc, Modern, Alekhine, and Owen's Defense",
        link: '0IYypy6S',
        perspective: 'White'
    },    {
        id: 14,
        title: 'Scandinavian',
        link: 'NcpdgcC4',
        perspective: 'White'
    },    {
        id: 15,
        title: 'Scotch Gambit with 4...Bc5',
        link: 'lUYueCtR',
        perspective: 'White'
    },    {
        id: 16,
        title: 'Scotch Gambit with 4...Nf6',
        link: '1ix6x4HL',
        perspective: 'White'
    },    {
        id: 17,
        title: 'Scotch Gambit Sidelines',
        link: 'vs4ZZzxI',
        perspective: 'White'
    },
]

remainingStudiesEl.textContent = 'You have ' + studies.length + ' studies to start you off!';

function studyInfo() {
    let randomStudy;
    let studyLink;

    // console.log(remainingStudiesEl);
    // console.log(studyTitleEl);
    // console.log(studyLinkEl);
    
    // console.log(studies);
    
    randomStudy = studies[Math.floor(Math.random() * studies.length)];

    if (randomStudy == undefined) {
        remainingStudiesEl.textContent = 'You are finished!';
        studyTitleEl.textContent = 'N/A';
        perspectiveEl.textContent = 'Perspective: Who Cares?';
        studyLinkEl.textContent = 'There is no link!'
        studyLinkEl.href = '';
    }

    // console.log(randomStudy);

    // console.log(randomStudy.id);

    for (i = 0; i < studies.length; i++) {
        if (randomStudy.id == studies[i].id) {
            // console.log(randomStudy.id);

            studies.splice(i, 1);
        }
    }

    // console.log(studies);

    studyLink = 'https://lichess.org/study/' + randomStudy.link;
    
    if (studies.length > 1) {
        remainingStudiesEl.textContent = 'You have ' + studies.length + ' studies left to do!';
    } else if (studies.length == 1) {
        remainingStudiesEl.textContent = 'You have ' + studies.length + ' study left!';
    } else {
        remainingStudiesEl.textContent = 'Last One!';
    }

    studyTitleEl.textContent = randomStudy.title;

    perspectiveEl.textContent = 'Perspective: ' + randomStudy.perspective;

    studyLinkEl.href = studyLink;
    studyLinkEl.textContent = studyLink;
}