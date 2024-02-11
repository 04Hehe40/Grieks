voc_woorden = ["ὁ θεος", "ἡ θεος ", "ὁ ἀνθρωπος", "οὐ, οὐκ, οὐχ", "εἰναι", "παρειναι", "ὁ ἀδελφος", "ἡ ἀδελφη", "πολλοι", "ἡ τεχνη", "ἀρα", "ὁ μυθος", "και", "γαρ", "οὐν", "σοφος", "ἐθελειν", "λεγειν", "τι;", "ὁ οὐρανος", "ἡ γη", "ὁ ἡλιος", "ὁ δουλος", "ἡ τιμη", "ὁ ξενος", "το δενδρον", "το βιβλιον", "το ζῳον", "το δωρον", "καλος", "κακος", "ἀγαθος", "δεινος", "ἐγω", "συ", "ἡμεις", "ὑμεις", "λυειν", "χαιρειν", "ἐχειν", "βλεπειν", "πινειν", "ἐσθιειν", "βαινειν", "λειπειν", "στεργειν", "ὁ φιλος", "ἡ φιλη", "ὁ ποταμος", "ὁ λιθος", "ἀλλα", "προς +acc", "εἰς +...", "οὐ μονον... ἀλλα και", "ὁ νεανισκος", "ᾀδειν", "ὡς", "ἀκουειν", "δε", "μονος", "θαυμαζειν", "ἡ ᾠδη", "ἡ φωνη", "ἡ παιδισκη", "οὐτε ... οὐτε ...", "οὐκετι", "ὁ οἰνος", "βαλλειν", "ὁδε", "φερειν", "περι +...", "ἡ ψυχη", "ἀλλος", "ὁ ἱππος", "ὁ οἰκος", "ἀνευ +...", "ὑπερ +...", "ὁ στρατηγος", "ὁ υἱος", "ἐκει", "που;", "πρωτον", "ἐπειτα", "τελος", "το παιδιον", "το τεκνον", "το ἐργον", "εὐρισκειν", "ἀγειν", "οἱ πολεμιοι", "πεμπειν", "ὁ λογος", "ἀει", "ὡστε", "ὁτι", "ὁτε", "ἡ ὑβρις", "κελευειν", "παλιν", "τοτε", "φαινειν", "καλλιστος", "κρινειν", "αὐτικα", "δια +acc", "δια + gen", "ἀποκτεινειν", "ὑπο +...", "ὁ ἐταιρος", "σῳζειν", "ἑκαστος", "παρεχειν", "ἐξεστιν", "ἡ νικη", "ὁ βιος", "δηλος", "ἐν +...", "συν +...", "χαλεπος", "ὁ φοβος", "φευγειν", "Κατεχειν", "ἡ θυρα", "νεος", "ἡ οἰκια", "ἡ χωρα", "μικρος", "μακρος", "ἡ ἡμερα", "ἡ ὡρα", "ὁμοιος", "ἀρχαιος", "αἰσχρος", "ἡ αἰτια", "ἡ φιλια", "ἱερος", "μεν ..., δε ...", "ὀλιγος", "καταβαινειν", "ἡ λυπη", "ἡ τροφη", "ἐκ, ἐξ +...", "τε και", "ἀλληλους", "ὁ θανατος", "αἰτιος", "ἡ ὁδος", "ἡ νησος", "ὁ πολιτης", "ὁ δεσποτης", "ὁ ἀθλητης", "ἀδικος", "βαρβαρος", "προς + acc", "προς + gen", "προς + dat", "παρα +acc", "παρα +gen", "παρα +dat", "ἀπο +...", "προ +...", "ἐπι +acc", "ἐπι +gen", "ἐπι +dat", "μετα +acc", "μετα +gen", "δεχεσθαι", "βουλεσθαι", "ἀρχειν", "ἀρχεσθαι", "ἰεναι", "γιγνεσθαι", "εὐχεσθαι", "αἰσθανεσθαι", "ὀργιζεσθαι", "μαλα", "ἀποκρινεσθαι", "οὑτος", "ἐκεινος", "πολυς", "μεγας","οὑτω(ς)", "φιλος", "ὁ χρονος", "ἀπολλυναι", "διδοναι", "δυνασθαι", "ἐπιστασθαι", "καθησθαι", "ἱσταναι", "φαναι"];

