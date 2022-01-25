/*import AOS from 'aos'
import '/../node_modules/aos/dist/aos.js'*/
const app = Vue.createApp({
    data() {
        return {
            site_name: "JOKER CODE",
            aboutMe: "Hello, moi c'est Sam BISSELELE, je suis ingenieur informacticen '\n' oeuvrant dans le developpement informatique.'\n' Je suis diplômé du premier cycle d'études supérieures en Sciences Informatiques à l'Institut Supérieur d'Informatique, Programmation et Analyse.",

            /* Typing text */
            curWordIndex: 0,
            curTextLen: 1,
            curText: "",
            timeToWait: 200,
            words: ["Moi c'est Sam BISSELELE", "Je suis dévéloppeur informatique"],


        }
    },
    methods: {}
    /*
            splitText() {
                var _this = this;
                var word = this.words[this.curWordIndex];
                this.curText =
                    " " +
                    word.split("").
                slice(0, this.curTextLen).
                join("");
                if (this.curTextLen === word.length) {
                    this.curTextLen = 0;
                    if (this.curWordIndex === this.words.length - 1) this.curWordIndex = 0;
                    else
                        ++this.curWordIndex;
                    this.timeToWait = 1000;
                } else {
                    ++this.curTextLen;
                    this.timeToWait = 200;
                }
                setTimeout(function(_) {
                    return _this.splitText();
                }, this.timeToWait);
            }
        },
        mounted() {
            var _this2 = this;
            setTimeout(function(_) { return _this2.splitText(); }, 500);
        }*/
});