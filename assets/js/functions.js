/*Services card  */

app.component('services-card', {
    template:

    /*html*/
        `<div class="developpement card-column" data-aos="fade-right" data-aos-duration="3000">
        <h4>Développement informatique</h4>
        <hr>
        <p><i class="fas fa-code icon-services"></i></p>
        <p class="services-resume"> {{ servicesDev }} </p>
    </div>
    <div class="network-computer-services card-column" data-aos="fade-down" data-aos-duration="3000">
        <h4>Réseaux informatiques</h4>
        <hr>
        <p><i class="fas fa-server icon-services"></i></p>
        <p class="services-resume"> {{ servicesNetwork }}</p>
    </div>

    <!--Right column services-->
    <div class="bureatique card-column" data-aos="fade-up" data-aos-duration="3000">
        <h4>Bureautique</h4>
        <hr>
        <p><i class="fas fa-desktop icon-services"></i></p>
        <p class="services-resume">{{ servicesBureautique }}
        </p>
    </div>
    <div class="system-administration card-column" data-aos="fade-left" data-aos-duration="3000">
        <h4>Admnistration système monoposte</h4>
        <hr class="spacer">
        <p><i class="fas fa-terminal icon-services"></i></p>
        <p class="services-resume">{{ servicesAdmin }}</p>
    </div>`,

    data() {
        return {
            servicesDev: "Conpetion application, site web. Deployement des services web avec l'usage des nouvelles technologies.",
            servicesNetwork: "Mise en place des réseaux informatiques LAN pour entreprise et à usage domestique.",
            servicesBureautique: "Opérateur de saisie, gestion des documents de bureau ainsi que des outils (Imprimante, scanneur)",
            servicesAdmin: "Installation, mises à jour, mises à niveau des systèmes d'exploitation clients et serveurs. \n Deploiement des services dans un réseau informatique "
        }
    }
});

/* About me */

app.component('about_me', {

    template:

    /* html*/
        `<p class="about-me-text"> {{ aboutMe }}</p>
        <p class="about-me-text" > {{ resumeMe }}</p>`,
    data() {
        return {
            aboutMe: "Hello, moi c'est Sam BISSELELE, je suis ingenieur informacticen '\n' oeuvrant dans le developpement informatique. \n Je suis diplômé du premier cycle d'études supérieures en Sciences Informatiques à l'Institut Supérieur d'Informatique, Programmation et Analyse.",
            resumeMe: "Je suis un passionné de l'informatique de mon adolescencen, motivé par les compétences de l'informaticienne Chloé O'Brian dans la série télévisée américaine 24H CHRONO."
        }
    }

});


/* Type writer */

app.component('Typewriter', {
    template:
    /*'#typewriter'*/
        `
            <div class="pl-10">
                <span class="moi">
              {{ title }}
            </span>
                <span class="typing-text">
                {{ displayText.join("") }}
              </span>
            </div>`,
    props: {
        title: String,
        speed: {
            type: Number,
            default: 400
        },
        deleteSpeed: {
            type: Number,
            default: 300
        },
        words: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            displayText: [],
            currentWord: "",
            wordIdx: 0,
        };
    },
    computed: {
        // can adjust speeds based on other factors if needed
        TYPE_SPEED() { return this.speed },
        DELETE_SPEED() { return this.deleteSpeed },
        timeoutSpeed() { return this.TYPE_SPEED * 0.8 },
    },
    mounted() {
        this.start();
    },
    methods: {
        start() {
            if (this.words && this.words.length > 0) {
                this.currentWord = this.words[this.wordIdx].split("");
                this.wordIdx++;
                this.animate = setTimeout(this.type, this.timeoutSpeed);
            }
        },
        type(word) {
            // if typing...
            if (this.currentWord.length > 0) {
                this.displayText.push(this.currentWord.shift());
                // if done typing, then delete
            } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
                this.timeoutSpeed = this.DELETE_SPEED;
                this.displayText.pop();
                // if done typing & deleting
            } else if (
                this.currentWord.length === 0 &&
                this.displayText.length === 0
            ) {
                // change words
                if (this.wordIdx < this.words.length) {
                    this.currentWord = this.words[this.wordIdx].split("");
                    this.wordIdx++;
                    this.timeoutSpeed = this.TYPE_SPEED;
                    this.displayText.push(this.currentWord.shift());
                } else {
                    // reset
                    this.wordIdx = 0;
                    this.currentWord = this.words[this.wordIdx].split("");
                    this.displayText.push(this.currentWord.shift());
                }
            }
            setTimeout(this.type, this.timeoutSpeed);
        }
    }
});