let zelf_kiezen_lijst =  ["ὁ θεος ", "ἡ θεος ", "ὁ ἀνθρωπος ", "οὐ, οὐκ, οὐχ", "εἰναι", "παρειναι", "ὁ ἀδελφος ", "ἡ ἀδελφη", "πολλοι", "ἡ τεχνη", "ἀρα", "ὁ μυθος ", "και", "γαρ", "οὐν", "σοφος ", "ἐθελειν", "λεγειν", "τι;", "ὁ οὐρανος ", "ἡ γη", "ὁ ἡλιος ", "ὁ δουλος ", "ἡ τιμη", "ὁ ξενος ", "το δενδρον", "το βιβλιον", "το ζῳον", "το δωρον", "καλος ", "κακος ", "ἀγαθος ", "δεινος ", "ἐγω", "συ", "ἡμεις ", "ὑμεις ", "λυειν", "χαιρειν", "ἐχειν", "βλεπειν", "πινειν", "ἐσθιειν", "βαινειν", "λειπειν", "στεργειν", "ὁ φιλος ", "ἡ φιλη", "ὁ ποταμος ", "ὁ λιθος ", "ἀλλα", "προς +acc", "εἰς +acc", "οὐ μονον...ἀλλα και", "ὁ νεανισκος ", "ᾀδειν", "ὡς ", "ἀκουειν", "δε", "μονος ", "θαυμαζειν", "ἡ ᾠδη", "ἡ φωνη", "ἡ παιδισκη", "οὐτε...οὐτε...", "οὐκετι", "ὁ οἰνος ", "βαλλειν", "ὁδε", "φερειν", "περι +gen", "ἡ ψυχη", "ἀλλος ", "ὁ ἱππος ", "ὁ οἰκος ", "ἀνευ +gen", "ὑπερ +gen", "ὁ στρατηγος ", "ὁ υἱος ", "ἐκει", "που;", "πρωτον", "ἐπειτα", "τελος ", "το παιδιον", "το τεκνον", "το ἐργον", "εὐρισκειν", "ἀγειν", "οἱ πολεμιοι", "πεμπειν", "ὁ λογος ", "ἀει", "ὡστε", "ὁτι", "ὁτε", "ἡ ὑβρις ", "κελευειν", "παλιν", "τοτε", "φαινειν", "καλλιστος ", "κρινειν", "αὐτικα", "δια +acc", "δια +gen", "ἀποκτεινειν", "ὑπο +gen", "ὁ ἐταιρος ", "σῳζειν", "ἑκαστος ", "παρεχειν", "ἐξεστιν", "ἡ νικη", "ὁ βιος ", "δηλος ", "ἐν +dat", "συν +dat", "χαλεπος ", "ὁ φοβος ", "φευγειν", "κατεχειν", "ἡ θυρα", "νεος ", "ἡ οἰκια", "ἡ χωρα", "μικρος ", "μακρος ", "ἡ ἡμερα", "ἡ ὡρα", "ὁμοιος ", "ἀρχαιος ", "αἰσχρος ", "ἡ αἰτια", "ἡ φιλια", "ἱερος ", "μεν...,δε...", "ὀλιγος ", "καταβαινειν", "ἡ λυπη", "ἡ τροφη", "ἐκ, ἐξ +gen", "τε και", "ἀλληλους ", "ὁ θανατος ", "αἰτιος ", "ἡ ὁδος ", "ἡ νησος ", "ὁ πολιτης ", "ὁ δεσποτης ", "ὁ ἀθλητης ", "ἀδικος ", "βαρβαρος ", "προς +acc", "προς +gen", "προς +dat", "παρα +acc", "παρα +gen", "παρα +dat", "ἀπο +gen", "προ +gem", "ἐπι +acc", "ἐπι +gen", "ἐπι +dat", "μετα +acc", "μετα +gen", "δεχεσθαι", "βουλεσθαι", "ἀρχειν", "ἀρχεσθαι", "ἰεναι", "γιγνεσθαι", "εὐχεσθαι", "αἰσθανεσθαι", "ὀργιζεσθαι", "μαλα", "ἀποκρινεσθαι", "οὑτος ", "ἐκεινος ", "πολυς ", "μεγας ","οὑτως ", "φιλος ", "ὁ χρονος ", "ἀπολλυναι", "διδοναι", "δυνασθαι", "ἐπιστασθαι", "καθησθαι", "ἱσταναι", "φαναι"];

