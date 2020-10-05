class JoachimJanke {

    readonly github = "github.com/Jochnickel";
    readonly references = [];
    readonly languages = ["English", "Java", "SQL", "C", "Typescript", "Python"];

    constructor(getNextJob) {
        const abiturPromise = this.attendSchool(Abitur);

        this.attendApprenticeship(ElektronikerFuerBetriebstechnik);

        this.workAndTravel("Canada", "1 Year");

        this.work("Elektriker", "7 Months");
        this.addReference("Carsten Steiner, CJ Steiner GbR, Deislingen");

        abiturPromise.then(() => this.attendUni(Elektrotechnik, Bachelor));

        getNextJob().then(this.work)
    }


    async attendSchool(degree: GermanSchoolDegree): Promise<GermanSchoolDegree> {
        this.learnLanguage("English");
        this.learnLanguage("Pascal", "Delphi");
        return new Promise<GermanSchoolDegree>(() => new Abitur(Grade.BEFRIEDIGEND));
    }

    async workAndTravel(country: string, duration: string) {
        this.idle("1 Month");
        this.work("Housekeeping Attendant", "6 Months");
        this.work("This and that", "1 Month");
        this.work("Maintenance Personnel", "4 Months");
        this.addReference("Torsten Merker, Banff International Hostel, Banff");
        this.learnLanguage("English");
    }

    async attendApprenticeship(intendedProfession: Profession) {
        this.addReference("Bernhard Dieterle, DB Netz AG, Abt. Leit- und Sicherungstechnik, Villingen")
        return new Promise<Profession>(() => new ElektronikerFuerBetriebstechnik(Grade.SEHR_GUT));
    }

    async attendUni(intendedSubject: Elektrotechnik, intendedDegree: AcademicDegree) {
        this.learnLanguage("Java", "C", "SQL");
        throw new Error("Joachim"); //TODO
    }

    async work(jobtitle: string, duration: string) { }

    async idle(duration: string) {
        setTimeout(() => {

        }, stringToSeconds(duration));
    }

    addReference(reference: string) {
        this.references.push(reference);
    }

    learnLanguage(...languages: string[]) {
        languages.forEach(l => {
            if (!this.languages.includes(l)) {
                this.languages.push(l);
            }
        });
    }
}

enum Grade { SEHR_GUT, GUT, BEFRIEDIGEND, AUSREICHEND, MANGELHAFT, UNGENÜGEND }

interface GermanSchoolDegree { }

class Abitur implements GermanSchoolDegree {
    constructor(grade: Grade) {
        //TODO
    }
}

interface AcademicDegree { }

class Bachelor implements AcademicDegree { }

interface Profession { }

class ElektronikerFuerBetriebstechnik implements Profession {
    constructor(grade: Grade) {
        //TODO
    }
}

interface AcademicSubject { }

class Elektrotechnik implements AcademicSubject { }

function stringToSeconds(str: string): number {
    throw new Error("Method not implemented.");
}
