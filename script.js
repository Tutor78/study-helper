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
    }
]

remainingStudiesEl.textContent = 'You have ' + studies.length + ' studies remaining to study';

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