let antwoorden = ["ὁ θεος | του θεου ms1 | de god", "ἡ θεος | της θεου vs1 | de godin ", "ὁ ἀνθρωπος | του ἀνθρωπου ms1 | de mens", "οὐ, οὐκ, οὐχ | ontkenning OW | niet", "εἰναι | εἰμι onr. ww | zijn", "παρειναι | παρειμι onr. ww | aanwezig zijn", "ὁ ἀδελφος | του ἀδελφου ms1 | de broer", "ἡ ἀδελφη | της ἀδελφης vs1 | de zus", "πολλοι |  πολλαι, πολλα Adj 1 | veel, talrijk", "ἡ τεχνη | της τεχνης | de vaardigheid, de kunst", "ἀρα | vraagpartikel OW | (wordt niet vertaal)", "ὁ μυθος | του μυθου ms1 | het verhaal", "και | voegwoord OW | en, ook", "γαρ | voegwoord OW | want", "οὐν | voegwoord OW | dus", "σοφος | σοφη, σοφον Adj 1 | wijs, slim", "ἐθελειν | ἐθελω ww | willen", "λεγειν | λεγω ww | zeggen, spreken, vertellen", "τι; | vragend vnw. | wat?, waarom?", "ὁ οὐρανος | του οὐρανου ms1 | de hemel", "ἡ γη | της γης vs1 | de aarde, het land", "ὁ ἡλιος | του ἡλιου ms1 | de zon", "ὁ δουλος | του δουλου ms1 | de slaaf", "ἡ τιμη | της τιμης vs1 | het eerbewijs, de eer", "ὁ ξενος | του ξενου ms1 | de vreemdeling", "το δενδρον | του δενδρου os1 | het geschenk", "το βιβλιον | του βιβλιου os1 | het boek", "το ζῳον | του ζῳου os1 | het levend wezen, het dier", "το δωρον | του δωρου os1 | het geschenk", "καλος | καλη, καλον Adj 1 | mooi, goed, edel", "κακος | κακη, κακον Adj 1 | slecht", "ἀγαθος | ἀγαθη, ἀγαθον Adj 1 | goed, edel, flink", "δεινος | δεινη, δεινον Adj 1 | vreselijk, geducht, knap, geweldig", "ἐγω | ἐμου/μου pers. vnw. | ik", "συ | σου pers. vnw. | jij", "ἡμεις | ἡμων pers. vnw. | wij", "ὑμεις | ὑμων pers. vnw. | jullie", "λυειν | λυω ww | losmaken", "χαιρειν | χαιρω ww | blij zijn", "ἐχειν | ἐχω ww | hebben, houden", "βλεπειν | βλεπω ww | kijken", "πινειν | πινω ww | drinken", "ἐσθιειν | ἐσθιω ww | eten", "βαινειν | βαινω ww | gaan", "λειπειν | λειπω ww | achterlaten, verlaten", "στεργειν | στεργω ww | beminnen", "ὁ φιλος | του φιλου ms1 | de vriend", "ἡ φιλη | της φιλης  vs1 | de vriendin", "ὁ ποταμος | του ποταμου ms1 | de rivier", "ὁ λιθος | του λιθου ms1 | de steen", "ἀλλα | voegwoord OW | maar", "προς +acc | voorzetsel OW | naar, tot bij", "εἰς +acc | voorzetsel OW | naar, tot in", "οὐ μονον... ἀλλα και | / | niet alleen... maar ook...", "ὁ νεανισκος | του νεανισκου ms1 | de jongeman", "ᾀδειν | ᾀδω ww | zingen", "ὡς | voegwoord OW | zoals", "ἀκουειν | ἀκουω ww | horen, luisteren naar", "δε | partikel OW | en, maar, (onvertaald laten)", "μονος | μονη, μονον Adj 1 | alleen, enig", "θαυμαζειν | θαυμαζω ww | verwonder zijn, bewonderen", "ἡ ᾠδη | της ᾠδης vs1 | het lied, het gezang", "ἡ φωνη | της φωνης vs1 | de stem, het geluid", "ἡ παιδισκη | της παιδισκης | het meisje", "οὐτε ... οὐτε ... | voegwoord OW | noch... noch...", "οὐκετι | bijwoord OW | niet meer", "ὁ οἰνος | του οἰνου ms1 | de wijn", "βαλλειν | βαλλω ww | werpen, treffen", "ὁδε | ἡδε, τοδε aanw. vnw. | deze, dit", "φερειν | φερω ww | dragen, verdragen", "περι +gen | voorzetsel OW | over", "ἡ ψυχη | της ψυχης vs1 | de ziel", "ἀλλος | ἀλλη, ἀλλο Adj 1 | (een) ander", "ὁ ἱππος | του ἱππου ms1 | het paard", "ὁ οἰκος | του οἰκου ms1 | het huis", "ἀνευ +gen | voorzetsel OW | zonder", "ὑπερ +gen | voorzetsel OW | voor, ten voordele van", "ὁ στρατηγος | του στρατηγου ms1 | de aanvoerder", "ὁ υἱος | του υἱου ms1 | de zoon", "ἐκει | bijwoord OW | daar", "που; | bijwoord OW | waar?", "πρωτον | bijwoord OW | eerst", "ἐπειτα | bijwoord OW | vervolgens", "τελος | bijwoord OW | tenslotte", "το παιδιον | του παιδιου os1 | het kindje", "το τεκνον | του τεκνου os1 | het kind", "το ἐργον | του ἐργου ms1 | het werk", "εὐρισκειν | εὑρισκω ww | vinden", "ἀγειν | ἀγω ww | voeren, brengen", "οἱ πολεμιοι | των πολεμιων ms1 mv. | de vijanden", "πεμπειν | πεμπω ww | zenden", "ὁ λογος | του λογου ms1 | de mededeling, het woord", "ἀει | bijwoord OW | altijd", "ὡστε | voegwoord OW | zodat", "ὁτι | voegwoord OW | dat, omdat", "ὁτε | voegwoord OW | wanneer", "ἡ ὑβρις | της ὑβρεως vs2! | de hoogmoed", "κελευειν | κελευω ww | bevelen", "παλιν | bijwoord OW | opnieuw", "τοτε | bijwoord OW | dan, toen", "φαινειν | φαινω ww | laten zien", "καλλιστος | καλλιστη, καλλιστον Adj 1 | zeer mooi, (de) mooiste", "κρινειν | κρινω ww | oordelen", "αὐτικα | bijwoord OW | dadelijk", "δια +acc | voorzetsel OW | door, wegens", "δια + gen | voorzetsel OW | door, doorheen", "ἀποκτεινειν | ἀποκτεινω ww | doden", "ὑπο +gen | voorzetsel OW | door(iemand), onder(iets)", "ὁ ἑταιρος | του ἑταιρου ms1 | de kameraad", "σῳζειν | σῳζω ww | redden", "ἑκαστος | ἑκαστη, ἑκαστον Adj 1 | elk, ieder", "παρεχειν | παρεχω ww | geve, bezorgen", "ἐξεστι(ν) | onpersoonlijk ww +dat | het is toegestaan, het is mogelijk", "ἡ νικη | της νικης vs1 | de overwinning", "ὁ βιος | του βιου ms1 | het leven", "δηλος | δηλη, δηλον Adj 1 | duidelijk", "ἐν +dat | voorzetsel OW | in", "συν +dat | voorzetsel OW | samen met", "χαλεπος | χαλεπη, χαλεπον Adj 1 | lastig, moeilijk", "ὁ φοβος | του φοβου ms1 | de vrees", "φευγειν | φευγω ww | vluchten", "Κατεχειν | κατεχω ww | tegenhouden", "ἡ θυρα | της θυρας vs1 | de deu", "νεος | νεα, νεον Adj 1 | nieuw, jong", "ἡ οἰκια | της οἰκιας vs1 | het huis", "ἡ χωρα | της χωρας vs1 | de streek", "μικρος | μικρα, μικρον Adj 1 | klein, kort", "μακρος | μακρα, μακρον Adj 1 | groot, lang", "ἡ ἡμερα | της ἡμερας vs1 | de dag", "ἡ ὡρα | της ὡρας vs1 | het uur, het seizoen", "ὁμοιος | ὁμοια, ὁμοιον Adj +dat | gelijkend", "ἀρχαιος | ἀρχαια, ἀρχαιον Adj 1 | oud", "αἰσχρος | αἰσχρα, αἰσχρον Adj 1 | lelijk, schandelijk", "ἡ αἰτια | της αἰτιας vs1 | de schuld, de oorzaak", "ἡ φιλια | της φιλιας vs1 | de vriendschap", "ἱερος | ἱερα, ἱερον Adj 1 | heilig", "μεν ..., δε ... | voegwoord OW | wel..., maar..", "ὀλιγος | ὀλιγη, ὀλιγον Adj 1 | weinig", "καταβαινειν | καταβαινω ww | afdalen", "ἡ λυπη | της λυπης vs1 | de pijn, het verdriet", "ἡ τροφη | της τροφης vs1 | het voedsel", "ἐκ, ἐξ +gen | voorzetsel OW | uit", "τε και | voegwoord OW | en", "ἀλληλους | ἀλληλας, ἀλληλα Adj 1 | elkaar", "ὁ θανατος | του θανατου ms1 | de dood", "αἰτιος | αἰτια, αἰτιον Adj 1 +gen | schuldig(aan iets), verantwoordelijk(voor iets)", "ἡ ὁδος | της ὁδου vs1 | de weg", "ἡ νησος | της νησου vs1 | het eiland", "ὁ πολιτης | του πολιτου ms1 | de burger", "ὁ δεσποτης | του δεσποτου ms1 | de meester", "ὁ ἀθλητης | του αθλητου ms1 | de atleet", "ἀδικος | ἀδικος, ἀδικον Adj 1 | onrechtvaardig", "βαρβαρος | βαρβαρος, βαρβαρον Adj 1 | niet-Grieks, barbaars", "προς + acc | voorzetsel OW | naar, tot bij", "προς + gen | voorzetsel OW | van bij", "προς + dat | voorzetsel OW | bij", "παρα +acc | voorzetsel OW | naar, tot bij", "παρα +gen | voorzetsel OW | van bij", "παρα +dat | voorzetsel OW | bij", "ἀπο +gen | voorzetsel OW | weg van", "προ +gen | voorzetsel OW | voor", "ἐπι +acc | voorzetsel OW | naar, tegen", "ἐπι +gen | voorzetsel OW | op", "ἐπι +dat | voorzetsel OW | bij", "μετα +acc | voorzetsel OW | na", "μετα +gen | voorzetsel OW | met", "δεχεσθαι | δεχομαι D ww | ontvangen", "βουλεσθαι | βουλομαι D ww | willen", "ἀρχειν +gen | ἀρχω ww | heersen", "ἀρχεσθαι +gen | ἀρχομαι D (m) ww | beginnen", "ἰεναι | ἐρχομαι onr ww | gaan, komen", "γιγνεσθαι | γιγνομαι D ww | worden, gebeuren", "εὐχεσθαι | εὐχομαι D ww | bidden, wensen", "αἰσθανεσθαι +gen | αἰσθανομαι D ww | bemerken, voelen", "ὀργιζεσθαι +dat | ὀργιζομαι D ww | boos worden", "μαλα | bijwoord OW | zeer", "ἀποκρινεσθαι | ἀποκρινομαι D ww | antwoorden" ,"οὑτος | αὑτη, τουτο aanw. vnw. | die, dat", "ἐκεινος | ἐκεινη, ἐκεινο aanw. vnw. | die, dat", "πολυς | πολλη, πολυ Adj1 | veel", "μεγας | μεγαλη, μεγα Adj1 | groot", "οὑτω(ς) | bijwoord OW | zo", "φιλος +dat| φιλη, φιλον Adj1 | geliefd (bij/door iemand)", "ὁ χρονος | του χρονου ms1 | de tijd", "ἀπολλυναι | ἀπολλυμι A ww | doden", "διδοναι | διδωμι A ww | geven", "δυνασθαι | δυναμαι D A ww | kunnen", "ἐπιστασθαι | ἐπισταμαι D A ww | weten", "καθησθαι | καθημαι D A ww | zitten", "ἱσταναι | ἰστημι A ww | doen opstaan, opstellen", "φαναι | φημι A ww | zeggen, beweren"];
let voorzetsels = [ "εἰς +...", "περι +...", "ἀνευ +...", "ὑπερ +...", "δια +acc", "δια + gen", "ὑπο +...", "ἐν +...", "συν +...", "προς +acc", "προς + gen", "προς + dat", "παρα +acc", "παρα +gen", "παρα +dat", "ἀπο +...", "προ +...", "ἐπι +acc", "ἐπι +gen", "ἐπι +dat", "μετα +acc", "μετα +gen"]
let random_woord = document.getElementById("random_woord");
let randomizer = document.getElementById("randomizer");
let herstart = document.getElementById("herstart");
let muthos1 = document.getElementById("Muthos1")
let muthos2 = document.getElementById("Muthos2")
let muthos3 = document.getElementById("Muthos3")
let muthos4 = document.getElementById("Muthos4")
let muthos5 = document.getElementById("Muthos5")
let mythossen = document.getElementById("mythossen")
let antwoord = document.getElementById("antwoord")
let voorzetsels_button = document.getElementById("vz")
let muthos1_klikken = false;
let muthos2_klikken = false;
let muthos3_klikken = false;
let muthos4_klikken = false;
let muthos5_klikken = false;
let zelf_kiezen_klikken = false;
let voorzetsel_klikken = false;
let counterm1 = parseInt(localStorage.getItem('websiteCountMythos1')) || 0;
let counterm2 = parseInt(localStorage.getItem('websiteCountMythos2')) || 0;
let counterm3 = parseInt(localStorage.getItem('websiteCountMythos3')) || 0;
let counterm4 = parseInt(localStorage.getItem('websiteCountMythos4')) || 0;
let counterm5 = parseInt(localStorage.getItem('websiteCountMythos5')) || 0;
let fout_lijst = []
let fout_button = document.getElementById("fout")
let fout_herstart = false
let juist_button = document.getElementById("juist")
let gekozen_woord
let zelf_kiezen = document.getElementById("zelf_kiezen")



