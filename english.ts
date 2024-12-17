import { emojis } from '@/utils/constants.js';
import { LangRP } from '@/utils/interfaces/roleplay.js';

export default {
    commands: {
        roll: {
            name: 'roll',
            description: 'Roll a random number',
            options: {
                from: {
                    name: 'from',
                    description: 'The maximum number to roll from, default is 10',
                    limit: "You can't roll from more than **1000**!",
                },
            },
            response: (num: number) => `You rolled **${num}**!`,
        },
        ping: {
            name: 'ping',
            description: 'Ping!',
            pong: 'Pong!',
        },
        flip: {
            name: 'flip',
            description: 'Flip a coin and see the result(s)!',
            response: (head: number, tails: number) =>
                head && tails ? `You got **${head}** head and **${tails}** tails out of **${head + tails}** flip(s)!` : head ? `You got **${head}** head!` : `You got **${tails}** tails!`,
            options: {
                times: {
                    name: 'times',
                    description: 'The amount of times you want to flip the coin',
                    limit: (times: number) => `You can't flip more than **${times}** times!`,
                },
            },
        },
        get tictactoe() {
            return {
                name: 'tic-tac-toe',
                description: 'Play a game of tic-tac-toe!',
                options: this.rps.options,
                responses: {
                    win: this.rps.response.win,
                    tie: this.rps.response.tie,
                    timeout: this.rps.response.timeout,
                    notYourTurn: "It's not your turn!",
                },
            };
        },
        rps: {
            name: 'rps',
            description: 'Play rock, paper, scissors with the bot or a friend!',
            options: {
                user: {
                    name: 'user',
                    description: 'The user you want to play with',
                    limit: {
                        yourself: "You can't play with yourself!",
                        bot: "You can't play with another bot!",
                    },
                },
            },
            response: {
                choose: 'Choose your weapons!',
                chose: (userId: string, choice: string) => `<@${userId}> chose ${choice}!`,
                win: (userId: string) => `<@${userId}> won`,
                lose: (userId: string) => `<@${userId}> lost!`,
                tie: "It's a tie!",
                timeout: (userId: string) => `<@${userId}> took too long to choose!`,
            },
            choices: {
                rock: 'rock',
                paper: 'paper',
                scissors: 'scissors',
            },
        },
        roleplay: {
            name: 'roleplay',
            description: 'Use an action by yourself or on a user!',
            // user, 0 = no user, 1 = optional, 2 = required (for user2)
            options: {
                user: {
                    name: 'user',
                    description: 'The user you want to use the action on!',
                },
                text: {
                    name: 'text',
                    description: 'The text you want to send with the action!',
                },
                // rp options
                rp: {
                    baka: {
                        name: 'baka',
                        user: 2,
                        description: 'Call someone a baka!',
                        user2: (_: string, user2: string) => `baka bakaa <@${user2}>`,
                    },
                    bite: {
                        name: 'bite',
                        user: 2,
                        description: 'Bite someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> bites <@${user2}>`,
                    },
                    blush: {
                        name: 'blush',
                        user: 1,
                        description: 'Blush!',
                        user1: (user1: string) => `<@${user1}> blushes`,
                        user2: (user1: string, user2: string) => `<@${user1}> blushes to <@${user2}>`,
                    },
                    bored: {
                        name: 'bored',
                        user: 0,
                        description: "Show that you're bored!",
                        user1: (user1: string) => `<@${user1}> is feeling bored`,
                    },
                    cry: {
                        name: 'cry',
                        user: 0,
                        description: 'Cry!',
                        user1: (user1: string) => `<@${user1}> is crying!`,
                    },
                    cuddle: {
                        name: 'cuddle',
                        user: 2,
                        description: 'Cuddle with someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> cuddles <@${user2}>`,
                    },
                    dance: {
                        name: 'dance',
                        user: 1,
                        description: 'Dance!',
                        user1: (user1: string) => `<@${user1}> is dancing!`,
                        user2: (user1: string, user2: string) => `<@${user1}> dances with <@${user2}>`,
                    },
                    facepalm: {
                        name: 'facepalm',
                        user: 0,
                        description: 'Facepalm!',
                        user1: (user1: string) => `<@${user1}> facepalms`,
                    },
                    feed: {
                        name: 'feed',
                        user: 2,
                        description: 'Feed someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> feeds <@${user2}>`,
                    },
                    happy: {
                        name: 'happy',
                        user: 0,
                        description: "Show that you're happy!",
                        user1: (user1: string) => `<@${user1}> is happy :D`,
                    },
                    highfive: {
                        name: 'highfive',
                        user: 2,
                        description: 'Highfive someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> highfives <@${user2}>`,
                    },
                    hug: {
                        name: 'hug',
                        user: 2,
                        description: 'Hug someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> hugs <@${user2}>`,
                    },
                    kiss: {
                        name: 'kiss',
                        user: 2,
                        description: 'Kiss someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> kisses <@${user2}>`,
                    },
                    laugh: {
                        name: 'laugh',
                        user: 0,
                        description: 'Laugh!',
                        user1: (user1: string) => `<@${user1}> is laughing`,
                    },
                    pat: {
                        name: 'pat',
                        user: 2,
                        description: 'Pat someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> pats <@${user2}>`,
                    },
                    pout: {
                        name: 'pout',
                        user: 0,
                        description: 'Pout!',
                        user1: (user1: string) => `<@${user1}> pouts`,
                    },
                    shrug: {
                        name: 'shrug',
                        user: 0,
                        description: 'Shrug!',
                        user1: (user1: string) => `<@${user1}> shrugs (￣y▽,￣)╭ `,
                    },
                    slap: {
                        name: 'slap',
                        user: 2,
                        description: 'Slap someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> slaps <@${user2}>`,
                    },
                    sleep: {
                        name: 'sleep',
                        user: 0,
                        description: 'Go to sleep!',
                        user1: (user1: string) => `shhh! <@${user1}> is sleeping!`,
                    },
                    smile: {
                        name: 'smile',
                        user: 0,
                        description: 'Smile!',
                        user1: (user1: string) => `<@${user1}> smiles`,
                    },
                    smug: {
                        name: 'smug',
                        user: 0,
                        description: 'Be Smug!',
                        user1: (user1: string) => `<@${user1}> is getting too smug`,
                    },
                    stare: {
                        name: 'stare',
                        user: 1,
                        description: 'Stare at someone!',
                        user1: (user1: string) => `<@${user1}> is staring at you!`,
                        user2: (user1: string, user2: string) => `<@${user1}> is staring at <@${user2}>`,
                    },
                    think: {
                        name: 'think',
                        user: 0,
                        description: 'Think, hmm!',
                        user1: (user1: string) => `<@${user1}> is thinking`,
                    },
                    thumbsup: {
                        name: 'thumbsup',
                        user: 1,
                        description: 'Give a thumbs up!',
                        user1: (user1: string) => `<@${user1}> gives a thumbs up!`,
                        user2: (user1: string, user2: string) => `<@${user1}> is giving <@${user2}> a thumbs up!`,
                    },
                    tickle: {
                        name: 'tickle',
                        user: 2,
                        description: 'Tickle someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> tickles <@${user2}>`,
                    },
                    wave: {
                        name: 'wave',
                        user: 1,
                        description: 'Wave!',
                        user1: (user1: string) => `<@${user1}> 👋`,
                        user2: (user1: string, user2: string) => `<@${user1}> waves to <@${user2}>`,
                    },
                    wink: {
                        name: 'wink',
                        user: 1,
                        description: 'Wink!',
                        user1: (user1: string) => `<@${user1}> winks ;)`,
                        user2: (user1: string, user2: string) => `<@${user1}> winks to <@${user2}>`,
                    },
                    kick: {
                        name: 'kick',
                        user: 2,
                        description: 'Kick someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> kicks <@${user2}>`,
                    },
                    handhold: {
                        name: 'handhold',
                        user: 2,
                        description: "Hold someone's hand!",
                        user2: (user1: string, user2: string) => `<@${user1}> holds <@${user2}>'s hands`,
                    },
                    punch: {
                        name: 'punch',
                        user: 2,
                        description: 'Punch someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> punches <@${user2}>`,
                    },
                    shoot: {
                        name: 'shoot',
                        user: 2,
                        description: 'Shoot someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> shoots <@${user2}>!!`,
                    },
                    yeet: {
                        name: 'yeet',
                        user: 2,
                        description: 'Yeet someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> yeets <@${user2}>!`,
                    },
                    poke: {
                        name: 'poke',
                        user: 2,
                        description: 'Poke someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> pokes <@${user2}>`,
                    },
                    nod: {
                        name: 'nod',
                        user: 1,
                        description: 'Nod!',
                        user1: (user1: string) => `<@${user1}> nods`,
                        user2: (user1: string, user2: string) => `<@${user1}> nods to <@${user2}>`,
                    },
                    nom: {
                        name: 'nom',
                        user: 0,
                        description: 'Eat some noms!',
                        user1: (user1: string) => `<@${user1}> nomnomnom`,
                    },
                    nope: {
                        name: 'nope',
                        user: 1,
                        description: 'Show your disapproval!',
                        user1: (user1: string) => `<@${user1}> nuhuh`,
                        user2: (_: string, user2: string) => `nuhuh <@${user2}>`,
                    },
                    handshake: {
                        name: 'handshake',
                        user: 2,
                        description: "Shake someone's hand!",
                        user2: (user1: string, user2: string) => `<@${user1}> shakes <@${user2}>'s hands`,
                    },
                    lurk: {
                        name: 'lurk',
                        user: 0,
                        description: 'Lurk!',
                        user1: (user1: string) => `<@${user1}> is lurking`,
                    },
                    peck: {
                        name: 'peck',
                        user: 2,
                        description: 'Peck someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> pecks <@${user2}>`,
                    },
                    yawn: {
                        name: 'yawn',
                        user: 0,
                        description: 'Yawn!',
                        user1: (user1: string) => `<@${user1}> is sleepy`,
                    },
                    comfy: {
                        name: 'comfy',
                        user: 0,
                        description: 'Be comfy!',
                        user1: (user1: string) => `<@${user1}> is feeling comfy!`,
                    },
                    fluff: {
                        name: 'fluff',
                        user: 2,
                        description: 'Fluff someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> fluffs <@${user2}>`,
                    },
                    lick: {
                        name: 'lick',
                        user: 2,
                        description: 'Lick someone!',
                        user2: (user1: string, user2: string) => `<@${user1}> licks <@${user2}>`,
                    },
                    tail: {
                        name: 'tail',
                        user: 1,
                        description: 'Show your tail!',
                        user1: (user1: string) => `<@${user1}> swings their tail`,
                        user2: (user1: string, user2: string) => `<@${user1}> is swinging their tail at <@${user2}>`,
                    },
                    lay: {
                        name: 'lay',
                        user: 0,
                        description: 'Lay down!',
                        user1: (user1: string) => `<@${user1}> lays down`,
                    },
                    angry: {
                        name: 'angry',
                        user: 1,
                        description: 'Show your anger!',
                        user1: (user1: string) => `<@${user1}> is angry!`,
                        user2: (user1: string, user2: string) => `<@${user1}> is angry at <@${user2}>!`,
                    },
                } as Record<string, LangRP>,
            },
            error: {
                onYourSelf: "You can't do this to yourself!",
                thereWasAnError: 'There was an error!',
                noResponse: "Couldn't find a reponse for that action!",
            },
        },
        r34: {
            name: 'r34',
            description: 'Rule#34 If it exists there is porn of it.',
            options: {
                cheatsheet: {
                    name: 'cheatsheet',
                    description: "Return cheatsheet for r34 and bot's command",
                    content: [
                        `**R34** Cheatsheet: https://rule34.xxx/index.php?page=help&topic=cheatsheet`,
                        ``,
                        `# Bot's Cheatsheet`,
                        `**Query**: \`query:<query>\`, search for everything with the query, **R34**'s Cheatsheet ALL applies here`,
                        `**Or**: \`or:<query>\`, functions as **R34**'s \`or\` search, just making it easier for the user`,
                        `**Not**: \`not:<query>\`, functions as **R34**'s \`not/-\` search, just adding (-) before each tag`,
                    ].join('\n'),
                },
                search: {
                    name: 'search',
                    description: 'Search for a post, separate tags with a comma (,)',
                    query: {
                        name: 'query',
                        description: 'The query to search for by tags',
                    },
                    or: {
                        name: 'or',
                        description: 'Search for posts that have one of the included tags.',
                    },
                    not: {
                        name: 'not',
                        description: 'Search for posts that does not have the included tags.',
                    },
                },
            },
            responses: {
                goToPost: 'Go to post',
                tags: 'Tags',
                rating: 'Rating',
                score: 'Score',
                noImage: 'No image found',
            },
        },
        settings: {
            name: 'settings',
            description: 'Change bot settings',
            roleplay: {
                ratelimit: `You can update Roleplay Commands only once every day!`,
                name: 'roleplay',
                description: 'Setup, sync or delete Roleplay Commands as guild slash commands',
                setup: {
                    name: 'setup',
                    description: 'Setup Roleplay Guild Slash Commands in your server',
                    success: 'Successfully setup Roleplay Commands!',
                    fail: 'Failed to setup Roleplay Commands!',
                    alreadyEnabled: 'Roleplay Commands are already enabled!',
                },
                sync: {
                    name: 'sync',
                    description: 'Sync Roleplay Guild Slash Commands with the latest changes',
                    success: 'Roleplay Commands are now up-to-date!',
                    fail: 'Failed to setup Roleplay Commands!',
                    notEnabled: 'Roleplay Commands are not enabled!',
                },
                delete: {
                    name: 'delete',
                    description: 'Delete Roleplay Guild Slash Commands from your server',
                    success: 'Successfully deleted Roleplay Commands!',
                    fail: 'Failed to delete Roleplay Commands!',
                    alreadyDisabled: 'Roleplay Commands are already disabled!',
                },
            },
            exp: {
                name: 'exp',
                description: 'Change the EXP system settings',
            },
            lang: {
                name: 'language',
                description: 'View or Change the bot language',
                placeholder: 'Select a language',
                responses: {
                    current: (currLang: string) => `Current Language: ${currLang}`,
                    success: (newLang: string) => `Language has been changed to \`${newLang}\`!`,
                    invalid: 'Invalid language selected!',
                },
            },
        },
        daily: {
            name: 'daily',
            description: 'Claim your daily reward!',
            responses: {
                alreadyClaimed: 'You have already claimed your daily reward today!',
                success: (currency: number, streak: number, weekend?: number) =>
                    [
                        `You have claimed **${currency}** ${emojis.currency} as your daily reward with a **${streak}** ${emojis.fire} day streak!`,
                        weekend ? `+ **${weekend}** ${emojis.currency} as a weekend bonus!\n` : '',
                        `Totaling: **${currency + (weekend ?? 0)}** ${emojis.currency}`,
                    ].join('\n'),
            },
        },
        balance: {
            name: 'balance',
            description: "Check your or someone's balance",
            response: (currency: number) => `Balance: **${currency}** ${emojis.currency}`,
            voteForMore: 'Vote for more!',
            options: {
                user: {
                    name: 'user',
                    description: 'The user to check balance for',
                },
            },
        },
    },
    interactions: {
        errors: {
            expired: 'This interaction has expired!',
            notForYou: 'This interaction is not for you!',
            unknown: 'An unknown error has occurred!',
            noDMs: 'This interaction is not available in DMs!',
            guildOnly: 'This interaction is only available in guilds!',
            noDB: 'Could not fetch data from the database!',
        },
        intTimeout: 'Interaction timed out',
        page: (page: number, pages: number) => `Page ${page} of ${pages}`,
        video: 'Video',
    },
};
