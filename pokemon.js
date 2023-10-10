const pokemon_list = [
    {
        "id": 1,
        "entry": 1,
        "name": "bulbizarre",
        "form_name": "bulbasaur",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "1.gif",
            "front_shiny": "shiny/1.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 2,
        "entry": 2,
        "name": "herbizarre",
        "form_name": "ivysaur",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "2.gif",
            "front_shiny": "shiny/2.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 3,
        "entry": 3,
        "name": "florizarre",
        "form_name": "venusaur",
        "type1": "plante",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "3.gif",
            "front_shiny": "shiny/3.gif",
            "front_female": "female/3.gif",
            "front_shiny_female": "shiny/female/3.gif"
        }
    },
    {
        "id": 4,
        "entry": 4,
        "name": "salamèche",
        "form_name": "charmander",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "4.gif",
            "front_shiny": "shiny/4.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 5,
        "entry": 5,
        "name": "reptincel",
        "form_name": "charmeleon",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "5.gif",
            "front_shiny": "shiny/5.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 6,
        "entry": 6,
        "name": "dracaufeu",
        "form_name": "charizard",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "6.gif",
            "front_shiny": "shiny/6.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 7,
        "entry": 7,
        "name": "carapuce",
        "form_name": "squirtle",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "7.gif",
            "front_shiny": "shiny/7.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 8,
        "entry": 8,
        "name": "carabaffe",
        "form_name": "wartortle",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "8.gif",
            "front_shiny": "shiny/8.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 9,
        "entry": 9,
        "name": "tortank",
        "form_name": "blastoise",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "9.gif",
            "front_shiny": "shiny/9.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10,
        "entry": 10,
        "name": "chenipan",
        "form_name": "caterpie",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10.gif",
            "front_shiny": "shiny/10.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 11,
        "entry": 11,
        "name": "chrysacier",
        "form_name": "metapod",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "11.gif",
            "front_shiny": "shiny/11.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 12,
        "entry": 12,
        "name": "papilusion",
        "form_name": "butterfree",
        "type1": "insecte",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "12.gif",
            "front_shiny": "shiny/12.gif",
            "front_female": "female/12.gif",
            "front_shiny_female": "shiny/female/12.gif"
        }
    },
    {
        "id": 13,
        "entry": 13,
        "name": "aspicot",
        "form_name": "weedle",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "13.gif",
            "front_shiny": "shiny/13.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 14,
        "entry": 14,
        "name": "coconfort",
        "form_name": "kakuna",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "14.gif",
            "front_shiny": "shiny/14.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 15,
        "entry": 15,
        "name": "dardargnan",
        "form_name": "beedrill",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "15.gif",
            "front_shiny": "shiny/15.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 16,
        "entry": 16,
        "name": "roucool",
        "form_name": "pidgey",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "16.gif",
            "front_shiny": "shiny/16.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 17,
        "entry": 17,
        "name": "roucoups",
        "form_name": "pidgeotto",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "17.gif",
            "front_shiny": "shiny/17.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 18,
        "entry": 18,
        "name": "roucarnage",
        "form_name": "pidgeot",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "18.gif",
            "front_shiny": "shiny/18.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 19,
        "entry": 19,
        "name": "rattata",
        "form_name": "rattata",
        "type1": "normal",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "19.gif",
            "front_shiny": "shiny/19.gif",
            "front_female": "female/19.gif",
            "front_shiny_female": "shiny/female/19.gif"
        }
    },
    {
        "id": 20,
        "entry": 20,
        "name": "rattatac",
        "form_name": "raticate",
        "type1": "normal",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "20.gif",
            "front_shiny": "shiny/20.gif",
            "front_female": "female/20.gif",
            "front_shiny_female": "shiny/female/20.gif"
        }
    },
    {
        "id": 21,
        "entry": 21,
        "name": "piafabec",
        "form_name": "spearow",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "21.gif",
            "front_shiny": "shiny/21.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 22,
        "entry": 22,
        "name": "rapasdepic",
        "form_name": "fearow",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "22.gif",
            "front_shiny": "shiny/22.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 23,
        "entry": 23,
        "name": "abo",
        "form_name": "ekans",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "23.gif",
            "front_shiny": "shiny/23.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 24,
        "entry": 24,
        "name": "arbok",
        "form_name": "arbok",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "24.gif",
            "front_shiny": "shiny/24.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 25,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "25.gif",
            "front_shiny": "shiny/25.gif",
            "front_female": "female/25.gif",
            "front_shiny_female": "shiny/female/25.gif"
        }
    },
    {
        "id": 26,
        "entry": 26,
        "name": "raichu",
        "form_name": "raichu",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "26.gif",
            "front_shiny": "shiny/26.gif",
            "front_female": "female/26.gif",
            "front_shiny_female": "shiny/female/26.gif"
        }
    },
    {
        "id": 27,
        "entry": 27,
        "name": "sabelette",
        "form_name": "sandshrew",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "27.gif",
            "front_shiny": "shiny/27.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 28,
        "entry": 28,
        "name": "sablaireau",
        "form_name": "sandslash",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "28.gif",
            "front_shiny": "shiny/28.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 29,
        "entry": 29,
        "form_name": "nidoran-f",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "29.gif",
            "front_shiny": "shiny/29.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 30,
        "entry": 30,
        "name": "nidorina",
        "form_name": "nidorina",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "30.gif",
            "front_shiny": "shiny/30.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 31,
        "entry": 31,
        "name": "nidoqueen",
        "form_name": "nidoqueen",
        "type1": "poison",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "31.gif",
            "front_shiny": "shiny/31.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 32,
        "entry": 32,
        "form_name": "nidoran-m",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "32.gif",
            "front_shiny": "shiny/32.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 33,
        "entry": 33,
        "name": "nidorino",
        "form_name": "nidorino",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "33.gif",
            "front_shiny": "shiny/33.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 34,
        "entry": 34,
        "name": "nidoking",
        "form_name": "nidoking",
        "type1": "poison",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "34.gif",
            "front_shiny": "shiny/34.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 35,
        "entry": 35,
        "name": "mélofée",
        "form_name": "clefairy",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "35.gif",
            "front_shiny": "shiny/35.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 36,
        "entry": 36,
        "name": "mélodelfe",
        "form_name": "clefable",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "36.gif",
            "front_shiny": "shiny/36.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 37,
        "entry": 37,
        "name": "goupix",
        "form_name": "vulpix",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "37.gif",
            "front_shiny": "shiny/37.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 38,
        "entry": 38,
        "name": "feunard",
        "form_name": "ninetales",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "38.gif",
            "front_shiny": "shiny/38.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 39,
        "entry": 39,
        "name": "rondoudou",
        "form_name": "jigglypuff",
        "type1": "normal",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "39.gif",
            "front_shiny": "shiny/39.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 40,
        "entry": 40,
        "name": "grodoudou",
        "form_name": "wigglytuff",
        "type1": "normal",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "40.gif",
            "front_shiny": "shiny/40.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 41,
        "entry": 41,
        "name": "nosferapti",
        "form_name": "zubat",
        "type1": "poison",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "41.gif",
            "front_shiny": "shiny/41.gif",
            "front_female": "female/41.gif",
            "front_shiny_female": "shiny/female/41.gif"
        }
    },
    {
        "id": 42,
        "entry": 42,
        "name": "nosferalto",
        "form_name": "golbat",
        "type1": "poison",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "42.gif",
            "front_shiny": "shiny/42.gif",
            "front_female": "female/42.gif",
            "front_shiny_female": "shiny/female/42.gif"
        }
    },
    {
        "id": 43,
        "entry": 43,
        "name": "mystherbe",
        "form_name": "oddish",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "43.gif",
            "front_shiny": "shiny/43.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 44,
        "entry": 44,
        "name": "ortide",
        "form_name": "gloom",
        "type1": "plante",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "44.gif",
            "front_shiny": "shiny/44.gif",
            "front_female": "female/44.gif",
            "front_shiny_female": "shiny/female/44.gif"
        }
    },
    {
        "id": 45,
        "entry": 45,
        "name": "rafflesia",
        "form_name": "vileplume",
        "type1": "plante",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "45.gif",
            "front_shiny": "shiny/45.gif",
            "front_female": "female/45.gif",
            "front_shiny_female": "shiny/female/45.gif"
        }
    },
    {
        "id": 46,
        "entry": 46,
        "name": "paras",
        "form_name": "paras",
        "type1": "insecte",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "46.gif",
            "front_shiny": "shiny/46.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 47,
        "entry": 47,
        "name": "parasect",
        "form_name": "parasect",
        "type1": "insecte",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "47.gif",
            "front_shiny": "shiny/47.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 48,
        "entry": 48,
        "name": "mimitoss",
        "form_name": "venonat",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "48.gif",
            "front_shiny": "shiny/48.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 49,
        "entry": 49,
        "name": "aéromite",
        "form_name": "venomoth",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "49.gif",
            "front_shiny": "shiny/49.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 50,
        "entry": 50,
        "name": "taupiqueur",
        "form_name": "diglett",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "50.gif",
            "front_shiny": "shiny/50.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 51,
        "entry": 51,
        "name": "triopikeur",
        "form_name": "dugtrio",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "51.gif",
            "front_shiny": "shiny/51.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 52,
        "entry": 52,
        "name": "miaouss",
        "form_name": "meowth",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "52.gif",
            "front_shiny": "shiny/52.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 53,
        "entry": 53,
        "name": "persian",
        "form_name": "persian",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "53.gif",
            "front_shiny": "shiny/53.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 54,
        "entry": 54,
        "name": "psykokwak",
        "form_name": "psyduck",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "54.gif",
            "front_shiny": "shiny/54.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 55,
        "entry": 55,
        "name": "akwakwak",
        "form_name": "golduck",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "55.gif",
            "front_shiny": "shiny/55.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 56,
        "entry": 56,
        "name": "férosinge",
        "form_name": "mankey",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "56.gif",
            "front_shiny": "shiny/56.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 57,
        "entry": 57,
        "name": "colossinge",
        "form_name": "primeape",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "57.gif",
            "front_shiny": "shiny/57.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 58,
        "entry": 58,
        "name": "caninos",
        "form_name": "growlithe",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "58.gif",
            "front_shiny": "shiny/58.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 59,
        "entry": 59,
        "name": "arcanin",
        "form_name": "arcanine",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "59.gif",
            "front_shiny": "shiny/59.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 60,
        "entry": 60,
        "name": "ptitard",
        "form_name": "poliwag",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "60.gif",
            "front_shiny": "shiny/60.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 61,
        "entry": 61,
        "name": "têtarte",
        "form_name": "poliwhirl",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "61.gif",
            "front_shiny": "shiny/61.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 62,
        "entry": 62,
        "name": "tartard",
        "form_name": "poliwrath",
        "type1": "eau",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "62.gif",
            "front_shiny": "shiny/62.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 63,
        "entry": 63,
        "name": "abra",
        "form_name": "abra",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "63.gif",
            "front_shiny": "shiny/63.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 64,
        "entry": 64,
        "name": "kadabra",
        "form_name": "kadabra",
        "type1": "psy",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "64.gif",
            "front_shiny": "shiny/64.gif",
            "front_female": "female/64.gif",
            "front_shiny_female": "shiny/female/64.gif"
        }
    },
    {
        "id": 65,
        "entry": 65,
        "name": "alakazam",
        "form_name": "alakazam",
        "type1": "psy",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "65.gif",
            "front_shiny": "shiny/65.gif",
            "front_female": "female/65.gif",
            "front_shiny_female": "shiny/female/65.gif"
        }
    },
    {
        "id": 66,
        "entry": 66,
        "name": "machoc",
        "form_name": "machop",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "66.gif",
            "front_shiny": "shiny/66.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 67,
        "entry": 67,
        "name": "machopeur",
        "form_name": "machoke",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "67.gif",
            "front_shiny": "shiny/67.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 68,
        "entry": 68,
        "name": "mackogneur",
        "form_name": "machamp",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "68.gif",
            "front_shiny": "shiny/68.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 69,
        "entry": 69,
        "name": "chétiflor",
        "form_name": "bellsprout",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "69.gif",
            "front_shiny": "shiny/69.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 70,
        "entry": 70,
        "name": "boustiflor",
        "form_name": "weepinbell",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "70.gif",
            "front_shiny": "shiny/70.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 71,
        "entry": 71,
        "name": "empiflor",
        "form_name": "victreebel",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "71.gif",
            "front_shiny": "shiny/71.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 72,
        "entry": 72,
        "name": "tentacool",
        "form_name": "tentacool",
        "type1": "eau",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "72.gif",
            "front_shiny": "shiny/72.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 73,
        "entry": 73,
        "name": "tentacruel",
        "form_name": "tentacruel",
        "type1": "eau",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "73.gif",
            "front_shiny": "shiny/73.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 74,
        "entry": 74,
        "name": "racaillou",
        "form_name": "geodude",
        "type1": "roche",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "74.gif",
            "front_shiny": "shiny/74.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 75,
        "entry": 75,
        "name": "gravalanch",
        "form_name": "graveler",
        "type1": "roche",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "75.gif",
            "front_shiny": "shiny/75.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 76,
        "entry": 76,
        "name": "grolem",
        "form_name": "golem",
        "type1": "roche",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "76.gif",
            "front_shiny": "shiny/76.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 77,
        "entry": 77,
        "name": "ponyta",
        "form_name": "ponyta",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "77.gif",
            "front_shiny": "shiny/77.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 78,
        "entry": 78,
        "name": "galopa",
        "form_name": "rapidash",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "78.gif",
            "front_shiny": "shiny/78.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 79,
        "entry": 79,
        "name": "ramoloss",
        "form_name": "slowpoke",
        "type1": "eau",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "79.gif",
            "front_shiny": "shiny/79.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 80,
        "entry": 80,
        "name": "flagadoss",
        "form_name": "slowbro",
        "type1": "eau",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "80.gif",
            "front_shiny": "shiny/80.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 81,
        "entry": 81,
        "name": "magnéti",
        "form_name": "magnemite",
        "type1": "électrik",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "81.gif",
            "front_shiny": "shiny/81.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 82,
        "entry": 82,
        "name": "magnéton",
        "form_name": "magneton",
        "type1": "électrik",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "82.gif",
            "front_shiny": "shiny/82.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 83,
        "entry": 83,
        "form_name": "farfetchd",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "83.gif",
            "front_shiny": "shiny/83.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 84,
        "entry": 84,
        "name": "doduo",
        "form_name": "doduo",
        "type1": "normal",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "84.gif",
            "front_shiny": "shiny/84.gif",
            "front_female": "female/84.gif",
            "front_shiny_female": "shiny/female/84.gif"
        }
    },
    {
        "id": 85,
        "entry": 85,
        "name": "dodrio",
        "form_name": "dodrio",
        "type1": "normal",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "85.gif",
            "front_shiny": "shiny/85.gif",
            "front_female": "female/85.gif",
            "front_shiny_female": "shiny/female/85.gif"
        }
    },
    {
        "id": 86,
        "entry": 86,
        "name": "otaria",
        "form_name": "seel",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "86.gif",
            "front_shiny": "shiny/86.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 87,
        "entry": 87,
        "name": "lamantine",
        "form_name": "dewgong",
        "type1": "eau",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "87.gif",
            "front_shiny": "shiny/87.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 88,
        "entry": 88,
        "name": "tadmorv",
        "form_name": "grimer",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "88.gif",
            "front_shiny": "shiny/88.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 89,
        "entry": 89,
        "name": "grotadmorv",
        "form_name": "muk",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "89.gif",
            "front_shiny": "shiny/89.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 90,
        "entry": 90,
        "name": "kokiyas",
        "form_name": "shellder",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "90.gif",
            "front_shiny": "shiny/90.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 91,
        "entry": 91,
        "name": "crustabri",
        "form_name": "cloyster",
        "type1": "eau",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "91.gif",
            "front_shiny": "shiny/91.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 92,
        "entry": 92,
        "name": "fantominus",
        "form_name": "gastly",
        "type1": "spectre",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "92.gif",
            "front_shiny": "shiny/92.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 93,
        "entry": 93,
        "name": "spectrum",
        "form_name": "haunter",
        "type1": "spectre",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "93.gif",
            "front_shiny": "shiny/93.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 94,
        "entry": 94,
        "name": "ectoplasma",
        "form_name": "gengar",
        "type1": "spectre",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "94.gif",
            "front_shiny": "shiny/94.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 95,
        "entry": 95,
        "name": "onix",
        "form_name": "onix",
        "type1": "roche",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "95.gif",
            "front_shiny": "shiny/95.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 96,
        "entry": 96,
        "name": "soporifik",
        "form_name": "drowzee",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "96.gif",
            "front_shiny": "shiny/96.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 97,
        "entry": 97,
        "name": "hypnomade",
        "form_name": "hypno",
        "type1": "psy",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "97.gif",
            "front_shiny": "shiny/97.gif",
            "front_female": "female/97.gif",
            "front_shiny_female": "shiny/female/97.gif"
        }
    },
    {
        "id": 98,
        "entry": 98,
        "name": "krabby",
        "form_name": "krabby",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "98.gif",
            "front_shiny": "shiny/98.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 99,
        "entry": 99,
        "name": "krabboss",
        "form_name": "kingler",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "99.gif",
            "front_shiny": "shiny/99.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 100,
        "entry": 100,
        "name": "voltorbe",
        "form_name": "voltorb",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "100.gif",
            "front_shiny": "shiny/100.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 101,
        "entry": 101,
        "name": "électrode",
        "form_name": "electrode",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "101.gif",
            "front_shiny": "shiny/101.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 102,
        "entry": 102,
        "name": "nœunœuf",
        "form_name": "exeggcute",
        "type1": "plante",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "102.gif",
            "front_shiny": "shiny/102.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 103,
        "entry": 103,
        "name": "noadkoko",
        "form_name": "exeggutor",
        "type1": "plante",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "103.gif",
            "front_shiny": "shiny/103.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 104,
        "entry": 104,
        "name": "osselait",
        "form_name": "cubone",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "104.gif",
            "front_shiny": "shiny/104.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 105,
        "entry": 105,
        "name": "ossatueur",
        "form_name": "marowak",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "105.gif",
            "front_shiny": "shiny/105.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 106,
        "entry": 106,
        "name": "kicklee",
        "form_name": "hitmonlee",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "106.gif",
            "front_shiny": "shiny/106.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 107,
        "entry": 107,
        "name": "tygnon",
        "form_name": "hitmonchan",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "107.gif",
            "front_shiny": "shiny/107.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 108,
        "entry": 108,
        "name": "excelangue",
        "form_name": "lickitung",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "108.gif",
            "front_shiny": "shiny/108.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 109,
        "entry": 109,
        "name": "smogo",
        "form_name": "koffing",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "109.gif",
            "front_shiny": "shiny/109.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 110,
        "entry": 110,
        "name": "smogogo",
        "form_name": "weezing",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "110.gif",
            "front_shiny": "shiny/110.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 111,
        "entry": 111,
        "name": "rhinocorne",
        "form_name": "rhyhorn",
        "type1": "sol",
        "type2": "roche",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "111.gif",
            "front_shiny": "shiny/111.gif",
            "front_female": "female/111.gif",
            "front_shiny_female": "shiny/female/111.gif"
        }
    },
    {
        "id": 112,
        "entry": 112,
        "name": "rhinoféros",
        "form_name": "rhydon",
        "type1": "sol",
        "type2": "roche",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "112.gif",
            "front_shiny": "shiny/112.gif",
            "front_female": "female/112.gif",
            "front_shiny_female": "shiny/female/112.gif"
        }
    },
    {
        "id": 113,
        "entry": 113,
        "name": "leveinard",
        "form_name": "chansey",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "113.gif",
            "front_shiny": "shiny/113.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 114,
        "entry": 114,
        "name": "saquedeneu",
        "form_name": "tangela",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "114.gif",
            "front_shiny": "shiny/114.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 115,
        "entry": 115,
        "name": "kangourex",
        "form_name": "kangaskhan",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "115.gif",
            "front_shiny": "shiny/115.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 116,
        "entry": 116,
        "name": "hypotrempe",
        "form_name": "horsea",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "116.gif",
            "front_shiny": "shiny/116.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 117,
        "entry": 117,
        "name": "hypocéan",
        "form_name": "seadra",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "117.gif",
            "front_shiny": "shiny/117.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 118,
        "entry": 118,
        "name": "poissirène",
        "form_name": "goldeen",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "118.gif",
            "front_shiny": "shiny/118.gif",
            "front_female": "female/118.gif",
            "front_shiny_female": "shiny/female/118.gif"
        }
    },
    {
        "id": 119,
        "entry": 119,
        "name": "poissoroy",
        "form_name": "seaking",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "119.gif",
            "front_shiny": "shiny/119.gif",
            "front_female": "female/119.gif",
            "front_shiny_female": "shiny/female/119.gif"
        }
    },
    {
        "id": 120,
        "entry": 120,
        "name": "stari",
        "form_name": "staryu",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "120.gif",
            "front_shiny": "shiny/120.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 121,
        "entry": 121,
        "name": "staross",
        "form_name": "starmie",
        "type1": "eau",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "121.gif",
            "front_shiny": "shiny/121.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 122,
        "entry": 122,
        "form_name": "mr-mime",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "122.gif",
            "front_shiny": "shiny/122.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 123,
        "entry": 123,
        "name": "insécateur",
        "form_name": "scyther",
        "type1": "insecte",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "123.gif",
            "front_shiny": "shiny/123.gif",
            "front_female": "female/123.gif",
            "front_shiny_female": "shiny/female/123.gif"
        }
    },
    {
        "id": 124,
        "entry": 124,
        "name": "lippoutou",
        "form_name": "jynx",
        "type1": "glace",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "124.gif",
            "front_shiny": "shiny/124.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 125,
        "entry": 125,
        "name": "élektek",
        "form_name": "electabuzz",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "125.gif",
            "front_shiny": "shiny/125.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 126,
        "entry": 126,
        "name": "magmar",
        "form_name": "magmar",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "126.gif",
            "front_shiny": "shiny/126.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 127,
        "entry": 127,
        "name": "scarabrute",
        "form_name": "pinsir",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "127.gif",
            "front_shiny": "shiny/127.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 128,
        "entry": 128,
        "name": "tauros",
        "form_name": "tauros",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "128.gif",
            "front_shiny": "shiny/128.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 129,
        "entry": 129,
        "name": "magicarpe",
        "form_name": "magikarp",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "129.gif",
            "front_shiny": "shiny/129.gif",
            "front_female": "female/129.gif",
            "front_shiny_female": "shiny/female/129.gif"
        }
    },
    {
        "id": 130,
        "entry": 130,
        "name": "léviator",
        "form_name": "gyarados",
        "type1": "eau",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "130.gif",
            "front_shiny": "shiny/130.gif",
            "front_female": "female/130.gif",
            "front_shiny_female": "shiny/female/130.gif"
        }
    },
    {
        "id": 131,
        "entry": 131,
        "name": "lokhlass",
        "form_name": "lapras",
        "type1": "eau",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "131.gif",
            "front_shiny": "shiny/131.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 132,
        "entry": 132,
        "name": "métamorph",
        "form_name": "ditto",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "132.gif",
            "front_shiny": "shiny/132.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 133,
        "entry": 133,
        "name": "évoli",
        "form_name": "eevee",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "133.gif",
            "front_shiny": "shiny/133.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 134,
        "entry": 134,
        "name": "aquali",
        "form_name": "vaporeon",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "134.gif",
            "front_shiny": "shiny/134.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 135,
        "entry": 135,
        "name": "voltali",
        "form_name": "jolteon",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "135.gif",
            "front_shiny": "shiny/135.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 136,
        "entry": 136,
        "name": "pyroli",
        "form_name": "flareon",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "136.gif",
            "front_shiny": "shiny/136.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 137,
        "entry": 137,
        "name": "porygon",
        "form_name": "porygon",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "137.gif",
            "front_shiny": "shiny/137.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 138,
        "entry": 138,
        "name": "amonita",
        "form_name": "omanyte",
        "type1": "roche",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "138.gif",
            "front_shiny": "shiny/138.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 139,
        "entry": 139,
        "name": "amonistar",
        "form_name": "omastar",
        "type1": "roche",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "139.gif",
            "front_shiny": "shiny/139.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 140,
        "entry": 140,
        "name": "kabuto",
        "form_name": "kabuto",
        "type1": "roche",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "140.gif",
            "front_shiny": "shiny/140.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 141,
        "entry": 141,
        "name": "kabutops",
        "form_name": "kabutops",
        "type1": "roche",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "141.gif",
            "front_shiny": "shiny/141.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 142,
        "entry": 142,
        "name": "ptéra",
        "form_name": "aerodactyl",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "142.gif",
            "front_shiny": "shiny/142.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 143,
        "entry": 143,
        "name": "ronflex",
        "form_name": "snorlax",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "143.gif",
            "front_shiny": "shiny/143.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 144,
        "entry": 144,
        "name": "artikodin",
        "form_name": "articuno",
        "type1": "glace",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "144.gif",
            "front_shiny": "shiny/144.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 145,
        "entry": 145,
        "name": "électhor",
        "form_name": "zapdos",
        "type1": "électrik",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "145.gif",
            "front_shiny": "shiny/145.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 146,
        "entry": 146,
        "name": "sulfura",
        "form_name": "moltres",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "146.gif",
            "front_shiny": "shiny/146.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 147,
        "entry": 147,
        "name": "minidraco",
        "form_name": "dratini",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "147.gif",
            "front_shiny": "shiny/147.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 148,
        "entry": 148,
        "name": "draco",
        "form_name": "dragonair",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "148.gif",
            "front_shiny": "shiny/148.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 149,
        "entry": 149,
        "name": "dracolosse",
        "form_name": "dragonite",
        "type1": "dragon",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "149.gif",
            "front_shiny": "shiny/149.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 150,
        "entry": 150,
        "name": "mewtwo",
        "form_name": "mewtwo",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "150.gif",
            "front_shiny": "shiny/150.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 151,
        "entry": 151,
        "name": "mew",
        "form_name": "mew",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "151.gif",
            "front_shiny": "shiny/151.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 152,
        "entry": 152,
        "name": "germignon",
        "form_name": "chikorita",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "152.gif",
            "front_shiny": "shiny/152.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 153,
        "entry": 153,
        "name": "macronium",
        "form_name": "bayleef",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "153.gif",
            "front_shiny": "shiny/153.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 154,
        "entry": 154,
        "name": "méganium",
        "form_name": "meganium",
        "type1": "plante",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "154.gif",
            "front_shiny": "shiny/154.gif",
            "front_female": "female/154.gif",
            "front_shiny_female": "shiny/female/154.gif"
        }
    },
    {
        "id": 155,
        "entry": 155,
        "name": "héricendre",
        "form_name": "cyndaquil",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "155.gif",
            "front_shiny": "shiny/155.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 156,
        "entry": 156,
        "name": "feurisson",
        "form_name": "quilava",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "156.gif",
            "front_shiny": "shiny/156.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 157,
        "entry": 157,
        "name": "typhlosion",
        "form_name": "typhlosion",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "157.gif",
            "front_shiny": "shiny/157.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 158,
        "entry": 158,
        "name": "kaiminus",
        "form_name": "totodile",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "158.gif",
            "front_shiny": "shiny/158.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 159,
        "entry": 159,
        "name": "crocrodil",
        "form_name": "croconaw",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "159.gif",
            "front_shiny": "shiny/159.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 160,
        "entry": 160,
        "name": "aligatueur",
        "form_name": "feraligatr",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "160.gif",
            "front_shiny": "shiny/160.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 161,
        "entry": 161,
        "name": "fouinette",
        "form_name": "sentret",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "161.gif",
            "front_shiny": "shiny/161.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 162,
        "entry": 162,
        "name": "fouinar",
        "form_name": "furret",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "162.gif",
            "front_shiny": "shiny/162.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 163,
        "entry": 163,
        "name": "hoothoot",
        "form_name": "hoothoot",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "163.gif",
            "front_shiny": "shiny/163.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 164,
        "entry": 164,
        "name": "noarfang",
        "form_name": "noctowl",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "164.gif",
            "front_shiny": "shiny/164.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 165,
        "entry": 165,
        "name": "coxy",
        "form_name": "ledyba",
        "type1": "insecte",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "165.gif",
            "front_shiny": "shiny/165.gif",
            "front_female": "female/165.gif",
            "front_shiny_female": "shiny/female/165.gif"
        }
    },
    {
        "id": 166,
        "entry": 166,
        "name": "coxyclaque",
        "form_name": "ledian",
        "type1": "insecte",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "166.gif",
            "front_shiny": "shiny/166.gif",
            "front_female": "female/166.gif",
            "front_shiny_female": "shiny/female/166.gif"
        }
    },
    {
        "id": 167,
        "entry": 167,
        "name": "mimigal",
        "form_name": "spinarak",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "167.gif",
            "front_shiny": "shiny/167.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 168,
        "entry": 168,
        "name": "migalos",
        "form_name": "ariados",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "168.gif",
            "front_shiny": "shiny/168.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 169,
        "entry": 169,
        "name": "nostenfer",
        "form_name": "crobat",
        "type1": "poison",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "169.gif",
            "front_shiny": "shiny/169.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 170,
        "entry": 170,
        "name": "loupio",
        "form_name": "chinchou",
        "type1": "eau",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "170.gif",
            "front_shiny": "shiny/170.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 171,
        "entry": 171,
        "name": "lanturn",
        "form_name": "lanturn",
        "type1": "eau",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "171.gif",
            "front_shiny": "shiny/171.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 172,
        "entry": 172,
        "name": "pichu",
        "form_name": "pichu",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "172.gif",
            "front_shiny": "shiny/172.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 173,
        "entry": 173,
        "name": "mélo",
        "form_name": "cleffa",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "173.gif",
            "front_shiny": "shiny/173.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 174,
        "entry": 174,
        "name": "toudoudou",
        "form_name": "igglybuff",
        "type1": "normal",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "174.gif",
            "front_shiny": "shiny/174.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 175,
        "entry": 175,
        "name": "togepi",
        "form_name": "togepi",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "175.gif",
            "front_shiny": "shiny/175.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 176,
        "entry": 176,
        "name": "togetic",
        "form_name": "togetic",
        "type1": "fée",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "176.gif",
            "front_shiny": "shiny/176.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 177,
        "entry": 177,
        "name": "natu",
        "form_name": "natu",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "177.gif",
            "front_shiny": "shiny/177.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 178,
        "entry": 178,
        "name": "xatu",
        "form_name": "xatu",
        "type1": "psy",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "178.gif",
            "front_shiny": "shiny/178.gif",
            "front_female": "female/178.gif",
            "front_shiny_female": "shiny/female/178.gif"
        }
    },
    {
        "id": 179,
        "entry": 179,
        "name": "wattouat",
        "form_name": "mareep",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "179.gif",
            "front_shiny": "shiny/179.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 180,
        "entry": 180,
        "name": "lainergie",
        "form_name": "flaaffy",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "180.gif",
            "front_shiny": "shiny/180.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 181,
        "entry": 181,
        "name": "pharamp",
        "form_name": "ampharos",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "181.gif",
            "front_shiny": "shiny/181.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 182,
        "entry": 182,
        "name": "joliflor",
        "form_name": "bellossom",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "182.gif",
            "front_shiny": "shiny/182.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 183,
        "entry": 183,
        "name": "marill",
        "form_name": "marill",
        "type1": "eau",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "183.gif",
            "front_shiny": "shiny/183.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 184,
        "entry": 184,
        "name": "azumarill",
        "form_name": "azumarill",
        "type1": "eau",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "184.gif",
            "front_shiny": "shiny/184.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 185,
        "entry": 185,
        "name": "simularbre",
        "form_name": "sudowoodo",
        "type1": "roche",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "185.gif",
            "front_shiny": "shiny/185.gif",
            "front_female": "female/185.gif",
            "front_shiny_female": "shiny/female/185.gif"
        }
    },
    {
        "id": 186,
        "entry": 186,
        "name": "tarpaud",
        "form_name": "politoed",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "186.gif",
            "front_shiny": "shiny/186.gif",
            "front_female": "female/186.gif",
            "front_shiny_female": "shiny/female/186.gif"
        }
    },
    {
        "id": 187,
        "entry": 187,
        "name": "granivol",
        "form_name": "hoppip",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "187.gif",
            "front_shiny": "shiny/187.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 188,
        "entry": 188,
        "name": "floravol",
        "form_name": "skiploom",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "188.gif",
            "front_shiny": "shiny/188.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 189,
        "entry": 189,
        "name": "cotovol",
        "form_name": "jumpluff",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "189.gif",
            "front_shiny": "shiny/189.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 190,
        "entry": 190,
        "name": "capumain",
        "form_name": "aipom",
        "type1": "normal",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "190.gif",
            "front_shiny": "shiny/190.gif",
            "front_female": "female/190.gif",
            "front_shiny_female": "shiny/female/190.gif"
        }
    },
    {
        "id": 191,
        "entry": 191,
        "name": "tournegrin",
        "form_name": "sunkern",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "191.gif",
            "front_shiny": "shiny/191.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 192,
        "entry": 192,
        "name": "héliatronc",
        "form_name": "sunflora",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "192.gif",
            "front_shiny": "shiny/192.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 193,
        "entry": 193,
        "name": "yanma",
        "form_name": "yanma",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "193.gif",
            "front_shiny": "shiny/193.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 194,
        "entry": 194,
        "name": "axoloto",
        "form_name": "wooper",
        "type1": "eau",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "194.gif",
            "front_shiny": "shiny/194.gif",
            "front_female": "female/194.gif",
            "front_shiny_female": "shiny/female/194.gif"
        }
    },
    {
        "id": 195,
        "entry": 195,
        "name": "maraiste",
        "form_name": "quagsire",
        "type1": "eau",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "195.gif",
            "front_shiny": "shiny/195.gif",
            "front_female": "female/195.gif",
            "front_shiny_female": "shiny/female/195.gif"
        }
    },
    {
        "id": 196,
        "entry": 196,
        "name": "mentali",
        "form_name": "espeon",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "196.gif",
            "front_shiny": "shiny/196.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 197,
        "entry": 197,
        "name": "noctali",
        "form_name": "umbreon",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "197.gif",
            "front_shiny": "shiny/197.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 198,
        "entry": 198,
        "name": "cornèbre",
        "form_name": "murkrow",
        "type1": "ténèbres",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "198.gif",
            "front_shiny": "shiny/198.gif",
            "front_female": "female/198.gif",
            "front_shiny_female": "shiny/female/198.gif"
        }
    },
    {
        "id": 199,
        "entry": 199,
        "name": "roigada",
        "form_name": "slowking",
        "type1": "eau",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "199.gif",
            "front_shiny": "shiny/199.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 200,
        "entry": 200,
        "name": "feuforêve",
        "form_name": "misdreavus",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "200.gif",
            "front_shiny": "shiny/200.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 201,
        "entry": 201,
        "name": "zarbi",
        "form_name": "unown",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "201.gif",
            "front_shiny": "shiny/201.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 202,
        "entry": 202,
        "name": "qulbutoké",
        "form_name": "wobbuffet",
        "type1": "psy",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "202.gif",
            "front_shiny": "shiny/202.gif",
            "front_female": "female/202.gif",
            "front_shiny_female": "shiny/female/202.gif"
        }
    },
    {
        "id": 203,
        "entry": 203,
        "name": "girafarig",
        "form_name": "girafarig",
        "type1": "normal",
        "type2": "psy",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "203.gif",
            "front_shiny": "shiny/203.gif",
            "front_female": "female/203.gif",
            "front_shiny_female": "shiny/female/203.gif"
        }
    },
    {
        "id": 204,
        "entry": 204,
        "name": "pomdepic",
        "form_name": "pineco",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "204.gif",
            "front_shiny": "shiny/204.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 205,
        "entry": 205,
        "name": "foretress",
        "form_name": "forretress",
        "type1": "insecte",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "205.gif",
            "front_shiny": "shiny/205.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 206,
        "entry": 206,
        "name": "insolourdo",
        "form_name": "dunsparce",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "206.gif",
            "front_shiny": "shiny/206.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 207,
        "entry": 207,
        "name": "scorplane",
        "form_name": "gligar",
        "type1": "sol",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "207.gif",
            "front_shiny": "shiny/207.gif",
            "front_female": "female/207.gif",
            "front_shiny_female": "shiny/female/207.gif"
        }
    },
    {
        "id": 208,
        "entry": 208,
        "name": "steelix",
        "form_name": "steelix",
        "type1": "acier",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "208.gif",
            "front_shiny": "shiny/208.gif",
            "front_female": "female/208.gif",
            "front_shiny_female": "shiny/female/208.gif"
        }
    },
    {
        "id": 209,
        "entry": 209,
        "name": "snubbull",
        "form_name": "snubbull",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "209.gif",
            "front_shiny": "shiny/209.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 210,
        "entry": 210,
        "name": "granbull",
        "form_name": "granbull",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "210.gif",
            "front_shiny": "shiny/210.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 211,
        "entry": 211,
        "name": "qwilfish",
        "form_name": "qwilfish",
        "type1": "eau",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "211.gif",
            "front_shiny": "shiny/211.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 212,
        "entry": 212,
        "name": "cizayox",
        "form_name": "scizor",
        "type1": "insecte",
        "type2": "acier",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "212.gif",
            "front_shiny": "shiny/212.gif",
            "front_female": "female/212.gif",
            "front_shiny_female": "shiny/female/212.gif"
        }
    },
    {
        "id": 213,
        "entry": 213,
        "name": "caratroc",
        "form_name": "shuckle",
        "type1": "insecte",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "213.gif",
            "front_shiny": "shiny/213.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 214,
        "entry": 214,
        "name": "scarhino",
        "form_name": "heracross",
        "type1": "insecte",
        "type2": "combat",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "214.gif",
            "front_shiny": "shiny/214.gif",
            "front_female": "female/214.gif",
            "front_shiny_female": "shiny/female/214.gif"
        }
    },
    {
        "id": 215,
        "entry": 215,
        "name": "farfuret",
        "form_name": "sneasel",
        "type1": "ténèbres",
        "type2": "glace",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "215.gif",
            "front_shiny": "shiny/215.gif",
            "front_female": "female/215.gif",
            "front_shiny_female": "shiny/female/215.gif"
        }
    },
    {
        "id": 216,
        "entry": 216,
        "name": "teddiursa",
        "form_name": "teddiursa",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "216.gif",
            "front_shiny": "shiny/216.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 217,
        "entry": 217,
        "name": "ursaring",
        "form_name": "ursaring",
        "type1": "normal",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "217.gif",
            "front_shiny": "shiny/217.gif",
            "front_female": "female/217.gif",
            "front_shiny_female": "shiny/female/217.gif"
        }
    },
    {
        "id": 218,
        "entry": 218,
        "name": "limagma",
        "form_name": "slugma",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "218.gif",
            "front_shiny": "shiny/218.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 219,
        "entry": 219,
        "name": "volcaropod",
        "form_name": "magcargo",
        "type1": "feu",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "219.gif",
            "front_shiny": "shiny/219.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 220,
        "entry": 220,
        "name": "marcacrin",
        "form_name": "swinub",
        "type1": "glace",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "220.gif",
            "front_shiny": "shiny/220.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 221,
        "entry": 221,
        "name": "cochignon",
        "form_name": "piloswine",
        "type1": "glace",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "221.gif",
            "front_shiny": "shiny/221.gif",
            "front_female": "female/221.gif",
            "front_shiny_female": "shiny/female/221.gif"
        }
    },
    {
        "id": 222,
        "entry": 222,
        "name": "corayon",
        "form_name": "corsola",
        "type1": "eau",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "222.gif",
            "front_shiny": "shiny/222.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 223,
        "entry": 223,
        "name": "rémoraid",
        "form_name": "remoraid",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "223.gif",
            "front_shiny": "shiny/223.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 224,
        "entry": 224,
        "name": "octillery",
        "form_name": "octillery",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "224.gif",
            "front_shiny": "shiny/224.gif",
            "front_female": "female/224.gif",
            "front_shiny_female": "shiny/female/224.gif"
        }
    },
    {
        "id": 225,
        "entry": 225,
        "name": "cadoizo",
        "form_name": "delibird",
        "type1": "glace",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "225.gif",
            "front_shiny": "shiny/225.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 226,
        "entry": 226,
        "name": "démanta",
        "form_name": "mantine",
        "type1": "eau",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "226.gif",
            "front_shiny": "shiny/226.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 227,
        "entry": 227,
        "name": "airmure",
        "form_name": "skarmory",
        "type1": "acier",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "227.gif",
            "front_shiny": "shiny/227.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 228,
        "entry": 228,
        "name": "malosse",
        "form_name": "houndour",
        "type1": "ténèbres",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "228.gif",
            "front_shiny": "shiny/228.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 229,
        "entry": 229,
        "name": "démolosse",
        "form_name": "houndoom",
        "type1": "ténèbres",
        "type2": "feu",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "229.gif",
            "front_shiny": "shiny/229.gif",
            "front_female": "female/229.gif",
            "front_shiny_female": "shiny/female/229.gif"
        }
    },
    {
        "id": 230,
        "entry": 230,
        "name": "hyporoi",
        "form_name": "kingdra",
        "type1": "eau",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "230.gif",
            "front_shiny": "shiny/230.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 231,
        "entry": 231,
        "name": "phanpy",
        "form_name": "phanpy",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "231.gif",
            "front_shiny": "shiny/231.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 232,
        "entry": 232,
        "name": "donphan",
        "form_name": "donphan",
        "type1": "sol",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "232.gif",
            "front_shiny": "shiny/232.gif",
            "front_female": "female/232.gif",
            "front_shiny_female": "shiny/female/232.gif"
        }
    },
    {
        "id": 233,
        "entry": 233,
        "name": "porygon2",
        "form_name": "porygon2",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "233.gif",
            "front_shiny": "shiny/233.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 234,
        "entry": 234,
        "name": "cerfrousse",
        "form_name": "stantler",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "234.gif",
            "front_shiny": "shiny/234.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 235,
        "entry": 235,
        "name": "queulorior",
        "form_name": "smeargle",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "235.gif",
            "front_shiny": "shiny/235.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 236,
        "entry": 236,
        "name": "debugant",
        "form_name": "tyrogue",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "236.gif",
            "front_shiny": "shiny/236.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 237,
        "entry": 237,
        "name": "kapoera",
        "form_name": "hitmontop",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "237.gif",
            "front_shiny": "shiny/237.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 238,
        "entry": 238,
        "name": "lippouti",
        "form_name": "smoochum",
        "type1": "glace",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "238.gif",
            "front_shiny": "shiny/238.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 239,
        "entry": 239,
        "name": "élekid",
        "form_name": "elekid",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "239.gif",
            "front_shiny": "shiny/239.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 240,
        "entry": 240,
        "name": "magby",
        "form_name": "magby",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "240.gif",
            "front_shiny": "shiny/240.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 241,
        "entry": 241,
        "name": "écrémeuh",
        "form_name": "miltank",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "241.gif",
            "front_shiny": "shiny/241.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 242,
        "entry": 242,
        "name": "leuphorie",
        "form_name": "blissey",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "242.gif",
            "front_shiny": "shiny/242.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 243,
        "entry": 243,
        "name": "raikou",
        "form_name": "raikou",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "243.gif",
            "front_shiny": "shiny/243.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 244,
        "entry": 244,
        "name": "entei",
        "form_name": "entei",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "244.gif",
            "front_shiny": "shiny/244.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 245,
        "entry": 245,
        "name": "suicune",
        "form_name": "suicune",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "245.gif",
            "front_shiny": "shiny/245.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 246,
        "entry": 246,
        "name": "embrylex",
        "form_name": "larvitar",
        "type1": "roche",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "246.gif",
            "front_shiny": "shiny/246.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 247,
        "entry": 247,
        "name": "ymphect",
        "form_name": "pupitar",
        "type1": "roche",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "247.gif",
            "front_shiny": "shiny/247.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 248,
        "entry": 248,
        "name": "tyranocif",
        "form_name": "tyranitar",
        "type1": "roche",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "248.gif",
            "front_shiny": "shiny/248.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 249,
        "entry": 249,
        "name": "lugia",
        "form_name": "lugia",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "249.gif",
            "front_shiny": "shiny/249.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 250,
        "entry": 250,
        "name": "ho-oh",
        "form_name": "ho-oh",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "250.gif",
            "front_shiny": "shiny/250.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 251,
        "entry": 251,
        "name": "celebi",
        "form_name": "celebi",
        "type1": "psy",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "251.gif",
            "front_shiny": "shiny/251.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 252,
        "entry": 252,
        "name": "arcko",
        "form_name": "treecko",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "252.gif",
            "front_shiny": "shiny/252.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 253,
        "entry": 253,
        "name": "massko",
        "form_name": "grovyle",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "253.gif",
            "front_shiny": "shiny/253.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 254,
        "entry": 254,
        "name": "jungko",
        "form_name": "sceptile",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "254.gif",
            "front_shiny": "shiny/254.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 255,
        "entry": 255,
        "name": "poussifeu",
        "form_name": "torchic",
        "type1": "feu",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "255.gif",
            "front_shiny": "shiny/255.gif",
            "front_female": "female/255.gif",
            "front_shiny_female": "shiny/female/255.gif"
        }
    },
    {
        "id": 256,
        "entry": 256,
        "name": "galifeu",
        "form_name": "combusken",
        "type1": "feu",
        "type2": "combat",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "256.gif",
            "front_shiny": "shiny/256.gif",
            "front_female": "female/256.gif",
            "front_shiny_female": "shiny/female/256.gif"
        }
    },
    {
        "id": 257,
        "entry": 257,
        "name": "braségali",
        "form_name": "blaziken",
        "type1": "feu",
        "type2": "combat",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "257.gif",
            "front_shiny": "shiny/257.gif",
            "front_female": "female/257.gif",
            "front_shiny_female": "shiny/female/257.gif"
        }
    },
    {
        "id": 258,
        "entry": 258,
        "name": "gobou",
        "form_name": "mudkip",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "258.gif",
            "front_shiny": "shiny/258.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 259,
        "entry": 259,
        "name": "flobio",
        "form_name": "marshtomp",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "259.gif",
            "front_shiny": "shiny/259.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 260,
        "entry": 260,
        "name": "laggron",
        "form_name": "swampert",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "260.gif",
            "front_shiny": "shiny/260.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 261,
        "entry": 261,
        "name": "medhyèna",
        "form_name": "poochyena",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "261.gif",
            "front_shiny": "shiny/261.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 262,
        "entry": 262,
        "name": "grahyèna",
        "form_name": "mightyena",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "262.gif",
            "front_shiny": "shiny/262.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 263,
        "entry": 263,
        "name": "zigzaton",
        "form_name": "zigzagoon",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "263.gif",
            "front_shiny": "shiny/263.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 264,
        "entry": 264,
        "name": "linéon",
        "form_name": "linoone",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "264.gif",
            "front_shiny": "shiny/264.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 265,
        "entry": 265,
        "name": "chenipotte",
        "form_name": "wurmple",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "265.gif",
            "front_shiny": "shiny/265.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 266,
        "entry": 266,
        "name": "armulys",
        "form_name": "silcoon",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "266.gif",
            "front_shiny": "shiny/266.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 267,
        "entry": 267,
        "name": "charmillon",
        "form_name": "beautifly",
        "type1": "insecte",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "267.gif",
            "front_shiny": "shiny/267.gif",
            "front_female": "female/267.gif",
            "front_shiny_female": "shiny/female/267.gif"
        }
    },
    {
        "id": 268,
        "entry": 268,
        "name": "blindalys",
        "form_name": "cascoon",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "268.gif",
            "front_shiny": "shiny/268.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 269,
        "entry": 269,
        "name": "papinox",
        "form_name": "dustox",
        "type1": "insecte",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "269.gif",
            "front_shiny": "shiny/269.gif",
            "front_female": "female/269.gif",
            "front_shiny_female": "shiny/female/269.gif"
        }
    },
    {
        "id": 270,
        "entry": 270,
        "name": "nénupiot",
        "form_name": "lotad",
        "type1": "eau",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "270.gif",
            "front_shiny": "shiny/270.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 271,
        "entry": 271,
        "name": "lombre",
        "form_name": "lombre",
        "type1": "eau",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "271.gif",
            "front_shiny": "shiny/271.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 272,
        "entry": 272,
        "name": "ludicolo",
        "form_name": "ludicolo",
        "type1": "eau",
        "type2": "plante",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "272.gif",
            "front_shiny": "shiny/272.gif",
            "front_female": "female/272.gif",
            "front_shiny_female": "shiny/female/272.gif"
        }
    },
    {
        "id": 273,
        "entry": 273,
        "name": "grainipiot",
        "form_name": "seedot",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "273.gif",
            "front_shiny": "shiny/273.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 274,
        "entry": 274,
        "name": "pifeuil",
        "form_name": "nuzleaf",
        "type1": "plante",
        "type2": "ténèbres",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "274.gif",
            "front_shiny": "shiny/274.gif",
            "front_female": "female/274.gif",
            "front_shiny_female": "shiny/female/274.gif"
        }
    },
    {
        "id": 275,
        "entry": 275,
        "name": "tengalice",
        "form_name": "shiftry",
        "type1": "plante",
        "type2": "ténèbres",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "275.gif",
            "front_shiny": "shiny/275.gif",
            "front_female": "female/275.gif",
            "front_shiny_female": "shiny/female/275.gif"
        }
    },
    {
        "id": 276,
        "entry": 276,
        "name": "nirondelle",
        "form_name": "taillow",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "276.gif",
            "front_shiny": "shiny/276.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 277,
        "entry": 277,
        "name": "hélédelle",
        "form_name": "swellow",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "277.gif",
            "front_shiny": "shiny/277.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 278,
        "entry": 278,
        "name": "goélise",
        "form_name": "wingull",
        "type1": "eau",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "278.gif",
            "front_shiny": "shiny/278.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 279,
        "entry": 279,
        "name": "bekipan",
        "form_name": "pelipper",
        "type1": "eau",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "279.gif",
            "front_shiny": "shiny/279.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 280,
        "entry": 280,
        "name": "tarsal",
        "form_name": "ralts",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "280.gif",
            "front_shiny": "shiny/280.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 281,
        "entry": 281,
        "name": "kirlia",
        "form_name": "kirlia",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "281.gif",
            "front_shiny": "shiny/281.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 282,
        "entry": 282,
        "name": "gardevoir",
        "form_name": "gardevoir",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "282.gif",
            "front_shiny": "shiny/282.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 283,
        "entry": 283,
        "name": "arakdo",
        "form_name": "surskit",
        "type1": "insecte",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "283.gif",
            "front_shiny": "shiny/283.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 284,
        "entry": 284,
        "name": "maskadra",
        "form_name": "masquerain",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "284.gif",
            "front_shiny": "shiny/284.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 285,
        "entry": 285,
        "name": "balignon",
        "form_name": "shroomish",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "285.gif",
            "front_shiny": "shiny/285.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 286,
        "entry": 286,
        "name": "chapignon",
        "form_name": "breloom",
        "type1": "plante",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "286.gif",
            "front_shiny": "shiny/286.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 287,
        "entry": 287,
        "name": "parecool",
        "form_name": "slakoth",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "287.gif",
            "front_shiny": "shiny/287.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 288,
        "entry": 288,
        "name": "vigoroth",
        "form_name": "vigoroth",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "288.gif",
            "front_shiny": "shiny/288.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 289,
        "entry": 289,
        "name": "monaflèmit",
        "form_name": "slaking",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "289.gif",
            "front_shiny": "shiny/289.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 290,
        "entry": 290,
        "name": "ningale",
        "form_name": "nincada",
        "type1": "insecte",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "290.gif",
            "front_shiny": "shiny/290.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 291,
        "entry": 291,
        "name": "ninjask",
        "form_name": "ninjask",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "291.gif",
            "front_shiny": "shiny/291.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 292,
        "entry": 292,
        "name": "munja",
        "form_name": "shedinja",
        "type1": "insecte",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "292.gif",
            "front_shiny": "shiny/292.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 293,
        "entry": 293,
        "name": "chuchmur",
        "form_name": "whismur",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "293.gif",
            "front_shiny": "shiny/293.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 294,
        "entry": 294,
        "name": "ramboum",
        "form_name": "loudred",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "294.gif",
            "front_shiny": "shiny/294.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 295,
        "entry": 295,
        "name": "brouhabam",
        "form_name": "exploud",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "295.gif",
            "front_shiny": "shiny/295.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 296,
        "entry": 296,
        "name": "makuhita",
        "form_name": "makuhita",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "296.gif",
            "front_shiny": "shiny/296.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 297,
        "entry": 297,
        "name": "hariyama",
        "form_name": "hariyama",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "297.gif",
            "front_shiny": "shiny/297.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 298,
        "entry": 298,
        "name": "azurill",
        "form_name": "azurill",
        "type1": "normal",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "298.gif",
            "front_shiny": "shiny/298.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 299,
        "entry": 299,
        "name": "tarinor",
        "form_name": "nosepass",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "299.gif",
            "front_shiny": "shiny/299.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 300,
        "entry": 300,
        "name": "skitty",
        "form_name": "skitty",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "300.gif",
            "front_shiny": "shiny/300.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 301,
        "entry": 301,
        "name": "delcatty",
        "form_name": "delcatty",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "301.gif",
            "front_shiny": "shiny/301.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 302,
        "entry": 302,
        "name": "ténéfix",
        "form_name": "sableye",
        "type1": "ténèbres",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "302.gif",
            "front_shiny": "shiny/302.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 303,
        "entry": 303,
        "name": "mysdibule",
        "form_name": "mawile",
        "type1": "acier",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "303.gif",
            "front_shiny": "shiny/303.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 304,
        "entry": 304,
        "name": "galekid",
        "form_name": "aron",
        "type1": "acier",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "304.gif",
            "front_shiny": "shiny/304.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 305,
        "entry": 305,
        "name": "galegon",
        "form_name": "lairon",
        "type1": "acier",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "305.gif",
            "front_shiny": "shiny/305.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 306,
        "entry": 306,
        "name": "galeking",
        "form_name": "aggron",
        "type1": "acier",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "306.gif",
            "front_shiny": "shiny/306.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 307,
        "entry": 307,
        "name": "méditikka",
        "form_name": "meditite",
        "type1": "combat",
        "type2": "psy",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "307.gif",
            "front_shiny": "shiny/307.gif",
            "front_female": "female/307.gif",
            "front_shiny_female": "shiny/female/307.gif"
        }
    },
    {
        "id": 308,
        "entry": 308,
        "name": "charmina",
        "form_name": "medicham",
        "type1": "combat",
        "type2": "psy",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "308.gif",
            "front_shiny": "shiny/308.gif",
            "front_female": "female/308.gif",
            "front_shiny_female": "shiny/female/308.gif"
        }
    },
    {
        "id": 309,
        "entry": 309,
        "name": "dynavolt",
        "form_name": "electrike",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "309.gif",
            "front_shiny": "shiny/309.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 310,
        "entry": 310,
        "name": "élecsprint",
        "form_name": "manectric",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "310.gif",
            "front_shiny": "shiny/310.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 311,
        "entry": 311,
        "name": "posipi",
        "form_name": "plusle",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "311.gif",
            "front_shiny": "shiny/311.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 312,
        "entry": 312,
        "name": "négapi",
        "form_name": "minun",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "312.gif",
            "front_shiny": "shiny/312.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 313,
        "entry": 313,
        "name": "muciole",
        "form_name": "volbeat",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "313.gif",
            "front_shiny": "shiny/313.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 314,
        "entry": 314,
        "name": "lumivole",
        "form_name": "illumise",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "314.gif",
            "front_shiny": "shiny/314.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 315,
        "entry": 315,
        "name": "rosélia",
        "form_name": "roselia",
        "type1": "plante",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "315.gif",
            "front_shiny": "shiny/315.gif",
            "front_female": "female/315.gif",
            "front_shiny_female": "shiny/female/315.gif"
        }
    },
    {
        "id": 316,
        "entry": 316,
        "name": "gloupti",
        "form_name": "gulpin",
        "type1": "poison",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "316.gif",
            "front_shiny": "shiny/316.gif",
            "front_female": "female/316.gif",
            "front_shiny_female": "shiny/female/316.gif"
        }
    },
    {
        "id": 317,
        "entry": 317,
        "name": "avaltout",
        "form_name": "swalot",
        "type1": "poison",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "317.gif",
            "front_shiny": "shiny/317.gif",
            "front_female": "female/317.gif",
            "front_shiny_female": "shiny/female/317.gif"
        }
    },
    {
        "id": 318,
        "entry": 318,
        "name": "carvanha",
        "form_name": "carvanha",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "318.gif",
            "front_shiny": "shiny/318.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 319,
        "entry": 319,
        "name": "sharpedo",
        "form_name": "sharpedo",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "319.gif",
            "front_shiny": "shiny/319.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 320,
        "entry": 320,
        "name": "wailmer",
        "form_name": "wailmer",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "320.gif",
            "front_shiny": "shiny/320.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 321,
        "entry": 321,
        "name": "wailord",
        "form_name": "wailord",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "321.gif",
            "front_shiny": "shiny/321.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 322,
        "entry": 322,
        "name": "chamallot",
        "form_name": "numel",
        "type1": "feu",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "322.gif",
            "front_shiny": "shiny/322.gif",
            "front_female": "female/322.gif",
            "front_shiny_female": "shiny/female/322.gif"
        }
    },
    {
        "id": 323,
        "entry": 323,
        "name": "camérupt",
        "form_name": "camerupt",
        "type1": "feu",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "323.gif",
            "front_shiny": "shiny/323.gif",
            "front_female": "female/323.gif",
            "front_shiny_female": "shiny/female/323.gif"
        }
    },
    {
        "id": 324,
        "entry": 324,
        "name": "chartor",
        "form_name": "torkoal",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "324.gif",
            "front_shiny": "shiny/324.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 325,
        "entry": 325,
        "name": "spoink",
        "form_name": "spoink",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "325.gif",
            "front_shiny": "shiny/325.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 326,
        "entry": 326,
        "name": "groret",
        "form_name": "grumpig",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "326.gif",
            "front_shiny": "shiny/326.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 327,
        "entry": 327,
        "name": "spinda",
        "form_name": "spinda",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "327.gif",
            "front_shiny": "shiny/327.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 328,
        "entry": 328,
        "name": "kraknoix",
        "form_name": "trapinch",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "328.gif",
            "front_shiny": "shiny/328.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 329,
        "entry": 329,
        "name": "vibraninf",
        "form_name": "vibrava",
        "type1": "sol",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "329.gif",
            "front_shiny": "shiny/329.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 330,
        "entry": 330,
        "name": "libégon",
        "form_name": "flygon",
        "type1": "sol",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "330.gif",
            "front_shiny": "shiny/330.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 331,
        "entry": 331,
        "name": "cacnea",
        "form_name": "cacnea",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "331.gif",
            "front_shiny": "shiny/331.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 332,
        "entry": 332,
        "name": "cacturne",
        "form_name": "cacturne",
        "type1": "plante",
        "type2": "ténèbres",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "332.gif",
            "front_shiny": "shiny/332.gif",
            "front_female": "female/332.gif",
            "front_shiny_female": "shiny/female/332.gif"
        }
    },
    {
        "id": 333,
        "entry": 333,
        "name": "tylton",
        "form_name": "swablu",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "333.gif",
            "front_shiny": "shiny/333.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 334,
        "entry": 334,
        "name": "altaria",
        "form_name": "altaria",
        "type1": "dragon",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "334.gif",
            "front_shiny": "shiny/334.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 335,
        "entry": 335,
        "name": "mangriff",
        "form_name": "zangoose",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "335.gif",
            "front_shiny": "shiny/335.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 336,
        "entry": 336,
        "name": "séviper",
        "form_name": "seviper",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "336.gif",
            "front_shiny": "shiny/336.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 337,
        "entry": 337,
        "name": "séléroc",
        "form_name": "lunatone",
        "type1": "roche",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "337.gif",
            "front_shiny": "shiny/337.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 338,
        "entry": 338,
        "name": "solaroc",
        "form_name": "solrock",
        "type1": "roche",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "338.gif",
            "front_shiny": "shiny/338.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 339,
        "entry": 339,
        "name": "barloche",
        "form_name": "barboach",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "339.gif",
            "front_shiny": "shiny/339.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 340,
        "entry": 340,
        "name": "barbicha",
        "form_name": "whiscash",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "340.gif",
            "front_shiny": "shiny/340.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 341,
        "entry": 341,
        "name": "écrapince",
        "form_name": "corphish",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "341.gif",
            "front_shiny": "shiny/341.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 342,
        "entry": 342,
        "name": "colhomard",
        "form_name": "crawdaunt",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "342.gif",
            "front_shiny": "shiny/342.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 343,
        "entry": 343,
        "name": "balbuto",
        "form_name": "baltoy",
        "type1": "sol",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "343.gif",
            "front_shiny": "shiny/343.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 344,
        "entry": 344,
        "name": "kaorine",
        "form_name": "claydol",
        "type1": "sol",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "344.gif",
            "front_shiny": "shiny/344.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 345,
        "entry": 345,
        "name": "lilia",
        "form_name": "lileep",
        "type1": "roche",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "345.gif",
            "front_shiny": "shiny/345.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 346,
        "entry": 346,
        "name": "vacilys",
        "form_name": "cradily",
        "type1": "roche",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "346.gif",
            "front_shiny": "shiny/346.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 347,
        "entry": 347,
        "name": "anorith",
        "form_name": "anorith",
        "type1": "roche",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "347.gif",
            "front_shiny": "shiny/347.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 348,
        "entry": 348,
        "name": "armaldo",
        "form_name": "armaldo",
        "type1": "roche",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "348.gif",
            "front_shiny": "shiny/348.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 349,
        "entry": 349,
        "name": "barpau",
        "form_name": "feebas",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "349.gif",
            "front_shiny": "shiny/349.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 350,
        "entry": 350,
        "name": "milobellus",
        "form_name": "milotic",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "350.gif",
            "front_shiny": "shiny/350.gif",
            "front_female": "female/350.gif",
            "front_shiny_female": "shiny/female/350.gif"
        }
    },
    {
        "id": 351,
        "entry": 351,
        "name": "morphéo",
        "form_name": "castform",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "351.gif",
            "front_shiny": "shiny/351.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 352,
        "entry": 352,
        "name": "kecleon",
        "form_name": "kecleon",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "352.gif",
            "front_shiny": "shiny/352.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 353,
        "entry": 353,
        "name": "polichombr",
        "form_name": "shuppet",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "353.gif",
            "front_shiny": "shiny/353.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 354,
        "entry": 354,
        "name": "branette",
        "form_name": "banette",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "354.gif",
            "front_shiny": "shiny/354.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 355,
        "entry": 355,
        "name": "skelénox",
        "form_name": "duskull",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "355.gif",
            "front_shiny": "shiny/355.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 356,
        "entry": 356,
        "name": "téraclope",
        "form_name": "dusclops",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "356.gif",
            "front_shiny": "shiny/356.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 357,
        "entry": 357,
        "name": "tropius",
        "form_name": "tropius",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "357.gif",
            "front_shiny": "shiny/357.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 358,
        "entry": 358,
        "name": "éoko",
        "form_name": "chimecho",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "358.gif",
            "front_shiny": "shiny/358.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 359,
        "entry": 359,
        "name": "absol",
        "form_name": "absol",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "359.gif",
            "front_shiny": "shiny/359.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 360,
        "entry": 360,
        "name": "okéoké",
        "form_name": "wynaut",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "360.gif",
            "front_shiny": "shiny/360.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 361,
        "entry": 361,
        "name": "stalgamin",
        "form_name": "snorunt",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "361.gif",
            "front_shiny": "shiny/361.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 362,
        "entry": 362,
        "name": "oniglali",
        "form_name": "glalie",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "362.gif",
            "front_shiny": "shiny/362.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 363,
        "entry": 363,
        "name": "obalie",
        "form_name": "spheal",
        "type1": "glace",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "363.gif",
            "front_shiny": "shiny/363.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 364,
        "entry": 364,
        "name": "phogleur",
        "form_name": "sealeo",
        "type1": "glace",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "364.gif",
            "front_shiny": "shiny/364.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 365,
        "entry": 365,
        "name": "kaimorse",
        "form_name": "walrein",
        "type1": "glace",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "365.gif",
            "front_shiny": "shiny/365.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 366,
        "entry": 366,
        "name": "coquiperl",
        "form_name": "clamperl",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "366.gif",
            "front_shiny": "shiny/366.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 367,
        "entry": 367,
        "name": "serpang",
        "form_name": "huntail",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "367.gif",
            "front_shiny": "shiny/367.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 368,
        "entry": 368,
        "name": "rosabyss",
        "form_name": "gorebyss",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "368.gif",
            "front_shiny": "shiny/368.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 369,
        "entry": 369,
        "name": "relicanth",
        "form_name": "relicanth",
        "type1": "eau",
        "type2": "roche",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "369.gif",
            "front_shiny": "shiny/369.gif",
            "front_female": "female/369.gif",
            "front_shiny_female": "shiny/female/369.gif"
        }
    },
    {
        "id": 370,
        "entry": 370,
        "name": "lovdisc",
        "form_name": "luvdisc",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "370.gif",
            "front_shiny": "shiny/370.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 371,
        "entry": 371,
        "name": "draby",
        "form_name": "bagon",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "371.gif",
            "front_shiny": "shiny/371.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 372,
        "entry": 372,
        "name": "drackhaus",
        "form_name": "shelgon",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "372.gif",
            "front_shiny": "shiny/372.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 373,
        "entry": 373,
        "name": "drattak",
        "form_name": "salamence",
        "type1": "dragon",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "373.gif",
            "front_shiny": "shiny/373.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 374,
        "entry": 374,
        "name": "terhal",
        "form_name": "beldum",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "374.gif",
            "front_shiny": "shiny/374.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 375,
        "entry": 375,
        "name": "métang",
        "form_name": "metang",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "375.gif",
            "front_shiny": "shiny/375.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 376,
        "entry": 376,
        "name": "métalosse",
        "form_name": "metagross",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "376.gif",
            "front_shiny": "shiny/376.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 377,
        "entry": 377,
        "name": "regirock",
        "form_name": "regirock",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "377.gif",
            "front_shiny": "shiny/377.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 378,
        "entry": 378,
        "name": "regice",
        "form_name": "regice",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "378.gif",
            "front_shiny": "shiny/378.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 379,
        "entry": 379,
        "name": "registeel",
        "form_name": "registeel",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "379.gif",
            "front_shiny": "shiny/379.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 380,
        "entry": 380,
        "name": "latias",
        "form_name": "latias",
        "type1": "dragon",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "380.gif",
            "front_shiny": "shiny/380.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 381,
        "entry": 381,
        "name": "latios",
        "form_name": "latios",
        "type1": "dragon",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "381.gif",
            "front_shiny": "shiny/381.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 382,
        "entry": 382,
        "name": "kyogre",
        "form_name": "kyogre",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "382.gif",
            "front_shiny": "shiny/382.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 383,
        "entry": 383,
        "name": "groudon",
        "form_name": "groudon",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "383.gif",
            "front_shiny": "shiny/383.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 384,
        "entry": 384,
        "name": "rayquaza",
        "form_name": "rayquaza",
        "type1": "dragon",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "384.gif",
            "front_shiny": "shiny/384.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 385,
        "entry": 385,
        "name": "jirachi",
        "form_name": "jirachi",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "385.gif",
            "front_shiny": "shiny/385.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 386,
        "entry": 386,
        "name": "deoxys",
        "form_name": "deoxys-normal",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "386.gif",
            "front_shiny": "shiny/386.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 387,
        "entry": 387,
        "name": "tortipouss",
        "form_name": "turtwig",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "387.gif",
            "front_shiny": "shiny/387.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 388,
        "entry": 388,
        "name": "boskara",
        "form_name": "grotle",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "388.gif",
            "front_shiny": "shiny/388.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 389,
        "entry": 389,
        "name": "torterra",
        "form_name": "torterra",
        "type1": "plante",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "389.gif",
            "front_shiny": "shiny/389.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 390,
        "entry": 390,
        "name": "ouisticram",
        "form_name": "chimchar",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "390.gif",
            "front_shiny": "shiny/390.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 391,
        "entry": 391,
        "name": "chimpenfeu",
        "form_name": "monferno",
        "type1": "feu",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "391.gif",
            "front_shiny": "shiny/391.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 392,
        "entry": 392,
        "name": "simiabraz",
        "form_name": "infernape",
        "type1": "feu",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "392.gif",
            "front_shiny": "shiny/392.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 393,
        "entry": 393,
        "name": "tiplouf",
        "form_name": "piplup",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "393.gif",
            "front_shiny": "shiny/393.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 394,
        "entry": 394,
        "name": "prinplouf",
        "form_name": "prinplup",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "394.gif",
            "front_shiny": "shiny/394.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 395,
        "entry": 395,
        "name": "pingoléon",
        "form_name": "empoleon",
        "type1": "eau",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "395.gif",
            "front_shiny": "shiny/395.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 396,
        "entry": 396,
        "name": "étourmi",
        "form_name": "starly",
        "type1": "normal",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "396.gif",
            "front_shiny": "shiny/396.gif",
            "front_female": "female/396.gif",
            "front_shiny_female": "shiny/female/396.gif"
        }
    },
    {
        "id": 397,
        "entry": 397,
        "name": "étourvol",
        "form_name": "staravia",
        "type1": "normal",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "397.gif",
            "front_shiny": "shiny/397.gif",
            "front_female": "female/397.gif",
            "front_shiny_female": "shiny/female/397.gif"
        }
    },
    {
        "id": 398,
        "entry": 398,
        "name": "étouraptor",
        "form_name": "staraptor",
        "type1": "normal",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "398.gif",
            "front_shiny": "shiny/398.gif",
            "front_female": "female/398.gif",
            "front_shiny_female": "shiny/female/398.gif"
        }
    },
    {
        "id": 399,
        "entry": 399,
        "name": "keunotor",
        "form_name": "bidoof",
        "type1": "normal",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "399.gif",
            "front_shiny": "shiny/399.gif",
            "front_female": "female/399.gif",
            "front_shiny_female": "shiny/female/399.gif"
        }
    },
    {
        "id": 400,
        "entry": 400,
        "name": "castorno",
        "form_name": "bibarel",
        "type1": "normal",
        "type2": "eau",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "400.gif",
            "front_shiny": "shiny/400.gif",
            "front_female": "female/400.gif",
            "front_shiny_female": "shiny/female/400.gif"
        }
    },
    {
        "id": 401,
        "entry": 401,
        "name": "crikzik",
        "form_name": "kricketot",
        "type1": "insecte",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "401.gif",
            "front_shiny": "shiny/401.gif",
            "front_female": "female/401.gif",
            "front_shiny_female": "shiny/female/401.gif"
        }
    },
    {
        "id": 402,
        "entry": 402,
        "name": "mélokrik",
        "form_name": "kricketune",
        "type1": "insecte",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "402.gif",
            "front_shiny": "shiny/402.gif",
            "front_female": "female/402.gif",
            "front_shiny_female": "shiny/female/402.gif"
        }
    },
    {
        "id": 403,
        "entry": 403,
        "name": "lixy",
        "form_name": "shinx",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "403.gif",
            "front_shiny": "shiny/403.gif",
            "front_female": "female/403.gif",
            "front_shiny_female": "shiny/female/403.gif"
        }
    },
    {
        "id": 404,
        "entry": 404,
        "name": "luxio",
        "form_name": "luxio",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "404.gif",
            "front_shiny": "shiny/404.gif",
            "front_female": "female/404.gif",
            "front_shiny_female": "shiny/female/404.gif"
        }
    },
    {
        "id": 405,
        "entry": 405,
        "name": "luxray",
        "form_name": "luxray",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "405.gif",
            "front_shiny": "shiny/405.gif",
            "front_female": "female/405.gif",
            "front_shiny_female": "shiny/female/405.gif"
        }
    },
    {
        "id": 406,
        "entry": 406,
        "name": "rozbouton",
        "form_name": "budew",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "406.gif",
            "front_shiny": "shiny/406.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 407,
        "entry": 407,
        "name": "roserade",
        "form_name": "roserade",
        "type1": "plante",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "407.gif",
            "front_shiny": "shiny/407.gif",
            "front_female": "female/407.gif",
            "front_shiny_female": "shiny/female/407.gif"
        }
    },
    {
        "id": 408,
        "entry": 408,
        "name": "kranidos",
        "form_name": "cranidos",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "408.gif",
            "front_shiny": "shiny/408.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 409,
        "entry": 409,
        "name": "charkos",
        "form_name": "rampardos",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "409.gif",
            "front_shiny": "shiny/409.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 410,
        "entry": 410,
        "name": "dinoclier",
        "form_name": "shieldon",
        "type1": "roche",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "410.gif",
            "front_shiny": "shiny/410.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 411,
        "entry": 411,
        "name": "bastiodon",
        "form_name": "bastiodon",
        "type1": "roche",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "411.gif",
            "front_shiny": "shiny/411.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 412,
        "entry": 412,
        "name": "cheniti",
        "form_name": "burmy",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "412.gif",
            "front_shiny": "shiny/412.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 413,
        "entry": 413,
        "name": "cheniselle",
        "form_name": "wormadam-plant",
        "type1": "insecte",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "413.gif",
            "front_shiny": "shiny/413.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 414,
        "entry": 414,
        "name": "papilord",
        "form_name": "mothim",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "414.gif",
            "front_shiny": "shiny/414.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 415,
        "entry": 415,
        "name": "apitrini",
        "form_name": "combee",
        "type1": "insecte",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "415.gif",
            "front_shiny": "shiny/415.gif",
            "front_female": "female/415.gif",
            "front_shiny_female": "shiny/female/415.gif"
        }
    },
    {
        "id": 416,
        "entry": 416,
        "name": "apireine",
        "form_name": "vespiquen",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "416.gif",
            "front_shiny": "shiny/416.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 417,
        "entry": 417,
        "name": "pachirisu",
        "form_name": "pachirisu",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "417.gif",
            "front_shiny": "shiny/417.gif",
            "front_female": "female/417.gif",
            "front_shiny_female": "shiny/female/417.gif"
        }
    },
    {
        "id": 418,
        "entry": 418,
        "name": "mustébouée",
        "form_name": "buizel",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "418.gif",
            "front_shiny": "shiny/418.gif",
            "front_female": "female/418.gif",
            "front_shiny_female": "shiny/female/418.gif"
        }
    },
    {
        "id": 419,
        "entry": 419,
        "name": "mustéflott",
        "form_name": "floatzel",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "419.gif",
            "front_shiny": "shiny/419.gif",
            "front_female": "female/419.gif",
            "front_shiny_female": "shiny/female/419.gif"
        }
    },
    {
        "id": 420,
        "entry": 420,
        "name": "ceribou",
        "form_name": "cherubi",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "420.gif",
            "front_shiny": "shiny/420.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 421,
        "entry": 421,
        "name": "ceriflor",
        "form_name": "cherrim",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "421.gif",
            "front_shiny": "shiny/421.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 422,
        "entry": 422,
        "name": "sancoki",
        "form_name": "shellos",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "422.gif",
            "front_shiny": "shiny/422.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 423,
        "entry": 423,
        "name": "tritosor",
        "form_name": "gastrodon",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "423.gif",
            "front_shiny": "shiny/423.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 424,
        "entry": 424,
        "name": "capidextre",
        "form_name": "ambipom",
        "type1": "normal",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "424.gif",
            "front_shiny": "shiny/424.gif",
            "front_female": "female/424.gif",
            "front_shiny_female": "shiny/female/424.gif"
        }
    },
    {
        "id": 425,
        "entry": 425,
        "name": "baudrive",
        "form_name": "drifloon",
        "type1": "spectre",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "425.gif",
            "front_shiny": "shiny/425.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 426,
        "entry": 426,
        "name": "grodrive",
        "form_name": "drifblim",
        "type1": "spectre",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "426.gif",
            "front_shiny": "shiny/426.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 427,
        "entry": 427,
        "name": "laporeille",
        "form_name": "buneary",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "427.gif",
            "front_shiny": "shiny/427.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 428,
        "entry": 428,
        "name": "lockpin",
        "form_name": "lopunny",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "428.gif",
            "front_shiny": "shiny/428.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 429,
        "entry": 429,
        "name": "magirêve",
        "form_name": "mismagius",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "429.gif",
            "front_shiny": "shiny/429.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 430,
        "entry": 430,
        "name": "corboss",
        "form_name": "honchkrow",
        "type1": "ténèbres",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "430.gif",
            "front_shiny": "shiny/430.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 431,
        "entry": 431,
        "name": "chaglam",
        "form_name": "glameow",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "431.gif",
            "front_shiny": "shiny/431.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 432,
        "entry": 432,
        "name": "chaffreux",
        "form_name": "purugly",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "432.gif",
            "front_shiny": "shiny/432.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 433,
        "entry": 433,
        "name": "korillon",
        "form_name": "chingling",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "433.gif",
            "front_shiny": "shiny/433.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 434,
        "entry": 434,
        "name": "moufouette",
        "form_name": "stunky",
        "type1": "poison",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "434.gif",
            "front_shiny": "shiny/434.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 435,
        "entry": 435,
        "name": "moufflair",
        "form_name": "skuntank",
        "type1": "poison",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "435.gif",
            "front_shiny": "shiny/435.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 436,
        "entry": 436,
        "name": "archéomire",
        "form_name": "bronzor",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "436.gif",
            "front_shiny": "shiny/436.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 437,
        "entry": 437,
        "name": "archéodong",
        "form_name": "bronzong",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "437.gif",
            "front_shiny": "shiny/437.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 438,
        "entry": 438,
        "name": "manzaï",
        "form_name": "bonsly",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "438.gif",
            "front_shiny": "shiny/438.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 439,
        "entry": 439,
        "form_name": "mime-jr",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "439.gif",
            "front_shiny": "shiny/439.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 440,
        "entry": 440,
        "name": "ptiravi",
        "form_name": "happiny",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "440.gif",
            "front_shiny": "shiny/440.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 441,
        "entry": 441,
        "name": "pijako",
        "form_name": "chatot",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "441.gif",
            "front_shiny": "shiny/441.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 442,
        "entry": 442,
        "name": "spiritomb",
        "form_name": "spiritomb",
        "type1": "spectre",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "442.gif",
            "front_shiny": "shiny/442.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 443,
        "entry": 443,
        "name": "griknot",
        "form_name": "gible",
        "type1": "dragon",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "443.gif",
            "front_shiny": "shiny/443.gif",
            "front_female": "female/443.gif",
            "front_shiny_female": "shiny/female/443.gif"
        }
    },
    {
        "id": 444,
        "entry": 444,
        "name": "carmache",
        "form_name": "gabite",
        "type1": "dragon",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "444.gif",
            "front_shiny": "shiny/444.gif",
            "front_female": "female/444.gif",
            "front_shiny_female": "shiny/female/444.gif"
        }
    },
    {
        "id": 445,
        "entry": 445,
        "name": "carchacrok",
        "form_name": "garchomp",
        "type1": "dragon",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "445.gif",
            "front_shiny": "shiny/445.gif",
            "front_female": "female/445.gif",
            "front_shiny_female": "shiny/female/445.gif"
        }
    },
    {
        "id": 446,
        "entry": 446,
        "name": "goinfrex",
        "form_name": "munchlax",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "446.gif",
            "front_shiny": "shiny/446.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 447,
        "entry": 447,
        "name": "riolu",
        "form_name": "riolu",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "447.gif",
            "front_shiny": "shiny/447.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 448,
        "entry": 448,
        "name": "lucario",
        "form_name": "lucario",
        "type1": "combat",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "448.gif",
            "front_shiny": "shiny/448.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 449,
        "entry": 449,
        "name": "hippopotas",
        "form_name": "hippopotas",
        "type1": "sol",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "449.gif",
            "front_shiny": "shiny/449.gif",
            "front_female": "female/449.gif",
            "front_shiny_female": "shiny/female/449.gif"
        }
    },
    {
        "id": 450,
        "entry": 450,
        "name": "hippodocus",
        "form_name": "hippowdon",
        "type1": "sol",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "450.gif",
            "front_shiny": "shiny/450.gif",
            "front_female": "female/450.gif",
            "front_shiny_female": "shiny/female/450.gif"
        }
    },
    {
        "id": 451,
        "entry": 451,
        "name": "rapion",
        "form_name": "skorupi",
        "type1": "poison",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "451.gif",
            "front_shiny": "shiny/451.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 452,
        "entry": 452,
        "name": "drascore",
        "form_name": "drapion",
        "type1": "poison",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "452.gif",
            "front_shiny": "shiny/452.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 453,
        "entry": 453,
        "name": "cradopaud",
        "form_name": "croagunk",
        "type1": "poison",
        "type2": "combat",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "453.gif",
            "front_shiny": "shiny/453.gif",
            "front_female": "female/453.gif",
            "front_shiny_female": "shiny/female/453.gif"
        }
    },
    {
        "id": 454,
        "entry": 454,
        "name": "coatox",
        "form_name": "toxicroak",
        "type1": "poison",
        "type2": "combat",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "454.gif",
            "front_shiny": "shiny/454.gif",
            "front_female": "female/454.gif",
            "front_shiny_female": "shiny/female/454.gif"
        }
    },
    {
        "id": 455,
        "entry": 455,
        "name": "vortente",
        "form_name": "carnivine",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "455.gif",
            "front_shiny": "shiny/455.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 456,
        "entry": 456,
        "name": "écayon",
        "form_name": "finneon",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "456.gif",
            "front_shiny": "shiny/456.gif",
            "front_female": "female/456.gif",
            "front_shiny_female": "shiny/female/456.gif"
        }
    },
    {
        "id": 457,
        "entry": 457,
        "name": "luminéon",
        "form_name": "lumineon",
        "type1": "eau",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "457.gif",
            "front_shiny": "shiny/457.gif",
            "front_female": "female/457.gif",
            "front_shiny_female": "shiny/female/457.gif"
        }
    },
    {
        "id": 458,
        "entry": 458,
        "name": "babimanta",
        "form_name": "mantyke",
        "type1": "eau",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "458.gif",
            "front_shiny": "shiny/458.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 459,
        "entry": 459,
        "name": "blizzi",
        "form_name": "snover",
        "type1": "plante",
        "type2": "glace",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "459.gif",
            "front_shiny": "shiny/459.gif",
            "front_female": "female/459.gif",
            "front_shiny_female": "shiny/female/459.gif"
        }
    },
    {
        "id": 460,
        "entry": 460,
        "name": "blizzaroi",
        "form_name": "abomasnow",
        "type1": "plante",
        "type2": "glace",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "460.gif",
            "front_shiny": "shiny/460.gif",
            "front_female": "female/460.gif",
            "front_shiny_female": "shiny/female/460.gif"
        }
    },
    {
        "id": 461,
        "entry": 461,
        "name": "dimoret",
        "form_name": "weavile",
        "type1": "ténèbres",
        "type2": "glace",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "461.gif",
            "front_shiny": "shiny/461.gif",
            "front_female": "female/461.gif",
            "front_shiny_female": "shiny/female/461.gif"
        }
    },
    {
        "id": 462,
        "entry": 462,
        "name": "magnézone",
        "form_name": "magnezone",
        "type1": "électrik",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "462.gif",
            "front_shiny": "shiny/462.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 463,
        "entry": 463,
        "name": "coudlangue",
        "form_name": "lickilicky",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "463.gif",
            "front_shiny": "shiny/463.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 464,
        "entry": 464,
        "name": "rhinastoc",
        "form_name": "rhyperior",
        "type1": "sol",
        "type2": "roche",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "464.gif",
            "front_shiny": "shiny/464.gif",
            "front_female": "female/464.gif",
            "front_shiny_female": "shiny/female/464.gif"
        }
    },
    {
        "id": 465,
        "entry": 465,
        "name": "bouldeneu",
        "form_name": "tangrowth",
        "type1": "plante",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "465.gif",
            "front_shiny": "shiny/465.gif",
            "front_female": "female/465.gif",
            "front_shiny_female": "shiny/female/465.gif"
        }
    },
    {
        "id": 466,
        "entry": 466,
        "name": "élekable",
        "form_name": "electivire",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "466.gif",
            "front_shiny": "shiny/466.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 467,
        "entry": 467,
        "name": "maganon",
        "form_name": "magmortar",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "467.gif",
            "front_shiny": "shiny/467.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 468,
        "entry": 468,
        "name": "togekiss",
        "form_name": "togekiss",
        "type1": "fée",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "468.gif",
            "front_shiny": "shiny/468.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 469,
        "entry": 469,
        "name": "yanméga",
        "form_name": "yanmega",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "469.gif",
            "front_shiny": "shiny/469.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 470,
        "entry": 470,
        "name": "phyllali",
        "form_name": "leafeon",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "470.gif",
            "front_shiny": "shiny/470.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 471,
        "entry": 471,
        "name": "givrali",
        "form_name": "glaceon",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "471.gif",
            "front_shiny": "shiny/471.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 472,
        "entry": 472,
        "name": "scorvol",
        "form_name": "gliscor",
        "type1": "sol",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "472.gif",
            "front_shiny": "shiny/472.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 473,
        "entry": 473,
        "name": "mammochon",
        "form_name": "mamoswine",
        "type1": "glace",
        "type2": "sol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "473.gif",
            "front_shiny": "shiny/473.gif",
            "front_female": "female/473.gif",
            "front_shiny_female": "shiny/female/473.gif"
        }
    },
    {
        "id": 474,
        "entry": 474,
        "name": "porygon-z",
        "form_name": "porygon-z",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "474.gif",
            "front_shiny": "shiny/474.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 475,
        "entry": 475,
        "name": "gallame",
        "form_name": "gallade",
        "type1": "psy",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "475.gif",
            "front_shiny": "shiny/475.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 476,
        "entry": 476,
        "name": "tarinorme",
        "form_name": "probopass",
        "type1": "roche",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "476.gif",
            "front_shiny": "shiny/476.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 477,
        "entry": 477,
        "name": "noctunoir",
        "form_name": "dusknoir",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "477.gif",
            "front_shiny": "shiny/477.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 478,
        "entry": 478,
        "name": "momartik",
        "form_name": "froslass",
        "type1": "glace",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "478.gif",
            "front_shiny": "shiny/478.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 479,
        "entry": 479,
        "name": "motisma",
        "form_name": "rotom",
        "type1": "électrik",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "479.gif",
            "front_shiny": "shiny/479.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 480,
        "entry": 480,
        "name": "créhelf",
        "form_name": "uxie",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "480.gif",
            "front_shiny": "shiny/480.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 481,
        "entry": 481,
        "name": "créfollet",
        "form_name": "mesprit",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "481.gif",
            "front_shiny": "shiny/481.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 482,
        "entry": 482,
        "name": "créfadet",
        "form_name": "azelf",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "482.gif",
            "front_shiny": "shiny/482.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 483,
        "entry": 483,
        "name": "dialga",
        "form_name": "dialga",
        "type1": "acier",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "483.gif",
            "front_shiny": "shiny/483.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 484,
        "entry": 484,
        "name": "palkia",
        "form_name": "palkia",
        "type1": "eau",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "484.gif",
            "front_shiny": "shiny/484.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 485,
        "entry": 485,
        "name": "heatran",
        "form_name": "heatran",
        "type1": "feu",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "485.gif",
            "front_shiny": "shiny/485.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 486,
        "entry": 486,
        "name": "regigigas",
        "form_name": "regigigas",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "486.gif",
            "front_shiny": "shiny/486.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 487,
        "entry": 487,
        "name": "giratina",
        "form_name": "giratina-altered",
        "type1": "spectre",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "487.gif",
            "front_shiny": "shiny/487.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 488,
        "entry": 488,
        "name": "cresselia",
        "form_name": "cresselia",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "488.gif",
            "front_shiny": "shiny/488.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 489,
        "entry": 489,
        "name": "phione",
        "form_name": "phione",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "489.gif",
            "front_shiny": "shiny/489.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 490,
        "entry": 490,
        "name": "manaphy",
        "form_name": "manaphy",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "490.gif",
            "front_shiny": "shiny/490.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 491,
        "entry": 491,
        "name": "darkrai",
        "form_name": "darkrai",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "491.gif",
            "front_shiny": "shiny/491.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 492,
        "entry": 492,
        "name": "shaymin",
        "form_name": "shaymin-land",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "492.gif",
            "front_shiny": "shiny/492.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 493,
        "entry": 493,
        "name": "arceus",
        "form_name": "arceus",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "493.gif",
            "front_shiny": "shiny/493.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 494,
        "entry": 494,
        "name": "victini",
        "form_name": "victini",
        "type1": "psy",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "494.gif",
            "front_shiny": "shiny/494.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 495,
        "entry": 495,
        "name": "vipélierre",
        "form_name": "snivy",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "495.gif",
            "front_shiny": "shiny/495.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 496,
        "entry": 496,
        "name": "lianaja",
        "form_name": "servine",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "496.gif",
            "front_shiny": "shiny/496.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 497,
        "entry": 497,
        "name": "majaspic",
        "form_name": "serperior",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "497.gif",
            "front_shiny": "shiny/497.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 498,
        "entry": 498,
        "name": "gruikui",
        "form_name": "tepig",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "498.gif",
            "front_shiny": "shiny/498.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 499,
        "entry": 499,
        "name": "grotichon",
        "form_name": "pignite",
        "type1": "feu",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "499.gif",
            "front_shiny": "shiny/499.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 500,
        "entry": 500,
        "name": "roitiflam",
        "form_name": "emboar",
        "type1": "feu",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "500.gif",
            "front_shiny": "shiny/500.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 501,
        "entry": 501,
        "name": "moustillon",
        "form_name": "oshawott",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "501.gif",
            "front_shiny": "shiny/501.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 502,
        "entry": 502,
        "name": "mateloutre",
        "form_name": "dewott",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "502.gif",
            "front_shiny": "shiny/502.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 503,
        "entry": 503,
        "name": "clamiral",
        "form_name": "samurott",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "503.gif",
            "front_shiny": "shiny/503.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 504,
        "entry": 504,
        "name": "ratentif",
        "form_name": "patrat",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "504.gif",
            "front_shiny": "shiny/504.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 505,
        "entry": 505,
        "name": "miradar",
        "form_name": "watchog",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "505.gif",
            "front_shiny": "shiny/505.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 506,
        "entry": 506,
        "name": "ponchiot",
        "form_name": "lillipup",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "506.gif",
            "front_shiny": "shiny/506.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 507,
        "entry": 507,
        "name": "ponchien",
        "form_name": "herdier",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "507.gif",
            "front_shiny": "shiny/507.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 508,
        "entry": 508,
        "name": "mastouffe",
        "form_name": "stoutland",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "508.gif",
            "front_shiny": "shiny/508.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 509,
        "entry": 509,
        "name": "chacripan",
        "form_name": "purrloin",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "509.gif",
            "front_shiny": "shiny/509.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 510,
        "entry": 510,
        "name": "léopardus",
        "form_name": "liepard",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "510.gif",
            "front_shiny": "shiny/510.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 511,
        "entry": 511,
        "name": "feuillajou",
        "form_name": "pansage",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "511.gif",
            "front_shiny": "shiny/511.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 512,
        "entry": 512,
        "name": "feuiloutan",
        "form_name": "simisage",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "512.gif",
            "front_shiny": "shiny/512.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 513,
        "entry": 513,
        "name": "flamajou",
        "form_name": "pansear",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "513.gif",
            "front_shiny": "shiny/513.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 514,
        "entry": 514,
        "name": "flamoutan",
        "form_name": "simisear",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "514.gif",
            "front_shiny": "shiny/514.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 515,
        "entry": 515,
        "name": "flotajou",
        "form_name": "panpour",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "515.gif",
            "front_shiny": "shiny/515.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 516,
        "entry": 516,
        "name": "flotoutan",
        "form_name": "simipour",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "516.gif",
            "front_shiny": "shiny/516.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 517,
        "entry": 517,
        "name": "munna",
        "form_name": "munna",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "517.gif",
            "front_shiny": "shiny/517.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 518,
        "entry": 518,
        "name": "mushana",
        "form_name": "musharna",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "518.gif",
            "front_shiny": "shiny/518.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 519,
        "entry": 519,
        "name": "poichigeon",
        "form_name": "pidove",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "519.gif",
            "front_shiny": "shiny/519.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 520,
        "entry": 520,
        "name": "colombeau",
        "form_name": "tranquill",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "520.gif",
            "front_shiny": "shiny/520.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 521,
        "entry": 521,
        "name": "déflaisan",
        "form_name": "unfezant",
        "type1": "normal",
        "type2": "vol",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "521.gif",
            "front_shiny": "shiny/521.gif",
            "front_female": "female/521.gif",
            "front_shiny_female": "shiny/female/521.gif"
        }
    },
    {
        "id": 522,
        "entry": 522,
        "name": "zébibron",
        "form_name": "blitzle",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "522.gif",
            "front_shiny": "shiny/522.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 523,
        "entry": 523,
        "name": "zéblitz",
        "form_name": "zebstrika",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "523.gif",
            "front_shiny": "shiny/523.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 524,
        "entry": 524,
        "name": "nodulithe",
        "form_name": "roggenrola",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "524.gif",
            "front_shiny": "shiny/524.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 525,
        "entry": 525,
        "name": "géolithe",
        "form_name": "boldore",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "525.gif",
            "front_shiny": "shiny/525.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 526,
        "entry": 526,
        "name": "gigalithe",
        "form_name": "gigalith",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "526.gif",
            "front_shiny": "shiny/526.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 527,
        "entry": 527,
        "name": "chovsourir",
        "form_name": "woobat",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "527.gif",
            "front_shiny": "shiny/527.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 528,
        "entry": 528,
        "name": "rhinolove",
        "form_name": "swoobat",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "528.gif",
            "front_shiny": "shiny/528.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 529,
        "entry": 529,
        "name": "rototaupe",
        "form_name": "drilbur",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "529.gif",
            "front_shiny": "shiny/529.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 530,
        "entry": 530,
        "name": "minotaupe",
        "form_name": "excadrill",
        "type1": "sol",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "530.gif",
            "front_shiny": "shiny/530.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 531,
        "entry": 531,
        "name": "nanméouïe",
        "form_name": "audino",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "531.gif",
            "front_shiny": "shiny/531.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 532,
        "entry": 532,
        "name": "charpenti",
        "form_name": "timburr",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "532.gif",
            "front_shiny": "shiny/532.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 533,
        "entry": 533,
        "name": "ouvrifier",
        "form_name": "gurdurr",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "533.gif",
            "front_shiny": "shiny/533.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 534,
        "entry": 534,
        "name": "bétochef",
        "form_name": "conkeldurr",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "534.gif",
            "front_shiny": "shiny/534.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 535,
        "entry": 535,
        "name": "tritonde",
        "form_name": "tympole",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "535.gif",
            "front_shiny": "shiny/535.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 536,
        "entry": 536,
        "name": "batracné",
        "form_name": "palpitoad",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "536.gif",
            "front_shiny": "shiny/536.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 537,
        "entry": 537,
        "name": "crapustule",
        "form_name": "seismitoad",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "537.gif",
            "front_shiny": "shiny/537.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 538,
        "entry": 538,
        "name": "judokrak",
        "form_name": "throh",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "538.gif",
            "front_shiny": "shiny/538.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 539,
        "entry": 539,
        "name": "karaclée",
        "form_name": "sawk",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "539.gif",
            "front_shiny": "shiny/539.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 540,
        "entry": 540,
        "name": "larveyette",
        "form_name": "sewaddle",
        "type1": "insecte",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "540.gif",
            "front_shiny": "shiny/540.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 541,
        "entry": 541,
        "name": "couverdure",
        "form_name": "swadloon",
        "type1": "insecte",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "541.gif",
            "front_shiny": "shiny/541.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 542,
        "entry": 542,
        "name": "manternel",
        "form_name": "leavanny",
        "type1": "insecte",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "542.gif",
            "front_shiny": "shiny/542.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 543,
        "entry": 543,
        "name": "venipatte",
        "form_name": "venipede",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "543.gif",
            "front_shiny": "shiny/543.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 544,
        "entry": 544,
        "name": "scobolide",
        "form_name": "whirlipede",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "544.gif",
            "front_shiny": "shiny/544.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 545,
        "entry": 545,
        "name": "brutapode",
        "form_name": "scolipede",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "545.gif",
            "front_shiny": "shiny/545.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 546,
        "entry": 546,
        "name": "doudouvet",
        "form_name": "cottonee",
        "type1": "plante",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "546.gif",
            "front_shiny": "shiny/546.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 547,
        "entry": 547,
        "name": "farfaduvet",
        "form_name": "whimsicott",
        "type1": "plante",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "547.gif",
            "front_shiny": "shiny/547.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 548,
        "entry": 548,
        "name": "chlorobule",
        "form_name": "petilil",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "548.gif",
            "front_shiny": "shiny/548.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 549,
        "entry": 549,
        "name": "fragilady",
        "form_name": "lilligant",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "549.gif",
            "front_shiny": "shiny/549.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 550,
        "entry": 550,
        "name": "bargantua",
        "form_name": "basculin-red-striped",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "550.gif",
            "front_shiny": "shiny/550.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 551,
        "entry": 551,
        "name": "mascaïman",
        "form_name": "sandile",
        "type1": "sol",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "551.gif",
            "front_shiny": "shiny/551.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 552,
        "entry": 552,
        "name": "escroco",
        "form_name": "krokorok",
        "type1": "sol",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "552.gif",
            "front_shiny": "shiny/552.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 553,
        "entry": 553,
        "name": "crocorible",
        "form_name": "krookodile",
        "type1": "sol",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "553.gif",
            "front_shiny": "shiny/553.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 554,
        "entry": 554,
        "name": "darumarond",
        "form_name": "darumaka",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "554.gif",
            "front_shiny": "shiny/554.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 555,
        "entry": 555,
        "name": "darumacho",
        "form_name": "darmanitan-standard",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "555.gif",
            "front_shiny": "shiny/555.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 556,
        "entry": 556,
        "name": "maracachi",
        "form_name": "maractus",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "556.gif",
            "front_shiny": "shiny/556.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 557,
        "entry": 557,
        "name": "crabicoque",
        "form_name": "dwebble",
        "type1": "insecte",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "557.gif",
            "front_shiny": "shiny/557.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 558,
        "entry": 558,
        "name": "crabaraque",
        "form_name": "crustle",
        "type1": "insecte",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "558.gif",
            "front_shiny": "shiny/558.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 559,
        "entry": 559,
        "name": "baggiguane",
        "form_name": "scraggy",
        "type1": "ténèbres",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "559.gif",
            "front_shiny": "shiny/559.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 560,
        "entry": 560,
        "name": "baggaïd",
        "form_name": "scrafty",
        "type1": "ténèbres",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "560.gif",
            "front_shiny": "shiny/560.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 561,
        "entry": 561,
        "name": "cryptéro",
        "form_name": "sigilyph",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "561.gif",
            "front_shiny": "shiny/561.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 562,
        "entry": 562,
        "name": "tutafeh",
        "form_name": "yamask",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "562.gif",
            "front_shiny": "shiny/562.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 563,
        "entry": 563,
        "name": "tutankafer",
        "form_name": "cofagrigus",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "563.gif",
            "front_shiny": "shiny/563.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 564,
        "entry": 564,
        "name": "carapagos",
        "form_name": "tirtouga",
        "type1": "eau",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "564.gif",
            "front_shiny": "shiny/564.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 565,
        "entry": 565,
        "name": "mégapagos",
        "form_name": "carracosta",
        "type1": "eau",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "565.gif",
            "front_shiny": "shiny/565.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 566,
        "entry": 566,
        "name": "arkéapti",
        "form_name": "archen",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "566.gif",
            "front_shiny": "shiny/566.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 567,
        "entry": 567,
        "name": "aéroptéryx",
        "form_name": "archeops",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "567.gif",
            "front_shiny": "shiny/567.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 568,
        "entry": 568,
        "name": "miamiasme",
        "form_name": "trubbish",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "568.gif",
            "front_shiny": "shiny/568.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 569,
        "entry": 569,
        "name": "miasmax",
        "form_name": "garbodor",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "569.gif",
            "front_shiny": "shiny/569.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 570,
        "entry": 570,
        "name": "zorua",
        "form_name": "zorua",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "570.gif",
            "front_shiny": "shiny/570.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 571,
        "entry": 571,
        "name": "zoroark",
        "form_name": "zoroark",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "571.gif",
            "front_shiny": "shiny/571.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 572,
        "entry": 572,
        "name": "chinchidou",
        "form_name": "minccino",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "572.gif",
            "front_shiny": "shiny/572.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 573,
        "entry": 573,
        "name": "pashmilla",
        "form_name": "cinccino",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "573.gif",
            "front_shiny": "shiny/573.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 574,
        "entry": 574,
        "name": "scrutella",
        "form_name": "gothita",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "574.gif",
            "front_shiny": "shiny/574.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 575,
        "entry": 575,
        "name": "mesmérella",
        "form_name": "gothorita",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "575.gif",
            "front_shiny": "shiny/575.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 576,
        "entry": 576,
        "name": "sidérella",
        "form_name": "gothitelle",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "576.gif",
            "front_shiny": "shiny/576.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 577,
        "entry": 577,
        "name": "nucléos",
        "form_name": "solosis",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "577.gif",
            "front_shiny": "shiny/577.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 578,
        "entry": 578,
        "name": "méios",
        "form_name": "duosion",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "578.gif",
            "front_shiny": "shiny/578.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 579,
        "entry": 579,
        "name": "symbios",
        "form_name": "reuniclus",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "579.gif",
            "front_shiny": "shiny/579.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 580,
        "entry": 580,
        "name": "couaneton",
        "form_name": "ducklett",
        "type1": "eau",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "580.gif",
            "front_shiny": "shiny/580.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 581,
        "entry": 581,
        "name": "lakmécygne",
        "form_name": "swanna",
        "type1": "eau",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "581.gif",
            "front_shiny": "shiny/581.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 582,
        "entry": 582,
        "name": "sorbébé",
        "form_name": "vanillite",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "582.gif",
            "front_shiny": "shiny/582.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 583,
        "entry": 583,
        "name": "sorboul",
        "form_name": "vanillish",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "583.gif",
            "front_shiny": "shiny/583.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 584,
        "entry": 584,
        "name": "sorbouboul",
        "form_name": "vanilluxe",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "584.gif",
            "front_shiny": "shiny/584.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 585,
        "entry": 585,
        "name": "vivaldaim",
        "form_name": "deerling",
        "type1": "normal",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "585.gif",
            "front_shiny": "shiny/585.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 586,
        "entry": 586,
        "name": "haydaim",
        "form_name": "sawsbuck",
        "type1": "normal",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "586.gif",
            "front_shiny": "shiny/586.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 587,
        "entry": 587,
        "name": "emolga",
        "form_name": "emolga",
        "type1": "électrik",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "587.gif",
            "front_shiny": "shiny/587.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 588,
        "entry": 588,
        "name": "carabing",
        "form_name": "karrablast",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "588.gif",
            "front_shiny": "shiny/588.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 589,
        "entry": 589,
        "name": "lançargot",
        "form_name": "escavalier",
        "type1": "insecte",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "589.gif",
            "front_shiny": "shiny/589.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 590,
        "entry": 590,
        "name": "trompignon",
        "form_name": "foongus",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "590.gif",
            "front_shiny": "shiny/590.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 591,
        "entry": 591,
        "name": "gaulet",
        "form_name": "amoonguss",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "591.gif",
            "front_shiny": "shiny/591.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 592,
        "entry": 592,
        "name": "viskuse",
        "form_name": "frillish",
        "type1": "eau",
        "type2": "spectre",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "592.gif",
            "front_shiny": "shiny/592.gif",
            "front_female": "female/592.gif",
            "front_shiny_female": "shiny/female/592.gif"
        }
    },
    {
        "id": 593,
        "entry": 593,
        "name": "moyade",
        "form_name": "jellicent",
        "type1": "eau",
        "type2": "spectre",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "593.gif",
            "front_shiny": "shiny/593.gif",
            "front_female": "female/593.gif",
            "front_shiny_female": "shiny/female/593.gif"
        }
    },
    {
        "id": 594,
        "entry": 594,
        "name": "mamanbo",
        "form_name": "alomomola",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "594.gif",
            "front_shiny": "shiny/594.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 595,
        "entry": 595,
        "name": "statitik",
        "form_name": "joltik",
        "type1": "insecte",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "595.gif",
            "front_shiny": "shiny/595.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 596,
        "entry": 596,
        "name": "mygavolt",
        "form_name": "galvantula",
        "type1": "insecte",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "596.gif",
            "front_shiny": "shiny/596.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 597,
        "entry": 597,
        "name": "grindur",
        "form_name": "ferroseed",
        "type1": "plante",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "597.gif",
            "front_shiny": "shiny/597.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 598,
        "entry": 598,
        "name": "noacier",
        "form_name": "ferrothorn",
        "type1": "plante",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "598.gif",
            "front_shiny": "shiny/598.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 599,
        "entry": 599,
        "name": "tic",
        "form_name": "klink",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "599.gif",
            "front_shiny": "shiny/599.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 600,
        "entry": 600,
        "name": "clic",
        "form_name": "klang",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "600.gif",
            "front_shiny": "shiny/600.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 601,
        "entry": 601,
        "name": "cliticlic",
        "form_name": "klinklang",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "601.gif",
            "front_shiny": "shiny/601.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 602,
        "entry": 602,
        "name": "anchwatt",
        "form_name": "tynamo",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "602.gif",
            "front_shiny": "shiny/602.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 603,
        "entry": 603,
        "name": "lampéroie",
        "form_name": "eelektrik",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "603.gif",
            "front_shiny": "shiny/603.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 604,
        "entry": 604,
        "name": "ohmassacre",
        "form_name": "eelektross",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "604.gif",
            "front_shiny": "shiny/604.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 605,
        "entry": 605,
        "name": "lewsor",
        "form_name": "elgyem",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "605.gif",
            "front_shiny": "shiny/605.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 606,
        "entry": 606,
        "name": "neitram",
        "form_name": "beheeyem",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "606.gif",
            "front_shiny": "shiny/606.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 607,
        "entry": 607,
        "name": "funécire",
        "form_name": "litwick",
        "type1": "spectre",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "607.gif",
            "front_shiny": "shiny/607.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 608,
        "entry": 608,
        "name": "mélancolux",
        "form_name": "lampent",
        "type1": "spectre",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "608.gif",
            "front_shiny": "shiny/608.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 609,
        "entry": 609,
        "name": "lugulabre",
        "form_name": "chandelure",
        "type1": "spectre",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "609.gif",
            "front_shiny": "shiny/609.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 610,
        "entry": 610,
        "name": "coupenotte",
        "form_name": "axew",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "610.gif",
            "front_shiny": "shiny/610.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 611,
        "entry": 611,
        "name": "incisache",
        "form_name": "fraxure",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "611.gif",
            "front_shiny": "shiny/611.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 612,
        "entry": 612,
        "name": "tranchodon",
        "form_name": "haxorus",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "612.gif",
            "front_shiny": "shiny/612.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 613,
        "entry": 613,
        "name": "polarhume",
        "form_name": "cubchoo",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "613.gif",
            "front_shiny": "shiny/613.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 614,
        "entry": 614,
        "name": "polagriffe",
        "form_name": "beartic",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "614.gif",
            "front_shiny": "shiny/614.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 615,
        "entry": 615,
        "name": "hexagel",
        "form_name": "cryogonal",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "615.gif",
            "front_shiny": "shiny/615.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 616,
        "entry": 616,
        "name": "escargaume",
        "form_name": "shelmet",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "616.gif",
            "front_shiny": "shiny/616.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 617,
        "entry": 617,
        "name": "limaspeed",
        "form_name": "accelgor",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "617.gif",
            "front_shiny": "shiny/617.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 618,
        "entry": 618,
        "name": "limonde",
        "form_name": "stunfisk",
        "type1": "sol",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "618.gif",
            "front_shiny": "shiny/618.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 619,
        "entry": 619,
        "name": "kungfouine",
        "form_name": "mienfoo",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "619.gif",
            "front_shiny": "shiny/619.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 620,
        "entry": 620,
        "name": "shaofouine",
        "form_name": "mienshao",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "620.gif",
            "front_shiny": "shiny/620.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 621,
        "entry": 621,
        "name": "drakkarmin",
        "form_name": "druddigon",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "621.gif",
            "front_shiny": "shiny/621.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 622,
        "entry": 622,
        "name": "gringolem",
        "form_name": "golett",
        "type1": "sol",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "622.gif",
            "front_shiny": "shiny/622.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 623,
        "entry": 623,
        "name": "golemastoc",
        "form_name": "golurk",
        "type1": "sol",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "623.gif",
            "front_shiny": "shiny/623.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 624,
        "entry": 624,
        "name": "scalpion",
        "form_name": "pawniard",
        "type1": "ténèbres",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "624.gif",
            "front_shiny": "shiny/624.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 625,
        "entry": 625,
        "name": "scalproie",
        "form_name": "bisharp",
        "type1": "ténèbres",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "625.gif",
            "front_shiny": "shiny/625.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 626,
        "entry": 626,
        "name": "frison",
        "form_name": "bouffalant",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "626.gif",
            "front_shiny": "shiny/626.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 627,
        "entry": 627,
        "name": "furaiglon",
        "form_name": "rufflet",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "627.gif",
            "front_shiny": "shiny/627.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 628,
        "entry": 628,
        "name": "gueriaigle",
        "form_name": "braviary",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "628.gif",
            "front_shiny": "shiny/628.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 629,
        "entry": 629,
        "name": "vostourno",
        "form_name": "vullaby",
        "type1": "ténèbres",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "629.gif",
            "front_shiny": "shiny/629.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 630,
        "entry": 630,
        "name": "vaututrice",
        "form_name": "mandibuzz",
        "type1": "ténèbres",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "630.gif",
            "front_shiny": "shiny/630.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 631,
        "entry": 631,
        "name": "aflamanoir",
        "form_name": "heatmor",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "631.gif",
            "front_shiny": "shiny/631.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 632,
        "entry": 632,
        "name": "fermite",
        "form_name": "durant",
        "type1": "insecte",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "632.gif",
            "front_shiny": "shiny/632.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 633,
        "entry": 633,
        "name": "solochi",
        "form_name": "deino",
        "type1": "ténèbres",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "633.gif",
            "front_shiny": "shiny/633.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 634,
        "entry": 634,
        "name": "diamat",
        "form_name": "zweilous",
        "type1": "ténèbres",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "634.gif",
            "front_shiny": "shiny/634.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 635,
        "entry": 635,
        "name": "trioxhydre",
        "form_name": "hydreigon",
        "type1": "ténèbres",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "635.gif",
            "front_shiny": "shiny/635.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 636,
        "entry": 636,
        "name": "pyronille",
        "form_name": "larvesta",
        "type1": "insecte",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "636.gif",
            "front_shiny": "shiny/636.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 637,
        "entry": 637,
        "name": "pyrax",
        "form_name": "volcarona",
        "type1": "insecte",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "637.gif",
            "front_shiny": "shiny/637.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 638,
        "entry": 638,
        "name": "cobaltium",
        "form_name": "cobalion",
        "type1": "acier",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "638.gif",
            "front_shiny": "shiny/638.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 639,
        "entry": 639,
        "name": "terrakium",
        "form_name": "terrakion",
        "type1": "roche",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "639.gif",
            "front_shiny": "shiny/639.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 640,
        "entry": 640,
        "name": "viridium",
        "form_name": "virizion",
        "type1": "plante",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "640.gif",
            "front_shiny": "shiny/640.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 641,
        "entry": 641,
        "name": "boréas",
        "form_name": "tornadus-incarnate",
        "type1": "vol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "641.gif",
            "front_shiny": "shiny/641.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 642,
        "entry": 642,
        "name": "fulguris",
        "form_name": "thundurus-incarnate",
        "type1": "électrik",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "642.gif",
            "front_shiny": "shiny/642.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 643,
        "entry": 643,
        "name": "reshiram",
        "form_name": "reshiram",
        "type1": "dragon",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "643.gif",
            "front_shiny": "shiny/643.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 644,
        "entry": 644,
        "name": "zekrom",
        "form_name": "zekrom",
        "type1": "dragon",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "644.gif",
            "front_shiny": "shiny/644.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 645,
        "entry": 645,
        "name": "démétéros",
        "form_name": "landorus-incarnate",
        "type1": "sol",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "645.gif",
            "front_shiny": "shiny/645.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 646,
        "entry": 646,
        "name": "kyurem",
        "form_name": "kyurem",
        "type1": "dragon",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "646.gif",
            "front_shiny": "shiny/646.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 647,
        "entry": 647,
        "name": "keldeo",
        "form_name": "keldeo-ordinary",
        "type1": "eau",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "647.gif",
            "front_shiny": "shiny/647.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 648,
        "entry": 648,
        "name": "meloetta",
        "form_name": "meloetta-aria",
        "type1": "normal",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "648.gif",
            "front_shiny": "shiny/648.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 649,
        "entry": 649,
        "name": "genesect",
        "form_name": "genesect",
        "type1": "insecte",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "649.gif",
            "front_shiny": "shiny/649.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 650,
        "entry": 650,
        "name": "marisson",
        "form_name": "chespin",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "650.png",
            "front_shiny": "shiny/650.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 651,
        "entry": 651,
        "name": "boguérisse",
        "form_name": "quilladin",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "651.png",
            "front_shiny": "shiny/651.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 652,
        "entry": 652,
        "name": "blindépique",
        "form_name": "chesnaught",
        "type1": "plante",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "652.png",
            "front_shiny": "shiny/652.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 653,
        "entry": 653,
        "name": "feunnec",
        "form_name": "fennekin",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "653.png",
            "front_shiny": "shiny/653.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 654,
        "entry": 654,
        "name": "roussil",
        "form_name": "braixen",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "654.png",
            "front_shiny": "shiny/654.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 655,
        "entry": 655,
        "name": "goupelin",
        "form_name": "delphox",
        "type1": "feu",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "655.png",
            "front_shiny": "shiny/655.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 656,
        "entry": 656,
        "name": "grenousse",
        "form_name": "froakie",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "656.png",
            "front_shiny": "shiny/656.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 657,
        "entry": 657,
        "name": "croâporal",
        "form_name": "frogadier",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "657.png",
            "front_shiny": "shiny/657.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 658,
        "entry": 658,
        "name": "amphinobi",
        "form_name": "greninja",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "658.png",
            "front_shiny": "shiny/658.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 659,
        "entry": 659,
        "name": "sapereau",
        "form_name": "bunnelby",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "659.png",
            "front_shiny": "shiny/659.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 660,
        "entry": 660,
        "name": "excavarenne",
        "form_name": "diggersby",
        "type1": "normal",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "660.png",
            "front_shiny": "shiny/660.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 661,
        "entry": 661,
        "name": "passerouge",
        "form_name": "fletchling",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "661.png",
            "front_shiny": "shiny/661.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 662,
        "entry": 662,
        "name": "braisillon",
        "form_name": "fletchinder",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "662.png",
            "front_shiny": "shiny/662.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 663,
        "entry": 663,
        "name": "flambusard",
        "form_name": "talonflame",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "663.png",
            "front_shiny": "shiny/663.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 664,
        "entry": 664,
        "name": "lépidonille",
        "form_name": "scatterbug",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "664.png",
            "front_shiny": "shiny/664.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 665,
        "entry": 665,
        "name": "pérégrain",
        "form_name": "spewpa",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "665.png",
            "front_shiny": "shiny/665.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 666,
        "entry": 666,
        "name": "prismillon",
        "form_name": "vivillon",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "666.png",
            "front_shiny": "shiny/666.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 667,
        "entry": 667,
        "name": "hélionceau",
        "form_name": "litleo",
        "type1": "feu",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "667.png",
            "front_shiny": "shiny/667.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 668,
        "entry": 668,
        "name": "némélios",
        "form_name": "pyroar",
        "type1": "feu",
        "type2": "normal",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "668.png",
            "front_shiny": "shiny/668.png",
            "front_female": "female/668.png",
            "front_shiny_female": "shiny/female/668.png"
        }
    },
    {
        "id": 669,
        "entry": 669,
        "form_name": "flabebe",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "669.png",
            "front_shiny": "shiny/669.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 670,
        "entry": 670,
        "name": "floette",
        "form_name": "floette",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "670.png",
            "front_shiny": "shiny/670.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 671,
        "entry": 671,
        "name": "florges",
        "form_name": "florges",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "671.png",
            "front_shiny": "shiny/671.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 672,
        "entry": 672,
        "name": "cabriolaine",
        "form_name": "skiddo",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "672.png",
            "front_shiny": "shiny/672.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 673,
        "entry": 673,
        "name": "chevroum",
        "form_name": "gogoat",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "673.png",
            "front_shiny": "shiny/673.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 674,
        "entry": 674,
        "name": "pandespiègle",
        "form_name": "pancham",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "674.png",
            "front_shiny": "shiny/674.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 675,
        "entry": 675,
        "name": "pandarbare",
        "form_name": "pangoro",
        "type1": "combat",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "675.png",
            "front_shiny": "shiny/675.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 676,
        "entry": 676,
        "name": "couafarel",
        "form_name": "furfrou",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "676.png",
            "front_shiny": "shiny/676.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 677,
        "entry": 677,
        "name": "psystigri",
        "form_name": "espurr",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "677.png",
            "front_shiny": "shiny/677.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 678,
        "entry": 678,
        "name": "mistigrix",
        "form_name": "meowstic-male",
        "type1": "psy",
        "type2": null,
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "678.png",
            "front_shiny": "shiny/678.png",
            "front_female": "female/678.png",
            "front_shiny_female": "shiny/female/678.png"
        }
    },
    {
        "id": 679,
        "entry": 679,
        "name": "monorpale",
        "form_name": "honedge",
        "type1": "acier",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "679.png",
            "front_shiny": "shiny/679.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 680,
        "entry": 680,
        "name": "dimoclès",
        "form_name": "doublade",
        "type1": "acier",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "680.png",
            "front_shiny": "shiny/680.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 681,
        "entry": 681,
        "name": "exagide",
        "form_name": "aegislash-shield",
        "type1": "acier",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "681.png",
            "front_shiny": "shiny/681.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 682,
        "entry": 682,
        "name": "fluvetin",
        "form_name": "spritzee",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "682.png",
            "front_shiny": "shiny/682.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 683,
        "entry": 683,
        "name": "cocotine",
        "form_name": "aromatisse",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "683.png",
            "front_shiny": "shiny/683.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 684,
        "entry": 684,
        "name": "sucroquin",
        "form_name": "swirlix",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "684.png",
            "front_shiny": "shiny/684.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 685,
        "entry": 685,
        "name": "cupcanaille",
        "form_name": "slurpuff",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "685.png",
            "front_shiny": "shiny/685.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 686,
        "entry": 686,
        "name": "sepiatop",
        "form_name": "inkay",
        "type1": "ténèbres",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "686.png",
            "front_shiny": "shiny/686.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 687,
        "entry": 687,
        "name": "sepiatroce",
        "form_name": "malamar",
        "type1": "ténèbres",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "687.png",
            "front_shiny": "shiny/687.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 688,
        "entry": 688,
        "name": "opermine",
        "form_name": "binacle",
        "type1": "roche",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "688.png",
            "front_shiny": "shiny/688.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 689,
        "entry": 689,
        "name": "golgopathe",
        "form_name": "barbaracle",
        "type1": "roche",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "689.png",
            "front_shiny": "shiny/689.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 690,
        "entry": 690,
        "name": "venalgue",
        "form_name": "skrelp",
        "type1": "poison",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "690.png",
            "front_shiny": "shiny/690.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 691,
        "entry": 691,
        "name": "kravarech",
        "form_name": "dragalge",
        "type1": "poison",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "691.png",
            "front_shiny": "shiny/691.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 692,
        "entry": 692,
        "name": "flingouste",
        "form_name": "clauncher",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "692.png",
            "front_shiny": "shiny/692.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 693,
        "entry": 693,
        "name": "gamblast",
        "form_name": "clawitzer",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "693.png",
            "front_shiny": "shiny/693.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 694,
        "entry": 694,
        "name": "galvaran",
        "form_name": "helioptile",
        "type1": "électrik",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "694.png",
            "front_shiny": "shiny/694.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 695,
        "entry": 695,
        "name": "iguolta",
        "form_name": "heliolisk",
        "type1": "électrik",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "695.png",
            "front_shiny": "shiny/695.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 696,
        "entry": 696,
        "name": "ptyranidur",
        "form_name": "tyrunt",
        "type1": "roche",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "696.png",
            "front_shiny": "shiny/696.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 697,
        "entry": 697,
        "name": "rexillius",
        "form_name": "tyrantrum",
        "type1": "roche",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "697.png",
            "front_shiny": "shiny/697.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 698,
        "entry": 698,
        "name": "amagara",
        "form_name": "amaura",
        "type1": "roche",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "698.png",
            "front_shiny": "shiny/698.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 699,
        "entry": 699,
        "name": "dragmara",
        "form_name": "aurorus",
        "type1": "roche",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "699.png",
            "front_shiny": "shiny/699.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 700,
        "entry": 700,
        "name": "nymphali",
        "form_name": "sylveon",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "700.png",
            "front_shiny": "shiny/700.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 701,
        "entry": 701,
        "name": "brutalibré",
        "form_name": "hawlucha",
        "type1": "combat",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "701.png",
            "front_shiny": "shiny/701.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 702,
        "entry": 702,
        "name": "dedenne",
        "form_name": "dedenne",
        "type1": "électrik",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "702.png",
            "front_shiny": "shiny/702.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 703,
        "entry": 703,
        "name": "strassie",
        "form_name": "carbink",
        "type1": "roche",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "703.png",
            "front_shiny": "shiny/703.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 704,
        "entry": 704,
        "name": "mucuscule",
        "form_name": "goomy",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "704.png",
            "front_shiny": "shiny/704.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 705,
        "entry": 705,
        "name": "colimucus",
        "form_name": "sliggoo",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "705.png",
            "front_shiny": "shiny/705.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 706,
        "entry": 706,
        "name": "muplodocus",
        "form_name": "goodra",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "706.png",
            "front_shiny": "shiny/706.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 707,
        "entry": 707,
        "name": "trousselin",
        "form_name": "klefki",
        "type1": "acier",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "707.png",
            "front_shiny": "shiny/707.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 708,
        "entry": 708,
        "name": "brocélôme",
        "form_name": "phantump",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "708.png",
            "front_shiny": "shiny/708.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 709,
        "entry": 709,
        "name": "desséliande",
        "form_name": "trevenant",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "709.png",
            "front_shiny": "shiny/709.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 710,
        "entry": 710,
        "name": "pitrouille",
        "form_name": "pumpkaboo-average",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "710.png",
            "front_shiny": "shiny/710.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 711,
        "entry": 711,
        "name": "banshitrouye",
        "form_name": "gourgeist-average",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "711.png",
            "front_shiny": "shiny/711.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 712,
        "entry": 712,
        "name": "grelaçon",
        "form_name": "bergmite",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "712.png",
            "front_shiny": "shiny/712.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 713,
        "entry": 713,
        "name": "séracrawl",
        "form_name": "avalugg",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "713.png",
            "front_shiny": "shiny/713.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 714,
        "entry": 714,
        "name": "sonistrelle",
        "form_name": "noibat",
        "type1": "vol",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "714.png",
            "front_shiny": "shiny/714.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 715,
        "entry": 715,
        "name": "bruyverne",
        "form_name": "noivern",
        "type1": "vol",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "715.png",
            "front_shiny": "shiny/715.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 716,
        "entry": 716,
        "name": "xerneas",
        "form_name": "xerneas",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "716.png",
            "front_shiny": "shiny/716.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 717,
        "entry": 717,
        "name": "yveltal",
        "form_name": "yveltal",
        "type1": "ténèbres",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "717.png",
            "front_shiny": "shiny/717.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 718,
        "entry": 718,
        "name": "zygarde",
        "form_name": "zygarde-50",
        "type1": "dragon",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "718.png",
            "front_shiny": "shiny/718.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 719,
        "entry": 719,
        "name": "diancie",
        "form_name": "diancie",
        "type1": "roche",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "719.png",
            "front_shiny": "shiny/719.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 720,
        "entry": 720,
        "name": "hoopa",
        "form_name": "hoopa",
        "type1": "psy",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "720.png",
            "front_shiny": "shiny/720.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 721,
        "entry": 721,
        "name": "volcanion",
        "form_name": "volcanion",
        "type1": "feu",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "721.png",
            "front_shiny": "shiny/721.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 722,
        "entry": 722,
        "name": "brindibou",
        "form_name": "rowlet",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "722.png",
            "front_shiny": "shiny/722.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 723,
        "entry": 723,
        "name": "efflèche",
        "form_name": "dartrix",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "723.png",
            "front_shiny": "shiny/723.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 724,
        "entry": 724,
        "name": "archéduc",
        "form_name": "decidueye",
        "type1": "plante",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "724.png",
            "front_shiny": "shiny/724.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 725,
        "entry": 725,
        "name": "flamiaou",
        "form_name": "litten",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "725.png",
            "front_shiny": "shiny/725.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 726,
        "entry": 726,
        "name": "matoufeu",
        "form_name": "torracat",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "726.png",
            "front_shiny": "shiny/726.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 727,
        "entry": 727,
        "name": "félinferno",
        "form_name": "incineroar",
        "type1": "feu",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "727.png",
            "front_shiny": "shiny/727.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 728,
        "entry": 728,
        "name": "otaquin",
        "form_name": "popplio",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "728.png",
            "front_shiny": "shiny/728.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 729,
        "entry": 729,
        "name": "otarlette",
        "form_name": "brionne",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "729.png",
            "front_shiny": "shiny/729.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 730,
        "entry": 730,
        "name": "oratoria",
        "form_name": "primarina",
        "type1": "eau",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "730.png",
            "front_shiny": "shiny/730.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 731,
        "entry": 731,
        "name": "picassaut",
        "form_name": "pikipek",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "731.png",
            "front_shiny": "shiny/731.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 732,
        "entry": 732,
        "name": "piclairon",
        "form_name": "trumbeak",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "732.png",
            "front_shiny": "shiny/732.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 733,
        "entry": 733,
        "name": "bazoucan",
        "form_name": "toucannon",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "733.png",
            "front_shiny": "shiny/733.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 734,
        "entry": 734,
        "name": "manglouton",
        "form_name": "yungoos",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "734.png",
            "front_shiny": "shiny/734.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 735,
        "entry": 735,
        "name": "argouste",
        "form_name": "gumshoos",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "735.png",
            "front_shiny": "shiny/735.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 736,
        "entry": 736,
        "name": "larvibule",
        "form_name": "grubbin",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "736.png",
            "front_shiny": "shiny/736.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 737,
        "entry": 737,
        "name": "chrysapile",
        "form_name": "charjabug",
        "type1": "insecte",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "737.png",
            "front_shiny": "shiny/737.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 738,
        "entry": 738,
        "name": "lucanon",
        "form_name": "vikavolt",
        "type1": "insecte",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "738.png",
            "front_shiny": "shiny/738.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 739,
        "entry": 739,
        "name": "crabagarre",
        "form_name": "crabrawler",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "739.png",
            "front_shiny": "shiny/739.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 740,
        "entry": 740,
        "name": "crabominable",
        "form_name": "crabominable",
        "type1": "combat",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "740.png",
            "front_shiny": "shiny/740.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 741,
        "entry": 741,
        "name": "plumeline",
        "form_name": "oricorio-baile",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "741.png",
            "front_shiny": "shiny/741.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 742,
        "entry": 742,
        "name": "bombydou",
        "form_name": "cutiefly",
        "type1": "insecte",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "742.png",
            "front_shiny": "shiny/742.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 743,
        "entry": 743,
        "name": "rubombelle",
        "form_name": "ribombee",
        "type1": "insecte",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "743.png",
            "front_shiny": "shiny/743.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 744,
        "entry": 744,
        "name": "rocabot",
        "form_name": "rockruff",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "744.png",
            "front_shiny": "shiny/744.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 745,
        "entry": 745,
        "name": "lougaroc",
        "form_name": "lycanroc-midday",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "745.png",
            "front_shiny": "shiny/745.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 746,
        "entry": 746,
        "name": "froussardine",
        "form_name": "wishiwashi-solo",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "746.png",
            "front_shiny": "shiny/746.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 747,
        "entry": 747,
        "name": "vorastérie",
        "form_name": "mareanie",
        "type1": "poison",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "747.png",
            "front_shiny": "shiny/747.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 748,
        "entry": 748,
        "name": "prédastérie",
        "form_name": "toxapex",
        "type1": "poison",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "748.png",
            "front_shiny": "shiny/748.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 749,
        "entry": 749,
        "name": "tiboudet",
        "form_name": "mudbray",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "749.png",
            "front_shiny": "shiny/749.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 750,
        "entry": 750,
        "name": "bourrinos",
        "form_name": "mudsdale",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "750.png",
            "front_shiny": "shiny/750.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 751,
        "entry": 751,
        "name": "araqua",
        "form_name": "dewpider",
        "type1": "eau",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "751.png",
            "front_shiny": "shiny/751.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 752,
        "entry": 752,
        "name": "tarenbulle",
        "form_name": "araquanid",
        "type1": "eau",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "752.png",
            "front_shiny": "shiny/752.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 753,
        "entry": 753,
        "name": "mimantis",
        "form_name": "fomantis",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "753.png",
            "front_shiny": "shiny/753.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 754,
        "entry": 754,
        "name": "floramantis",
        "form_name": "lurantis",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "754.png",
            "front_shiny": "shiny/754.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 755,
        "entry": 755,
        "name": "spododo",
        "form_name": "morelull",
        "type1": "plante",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "755.png",
            "front_shiny": "shiny/755.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 756,
        "entry": 756,
        "name": "lampignon",
        "form_name": "shiinotic",
        "type1": "plante",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "756.png",
            "front_shiny": "shiny/756.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 757,
        "entry": 757,
        "name": "tritox",
        "form_name": "salandit",
        "type1": "poison",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "757.png",
            "front_shiny": "shiny/757.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 758,
        "entry": 758,
        "name": "malamandre",
        "form_name": "salazzle",
        "type1": "poison",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "758.png",
            "front_shiny": "shiny/758.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 759,
        "entry": 759,
        "name": "nounourson",
        "form_name": "stufful",
        "type1": "normal",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "759.png",
            "front_shiny": "shiny/759.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 760,
        "entry": 760,
        "name": "chelours",
        "form_name": "bewear",
        "type1": "normal",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "760.png",
            "front_shiny": "shiny/760.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 761,
        "entry": 761,
        "name": "croquine",
        "form_name": "bounsweet",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "761.png",
            "front_shiny": "shiny/761.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 762,
        "entry": 762,
        "name": "candine",
        "form_name": "steenee",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "762.png",
            "front_shiny": "shiny/762.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 763,
        "entry": 763,
        "name": "sucreine",
        "form_name": "tsareena",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "763.png",
            "front_shiny": "shiny/763.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 764,
        "entry": 764,
        "name": "guérilande",
        "form_name": "comfey",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "764.png",
            "front_shiny": "shiny/764.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 765,
        "entry": 765,
        "name": "gouroutan",
        "form_name": "oranguru",
        "type1": "normal",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "765.png",
            "front_shiny": "shiny/765.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 766,
        "entry": 766,
        "name": "quartermac",
        "form_name": "passimian",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "766.png",
            "front_shiny": "shiny/766.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 767,
        "entry": 767,
        "name": "sovkipou",
        "form_name": "wimpod",
        "type1": "insecte",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "767.png",
            "front_shiny": "shiny/767.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 768,
        "entry": 768,
        "name": "sarmuraï",
        "form_name": "golisopod",
        "type1": "insecte",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "768.png",
            "front_shiny": "shiny/768.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 769,
        "entry": 769,
        "name": "bacabouh",
        "form_name": "sandygast",
        "type1": "spectre",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "769.png",
            "front_shiny": "shiny/769.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 770,
        "entry": 770,
        "name": "trépassable",
        "form_name": "palossand",
        "type1": "spectre",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "770.png",
            "front_shiny": "shiny/770.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 771,
        "entry": 771,
        "name": "concombaffe",
        "form_name": "pyukumuku",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "771.png",
            "front_shiny": "shiny/771.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 772,
        "entry": 772,
        "form_name": "type-null",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "772.png",
            "front_shiny": "shiny/772.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 773,
        "entry": 773,
        "name": "silvallié",
        "form_name": "silvally",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "773.png",
            "front_shiny": "shiny/773.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 774,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-red-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "774.png",
            "front_shiny": "shiny/774.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 775,
        "entry": 775,
        "name": "dodoala",
        "form_name": "komala",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "775.png",
            "front_shiny": "shiny/775.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 776,
        "entry": 776,
        "name": "boumata",
        "form_name": "turtonator",
        "type1": "feu",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "776.png",
            "front_shiny": "shiny/776.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 777,
        "entry": 777,
        "name": "togedemaru",
        "form_name": "togedemaru",
        "type1": "électrik",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "777.png",
            "front_shiny": "shiny/777.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 778,
        "entry": 778,
        "name": "mimiqui",
        "form_name": "mimikyu-disguised",
        "type1": "spectre",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "778.png",
            "front_shiny": "shiny/778.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 779,
        "entry": 779,
        "name": "denticrisse",
        "form_name": "bruxish",
        "type1": "eau",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "779.png",
            "front_shiny": "shiny/779.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 780,
        "entry": 780,
        "name": "draïeul",
        "form_name": "drampa",
        "type1": "normal",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "780.png",
            "front_shiny": "shiny/780.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 781,
        "entry": 781,
        "name": "sinistrail",
        "form_name": "dhelmise",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "781.png",
            "front_shiny": "shiny/781.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 782,
        "entry": 782,
        "name": "bébécaille",
        "form_name": "jangmo-o",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "782.png",
            "front_shiny": "shiny/782.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 783,
        "entry": 783,
        "name": "écaïd",
        "form_name": "hakamo-o",
        "type1": "dragon",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "783.png",
            "front_shiny": "shiny/783.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 784,
        "entry": 784,
        "name": "ékaïser",
        "form_name": "kommo-o",
        "type1": "dragon",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "784.png",
            "front_shiny": "shiny/784.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 785,
        "entry": 785,
        "form_name": "tapu-koko",
        "type1": "électrik",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "785.png",
            "front_shiny": "shiny/785.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 786,
        "entry": 786,
        "form_name": "tapu-lele",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "786.png",
            "front_shiny": "shiny/786.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 787,
        "entry": 787,
        "form_name": "tapu-bulu",
        "type1": "plante",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "787.png",
            "front_shiny": "shiny/787.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 788,
        "entry": 788,
        "form_name": "tapu-fini",
        "type1": "eau",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "788.png",
            "front_shiny": "shiny/788.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 789,
        "entry": 789,
        "name": "cosmog",
        "form_name": "cosmog",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "789.png",
            "front_shiny": "shiny/789.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 790,
        "entry": 790,
        "name": "cosmovum",
        "form_name": "cosmoem",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "790.png",
            "front_shiny": "shiny/790.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 791,
        "entry": 791,
        "name": "solgaleo",
        "form_name": "solgaleo",
        "type1": "psy",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "791.png",
            "front_shiny": "shiny/791.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 792,
        "entry": 792,
        "name": "lunala",
        "form_name": "lunala",
        "type1": "psy",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "792.png",
            "front_shiny": "shiny/792.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 793,
        "entry": 793,
        "name": "zéroïd",
        "form_name": "nihilego",
        "type1": "roche",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "793.png",
            "front_shiny": "shiny/793.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 794,
        "entry": 794,
        "name": "mouscoto",
        "form_name": "buzzwole",
        "type1": "insecte",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "794.png",
            "front_shiny": "shiny/794.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 795,
        "entry": 795,
        "name": "cancrelove",
        "form_name": "pheromosa",
        "type1": "insecte",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "795.png",
            "front_shiny": "shiny/795.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 796,
        "entry": 796,
        "name": "câblifère",
        "form_name": "xurkitree",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "796.png",
            "front_shiny": "shiny/796.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 797,
        "entry": 797,
        "name": "bamboiselle",
        "form_name": "celesteela",
        "type1": "acier",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "797.png",
            "front_shiny": "shiny/797.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 798,
        "entry": 798,
        "name": "katagami",
        "form_name": "kartana",
        "type1": "plante",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "798.png",
            "front_shiny": "shiny/798.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 799,
        "entry": 799,
        "name": "engloutyran",
        "form_name": "guzzlord",
        "type1": "ténèbres",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "799.png",
            "front_shiny": "shiny/799.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 800,
        "entry": 800,
        "name": "necrozma",
        "form_name": "necrozma",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "800.png",
            "front_shiny": "shiny/800.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 801,
        "entry": 801,
        "name": "magearna",
        "form_name": "magearna",
        "type1": "acier",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "801.png",
            "front_shiny": "shiny/801.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 802,
        "entry": 802,
        "name": "marshadow",
        "form_name": "marshadow",
        "type1": "combat",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "802.png",
            "front_shiny": "shiny/802.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 803,
        "entry": 803,
        "name": "vémini",
        "form_name": "poipole",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "803.png",
            "front_shiny": "shiny/803.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 804,
        "entry": 804,
        "name": "mandrillon",
        "form_name": "naganadel",
        "type1": "poison",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "804.png",
            "front_shiny": "shiny/804.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 805,
        "entry": 805,
        "name": "ama-ama",
        "form_name": "stakataka",
        "type1": "roche",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "805.png",
            "front_shiny": "shiny/805.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 806,
        "entry": 806,
        "name": "pierroteknik",
        "form_name": "blacephalon",
        "type1": "feu",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "806.png",
            "front_shiny": "shiny/806.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 807,
        "entry": 807,
        "name": "zeraora",
        "form_name": "zeraora",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "807.png",
            "front_shiny": "shiny/807.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 808,
        "entry": 808,
        "name": "meltan",
        "form_name": "meltan",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "808.png",
            "front_shiny": "shiny/808.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 809,
        "entry": 809,
        "name": "melmetal",
        "form_name": "melmetal",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "809.png",
            "front_shiny": "shiny/809.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 810,
        "entry": 810,
        "name": "ouistempo",
        "form_name": "grookey",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "810.png",
            "front_shiny": "shiny/810.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 811,
        "entry": 811,
        "name": "badabouin",
        "form_name": "thwackey",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "811.png",
            "front_shiny": "shiny/811.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 812,
        "entry": 812,
        "name": "gorythmic",
        "form_name": "rillaboom",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "812.png",
            "front_shiny": "shiny/812.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 813,
        "entry": 813,
        "name": "flambino",
        "form_name": "scorbunny",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "813.png",
            "front_shiny": "shiny/813.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 814,
        "entry": 814,
        "name": "lapyro",
        "form_name": "raboot",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "814.png",
            "front_shiny": "shiny/814.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 815,
        "entry": 815,
        "name": "pyrobut",
        "form_name": "cinderace",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "815.png",
            "front_shiny": "shiny/815.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 816,
        "entry": 816,
        "name": "larméléon",
        "form_name": "sobble",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "816.png",
            "front_shiny": "shiny/816.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 817,
        "entry": 817,
        "name": "arrozard",
        "form_name": "drizzile",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "817.png",
            "front_shiny": "shiny/817.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 818,
        "entry": 818,
        "name": "lézargus",
        "form_name": "inteleon",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "818.png",
            "front_shiny": "shiny/818.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 819,
        "entry": 819,
        "name": "rongourmand",
        "form_name": "skwovet",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "819.png",
            "front_shiny": "shiny/819.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 820,
        "entry": 820,
        "name": "rongrigou",
        "form_name": "greedent",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "820.png",
            "front_shiny": "shiny/820.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 821,
        "entry": 821,
        "name": "minisange",
        "form_name": "rookidee",
        "type1": "vol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "821.png",
            "front_shiny": "shiny/821.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 822,
        "entry": 822,
        "name": "bleuseille",
        "form_name": "corvisquire",
        "type1": "vol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "822.png",
            "front_shiny": "shiny/822.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 823,
        "entry": 823,
        "name": "corvaillus",
        "form_name": "corviknight",
        "type1": "vol",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "823.png",
            "front_shiny": "shiny/823.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 824,
        "entry": 824,
        "name": "larvadar",
        "form_name": "blipbug",
        "type1": "insecte",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "824.png",
            "front_shiny": "shiny/824.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 825,
        "entry": 825,
        "name": "coléodôme",
        "form_name": "dottler",
        "type1": "insecte",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "825.png",
            "front_shiny": "shiny/825.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 826,
        "entry": 826,
        "name": "astronelle",
        "form_name": "orbeetle",
        "type1": "insecte",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "826.png",
            "front_shiny": "shiny/826.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 827,
        "entry": 827,
        "name": "goupilou",
        "form_name": "nickit",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "827.png",
            "front_shiny": "shiny/827.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 828,
        "entry": 828,
        "name": "roublenard",
        "form_name": "thievul",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "828.png",
            "front_shiny": "shiny/828.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 829,
        "entry": 829,
        "name": "tournicoton",
        "form_name": "gossifleur",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "829.png",
            "front_shiny": "shiny/829.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 830,
        "entry": 830,
        "name": "blancoton",
        "form_name": "eldegoss",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "830.png",
            "front_shiny": "shiny/830.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 831,
        "entry": 831,
        "name": "moumouton",
        "form_name": "wooloo",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "831.png",
            "front_shiny": "shiny/831.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 832,
        "entry": 832,
        "name": "moumouflon",
        "form_name": "dubwool",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "832.png",
            "front_shiny": "shiny/832.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 833,
        "entry": 833,
        "name": "khélocrok",
        "form_name": "chewtle",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "833.png",
            "front_shiny": "shiny/833.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 834,
        "entry": 834,
        "name": "torgamord",
        "form_name": "drednaw",
        "type1": "eau",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "834.png",
            "front_shiny": "shiny/834.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 835,
        "entry": 835,
        "name": "voltoutou",
        "form_name": "yamper",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "835.png",
            "front_shiny": "shiny/835.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 836,
        "entry": 836,
        "name": "fulgudog",
        "form_name": "boltund",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "836.png",
            "front_shiny": "shiny/836.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 837,
        "entry": 837,
        "name": "charbi",
        "form_name": "rolycoly",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "837.png",
            "front_shiny": "shiny/837.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 838,
        "entry": 838,
        "name": "wagomine",
        "form_name": "carkol",
        "type1": "roche",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "838.png",
            "front_shiny": "shiny/838.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 839,
        "entry": 839,
        "name": "monthracite",
        "form_name": "coalossal",
        "type1": "roche",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "839.png",
            "front_shiny": "shiny/839.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 840,
        "entry": 840,
        "name": "verpom",
        "form_name": "applin",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "840.png",
            "front_shiny": "shiny/840.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 841,
        "entry": 841,
        "name": "pomdrapi",
        "form_name": "flapple",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "841.png",
            "front_shiny": "shiny/841.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 842,
        "entry": 842,
        "name": "dratatin",
        "form_name": "appletun",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "842.png",
            "front_shiny": "shiny/842.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 843,
        "entry": 843,
        "name": "dunaja",
        "form_name": "silicobra",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "843.png",
            "front_shiny": "shiny/843.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 844,
        "entry": 844,
        "name": "dunaconda",
        "form_name": "sandaconda",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "844.png",
            "front_shiny": "shiny/844.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 845,
        "entry": 845,
        "name": "nigosier",
        "form_name": "cramorant",
        "type1": "vol",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "845.png",
            "front_shiny": "shiny/845.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 846,
        "entry": 846,
        "name": "embrochet",
        "form_name": "arrokuda",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "846.png",
            "front_shiny": "shiny/846.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 847,
        "entry": 847,
        "name": "hastacuda",
        "form_name": "barraskewda",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "847.png",
            "front_shiny": "shiny/847.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 848,
        "entry": 848,
        "name": "toxizap",
        "form_name": "toxel",
        "type1": "électrik",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "848.png",
            "front_shiny": "shiny/848.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 849,
        "entry": 849,
        "name": "salarsen",
        "form_name": "toxtricity-amped",
        "type1": "électrik",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "849.png",
            "front_shiny": "shiny/849.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 850,
        "entry": 850,
        "name": "grillepattes",
        "form_name": "sizzlipede",
        "type1": "feu",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "850.png",
            "front_shiny": "shiny/850.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 851,
        "entry": 851,
        "name": "scolocendre",
        "form_name": "centiskorch",
        "type1": "feu",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "851.png",
            "front_shiny": "shiny/851.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 852,
        "entry": 852,
        "name": "poulpaf",
        "form_name": "clobbopus",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "852.png",
            "front_shiny": "shiny/852.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 853,
        "entry": 853,
        "name": "krakos",
        "form_name": "grapploct",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "853.png",
            "front_shiny": "shiny/853.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 854,
        "entry": 854,
        "name": "théffroi",
        "form_name": "sinistea",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "854.png",
            "front_shiny": "shiny/854.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 855,
        "entry": 855,
        "name": "polthégeist",
        "form_name": "polteageist",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "855.png",
            "front_shiny": "shiny/855.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 856,
        "entry": 856,
        "name": "bibichut",
        "form_name": "hatenna",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "856.png",
            "front_shiny": "shiny/856.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 857,
        "entry": 857,
        "name": "chapotus",
        "form_name": "hattrem",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "857.png",
            "front_shiny": "shiny/857.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 858,
        "entry": 858,
        "name": "sorcilence",
        "form_name": "hatterene",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "858.png",
            "front_shiny": "shiny/858.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 859,
        "entry": 859,
        "name": "grimalin",
        "form_name": "impidimp",
        "type1": "ténèbres",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "859.png",
            "front_shiny": "shiny/859.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 860,
        "entry": 860,
        "name": "fourbelin",
        "form_name": "morgrem",
        "type1": "ténèbres",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "860.png",
            "front_shiny": "shiny/860.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 861,
        "entry": 861,
        "name": "angoliath",
        "form_name": "grimmsnarl",
        "type1": "ténèbres",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "861.png",
            "front_shiny": "shiny/861.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 862,
        "entry": 862,
        "name": "ixon",
        "form_name": "obstagoon",
        "type1": "ténèbres",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "862.png",
            "front_shiny": "shiny/862.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 863,
        "entry": 863,
        "name": "berserkatt",
        "form_name": "perrserker",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "863.png",
            "front_shiny": "shiny/863.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 864,
        "entry": 864,
        "name": "corayôme",
        "form_name": "cursola",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "864.png",
            "front_shiny": "shiny/864.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 865,
        "entry": 865,
        "form_name": "sirfetchd",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "865.png",
            "front_shiny": "shiny/865.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 866,
        "entry": 866,
        "form_name": "mr-rime",
        "type1": "glace",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "866.png",
            "front_shiny": "shiny/866.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 867,
        "entry": 867,
        "name": "tutétékri",
        "form_name": "runerigus",
        "type1": "sol",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "867.png",
            "front_shiny": "shiny/867.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 868,
        "entry": 868,
        "name": "crèmy",
        "form_name": "milcery",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "868.png",
            "front_shiny": "shiny/868.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 869,
        "entry": 869,
        "name": "charmilly",
        "form_name": "alcremie",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "869.png",
            "front_shiny": "shiny/869.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 870,
        "entry": 870,
        "name": "hexadron",
        "form_name": "falinks",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "870.png",
            "front_shiny": "shiny/870.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 871,
        "entry": 871,
        "name": "wattapik",
        "form_name": "pincurchin",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "871.png",
            "front_shiny": "shiny/871.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 872,
        "entry": 872,
        "name": "frissonille",
        "form_name": "snom",
        "type1": "glace",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "872.png",
            "front_shiny": "shiny/872.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 873,
        "entry": 873,
        "name": "beldeneige",
        "form_name": "frosmoth",
        "type1": "glace",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "873.png",
            "front_shiny": "shiny/873.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 874,
        "entry": 874,
        "name": "dolman",
        "form_name": "stonjourner",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "874.png",
            "front_shiny": "shiny/874.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 875,
        "entry": 875,
        "name": "bekaglaçon",
        "form_name": "eiscue-glace",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "875.png",
            "front_shiny": "shiny/875.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 876,
        "entry": 876,
        "name": "wimessir",
        "form_name": "indeedee-male",
        "type1": "psy",
        "type2": "normal",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "876.png",
            "front_shiny": "shiny/876.png",
            "front_female": "female/876.png",
            "front_shiny_female": "shiny/female/876.png"
        }
    },
    {
        "id": 877,
        "entry": 877,
        "name": "morpeko",
        "form_name": "morpeko-full-belly",
        "type1": "électrik",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "877.png",
            "front_shiny": "shiny/877.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 878,
        "entry": 878,
        "name": "charibari",
        "form_name": "cufant",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "878.png",
            "front_shiny": "shiny/878.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 879,
        "entry": 879,
        "name": "pachyradjah",
        "form_name": "copperajah",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "879.png",
            "front_shiny": "shiny/879.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 880,
        "entry": 880,
        "name": "galvagon",
        "form_name": "dracozolt",
        "type1": "électrik",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "880.png",
            "front_shiny": "shiny/880.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 881,
        "entry": 881,
        "name": "galvagla",
        "form_name": "arctozolt",
        "type1": "électrik",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "881.png",
            "front_shiny": "shiny/881.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 882,
        "entry": 882,
        "name": "hydragon",
        "form_name": "dracovish",
        "type1": "eau",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "882.png",
            "front_shiny": "shiny/882.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 883,
        "entry": 883,
        "name": "hydragla",
        "form_name": "arctovish",
        "type1": "eau",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "883.png",
            "front_shiny": "shiny/883.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 884,
        "entry": 884,
        "name": "duralugon",
        "form_name": "duraludon",
        "type1": "acier",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "884.png",
            "front_shiny": "shiny/884.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 885,
        "entry": 885,
        "name": "fantyrm",
        "form_name": "dreepy",
        "type1": "dragon",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "885.png",
            "front_shiny": "shiny/885.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 886,
        "entry": 886,
        "name": "dispareptil",
        "form_name": "drakloak",
        "type1": "dragon",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "886.png",
            "front_shiny": "shiny/886.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 887,
        "entry": 887,
        "name": "lanssorien",
        "form_name": "dragapult",
        "type1": "dragon",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "887.png",
            "front_shiny": "shiny/887.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 888,
        "entry": 888,
        "name": "zacian",
        "form_name": "zacian",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "888.png",
            "front_shiny": "shiny/888.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 889,
        "entry": 889,
        "name": "zamazenta",
        "form_name": "zamazenta",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "889.png",
            "front_shiny": "shiny/889.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 890,
        "entry": 890,
        "name": "éthernatos",
        "form_name": "eternatus",
        "type1": "poison",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "890.png",
            "front_shiny": "shiny/890.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 891,
        "entry": 891,
        "name": "wushours",
        "form_name": "kubfu",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "891.png",
            "front_shiny": "shiny/891.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 892,
        "entry": 892,
        "name": "shifours",
        "form_name": "urshifu-single-strike",
        "type1": "combat",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "892.png",
            "front_shiny": "shiny/892.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 893,
        "entry": 893,
        "name": "zarude",
        "form_name": "zarude",
        "type1": "ténèbres",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "893.png",
            "front_shiny": "shiny/893.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 894,
        "entry": 894,
        "name": "regieleki",
        "form_name": "regieleki",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "894.png",
            "front_shiny": "shiny/894.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 895,
        "entry": 895,
        "name": "regidrago",
        "form_name": "regidrago",
        "type1": "dragon",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "895.png",
            "front_shiny": "shiny/895.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 896,
        "entry": 896,
        "name": "blizzeval",
        "form_name": "glastrier",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "896.png",
            "front_shiny": "shiny/896.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 897,
        "entry": 897,
        "name": "spectreval",
        "form_name": "spectrier",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "897.png",
            "front_shiny": "shiny/897.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 898,
        "entry": 898,
        "name": "sylveroy",
        "form_name": "calyrex",
        "type1": "psy",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "898.png",
            "front_shiny": "shiny/898.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 899,
        "entry": 899,
        "name": "cerbyllin",
        "form_name": "wyrdeer",
        "type1": "normal",
        "type2": "psy",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "899.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 900,
        "entry": 900,
        "name": "hachécateur",
        "form_name": "kleavor",
        "type1": "insecte",
        "type2": "roche",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "900.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 901,
        "entry": 901,
        "name": "ursaking",
        "form_name": "ursaluna",
        "type1": "sol",
        "type2": "normal",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "901.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 902,
        "entry": 902,
        "name": "paragruel",
        "form_name": "basculegion-male",
        "type1": "eau",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "902.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 903,
        "entry": 903,
        "name": "farfurex",
        "form_name": "sneasler",
        "type1": "combat",
        "type2": "poison",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "903.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 904,
        "entry": 904,
        "name": "qwilpik",
        "form_name": "overqwil",
        "type1": "ténèbres",
        "type2": "poison",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "904.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 905,
        "entry": 905,
        "name": "amovénus",
        "form_name": "enamorus-incarnate",
        "type1": "fée",
        "type2": "vol",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "905.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10001,
        "entry": 386,
        "name": "deoxys",
        "form_name": "deoxys-attack",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10001.gif",
            "front_shiny": "shiny/10001.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10002,
        "entry": 386,
        "name": "deoxys",
        "form_name": "deoxys-defense",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10002.gif",
            "front_shiny": "shiny/10002.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10003,
        "entry": 386,
        "name": "deoxys",
        "form_name": "deoxys-speed",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10003.gif",
            "front_shiny": "shiny/10003.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10004,
        "entry": 413,
        "name": "cheniselle",
        "form_name": "wormadam-sandy",
        "type1": "insecte",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10004.gif",
            "front_shiny": "shiny/10004.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10005,
        "entry": 413,
        "name": "cheniselle",
        "form_name": "wormadam-trash",
        "type1": "insecte",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10005.gif",
            "front_shiny": "shiny/10005.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10006,
        "entry": 492,
        "name": "shaymin",
        "form_name": "shaymin-sky",
        "type1": "plante",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10006.gif",
            "front_shiny": "shiny/10006.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10007,
        "entry": 487,
        "name": "giratina",
        "form_name": "giratina-origin",
        "type1": "spectre",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10007.gif",
            "front_shiny": "shiny/10007.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10008,
        "entry": 479,
        "name": "motisma",
        "form_name": "rotom-heat",
        "type1": "électrik",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10008.gif",
            "front_shiny": "shiny/10008.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10009,
        "entry": 479,
        "name": "motisma",
        "form_name": "rotom-wash",
        "type1": "électrik",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10009.gif",
            "front_shiny": "shiny/10009.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10010,
        "entry": 479,
        "name": "motisma",
        "form_name": "rotom-frost",
        "type1": "électrik",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10010.gif",
            "front_shiny": "shiny/10010.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10011,
        "entry": 479,
        "name": "motisma",
        "form_name": "rotom-fan",
        "type1": "électrik",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10011.gif",
            "front_shiny": "shiny/10011.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10012,
        "entry": 479,
        "name": "motisma",
        "form_name": "rotom-mow",
        "type1": "électrik",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10012.gif",
            "front_shiny": "shiny/10012.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10013,
        "entry": 351,
        "name": "morphéo",
        "form_name": "castform-sunny",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10013.gif",
            "front_shiny": "shiny/10013.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10014,
        "entry": 351,
        "name": "morphéo",
        "form_name": "castform-rainy",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10014.gif",
            "front_shiny": "shiny/10014.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10015,
        "entry": 351,
        "name": "morphéo",
        "form_name": "castform-snowy",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10015.gif",
            "front_shiny": "shiny/10015.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10016,
        "entry": 550,
        "name": "bargantua",
        "form_name": "basculin-blue-striped",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10016.gif",
            "front_shiny": "shiny/10016.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10017,
        "entry": 555,
        "name": "darumacho",
        "form_name": "darmanitan-zen",
        "type1": "feu",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10017.gif",
            "front_shiny": "shiny/10017.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10018,
        "entry": 648,
        "name": "meloetta",
        "form_name": "meloetta-pirouette",
        "type1": "normal",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10018.gif",
            "front_shiny": "shiny/10018.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10019,
        "entry": 641,
        "name": "boréas",
        "form_name": "tornadus-therian",
        "type1": "vol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10019.gif",
            "front_shiny": "shiny/10019.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10020,
        "entry": 642,
        "name": "fulguris",
        "form_name": "thundurus-therian",
        "type1": "électrik",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10020.gif",
            "front_shiny": "shiny/10020.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10021,
        "entry": 645,
        "name": "démétéros",
        "form_name": "landorus-therian",
        "type1": "sol",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10021.gif",
            "front_shiny": "shiny/10021.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10022,
        "entry": 646,
        "name": "kyurem",
        "form_name": "kyurem-black",
        "type1": "dragon",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "646-black.gif",
            "front_shiny": "shiny/646-black.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10023,
        "entry": 646,
        "name": "kyurem",
        "form_name": "kyurem-white",
        "type1": "dragon",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "646-white.gif",
            "front_shiny": "shiny/646-white.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10024,
        "entry": 647,
        "name": "keldeo",
        "form_name": "keldeo-resolute",
        "type1": "eau",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "animated",
        "sprites": {
            "front_default": "10024.gif",
            "front_shiny": "shiny/10024.gif",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10025,
        "entry": 678,
        "name": "mistigrix",
        "form_name": "meowstic-female",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10025.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10026,
        "entry": 681,
        "name": "exagide",
        "form_name": "aegislash-blade",
        "type1": "acier",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10026.png",
            "front_shiny": "shiny/10026.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10027,
        "entry": 710,
        "name": "pitrouille",
        "form_name": "pumpkaboo-small",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10027.png",
            "front_shiny": "shiny/710-small.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10028,
        "entry": 710,
        "name": "pitrouille",
        "form_name": "pumpkaboo-large",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10028.png",
            "front_shiny": "shiny/710-large.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10029,
        "entry": 710,
        "name": "pitrouille",
        "form_name": "pumpkaboo-super",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10029.png",
            "front_shiny": "shiny/710-super.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10030,
        "entry": 711,
        "name": "banshitrouye",
        "form_name": "gourgeist-small",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10030.png",
            "front_shiny": "shiny/711-small.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10031,
        "entry": 711,
        "name": "banshitrouye",
        "form_name": "gourgeist-large",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10031.png",
            "front_shiny": "shiny/711-large.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10032,
        "entry": 711,
        "name": "banshitrouye",
        "form_name": "gourgeist-super",
        "type1": "spectre",
        "type2": "plante",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10032.png",
            "front_shiny": "shiny/711-super.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10033,
        "entry": 3,
        "name": "florizarre",
        "form_name": "venusaur-mega",
        "type1": "plante",
        "type2": "poison",
        "has_female": true,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10033.png",
            "front_shiny": "shiny/10033.png",
            "front_female": "female/10033.png",
            "front_shiny_female": null
        }
    },
    {
        "id": 10034,
        "entry": 6,
        "name": "dracaufeu",
        "form_name": "charizard-mega-x",
        "type1": "feu",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10034.png",
            "front_shiny": "shiny/10034.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10035,
        "entry": 6,
        "name": "dracaufeu",
        "form_name": "charizard-mega-y",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10035.png",
            "front_shiny": "shiny/6-mega-y.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10036,
        "entry": 9,
        "name": "tortank",
        "form_name": "blastoise-mega",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10036.png",
            "front_shiny": "shiny/10036.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10037,
        "entry": 65,
        "name": "alakazam",
        "form_name": "alakazam-mega",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10037.png",
            "front_shiny": "shiny/10037.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10038,
        "entry": 94,
        "name": "ectoplasma",
        "form_name": "gengar-mega",
        "type1": "spectre",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10038.png",
            "front_shiny": "shiny/10038.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10039,
        "entry": 115,
        "name": "kangourex",
        "form_name": "kangaskhan-mega",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10039.png",
            "front_shiny": "shiny/10039.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10040,
        "entry": 127,
        "name": "scarabrute",
        "form_name": "pinsir-mega",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10040.png",
            "front_shiny": "shiny/10040.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10041,
        "entry": 130,
        "name": "léviator",
        "form_name": "gyarados-mega",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10041.png",
            "front_shiny": "shiny/10041.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10042,
        "entry": 142,
        "name": "ptéra",
        "form_name": "aerodactyl-mega",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10042.png",
            "front_shiny": "shiny/10042.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10043,
        "entry": 150,
        "name": "mewtwo",
        "form_name": "mewtwo-mega-x",
        "type1": "psy",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10043.png",
            "front_shiny": "shiny/150-mega-x.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10044,
        "entry": 150,
        "name": "mewtwo",
        "form_name": "mewtwo-mega-y",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10044.png",
            "front_shiny": "shiny/150-mega-y.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10045,
        "entry": 181,
        "name": "pharamp",
        "form_name": "ampharos-mega",
        "type1": "électrik",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10045.png",
            "front_shiny": "shiny/10045.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10046,
        "entry": 212,
        "name": "cizayox",
        "form_name": "scizor-mega",
        "type1": "insecte",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10046.png",
            "front_shiny": "shiny/10046.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10047,
        "entry": 214,
        "name": "scarhino",
        "form_name": "heracross-mega",
        "type1": "insecte",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10047.png",
            "front_shiny": "shiny/10047.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10048,
        "entry": 229,
        "name": "démolosse",
        "form_name": "houndoom-mega",
        "type1": "ténèbres",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10048.png",
            "front_shiny": "shiny/10048.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10049,
        "entry": 248,
        "name": "tyranocif",
        "form_name": "tyranitar-mega",
        "type1": "roche",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10049.png",
            "front_shiny": "shiny/10049.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10050,
        "entry": 257,
        "name": "braségali",
        "form_name": "blaziken-mega",
        "type1": "feu",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10050.png",
            "front_shiny": "shiny/10050.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10051,
        "entry": 282,
        "name": "gardevoir",
        "form_name": "gardevoir-mega",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10051.png",
            "front_shiny": "shiny/10051.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10052,
        "entry": 303,
        "name": "mysdibule",
        "form_name": "mawile-mega",
        "type1": "acier",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10052.png",
            "front_shiny": "shiny/10052.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10053,
        "entry": 306,
        "name": "galeking",
        "form_name": "aggron-mega",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10053.png",
            "front_shiny": "shiny/10053.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10054,
        "entry": 308,
        "name": "charmina",
        "form_name": "medicham-mega",
        "type1": "combat",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10054.png",
            "front_shiny": "shiny/10054.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10055,
        "entry": 310,
        "name": "élecsprint",
        "form_name": "manectric-mega",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10055.png",
            "front_shiny": "shiny/10055.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10056,
        "entry": 354,
        "name": "branette",
        "form_name": "banette-mega",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10056.png",
            "front_shiny": "shiny/10056.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10057,
        "entry": 359,
        "name": "absol",
        "form_name": "absol-mega",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10057.png",
            "front_shiny": "shiny/10057.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10058,
        "entry": 445,
        "name": "carchacrok",
        "form_name": "garchomp-mega",
        "type1": "dragon",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10058.png",
            "front_shiny": "shiny/10058.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10059,
        "entry": 448,
        "name": "lucario",
        "form_name": "lucario-mega",
        "type1": "combat",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10059.png",
            "front_shiny": "shiny/10059.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10060,
        "entry": 460,
        "name": "blizzaroi",
        "form_name": "abomasnow-mega",
        "type1": "plante",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10060.png",
            "front_shiny": "shiny/10060.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10061,
        "entry": 670,
        "name": "floette",
        "form_name": "floette-eternal",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10061.png",
            "front_shiny": "shiny/10061.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10062,
        "entry": 380,
        "name": "latias",
        "form_name": "latias-mega",
        "type1": "dragon",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10062.png",
            "front_shiny": "shiny/10062.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10063,
        "entry": 381,
        "name": "latios",
        "form_name": "latios-mega",
        "type1": "dragon",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10063.png",
            "front_shiny": "shiny/10063.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10064,
        "entry": 260,
        "name": "laggron",
        "form_name": "swampert-mega",
        "type1": "eau",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10064.png",
            "front_shiny": "shiny/10064.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10065,
        "entry": 254,
        "name": "jungko",
        "form_name": "sceptile-mega",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10065.png",
            "front_shiny": "shiny/10065.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10066,
        "entry": 302,
        "name": "ténéfix",
        "form_name": "sableye-mega",
        "type1": "ténèbres",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10066.png",
            "front_shiny": "shiny/10066.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10067,
        "entry": 334,
        "name": "altaria",
        "form_name": "altaria-mega",
        "type1": "dragon",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10067.png",
            "front_shiny": "shiny/10067.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10068,
        "entry": 475,
        "name": "gallame",
        "form_name": "gallade-mega",
        "type1": "psy",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10068.png",
            "front_shiny": "shiny/475-mega.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10069,
        "entry": 531,
        "name": "nanméouïe",
        "form_name": "audino-mega",
        "type1": "normal",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10069.png",
            "front_shiny": "shiny/10069.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10070,
        "entry": 319,
        "name": "sharpedo",
        "form_name": "sharpedo-mega",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10070.png",
            "front_shiny": "shiny/10070.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10071,
        "entry": 80,
        "name": "flagadoss",
        "form_name": "slowbro-mega",
        "type1": "eau",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10071.png",
            "front_shiny": "shiny/10071.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10072,
        "entry": 208,
        "name": "steelix",
        "form_name": "steelix-mega",
        "type1": "acier",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10072.png",
            "front_shiny": "shiny/10072.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10073,
        "entry": 18,
        "name": "roucarnage",
        "form_name": "pidgeot-mega",
        "type1": "normal",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10073.png",
            "front_shiny": "shiny/10073.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10074,
        "entry": 362,
        "name": "oniglali",
        "form_name": "glalie-mega",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10074.png",
            "front_shiny": "shiny/10074.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10075,
        "entry": 719,
        "name": "diancie",
        "form_name": "diancie-mega",
        "type1": "roche",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10075.png",
            "front_shiny": "shiny/719-mega.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10076,
        "entry": 376,
        "name": "métalosse",
        "form_name": "metagross-mega",
        "type1": "acier",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10076.png",
            "front_shiny": "shiny/10076.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10077,
        "entry": 382,
        "name": "kyogre",
        "form_name": "kyogre-primal",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10077.png",
            "front_shiny": "shiny/10077.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10078,
        "entry": 383,
        "name": "groudon",
        "form_name": "groudon-primal",
        "type1": "sol",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10078.png",
            "front_shiny": "shiny/10078.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10079,
        "entry": 384,
        "name": "rayquaza",
        "form_name": "rayquaza-mega",
        "type1": "dragon",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10079.png",
            "front_shiny": "shiny/10079.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10080,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-roche-star",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10080.png",
            "front_shiny": "shiny/10080.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10081,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-belle",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10081.png",
            "front_shiny": "shiny/10081.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10082,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-pop-star",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10082.png",
            "front_shiny": "shiny/10082.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10083,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-phd",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10083.png",
            "front_shiny": "shiny/10083.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10084,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-libre",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10084.png",
            "front_shiny": "shiny/10084.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10085,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-cosplay",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10085.png",
            "front_shiny": "shiny/10085.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10086,
        "entry": 720,
        "name": "hoopa",
        "form_name": "hoopa-unbound",
        "type1": "psy",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10086.png",
            "front_shiny": "shiny/10086.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10087,
        "entry": 323,
        "name": "camérupt",
        "form_name": "camerupt-mega",
        "type1": "feu",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10087.png",
            "front_shiny": "shiny/10087.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10088,
        "entry": 428,
        "name": "lockpin",
        "form_name": "lopunny-mega",
        "type1": "normal",
        "type2": "combat",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10088.png",
            "front_shiny": "shiny/10088.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10089,
        "entry": 373,
        "name": "drattak",
        "form_name": "salamence-mega",
        "type1": "dragon",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10089.png",
            "front_shiny": "shiny/10089.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10090,
        "entry": 15,
        "name": "dardargnan",
        "form_name": "beedrill-mega",
        "type1": "insecte",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10090.png",
            "front_shiny": "shiny/10090.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10091,
        "entry": 19,
        "name": "rattata",
        "form_name": "rattata-alola",
        "type1": "ténèbres",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10091.png",
            "front_shiny": "shiny/10091.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10092,
        "entry": 20,
        "name": "rattatac",
        "form_name": "raticate-alola",
        "type1": "ténèbres",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10092.png",
            "front_shiny": "shiny/10092.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10093,
        "entry": 20,
        "name": "rattatac",
        "form_name": "raticate-totem-alola",
        "type1": "ténèbres",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10093.png",
            "front_shiny": "shiny/20-totem-alola.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10094,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-original-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10094.png",
            "front_shiny": "shiny/25-original-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10095,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-hoenn-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10095.png",
            "front_shiny": "shiny/25-hoenn-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10096,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-sinnoh-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10096.png",
            "front_shiny": "shiny/25-sinnoh-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10097,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-unova-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10097.png",
            "front_shiny": "shiny/25-unova-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10098,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-kalos-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10098.png",
            "front_shiny": "shiny/25-kalos-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10099,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-alola-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10099.png",
            "front_shiny": "shiny/25-alola-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10100,
        "entry": 26,
        "name": "raichu",
        "form_name": "raichu-alola",
        "type1": "électrik",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10100.png",
            "front_shiny": "shiny/10100.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10101,
        "entry": 27,
        "name": "sabelette",
        "form_name": "sandshrew-alola",
        "type1": "glace",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10101.png",
            "front_shiny": "shiny/10101.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10102,
        "entry": 28,
        "name": "sablaireau",
        "form_name": "sandslash-alola",
        "type1": "glace",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10102.png",
            "front_shiny": "shiny/10102.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10103,
        "entry": 37,
        "name": "goupix",
        "form_name": "vulpix-alola",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10103.png",
            "front_shiny": "shiny/10103.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10104,
        "entry": 38,
        "name": "feunard",
        "form_name": "ninetales-alola",
        "type1": "glace",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10104.png",
            "front_shiny": "shiny/10104.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10105,
        "entry": 50,
        "name": "taupiqueur",
        "form_name": "diglett-alola",
        "type1": "sol",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10105.png",
            "front_shiny": "shiny/10105.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10106,
        "entry": 51,
        "name": "triopikeur",
        "form_name": "dugtrio-alola",
        "type1": "sol",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10106.png",
            "front_shiny": "shiny/10106.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10107,
        "entry": 52,
        "name": "miaouss",
        "form_name": "meowth-alola",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10107.png",
            "front_shiny": "shiny/10107.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10108,
        "entry": 53,
        "name": "persian",
        "form_name": "persian-alola",
        "type1": "ténèbres",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10108.png",
            "front_shiny": "shiny/10108.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10109,
        "entry": 74,
        "name": "racaillou",
        "form_name": "geodude-alola",
        "type1": "roche",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10109.png",
            "front_shiny": "shiny/10109.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10110,
        "entry": 75,
        "name": "gravalanch",
        "form_name": "graveler-alola",
        "type1": "roche",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10110.png",
            "front_shiny": "shiny/10110.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10111,
        "entry": 76,
        "name": "grolem",
        "form_name": "golem-alola",
        "type1": "roche",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10111.png",
            "front_shiny": "shiny/10111.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10112,
        "entry": 88,
        "name": "tadmorv",
        "form_name": "grimer-alola",
        "type1": "poison",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10112.png",
            "front_shiny": "shiny/10112.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10113,
        "entry": 89,
        "name": "grotadmorv",
        "form_name": "muk-alola",
        "type1": "poison",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10113.png",
            "front_shiny": "shiny/10113.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10114,
        "entry": 103,
        "name": "noadkoko",
        "form_name": "exeggutor-alola",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10114.png",
            "front_shiny": "shiny/10114.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10115,
        "entry": 105,
        "name": "ossatueur",
        "form_name": "marowak-alola",
        "type1": "feu",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10115.png",
            "front_shiny": "shiny/10115.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10116,
        "entry": 658,
        "name": "amphinobi",
        "form_name": "greninja-battle-bond",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10116.png",
            "front_shiny": "shiny/10116.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10117,
        "entry": 658,
        "name": "amphinobi",
        "form_name": "greninja-ash",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10117.png",
            "front_shiny": "shiny/658-ash.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10118,
        "entry": 718,
        "name": "zygarde",
        "form_name": "zygarde-10-power-construct",
        "type1": "dragon",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10118.png",
            "front_shiny": "shiny/10118.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10119,
        "entry": 718,
        "name": "zygarde",
        "form_name": "zygarde-50-power-construct",
        "type1": "dragon",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10119.png",
            "front_shiny": "shiny/10119.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10120,
        "entry": 718,
        "name": "zygarde",
        "form_name": "zygarde-complete",
        "type1": "dragon",
        "type2": "sol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10120.png",
            "front_shiny": "shiny/10120.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10121,
        "entry": 735,
        "name": "argouste",
        "form_name": "gumshoos-totem",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10121.png",
            "front_shiny": "shiny/735-totem.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10122,
        "entry": 738,
        "name": "lucanon",
        "form_name": "vikavolt-totem",
        "type1": "insecte",
        "type2": "électrik",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10122.png",
            "front_shiny": "shiny/738-totem.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10123,
        "entry": 741,
        "name": "plumeline",
        "form_name": "oricorio-pom-pom",
        "type1": "électrik",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10123.png",
            "front_shiny": "shiny/10123.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10124,
        "entry": 741,
        "name": "plumeline",
        "form_name": "oricorio-pau",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10124.png",
            "front_shiny": "shiny/10124.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10125,
        "entry": 741,
        "name": "plumeline",
        "form_name": "oricorio-sensu",
        "type1": "spectre",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10125.png",
            "front_shiny": "shiny/10125.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10126,
        "entry": 745,
        "name": "lougaroc",
        "form_name": "lycanroc-midnight",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10126.png",
            "front_shiny": "shiny/10126.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10127,
        "entry": 746,
        "name": "froussardine",
        "form_name": "wishiwashi-school",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10127.png",
            "front_shiny": "shiny/10127.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10128,
        "entry": 754,
        "name": "floramantis",
        "form_name": "lurantis-totem",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10128.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10129,
        "entry": 758,
        "name": "malamandre",
        "form_name": "salazzle-totem",
        "type1": "poison",
        "type2": "feu",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10129.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10130,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-orange-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10130.png",
            "front_shiny": "shiny/774-orange-meteor.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10131,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-yellow-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10131.png",
            "front_shiny": "shiny/774-yellow-meteor.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10132,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-green-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10132.png",
            "front_shiny": "shiny/774-green-meteor.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10133,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-blue-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10133.png",
            "front_shiny": "shiny/774-blue-meteor.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10134,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-indigo-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10134.png",
            "front_shiny": "shiny/774-indigo-meteor.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10135,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-violet-meteor",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10135.png",
            "front_shiny": "shiny/774-violet-meteor.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10136,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-red",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10136.png",
            "front_shiny": "shiny/10136.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10137,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-orange",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10137.png",
            "front_shiny": "shiny/10137.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10138,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-yellow",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10138.png",
            "front_shiny": "shiny/10138.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10139,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-green",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10139.png",
            "front_shiny": "shiny/10139.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10140,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-blue",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10140.png",
            "front_shiny": "shiny/10140.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10141,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-indigo",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10141.png",
            "front_shiny": "shiny/10141.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10142,
        "entry": 774,
        "name": "météno",
        "form_name": "minior-violet",
        "type1": "roche",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10142.png",
            "front_shiny": "shiny/10142.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10143,
        "entry": 778,
        "name": "mimiqui",
        "form_name": "mimikyu-busted",
        "type1": "spectre",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10143.png",
            "front_shiny": "shiny/10143.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10144,
        "entry": 778,
        "name": "mimiqui",
        "form_name": "mimikyu-totem-disguised",
        "type1": "spectre",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10144.png",
            "front_shiny": "shiny/778-totem-disguised.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10145,
        "entry": 778,
        "name": "mimiqui",
        "form_name": "mimikyu-totem-busted",
        "type1": "spectre",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10145.png",
            "front_shiny": "shiny/778-totem-busted.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10146,
        "entry": 784,
        "name": "ékaïser",
        "form_name": "kommo-o-totem",
        "type1": "dragon",
        "type2": "combat",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10146.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10147,
        "entry": 801,
        "name": "magearna",
        "form_name": "magearna-original",
        "type1": "acier",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10147.png",
            "front_shiny": "shiny/10147.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10148,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-partner-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10148.png",
            "front_shiny": "shiny/25-partner-cap.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10149,
        "entry": 105,
        "name": "ossatueur",
        "form_name": "marowak-totem",
        "type1": "feu",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10149.png",
            "front_shiny": "shiny/105-totem.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10150,
        "entry": 743,
        "name": "rubombelle",
        "form_name": "ribombee-totem",
        "type1": "insecte",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10150.png",
            "front_shiny": "shiny/743-totem.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10151,
        "entry": 744,
        "name": "rocabot",
        "form_name": "rockruff-own-tempo",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10151.png",
            "front_shiny": "shiny/744-own-tempo.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10152,
        "entry": 745,
        "name": "lougaroc",
        "form_name": "lycanroc-dusk",
        "type1": "roche",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10152.png",
            "front_shiny": "shiny/10152.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10153,
        "entry": 752,
        "name": "tarenbulle",
        "form_name": "araquanid-totem",
        "type1": "eau",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10153.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10154,
        "entry": 777,
        "name": "togedemaru",
        "form_name": "togedemaru-totem",
        "type1": "électrik",
        "type2": "acier",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10154.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10155,
        "entry": 800,
        "name": "necrozma",
        "form_name": "necrozma-dusk",
        "type1": "psy",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10155.png",
            "front_shiny": "shiny/10155.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10156,
        "entry": 800,
        "name": "necrozma",
        "form_name": "necrozma-dawn",
        "type1": "psy",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10156.png",
            "front_shiny": "shiny/10156.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10157,
        "entry": 800,
        "name": "necrozma",
        "form_name": "necrozma-ultra",
        "type1": "psy",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10157.png",
            "front_shiny": "shiny/10157.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10158,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-starter",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "25-starter.png",
            "front_shiny": null,
            "front_female": "female/25-starter.png",
            "front_shiny_female": null
        }
    },
    {
        "id": 10159,
        "entry": 133,
        "name": "évoli",
        "form_name": "eevee-starter",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "133-starter.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10160,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-world-cap",
        "type1": "électrik",
        "type2": null,
        "has_female": true,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "25-world-cap.png",
            "front_shiny": null,
            "front_female": "female/25-world-cap.png",
            "front_shiny_female": null
        }
    },
    {
        "id": 10161,
        "entry": 52,
        "name": "miaouss",
        "form_name": "meowth-galar",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10161.png",
            "front_shiny": "shiny/10161.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10162,
        "entry": 77,
        "name": "ponyta",
        "form_name": "ponyta-galar",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10162.png",
            "front_shiny": "shiny/10162.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10163,
        "entry": 78,
        "name": "galopa",
        "form_name": "rapidash-galar",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10163.png",
            "front_shiny": "shiny/10163.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10164,
        "entry": 79,
        "name": "ramoloss",
        "form_name": "slowpoke-galar",
        "type1": "psy",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10164.png",
            "front_shiny": "shiny/10164.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10165,
        "entry": 80,
        "name": "flagadoss",
        "form_name": "slowbro-galar",
        "type1": "poison",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10165.png",
            "front_shiny": "shiny/10165.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10166,
        "entry": 83,
        "form_name": "farfetchd-galar",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10166.png",
            "front_shiny": "shiny/10166.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10167,
        "entry": 110,
        "name": "smogogo",
        "form_name": "weezing-galar",
        "type1": "poison",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10167.png",
            "front_shiny": "shiny/10167.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10168,
        "entry": 122,
        "form_name": "mr-mime-galar",
        "type1": "glace",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10168.png",
            "front_shiny": "shiny/10168.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10169,
        "entry": 144,
        "name": "artikodin",
        "form_name": "articuno-galar",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10169.png",
            "front_shiny": "shiny/10169.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10170,
        "entry": 145,
        "name": "électhor",
        "form_name": "zapdos-galar",
        "type1": "combat",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10170.png",
            "front_shiny": "shiny/10170.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10171,
        "entry": 146,
        "name": "sulfura",
        "form_name": "moltres-galar",
        "type1": "ténèbres",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10171.png",
            "front_shiny": "shiny/10171.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10172,
        "entry": 199,
        "name": "roigada",
        "form_name": "slowking-galar",
        "type1": "poison",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10172.png",
            "front_shiny": "shiny/10172.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10173,
        "entry": 222,
        "name": "corayon",
        "form_name": "corsola-galar",
        "type1": "spectre",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10173.png",
            "front_shiny": "shiny/10173.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10174,
        "entry": 263,
        "name": "zigzaton",
        "form_name": "zigzagoon-galar",
        "type1": "ténèbres",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10174.png",
            "front_shiny": "shiny/10174.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10175,
        "entry": 264,
        "name": "linéon",
        "form_name": "linoone-galar",
        "type1": "ténèbres",
        "type2": "normal",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10175.png",
            "front_shiny": "shiny/10175.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10176,
        "entry": 554,
        "name": "darumarond",
        "form_name": "darumaka-galar",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10176.png",
            "front_shiny": "shiny/10176.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10177,
        "entry": 555,
        "name": "darumacho",
        "form_name": "darmanitan-galar-standard",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10177.png",
            "front_shiny": "shiny/10177.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10178,
        "entry": 555,
        "name": "darumacho",
        "form_name": "darmanitan-galar-zen",
        "type1": "glace",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10178.png",
            "front_shiny": "shiny/10178.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10179,
        "entry": 562,
        "name": "tutafeh",
        "form_name": "yamask-galar",
        "type1": "sol",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10179.png",
            "front_shiny": "shiny/10179.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10180,
        "entry": 618,
        "name": "limonde",
        "form_name": "stunfisk-galar",
        "type1": "sol",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10180.png",
            "front_shiny": "shiny/10180.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10181,
        "entry": 718,
        "name": "zygarde",
        "form_name": "zygarde-10",
        "type1": "dragon",
        "type2": "sol",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "718-10.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10182,
        "entry": 845,
        "name": "nigosier",
        "form_name": "cramorant-gulping",
        "type1": "vol",
        "type2": "eau",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "845-gulping.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10183,
        "entry": 845,
        "name": "nigosier",
        "form_name": "cramorant-gorging",
        "type1": "vol",
        "type2": "eau",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "845-gorging.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10184,
        "entry": 849,
        "name": "salarsen",
        "form_name": "toxtricity-low-key",
        "type1": "électrik",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10184.png",
            "front_shiny": "shiny/10184.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10185,
        "entry": 875,
        "name": "bekaglaçon",
        "form_name": "eiscue-noice",
        "type1": "glace",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10185.png",
            "front_shiny": "shiny/10185.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10186,
        "entry": 876,
        "name": "wimessir",
        "form_name": "indeedee-female",
        "type1": "psy",
        "type2": "normal",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10186.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10187,
        "entry": 877,
        "name": "morpeko",
        "form_name": "morpeko-hangry",
        "type1": "électrik",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "877-hangry.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10188,
        "entry": 888,
        "name": "zacian",
        "form_name": "zacian-crowned",
        "type1": "fée",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10188.png",
            "front_shiny": "shiny/10188.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10189,
        "entry": 889,
        "name": "zamazenta",
        "form_name": "zamazenta-crowned",
        "type1": "combat",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10189.png",
            "front_shiny": "shiny/10189.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10190,
        "entry": 890,
        "name": "éthernatos",
        "form_name": "eternatus-eternamax",
        "type1": "poison",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10190.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10191,
        "entry": 892,
        "name": "shifours",
        "form_name": "urshifu-rapid-strike",
        "type1": "combat",
        "type2": "eau",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10191.png",
            "front_shiny": "shiny/10191.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10192,
        "entry": 893,
        "name": "zarude",
        "form_name": "zarude-dada",
        "type1": "ténèbres",
        "type2": "plante",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen8",
        "sprites": {
            "front_default": "893-dada.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10193,
        "entry": 898,
        "name": "sylveroy",
        "form_name": "calyrex-glace",
        "type1": "psy",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10193.png",
            "front_shiny": "shiny/10193.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10194,
        "entry": 898,
        "name": "sylveroy",
        "form_name": "calyrex-shadow",
        "type1": "psy",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10194.png",
            "front_shiny": "shiny/10194.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10195,
        "entry": 3,
        "name": "florizarre",
        "form_name": "venusaur-gmax",
        "type1": "plante",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10195.png",
            "front_shiny": "shiny/10195.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10196,
        "entry": 6,
        "name": "dracaufeu",
        "form_name": "charizard-gmax",
        "type1": "feu",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10196.png",
            "front_shiny": "shiny/10196.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10197,
        "entry": 9,
        "name": "tortank",
        "form_name": "blastoise-gmax",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10197.png",
            "front_shiny": "shiny/10197.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10198,
        "entry": 12,
        "name": "papilusion",
        "form_name": "butterfree-gmax",
        "type1": "insecte",
        "type2": "vol",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10198.png",
            "front_shiny": "shiny/10198.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10199,
        "entry": 25,
        "name": "pikachu",
        "form_name": "pikachu-gmax",
        "type1": "électrik",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10199.png",
            "front_shiny": "shiny/10199.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10200,
        "entry": 52,
        "name": "miaouss",
        "form_name": "meowth-gmax",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10200.png",
            "front_shiny": "shiny/10200.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10201,
        "entry": 68,
        "name": "mackogneur",
        "form_name": "machamp-gmax",
        "type1": "combat",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10201.png",
            "front_shiny": "shiny/10201.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10202,
        "entry": 94,
        "name": "ectoplasma",
        "form_name": "gengar-gmax",
        "type1": "spectre",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10202.png",
            "front_shiny": "shiny/10202.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10203,
        "entry": 99,
        "name": "krabboss",
        "form_name": "kingler-gmax",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10203.png",
            "front_shiny": "shiny/10203.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10204,
        "entry": 131,
        "name": "lokhlass",
        "form_name": "lapras-gmax",
        "type1": "eau",
        "type2": "glace",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10204.png",
            "front_shiny": "shiny/10204.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10205,
        "entry": 133,
        "name": "évoli",
        "form_name": "eevee-gmax",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10205.png",
            "front_shiny": "shiny/10205.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10206,
        "entry": 143,
        "name": "ronflex",
        "form_name": "snorlax-gmax",
        "type1": "normal",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10206.png",
            "front_shiny": "shiny/10206.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10207,
        "entry": 569,
        "name": "miasmax",
        "form_name": "garbodor-gmax",
        "type1": "poison",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10207.png",
            "front_shiny": "shiny/10207.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10208,
        "entry": 809,
        "name": "melmetal",
        "form_name": "melmetal-gmax",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10208.png",
            "front_shiny": "shiny/10208.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10209,
        "entry": 812,
        "name": "gorythmic",
        "form_name": "rillaboom-gmax",
        "type1": "plante",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10209.png",
            "front_shiny": "shiny/10209.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10210,
        "entry": 815,
        "name": "pyrobut",
        "form_name": "cinderace-gmax",
        "type1": "feu",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10210.png",
            "front_shiny": "shiny/10210.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10211,
        "entry": 818,
        "name": "lézargus",
        "form_name": "inteleon-gmax",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10211.png",
            "front_shiny": "shiny/10211.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10212,
        "entry": 823,
        "name": "corvaillus",
        "form_name": "corviknight-gmax",
        "type1": "vol",
        "type2": "acier",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10212.png",
            "front_shiny": "shiny/10212.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10213,
        "entry": 826,
        "name": "astronelle",
        "form_name": "orbeetle-gmax",
        "type1": "insecte",
        "type2": "psy",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10213.png",
            "front_shiny": "shiny/10213.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10214,
        "entry": 834,
        "name": "torgamord",
        "form_name": "drednaw-gmax",
        "type1": "eau",
        "type2": "roche",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10214.png",
            "front_shiny": "shiny/10214.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10215,
        "entry": 839,
        "name": "monthracite",
        "form_name": "coalossal-gmax",
        "type1": "roche",
        "type2": "feu",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10215.png",
            "front_shiny": "shiny/10215.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10216,
        "entry": 841,
        "name": "pomdrapi",
        "form_name": "flapple-gmax",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10216.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10217,
        "entry": 842,
        "name": "dratatin",
        "form_name": "appletun-gmax",
        "type1": "plante",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10217.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10218,
        "entry": 844,
        "name": "dunaconda",
        "form_name": "sandaconda-gmax",
        "type1": "sol",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10218.png",
            "front_shiny": "shiny/10218.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10219,
        "entry": 849,
        "name": "salarsen",
        "form_name": "toxtricity-amped-gmax",
        "type1": "électrik",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10219.png",
            "front_shiny": "shiny/10219.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10220,
        "entry": 851,
        "name": "scolocendre",
        "form_name": "centiskorch-gmax",
        "type1": "feu",
        "type2": "insecte",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10220.png",
            "front_shiny": "shiny/10220.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10221,
        "entry": 858,
        "name": "sorcilence",
        "form_name": "hatterene-gmax",
        "type1": "psy",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10221.png",
            "front_shiny": "shiny/10221.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10222,
        "entry": 861,
        "name": "angoliath",
        "form_name": "grimmsnarl-gmax",
        "type1": "ténèbres",
        "type2": "fée",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10222.png",
            "front_shiny": "shiny/10222.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10223,
        "entry": 869,
        "name": "charmilly",
        "form_name": "alcremie-gmax",
        "type1": "fée",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10223.png",
            "front_shiny": "shiny/10223.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10224,
        "entry": 879,
        "name": "pachyradjah",
        "form_name": "copperajah-gmax",
        "type1": "acier",
        "type2": null,
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10224.png",
            "front_shiny": "shiny/10224.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10225,
        "entry": 884,
        "name": "duralugon",
        "form_name": "duraludon-gmax",
        "type1": "acier",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10225.png",
            "front_shiny": "shiny/10225.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10226,
        "entry": 892,
        "name": "shifours",
        "form_name": "urshifu-single-strike-gmax",
        "type1": "combat",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10226.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10227,
        "entry": 892,
        "name": "shifours",
        "form_name": "urshifu-rapid-strike-gmax",
        "type1": "combat",
        "type2": "eau",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10227.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10228,
        "entry": 849,
        "name": "salarsen",
        "form_name": "toxtricity-low-key-gmax",
        "type1": "électrik",
        "type2": "poison",
        "has_female": false,
        "has_shiny": true,
        "sprite_type": "gen5",
        "sprites": {
            "front_default": "10228.png",
            "front_shiny": "shiny/10228.png",
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10229,
        "entry": 58,
        "name": "caninos",
        "form_name": "growlithe-hisui",
        "type1": "feu",
        "type2": "roche",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10229.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10230,
        "entry": 59,
        "name": "arcanin",
        "form_name": "arcanine-hisui",
        "type1": "feu",
        "type2": "roche",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10230.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10231,
        "entry": 100,
        "name": "voltorbe",
        "form_name": "voltorb-hisui",
        "type1": "électrik",
        "type2": "plante",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10231.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10232,
        "entry": 101,
        "name": "électrode",
        "form_name": "electrode-hisui",
        "type1": "électrik",
        "type2": "plante",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10232.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10233,
        "entry": 157,
        "name": "typhlosion",
        "form_name": "typhlosion-hisui",
        "type1": "feu",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10233.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10234,
        "entry": 211,
        "name": "qwilfish",
        "form_name": "qwilfish-hisui",
        "type1": "ténèbres",
        "type2": "poison",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10234.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10235,
        "entry": 215,
        "name": "farfuret",
        "form_name": "sneasel-hisui",
        "type1": "combat",
        "type2": "poison",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10235.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10236,
        "entry": 503,
        "name": "clamiral",
        "form_name": "samurott-hisui",
        "type1": "eau",
        "type2": "ténèbres",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10236.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10237,
        "entry": 549,
        "name": "fragilady",
        "form_name": "lilligant-hisui",
        "type1": "plante",
        "type2": "combat",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10237.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10238,
        "entry": 570,
        "name": "zorua",
        "form_name": "zorua-hisui",
        "type1": "normal",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10238.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10239,
        "entry": 571,
        "name": "zoroark",
        "form_name": "zoroark-hisui",
        "type1": "normal",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10239.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10240,
        "entry": 628,
        "name": "gueriaigle",
        "form_name": "braviary-hisui",
        "type1": "psy",
        "type2": "vol",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10240.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10241,
        "entry": 705,
        "name": "colimucus",
        "form_name": "sliggoo-hisui",
        "type1": "acier",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10241.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10242,
        "entry": 706,
        "name": "muplodocus",
        "form_name": "goodra-hisui",
        "type1": "acier",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10242.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10243,
        "entry": 713,
        "name": "séracrawl",
        "form_name": "avalugg-hisui",
        "type1": "glace",
        "type2": "roche",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10243.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10244,
        "entry": 724,
        "name": "archéduc",
        "form_name": "decidueye-hisui",
        "type1": "plante",
        "type2": "combat",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10244.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10245,
        "entry": 483,
        "name": "dialga",
        "form_name": "dialga-origin",
        "type1": "acier",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10245.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10246,
        "entry": 484,
        "name": "palkia",
        "form_name": "palkia-origin",
        "type1": "eau",
        "type2": "dragon",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10246.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10247,
        "entry": 550,
        "name": "bargantua",
        "form_name": "basculin-white-striped",
        "type1": "eau",
        "type2": null,
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10247.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10248,
        "entry": 902,
        "name": "paragruel",
        "form_name": "basculegion-female",
        "type1": "eau",
        "type2": "spectre",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10248.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    },
    {
        "id": 10249,
        "entry": 905,
        "name": "amovénus",
        "form_name": "enamorus-therian",
        "type1": "fée",
        "type2": "vol",
        "has_female": false,
        "has_shiny": false,
        "sprite_type": "artwork",
        "sprites": {
            "front_default": "10249.png",
            "front_shiny": null,
            "front_female": null,
            "front_shiny_female": null
        }
    }
]