console.log(voc_woorden.length)

randomizer.addEventListener("click", kies_woord);
herstart.addEventListener("click", herstarten)
muthos1.addEventListener("click", muthos1_geklikt)
muthos2.addEventListener("click", muthos2_geklikt)
muthos3.addEventListener("click", muthos3_geklikt)
muthos4.addEventListener("click", muthos4_geklikt)
muthos5.addEventListener("click", muthos5_geklikt)
antwoord.addEventListener("click", antwoord_geven)
voorzetsels_button.addEventListener("click", voorzetsel_vragen)
fout_button.addEventListener("click", fout)
juist_button.addEventListener("click", juist)
zelf_kiezen.addEventListener("click", myFunction)


function resetCounter() {
   let password = prompt("Give the password.")

  if (password == "1Salasana") {
    counterm1 = 0;
    localStorage.setItem('websiteCountMythos1', counterm1);
    console.log("Mythos 1: " + counterm1)
    alert("Mythos 1 is reset.")
  }else if(password  == "2Salasana"){
    counterm2 = 0;
    localStorage.setItem('websiteCountMythos2', counterm2);
    console.log("Mythos 2: " + counterm2)
    alert("Mythos 2 is reset.")

  }else if(password == "3Salasana"){
    counterm3 = 0;
    localStorage.setItem('websiteCountMythos3', counterm3);
    console.log("Mythos 3: " + counterm3)
    alert("Mythos 3 is reset")

  }else if(password == "4Salasana"){
    counterm4 = 0;
    localStorage.setItem('websiteCountMythos4', counterm4);
    console.log("Mythos 4: " + counterm4)
    alert("Mythos 4 is reset.")

  }else if(password == "5Salasana"){
    counterm5 = 0;
    locatStorage.setItem('websiteCountMythos5', counterm5);
    console.log("Mythos 5: " + counter5)
    alert("Mythos 5 is reset.")
}else{
  alert("This is not the right password.")
  }
    }




