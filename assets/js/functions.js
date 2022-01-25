/*Services card  */

app.component('services-card', {
    template:

    /*html*/
        `<div class="developpement card-column">
        <h4>Développement informatique</h4>
        <hr>
        <p> {{ servicesDev }}
        </p>
    </div>
    <div class="network-computer-services card-column">
        <h4>Réseaux informatiques</h4>
        <hr>
        <p> {{ servicesNetwork }}</p>
    </div>

    <!--Right column services-->
    <div class="bureatique card-column">
        <h4>Bureautique
        </h4>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates quod est. Quae nemo incidunt consectetur recusandae corporis veritatis quam sed iusto. Exercitationem voluptatem dolore incidunt atque officiis voluptates
            doloremque.
        </p>
    </div>
    <div class="system-administration card-column">
        <h4>Admnistration système monoposte</h4>
        <hr class="spacer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis mollitia. Harum corporis voluptatibus ex laboriosam eveniet dolore earum, maxime aperiam soluta ipsam adipisci saepe vel. Dicta tempora laudantium a.</p>
    </div>`,

    data() {
        return {
            servicesDev: "Conpetion application, site web. Deployement des services web avec l'usage des nouvelles technologies.",
            servicesNetwork: "Mise en place des réseauyx informatiques LAN pour entreprise et à usage domestique."
        }
    }
});

/* About me */

app.component('about_me', {

    template:

    /* html*/
        `<p> {{ aboutMe }}</p>`,
    data() {
        return {
            aboutMe: "Hello, moi c'est Sam BISSELELE, je suis ingenieur informacticen '\n' oeuvrant dans le developpement informatique.'\n' Je suis diplômé du premier cycle d'études supérieures en Sciences Informatiques à l'Institut Supérieur d'Informatique, Programmation et Analyse."

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
                <span class="text-4xl text-bold text-red-500">
                {{ displayText.join("") }}
              </span>
            </div>`,
    props: {
        title: String,
        speed: {
            type: Number,
            default: 500
        },
        deleteSpeed: {
            type: Number,
            default: 166
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