// Self made alert.
function showAlert(message) {
  const alert = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");
  alertMessage.textContent = message;
  alert.style.display = "block";
}

function hideAlert() {
  const alert = document.getElementById("custom-alert");
  alert.style.display = "none";
}

const alertOk = document.getElementById("alert-ok");
alertOk.addEventListener("click", hideAlert);
// self made alert ends here


// Here starts the function kies_woord.
// Her starts the function herstarten.
function herstarten(){

  al_geweest = voc_woorden
  random_woord.innerHTML = ""
  mythossen.innerHTML = " Zal worden ondervraagd: "
  muthos1_klikken = false
  muthos2_klikken = false
  muthos3_klikken = false
  muthos4_klikken = false
  muthos5_klikken = false
  zelf_kiezen_klikken = false
  voorzetsel_klikken = false
  fout_herstart = false
}


let al_geweest = voc_woorden
var index_gekozen_woord

  function kies_woord() {
    while (true) {


          if (al_geweest.length === voc_woorden.length){
            if(muthos1_klikken == false && muthos2_klikken == false && muthos3_klikken == false && muthos4_klikken == false && muthos5_klikken == false && voorzetsel_klikken == false && fout_herstart == false && zelf_kiezen_klikken == false){
              alert("Je moet nog woorden kiezen!!!!")
            }else{
            alert("Alle woorden zijn ondervraagd.");
            }
            

            if(!fout_lijst.length == 0){
            let fouten_vragen = prompt("Wil je dat de woorden die fout waren opnieuw worden ondervraagd?  ja / nee")



              if(fouten_vragen == "ja" || fouten_vragen == "Ja" || fouten_vragen == "JA" || fouten_vragen == " ja" || fouten_vragen == " Ja" || fouten_vragen == " JA" || fouten_vragen == " ja " || fouten_vragen == " Ja " || fouten_vragen == " JA " || fouten_vragen == "ja " || fouten_vragen == "JA " || fouten_vragen == "Ja "){

                al_geweest = voc_woorden
                al_geweest = al_geweest.filter(word => !fout_lijst.includes(word))
                random_woord.innerHTML = ""

                fout_lijst = []
                if(fout_herstart == false){
                  mythossen.insertAdjacentHTML('beforeend', " => Foute woorden,   ")
                  fout_herstart = true
                }
                break;
              } else{

                fout_lijst = []
                fout_herstart = false
                herstarten()// call herstart function
                break;
              }

            }else{
              
              fout_lijst = []
              fout_herstart = false
              alert("Je hebt alle woorden juist!!!!!!!!!")
            herstarten()
              break;
            }
          }


      index_gekozen_woord = Math.floor(Math.random() * voc_woorden.length);
      gekozen_woord = voc_woorden[index_gekozen_woord];

      if(muthos1_klikken == false && muthos2_klikken == false && muthos3_klikken == false && muthos4_klikken == false && muthos5_klikken == false && voorzetsel_klikken == false && fout_herstart == false && zelf_kiezen_klikken == false){
        alert("Je moet nog woorden kiezen!!!!")
        break

      }else{

        if (!al_geweest.includes(gekozen_woord)) {
          al_geweest.push(gekozen_woord);
          random_woord.innerHTML = gekozen_woord;
          break;
        }


        }

    }
  }



// Here starts muthos 1 geklikt.
function muthos1_geklikt() {
  const index_ferEin = voc_woorden.indexOf("φερειν");
  const firstWord = voc_woorden[0]; // Get the first word
  const wordsToRemove = [...voc_woorden.slice(0, index_ferEin ), firstWord, "φερειν"]; // Include the first word in the list
  al_geweest = al_geweest.filter(word => !wordsToRemove.includes(word));
  if(muthos1_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', 'Mythos 1,   ');
    muthos1_klikken = true
  }
  counterm1++;
  localStorage.setItem('websiteCountMythos1', counterm1);
  console.log("Mythos 1: " + counterm1);
}




// Here starts muthos2_geklikt.
function muthos2_geklikt(){
  const index_peRi = voc_woorden.indexOf("περι +...")
  const index_sooidzEin = voc_woorden.indexOf("σῳζειν")
  const wordsToRemove = [...voc_woorden.slice(index_peRi, index_sooidzEin), "περι +...", "σῳζειν"]
  al_geweest = al_geweest.filter(word => !wordsToRemove.includes(word))
  if(muthos2_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', 'Mythos 2,   ');
    muthos2_klikken = true
  }
  counterm2++;
  localStorage.setItem('websiteCountMythos2', counterm2);
  console.log("Mythos 2: " + counterm2);
}



// Here starts muthos3_geklikt.
function muthos3_geklikt(){
  const index_hekasTos = voc_woorden.indexOf("ἑκαστος")
  const index_ekEks = voc_woorden.indexOf("ἐκ, ἐξ +...")
  const wordsToRemove = [...voc_woorden.slice(index_hekasTos, index_ekEks), "ἑκαστος", "ἐκ, ἐξ +..."]
  al_geweest = al_geweest.filter(word => !wordsToRemove.includes(word))
  if(muthos3_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', 'Mythos 3,   ');
    muthos3_klikken = true
  }
  counterm3++;
  localStorage.setItem('websiteCountMythos3', counterm3);
  console.log("Mythos 3: " + counterm3);
}



function muthos4_geklikt(){
  const index_teKai = voc_woorden.indexOf("τε και")
  const index_meTa = voc_woorden.indexOf("μετα +dat")
  const wordsToRemove = [...voc_woorden.slice(index_teKai, index_meTa), "τε και", "μετα +dat"]
  al_geweest = al_geweest.filter(word => !wordsToRemove.includes(word))
  if(muthos4_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', 'Mythos 4,   ');
    muthos4_klikken = true
  }
  counterm4++;
  localStorage.setItem('websiteCountMythos4', counterm4);
  console.log("Mythos 4: " + counterm4);
}

function muthos5_geklikt(){
  const index_dechesThai = voc_woorden.indexOf("δεχεσθαι")
  const index_faNai = voc_woorden.indexOf("φαναι")
  const wordsToRemove = [...voc_woorden.slice(index_dechesThai, index_faNai), "δεχεσθαι", "φαναι"]
  al_geweest = al_geweest.filter(word => !wordsToRemove.includes(word))
  if(muthos5_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', 'Mythos 5,   ');
    muthos5_klikken = true
  }
  counterm5++;
  localStorage.setItem('websiteCountMythos5', counterm5);
  console.log("Mythos 5: " + counterm5);
}

function voorzetsel_vragen(){

  al_geweest = al_geweest.filter(word => !voorzetsels.includes(word))
  if(voorzetsel_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', 'Alle voorzetsels,   ');
    voorzetsel_klikken = true
  }
}
//Give the answer.

function antwoord_geven() {
  if (index_gekozen_woord !== undefined) {

    let translation = antwoorden[voc_woorden.indexOf(gekozen_woord)];
    random_woord.innerHTML = translation;
  } else {
    antwoord.innerHTML = "";
  }
}

  function showButton() {
      var button = document.getElementById("myButton");
      if (button.style.display === "none") {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  }


function fout(){
  if(gekozen_woord !== undefined){
    if(!fout_lijst.includes(gekozen_woord)){
    fout_lijst.push(gekozen_woord)
    console.log(gekozen_woord)
    console.log(fout_lijst)
      kies_woord()
    }
  } else{
    console.log("Gekozen_woord is not defined.")
  }
}

function juist(){
  if(gekozen_woord !== undefined){
      kies_woord()
  } else{
    console.log("Gekozen_woord is not defined.")
  }
}

let inputs = document.getElementById("input");
let answer1 = null;
let answer2 = null;




function myFunction() {
  if (inputs.style.display == "none" ) {
    inputs.style.display = "block";
  } else{
    inputs.style.display = "none"
  }
}


var inputField = document.getElementById("input-field");
let welk_woord = 1
let naast_tekst = document.getElementById("input-text")


inputs.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    if(welk_woord == 1){
      answer1 = inputField.value;
      if(zelf_kiezen_lijst.includes(answer1)){
      welk_woord = 2
      naast_tekst.innerHTML = "Tweede woord:"
      console.log(answer1)
      }else{
        alert("Dit woord staat niet in de voc-lijst, kijk nog eens goed na of het goed geschreven is.")
      inputField.value = ''
      }
    }else if(welk_woord == 2){
      answer2 = inputField.value;
      if(zelf_kiezen_lijst.includes(answer2)){
      welk_woord = 1;
      naast_tekst.innerHTML = "Eerste woord:"; // Update the text next to the input field
      console.log(answer2)
      inputs.style.display = "none"
      zelfgekozen_woorden()
      }else{
         alert("Dit woord staat niet in de voc-lijst, kijk nog eens goed na of het goed geschreven is.")
      }
    }
    inputField.value = ''
  }
});

function zelfgekozen_woorden(){
  const index1 = zelf_kiezen_lijst.indexOf(answer1)
  const index2 = zelf_kiezen_lijst.indexOf(answer2)
  let antwoord1 = voc_woorden[index1]
  let antwoord2 = voc_woorden[index2]
  const wordsToRemove = [...voc_woorden.slice(index1, index2), antwoord1, antwoord2]
  al_geweest = al_geweest.filter(word => !wordsToRemove.includes(word))
  if(zelf_kiezen_klikken == false){
    mythossen.insertAdjacentHTML('beforeend', answer1 + '=>' +  answer2 );
    zelf_kiezen_klikken = true
  }
}