(function () {
    window.isDev = true;
    var slotData = [{
        unlocked: true,
        used: true,
        cost: 0
    }, {
        unlocked: false,
        used: false,
        cost: 50
    }, {
        unlocked: false,
        used: false,
        cost: 200
    }, {
        unlocked: false,
        used: false,
        cost: 1e3
    }, {
        unlocked: false,
        used: false,
        cost: 1e3
    }, {
        unlocked: false,
        used: false,
        cost: 2e3
    }, {
        unlocked: false,
        used: false,
        cost: 2e3
    }, {
        unlocked: false,
        used: false,
        cost: 3e3
    }];
    var lineBreak = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var mainDisplayText = `
    <div style="font-size: 40px; width: 100%; text-align: center;">
    Game History
    </div>
    <hr>
    <div style="margin-left: 10px;">
    Beta V31 (Oct 21, 2023):<br>
    - New Game Mode<br>
    - Progress reseting actually works now<br>
    - In 6v6 Matches: Enemies will have x2 more shapes than you<br>
    - Cinder Dmg: -10%<br>
    - Evora and Veyron Dmg: -24%<br>
    - Evora and Veyron Ammo: 125 -> 175<br>
    - Fixed UI Displays<br>
    - Game play fixes<br>
    - On Extemination Game Mode, the game will only render 250 enemies.<br><br>

    Beta V30 (Oct 19, 2023 - Oct 20, 2023):<br>
    - New Module(s): Repair Amp and Anti Control<br>
    - Bug Fixes<br>
    - Visual Changes<br>
    - Orange Pentagon Bonus Dmg with Cinder: 100% -> 25%<br><br>

    Beta V29 (Oct 18, 2023):<br>
    - Fixed bullets not touching enemies and dealing damage<br>
    - Tan Circle DP Effect Bonus:<br>
    ${lineBreak}DP per stack: 1 -> 2<br>
    ${lineBreak}Max Effect Limit: 500 -> 250<br>
    ${lineBreak}<strong>Tan Circle remains mostly unchanged</strong><br>
    - Damage to DOT Effect Converters are now frame based<br>
    - Reworked Extermination<br><br>

    Beta V28 (Oct 17, 2023):<br>
    - Scroll Zoom<br>
    - New Weapons: Reaper!<br>
    - New Shape: Red Heptagon<br>
    - Bug Fixes<br>
    - Offers are now tasks<br>
    - Evora and Veyron Range: 1.8K -> 1.2K<br>
    - Evora and Veyron Reload: 8 -> 6 sec<br>
    - Orange Circle DOT Duration: 30 -> 15 sec<br>
    - Orange Circle Health: +10%<br><br>

    Beta V27 (Oct 15, 2023 - Oct 16, 2023):<br>
    - Orange Pentagon Ability Damage: +324%<br>
    - You get more league reward.<br>
    - New Shape: Black Pentagon<br>
    - New Weapons: Devastator, Scatter, Evora, and Veyron<br>
    - Microchip overhaul<br>
    - Black Pentagon Bug Fixes<br><br>

    Beta V26 (Oct 14, 2023):<br>
    - New Microchips<br>
    - Minor Performance Changes<br>
    - Weapons and Shapes can go to MK3<br>
    - Game Mechanic Changes<br>
    - Freeze Rockets: will not give enemies freezing effect when they are already FROZEN.<br>
    - Bug Fixes<br><br>

    Beta V25 (Oct 13, 2023):<br>
    - Orange Circle Health: +60%<br>
    - New Shape: Tan Circle!<br>
    - Bug Fixes<br><br>

    Beta V24 (Oct 11, 2023):<br>
    - Atomizer and Nucleon: -15% Damage<br>
    - Brown Circle: Ability Duration: 12 -> 8 sec<br>
    - Blaze:<br>
    ${lineBreak}Damage: -20%<br>
    ${lineBreak}Ammo: 150 -> 125<br>
    ${lineBreak}Reload Time: 2 -> 3 sec<br>
    - Ember:<br>
    ${lineBreak}Damage: -20%<br>
    ${lineBreak}Ammo: 300 -> 250<br>
    ${lineBreak}Reload Time: 2 -> 3 sec<br>
    - Blaze and Ember: Projectile moves faster<br>
    - Decreased Slumber and Delay's slowdown effect power (3% -> 2.5%)<br>
    - New Shape: Gray Hexagon!<br>
    - New Freezing Weapons!<br>
    - Orange Circle: DOT EFFECT DURATION DECREASE (1 min -> 30 sec)<br>
    - New Shape: Red Hexagon!<br><br>

    Beta V23 (Oct 8, 2023):<br>
    - New Shapes: Purple Hexagon and Yellow Hexagon<br>
    - White Pentagon Stealth Time: 6 -> 8 seconds<br>
    - New Weapons: Delay and Slumber!<br>
    - New Microchips<br>
    - Fixed Shape Changing UI<br><br>

    Beta V22 (Oct 7, 2023):<br>
    - Microchips are sorted by tier<br>
    - Orange Circle Reflector: 50% -> 20%<br>
    - White Circle Effect Duration: 6 -> 3 sec<br><br>

    Beta V21 (Oct 6, 2023):<br>
    - Added Microchips!<br>
    - Workshop production limit: Infinity -> 30<br><br>

    Beta V20 (Oct 1, 2023):<br>
    - New Shape: Tan Pentagon!<br>
    - New Weapons: Blaze and Ember<br>
    - 2 New Arena Bosses<br>
    - New Modules: Fortifier and Damage Controller<br>
    - Lootbox Changes<br><br>

    Beta V19 (Sep 30, 2023):<br>
    - New Weapon(s): Storm and Cinder!<br>
   ${lineBreak}Storm: Light Version of Thunder!<br>
   ${lineBreak}Cinder: Heat Waves!<br>
   - Balance Unit Description Fixed<br>
   - Teal Circle Tier: 4 -> 3<br>
   - MK2 for robots and weapons<br>
   - Dark Gray Circle Reflector: 250% -> 150%<br>
   - Orange Circle Reflector: 150% -> 50%<br>
   - Extermination Enemy Limit (for arena): Infinity -> 100<br>
   - ULTIMATE LOOTBOX!<br>
   - hold space to speed up the lootbox animation<br>
   - New Module: Last Stand!<br>
   - Bug Fixes<br><br>

    Beta V18 (Sep 29, 2023):<br>
    - New Shape: Orange Circle!<br>
    - New Lootbox: Diamond Lootbox!<br>
    - Damage Modules also increase ability damage!<br>
    - Reduced the cost of Armor Kit and Nuclear Reactor: 1.0M -> 500.0K Silver<br>
    - Red Circle Desc Fix<br>
    - New Module: Balance Unit<br>
    - New Weapon: Thunder<br><br>

    Beta V17 (Sep 26, 2023):<br>
    - New Shapes: Blue Pentagon and Brown Circle!<br>
    ${lineBreak}Blue Pentagon: heavy shielded shape.<br>
    ${lineBreak}Brown Circle: take over the skys!<br>
    - New Weapon: STING<br>
    ${lineBreak}Light version of viper!<br>
    - Pink Circle Damage Spread: 5 -> 10 sec<br>
    - More Ads!<br>
    - Lag Fixes<br>
    - Bug Fixes<br><br>

    Beta V16 (Sep 21, 2023 - Sep 24, 2023):<br>
    - Assist mode at 300 league for 5v5 match<br>
    - Viper Dmg Nerf: -32%<br>
    - Silver Rewards increased!<br>
    - League System!<br>
    - New Game Mode: 5v5 Match<br>
    - New Shape: Pink Circle!<br>
    ${lineBreak}Turns all damage into DOT, allowing it not to get instantly killed!<br>
    - Economy changes.<br>
    - Tiers will now affect the text color.<br>
    - Red Circle Built-In Arc Reactor: 35% -> 25%<br>
    - Import and Exporting! Back up your progress!<br>
    - Nucleon Damage: -20%<br>
    - Offers: Free rewards!<br>
    - New Settings Feature: import and exporting your progress, or restarting everything!<br>
    - 5v5 Match bots are now league based!<br><br>

    Beta V15 (Sep 20, 2023):<br>
    - decreased gold reward on arena gamemode!<br>
    - increases silver reward on arena!<br><br>

    Beta V14 (Sep 16, 2023):<br>
    - Major Update!<br>
    - 1v1 Match gamemode is currently not done, but its still playable, so try it out!<br><br>

    Beta V13 (Sep 15, 2023):<br>
    - More Bosses in Arena and some changes to level 3 boss!<br>
    - New Shape: Red Circle!<br><br>

    Beta V12 (Sep 14, 2023):<br>
    - Hawk and Eagle Buff:<br>
    ${lineBreak}Reload Time: 8 -> 5 seconds<br>
    ${lineBreak}Ammo Doubled<br>
    ${lineBreak}Eagle Damage Increase: 15%<br>
    - Dark Gray Circle Buff:<br>
    ${lineBreak}Reflector: 75% -> 250%<br>
    - Damage Counter Bug Fixes<br>
    - Silver Battle Rewards Increased<br>
    - Destroyer:<br>
    ${lineBreak}Damage Decreased by 15%<br>
    ${lineBreak}Damage Range: 1600 -> 1400<br>
    ${lineBreak}Damage Fire Rate: 30 -> 50<br>
    ${lineBreak}Reload Time: 5 -> 5.5 seconds<br>
    - Economy Changes<br>
    - New Boss in Arena!<br>
    - You can use gold for upgrading shapes and weapons if you do not have enough silver.<br><br>

    Beta V11 (Sep 13, 2023):<br>
    - New Game Mode: Arena!<br>
    - Eagle Tier: 3 -> 2<br>
    - New Weapons: Viper, Atomizer, and Nucleon<br>
    ${lineBreak}Viper: Emit DOT Damage (damage over time) to your enemies!<br>
    ${lineBreak}Atomizer and Nucleon: Unlimited ammo energy machine guns!<br><br>

    Beta V10 (Sep 12, 2023):<br>
    - Teal Circle: Ability Cooldown: 24 -> 18 seconds<br>
    - Eagle: Heavy Version of Hawk (Nerfed Version)!<br>
    - Hawk Nerf:<br>
    ${lineBreak}Reload Time: 7.5 -> 8 seconds<br>
    ${lineBreak}Ammo: 20 -> 15<br>
    ${lineBreak}Max Targets: 4 -> 3<br>
    - New Shapes: White Circle and Dark Gray Circle!<br>
    ${lineBreak}White Circle: Too much enemies? Need a break? Look no further! White Circle can easily give you a break when you need it most, with one press of its ability.<br>
    ${lineBreak}Dark Gray Circle: Damages enemies that damage the shape.<br>
    - You can now sell weapons for silver!<br>
    - All Operations without keys prizes will auto update. 10.0K OXP is given for compensation<br>
    - Operation Reward Tweaks and Changes<br>
    - Shocker Buff:<br>
    ${lineBreak}Shocker Reload: 8 seconds -> 5 seconds<br>
    - If an shape has more weapons than the max hardpoints. All weapons would clear from the shape.<br>
    - Bug Fixes<br><br>

    Beta V9 (Sep 11, 2023):<br>
    - New Shapes: Teal Circle and Blue Circle<br>
    ${lineBreak}Dive in to battle with Full Action ability!<br>
    - New Weapon: Hawk<br>
    ${lineBreak}Tired of swarms attacking you? Here's the solution!<br>
    - Copper Lootbox Reward Changes<br>
    - Bug Fixes<br><br>

    Beta V8 (Sep 10, 2023):<br>
    - Increased OXP Earnings by 4 times<br>
    - Changed Reward Amount for Gold and Silver (if you have an operation on going, you'll have to finish it to get the update.<br><br>

    Beta V7 (Sep 9, 2023):<br>
    - New Shape: Purple Circle<br>
    ${lineBreak}Built-in resistance allows it to withstand heavy enemy fire.<br>
    - New Extermination Enemy: Smasher Circles<br>
    - New Modules: Self Fix Unit, Thermonuclear Reactor, Nuclear Reactor, and Arc Reactor<br>
    ${lineBreak}Self Fix Unit: Repairs a part of the shape each second<br>
    ${lineBreak}Thermonuclear Reactor & Nuclear Reactor: Increases weapon damage output<br>
    ${lineBreak}Arc Reactor: Increases weapon damage with the cost of some health<br>
    - New Feature Operation!<br>
    ${lineBreak}Earn OXP to level up on operation!<br><br>

    Beta V6 (Sep 6, 2023):<br>
    - Visual Changes<br><br>
    Beta V5 (Aug 31, 2023):<br>
    - New Feature: Modules!<br>
    ${lineBreak}Customize your shapes even more with special modules that increase your shapes health, damage output and so much more!<br>
    ${lineBreak}Keep in mind that modules have to be bought separately.<br><br>

    Beta V4 (Aug 30, 2023):<br>
    - New Extermination Enemy: Sniper!<br>
    ${lineBreak}Sniper moves away from the player and shoots an long ranged projectile every 2 seconds.<br>
    - Shocker: Shoots until reload (3 -> 6)<br>
    - Destroyer: Range Increase (1200 -> 1600)<br>
    New Shape: Green Circle!<br>
    ${lineBreak}First shape with an ability!<br>
    - Gray Damage: Unhealable health. This damage is done by all weapons (40% of damage is gray damage).<br>
    - Press E to use shape ability.<br><br>

    Beta V3 (Aug 29, 2023):<br>
    - New Weapon: Landslide, Shocker, and Destroyer<br>
    ${lineBreak}Landslide: Rocket launcher that deals aoe damage. Great for enemies in groups.<br>
    ${lineBreak}Shocker: Far ranged sniper.<br>
    ${lineBreak}Destroyer: Multi Barreled machine gun that fires 2 projectiles per clip.<br>
    - Shapes will have their recommended weapons listed in their description.<br>
    - Loot box: get "free" rewards with your hard earned keys.<br>
    - New Shape: Yellow Circle.<br>
    ${lineBreak}Holding 3 heavy hardpoints, this shape is an beast for an enemy.<br><br>

    Beta V2 (Aug 28, 2032):<br>
    - New Shapes: Black Circle and Light Gray Circle<br>
    - Punisher: Damage Nerf (-15%)<br>
    - New Game Mode: Extermination!<br>
    ${lineBreak}Fight hordes of enemies. Longer you survive, more rewards you get!<br>
    - New Features: Quick Reload, Quick Select, and Quick Upgrade<br>
    ${lineBreak}Hold R to reload 2 times faster, but makes you move 2 times slower.<br>
    ${lineBreak}Press Enter to quick upgrade equipment like shapes and weapons without needing to press the upgrade button.<br>
    ${lineBreak}Press 1-9 keys to quick select an slot and esc to deselect.<br>
    - Bug Fixes<br><br>

    Beta V1 (Undated):<br>
    - Setting up the game<br>
    </div><br>
    `;
    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
    function getValue(id) {
        return localStorage.getItem(id);
    }
    function saveValue(id, value) {
        localStorage.setItem(id, value);
    }
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var mouseX = 0;
    var mouseY = 0;
    var player = {
        sliver: 200e3,
        gold: 250,
        keys: 1e3,
        shapes: [],
        weapons: [],
        modules: [],
        gameMode: -1,
        ULIMATEXP: 0,
        workshopPoints: 0,
        league: 0
    };
    //base x: 1980, base y: 1080
    var maxScreen = {
        x: 1980,
        y: 1080
    };
    var sliverUpgradesByTier = [{//tier 1
        shapes: [0, 10e3, 20e3, 40e3, 80e3, 100e3, 200e3, 400e3, 800e3, 1e6, 2e6, 5e6],
        weapons: [0, 7.5e3, 15e3, 30e3, 60e3, 90e3, 150e3, 300e3, 700e3, 1e6, 1.5e6, 3e6],
        modules: [0, 200e3, 200e3, 200e3, 200e3, 200e3]
    }, {//tier 2
        shapes: [0, 20e3, 40e3, 80e3, 200e3, 400e3, 800e3, 1e6, 2e6, 4e6, 5e6, 8e6],
        weapons: [0, 10e3, 30e3, 60e3, 180e3, 300e3, 600e3, 900e3, 1.5e6, 3e6, 4e6, 6e6],
        modules: [0, 2e6, 2e6, 2e6, 2e6, 2e6]
    }, {//tier 3
        modules: [0, 20e6, 20e6, 20e6, 20e6, 20e6],
        shapes: [0, 120e3, 240e3, 480e3, 1e6, 1.5e6, 3e6, 5e6, 10e6, 20e6, 40e6, 80e6],
        weapons: [0, 100e3, 200e3, 400e3, 800e3, 1e6, 2e6, 4e6, 8e6, 16e6, 32e6, 64e6]
    }, {//tier 4
        modules: [0, 40e6, 40e6, 40e6, 40e6, 40e6],
        shapes: [0, 600e3, 1e6, 2e6, 5e6, 9e6, 14e6, 16e6, 25e6, 50e6, 90e6, 120e6],
        weapons: [0, 400e3, 800e3, 1.2e6, 4e6, 8e6, 12e6, 14e6, 20e6, 40e6, 80e6, 100e6]
    }, {//tier 5
        shapes: [0, 2.5e6, 12.5e6, 25e6, 50e6, 100e6, 200e6, 300e6, 300e6, 375e6, 450e6, 625e6],
        weapons: [0, 1.875e6, 9.375e6, 18.75e6, 37.5e6, 75e6, 150e6, 225e6, 225e6, 281.25e6, 337.5e6, 468.75e6]
    }];
    var shapeSids = 0;
    class shape {
        constructor(data, slot, dontSID) {
            this.x = 0;
            this.y = 0;
            this.velx = 0;
            this.vely = 0;
            this.baseDP = 0;
            this.grayDamage = 0;
            this.moduleHardpoints = data.moduleHardpoints;
            this.tier = data.tier;
            this.desc = data.desc;
            this.health = this.maxhealth = data.healthData ? data.healthData.base : data.health;
            this.speed = data.speed;
            this.color = data.color;
            this.fieldOfViewMulti = data.fieldOfViewMulti;
            this.effects = [];
            this.name = data.name;
            this.slot = slot;
            this.scale = data.scale;
            if (!dontSID) this.sid = shapeSids;
            this.hardpoints = data.hardpoints;
            this.level = 1;
            if (!dontSID) shapeSids++;
            this.sellPrice = 0;
            this.reflector = data.reflector;
            if(data.builtInDefensePoints) {
                this.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE = data.builtInDefensePoints;
            }else {
                this.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE = 0;
            }
            this.builtInDefensePoints = data.builtInDefensePoints;
            this.baseDamageIncrease = data.baseDamageIncrease;
            this.baseShielding = null;
            this.turnDmgIntoDOT = data.turnDmgIntoDOT;
            this.enhanceCost = (this.tier + 1) * 2e3;
            if (data.shieldData || data.baseShielding) {
                if (data.baseShielding) data.shieldData = data.baseShielding;
                this.baseShielding = {
                    health: (data.shieldData.base || data.shieldData.health),
                    type: data.shieldData.type,
                    regen: data.shieldData.regen
                }
            }
            this.dotResistance = data.dotResistance;
            if (data.cost) {
                this.sellPrice += data.cost.sliver * .75;
                if (data.cost.gold && data.cost.gold > 0) {
                    this.sellPrice += 1250 * data.cost.gold;
                }
                if (data.cost.workshopPoints && data.cost.workshopPoints > 0) {
                    this.sellPrice += 10e3 * data.cost.workshopPoints;
                }
            }
            this.ability = null;
            if(this.tier == 0) {
                this.microshipSlots = 2;
            }else if(this.tier == 1) {
                this.microshipSlots = 4;
            }else if(this.tier == 2) {
                this.microshipSlots = 8;
            }else if(this.tier == 3) {
                this.microshipSlots = 12;
            }else if(this.tier == 4) {
                this.microshipSlots = 16;
            }
            if (data.ability) {
                if (true) {
                    this.ability = {
                        name: data.ability.name,
                        desc: data.ability.desc,
                        reload: data.ability.reload,
                        iconSource: data.ability.iconSource
                    };
                    if (data.ability.name == "Paladin" || data.ability.name == "Stealth Dash" || data.ability.name == "Phase Shift" || data.ability.name == "Dash" || data.ability.name == "Fortify") {
                        this.ability.charges = data.ability.charges;
                        this.ability.maxcharge = data.ability.charges;
                        this.ability.lastingTime = data.ability.lastingTime;
                        if(data.ability.name == "Fortify" || data.ability.name == "Paladin") {
                            this.ability.shieldHp = data.ability.shieldHpData ? data.ability.shieldHpData.base : data.ability.shieldHp;
                        }
                    } else {
                        if (data.ability.name == "Overload" || data.ability.name == "Cold Pulse" || data.ability.name == "Dragon Flight" || data.ability.name == "Retribution" || data.ability.name == "Stampede") {
                            this.ability.dmg = data.ability.damageData ? data.ability.damageData.base : data.ability.dmg;
                            if (data.ability.name == "Overload" || data.ability.name == "Stampede" || data.ability.name == "Dragon Flight" || data.ability.name == "Retribution") {
                                this.ability.lastingTime = data.ability.lastingTime;
                                if(data.ability.name == "Dragon Flight") this.ability.dotDamage = data.ability.dotData ? data.ability.dotData.base : data.ability.dotDamage;
                            }
                        } else {
                            this.ability.lastingTime = data.ability.lastingTime;
                        }
                    }
                }
            }
        }
    }
    var shapeData = [{
        tier: 0,
        name: "Gray Circle",
        speed: 0.0018,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0002, 0.0003, 0.0004],
        scale: 55,
        fieldOfViewMulti: 1.5,
        desc: `
        Training shape for mastering the basics of combat.<br><br>
        Recommended Equipment: x2 Punisher
        `,
        buyDesc: `
        <br><br>
        Cost: 75.0K Sliver
        `,
        healthData: {
            base: 38e3,
            level: [0, 39e2, 42e2, 44e2, 46e2, 48e2, 5e3, 52e2, 56e2, 6e3, 8e3, 8e3],
        },
        hardpoints: {
            light: 2,
            heavy: 0
        },
        color: "#808080",
        moduleHardpoints: 1,
        cost: {
            sliver: 75e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Black Circle",
        speed: 0.0012,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0, 0, 0, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.5,
        desc: `
        Boasting 4 light weapon slots, 
        this shape is extremely versatile - a universal soldier. 
        Fit for combat at any range.<br><br>
        Recommended Equipment: x4 Punisher
        `,
        buyDesc: `
        <br><br>
        Cost: 570.0K Sliver
        `,
        healthData: {
            base: 55e3,
            level: [0, 6e3, 6e3, 61e2, 61e2, 7e3, 71e2, 75e2, 8e3, 8e3, 9e3, 10e3],
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#000",
        moduleHardpoints: 1,
        cost: {
            sliver: 570e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Light Gray Circle",
        speed: 0.0028,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0004],
        scale: 45,
        fieldOfViewMulti: 1.35,
        desc: `
        One of the fastest shapes. 
        Holding 3 light weapons this shape can claim victory against the toughest enemies.<br><br>
        Recommended Equipment: x3 Landslide
        `,
        buyDesc: `
        <br><br>
        Cost: 250 Gold
        `,
        healthData: {
            base: 31e3,
            level: [0, 2e3, 2e3, 21e2, 31e2, 3e3, 41e2, 45e2, 4e3, 5e3, 6e3, 7e3],
        },
        hardpoints: {
            light: 3,
            heavy: 0
        },
        color: "#bababa",
        moduleHardpoints: 1,
        cost: {
            sliver: 0,
            gold: 250
        }
    }, {
        tier: 1,
        name: "Yellow Circle",
        speed: 0.0012,
        speedLevel: [0, 0, 0, 0.0001, 0, 0.0002, 0, 0.0001, 0.0001, 0, 0.0001, 0.0003],
        scale: 85,
        fieldOfViewMulti: 2.3,
        desc: `
        Holding 3 heavy weapons, this shape has unparalleled fire power.
        No other shape of the same tier can survive an onslaught of this shape.<br><br>
        Recommended Equipment: x3 Destroyer
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0K Gold
        `,
        healthData: {
            base: 59e3,
            level: [0, 5e3, 5e3, 54e2, 8e3, 9e3, 12e3, 14e3, 16e3, 19e3, 20e3, 21e3],
        },
        hardpoints: {
            light: 0,
            heavy: 3
        },
        color: "#ffff00",
        moduleHardpoints: 2,
        cost: {
            sliver: 0,
            gold: 1e3
        }
    }, {
        tier: 1,
        name: "Green Circle",
        speed: 0.0021,
        speedLevel: [0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0002, 0.0002, 0.0002, 0.0002],
        scale: 55,
        fieldOfViewMulti: 1.4,
        desc: `
        Moderately armored shape with the ability to heal itself when damaged.<br><br>
        Recommended Equipment: x1 Destroyer + x1 Punisher
        `,
        buyDesc: `
        <br><br>
        Cost: 1.5K Gold
        `,
        healthData: {
            base: 38e3,
            level: [0, 37e2, 41e2, 45e2, 58e2, 59e2, 6e3, 65e2, 66e2, 8e3, 81e2, 85e2],
        },
        ability: {
            name: "Self Heal",
            desc: `
            <strong>Self Heal</strong> allows the robot to heal 25% of its health in 5 seconds. 
            After it heals 25%, it begins ability cooldown of 12 sec.
            `,
            iconSource: "./images/self_heal.png",
            lastingTime: 5e3,
            reload: 12e3
        },
        hardpoints: {
            light: 1,
            heavy: 1
        },
        color: "#00ff00",
        moduleHardpoints: 2,
        cost: {
            sliver: 0,
            gold: 15e2
        }
    }, {
        tier: 2,
        name: "Purple Circle",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0.0001, 0.0001, 0.0002],
        scale: 55,
        fieldOfViewMulti: 1.4,
        desc: `
        This shape has an built-in defense system that decreases all incoming damage.
        Perfect warrior of any kind.<br><br>
        Recommended Equipment: x1 Avalanche + x2 Landslide
        `,
        buyDesc: `
        <br><br>
        Cost: 3.5K Gold
        `,
        builtInDefensePoints: 50,
        healthData: {
            base: 96e3,
            level: [0, 3e3, 3e3, 34e2, 4e3, 44e2, 5e3, 6e3, 64e2, 68e2, 7e3, 7e3],
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#800080",
        moduleHardpoints: 3,
        cost: {
            sliver: 0,
            gold: 35e2
        }
    }, {
        tier: 1,
        name: "Blue Circle",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002],
        scale: 45,
        fieldOfViewMulti: 1.25,
        desc: `
        Blue Circle has the ability to increase its defense.
        This ability allows it to go into short fights without taking a lot of dmg.<br><br>
        Recommended Equipment: x4 Hawk
        `,
        buyDesc: `
        <br><br>
        Cost: 3M Silver
        `,
        healthData: {
            base: 33e3,
            level: [0, 2550, 2805, 3060, 3400, 3655, 3655, 4250, 4250, 4675, 4845, 5100],
        },
        ability: {
            name: "Full Action",
            desc: `
            <strong>Full Action</strong> gains 60 DP (37.5% resistance) for 5 seconds, after that it cooldown for 18 seconds.
            `,
            iconSource: "./images/full_action.png",
            lastingTime: 5e3,
            reload: 18e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#0000ff",
        moduleHardpoints: 2,
        cost: {
            sliver: 3e6,
            gold: 0
        }
    }, {
        tier: 2,
        name: "Teal Circle",
        speed: 0.001,
        speedLevel: [0, 0.0001, 0, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.45,
        desc: `
        Improved version of blue circle.
        Teal Circle can do almost everything blue circle can do but better.<br><br>
        Recommended Equipment: x1 Punisher + x2 Destroyer
        `,
        buyDesc: `
        <br><br>
        Cost: 7.5K Gold
        `,
        healthData: {
            base: 86e3,
            level: [0, 9e3, 9e3, 9e3, 10e3, 13e3, 16e3, 18e3, 19e3, 20e3, 22e3, 25e3],
        },
        ability: {
            name: "Full Action",
            desc: `
            <strong>Full Action</strong> gains 200 DP (66.7% resistance) for 12 seconds, after that it cooldown for 18 seconds.
            `,
            iconSource: "./images/full_action.png",
            lastingTime: 12e3,
            reload: 18e3
        },
        hardpoints: {
            light: 1,
            heavy: 2
        },
        color: "#008080",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2
        }
    }, {
        tier: 2,
        name: "White Circle",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001],
        scale: 55,
        fieldOfViewMulti: 1.25,
        desc: `
        White Circle has the ability to freeze enemies in place.<br><br>
        Recommended Equipment: x2 Eagle
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0M Silver + 3.75K Gold
        `,
        healthData: {
            base: 55e3,
            level: [0, 5e3, 5e3, 5e3, 5e3, 6e3, 6e3, 6e3, 6e3, 7e3, 7e3, 85e2],
        },
        ability: {
            name: "Cold Pulse",
            desc: `
            <strong>Cold Pulse</strong> emits an pulse of cold energy, this pulse will freeze and damage any enemies in 1200 PX.
            When frozen enemies won't be able to move nor shoot.
            Effect lasts for 6 seconds.
            For every enemy you freeze, heals 5.0K HP per enemy.<br><br>
            Ability Cooldown Time: 16 seconds
            `,
            damageData: {
                base: 500,
                level: [0, 25, 25, 25, 25, 25, 50, 50, 50, 50, 75, 75],
            },
            iconSource: "./images/cold_pulse.png",
            reload: 16e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#fff",
        moduleHardpoints: 3,
        cost: {
            sliver: 1e6,
            gold: 3750
        }
    }, {
        tier: 3,
        name: "Dark Gray Circle",
        speed: 0.0016,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.3,
        desc: `
        This shape has an built-in defense system with an twist.
        150% of damage taken will be redirected to the attacker.<br><br>
        Recommended Equipment: x3 Hawk
        `,
        buyDesc: `
        <br><br>
        Cost: 7.5K Gold
        `,
        reflector: 1.5,
        builtInDefensePoints: 25,
        healthData: {
            base: 56e3,
            level: [0, 5e3, 5e3, 7e3, 7e3, 7e3, 8e3, 8e3, 8e3, 10e3, 10e3, 15e3],
        },
        hardpoints: {
            light: 3,
            heavy: 0
        },
        color: "#4e4e4e",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2
        }
    }, {
        tier: 3,
        name: "Red Circle",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 75,
        fieldOfViewMulti: 2,
        desc: `
        Holding 4 heavy weapons-unparalleled fire power.
        Shape comes with built-in arc reactor, increasing its damage by 25%.<br><br>
        Recommended Equipment: x4 Viper
        `,
        buyDesc: `
        <br><br>
        Cost: 7.5K Gold
        `,
        baseDamageIncrease: .25,
        healthData: {
            base: 78e3,
            level: [0, 9e3, 9e3, 9e3, 9e3, 10e3, 10e3, 10e3, 10e3, 11e3, 11e3, 15e3],
        },
        hardpoints: {
            light: 0,
            heavy: 4
        },
        color: "#f00",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2
        }
    }, {
        tier: 1,
        name: "Red Pentagon",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 55,
        fieldOfViewMulti: 1.3,
        desc: `
        First shape with an energy shield.
        Energy shields protects the shape from non energy based projectiles, "direct" hits like the AOE effect from extermination enemies don't count and will be ignored.
        Energy Shield regens 5%, every 5 seconds.<br><br>
        Recommended Equipment: x1 Punisher + x1 Destroyer
        `,
        buyDesc: `
        <br><br>
        Cost: 1.5K Gold
        `,
        shieldData: {
            type: "energy",
            base: 10e3,
            level: [0, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3],
            regen: 0.05
        },
        healthData: {
            base: 55e3,
            level: [0, 3e3, 3e3, 3e3, 4e3, 4e3, 5e3, 5e3, 5e3, 5e3, 6e3, 6e3],
        },
        hardpoints: {
            light: 1,
            heavy: 1
        },
        color: "#f00",
        moduleHardpoints: 2,
        cost: {
            sliver: 0,
            gold: 15e2
        }
    }, {
        tier: 3,
        name: "Pink Circle",
        speed: 0.0021,
        speedLevel: [0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0002, 0.0002, 0.0002, 0.0003],
        scale: 65,
        fieldOfViewMulti: 1.6,
        desc: `
        Heavyly armored shape that can turn all damage into DOT damage.
        Alllowing the robot not to take a lot of damage instantly.<br><br>
        Recommended Equipment: x4 Atomizer
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0M Silver + 7.5K Gold
        `,
        turnDmgIntoDOT: true,
        healthData: {
            base: 118e3,
            level: [0, 9e3, 9e3, 9e3, 11e3, 11e3, 11e3, 14e3, 14e3, 14e3, 16e3, 18e3],
        },
        ability: {
            name: "Self Heal",
            desc: `
            <strong>Self Heal</strong> allows the robot to heal itself for 12 sec. 
            After it heals, it begins ability cooldown of 18 sec.
            `,
            iconSource: "./images/self_heal.png",
            lastingTime: 12e3,
            reload: 18e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#ffc0cb",
        moduleHardpoints: 4,
        cost: {
            sliver: 5e6,
            gold: 75e2
        }
    }, {
        tier: 2,
        name: "Blue Pentagon",
        speed: 0.0016,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.3,
        desc: `
        Blue Pentagon is a shield dependent shape.
        Low base health but really high shield hp.
        Moves decently fast.<br><br>
        Recommended Equipment: x2 Viper
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Silver + 5.0K Gold
        `,
        shieldData: {
            type: "energy",
            base: 70e3,
            level: [0, 6e3, 6e3, 8e3, 8e3, 10e3, 12e3, 15e3, 17e3, 22e3, 44e3, 44e3],
            regen: 0.1
        },
        healthData: {
            base: 16e3,
            level: [0, 3e3, 3e3, 3e3, 4e3, 4e3, 4e3, 4e3, 5e3, 5e3, 5e3, 55e2],
        },
        ability: {
            name: "Shield Regeneration",
            desc: `
            <strong>Shield Regeneration</strong> allows the shape to regen its shields 10 times quicker for 6 seconds. 
            After 6 seconds, it begins ability cooldown of 20 sec.
            `,
            iconSource: "./images/shield_regen.png",
            lastingTime: 6e3,
            reload: 20e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#00f",
        moduleHardpoints: 3,
        cost: {
            sliver: 500e3,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Brown Circle",
        speed: 0.0016,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.45,
        desc: `
        Brown Circle is equipped with flight tech.<br><br>
        Recommended Equipment: x2 Viper + x2 Sting
        `,
        buyDesc: `
        <br><br>
        Cost: 10.0M Silver + 7.5K Gold
        `,
        healthData: {
            base: 74e3,
            level: [0, 2e3, 2e3, 4e3, 5e3, 5e3, 5e3, 7e3, 7e3, 9e3, 9e3, 12e3],
        },
        ability: {
            name: "Dragon Flight",
            desc: `
            <strong>Dragon Flight</strong> the shape flies up.
            When it reaches max height, the shape can shoot and move through walls, also an built-in weapon is actived that deals damage.
            While flying the robot gets an defense system.
            After 12 seconds, the ability cools down for 26 seconds.
            `,
            damageData: {
                base: 460,
                level: [0, 45, 55, 65, 75, 75, 85, 90, 95, 100, 105, 110],
            },
            dotData: {
                base: 20,
                level: [0, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 20],
            },
            lastingTime: 8e3,
            iconSource: "./images/dragon_flight.png",
            reload: 26e3
        },
        hardpoints: {
            light: 2,
            heavy: 2
        },
        color: "#964b00",
        moduleHardpoints: 4,
        cost: {
            sliver: 10e6,
            gold: 75e2
        }
    }, {
        tier: 4,
        name: "Orange Circle",
        speed: 0.0012,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.6,
        desc: `
        Orange Circle has an built-in defense system, with an reflector built-in it.
        The shape also has an ability to heal itself and to turn all damage into DOT.
        Shape also takes less GRAY DAMAGE.
        <br><br>
        Recommended Equipment: x1 Storm + x2 Thunder
        `,
        buyDesc: `
        <br><br>
        Cost: 900.0M Silver + 100.0K Gold + 2.0K Workshop Points (WKP)
        `,
        healthData: {
            base: 306240,
            level: [0, 38720, 38720, 38720, 42240, 42240, 42240, 45760, 45760, 45760, 49280, 52800]
        },
        hardpoints: {
            light: 1,
            heavy: 2
        },
        ability: {
            name: "Ultimate Defense",
            desc: `
            <strong>Ultimate Defense</strong> turns all damage into DOT for 12 seconds.
            While ability is active, the robot heals.
            After 12 seconds, it begins ability cooldown of 12 sec.
            `,
            iconSource: "./images/shield_regen.png",
            lastingTime: 12e3,
            reload: 12e3
        },
        reflector: .2,
        builtInDefensePoints: 150,
        color: "#ffa500",
        moduleHardpoints: 4,
        cost: {
            sliver: 900e6,
            gold: 100e3,
            workshopPoints: 2e3
        }
    }, {
        tier: 3,
        name: "White Pentagon",
        speed: 0.0014,
        speedLevel: [0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.25,
        desc: `
        White Pentagon is a legendary brawler.
        With the ability to remove itself from enemy radars, it can deliver damage without getting targeted.<br><br>
        Recommended Equipment: x2 Storm + x1 Thunder
        `,
        buyDesc: `
        <br><br>
        Cost: 2.0M Silver + 7.5K Gold
        `,
        shieldData: {
            type: "yellow",
            base: 37e3,
            level: [0, 2e3, 2e3, 2e3, 3e3, 3e3, 4e3, 4e3, 4e3, 5e3, 5e3, 6e3],
            regen: 0.05
        },
        healthData: {
            base: 76e3,
            level: [0, 4e3, 4e3, 4e3, 6e3, 6e3, 6e3, 8e3, 8e3, 10e3, 12e3, 15e3],
        },
        ability: {
            name: "Stealth",
            desc: `
            <strong>Stealth</strong> removes the robot from all enemy radars.
            While ability is active, moves 2 times faster.
            After 8 seconds of stealth, cools down for 16 seconds.
            `,
            iconSource: "./images/stealth.png",
            lastingTime: 8e3,
            reload: 16e3
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#fff",
        moduleHardpoints: 4,
        cost: {
            sliver: 2e6,
            gold: 75e2
        }
    }, {
        tier: 3,
        name: "Tan Pentagon",
        shapeType: "pentagon",
        speed: 0.0024,
        speedLevel: [0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.35,
        desc: `
        Tan Pentagon is a dangerous shape that can turn enemies fire power aganist them.
        <br><br>
        Recommended Equipment: x4 Atomizer
        `,
        buyDesc: `
        <br><br>
        Cost: 2.0M Silver + 7.5K Gold
        `,
        healthData: {
            base: 64e3,
            level: [0, 2e3, 2e3, 3e3, 3e3, 4e3, 4e3, 4e3, 5e3, 5e3, 6e3, 8e3],
        },
        ability: {
            name: "Retribution",
            desc: `
            <strong>Retribution</strong> activates a purple shield allowing it to absorb unlimited amount of damage.
            When enemies damage the shield, it increases the built-in weapons damages (max 2000%).
            Ability ends in 12 seconds, then cools down for 18.
            `,
            iconSource: "./images/retribution.png",
            damageData: {
                base: 467,
                level: [0, 67, 67, 77, 77, 77, 99, 99, 133, 133, 133, 167],
            },
            lastingTime: 12e3,
            reload: 18e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#d2b48c",
        moduleHardpoints: 4,
        cost: {
            sliver: 2e6,
            gold: 75e2
        }
    }, {
        tier: 3,
        name: "Purple Hexagon",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.35,
        desc: `
        Purple Hexagon is a stealthy fighter.
        <br><br>
        Recommended Equipment: x2 Storm + x1 Thunder
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0M Silver + 5.0K Gold + 2.0K Workshop Points
        `,
        healthData: {
            base: 85e3,
            level: [0, 5e3, 5e3, 6e3, 6e3, 6e3, 7e3, 8e3, 9e3, 10e3, 12e3, 15e3],
        },
        ability: {
            name: "Stealth Dash",
            desc: `
            <strong>Stealth Dash</strong> leaps the shape into a fixed direction.
            While leaping the shape gets, stealth. The Stealth ends 2 seconds after the dash.
            4 Ability Charges, 5 second charge cooldown, .75 second usage interval.
            `,
            iconSource: "./images/stealth dash.png",
            charges: 4,
            lastingTime: 750,
            reload: 5e3
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#800080",
        moduleHardpoints: 4,
        cost: {
            sliver: 1e6,
            gold: 5e3,
            workshopPoints: 2e3
        }
    }, {
        tier: 3,
        name: "Yellow Hexagon",
        speed: 0.0012,
        speedLevel: [0, 0, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0, 0.0001, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.35,
        desc: `
        Yellow Hexagon is a super fighter, with the ability to not take any damage.
        <br><br>
        Recommended Equipment: x4 Storm
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0M Silver + 7.5K Gold + 500 Workshop Points
        `,
        healthData: {
            base: 96e3,
            level: [0, 10e3, 10e3, 10e3, 10e3, 12e3, 14e3, 14e3, 16e3, 16e3, 18e3, 25e3],
        },
        ability: {
            name: "Phase Shift",
            desc: `
            <strong>Phase Shift</strong> makes the shape not take any damage for 2 seconds.
            During the ability, any negative effects will be canceled.
            This is the only ability that you can use during the cold pulse freeze.
            3 Ability Charges, 8 second charge cooldown.
            `,
            iconSource: "./images/phase_shift.png",
            charges: 3,
            lastingTime: 2e3,
            reload: 8e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#ffff00",
        moduleHardpoints: 4,
        cost: {
            sliver: 5e6,
            gold: 75e2,
            workshopPoints: 500
        }
    }, {
        tier: 2,
        name: "Gray Hexagon",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002, 0.0002, 0.0004],
        scale: 55,
        fieldOfViewMulti: 1.1,
        desc: `
        Gray Hexagon is a fast moving attacker.
        <br><br>
        Recommended Equipment: x2 Delay
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Silver + 5.0K Gold
        `,
        healthData: {
            base: 66e3,
            level: [0, 3000, 3000, 3000, 3000, 3600, 4200, 4200, 4800, 4800, 5400, 7500]
        },
        ability: {
            name: "Dash",
            desc: `
            <strong>Dash</strong> leaps the shape into a fixed direction.<br>
            5 Ability Charges, 2 second charge cooldown
            `,
            iconSource: "./images/dash.png",
            charges: 5,
            lastingTime: 300,
            reload: 2e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#808080",
        moduleHardpoints: 3,
        cost: {
            sliver: 500e3,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Red Hexagon",
        speed: 0.0016,
        speedLevel: [0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 60,
        fieldOfViewMulti: 1.3,
        desc: `
        Red Hexagon is a shield stacker.
        <br><br>
        Recommended Equipment: x2 Rime + x1 Glacier
        `,
        buyDesc: `
        <br><br>
        Cost: 7.5K Gold + 1.0K Workshop Points
        `,
        healthData: {
            base: 44e3,
            level: [0, 3e3, 3e3, 3e3, 3e3, 4e3, 4e3, 4e3, 5e3, 5e3, 6e3, 8e3],
        },
        ability: {
            name: "Fortify",
            desc: `
            <strong>Fortify</strong> for each ability, activates a energy shield.
            Energy shields obtained cannot regenerate health, so once destroyed it bye-bye.
            When the shape reaches MK2+, the blue shield becomes yellow.
            ABILITY IS ALSO AFFECTED BY THE FORIFIER MODULE.
            3 charges, 3 second interval, 12 second charge cooldown
            `,
            iconSource: "./images/modules/fortifier.png",
            shieldHpData: {
                base: 20e3,
                level: [0, 2e3, 4e3, 5e3, 6e3, 6e3, 6e3, 6e3, 7e3, 9e3, 10e3, 12e3],
            },
            charges: 3,
            lastingTime: 3e3,
            reload: 12e3
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        dontSell: window.isDev ? false : true,
        color: "#f00",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2,
            workshopPoints: 1e3
        }
    }, {
        tier: 4,
        name: "Tan Circle",
        speed: 0.0012,
        speedLevel: [0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 70,
        fieldOfViewMulti: 1.4,
        desc: `
        A great shape to bully your enemies.
        Tan Circle rams into enemies, converts damage into DOT.
        Tan Circle also has resistance aganist DOT damage.
        <br><br>
        Recommended Equipment: x3 Storm + x1 Thunder
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0B Silver + 100.0K Gold + 10.0K Workshop Points
        `,
        healthData: {
            base: 160e3,
            level: [0, 12e3, 12e3, 13e3, 15e3, 16e3, 18e3, 20e3, 22e3, 25e3, 25e3, 50e3],
        },
        dotResistance: .25,
        ability: {
            name: "Stampede",
            desc: `
            <strong>Stampede</strong>, the robot speeds up and converts all damage into dot.
            While the ability is active you will have a harder time controlling the shape.
            For each DOT stack, the shape gains temporary resistance for 20 seconds. 
            Max Resistance Stacks: 250
            `,
            iconSource: "./images/stampede.png",
            damageData: {
                base: 240,
                level: [0, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570],
            },
            lastingTime: 12e3,
            reload: 8e3
        },
        hardpoints: {
            light: 3,
            heavy: 1
        },
        color: "#d2b48c",
        moduleHardpoints: 4,
        cost: {
            sliver: 1e9,
            gold: 100e3,
            workshopPoints: 10e3
        }
    }, {
        tier: 3,
        name: "Orange Pentagon",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0.0001, 0, 0.0001, 0.0001],
        scale: 55,
        fieldOfViewMulti: 1.35,
        desc: `
        Orange Pentagon has a strong yellow energy shield that doesn't repair itself.
        Great for attacking grouped up enemies.
        Orange Pentagon has a special system that makes [CINDER] deal increased damage (+25%).
        <br><br>
        Recommended Equipment: x3 Cinder
        `,
        buyDesc: `
        <br><br>
        Cost: 10.0M Silver + 7.5K Gold + 2.0K Workshop Points
        `,
        healthData: {
            base: 116e3,
            level: [0, 6e3, 6e3, 6e3, 10e3, 10e3, 10e3, 12e3, 12e3, 12e3, 12e3, 15e3],
        },
        shieldData: {
            type: "yellow",
            base: 900e3,
            level: [0, 60e3, 80e3, 100e3, 100e3, 120e3, 120e3, 140e3, 140e3, 140e3, 140e3, 140e3],
            regen: 0
        },
        ability: {
            name: "Overload",
            desc: `
            <strong>Overload</strong>, speeds the shape up and starts a 2 second countdown.
            After the countdown reaches 0, the robot goes boom boom and deals aoe damage, pushing back all enemies away from it.
            Cools down for 5 seconds.
            `,
            iconSource: "./images/weapons/cinder.png",
            damageData: {
                base: 12960,
                level: [0, 1296, 1296, 1944, 1944, 2592, 2592, 3240, 3240, 6480, 6480, 16200]
            },
            lastingTime: 2e3,
            reload: 5e3
        },
        hardpoints: {
            light: 0,
            heavy: 3
        },
        color: "#ffa500",
        moduleHardpoints: 4,
        cost: {
            sliver: 10e6,
            gold: 75e2,
            workshopPoints: 2e3
        }
    }, {
        tier: 3,
        name: "Black Pentagon",
        speed: 0.0012,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0, 0.0001, 0.00005, 0, 0.0001, 0.0002, 0.0002],
        scale: 60,
        fieldOfViewMulti: 1.4,
        desc: `
        Black Pentagon has the ability to decide if you need more health or to incapacitate enemies!
        <br><br>
        Recommended Equipment: x3 Devastator
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0M Silver + 7.5K Gold + 1.0K Workshop Points
        `,
        healthData: {
            base: 64e3,
            level: [0, 3e3, 3e3, 3e3, 3e3, 5e3, 5e3, 5e3, 5e3, 5e3, 8e3, 12e3],
        },
        ability: {
            name: "Paladin",
            desc: `
            <strong>Paladin</strong> gives the shape a shield for 10 seconds.
            If the shield is destroyed, it EMP's all enemies around it.
            If the shield isn't destroyed in 10 seconds:
            the shield gets removed, restored health, and extended max durability.
            Ability cools down for 12 seconds.
            `,
            iconSource: "./images/modules/fortifier.png",
            shieldHpData: {
                base: 500e3,
                level: [0, 12e3, 14e3, 15e3, 16e3, 16e3, 16e3, 16e3, 17e3, 19e3, 20e3, 22e3],
            },
            lastingTime: 10e3,
            reload: 6e3
        },
        hardpoints: {
            light: 0,
            heavy: 3
        },
        color: "#000",
        moduleHardpoints: 4,
        cost: {
            sliver: 5e6,
            gold: 75e2,
            workshopPoints: 1e3
        }
    }, {
        tier: 4,
        name: "Red Heptagon",
        speed: 0.0008,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0, 0.0001, 0.00005, 0, 0.0001, 0.0001, 0.0001],
        scale: 120,
        fieldOfViewMulti: 3.5,
        desc: `
        The first shape able to fire 8 heavy weapons simultaneously.
        It's the true embodiment of unparalleled firepower.
        <br><br>
        Recommended Equipment: x8 Reaper / x8 Gauss / x8 Veyron
        `,
        buyDesc: `
        <br><br>
        Cost: 75.0M Silver + 25.0K Gold + 50.0K Workshop Points
        `,
        healthData: {
            base: 134e3,
            level: [0, 8e3, 8e3, 12e3, 12e3, 24e3, 24e3, 24e3, 10e3, 12e3, 15e3, 20e3],
        },
        hardpoints: {
            light: 0,
            heavy: 8
        },
        ability: {
            name: "Self Heal",
            desc: `
            <strong>Self Heal</strong> allows the robot to heal 25% of its health in 5 seconds. 
            After it heals 25%, it begins ability cooldown of 12 sec.
            `,
            iconSource: "./images/self_heal.png",
            lastingTime: 5e3,
            reload: 6e3
        },
        color: "#f00",
        moduleHardpoints: 4,
        cost: {
            sliver: 75e6,
            gold: 25e3,
            workshopPoints: 50e3
        }
    }];
    function defensePointsToResistance(defense) {
        return (100) / (100 + defense);
    }
    class weapon {
        constructor(data, ownerSID = null, slot = null) {
            this.tier = data.tier;
            this.owner = ownerSID;
            this.name = data.name;
            this.desc = data.desc;
            this.projType = data.projType;
            this.dmg = data.damageData ? data.damageData.base : data.dmg;
            this.fireRate = data.fireRate;
            this.slot = slot;
            this.ammo = this.maxammo = data.ammo;
            this.type = data.type;
            this.range = data.range;
            this.reload = data.reload;
            this.imageSource = data.imageSource;
            this.level = 1;
            this.continuousReload = data.continuousReload;
            this.aoeRange = data.aoeRange;
            this.dotDamage = data.dotData ? data.dotData.base : data.dotDamage;
            this.sellPrice = 0;
            this.enhanceCost = (this.tier + 1) * 15e2;
            if (data.cost) {
                this.sellPrice += data.cost.sliver * .75;
                if (data.cost.gold && data.cost.gold > 0) {
                    this.sellPrice += 1250 * data.cost.gold;
                }
            }
        }
    }
    var weaponData = [{
        tier: 0,
        name: "Punisher",
        type: "Light",
        projType: "normal",
        desc: `
        Multi-barreled machine gun with a high rate of fire. Great at close range.
        `,
        buyDesc: `
        <br><br>
        Cost: 30.0K Sliver
        `,
        damageData: {
            base: 128,
            level: [0, 25, 25, 32, 39, 40, 44, 45, 55, 57, 59, 65],
        },
        imageSource: "./images/weapons/punisher.png",
        fireRate: 62.5,
        ammo: 220,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 30e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Landslide",
        type: "Light",
        projType: "rocket",
        desc: `
        Close range rocket launcher with high rate of fire. 
        Rockets deal aoe damage and are effective againist groups of enemies. 
        Improved reloading mechanics makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 230.0K Sliver
        `,
        damageData: {
            base: 560,
            level: [0, 80, 83, 86, 90, 102, 113, 132, 132, 139, 149, 150],
        },
        continuousReload: true,
        imageSource: "./images/weapons/landslide.png",
        aoeRange: 60,
        fireRate: 50,
        ammo: 40,
        reload: 300,
        range: 600,
        cost: {
            sliver: 230e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Shocker",
        type: "Heavy",
        projType: "normal",
        desc: `
        Far ranged weapon used to target enemies at far distances.
        `,
        buyDesc: `
        <br><br>
        Cost: 190.0K Sliver
        `,
        damageData: {
            base: 900,
            level: [0, 210, 220, 240, 260, 260, 268, 280, 300, 310, 322, 330],
        },
        imageSource: "./images/weapons/shocker.png",
        fireRate: 334,
        ammo: 6,
        reload: 5e3,
        range: 3200,
        cost: {
            sliver: 190e3,
            gold: 0
        }
    }, {
        tier: 1,
        name: "Destroyer",
        type: "Heavy",
        projType: "normal",
        desc: `
        Large heavy multi-barreled machine gun. 
        Great at close range since bullets disperse due to high fire rate. 
        Each round shoots 2 projectiles.
        `,
        buyDesc: `
        <br><br>
        Cost: 500 Gold
        `,
        damageData: {
            base: 77,
            level: [0, 34, 38, 38, 41, 41, 59, 59, 66, 75, 85, 95],
        },
        imageSource: "./images/weapons/destroyer.png",
        fireRate: 50,
        ammo: 300,
        reload: 55e2,
        range: 1400,
        cost: {
            sliver: 0,
            gold: 500
        }
    }, {
        tier: 1,
        name: "Avalanche",
        type: "Heavy",
        projType: "rocket",
        desc: `
        Fast firing heavy rocket launcher. AOE Damage makes it a great weapon aganist grouped enemies.
        Improved reloading mechanics makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 750 Gold
        `,
        damageData: {
            base: 1e3,
            level: [0, 1e2, 140, 177, 190, 211, 222, 234, 255, 266, 288, 300],
        },
        continuousReload: true,
        imageSource: "./images/weapons/avalanche.png",
        aoeRange: 40,
        fireRate: 75,
        ammo: 20,
        reload: 600,
        range: 800,
        cost: {
            sliver: 0,
            gold: 750
        }
    }, {
        tier: 2,
        name: "Hawk",
        type: "Light",
        desc: `
        Light laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        Weapon ignores walls and all shields.
        `,
        buyDesc: `
        <br><br>
        Cost: 2.0K Gold
        `,
        damageData: {
            base: 260,
            level: [0, 30, 33, 33, 39, 39, 49, 59, 66, 77, 88, 100],
        },
        imageSource: "./images/weapons/hawk.png",
        fireRate: 200,
        ammo: 30,
        reload: 5e3,
        range: 1000,
        cost: {
            sliver: 0,
            gold: 2e3
        }
    }, {
        tier: 2,
        name: "Eagle",
        type: "Heavy",
        desc: `
        Heavy laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        Weapon ignores walls and all shields.
        `,
        buyDesc: `
        <br><br>
        Cost: 2.0K Gold
        `,
        damageData: {
            base: 218,
            level: [0, 46, 51, 51, 55, 55, 79, 79, 89, 101, 114, 127],
        },
        imageSource: "./images/weapons/eagle.png",
        fireRate: 100,
        ammo: 60,
        reload: 5e3,
        range: 1000,
        cost: {
            sliver: 0,
            gold: 2e3
        }
    }, {
        tier: 2,
        name: "Viper",
        type: "Heavy",
        projType: "normal",
        desc: `
        Large heavy multi-barreled machine gun.
        Projectiles are coated with a small layer of enzymes that corrode metal.
        Each hit emits DOT effect damage that bypasses defense systems of enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        damageData: {
            base: 264,
            level: [0, 34, 34, 38, 48, 48, 54, 54, 62, 68, 102, 102],
        },
        dotData: {
            base: 30,
            level: [0, 10, 10, 20, 20, 20, 20, 30, 30, 30, 40, 40],
        },
        imageSource: "./images/weapons/viper.png",
        fireRate: 40,
        ammo: 100,
        reload: 5e3,
        range: 1400,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Atomizer",
        type: "Light",
        projType: "energy",
        desc: `
        Light energy machine gun.
        Unlimited ammo.
        Longer it fires, the slower and less accurate it becomes.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 536,
            level: [0, 51, 56, 60, 65, 75, 76, 85, 94, 104, 113, 130],
        },
        imageSource: "./images/weapons/atomizer.png",
        fireRate: 50,
        ammo: 1e300,
        reload: 0,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Nucleon",
        type: "Heavy",
        projType: "energy",
        desc: `
        Heavy energy machine gun.
        Unlimited ammo.
        Longer it fires, the slower and less accurate it becomes.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 632,
            level: [0, 82, 88, 102, 113, 121, 144, 157, 171, 184, 184, 185]
        },
        imageSource: "./images/weapons/nucleon.png",
        fireRate: 75,
        ammo: 1e300,
        reload: 0,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 2,
        name: "Sting",
        type: "Light",
        projType: "normal",
        desc: `
        Large light multi-barreled machine gun.
        Projectiles are coated with a small layer of enzymes that corrode metal.
        Each hit emits DOT effect damage that bypasses defense systems of enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        damageData: {
            base: 158,
            level: [0, 10, 10, 12, 14, 14, 16, 16, 18, 20, 30, 30],
        },
        dotData: {
            base: 18,
            level: [0, 4, 4, 8, 8, 8, 8, 12, 12, 12, 16, 16],
        },
        imageSource: "./images/weapons/sting.png",
        fireRate: 40,
        ammo: 100,
        reload: 5e3,
        range: 1400,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Thunder",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy shotgun.
        Shoots 25 projectiles per burst.
        Improved reloading mechanic makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 244,
            level: [0, 33, 33, 33, 44, 44, 44, 55, 55, 66, 66, 77]
        },
        imageSource: "./images/weapons/thunder.png",
        continuousReload: true,
        fireRate: 250,
        ammo: 10,
        reload: 1250,
        range: 800,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Storm",
        projType: "normal",
        type: "Light",
        desc: `
        Light shotgun.
        Shoots 15 projectiles per burst.
        Improved reloading mechanic makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 171,
            level: [0, 23, 23, 23, 31, 31, 31, 39, 39, 46, 46, 54]
        },
        imageSource: "./images/weapons/storm.png",
        continuousReload: true,
        fireRate: 125,
        ammo: 20,
        reload: 625,
        range: 800,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 2,
        name: "Cinder",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy AOE damage weapon.
        This weapon fires pulses of high temperature heat waves to damage enemies.
        Although the heat waves are high in temperature it isn't high enough to cause any DOT damage.
        Due to the speciality of this weapon, it can reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        damageData: {
            base: 1080,
            level: [0, 90, 135, 180, 180, 180, 225, 225, 225, 270, 270, 270]
        },
        imageSource: "./images/weapons/cinder.png",
        continuousReload: true,
        fireRate: 100,
        ammo: 20,
        reload: 300,
        range: 500,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Blaze",
        type: "Light",
        projType: "energy",
        desc: `
        Light compact flamethower that's good at close range.
        Ignores blue energy shields.
        Flames also deal small DOT Damage.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 190,
            level: [0, 40, 40, 40, 40, 80, 80, 80, 120, 120, 160, 160]
        },
        dotData: {
            base: 9,
            level: [0, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8],
        },
        imageSource: "./images/weapons/blaze.png",
        fireRate: 50,
        ammo: 125,
        reload: 3e3,
        range: 600,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Ember",
        type: "Heavy",
        projType: "energy",
        desc: `
        Heavy compact flamethower that's good at close range.
        Ignores blue energy shields.
        Flames also deal small DOT Damage.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 474,
            level: [0, 100, 100, 100, 100, 200, 200, 200, 300, 300, 400, 400]
        },
        dotData: {
            base: 18,
            level: [0, 4, 4, 8, 8, 8, 8, 12, 12, 16, 16, 16],
        },
        imageSource: "./images/weapons/ember.png",
        fireRate: 25,
        ammo: 250,
        reload: 3e3,
        range: 600,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Slumber",
        type: "Light",
        projType: "normal",
        desc: `
        A light moderately fast firing machine gun. Bullets gives effects that slow down enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 315,
            level: [0, 52, 52, 79, 79, 105, 105, 131, 158, 210, 236, 263],
        },
        imageSource: "./images/weapons/slumber.png",
        fireRate: 5,
        ammo: 50,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Delay",
        type: "Heavy",
        projType: "normal",
        desc: `
        A heavy fast firing machine gun. Bullets gives effects that slow down enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 900,
            level: [0, 150, 150, 225, 225, 300, 300, 375, 450, 600, 675, 750],
        },
        imageSource: "./images/weapons/delay.png",
        fireRate: 5,
        ammo: 50,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Rime",
        type: "Light",
        projType: "rocket",
        desc: `
        Light freezing rockets that deal damage.
        Each rocket deals freezing damage and gives the enemy freezing effect.
        Once the effect reaches X stacks, the enemy will be frozen for 1 second.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0M Sliver + 5.0K Gold
        `,
        damageData: {
            base: 208,
            level: [0, 32, 33, 34, 36, 41, 45, 53, 53, 56, 60, 60]
        },
        continuousReload: true,
        imageSource: "./images/weapons/rime.png",
        aoeRange: 50,
        fireRate: 25,
        ammo: 80,
        reload: 300,
        range: 800,
        cost: {
            sliver: 1e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Glacier",
        type: "Heavy",
        projType: "rocket",
        desc: `
        Heavy freezing rockets that deal damage.
        Each rocket deals freezing damage and gives the enemy freezing effect.
        Once the effect reaches X stacks, the enemy will be frozen for 1 second.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0M Sliver + 5.0K Gold
        `,
        damageData: {
            base: 362,
            level: [0, 48, 50, 51, 54, 62, 68, 80, 80, 84, 90, 90]
        },
        continuousReload: true,
        imageSource: "./images/weapons/glacier.png",
        aoeRange: 50,
        fireRate: 25,
        ammo: 80,
        reload: 300,
        range: 800,
        cost: {
            sliver: 1e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Devastator",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy sonic shotgun that fires 7 projectiles per burst.
        Each impact of the sonic blasts would knockback enemies.
        Due to how sonic blast waves work, the knockback is high but the range is small.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0M Silver + 5.0K Gold
        `,
        damageData: {
            base: 1821,
            level: [0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
        },
        imageSource: "./images/weapons/devastator.png",
        continuousReload: true,
        fireRate: 400,
        ammo: 16,
        reload: 1e3,
        range: 500,
        cost: {
            sliver: 5e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Scatter",
        projType: "normal",
        type: "Light",
        desc: `
        Light sonic shotgun that fires 7 projectiles per burst.
        Each impact of the sonic blasts would knockback enemies.
        Due to how sonic blast waves work, the knockback is high but the range is small.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0M Silver + 5.0K Gold
        `,
        damageData: {
            base: 910,
            level: [0, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49]
        },
        imageSource: "./images/weapons/scatter.png",
        continuousReload: true,
        fireRate: 400,
        ammo: 16,
        reload: 1e3,
        range: 500,
        cost: {
            sliver: 5e6,
            gold: 5e3
        }
    }, {
        tier: 4,
        name: "Evora",
        projType: "normal",
        type: "Light",
        desc: `
        Light sonic machine gun that fires 2 projectiles per burst.
        After 1 one of continuous fire, the weapon goes into increased firing state, and fires x1.5 faster.
        The sonic blasts that are shot only deal [GRAY DAMAGE].
        `,
        buyDesc: `
        <br><br>
        Cost: 50.0M Silver + 20.0K Gold + 7.5K Workshop Points
        `,
        damageData: {
            base: 1446,
            level: [0, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114]
        },
        imageSource: "./images/weapons/evora.png",
        fireRate: 40,
        ammo: 175,
        reload: 6e3,
        range: 1200,
        cost: {
            sliver: 5e6,
            gold: 20e3,
            workshopPoints: 75e2
        }
    }, {
        tier: 4,
        name: "Veyron",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy sonic machine gun that fires 2 projectiles per burst.
        After 1 one of continuous fire, the weapon goes into increased firing state, and fires x1.5 faster.
        The sonic blasts that are shot only deal [GRAY DAMAGE].
        `,
        buyDesc: `
        <br><br>
        Cost: 50.0M Silver + 20.0K Gold + 7.5K Workshop Points
        `,
        damageData: {
            base: 2169,
            level: [0, 171, 171, 171, 171, 171, 171, 171, 171, 171, 171, 171]
        },
        imageSource: "./images/weapons/veyron.png",
        fireRate: 40,
        ammo: 175,
        reload: 6e3,
        range: 1200,
        cost: {
            sliver: 50e6,
            gold: 20e3,
            workshopPoints: 75e2
        }
    }, {
        tier: 3,
        name: "Reaper",
        type: "Heavy",
        projType: "normal",
        desc: `
        Far ranged weapon used to target enemies at far distances.
        Bullets are coated with high layers of special material,
        that makes it bypass [REFLECTOR] and 50% of all [DEFENSE POINTS].
        `,
        buyDesc: `
        <br><br>
        Cost: 20.0M Silver + 5.0K Gold + 5.0K Workshop Points
        `,
        damageData: {
            base: 1500,
            level: [0, 125, 125, 150, 150, 150, 150, 175, 175, 200, 200, 200],
        },
        imageSource: "./images/weapons/reaper.png",
        fireRate: 100,
        ammo: 20,
        reload: 25e2,
        range: 3800,
        cost: {
            sliver: 20e6,
            gold: 5e3,
            workshopPoints: 5e3
        }
    }];
    class module {
        constructor(data, ownerSID = null, slot = null) {
            this.name = data.name;
            this.owner = ownerSID;
            this.slot = slot;
            this.desc = data.desc;
            this.tier = data.tier;
            this.imageSource = data.imageSource;
            this.level = 1;
            this.healthIncrease = data.healthIncrease;
            if (data.healthIncreaseData) {
                this.healthIncrease = data.healthIncreaseData.base;
            }
            this.selfFixRepair = data.selfFixRepair;
            if (data.selfFixRepairData) {
                this.selfFixRepair = data.selfFixRepairData.base;
            }
            this.dmgIncrease = data.dmgIncrease;
            if (data.dmgIncreaseData) {
                this.dmgIncrease = data.dmgIncreaseData.base;
            }
            this.immunePercent = data.immunePercent;
            if (data.immunePercentData) {
                this.immunePercent = data.immunePercentData.base;
            }
            this.lastingTime = data.lastingTime;
            if (data.lastingTimeData) {
                this.lastingTime = data.lastingTimeData.base;
            }
            this.shieldRegen = data.shieldRegen;
            if (data.shieldRegenData) {
                this.shieldRegen = data.shieldRegenData.base;
            }
            this.baseDefensePoints = data.baseDefensePoints;
            if(data.baseDefensePointsData) {
                this.baseDefensePoints = data.baseDefensePointsData.base;
            }
            this.durabilityLostAmp = data.durabilityLostAmp;
            if(data.durabilityLostAmpData) {
                this.durabilityLostAmp = data.durabilityLostAmpData.base;
            }
            this.increasedDefensePoints = data.increasedDefensePoints;
            if(data.increasedDefensePointsData) {
                this.increasedDefensePoints = data.increasedDefensePointsData.base;
            }
            this.shieldHealth = data.shieldHealth;
            if (data.shieldHealthData) {
                this.shieldHealth = data.shieldHealthData.base;
            }
            this.grayDamageDecrease = data.grayDamageDecreaseData;
            if (data.grayDamageDecreaseData) {
                this.grayDamageDecrease = data.grayDamageDecreaseData.base;
            }
            this.antiControl = data.antiControl;
            if(data.antiControlData) {
                this.antiControl = data.antiControlData.base;
            }
        }
    }
    var moduleData = [{
        tier: 0,
        name: "Armor Plating",
        desc: `
        Increases shape's durability.
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Sliver
        `,
        healthIncreaseData: {
            base: 0.02,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/modules/armor_plating.png",
        cost: {
            sliver: 500e3,
            gold: 0
        }
    }, {
        tier: 1,
        name: "Heavy Armor Plating",
        desc: `
        Heavy armor kit, allows for even more protection to your shapes.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0K Gold
        `,
        healthIncreaseData: {
            base: 0.07,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/modules/heavy_armor_plating.png",
        cost: {
            sliver: 0,
            gold: 1e3
        }
    }, {
        tier: 2,
        name: "Self Fix Unit",
        desc: `
        Repairs a portion of a shape's maximum durability each second.
        `,
        buyDesc: `
        <br><br>
        Cost: 2K Gold
        `,
        selfFixRepairData: {
            base: 360,
            level: [0, 180, 180, 180, 520, 560]
        },
        imageSource: "./images/modules/self_fix_unit.png",
        cost: {
            sliver: 0,
            gold: 2e3
        }
    }, {
        tier: 0,
        name: "Nuclear Reactor",
        desc: `
        Increases shape's weapon damage output.
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Sliver
        `,
        dmgIncreaseData: {
            base: 0.02,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/modules/nuclear_reactor.png",
        cost: {
            sliver: 500e3,
            gold: 0
        }
    }, {
        tier: 1,
        name: "Thermonuclear Reactor",
        desc: `
        Thermonuclear Reactor, increases weapon damage output even more.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0K Gold
        `,
        dmgIncreaseData: {
            base: 0.05,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/thermonuclear_reactor.png",
        cost: {
            sliver: 0,
            gold: 1e3
        }
    }, {
        tier: 3,
        name: "Arc Reactor",
        desc: `
        Arc Reactor, provies huge bounce to damage but decreases health.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        dmgIncreaseData: {
            base: 0.1,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        healthIncreaseData: {
            base: -0.1,
            level: [0, -0.02, -0.02, -0.02, -0.02, -0.02]
        },
        imageSource: "./images/modules/arc_reactor.png",
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Balance Unit",
        desc: `
        Increases shape's durability and weapon damage output.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        healthIncreaseData: {
            base: 0.05,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        dmgIncreaseData: {
            base: 0.04,
            level: [0, 0.01, 0.01, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/balance_unit.png",
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Last Stand",
        desc: `
        Once the shape enters low durability, it stops the shape from taking damage for X seconds.
        Only can be used once.
        More modules you put, the quicker you would get the immunity.
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold
        `,
        immunePercentData: {
            base: 0.05,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        lastingTimeData: {
            base: 2e3,
            level: [0, 500, 500, 500, 500, 500]
        },
        imageSource: "./images/modules/last_stand.png",
        cost: {
            sliver: 25e6,
            gold: 5e3
        }
    }, {
        tier: 2,
        name: "Fortifier",
        desc: `
        Increases the regen speed and durability of shields.
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Silver + 2.0K Gold
        `,
        shieldHealthData: {
            base: 0.1,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        shieldRegenData: {
            base: 0.1,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/fortifier.png",
        cost: {
            sliver: 500e3,
            gold: 2e3
        }
    }, {
        tier: 3,
        name: "Damage Controller",
        desc: `
        Increases shape health and decreases gray damage taken.
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold
        `,
        healthIncreaseData: {
            base: 0.03,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        grayDamageDecreaseData: {
            base: 0.05,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/damage_controller.png",
        cost: {
            sliver: 25e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Repair Amplifier",
        desc: `
        When receiving damage, your shape gains a 0.06% bonus to regeneration for the entire battle.
        When the maximum bonuses are reached, the robot gains increased defense points and restores a percentage of gray damage.
        When installing several such modules, the speed of receiving bonuses increases, but not their maximum value.<br><br>
        MAX STACKS: 60
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold + 10.0K Workshop Points
        `,
        baseDefensePointsData: {
            base: 5,
            level: [0, 4, 4, 4, 4, 4]
        },
        durabilityLostAmpData: {
            base: 0.08,
            level: [0, -0.01, -0.01, -0.01, -0.01, -0.01]
        },
        increasedDefensePointsData: {
            base: 5,
            level: [0, 8, 8, 8, 8, 8]
        },
        imageSource: "./images/modules/repair_amplifier.png",
        cost: {
            sliver: 25e6,
            gold: 5e3,
            workshopPoints: 10e3
        }
    }, {
        tier: 3,
        name: "Anti Control",
        desc: `
        Reduces the duration of negative effects.
        When installing several such modules, the bonus won't stack.
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold + 10.0K Workshop Points
        `,
        antiControlData: {
            base: .25,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        imageSource: "./images/modules/anticontrol.png",
        cost: {
            sliver: 25e6,
            gold: 5e3,
            workshopPoints: 10e3
        }
    }];
    function abbreviateNumber(value) {
        if (value >= 1e12) {
            return (value / 1e12).toFixed(1) + "T";
        } else if (value >= 1e9) {
            return (value / 1e9).toFixed(1) + "B";
        } else if (value >= 1e6) {
            return (value / 1e6).toFixed(1) + "M";
        } else if (value >= 1e3) {
            return (value / 1e3).toFixed(1) + "K";
        }
        return value;
    }
    function updateMoneyDisplay(index, value) {
        if (player[index] != null) player[index] += value;
        document.getElementById("moneyDisplay").innerHTML = `
        Silver: ${abbreviateNumber(player.sliver)} | League: ${player.league}<br>
        Gold: ${abbreviateNumber(player.gold)} | Workshop Points: ${player.workshopPoints >= 100e3 ? abbreviateNumber(player.workshopPoints) : player.workshopPoints}<br>
        Keys: ${abbreviateNumber(player.keys)}
        `;
        if (index) saveGameData();
    }
    updateMoneyDisplay();
    function resize() {
        if (player.gameMode >= 0) updateChooseSlots();
        document.getElementById("sideDisplay").style.width = (window.innerWidth - 375) + "px";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let scaleFillNative = Math.max(window.innerWidth / maxScreen.x, window.innerHeight / maxScreen.y);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.setTransform(
            scaleFillNative, 0,
            0, scaleFillNative,
            (window.innerWidth - (maxScreen.x * scaleFillNative)) / 2,
            (window.innerHeight - (maxScreen.y * scaleFillNative)) / 2
        );
    }
    window.addEventListener("resize", resize);
    resize();
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    if (player.shapes.length == 0) {
        player.shapes.push(new shape(shapeData[0], 0));
        player.weapons.push(new weapon(weaponData[0], 0, 0));
        player.weapons.push(new weapon(weaponData[0], 0, 1));
    }
    function renderStar(ctxt, spikes, outer, inner) {
        let rot = Math.PI / 2 * 3;
        let x, y;
        let step = Math.PI / spikes;
        ctxt.beginPath();
        ctxt.moveTo(0, -outer);
        for (var i = 0; i < spikes; i++) {
            x = Math.cos(rot) * outer;
            y = Math.sin(rot) * outer;
            ctxt.lineTo(x, y);
            rot += step;
            x = Math.cos(rot) * inner;
            y = Math.sin(rot) * inner;
            ctxt.lineTo(x, y);
            rot += step;
        }
        ctxt.lineTo(0, -outer);
        ctxt.closePath();
    }
    function renderCircle(x, y, scale, ctxt, dontStroke, dontFill, color, lineColor, lineWidth) {
        ctxt = ctxt || ctx;
        ctxt.lineWidth = lineWidth || 5.5;
        ctxt.strokeStyle = lineColor || "#000";
        ctxt.fillStyle = color;
        ctxt.beginPath();
        ctxt.arc(x, y, scale, 0, 2 * Math.PI);
        if (!dontFill) ctxt.fill();
        if (!dontStroke) ctxt.stroke();
    }
    var shapeSprites = {};
    function drawStoreDisplay(item, type) {
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; color: ${tierColor(item)}; margin-top: 5px; width: 100%;">${item.name}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${item.desc}
        ${item.ability ? "<br><br>" + item.ability.desc : ""}
        ${item.dontSell ? `
        <br><br>
        Exclusive Content: Not Purchasable
        ` : item.buyDesc}
        </div>
        <div id="stats" style="position: absolute; top: 260px; left: 10px;">
        </div>
        `;
        if (type == "shapes") {
            document.getElementById("stats").innerHTML = `
            Health: ${abbreviateNumber(item.healthData.base)}<br>
            Speed: ${item.speed * 1000} PX/SEC<br>
            Light Hardpoints: ${item.hardpoints.light}<br>
            Heavy Hardpoints: ${item.hardpoints.heavy}<br>
            ${item.shieldData ? `Energy Shield Health: ${abbreviateNumber(item.shieldData.base)}<br>` : ""}
            ${item.ability && item.ability.damageData && item.ability.damageData.base ? `Ability Dmg: ${abbreviateNumber(item.ability.damageData.base)}<br>` : ""}
            ${item.ability && item.ability.dotData && item.ability.dotData.base ? `Ability DOT Dmg: ${abbreviateNumber(item.ability.dotData.base)}<br>` : ""}
            ${item.ability && item.ability.shieldHpData && item.ability.shieldHpData.base ? `Ability Shield HP: ${abbreviateNumber(item.ability.shieldHpData.base)}<br>` : ""}
            ${item.reflector ? `Damage Reflection: ${item.reflector * 100}%<br>` : ""}
            ${item.baseDamageIncrease ? `Base Dmg Increase: ${item.baseDamageIncrease * 100}%<br>` : ""}
            ${item.builtInDefensePoints ? `Defense Points: ${item.builtInDefensePoints} (${((1 - defensePointsToResistance(item.builtInDefensePoints)) * 100).toFixed(1)}% Resistance)<br>` : ""}
            ${item.dotResistance ? `DOT Resistance: ${removeDecimals((1-item.dotResistance) * 100)}%<br>` : ""}
            `;
        } else if (type == "weapons") {
            document.getElementById("stats").innerHTML = `
            Type: ${item.type}<br>
            Damage: ${abbreviateNumber(item.damageData.base)}<br>
            Range: ${item.range} PX<br>
            ${item.reload > 0 ? `Reload: ${item.reload / 1000} sec<br>` : ""}
            ${item.aoeRange ? "AOE Range: " + item.aoeRange + " PX<br>" : ""}
            ${item.dotData ? `DOT Damage: ${abbreviateNumber(item.dotData.base)}<br>` : ""}
            `;
        } else if (type == "modules") {
            document.getElementById("stats").innerHTML = `
            ${item.dmgIncreaseData ? "Increased Damage: " + removeDecimals(item.dmgIncreaseData.base * 100) + "%<br>" : ""}
            ${item.healthIncreaseData ? "Increased Durability: " + removeDecimals(item.healthIncreaseData.base * 100) + "%<br>" : ""}
            ${item.selfFixRepairData ? "Repair Power: " + abbreviateNumber(item.selfFixRepairData.base) + "/SEC<br>" : ""}
            ${item.immunePercentData ? "Immunity Threshold: " + (item.immunePercentData.base * 100) + "%<br>" : ""}
            ${item.lastingTimeData ? "Effect Duration: " + (item.lastingTimeData.base / 1000) + " sec<br>" : ""}
            ${item.shieldHealthData ? "Shield Durability Increase: " + removeDecimals(item.shieldHealthData.base * 100) + "%<br>" : ""}
            ${item.shieldRegenData ? "Shield Regen Decrease: " + removeDecimals(item.shieldRegenData.base * 100) + "%<br>" : ""}
            ${item.grayDamageDecreaseData ? "Gray Damage Decrease: " + removeDecimals(item.grayDamageDecreaseData.base * 100) + "%<br>" : ""}
            ${item.durabilityLostAmpData ? "Durability Requirement: " + (item.durabilityLostAmpData.base * 100) + "%<br>" : ""}
            ${item.baseDefensePointsData ? "Base Defense Points Increase: " + (item.baseDefensePointsData.base) + "<br>" : ""}
            ${item.increasedDefensePointsData ? "Defense Points (@max stacks): " + (item.increasedDefensePointsData.base) + "<br>" : ""}
            ${item.antiControlData ? `Effect Duration Reduction: ${item.antiControlData.base * 100}%<br>` : ""}
            `;
        } else {
            document.getElementById("stats").innerHTML = `
            ${item.healthIncrease ? "Health Increase: " + removeDecimals(item.healthIncrease * 100) + "%<br>" : ""}
            ${item.dmgIncrease ? `Dmg Increase: ${removeDecimals(item.dmgIncrease * 100)}%<br>` : ""}
            ${item.repairPowerPercent ? `Repair Power: ${item.repairPowerPercent * 100}%/SEC<br>` : ""}
            `;
        }
        document.getElementById("Buy").style.display = item.dontSell ? "none" : "block";
        if (type == "chips") {
            document.getElementById("weaponImage").style.backgroundSize = "180px 180px";
            document.getElementById("weaponImage").style.backgroundImage = "url('./images/microchip.png')";
        } else {
            let weaponImg = type == "shapes" ? getShapeSprite(item, true) : type == "weapons" ? getWeaponIcon(item, true) : getModuleIcon(item, true);
            weaponImg.style = "width: 100%; height: 100%;";
            document.getElementById("weaponImage").appendChild(weaponImg);
        }
    }
    var arrow_1_left = "./images/arrow_1_left.png";
    var arrow_1_right = "./images/arrow_1_right.png";
    function drawStore(type) {
        let adjust = window.innerWidth - 375;
        let filteredThings = [];
        if (type == "shapes") {
            filteredThings = shapeData.sort((a, b) => a.tier - b.tier);
        } else if (type == "weapons") {
            filteredThings = weaponData.sort((a, b) => a.tier - b.tier);
        } else if (type == "modules") {
            filteredThings = moduleData.sort((a, b) => a.tier - b.tier);
        } else {
            filteredThings = microShipData.sort((a, b) => a.tier - b.tier);
        }
        let currentIndex = 0;
        document.getElementById("storeTab").innerHTML = `
        <div id="goToPre" style="display: none; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
        </div>
        <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
        </div>
        <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
        </div>
        <div id="Buy" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 29}px;">BUY</span>
        </div>
        `;
        drawStoreDisplay(filteredThings[currentIndex], type);
        if (!filteredThings[currentIndex + 1]) {
            document.getElementById("goToNext").style.display = "none";
        }
        document.getElementById("goToNext").onclick = function () {
            if (filteredThings[currentIndex + 1]) {
                currentIndex++;
                drawStoreDisplay(filteredThings[currentIndex], type);
                if (filteredThings[currentIndex + 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredThings[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "block";
                } else {
                    document.getElementById("goToPre").style.display = "none";
                }
            }
        }
        document.getElementById("goToPre").onclick = function () {
            if (filteredThings[currentIndex - 1]) {
                currentIndex--;
                drawStoreDisplay(filteredThings[currentIndex], type);
                if (filteredThings[currentIndex - 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredThings[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "block";
                } else {
                    document.getElementById("goToNext").style.display = "none";
                }
            }
        }
        document.getElementById("Buy").onclick = function () {
            if (type == "chips") {
                if (player.workshopPoints - filteredThings[currentIndex].cost >= 0) {
                    updateMoneyDisplay("workshopPoints", -filteredThings[currentIndex].cost);
                    microships.push(new microship(filteredThings[currentIndex]));
                    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                }
            } else {
                if (player.sliver - filteredThings[currentIndex].cost.sliver >= 0 && player.gold - filteredThings[currentIndex].cost.gold >= 0) {
                    if (!filteredThings[currentIndex].cost.workshopPoints ? true : player.workshopPoints - filteredThings[currentIndex].cost.workshopPoints) {
                        updateMoneyDisplay("sliver", -filteredThings[currentIndex].cost.sliver);
                        updateMoneyDisplay("gold", -filteredThings[currentIndex].cost.gold);
                        updateMoneyDisplay("workshopPoints", -(filteredThings[currentIndex].cost.workshopPoints || 0));
                        document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                        if (type == "weapons") {
                            player.weapons.push(new weapon(filteredThings[currentIndex], null, null));
                        } else if (type == "shapes") {
                            let sid = shapeSids;
                            player.shapes.push(new shape(filteredThings[currentIndex]));
                            let hardpoints = filteredThings[currentIndex].hardpoints.light + filteredThings[currentIndex].hardpoints.heavy;
                            for (let i = 0; i < hardpoints; i++) {
                                if (i < filteredThings[currentIndex].hardpoints.light && filteredThings[currentIndex].hardpoints.light > 0) {
                                    player.weapons.push(new weapon(weaponData[0], sid, i));
                                } else {
                                    player.weapons.push(new weapon(weaponData[2], sid, i));
                                }
                            }
                        } else {
                            player.modules.push(new module(filteredThings[currentIndex], null, null));
                        }
                    }
                }
            }
            saveGameData();
        }
    }
    function exportProgress() {
        let content = {};
        content.shapeSids = shapeSids;
        content.shapes = [];
        for (let i = 0; i < player.shapes.length; i++) {
            let shape = player.shapes[i];
            content.shapes.push({
                name: shape.name,
                sid: shape.sid,
                level: shape.level,
                slot: shape.slot
            });
        }
        content.weapons = [];
        for (let i = 0; i < player.weapons.length; i++) {
            let weapon = player.weapons[i];
            content.weapons.push({
                name: weapon.name,
                owner: weapon.owner,
                slot: weapon.slot,
                level: weapon.level
            });
        }
        content.modules = [];
        for (let i = 0; i < player.modules.length; i++) {
            let MODLUE = player.modules[i];
            content.modules.push({
                name: MODLUE.name,
                owner: MODLUE.owner,
                slot: MODLUE.slot,
                level: MODLUE.level
            });
        }
        content.chips = [];
        for (let i = 0; i < microships.length; i++) {
            let MODLUE = microships[i];
            content.chips.push({
                name: MODLUE.name,
                owner: MODLUE.owner,
                slot: MODLUE.slot
            });
        }
        content.ULIMATEXP = player.ULIMATEXP;
        content.slotData = JSON.stringify(slotData);
        content.league = player.league;
        content.keys = player.keys;
        content.sliver = player.sliver;
        content.gold = player.gold;
        content.workshopPoints = player.workshopPoints;
        content.workshopQueue = JSON.stringify(workshopQueue);
        content.operationData = JSON.stringify(operationData);
        content.tasks = JSON.stringify(tasks);
        content = JSON.stringify(content);
        let blob = new Blob([content], { type: "text/plain" });
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.download = "PROGRESS.txt";
        link.click();
        window.URL.revokeObjectURL(url);
    }
    /*function isBase64(str) {
        try {
            return btoa(atob(str)) === str;
        } catch (err) {
            return false;
        }
    }*/
    function importProgress(content) {
        player.shapes = [];
        player.weapons = [];
        player.modules = [];
        microships = [];
        for (let i = 0; i < content.shapes.length; i++) {
            let data = content.shapes[i];
            if (data) {
                try {
                    let sid = shapeSids;
                    let Shape = shapeData.find(e => data.name == e.name);
                    let newShape = new shape(Shape, data.slot);
                    newShape.slot = data.slot;
                    if (data.slot) {
                        slotData[data.slot].unlocked = true;
                        slotData[data.slot].used = true;
                    }
                    newShape.sid = data.sid;
                    if (newShape.sid == undefined || newShape.sid == null) {
                        newShape.sid = sid;
                    }
                    for (let t = 0; t < data.level - 1; t++) {
                        upgradeShape(newShape, true);
                    }
                    player.shapes.push(newShape);
                } catch (e) {
                }
            }
        }
        for (let i = 0; i < content.weapons.length; i++) {
            let data = content.weapons[i];
            if (data) {
                let Weapon = weaponData.find(e => data.name == e.name);
                let newWeapon = new weapon(Weapon, data.owner, data.slot);
                let shapeSid = player.shapes.find(e => e.sid == data.owner);
                if (!shapeSid) {
                    newWeapon.owner = null;
                    newWeapon.slot = null;
                }
                for (let t = 0; t < data.level - 1; t++) {
                    upgradeWeapon(newWeapon, null, null, true);
                }
                player.weapons.push(newWeapon);
            }
        }
        for (let i = 0; i < content.modules.length; i++) {
            let data = content.modules[i];
            if (data) {
                let Module = moduleData.find(e => data.name == e.name);
                let newModule = new module(Module, data.owner, data.slot);
                let shapeSid = player.shapes.find(e => e.sid == data.owner);
                if (!shapeSid) {
                    newModule.owner = null;
                    newModule.slot = null;
                }
                for (let t = 0; t < data.level - 1; t++) {
                    upgradeModule(newModule, null, null, true);
                }
                player.modules.push(newModule);
            }
        }
        
        if (content.workshopPoints != null) {
            player.workshopPoints = content.workshopPoints;
        }
        if (content.chips) {
            for (let i = 0; i < content.chips.length; i++) {
                let data = content.chips[i];
                if (data) {
                    let Module = microShipData.find(e => data.name == e.name);
                    let newModule = new microship(Module, data.owner, data.slot);
                    let shapeSid = player.shapes.find(e => e.sid == data.owner);
                    if (!shapeSid) {
                        newModule.owner = null;
                        newModule.slot = null;
                    }
                    microships.push(newModule);
                }
            }
        }
        if (content.workshopQueue) {
            workshopQueue = JSON.parse(content.workshopQueue);
        }
        if (content.slotData) {
            content.slotData = JSON.parse(content.slotData);
            slotData = [...content.slotData];
        }
        if (content.league) {
            player.league = content.league;
        } else {
            player.league = 0;
        }
        if (content.tasks) {
            tasks = JSON.parse(content.tasks);
        }
        if (content.operationData) {
            operationData = JSON.parse(content.operationData);
            let hasKeys = operationData.data.find(e => e.type == "keys");
            if (!hasKeys) {
                generateOperation();
                addOperationXP(10e3);
            }
        }
        if (!content.ULIMATEXP && content.ULIMATEXP != null && !isNaN(content.ULIMATEXP)) {
            player.ULIMATEXP = content.ULIMATEXP;
        }
        player.keys = content.keys;
        player.sliver = content.sliver;
        player.gold = content.gold;
        updateMoneyDisplay();
        if (content.shapeSids && content.shapeSids != "NaN") {
            shapeSids = content.shapeSids;
        }
        updateSlots();
        document.getElementById("sideDisplay").innerHTML = mainDisplayText;
        saveGameData();
    }
    window.exportProgress = exportProgress;
    var dmghealtext = true;
    document.getElementById("settingsToggle").onclick = function () {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="width: 100%; text-align: center; font-size: 40px;">
        Settings
        </div>
        <hr>
        <div style="margin-left: 10px;">
        <button onclick="exportProgress()">Export</button><br>
        <input id="importFile" type="file" style="width: 180px;" accept=".txt"> <button id="import">Import</button><br><br>
        <button id="resetProgress">Reset Progress</button> <input type="checkbox" id="confirmasd2asd"> <input type="checkbox" id="confirma123sdasd"> <input type="checkbox" id="confirmasdasd"><br>
        ^^^THE CHECKBOXES NEXT TO THIS BUTTON ARE CONFIRMATION CHECKBOXES.<br>
        IF THEY'RE ALL CHECKED AND YOU CLICK THE BUTTON, YOUR PROGRESS IS INSTANTLY RESET.<br>
        NO 2ND CONFIRMATION WHEN YOU CLICK ON THE BUTTON!<br><br>
        <h2>Controls</h2>
        - WASD to move<br>
        - R to quick reload, but you move 2 times slower<br>
        - E to use shape's special ability<br>
        - SPACE to shoot weapons<br>
        - On hanger, 1-8 quick select slot<br>
        - Enter to quick upgrade<br>
        - arrows interact with shop<br>
        - SPACE while in lootbox animation, would speed it up<br><br>
        <h2>Visual Settings</h2>
        Damage/Healing Text: <input type="checkbox" id="dmghealtext" checked>
        </div>
        `;
        document.getElementById("dmghealtext").checked = dmghealtext;
        document.getElementById("dmghealtext").onclick = function() {
            dmghealtext = !dmghealtext;
        }
        document.getElementById("resetProgress").onclick = function () {
            if (document.getElementById("confirma123sdasd").checked && document.getElementById("confirmasd2asd").checked && document.getElementById("confirmasdasd").checked) {
                operationData = {
                    xp: 0,
                    currentIndex: 0,
                    data: []
                };
                workshopQueue = [];
                tasks = [];
                microships = [];
                player = {
                    sliver: 200e3,
                    gold: 250,
                    keys: 1e3,
                    shapes: [],
                    weapons: [],
                    modules: [],
                    gameMode: -1,
                    ULIMATEXP: 0,
                    workshopPoints: 0,
                    league: 0
                };
                shapeSids = 0;
                slotData = [{unlocked: true,used: true,cost: 0}, {unlocked: false,used: false,cost: 50}, {unlocked: false,used: false,cost: 200}, {unlocked: false,used: false,cost: 1e3}, {unlocked: false,used: false,cost: 1e3}, {unlocked: false,used: false,cost: 2e3}, {unlocked: false,used: false,cost: 2e3}, {unlocked: false,used: false,cost: 3e3}];
                if (player.shapes.length == 0) {
                    player.shapes.push(new shape(shapeData[0], 0));
                    player.weapons.push(new weapon(weaponData[0], 0, 0));
                    player.weapons.push(new weapon(weaponData[0], 0, 1));
                }
                document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                updateSlots();
                updateMoneyDisplay();
                saveGameData();
                setTimeout(() => {location.reload();}, 250);
            }
        }
        document.getElementById("import").onclick = function () {
            let fileInput = document.getElementById("importFile");
            if (fileInput.files.length > 0) {
                let selectedFile = fileInput.files[0];
                if (selectedFile.name.endsWith(".txt")) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let fileContents = e.target.result;
                        fileContents = fileContents.toString();
                        fileContents = JSON.parse(fileContents);
                        importProgress(fileContents);
                    };
                    reader.readAsText(selectedFile);
                }
            } else {
                alert("No file selected.");
            }
        };
    }
    var tasks = [];
    var tasksTypes = [{
        type: "gold",
        howGain: "dmg",
        XPNEEDED: 1e6,
        reward: 60,
        description: "Deal 1.0M Damage"
    }, {
        type: "gold",
        howGain: "kills",
        XPNEEDED: 50,
        reward: 30,
        description: "Get 50 Kills"
    }, {
        type: "gold",
        howGain: "dmg",
        XPNEEDED: 10e6,
        reward: 300,
        description: "Deal 10.0M Damage"
    }, {
        type: "gold",
        howGain: "kills",
        XPNEEDED: 5e3,
        reward: 10e3,
        description: "Get 5.0K Kills"
    }, {
        type: "gold",
        howGain: "dmg",
        XPNEEDED: 500e6,
        reward: 10e3,
        description: "Deal 500.0M Damage"
    }, {
        type: "gold",
        howGain: "beacon",
        XPNEEDED: 5,
        reward: 15,
        description: "Capture 5 Beacons"
    }, {
        type: "gold",
        howGain: "beacon",
        XPNEEDED: 100,
        reward: 5e3,
        description: "Capture 100 Beacons"
    }, {
        type: "workshopPoints",
        howGain: "8 boss",
        XPNEEDED: 250,
        reward: 15e3,
        description: "Kill Level 8 Boss 250 Times"
    }];
    class task {
        constructor(data) {
            this.type = data.type;
            this.howGain = data.howGain;
            this.xp = 0;
            this.maxxp = data.XPNEEDED;
            this.desc = data.description;
            this.reward = data.reward;
        }
    }
    function addTaskXP(type, amount) {
        for(let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            if(task.howGain == type) {
                task.xp += amount;
            }
        }
    }
    function generateTasks() {
        if(tasks.length >= 10) return;
        for (let i = 0; i < 2; i++) {
            if(tasks.length >= 10) break;
            let Task = tasksTypes[Math.floor(tasksTypes.length * Math.random())];
            tasks.push(new task(Task));
        }
    }
    document.getElementById("offersToggles").onclick = function () {
        if(tasks.length) {
            document.getElementById("sideDisplay").innerHTML = `
            <div style="width: 100%; font-size: 40px; text-align: center;">
            Tasks
            </div>
            <hr>
            `;
            for(let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                let url = task.type == "gold" ? auSource : "./images/workshop.png";
                let width = (window.innerWidth-375)-80;
                document.getElementById("sideDisplay").innerHTML += `
                <div style="position: absolute; width: ${width}px; height: 100px; top: ${80+(i * 140)}px; left: 40px; border-radius: 4px; background-color: rgb(0, 0, 0, .2);">
                <div style="position: absolute; width: 100px; height: 100px; left: 0px; top: 0px; background-size: 100px 100px; background-image: url('${url}')">
                </div>
                <div style="position: absolute; font-size: 24px; left: 5px; bottom: 0px;">
                <strong>${abbreviateNumber(task.reward)}</strong>
                </div>
                <div style="position: absolute; height: 11px; width: ${width-305}px; font-size: 16px; left: 105px; top: ${(100/2)-11}px; background-color: #808080;">
                <div style="position: absolute; height: 100%; width: ${100*Math.min(1, task.xp/task.maxxp)}%; font-size: 16px; left: 0px; top: 0px; background-color: #0f0;">
                </div>
                <div style="position: absolute; color: #fff; top: -4px; left: 0px; width: 100%; text-align: center; margin: 0px; padding: 0; font-size: 14px;">
                ${abbreviateNumber(task.xp)}/${abbreviateNumber(task.maxxp)}
                </div>
                </div>
                <div style="position: absolute; font-size: 16px; left: 105px; top: ${(100/2)+11}px;">
                ${task.desc}
                </div>
                <div id="collectTask${i}" style="position: absolute; font-size: 35px; text-align: center; cursor: pointer; top: ${25}px; right: 10px; width: 180px; border-radius: 4px; height: 50px; background-color: #0f0;">
                Collect
                </div>
                </div>
                `;
            }
            for(let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                if(task.xp < task.maxxp) {
                    document.getElementById(`collectTask${i}`).style.cursor = null;
                    document.getElementById(`collectTask${i}`).style.backgroundColor = "#808080";
                }else {
                    document.getElementById(`collectTask${i}`).onclick = function() {
                        updateMoneyDisplay(task.type, task.reward);
                        tasks.splice(i, 1);
                        document.getElementById("offersToggles").click();
                    }
                }
            }
        }else {
            generateTasks();
            document.getElementById("offersToggles").click();
        }
    };
    var workshopQueue = [];
    function updateProductionDisplay() {
        for (let i = 0; i < workshopQueue.length; i++) {
            workshopQueue[i].duration = Math.max(workshopQueue[i].duration - 500, 0);
        }
        if (document.getElementById("productiondisplay")) {
            document.getElementById("productiondisplay").innerHTML = "";
            for (let i = 0; i < workshopQueue.length; i++) {
                let time = "";
                if (workshopQueue[i].duration <= 60e3) {
                    time = `0:${workshopQueue[i].duration <= 10e3 ? "0" : ""}${removeDecimals(workshopQueue[i].duration / 1000)}`;
                } else {
                    let value = (workshopQueue[i].duration / 1000) / 60;
                    value = value.toString().split(".");
                    let minutes = value[0];
                    let seconds = parseFloat("0." + value[1]) * 60;
                    time = `${minutes}:${seconds <= 10 ? "0" : ""}${removeDecimals(seconds)}`;
                }
                document.getElementById("productiondisplay").innerHTML += `
                <div id="collect${i}" style="position: relative; ${workshopQueue[i].duration <= 0 ? "cursor: pointer;" : ""} width: 100%; height: 150px; background-color: ${workshopQueue[i].duration <= 0 ? "rgb(0, 255, 0, 0.6)" : i % 2 == 0 ? "rgb(255, 255, 255, .5)" : "rgb(0, 0, 0, 0.2)"}">
                <div style="width: 150px; height: 150px; background-size: 150px 150px; background-image: url('./images/workshop.png')">
                </div>
                <div style="position: absolute; top: 20px; left: 150px; font-size: 25px;">
                Workshop Points (${workshopQueue[i].amount})
                </div>
                <div style="position: absolute; top: 90px; left: 150px;">
                ${workshopQueue[i].duration <= 0 ? "Collect" : `Time: ${time}`}
                </div>
                </div>
                `;
            }
            for (let i = 0; i < workshopQueue.length; i++) {
                if (workshopQueue[i].duration <= 0) {
                    document.getElementById(`collect${i}`).onclick = function () {
                        updateMoneyDisplay("workshopPoints", workshopQueue[i].amount);
                        workshopQueue.splice(i, 1);
                        updateProductionDisplay();
                    };
                } else {
                    document.getElementById(`collect${i}`).onclick = null;
                }
            }
        }
        saveGameData();
    }
    class microship {
        constructor(data, owner, slot) {
            this.name = data.name;
            this.tier = data.tier;
            this.healthIncrease = data.healthIncrease;
            this.dmgIncrease = data.dmgIncrease;
            this.autoHealValue = data.autoHealValue;
            this.repairPowerPercent = data.repairPowerPercent;
            if (data.cantUse) {
                this.cantUse = [...data.cantUse];
            }
            this.owner = owner;
            this.slot = slot;
        }
    }
    var microships = [];
    var microShipData = [{
        name: "Health Extender",
        desc: `
        Increases shape's health
        `,
        buyDesc: `
        <br><br>
        Cost: 750 Workshop Points
        `,
        healthIncrease: .05,
        tier: 1,
        cost: 750
    }, {
        name: "Tough Guy",
        desc: `
        Increases shape's health but decreases damage
        `,
        buyDesc: `
        <br><br>
        Cost: 1.5K Workshop Points
        `,
        healthIncrease: .15,
        dmgIncrease: -.05,
        tier: 2,
        cost: 15e2
    }, {
        name: "Gunssmith",
        desc: `
        Increases shape's weapon damage
        `,
        buyDesc: `
        <br><br>
        Cost: 1.5K Workshop Points
        `,
        dmgIncrease: .075,
        tier: 2,
        cost: 15e2
    }, {
        name: "Mechanic",
        desc: `
        Repairs a part of the shape's max health each second.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Workshop Points
        `,
        repairPowerPercent: 0.007,
        tier: 3,
        cost: 3e3
    }];
    function doMicroStuff(shape, slot, chip) {
        let STUFF = microships.filter(e => (!e.cantUse || (e.cantUse && e.cantUse.includes(shape.name))) && !e.owner);
        if (STUFF.length) STUFF = STUFF.sort((a, b) => b.tier - a.tier);
        if (chip) {
            STUFF.unshift(chip);
        }
        document.getElementById("sideDisplay").innerHTML = "";
        for (let i = 0; i < STUFF.length; i++) {
            document.getElementById("sideDisplay").innerHTML += `
            <div id="LMAOOOADA${i}" style="display: inline-block; cursor: pointer; margin: 20px; width: 300px; height: 300px; background-color: ${chip == STUFF[i] ? "rgb(0, 0, 0, 0.5)" : "rgb(0, 0, 0, .2)"}; border-radius: 6px;">
            <div style="color: ${tierColor(STUFF[i])}; width: 100%; text-align: center; font-size: 30px;">
            ${STUFF[i].name}
            </div>
            <hr>
            <div style="margin-left: 5px;">
            ${STUFF[i].healthIncrease ? `Health Increase: ${removeDecimals(STUFF[i].healthIncrease * 100)}%<br>` : ""}
            ${STUFF[i].dmgIncrease ? `Dmg Increase: ${removeDecimals(STUFF[i].dmgIncrease * 100)}%<br>` : ""}
            ${STUFF[i].repairPowerPercent ? `Repair Power: ${STUFF[i].repairPowerPercent * 100}%/SEC<br>` : ""}
            </div>
            </div>
            `;
        }
        for (let i = 0; i < STUFF.length; i++) {
            document.getElementById(`LMAOOOADA${i}`).onclick = function () {
                if (STUFF[i] == chip) {
                    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                } else {
                    if (chip) {
                        chip.owner = null;
                        chip.slot = null;
                    }
                    STUFF[i].owner = shape.sid;
                    STUFF[i].slot = slot;
                    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                }
                document.getElementById("microshipsToggle").click();
                saveGameData();
            }
        }
    }
    document.getElementById("microshipsToggle").onclick = function () {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="font-size: 40px; width: 100%; text-align: center;">
        Microchips
        </div>
        <hr>
        <div id="LMAOOOOOO" style="position: absolute; left: 0px; top: ${(window.innerHeight / 2) - 250}px; height: 500px; width: 100%; overflow-x: scroll; background-color: rgb(0, 0, 0, .3);">
        </div>
        `;
        for (let i = 0; i < 8; i++) {
            let shape = player.shapes.find(e => e.slot == i);
            if (shape) {
                document.getElementById("LMAOOOOOO").innerHTML += `
                <div id="LMAOOOOOKASDIAOSDAS${i}" style="position: absolute; overflow-y: scroll; top: 0px; left: ${300 * i}px; width: 300px; height: 100%; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.4)"};">
                </div>
                `;
            } else {
                document.getElementById("LMAOOOOOO").innerHTML += `
                <div style="position: absolute; top: 0px; left: ${300 * i}px; width: 300px; height: 100%; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.4)"};">
                </div>
                `;
            }
        }
        for (let i = 0; i < 8; i++) {
            let shape = player.shapes.find(e => e.slot == i);
            if (shape) {
                let CHIPS = microships.filter(e => e.owner == shape.sid).sort((a, b) => a.slot - b.slot);
                for (let s = 0; s < shape.microshipSlots; s++) {
                    let chip = CHIPS.find(e => e.slot == s);
                    if (chip) {
                        document.getElementById("LMAOOOOOKASDIAOSDAS" + i).innerHTML += `
                        <div id="${i}EQUIPMIC${s}" style="position: absolute; cursor: pointer; top: ${300 + (s * 100)}px; left: 0px; width: 300px; height: 100px; background-color: ${s % 2 == 0 ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.4)"};">
                        <div style="color: ${tierColor(chip)}; width: 100%; text-align: center; font-size: 35px;">
                        ${chip.name}
                        </div>
                        </div>
                        `;
                    } else {
                        document.getElementById("LMAOOOOOKASDIAOSDAS" + i).innerHTML += `
                        <div id="${i}EQUIPMIC${s}" style="position: absolute; cursor: pointer; top: ${300 + (s * 100)}px; left: 0px; width: 300px; height: 100px; background-color: ${s % 2 == 0 ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.4)"};">
                        <div style="width: 100%; text-align: center; font-size: 35px;">
                        EQUIP MICROCHIP
                        </div>
                        </div>
                        `;
                    }
                }
                let image = getShapeSprite(shape, true);
                image.style = "width: 300px; height: 300px;";
                document.getElementById("LMAOOOOOKASDIAOSDAS" + i).appendChild(image);
            }
        }
        for (let i = 0; i < 8; i++) {
            let shape = player.shapes.find(e => e.slot == i);
            if (shape) {
                let CHIPS = microships.filter(e => e.owner == shape.sid).sort((a, b) => a.slot - b.slot);
                for (let s = 0; s < shape.microshipSlots; s++) {
                    let chip = CHIPS.find(e => e.slot == s);
                    document.getElementById(`${i}EQUIPMIC${s}`).onclick = function () {
                        doMicroStuff(shape, s, chip);
                    };
                }
            }
        }
    }
    document.getElementById("workshopToggle").onclick = function () {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="width: 100%; font-size: 40px; text-align: center;">
        Workshop
        </div>
        <hr>
        <div id="productiondisplay" style="position: absolute; top: ${(window.innerHeight / 2) - 300}px; left: 20px; width: 375px; height: 600px; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.2);">
        </div>
        <div id="produceWP" style="position: absolute; cursor: pointer; top: 116.5px; left: 415px; width: 325px; height: 150px; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.2);">
        <div style="width: 150px; height: 150px; background-size: 150px 150px; background-image: url('./images/workshop.png')">
        </div>
        <div style="position: absolute; top: 20px; left: 150px; font-size: 25px;">
        Workshop Points (40)
        </div>
        <div style="position: absolute; top: 90px; left: 150px;">
        Production Cost: 350.0K Silver
        </div>
        </div>
        `;
        updateProductionDisplay();
        document.getElementById("produceWP").onclick = function () {
            if (player.sliver - 350e3 >= 0 && workshopQueue.length < 30) {
                updateMoneyDisplay("sliver", -350e3);
                workshopQueue.push({
                    amount: 40,
                    duration: (window.isDev ? 500 : (10 * 60 * 1e3) * Math.max(1, Math.floor(workshopQueue.length / 10) + 1))
                });
                updateProductionDisplay();
            }
        }
    }
    document.getElementById("shopToggle").onclick = function () {
        let adjust = window.innerWidth - 375;
        document.getElementById("sideDisplay").innerHTML = `
        <div id="robotTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 40px; top: 10px; right: ${adjust / 2 + 175}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(255, 255, 255, 0.5);">
        <span style="position: absolute; top: ${60 / 2 - 27.25}px; left: ${75 - 65}px;">Robots</span>
        </div>
        <div id="weaponTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 30px; top: 10px; right: ${adjust / 2 + 15}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${60 / 2 - 20.5}px; left: ${75 - 65}px;">Weapons</span>
        </div>
        <div id="moduleTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 30px; top: 10px; left: ${adjust / 2}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${60 / 2 - 20.5}px; left: ${75 - 60}px;">Modules</span>
        </div>
        <div id="clipTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 30px; top: 10px; left: ${adjust / 2 + 165}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${60 / 2 - 20.5}px; left: ${75 - 68.5}px;">Microchip</span>
        </div>
        <div id="storeTab" style="position: absolute; width: 100%; height: 100%;">
        </div>
        `;
        drawStore("shapes");
        document.getElementById("robotTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("weaponTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("moduleTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("clipTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("shapes");
        }
        document.getElementById("weaponTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("robotTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("moduleTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("clipTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("weapons");
        }
        document.getElementById("moduleTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("robotTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("weaponTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("clipTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("modules");
        }
        document.getElementById("clipTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("robotTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("weaponTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("moduleTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("chips");
        }
    }
    function getShapeSprite(obj, isIcon) {
        let tmpSprite = shapeSprites[obj.name];
        if (!tmpSprite) {
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = obj.scale * (isIcon ? 3 : 1.2);
            let tmpCtx = tmpCanvas.getContext("2d");
            tmpCtx.globalAlpha = 1;
            tmpCtx.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
            if (obj.name.includes("Circle")) {
                renderCircle(0, 0, obj.scale, tmpCtx, false, false, obj.color, "#000");
            } else if (obj.name.includes("Pentagon")) {
                tmpCtx.rotate(Math.PI / 2);
                tmpCtx.strokeStyle = "#000";
                tmpCtx.lineWidth = 12;
                tmpCtx.fillStyle = obj.color;
                renderStar(tmpCtx, 2.5, obj.scale, obj.scale);
                tmpCtx.stroke();
                tmpCtx.fill();
            } else if (obj.name.includes("Hexagon")) {
                tmpCtx.rotate(Math.PI / 2);
                tmpCtx.strokeStyle = "#000";
                tmpCtx.lineWidth = 12;
                tmpCtx.fillStyle = obj.color;
                renderStar(tmpCtx, 3, obj.scale, obj.scale);
                tmpCtx.stroke();
                tmpCtx.fill();
            } else if (obj.name.includes("Heptagon")) {
                tmpCtx.rotate(Math.PI / 2);
                tmpCtx.strokeStyle = "#000";
                tmpCtx.lineWidth = 12;
                tmpCtx.fillStyle = obj.color;
                renderStar(tmpCtx, 3.5, obj.scale, obj.scale);
                tmpCtx.stroke();
                tmpCtx.fill();
            }
            if (!isIcon) shapeSprites[obj.name] = tmpCanvas;
            tmpSprite = tmpCanvas;
        }
        return tmpSprite;
    }
    var weaponIcons = {};
    function getWeaponIcon(obj, isIcon) {
        let tmpIcon = weaponIcons[obj.name];
        if (!tmpIcon) {
            tmpIcon = new Image();
            tmpIcon.src = obj.imageSource;
            tmpIcon.onload = function () {
                tmpIcon.isLoaded = true;
            }
            if (!isIcon) weaponIcons[obj.name] = tmpIcon;
        }
        return tmpIcon;
    }
    var moduleIcon = {};
    function getModuleIcon(obj, isIcon) {
        let tmpIcon = moduleIcon[obj.name];
        if (!tmpIcon) {
            tmpIcon = new Image();
            tmpIcon.src = obj.imageSource;
            tmpIcon.onload = function () {
                tmpIcon.isLoaded = true;
            }
            if (!isIcon) moduleIcon[obj.name] = tmpIcon;
        }
        return tmpIcon;
    }
    var LMAOOOOOOOOOOOOOOOOOOO = 0;
    function drawWeaponDisplay(weapon, index, START_WEAPON, weaponslength) {
        if(weaponslength) LMAOOOOOOOOOOOOOOOOOOO = weaponslength;
        if (index == 0 && !(START_WEAPON == "Light" || START_WEAPON == "Heavy")) {
            document.getElementById("Unequip").style.display = "block";
            document.getElementById("Equip").style.display = "none";
        } else {
            document.getElementById("Equip").style.display = "block";
            document.getElementById("Unequip").style.display = "none";
        }
        document.getElementById("CURRENTINDEXX").innerHTML = `${index+1}/${weaponslength || LMAOOOOOOOOOOOOOOOOOOO}`;
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; color: ${tierColor(weapon)}; text-align: center; margin-top: 5px; width: 100%;">${weapon.level >= 13 ? `${weapon.name} <span style="color: ${weapon.level == 13 ? "#0f0" : "#ffff00"};">${weapon.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapon.level} ${weapon.name}`}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${weapon.desc}
        </div>
        <div style="position: absolute; top: 260px; left: 10px;">
        Damage: ${abbreviateNumber(weapon.dmg)}<br>
        Range: ${weapon.range} PX<br>
        ${weapon.reload > 0 ? `Reload: ${weapon.reload / 1000} sec<br>` : ""}
        ${weapon.aoeRange ? "AOE Range: " + weapon.aoeRange + " PX<br>" : ""}
        ${weapon.dotDamage ? `DOT Damage: ${abbreviateNumber(weapon.dotDamage)}<br>` : ""}
        </div>
        `;
        document.getElementById("Sell").innerHTML = `
        <span style="position: absolute; font-size: 30px; top: 5px; left: ${203 / 2 - 32}px;">SELL</span>
        <span style="position: absolute; font-size: 10px; top: 40px; width: 100%; text-align: center;">${abbreviateNumber(weapon.sellPrice)} Silver</span>
        `;
        let weaponImg = getWeaponIcon(weapon, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
    }
    function enterBarForWeapon(type, weapon) {
        let text = "";
        let Weapon = weaponData.find(item => item.name == weapon.name)
        let maxwidth = window.innerWidth >= 1442 ? 500 : window.innerWidth >= 1374 ? 450 : window.innerWidth >= 1311 ? 400 : window.innerWidth >= 1245 ? 350 : window.innerWidth >= 1182 ? 300 : 250;
        if (type == "damage") {
            let maxdmg = Weapon.damageData.base;
            for (let i = 0; i < Weapon.damageData.level.length; i++) {
                maxdmg += Weapon.damageData.level[i];
            }
            let mk1 = maxdmg;
            maxdmg *= 1.2;
            let mk2 = maxdmg;
            maxdmg *= 1.5;
            let indexAdjust = ((weapon.dmg / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((weapon.dmg + (weapon.level == 13 ? maxdmg-mk2 : weapon.level == 12 ? mk2-mk1 : Weapon.damageData.level[weapon.level])) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Damage: ${abbreviateNumber(weapon.dmg)}
            <div style="display: ${Weapon.damageData.level[weapon.level] ? "block" : weapon.level == 13 ? "block" : weapon.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${(weapon.level == 13 ? abbreviateNumber(maxdmg - mk2) : weapon.level == 12 ? abbreviateNumber(mk2-mk1) : abbreviateNumber(Weapon.damageData.level[weapon.level]))}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "dot damage" && Weapon.dotData) {
            let maxdmg = Weapon.dotData.base;
            for (let i = 0; i < Weapon.dotData.level.length; i++) {
                maxdmg += Weapon.dotData.level[i];
            }
            let Mk1 = maxdmg;
            maxdmg *= 1.2;
            let Mk2 = maxdmg;
            maxdmg *= 1.5;
            let indexAdjust = ((weapon.dotDamage / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((weapon.dotDamage + (weapon.level == 13 ? (maxdmg - Mk2) : weapon.level == 12 ? (Mk2 - Mk1) : Weapon.dotData.level[weapon.level])) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            DOT Damage: ${abbreviateNumber(weapon.dotDamage)}
            <div style="display: ${Weapon.dotData.level[weapon.level] ? "block" : weapon.level == 13 ? "block" : weapon.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${(weapon.level == 13 ? abbreviateNumber(maxdmg - Mk2) : weapon.level == 12 ? abbreviateNumber(Mk2 - Mk1) : abbreviateNumber(Weapon.dotData.level[weapon.level]))}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        }
        return text;
    }
    function upgradeWeapon(weapon, currentIndex, old_WEAPON, noEz, isBOT) {
        let Weapon = weaponData.find(item => item.name == weapon.name);
        if (weapon.level < 12) {
            weapon.sellPrice += sliverUpgradesByTier[weapon.tier].weapons[weapon.level] * .75;
            let dmgIncrease = Weapon.damageData.level[weapon.level];
            weapon.dmg += dmgIncrease;
        } else {
            weapon.dmg *= isBOT ? 1.12 : weapon.level == 13 ? 1.5 : 1.2;
        }
        if (Weapon.dotData) {
            if (weapon.level < 12) {
                let dmgIncrease = Weapon.dotData.level[weapon.level];
                weapon.dotDamage += dmgIncrease;
            } else {
                weapon.dotDamage *= isBOT ? 1.12 : weapon.level == 13 ? 1.5 : 1.2;
            }
        }
        weapon.level++;
        if (!noEz) document.getElementById("Upgrade").onclick();
        if (!noEz) drawWeaponDisplay(weapon, currentIndex, old_WEAPON);
        if (!noEz) updateSlots();
        if (!noEz) saveGameData();
    }
    function customizeWeapon(weapon, shape, slot) {
        if (true) {
            let adjust = window.innerWidth - 375;
            let filteredWeapons = null;
            if (weapon == "Light" || weapon == "Heavy") {
                filteredWeapons = player.weapons.filter(e => e.owner == null && e.type == weapon).sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
            } else {
                filteredWeapons = player.weapons.filter(e => e.owner == null && e.type == weapon.type).sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
            }
            let currentIndex = 0;
            if (weapon && weapon != "Light" && weapon != "Heavy") filteredWeapons.unshift(weapon);
            if (!filteredWeapons.length) {
                alert("You have no weapons.");
                return;
            }
            document.getElementById("sideDisplay").innerHTML = `
            <div id="CURRENTINDEXX" style="position: absolute; top: 10px; left: 5px;">
            ${currentIndex+1}/${filteredWeapons.length}
            </div>
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
            </div>
            <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
            </div>
            <div id="Unequip" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 66}px;">UNEQUIP</span>
            </div>
            <div id="Equip" style="display: none; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">EQUIP</span>
            </div>
            <div id="Upgrade" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 97}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 68.5}px;">UPGRADE</span>
            </div>
            <div id="Sell" style="cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 + 147}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">Sell</span>
            </div>
            <div id="upgradeMenu" style="display: none; color: #fff; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, 0.7);">
            </div>
            `;
            drawWeaponDisplay(filteredWeapons[0], 0, weapon, filteredWeapons.length);
            document.getElementById("Sell").onclick = function () {
                if (filteredWeapons[currentIndex]) {
                    let weaponIndex = player.weapons.findIndex(e => e == filteredWeapons[currentIndex]);
                    updateMoneyDisplay("sliver", filteredWeapons[currentIndex].sellPrice);
                    player.weapons.splice(weaponIndex, 1);
                    updateSlots();
                    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                    saveGameData();
                }
            }
            if (weapon == "Light" || weapon == "Heavy") {
                document.getElementById("Equip").style.display = "block";
                document.getElementById("Unequip").style.display = "none";
            }
            document.getElementById("Unequip").onclick = function () {
                if (currentIndex == 0) {
                    weapon.owner = null;
                    weapon.slot = null;
                    updateSlots();
                    customizeShape(shape);
                    saveGameData();
                }
            }
            document.getElementById("Equip").onclick = function () {
                if (weapon != "Light" && weapon != "Heavy") {
                    weapon.owner = null;
                    weapon.slot = null;
                }
                filteredWeapons[currentIndex].owner = shape.sid;
                filteredWeapons[currentIndex].slot = slot;
                updateSlots();
                customizeShape(shape);
                saveGameData();
            }
            if (!filteredWeapons[currentIndex - 1]) {
                document.getElementById("goToPre").style.display = "none";
            }
            document.getElementById("goToPre").onclick = function () {
                currentIndex--;
                drawWeaponDisplay(filteredWeapons[currentIndex], currentIndex, weapon, filteredWeapons.length);
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
            }
            if (!filteredWeapons[currentIndex + 1]) {
                document.getElementById("goToNext").style.display = "none";
            }
            document.getElementById("goToNext").onclick = function () {
                currentIndex++;
                drawWeaponDisplay(filteredWeapons[currentIndex], currentIndex, weapon, filteredWeapons.length);
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
            }
            let WEAPOSNDAPSD = weapon;
            document.getElementById("Upgrade").onclick = function () {
                let weapon = filteredWeapons[currentIndex];
                let adjustwidth = (window.innerWidth - 375) * .75;
                document.getElementById("upgradeMenu").style.display = "block";
                document.getElementById("upgradeMenu").innerHTML = `
                <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
                ${[14, 13].includes(weapon.level) ? `${weapon.name} <span style="color: ${weapon.level == 13 ? "#0f0" : "#ffff00"};">${weapon.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapon.level} ${weapon.name}`}
                </div>
                <hr>
                <div style="position: absolute; left: 300px; top: 65px;">
                ${enterBarForWeapon("damage", weapon)}
                ${enterBarForWeapon("dot damage", weapon)}
                </div>
                <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
                X
                </div>
                <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "#00ff00" : [12, 13].includes(weapon.level) ? "#ffff00" : "#808080"};">
                <div style="color: ${[12, 13].includes(weapon.level) ? "f00" : "#fff"}; width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "24" : [12, 13].includes(weapon.level) ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "5" : [12, 13].includes(weapon.level) ? "5" : "10"}px;">${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "UPGRADE" : [12, 13].includes(weapon.level)? "ENHANCE" : "MAXED"}</div>
                <div style="color: ${[12, 13].includes(weapon.level) ? "f00" : "#fff"}; display: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "block" : [12, 13].includes(weapon.level) ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${[12, 13].includes(weapon.level) ? `${abbreviateNumber(weapon.enhanceCost * (weapon.level == 13 ? 48 : 1))} Gold` : `${abbreviateNumber(sliverUpgradesByTier[weapon.tier].weapons[weapon.level])} Sliver`}</div>
                </div>
                `;
                let sprite = getWeaponIcon(weapon, true);
                sprite.style = "width: 280px; height: 280px;";
                document.getElementById("upgradeMenu").appendChild(sprite);
                document.getElementById("leaveUpgrade").onclick = function () {
                    document.getElementById("upgradeMenu").style.display = "none";
                }
                document.getElementById("UPGRADE").onclick = function () {
                    if (sliverUpgradesByTier[weapon.tier].weapons[weapon.level] || weapon.level == 12 || weapon.level == 13) {
                        if (weapon.level >= 12) {
                            if (player.gold - (weapon.enhanceCost * (weapon.level == 13 ? 48 : 1)) >= 0) {
                                updateMoneyDisplay("gold", -(weapon.enhanceCost * (weapon.level == 13 ? 48 : 1)));
                                upgradeWeapon(weapon, currentIndex, WEAPOSNDAPSD);
                            }
                        } else {
                            if (player.sliver - sliverUpgradesByTier[weapon.tier].weapons[weapon.level] >= 0) {
                                updateMoneyDisplay("sliver", -sliverUpgradesByTier[weapon.tier].weapons[weapon.level]);
                                upgradeWeapon(weapon, currentIndex, WEAPOSNDAPSD);
                            } else if (player.gold > 0) {
                                let amountNeeded = sliverUpgradesByTier[weapon.tier].weapons[weapon.level] - player.sliver;
                                let amountToGold = Math.round(amountNeeded / 1250);
                                if (player.gold - amountToGold >= 0) {
                                    let answer = prompt(`Not Enough Silver!\nYou Need ${abbreviateNumber(amountNeeded)} Silver!\nUse ${abbreviateNumber(amountToGold)} Gold to make up for the amount of silver missing!\nType "y" or "yes" to confirm.`);
                                    if (answer) {
                                        answer = answer.toLocaleLowerCase();
                                        if (answer == "yes" || answer == "y") {
                                            updateMoneyDisplay("sliver", -player.sliver);
                                            updateMoneyDisplay("gold", -amountToGold);
                                            upgradeWeapon(weapon, currentIndex, WEAPOSNDAPSD);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function removeDecimals(value) {
        let string = value.toString();
        if (string.includes(".")) {
            return string.split(".")[0];
        }
        return string;
    }
    function enterBarForModule(type, module) {
        let text = "";
        let Module = moduleData.find(item => item.name == module.name);
        let maxwidth = window.innerWidth >= 1442 ? 500 : window.innerWidth >= 1374 ? 450 : window.innerWidth >= 1311 ? 400 : window.innerWidth >= 1245 ? 350 : window.innerWidth >= 1182 ? 300 : 250;
        if (type == "healthIncrease" && Module.healthIncreaseData) {
            let maxdmg = Math.abs(Module.healthIncreaseData.base);
            for (let i = 0; i < Module.healthIncreaseData.level.length; i++) {
                maxdmg += Math.abs(Module.healthIncreaseData.level[i]);
            }
            let indexAdjust = ((Math.abs(module.healthIncrease) / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((Math.abs(module.healthIncrease) + Math.abs(Module.healthIncreaseData.level[module.level])) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Health Increase: ${removeDecimals((module.healthIncrease) * 100)}%
            <div style="display: ${Math.abs(Module.healthIncreaseData.level[module.level]) ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            ${Module.healthIncreaseData.level[module.level] >= 0 ? "+" : ""}${removeDecimals(Module.healthIncreaseData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "selfFixRepair" && Module.selfFixRepairData) {
            let maxdmg = Module.selfFixRepairData.base;
            for (let i = 0; i < Module.selfFixRepairData.level.length; i++) {
                maxdmg += Module.selfFixRepairData.level[i];
            }
            let indexAdjust = ((module.selfFixRepair / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.selfFixRepair + Module.selfFixRepairData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Repair Power: ${abbreviateNumber(module.selfFixRepair)}/SEC
            <div style="display: ${Module.selfFixRepairData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${abbreviateNumber(Module.selfFixRepairData.level[module.level])}/SEC
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "dmgIncrease" && Module.dmgIncreaseData) {
            let maxdmg = Module.dmgIncreaseData.base;
            for (let i = 0; i < Module.dmgIncreaseData.level.length; i++) {
                maxdmg += Module.dmgIncreaseData.level[i];
            }
            let indexAdjust = ((module.dmgIncrease / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.dmgIncrease + Module.dmgIncreaseData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Damage Increase: ${removeDecimals(module.dmgIncrease * 100)}%
            <div style="display: ${Module.dmgIncreaseData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${removeDecimals(Module.dmgIncreaseData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "immunity" && Module.immunePercentData) {
            let maxdmg = Module.immunePercentData.base;
            for (let i = 0; i < Module.immunePercentData.level.length; i++) {
                maxdmg += Module.immunePercentData.level[i];
            }
            let indexAdjust = ((module.immunePercent / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.immunePercent + Module.immunePercentData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Immunity Threshold: ${removeDecimals(module.immunePercent * 100)}%
            <div style="display: ${Module.immunePercentData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${removeDecimals(Module.immunePercentData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "lastingTime" && Module.immunePercentData) {
            let maxdmg = Module.lastingTimeData.base;
            for (let i = 0; i < Module.lastingTimeData.level.length; i++) {
                maxdmg += Module.lastingTimeData.level[i];
            }
            let indexAdjust = ((module.lastingTime / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.lastingTime + Module.lastingTimeData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Effect Duration: ${module.lastingTime / 1000} sec
            <div style="display: ${Module.lastingTimeData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.lastingTimeData.level[module.level] / 1000} sec
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "shieldHealth" && Module.shieldHealthData) {
            let maxdmg = Module.shieldHealthData.base;
            for (let i = 0; i < Module.shieldHealthData.level.length; i++) {
                maxdmg += Module.shieldHealthData.level[i];
            }
            let indexAdjust = ((module.shieldHealth / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.shieldHealth + Module.shieldHealthData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability Increase: ${module.shieldHealth * 100}%
            <div style="display: ${Module.shieldHealthData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.shieldHealthData.level[module.level] * 100}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "shieldRegen" && Module.shieldRegenData) {
            let maxdmg = Module.shieldRegenData.base;
            for (let i = 0; i < Module.shieldRegenData.level.length; i++) {
                maxdmg += Module.shieldRegenData.level[i];
            }
            let indexAdjust = ((module.shieldRegen / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.shieldRegen + Module.shieldRegenData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability Increase: ${module.shieldRegen * 100}%
            <div style="display: ${Module.shieldRegenData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.shieldRegenData.level[module.level] * 100}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "grayDamageDecrease" && Module.grayDamageDecreaseData) {
            let maxdmg = Module.grayDamageDecreaseData.base;
            for (let i = 0; i < Module.grayDamageDecreaseData.level.length; i++) {
                maxdmg += Module.grayDamageDecreaseData.level[i];
            }
            let indexAdjust = ((module.grayDamageDecrease / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.grayDamageDecrease + Module.grayDamageDecreaseData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Gray Damage Decrease: ${module.grayDamageDecrease * 100}%
            <div style="display: ${Module.grayDamageDecreaseData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.grayDamageDecreaseData.level[module.level] * 100}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "baseDefensePoints" && Module.baseDefensePointsData) {
            let maxdmg = Module.baseDefensePointsData.base;
            for (let i = 0; i < Module.baseDefensePointsData.level.length; i++) {
                maxdmg += Module.baseDefensePointsData.level[i];
            }
            let indexAdjust = ((module.baseDefensePoints / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.baseDefensePoints + Module.baseDefensePointsData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Base Defense Points: ${module.baseDefensePoints}
            <div style="display: ${Module.baseDefensePointsData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.baseDefensePointsData.level[module.level]}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "durabilityLostAmp" && Module.durabilityLostAmpData) {
            let maxdmg = Module.durabilityLostAmpData.base;
            for (let i = 0; i < Module.durabilityLostAmpData.level.length; i++) {
                maxdmg += Module.durabilityLostAmpData.level[i];
            }
            let indexAdjust = ((maxdmg / module.durabilityLostAmp) * maxwidth) / maxwidth;
            let indexAdjusted = ((maxdmg / (module.durabilityLostAmp + Module.durabilityLostAmpData.level[module.level])) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Durability Requirement: ${(module.durabilityLostAmp * 100)}%
            <div style="display: ${Math.abs(Module.durabilityLostAmpData.level[module.level]) ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            ${Module.durabilityLostAmpData.level[module.level] >= 0 ? "+" : "-"}${(Math.abs(Module.durabilityLostAmpData.level[module.level])*100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "increasedDefensePoints" && Module.increasedDefensePointsData) {
            let maxdmg = Module.increasedDefensePointsData.base;
            for (let i = 0; i < Module.increasedDefensePointsData.level.length; i++) {
                maxdmg += Module.increasedDefensePointsData.level[i];
            }
            let indexAdjust = ((module.increasedDefensePoints / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.increasedDefensePoints + Module.increasedDefensePointsData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Base Defense Points: ${module.increasedDefensePoints}
            <div style="display: ${Module.increasedDefensePointsData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.increasedDefensePointsData.level[module.level]}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "anticontrol" && Module.antiControlData) {
            let maxdmg = Module.antiControlData.base;
            for (let i = 0; i < Module.antiControlData.level.length; i++) {
                maxdmg += Module.antiControlData.level[i];
            }
            let indexAdjust = ((module.antiControl / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.antiControl + Module.antiControlData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Effect Duration Reduction: ${removeDecimals(module.antiControl * 100)}%
            <div style="display: ${Module.antiControlData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${removeDecimals(Module.antiControlData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        }
        return text;
    }
    function drawModuleDisplay(module, index, START_WEAPON) {
        if (index == 0 && START_WEAPON) {
            document.getElementById("Unequip").style.display = "block";
            document.getElementById("Equip").style.display = "none";
        } else {
            document.getElementById("Equip").style.display = "block";
            document.getElementById("Unequip").style.display = "none";
        }
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; color: ${tierColor(module)}; margin-top: 5px; width: 100%;">Lvl ${module.level} ${module.name}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${module.desc}
        </div>
        <div style="position: absolute; top: 260px; left: 10px;">
        ${module.dmgIncrease ? "Damage Increase: " + removeDecimals(module.dmgIncrease * 100) + "%<br>" : ""}
        ${module.healthIncrease ? "Durability Increase: " + removeDecimals(module.healthIncrease * 100) + "%<br>" : ""}
        ${module.selfFixRepair ? "Repair Power: " + abbreviateNumber(module.selfFixRepair) + "/SEC<br>" : ""}
        ${module.immunePercent ? "Immunity Threshold: " + (module.immunePercent * 100) + "%<br>" : ""}
        ${module.lastingTime ? "Effect Duration: " + (module.lastingTime / 1000) + " sec<br>" : ""}
        ${module.shieldHealth ? "Shield Durability Increase: " + removeDecimals(module.shieldHealth * 100) + "%<br>" : ""}
        ${module.shieldRegen ? "Shield Regen Decrease: " + removeDecimals(module.shieldRegen * 100) + "%<br>" : ""}
        ${module.grayDamageDecrease ? "Gray Damage Decrease: " + removeDecimals(module.grayDamageDecrease * 100) + "%<br>" : ""}
        ${module.durabilityLostAmp ? "Durability Requirement: " + (module.durabilityLostAmp * 100) + "%<br>" : ""}
        ${module.baseDefensePoints ? "Base Defense Points Increase: " + (module.baseDefensePoints) + "<br>" : ""}
        ${module.increasedDefensePoints ? "Defense Points (@max stacks): " + (module.increasedDefensePoints) + "<br>" : ""}
        ${module.antiControl ? `Effect Duration Reduction: ${module.antiControl * 100}%<br>` : ""}
        </div>
        `;
        let moduleImg = getModuleIcon(module, true);
        moduleImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(moduleImg);
    }
    function upgradeModule(module, currentIndex, old_MODULE, noEz) {
        let Module = moduleData.find(item => item.name == module.name);
        if (Module.healthIncreaseData) {
            let healthIncrease = Module.healthIncreaseData.level[module.level];
            module.healthIncrease += healthIncrease;
            module.healthIncrease *= 100;
            module.healthIncrease = Math.round(module.healthIncrease);
            module.healthIncrease /= 100;
        }
        if (Module.selfFixRepairData) {
            let healthIncrease = Module.selfFixRepairData.level[module.level];
            module.selfFixRepair += healthIncrease;
        }
        if (Module.dmgIncreaseData) {
            let healthIncrease = Module.dmgIncreaseData.level[module.level];
            module.dmgIncrease += healthIncrease;
            module.dmgIncrease *= 100;
            module.dmgIncrease = Math.round(module.dmgIncrease);
            module.dmgIncrease /= 100;
        }
        if (Module.immunePercentData) {
            let healthIncrease = Module.immunePercentData.level[module.level];
            module.immunePercent += healthIncrease;
        }
        if (Module.lastingTimeData) {
            let healthIncrease = Module.lastingTimeData.level[module.level];
            module.lastingTime += healthIncrease;
        }
        if (Module.shieldHealthData) {
            let healthIncrease = Module.shieldHealthData.level[module.level];
            module.shieldHealth += healthIncrease;
        }
        if (Module.shieldRegenData) {
            let healthIncrease = Module.shieldRegenData.level[module.level];
            module.shieldRegen += healthIncrease;
        }
        if (Module.grayDamageDecreaseData) {
            let healthIncrease = Module.grayDamageDecreaseData.level[module.level];
            module.grayDamageDecrease += healthIncrease;
        }
        if (Module.baseDefensePointsData) {
            let healthIncrease = Module.baseDefensePointsData.level[module.level];
            module.baseDefensePoints += healthIncrease;
        }
        if (Module.durabilityLostAmpData) {
            let healthIncrease = Module.durabilityLostAmpData.level[module.level];
            module.durabilityLostAmp += healthIncrease;
        }
        if (Module.increasedDefensePointsData) {
            let healthIncrease = Module.increasedDefensePointsData.level[module.level];
            module.increasedDefensePoints += healthIncrease;
        }
        if (Module.antiControlData) {
            let healthIncrease = Module.antiControlData.level[module.level];
            module.antiControl += healthIncrease;
            module.antiControl *= 100;
            module.antiControl = Math.round(module.antiControl);
            module.antiControl /= 100;
        }
        module.level++;
        if (!noEz) document.getElementById("Upgrade").onclick();
        if (!noEz) drawModuleDisplay(module, currentIndex, old_MODULE);
        if (!noEz) updateSlots();
        if (!noEz) saveGameData();
    }
    function customizeModule(module, shape, slot) {
        if (true) {
            let adjust = window.innerWidth - 375;
            let filteredWeapons = player.modules.filter(e => e.owner == null).sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
            let currentIndex = 0;
            if (module) filteredWeapons.unshift(module);
            document.getElementById("sideDisplay").innerHTML = `
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
            </div>
            <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
            </div>
            <div id="Unequip" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 66}px;">UNEQUIP</span>
            </div>
            <div id="Equip" style="display: none; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">EQUIP</span>
            </div>
            <div id="Upgrade" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 137}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 68.5}px;">UPGRADE</span>
            </div>
            <div id="upgradeMenu" style="display: none; color: #fff; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, 0.7);">
            </div>
            `;
            drawModuleDisplay(filteredWeapons[0], 0, module);
            if (!module) {
                document.getElementById("Equip").style.display = "block";
                document.getElementById("Unequip").style.display = "none";
            }
            document.getElementById("Unequip").onclick = function () {
                if (currentIndex == 0) {
                    module.owner = null;
                    module.slot = null;
                    updateSlots();
                    customizeShape(shape);
                    saveGameData();
                }
            }
            document.getElementById("Equip").onclick = function () {
                if (module) {
                    module.owner = null;
                    module.slot = null;
                }
                filteredWeapons[currentIndex].owner = shape.sid;
                filteredWeapons[currentIndex].slot = slot;
                updateSlots();
                customizeShape(shape);
                saveGameData();
            }
            if (!filteredWeapons[currentIndex - 1]) {
                document.getElementById("goToPre").style.display = "none";
            }
            document.getElementById("goToPre").onclick = function () {
                currentIndex--;
                drawModuleDisplay(filteredWeapons[currentIndex], currentIndex, module);
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
            }
            if (!filteredWeapons[currentIndex + 1]) {
                document.getElementById("goToNext").style.display = "none";
            }
            document.getElementById("goToNext").onclick = function () {
                currentIndex++;
                drawModuleDisplay(filteredWeapons[currentIndex], currentIndex, module);
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
            }
            let THEMODULE = module;
            document.getElementById("Upgrade").onclick = function () {
                let module = filteredWeapons[currentIndex];
                let adjustwidth = (window.innerWidth - 375) * .75;
                document.getElementById("upgradeMenu").style.display = "block";
                document.getElementById("upgradeMenu").innerHTML = `
                <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
                Lvl ${module.level} ${module.name}
                </div>
                <hr>
                <div style="position: absolute; left: 300px; top: 65px;">
                ${enterBarForModule("healthIncrease", module)}
                ${enterBarForModule("selfFixRepair", module)}
                ${enterBarForModule("dmgIncrease", module)}
                ${enterBarForModule("immunity", module)}
                ${enterBarForModule("lastingTime", module)}
                ${enterBarForModule("shieldHealth", module)}
                ${enterBarForModule("shieldRegen", module)}
                ${enterBarForModule("grayDamageDecrease", module)}
                ${enterBarForModule("baseDefensePoints", module)}
                ${enterBarForModule("durabilityLostAmp", module)}
                ${enterBarForModule("increasedDefensePoints", module)}
                ${enterBarForModule("anticontrol", module)}
                </div>
                <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
                X
                </div>
                <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "#00ff00" : "#808080"};">
                <div style="width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "5" : "10"}px;">${sliverUpgradesByTier[module.tier].modules[module.level] ? "UPGRADE" : "MAXED"}</div>
                <div style="display: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${abbreviateNumber(sliverUpgradesByTier[module.tier].modules[module.level])} Sliver</div>
                </div>
                `;
                let sprite = getModuleIcon(module, true);
                sprite.style = "width: 280px; height: 280px;";
                document.getElementById("upgradeMenu").appendChild(sprite);
                document.getElementById("leaveUpgrade").onclick = function () {
                    document.getElementById("upgradeMenu").style.display = "none";
                }
                document.getElementById("UPGRADE").onclick = function () {
                    if (sliverUpgradesByTier[module.tier].modules[module.level] && player.sliver - sliverUpgradesByTier[module.tier].modules[module.level] >= 0) {
                        updateMoneyDisplay("sliver", -sliverUpgradesByTier[module.tier].modules[module.level]);
                        upgradeModule(module, currentIndex, THEMODULE);
                    }
                }
            }
        }
    }
    document.getElementById("goToBattle").onclick = function () {
        saveGameData();
        document.getElementById("shapesDisplay").style.display = "none";
        document.getElementById("sideDisplay").style.display = "none";
        document.getElementById("shopToggle").style.display = "none";
        document.getElementById("workshopToggle").style.display = "none";
        document.getElementById("microshipsToggle").style.display = "none";
        document.getElementById("settingsToggle").style.display = "none";
        document.getElementById("offersToggles").style.display = "none";
        document.getElementById("moneyDisplay").style.display = "none";
        document.getElementById("lootBoxToggle").style.display = "none";
        document.getElementById("operationToggle").style.display = "none";
        document.getElementById("goBackToHanger").style.display = "block";
        document.getElementById("gameModesDisplay").style.display = "block";
        this.style.display = "none";
    }
    var players = [];
    var mapInfo = {
        x: 0,
        y: 0
    }
    function updateChooseSlots() {
        let player = players[0];
        if (!player) return;
        document.getElementById("chooseSlot").style.width = (window.innerWidth / 8) + "px";
        document.getElementById("chooseSlot").innerHTML = "";
        let width = window.innerWidth / 8;
        for (let i = 0; i < 8; i++) {
            let robot = player.robots[i];
            if (robot && !robot.USED) {
                document.getElementById("chooseSlot").innerHTML += `
                <div id="useSlot${i}" style="cursor: pointer; position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
                <div style="width: 100%; text-align: center; color: ${robot.level == 13 ? "#00f" : "#000"}">
                ${robot.name}
                </div>
                </div>
                `;
            } else if (robot && robot.USED) {
                document.getElementById("chooseSlot").innerHTML += `
                <div style="position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
                </div>
                `;
            } else {
                document.getElementById("chooseSlot").innerHTML += `
                <div style="position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
                </div>
                `;
            }
        }
        for (let i = 0; i < 8; i++) {
            let robot = player.robots[i];
            if (robot && !robot.USED) {
                document.getElementById(`useSlot${i}`).onclick = function () {
                    maxScreen = {
                        x: 1980 * robot.fieldOfViewMulti,
                        y: 1080 * robot.fieldOfViewMulti
                    };
                    players[0].robotIndex = i;
                    robot.USED = true;
                    document.getElementById("chooseSlot").style.display = "none";
                    resize();
                }
                for (let t = 0; t < robot.weapons.length; t++) {
                    let weaponImg = getWeaponIcon(robot.weapons[t], true);
                    weaponImg.style = `pointer-events: none; z-index: 44; position: absolute; bottom: ${t >= 4 ? 45 : 0}px; left: ${45 * (t >= 4 ? t-4 : t)}px; width: 45px; height: 45px;`;
                    document.getElementById(`useSlot${i}`).appendChild(weaponImg);
                }
                let robotImg = getShapeSprite(robot, true);
                robotImg.style = "pointer-events: none; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;";
                document.getElementById(`useSlot${i}`).appendChild(robotImg);
            }
        }
    }
    var keysPressed = Array(100).fill(0);
    var LMAOASODPKASPODK = [];
    document.addEventListener("keydown", (e) => {
        keysPressed[e.keyCode] = 1;
        if (e.keyCode == 27) {
            document.getElementById("sideDisplay").innerHTML = mainDisplayText;
        }
        if (parseInt(e.key) <= 8 && parseInt(e.key) >= 1) {
            if (window.isDev) {
                //player.league = 0;
                player.league = 7e3;
                addOperationXP(100e3);
                updateMoneyDisplay("sliver", 1e12);
                updateMoneyDisplay("gold", 10e6);
                updateMoneyDisplay("keys", 100e3);
                updateMoneyDisplay("workshopPoints", 50e3);
            }
            if (document.getElementById("slot" + (parseInt(e.key) - 1))) {
                document.getElementById("slot" + (parseInt(e.key) - 1)).click();
            }
        }
        if (e.key == "ArrowLeft") {
            if (document.getElementById("goToPre") && (!document.getElementById("goToPre").style.display || document.getElementById("goToPre").style.display == "block")) {
                document.getElementById("goToPre").click();
            }
        }
        if (e.key == "ArrowRight") {
            if (document.getElementById("goToNext") && (!document.getElementById("goToNext").style.display || document.getElementById("goToNext").style.display == "block")) {
                document.getElementById("goToNext").click();
            }
        }
        if (e.keyCode == 13) {
            if (players[0]) {
                let plasd = players[0].robots[players[0].robotIndex];
                if (plasd) {
                    LMAOASODPKASPODK.push({
                        x: plasd.x,
                        y: plasd.y
                    });
                }
            }
            if (document.getElementById("upgradeShape")) {
                document.getElementById("upgradeShape").click();
                document.getElementById("UPGRADE").click();
            }
            if (document.getElementById("Upgrade")) {
                document.getElementById("Upgrade").click();
                document.getElementById("UPGRADE").click();
            }
        }
    });
    document.addEventListener("keyup", (e) => {
        keysPressed[e.keyCode] = 0;
    });
    var meta = {
        shapes: ["Orange Pentagon", "Dark Gray Circle", "Yellow Hexagon", "Red Pentagon", "White Circle", "Purple Hexagon"],
        weapons: {
            "Orange Pentagon": {
                heavy: "Cinder",
                light: "Punisher"
            },
            "Dark Gray Circle": {
                heavy: "Delay",
                light: "Slumber"
            },
            "Yellow Hexagon": {
                heavy: "Thunder",
                light: "Storm"
            },
            "White Circle": {
                heavy: "Veyron",
                light: "Evora"
            },
            "Red Pentagon": {
                heavy: "Delay",
                light: "Slumber"
            },
            "Purple Hexagon": {
                heavy: "Delay",
                light: "Slumber"
            },
        }
    }
    function leagueToEquipment(type, P2W, METAROBOT) {
        let tier = 0;
        if (player.league >= 7e3) {
            if (Math.random() < .75) {
                tier = 4;
            } else {
                tier = 3;
            }
        } else if (player.league >= 6e3) {
            if (Math.random() < .5) {
                tier = 4;
            } else {
                tier = 3;
            }
        } else if (player.league >= 5e3) {
            tier = 3;
        } else if (player.league >= 4e3) {
            if (Math.random() < .5) {
                tier = 3;
            } else {
                tier = 2;
            }
        } else if (player.league >= 3e3) {
            tier = 2;
        } else if (player.league >= 2e3) {
            if (Math.random() < .5) {
                tier = 2;
            } else {
                tier = 1;
            }
        } else if (player.league >= 1e3) {
            if (Math.random() < .25) {
                tier = 2;
            } else {
                tier = 1;
            }
        } else if (player.league < 1e3) {
            tier = 1;
        }
        tier = Math.max(tier - 1, 0);
        if (type == "shape") {
            let metaName = meta.shapes[Math.floor(meta.shapes.length * Math.random())];
            let possibleShape = shapeData.filter(e => e.tier == tier);
            return P2W ? shapeData.find(e => e.name == metaName) : possibleShape[Math.floor(possibleShape.length * Math.random())];
        } else if (type == "heavy") {
            let possibleWeapon = weaponData.filter(e => e.type == "Heavy" && e.tier == tier);
            if(!P2W) {
                let index = tier - 1;
                while (possibleWeapon.length == 0) {
                    possibleWeapon = weaponData.filter(e => e.type == "Heavy" && e.tier == index);
                    index--;
                }
            }else {
                return weaponData.find(e => e.name == meta.weapons[METAROBOT].heavy);
            }
            return possibleWeapon[Math.floor(possibleWeapon.length * Math.random())];
        } else if (type == "light") {
            let possibleWeapon = weaponData.filter(e => e.type == "Light" && e.tier == tier);
            if(!P2W) {
                let index = tier - 1;
                while (possibleWeapon.length == 0) {
                    possibleWeapon = weaponData.filter(e => e.type == "Light" && e.tier == index);
                    index--;
                }
            }else {
                return weaponData.find(e => e.name == meta.weapons[METAROBOT].light);
            }
            return possibleWeapon[Math.floor(possibleWeapon.length * Math.random())];
        }
    }
    function leagueToLevel(p2w) {
        if(p2w) {
            return 18;
        }
        if (player.league >= 7e3) {
            return Math.randInt(13, 18);
        } else if (player.league >= 6e3) {
            return Math.randInt(11, 13);
        } else if (player.league >= 5e3) {
            return Math.randInt(9, 11);
        } else if (player.league >= 4e3) {
            return Math.randInt(6, 9);
        } else if (player.league >= 3e3) {
            return 6;
        } else if (player.league >= 2e3) {
            return Math.randInt(3, 6);
        } else if (player.league < 1e3) {
            return Math.randInt(1, 2);
        }
    }
    function generateRandomName() {
        let isP2W = Math.random() < (player.league >= 51e2 ? 0.1 : 0.05);
        let name = "";
        let listOfNames = ["money", "big", "boy", "girl", "irl", "monkey", "white", "fat", "donkey", "george", "tom", "simba", "man", "qwerty"];
        name += listOfNames[Math.floor(listOfNames.length * Math.random())];
        if(Math.random() < .5) {
            name += "_";
            name += listOfNames[Math.floor(listOfNames.length * Math.random())];
        }
        name += Math.randInt(10, 99);
        return name + (isP2W ? "_p2w" : "");
    }
    var KILLLOGS = [];
    function addLogger(name1, weapon, name2) {
        KILLLOGS.push({attacker: name1, weapon: weapon, victim: name2});
        if(KILLLOGS.length > 7) {
            KILLLOGS.shift();
        }
    }
    function setUpGame(gameMode) {
        players = [];
        let shapes = player.shapes.filter(e => e.slot != null);
        players[0] = {
            isAlly: true,
            robotIndex: -1,
            robots: []
        };
        for (let i = 0; i < 8; i++) {
            let REALSHAPE = shapes.find(e => e.slot == i);
            if (REALSHAPE) {
                let index = shapes.findIndex(e => e.slot == i);
                let newShape = new shape(shapes[index], null, true);
                if(gameMode == 3) {
                    newShape.x = Math.random() * mapInfo.x;
                    newShape.y = Math.random() * mapInfo.y;
                } else if (gameMode == 0 || gameMode == 1) {
                    newShape.x = mapInfo.x / 2;
                    newShape.y = mapInfo.y / 2;
                } else {
                    newShape.x = 500 + newShape.scale;
                    newShape.y = mapInfo.y / 2;
                }
                newShape.level = shapes[index].level;
                let weapons = player.weapons.filter(e => e.owner == shapes[index].sid);
                newShape.weapons = [];
                for (let t = 0; t < weapons.length; t++) {
                    let newWeapon = new weapon(weapons[t]);
                    newWeapon.level = weapons[t].level;
                    newWeapon.slot = weapons[t].slot;
                    if(newWeapon.name == "Cinder" && newShape.name == "Orange Pentagon") {
                        newWeapon.dmg *= 1.25;
                    }
                    newShape.weapons.push(newWeapon);
                }
                let modules = player.modules.filter(e => e.owner == shapes[index].sid);
                newShape.modules = [];
                let healthIncrease = 1;
                let dmgIncrease = 1;
                if (player.league <= 300 && player.gameMode == 2) {
                    dmgIncrease += 10;
                    healthIncrease += 5;
                    newShape.speed *= 3;
                }
                let healthIncreaseMicro = microships.filter(e => e.owner == REALSHAPE.sid && e.healthIncrease);
                healthIncreaseMicro.forEach(e => {
                    healthIncrease += e.healthIncrease;
                });
                let dmgIncreaseMicro = microships.filter(e => e.owner == REALSHAPE.sid && e.dmgIncrease);
                dmgIncreaseMicro.forEach(e => {
                    dmgIncrease += e.dmgIncrease;
                });
                newShape.AUTOMICROREPAIRHA = 0;
                let repairPowerPercentMicro = microships.filter(e => e.owner == REALSHAPE.sid && e.repairPowerPercent);
                repairPowerPercentMicro.forEach(e => {
                    newShape.AUTOMICROREPAIRHA += e.repairPowerPercent;
                });
                dmgIncrease += (newShape.baseDamageIncrease || 0);
                for (let t = 0; t < modules.length; t++) {
                    let newModule = new module(modules[t]);
                    newModule.level = modules[t].level;
                    if (newModule.healthIncrease) {
                        healthIncrease += newModule.healthIncrease;
                    }
                    if (newModule.dmgIncrease) {
                        dmgIncrease += newModule.dmgIncrease;
                    }
                    newShape.modules.push(newModule);
                }
                dmgIncrease = Math.max(dmgIncrease, 0.01);
                for (let i = 0; i < newShape.weapons.length; i++) {
                    let weapon = newShape.weapons[i];
                    weapon.dmg *= dmgIncrease;
                }
                if (newShape.ability && newShape.ability.dmg) {
                    newShape.ability.dmg *= dmgIncrease;
                }
                newShape.shields = [];
                if (newShape.baseShielding) {
                    let increase = 1;
                    let fortifier = newShape.modules.filter(e => e.shieldHealth);
                    fortifier.forEach(e => {
                        increase += e.shieldHealth;
                    })
                    newShape.shields.push({
                        maxhealth: newShape.baseShielding.health * increase,
                        health: newShape.baseShielding.health * increase,
                        type: newShape.baseShielding.type,
                        regen: newShape.baseShielding.regen
                    });
                }
                newShape.health = newShape.maxhealth = parseInt(removeDecimals(newShape.maxhealth * healthIncrease));
                newShape.isMe = true;
                newShape.USED = false;
                let repairAmps = newShape.modules.filter(e => e.name == "Repair Amplifier");
                if(repairAmps.length) {
                    newShape.repairAmp = {
                        require: 1e300,
                        requirePercent: 1,
                        defensePoints: 0,
                        amount: 0
                    };
                    for(let i = 0; i < repairAmps.length; i++) {
                        if(newShape.repairAmp.requirePercent >= repairAmps[i].durabilityLostAmp) {
                            newShape.repairAmp.requirePercent = repairAmps[i].durabilityLostAmp;
                            newShape.repairAmp.require = newShape.maxhealth * repairAmps[i].durabilityLostAmp;
                        }
                        newShape.repairAmp.defensePoints += repairAmps[i].increasedDefensePoints;
                        newShape.baseDP += repairAmps[i].baseDefensePoints;
                        newShape.repairAmp.amount++;
                    }
                }
                let antiControl = newShape.modules.filter(e => e.name == "Anti Control").sort((a, b) => b.antiControl - a.antiControl)[0];
                if(antiControl) {
                    newShape.negEffectReduction = 1 - antiControl.antiControl;
                }
                newShape.playingSid = 0;
                players[0].robots.push(newShape);
            } else {
                players[0].robots.push(null);
            }
        }
        if (gameMode == 2 || gameMode == 3) {
            for (let i = 0; i < (gameMode == 3 ? 10: 11); i++) {
                players[1 + i] = {
                    name: generateRandomName(),
                    isAlly: gameMode == 3 ? false : i < 5 ? true : false,
                    notMe: true,
                    robotIndex: 0,
                    robots: []
                };
            }
            for (let tt = 0; tt < (gameMode == 3 ? 10 : 11); tt++) {
                for (let i = 0; i < (players[0].robots.length * (gameMode == 3 ? 2 : tt < 5 ? 1 : 2)); i++) {
                    let playerRobot = players[0].robots[i];
                    if (playerRobot) {
                        let isP2W = players[tt + 1].name.includes("p2w");
                        let possibleShape = leagueToEquipment("shape", isP2W);
                        let tmpShape = new shape(possibleShape, null, true);
                        for (let level = 0; level < leagueToLevel(isP2W) - 1; level++) {
                            upgradeShape(tmpShape, true, true, "BOT");
                        }
                        let newShape = new shape(tmpShape, null, true);
                        newShape.level = tmpShape.level;
                        if(gameMode == 3) {
                            newShape.x = Math.random() * mapInfo.x;
                            newShape.y = Math.random() * mapInfo.y;
                        }else if (tt < 5) {
                            newShape.x = 500 + newShape.scale;
                            newShape.y = mapInfo.y / 2;
                        } else {
                            newShape.x = mapInfo.x - 500 - newShape.scale;
                            newShape.y = mapInfo.y / 2;
                        }
                        newShape.weapons = [];
                        if (newShape.hardpoints.heavy) {
                            let possibleWeapon = leagueToEquipment("heavy", isP2W, possibleShape.name);
                            let tmpWeapon = new weapon(possibleWeapon);
                            for (let level = 0; level < leagueToLevel(isP2W) - 1; level++) {
                                upgradeWeapon(tmpWeapon, null, null, true);
                            }
                            for (let i = 0; i < newShape.hardpoints.heavy; i++) {
                                let newWeapon = new weapon(tmpWeapon);
                                newWeapon.level = tmpWeapon.level;
                                if(newWeapon.name == "Cinder" && newShape.name == "Orange Pentagon") {
                                    newWeapon.dmg *= 1.25;
                                }
                                newShape.weapons.push(newWeapon);
                            }
                        }
                        if (newShape.hardpoints.light) {
                            let possibleWeapon = leagueToEquipment("light", isP2W, possibleShape.name);
                            let tmpWeapon = new weapon(possibleWeapon);
                            for (let level = 0; level < leagueToLevel(isP2W) - 1; level++) {
                                upgradeWeapon(tmpWeapon, null, null, true, "BOT");
                            }
                            for (let i = 0; i < newShape.hardpoints.light; i++) {
                                let newWeapon = new weapon(tmpWeapon);
                                newWeapon.level = tmpWeapon.level;
                                newShape.weapons.push(newWeapon);
                            }
                        }
                        newShape.modules = [];
                        let healthIncrease = 1;
                        let dmgIncrease = 1;
                        dmgIncrease += (newShape.baseDamageIncrease || 0);
                        for (let i = 0; i < newShape.weapons.length; i++) {
                            let weapon = newShape.weapons[i];
                            weapon.slot = i;
                            weapon.dmg *= dmgIncrease;
                        }
                        if (newShape.ability && newShape.ability.dmg) {
                            newShape.ability.dmg *= dmgIncrease;
                        }
                        newShape.shields = [];
                        if (newShape.baseShielding) {
                            let increase = 1;
                            newShape.shields.push({
                                maxhealth: newShape.baseShielding.health * increase,
                                health: newShape.baseShielding.health * increase,
                                type: newShape.baseShielding.type,
                                regen: newShape.baseShielding.regen
                            });
                        }
                        newShape.health = newShape.maxhealth = parseInt(removeDecimals(newShape.maxhealth * healthIncrease));
                        newShape.USED = false;
                        newShape.PLAYERNAME = players[1 + tt].name;
                        newShape.playingSid = tt + 1;
                        players[1 + tt].robots.push(newShape);
                    } else {
                        players[1 + tt].robots.push(null);
                    }
                }
            }
        }
        updateChooseSlots();
    }
    var arena = {
        bossIndex: 0,
        bosses: [{
            name: "Level 1 Boss",
            health: 250e3,
            speed: 0.0028,
            scale: 210,
            AOEArea: {
                range: 800,
                dmg: 500,
                fireRate: 250
            },
            BLASTWAVE: {
                range: 400,
                dmg: 15e3,
                knockback: 3
            },
            onKill: {
                silver: 75e3,
                gold: 10,
                keys: 25,
                OXP: 50
            }
        }, {
            name: "Level 2 Boss",
            health: 500e3,
            speed: 0.0048,
            scale: 155,
            AOEArea: {
                range: 800,
                dmg: 500,
                fireRate: 100
            },
            BLASTWAVE: {
                range: 190,
                dmg: 15e3,
                knockback: 15
            },
            onKill: {
                silver: 225e3,
                gold: 35,
                keys: 50,
                OXP: 75
            }
        }, {
            name: "Level 3 Boss",
            health: 900e3,
            speed: 0.0018,
            scale: 295,
            AOEArea: {
                range: 600,
                dmg: 1750,
                fireRate: 100
            },
            onKill: {
                silver: 850e3,
                gold: 150,
                keys: 75,
                OXP: 200
            }
        }, {
            name: "Level 4 Boss",
            health: 12e5,
            speed: 0.0018,
            scale: 155,
            AOEArea: {
                range: 1800,
                dmg: 2e3,
                fireRate: 150
            },
            onKill: {
                silver: 8e6,
                gold: 200,
                keys: 200,
                OXP: 500
            }
        }, {
            name: "Level 5 Boss",
            health: 2e6,
            speed: 0.0018,
            scale: 155,
            onKill: {
                silver: 15e6,
                gold: 300,
                keys: 500,
                OXP: 750
            }
        }, {
            name: "Level 6 Boss",
            health: 25e5,
            speed: 0.004,
            scale: 155,
            onKill: {
                silver: 30e6,
                gold: 600,
                keys: 700,
                OXP: 1250
            }
        }, {
            name: "Level 7 Boss",
            health: 55e5,
            speed: 0.0014,
            scale: 155,
            onKill: {
                silver: 40e6,
                gold: 900,
                keys: 700,
                OXP: 1550
            }
        }, {
            name: "Level 8 Boss",
            health: 7e6,
            speed: 0.0014,
            scale: 155,
            onKill: {
                silver: 30e6,
                gold: 400,
                keys: 300,
                OXP: 750,
                WSP: 200
            }
        }, {
            name: "Level 9 Boss",
            health: 50e6,
            speed: 0.002,
            scale: 105,
            onKill: {
                silver: 100e6,
                gold: 500,
                keys: 400,
                OXP: 750,
                WSP: 200
            }
        }]
    };
    document.getElementById("arena").onclick = function () {
        document.getElementById("chooseSlot").style.display = "block";
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        player.gameMode = 1;
        players = [];
        mapInfo.x = mapInfo.y = 3e3;
        setUpGame(player.gameMode);
        enemies = [];
        arena.bossIndex = 0;
        enemies.push(new enemy(arena.bosses[0], true));
        resize();
    }
    var buildings = [];
    var beaconPoints = {
        ally: 0,
        enemy: 0
    };
    function setUpCollisionBlocks(mapID) {
        if (mapID == 0) {
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 2454,
                    y: y
                });
            }
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 2086,
                    y: y
                });
            }
            for (let x = 2152; x < 2406; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 2285,
                    x: x,
                    y: 2546
                });
            }
            for (let x = 2152; x < 2406; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 2285,
                    x: x,
                    y: 4458
                });
            }
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 7790,
                    y: y
                });
            }
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 8162,
                    y: y
                });
            }
            for (let x = 7850; x < 8130; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 7977,
                    x: x,
                    y: 2546
                });
            }
            for (let x = 7850; x < 8130; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 7977,
                    x: x,
                    y: 4450
                });
            }//
            for (let x = 0; x < 2035; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    onlyDir: 0,
                    y: 4745
                });
            }
            for (let x = 0; x < 2035; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    onlyDir: 0,
                    y: 5050
                });
            }
            for (let y = 4777; y < 4989; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 4890,
                    x: 2047,
                    y: y
                });
            }//
            for (let y = 4804; y < 6610; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 5552,
                    x: 2339,
                    y: y
                });
            }
            for (let y = 4804; y < 6610; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 5552,
                    x: 2660,
                    y: y
                });
            }
            for (let x = 2397; x < 2633; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 2484,
                    y: 4747
                });
            }
            for (let x = 2397; x < 2633; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 2484,
                    y: 6653
                });
            }//
            for (let x = 7812; x < 9600; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 8732,
                    y: 4948
                });
            }
            for (let x = 7812; x < 9600; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 8732,
                    y: 5246
                });
            }
            for (let y = 5000; y < 5250; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 5119,
                    x: 7737,
                    y: y
                });
            }
            for (let y = 5000; y < 5250; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 5119,
                    x: 9649,
                    y: y
                });
            }//
            for (let y = 2565; y < 4447; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 3151,
                    y: y
                });
            }
            for (let y = 2565; y < 4447; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 3449,
                    y: y
                });
            }
            for (let x = 3211; x < 3429; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 3288,
                    y: 2503
                });
            }
            for (let x = 3211; x < 3429; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 3288,
                    y: 4496
                });
            }//
            for (let x = 637; x < 2422; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 1570,
                    y: 1943
                });
            }
            for (let x = 637; x < 2422; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 1570,
                    y: 2259
                });
            }
            for (let y = 2024; y < 2191; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 2103,
                    x: 540,
                    y: y
                });
            }
            for (let y = 2024; y < 2191; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 2103,
                    x: 2456,
                    y: y
                });
            }//
            for (let y = 300; y < 1725; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 1008,
                    x: 2145,
                    y: y
                });
            }
            for (let y = 300; y < 1725; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 1008,
                    x: 2450,
                    y: y
                });
            }
            for (let x = 2180; x < 2452; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 2273,
                    y: 249
                });
            }
            for (let x = 2180; x < 2452; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 2273,
                    y: 1759
                });
            }//
            for (let y = 3129; y < 3882; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 3747,
                    y: y
                });
            }
            for (let y = 3129; y < 3882; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 4045,
                    y: y
                });
            }
            for (let x = 3811; x < 3989; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 3888,
                    x: x,
                    y: 3048
                });
            }
            for (let x = 3811; x < 3989; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 3888,
                    x: x,
                    y: 3946
                });
            }//
            for (let y = 3111; y < 3885; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 6147,
                    y: y
                });
            }
            for (let y = 3111; y < 3885; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 6453,
                    y: y
                });
            }
            for (let x = 6211; x < 6461; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 6281,
                    x: x,
                    y: 3045
                });
            }
            for (let x = 6211; x < 6461; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 6281,
                    x: x,
                    y: 3961
                });
            }//
            for (let y = 2571; y < 4440; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 6752,
                    y: y
                });
            }
            for (let y = 2571; y < 4440; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 7046,
                    y: y
                });
            }
            for (let x = 6788; x < 7029; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 6887,
                    x: x,
                    y: 2502
                });
            }
            for (let x = 6788; x < 7029; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 6887,
                    x: x,
                    y: 4495
                });
            }//
            for (let x = 7800; x < 9604; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 8664,
                    x: x,
                    y: 1937
                });
            }
            for (let x = 7800; x < 9604; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 8664,
                    x: x,
                    y: 2245
                });
            }
            for (let y = 2014; y < 2203; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 9662,
                    x: 7747,
                    y: y
                });
            }
            for (let y = 2014; y < 2203; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 9662,
                    x: 9662,
                    y: y
                });
            }//
            for (let y = 293; y < 1739; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 1002,
                    x: 7737,
                    y: y
                });
            }
            for (let y = 293; y < 1739; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 1002,
                    x: 8052,
                    y: y
                });
            }
            for (let x = 7822; x < 8009; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 7911,
                    x: x,
                    y: 249
                });
            }
            for (let x = 7822; x < 8009; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 7911,
                    x: x,
                    y: 1749
                });
            }//
            for (let y = 5608; y < mapInfo.y; y += 50) {
                buildings.push({
                    name: "left col",
                    onlyDir: -(Math.PI / 2),
                    x: 7745,
                    y: y
                });
            }
            for (let y = 5608; y < mapInfo.y; y += 50) {
                buildings.push({
                    name: "right col",
                    onlyDir: -(Math.PI / 2),
                    x: 8049,
                    y: y
                });
            }
            for (let x = 7786; x < 7995; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 7891,
                    x: x,
                    y: 5547
                });
            }
        }
    }
    function setMapBuildings(mapID) {
        player.mapID = mapID;
        if (mapID == 0) {
            if(player.gameMode != 3) {
                buildings.push({
                    name: "beacon",
                    x: 1200,
                    y: 1200
                });
                buildings.push({
                    name: "beacon",
                    x: 1200,
                    y: mapInfo.y - 1200
                });
                buildings.push({
                    name: "beacon",
                    x: mapInfo.x / 2,
                    y: mapInfo.y / 2
                });
                buildings.push({
                    name: "beacon",
                    x: mapInfo.x - 1200,
                    y: mapInfo.y - 1200
                });
                buildings.push({
                    name: "beacon",
                    x: mapInfo.x - 1200,
                    y: 1200
                });
            }
            buildings.push({
                name: "wall rect",
                x: 600,
                y: 2000,
                width: 1800,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: 2200,
                y: 300,
                width: 200,
                height: 1400
            });
            buildings.push({
                name: "wall rect",
                x: 0,
                y: mapInfo.y - 2200,
                width: 2e3,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: 2400,
                y: mapInfo.y - 2200,
                width: 200,
                height: 1800
            });
            buildings.push({
                name: "wall rect",
                x: 2150,
                y: mapInfo.y / 2 - 900,
                width: 250,
                height: 1800
            });
            buildings.push({
                name: "wall rect",
                x: 3200,
                y: mapInfo.y / 2 - 950,
                width: 200,
                height: 1900
            });
            buildings.push({
                name: "wall rect",
                x: 3800,
                y: mapInfo.y / 2 - 400,
                width: 200,
                height: 800
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2150,
                y: mapInfo.y / 2 - 900,
                width: 250,
                height: 1800
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 3200,
                y: mapInfo.y / 2 - 950,
                width: 200,
                height: 1900
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 3800,
                y: mapInfo.y / 2 - 400,
                width: 200,
                height: 800
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: mapInfo.y - 2000,
                width: 1800,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: mapInfo.y - 1400,
                width: 200,
                height: 1400
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: 2000,
                width: 1800,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: 300,
                width: 200,
                height: 1400
            });
            setUpCollisionBlocks(0);
        }
    }
    document.getElementById("1v11").onclick = function() {
        document.getElementById("chooseSlot").style.display = "block";
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        mapInfo.x = 10e3;
        mapInfo.y = 7e3;
        player.gameMode = 3;
        players = [];
        setUpGame(3);
        beaconPoints = {
            ally: 0,
            enemy: 0
        };
        setMapBuildings(0);
        resize();
    }
    document.getElementById("1v1Match").onclick = function () {
        document.getElementById("chooseSlot").style.display = "block";
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        mapInfo.x = 10e3;
        mapInfo.y = 7e3;
        player.gameMode = 2;
        players = [];
        setUpGame(2);
        beaconPoints = {
            ally: 0,
            enemy: 0
        };
        setMapBuildings(0);
        resize();
    }
    document.getElementById("extermination").onclick = function () {
        document.getElementById("chooseSlot").style.display = "block";
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        player.gameMode = 0;
        players = [];
        mapInfo.x = mapInfo.y = 4e3;
        extermination.waveIndex = -1;
        setUpGame(player.gameMode);
        resize();
    }
    document.getElementById("goBackToHanger").onclick = function () {
        document.getElementById("operationToggle").style.display = "block";
        document.getElementById("lootBoxToggle").style.display = "block";
        document.getElementById("shapesDisplay").style.display = "block";
        document.getElementById("sideDisplay").style.display = "block";
        document.getElementById("shopToggle").style.display = "block";
        document.getElementById("workshopToggle").style.display = "block";
        document.getElementById("microshipsToggle").style.display = "block";
        document.getElementById("settingsToggle").style.display = "block";
        document.getElementById("offersToggles").style.display = "block";
        document.getElementById("moneyDisplay").style.display = "block";
        document.getElementById("goToBattle").style.display = "block";
        document.getElementById("gameModesDisplay").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = mainDisplayText;
        this.style.display = "none";
    }
    function enterBarForShape(type, shape) {
        let text = "";
        let Shape = shapeData.find(item => item.name == shape.name);
        let maxwidth = window.innerWidth >= 1442 ? 500 : window.innerWidth >= 1374 ? 450 : window.innerWidth >= 1311 ? 400 : window.innerWidth >= 1245 ? 350 : window.innerWidth >= 1182 ? 300 : 250;
        if (type == "health") {
            let maxhealth = Shape.healthData.base;
            for (let i = 0; i < Shape.healthData.level.length; i++) {
                maxhealth += Shape.healthData.level[i];
            }
            let MK1 = maxhealth;
            maxhealth *= 1.2;
            let MK2 = maxhealth;
            maxhealth *= 1.5;
            let indexAdjust = ((shape.health / maxhealth) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.health + (shape.level == 13 ? (maxhealth - MK2) : shape.level == 12 ? (MK2 - MK1) : Shape.healthData.level[shape.level])) / maxhealth) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Health: ${abbreviateNumber(shape.health)}
            <div style="display: ${Shape.healthData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxhealth - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.healthData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "speed") {
            let maxspeed = Shape.speed;
            for (let i = 0; i < Shape.speedLevel.length; i++) {
                maxspeed += Shape.speedLevel[i];
            }
            let Mk1 = maxspeed;
            maxspeed *= 1.2;
            let Mk2 = maxspeed;
            maxspeed *= 1.1;
            let indexAdjust = ((shape.speed / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.speed + (shape.level == 13 ? (maxspeed - Mk2) : shape.level == 12 ? (Mk2 - Mk1) : Shape.speedLevel[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Speed: ${shape.speed * 1000}
            <div style="display: ${Shape.speedLevel[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? (maxspeed - Mk2) * 1000 : shape.level == 12 ? (Mk2 - Mk1) * 1000 : (Shape.speedLevel[shape.level] * 1000)}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "ability damage" && shape.ability && shape.ability.dmg) {
            let maxspeed = Shape.ability.damageData.base;
            for (let i = 0; i < Shape.ability.damageData.level.length; i++) {
                maxspeed += Shape.ability.damageData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let MK2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.ability.dmg / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.dmg + (shape.level == 13 ? maxspeed - MK2 : shape.level == 12 ? MK2 - MK1 : Shape.ability.damageData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Ability Damage: ${abbreviateNumber(shape.ability.dmg)}
            <div style="display: ${Shape.ability.damageData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.ability.damageData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "shield hp" && shape.baseShielding) {
            let maxspeed = Shape.shieldData.base;
            for (let i = 0; i < Shape.shieldData.level.length; i++) {
                maxspeed += Shape.shieldData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let Mk2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.baseShielding.health / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.baseShielding.health + (shape.level == 13 ? maxspeed - Mk2 : shape.level == 12 ? Mk2 - MK1 : Shape.shieldData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability: ${abbreviateNumber(shape.baseShielding.health)}
            <div style="display: ${Shape.shieldData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - Mk2) : shape.level == 12 ? abbreviateNumber(Mk2 - MK1) : abbreviateNumber(Shape.shieldData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "ability dot damage" && shape.ability && shape.ability.dotDamage) {
            let maxspeed = Shape.ability.dotData.base;
            for (let i = 0; i < Shape.ability.dotData.level.length; i++) {
                maxspeed += Shape.ability.dotData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let MK2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.ability.dotDamage / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.dotDamage + (shape.level == 13 ? maxspeed - MK2 : shape.level == 12 ? MK2 - MK1 : Shape.ability.dotData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Ability DOT Damage: ${abbreviateNumber(shape.ability.dotDamage)}
            <div style="display: ${Shape.ability.dotData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.ability.dotData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "ashield hp" && shape.ability && shape.ability.shieldHp) {
            let maxspeed = Shape.ability.shieldHpData.base;
            for (let i = 0; i < Shape.ability.shieldHpData.level.length; i++) {
                maxspeed += Shape.ability.shieldHpData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let MK2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.ability.shieldHp / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.shieldHp + (shape.level == 13 ? maxspeed - MK2 : shape.level == 12 ? MK2 - MK1 : Shape.ability.shieldHpData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability: ${abbreviateNumber(shape.ability.shieldHp)}
            <div style="display: ${Shape.ability.shieldHpData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.ability.shieldHpData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        }
        return text;
    }
    var text = [];
    var textIndex = 0;
    function addText(x, y, value, life, color) {
        if(!dmghealtext) return;
        value = Math.abs(value);
        let dirs = [-0.78, -2.34, -0.39, -1.17, -1.95];
        text.push({
            x: x,
            y: y,
            value: value,
            dir: dirs[textIndex % 5],
            life: life,
            color: color
        });
        textIndex++;
    }
    function upgradeShape(shape, noEz, isBOT) {
        let Shape = shapeData.find(item => item.name == shape.name);
        let healthIncrease = Shape.healthData.level[shape.level];
        if (shape.level < 12) {
            shape.sellPrice += sliverUpgradesByTier[shape.tier].shapes[shape.level] * .75;
            shape.health += healthIncrease;
            shape.maxhealth += healthIncrease;
            let speedIncrease = Shape.speedLevel[shape.level];
            shape.speed += speedIncrease;
            shape.speed = (shape.speed * 1000).toFixed(1) / 1000;
        } else {
            shape.health *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
            shape.maxhealth *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
            shape.speed *= isBOT && shape.level >= 13 ? 1.1 : shape.level == 13 ? 1.1 : 1.2;
        }
        if (shape.ability) {
            if (shape.ability.shieldHp) {
                let increase = Shape.ability.shieldHpData.level[shape.level];//dotDamage
                if (shape.level < 12) {
                    shape.ability.shieldHp += increase;
                } else {
                    shape.ability.shieldHp *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
                }
            }
            if (shape.ability.dmg) {
                let increase = Shape.ability.damageData.level[shape.level];//dotDamage
                if (shape.level < 12) {
                    shape.ability.dmg += increase;
                } else {
                    shape.ability.dmg *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
                }
            }
            if (shape.ability.dotDamage) {
                let increase = Shape.ability.dotData.level[shape.level];
                if (shape.level < 12) {
                    shape.ability.dotDamage += increase;
                } else {
                    shape.ability.dotDamage *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
                }
            }
        }
        if (shape.baseShielding) {
            if (shape.level < 12) {
                let increase = Shape.shieldData.level[shape.level];
                shape.baseShielding.health += increase;
            } else {
                shape.baseShielding.health *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
            }
        }
        shape.level++;
        if (shape.slot != null && !noEz) {
            document.getElementById("slot" + shape.slot).click();
            document.getElementById("upgradeShape").click();
        }
        if (!noEz) updateSlots();
        if (!noEz) saveGameData();
    }
    function customizeShape(shape) {
        let moduleOn = false;
        document.getElementById("sideDisplay").innerHTML = `
        <div style="margin-top: 5px; color: ${tierColor(shape)}; width: 100%; text-align: center; font-size: 40px;">${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}</div>
        <hr>
        <div style="position: absolute; top: ${((window.innerHeight - 56.5) / 2) - 194}px; left: 10px; width: 355px; height: 245px; background-color: rgb(0, 0, 0, 0.4); overflow-y: scroll;">
        <div style="margin-top: 10px; margin-left: 10px; color: #fff;"><strong>${shape.name}</strong></div>
        <div style="margin-top: 10px; margin-left: 10px;">
        ${shape.desc}<br><br>
        ${shape.ability ? shape.ability.desc : ""}
        </div>
        <hr style="border-color: #000;">
        <div style="margin-left: 10px;">
        Health: ${abbreviateNumber(shape.health)}<br>
        ${shape.builtInDefensePoints ? `Defense Points: ${shape.builtInDefensePoints} (${((1 - defensePointsToResistance(shape.builtInDefensePoints)) * 100).toFixed(1)}% Resistance)<br>` : ""}
        Speed: ${shape.speed * 1000} PX/SEC<br>
        ${shape.baseShielding ? `Energy Shield Health: ${abbreviateNumber(shape.baseShielding.health)}<br>` : ""}
        ${shape.baseDamageIncrease ? `Base Dmg Increase: ${shape.baseDamageIncrease * 100}%<br>` : ""}
        ${shape.reflector ? `Damage Reflection: ${shape.reflector * 100}%<br>` : ""}
        ${shape.ability && shape.ability.dmg ? `Ability Dmg: ${abbreviateNumber(shape.ability.dmg)}<br>` : ""}
        ${shape.ability && shape.ability.dotDamage ? `Ability DOT Dmg: ${abbreviateNumber(shape.ability.dotDamage)}<br>` : ""}
        ${shape.ability && shape.ability.shieldHp ? `Ability Shield HP: ${abbreviateNumber(shape.ability.shieldHp)}<br>` : ""}
        ${shape.dotResistance ? `DOT Resistance: ${removeDecimals((1-shape.dotResistance) * 100)}%<br>` : ""}
        <p></p>
        </div>
        </div>
        <div id="weaponDisplay" style="position: absolute; bottom: ${((window.innerHeight - 56.5) / 2) - 250}px; left: 375px; width: 355px; height: 500px; background-color: rgb(0, 0, 0, 0.4); overflow-y: scroll;">
        </div>
        <div id="toggleModule" style="position: absolute; cursor: pointer; font-size: 25px; top: ${((window.innerHeight - 56.5) / 2) + 60}px; left: 10px; width: 355px; height: 45px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; left: ${355 / 2 - 50}px; top: 4px;">
        Modules
        </div>
        </div>
        <div id="changeShape" style="position: absolute; cursor: pointer; font-size: 40px; top: ${((window.innerHeight - 56.5) / 2) + 115}px; left: 10px; width: 355px; height: 90px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; left: ${355 / 2 - 133}px; top: ${45 - 27}px;">Change Shape</div>
        </div>
        <div id="upgradeShape" style="position: absolute; cursor: pointer; font-size: 40px; top: ${((window.innerHeight - 56.5) / 2) + 215}px; left: 10px; width: 355px; height: 90px; background-color: rgb(0, 255, 0, 0.8);">
        <div style="position: absolute; left: ${355 / 2 - 80}px; top: ${45 - 27}px;">Upgrade</div>
        </div>
        <div id="upgradeMenu" style="display: none; color: #fff; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, 0.7);">
        </div>
        `;
        let hardpoints = shape.hardpoints.light + shape.hardpoints.heavy;
        let filteredWeapons = player.weapons.filter(e => e.owner == shape.sid);
        let elements = [];
        let doWeaponsStuff = () => {
            elements = [];
            for (let i = 0; i < hardpoints; i++) {
                let weaponType = "";
                if (i < shape.hardpoints.light && shape.hardpoints.light > 0) {
                    elements.push("LIGHT slot" + i);
                    weaponType = "LIGHT";
                } else {
                    elements.push("HEAVY slot" + i);
                    weaponType = "HEAVY";
                }
                document.getElementById("weaponDisplay").innerHTML += `
                <div id="${weaponType} slot${i}" style="position: relative; cursor: pointer; height: ${500 / 4}px; width: 100%; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2);" : "rgb(255, 255, 255, 0.1);"}}">
                </div>
                `;
            }
            for (let i = 0; i < elements.length; i++) {
                let elementId = elements[i];
                let weapon = filteredWeapons.find(e => e.slot == parseInt(elementId[elementId.length - 1]));
                if (!weapon) {
                    document.getElementById(elementId).innerHTML = `
                    <span style="position: absolute; top: ${125 / 2 - 27}px; left: ${355 / 2 - 135}px; font-size: 40px;">Equip Weapon</span>
                    `;
                    document.getElementById(elementId).onclick = function () {
                        customizeWeapon(elementId.includes("LIGHT") ? "Light" : "Heavy", shape, parseInt(elementId[elementId.length - 1]));
                    }
                } else {
                    let weaponIcon = getWeaponIcon(weapon, true);
                    weaponIcon.style = "width: 125px; height: 125px;";
                    document.getElementById(elementId).appendChild(weaponIcon);
                    document.getElementById(elementId).innerHTML += `
                    <div style="position: absolute; color: ${tierColor(weapon)}; top: 5px; left: 135px; font-size: 24px;">
                    ${weapon.level >= 13 ? `${weapon.name} <span style="color: ${weapon.level == 13 ? "#0f0" : "#ffff00"};">${weapon.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapon.level} ${weapon.name}`}
                    </div>
                    <div style="position: absolute; top: 32px; left: 135px; color: #fff; font-size: 14px;">
                    ${elementId.includes("LIGHT") ? "Light" : "Heavy"}
                    </div>
                    `;
                    document.getElementById(elementId).onclick = function () {
                        customizeWeapon(weapon, shape, parseInt(elementId[elementId.length - 1]));
                    }
                }
            }
        }
        doWeaponsStuff();
        let filteredModules = player.modules.filter(e => e.owner == shape.sid);
        document.getElementById("toggleModule").onclick = function () {
            moduleOn = !moduleOn;
            document.getElementById("weaponDisplay").innerHTML = "";
            if (moduleOn) {
                document.getElementById("toggleModule").innerHTML = `
                <div style="position: absolute; left: ${355 / 2 - 54}px; top: 4px;">
                Weapons
                </div>
                `;
                let moduleHardpoints = (shape.moduleHardpoints || 0);
                let elements = [];
                for (let i = 0; i < moduleHardpoints; i++) {
                    document.getElementById("weaponDisplay").innerHTML += `
                    <div id="moduleSlot${i}" style="position: relative; cursor: pointer; height: ${500 / 4}px; width: 100%; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2);" : "rgb(255, 255, 255, 0.1);"}}">
                    </div>
                    `;
                    elements.push(`moduleSlot${i}`);
                }
                for (let i = 0; i < elements.length; i++) {
                    let elementId = elements[i];
                    let module = filteredModules.find(e => e.slot == parseInt(elementId[elementId.length - 1]));
                    if (!module) {
                        document.getElementById(elementId).innerHTML = `
                        <span style="position: absolute; top: ${125 / 2 - 27}px; left: ${355 / 2 - 128.5}px; font-size: 40px;">
                        Equip Module
                        </span>
                        `;
                    } else {
                        let moduleIcon = getWeaponIcon(module, true);
                        moduleIcon.style = "width: 125px; height: 125px;";
                        document.getElementById(elementId).appendChild(moduleIcon);
                        document.getElementById(elementId).innerHTML += `
                        <div style="position: absolute; top: 5px; color: ${tierColor(module)}; left: 135px; font-size: 24px;">
                        Lvl ${module.level} ${module.name}
                        </div>
                        `;
                    }
                    document.getElementById(elementId).onclick = function () {
                        if (player.modules.filter(e => e.owner == null).length || module) {
                            customizeModule(module, shape, parseInt(elementId[elementId.length - 1]));
                        } else {
                            alert("You have no modules in inventory.")
                        }
                    };
                }
            } else {
                document.getElementById("toggleModule").innerHTML = `
                <div style="position: absolute; left: ${355 / 2 - 50}px; top: 4px;">
                Modules
                </div>
                `;
                doWeaponsStuff();
            }
        }
        document.getElementById("changeShape").onclick = function () {
            equipShape(shape.slot);
            saveGameData();
        }
        document.getElementById("upgradeShape").onclick = function () {
            let adjustwidth = (window.innerWidth - 375) * .75;
            document.getElementById("upgradeMenu").style.display = "block";
            document.getElementById("upgradeMenu").innerHTML = `
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${enterBarForShape("health", shape)}
            ${enterBarForShape("speed", shape)}
            ${enterBarForShape("ability damage", shape)}
            ${enterBarForShape("ability dot damage", shape)}
            ${enterBarForShape("shield hp", shape)}
            ${enterBarForShape("ashield hp", shape)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "#00ff00" : [12, 13].includes(shape.level) ? "#ffff00" : "#808080"};">
            <div style="width: 100%; text-align: center; color: ${[12, 13].includes(shape.level) ? "#f00" : "#fff"}; font-size: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "24" : [12, 13].includes(shape.level) ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "5" : shape.level == 12 ? "5" : "10"}px;">${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "UPGRADE" : [12, 13].includes(shape.level) ? "ENHANCE" : "MAXED"}</div>
            <div style="color: ${[12, 13].includes(shape.level) ? "#f00" : "#fff"}; display: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "block" : [12, 13].includes(shape.level) ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${[12, 13].includes(shape.level) ? `${abbreviateNumber(shape.enhanceCost * (shape.level == 13 ? 48 : 1))} Gold` : `${abbreviateNumber(sliverUpgradesByTier[shape.tier].shapes[shape.level])} Sliver`}</div>
            </div>
            `;
            let sprite = getShapeSprite(shape, true);
            sprite.style = "width: 280px; height: 280px;";
            document.getElementById("upgradeMenu").appendChild(sprite);
            document.getElementById("leaveUpgrade").onclick = function () {
                document.getElementById("upgradeMenu").style.display = "none";
            }
            document.getElementById("UPGRADE").onclick = function () {
                if (sliverUpgradesByTier[shape.tier].shapes[shape.level] || shape.level == 12 || shape.level == 13) {
                    if (shape.level >= 12) {
                        if (player.gold - (shape.enhanceCost * (shape.level == 13 ? 48 : 1)) >= 0) {
                            updateMoneyDisplay("gold", -(shape.enhanceCost * (shape.level == 13 ? 48 : 1)));
                            upgradeShape(shape);
                        }
                    } else {
                        if (player.sliver - sliverUpgradesByTier[shape.tier].shapes[shape.level] >= 0) {
                            updateMoneyDisplay("sliver", -sliverUpgradesByTier[shape.tier].shapes[shape.level]);
                            upgradeShape(shape);
                        } else if (player.gold > 0) {
                            let amountNeeded = sliverUpgradesByTier[shape.tier].shapes[shape.level] - player.sliver;
                            let amountToGold = Math.round(amountNeeded / 1250);
                            if (player.gold - amountToGold >= 0) {
                                let answer = prompt(`Not Enough Silver!\nYou Need ${abbreviateNumber(amountNeeded)} Silver!\nUse ${abbreviateNumber(amountToGold)} Gold to make up for the amount of silver missing!\nType "y" or "yes" to confirm.`);
                                if (answer) {
                                    answer = answer.toLocaleLowerCase();
                                    if (answer == "yes" || answer == "y") {
                                        updateMoneyDisplay("sliver", -player.sliver);
                                        updateMoneyDisplay("gold", -amountToGold);
                                        upgradeShape(shape);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function drawShapeEquip(shape, currentIndex, oldShape) {
        if (currentIndex == 0 && oldShape) {
            document.getElementById("Unequip").style.display = "block";
            document.getElementById("Equip").style.display = "none";
        } else {
            document.getElementById("Equip").style.display = "block";
            document.getElementById("Unequip").style.display = "none";
        }
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; margin-top: 5px; color: ${tierColor(shape)}; width: 100%;">${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${shape.desc}
        ${shape.ability ? "<br><br>" + shape.ability.desc : ""}
        </div>
        <div style="position: absolute; top: 260px; left: 10px;">
        Health: ${abbreviateNumber(shape.health)}<br>
        Speed: ${shape.speed * 1000} PX/SEC<br>
        ${shape.baseShielding ? `Energy Shield Health: ${abbreviateNumber(shape.baseShielding.health)}<br>` : ""}
        ${shape.baseDamageIncrease ? `Base Dmg Increase: ${shape.baseDamageIncrease * 100}%<br>` : ""}
        ${shape.builtInDefensePoints ? `Defense Points: ${shape.builtInDefensePoints} (${((1 - defensePointsToResistance(shape.builtInDefensePoints)) * 100).toFixed(1)}% Resistance)<br>` : ""}
        ${shape.reflector ? `Damage Reflection: ${shape.reflector * 100}%<br>` : ""}
        ${shape.ability && shape.ability.dmg ? `Ability Dmg: ${abbreviateNumber(shape.ability.dmg)}<br>` : ""}
        ${shape.ability && shape.ability.dotDamage ? `Ability DOT Dmg: ${abbreviateNumber(shape.ability.dotDamage)}<br>` : ""}
        ${shape.ability && shape.ability.shieldHp ? `Ability Shield HP: ${abbreviateNumber(shape.ability.shieldHp)}<br>` : ""}
        ${shape.dotResistance ? `DOT Resistance: ${removeDecimals((1-shape.dotResistance) * 100)}%<br>` : ""}
        </div>
        `;
        document.getElementById("Sell").innerHTML = `
        <span style="position: absolute; font-size: 30px; top: 5px; left: ${203 / 2 - 32}px;">SELL</span>
        <span style="position: absolute; font-size: 10px; top: 40px; width: 100%; text-align: center;">${abbreviateNumber(shape.sellPrice)} Silver</span>
        `;
        let weapons = player.weapons.filter(e => e.owner == shape.sid);
        let heavy = weapons.filter(e => e.type == "Heavy").length;
        let light = weapons.filter(e => e.type == "Light").length;
        if (heavy > shape.hardpoints.heavy || light > shape.hardpoints.light) {
            weapons.forEach(e => {
                e.slot = null;
                e.owner = null;
            });
            weapons = [];
        }
        for (let t = 0; t < weapons.length; t++) {
            let tmpImage = getWeaponIcon(weapons[t], true);
            tmpImage.style = `position: absolute; bottom: ${10 + (70 * (t >= 4 ? t-4 : t))}px; right: ${5 + (t >= 4 ? 60 : 0)}px; width: 60px; height: 60px;`;
            document.getElementById("WEAPONdisplay").appendChild(tmpImage);
            document.getElementById("WEAPONdisplay").innerHTML += `
            <div style="position: absolute; bottom: ${10 + (70 * (t >= 4 ? t-4 : t))}px; right: ${5 + (t >= 4 ? 60 : 0)}px; width: 60px; height: 60px;">
            ${weapons[t].level >= 13 ? `<span style="color: ${weapons[t].level == 13 ? "#0f0" : "#ffff00"};">${weapons[t].level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapons[t].level}`}
            </div>
            `;
        }
        let weaponImg = getShapeSprite(shape, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
    }
    var auSource = "./images/au_icon.png";
    var agSource = "./images/ag_icon.png";
    var lootboxes = [{
        source: "./images/basic_lootbox.png",
        rewards: [{
            type: "shape",
            index: 0
        }, {
            type: "weapon",
            index: 0
        }, {
            type: "money",
            au: true,
            amount: 2
        }, {
            type: "money",
            ag: true,
            amount: 10e3
        }, {
            type: "money",
            ag: true,
            amount: 5e3
        }, {
            type: "money",
            ag: true,
            amount: 2e3
        }, {
            type: "money",
            ag: true,
            amount: 20e3
        }, {
            type: "money",
            ag: true,
            amount: 15e3
        }, {
            type: "money",
            au: true,
            amount: 5
        }, {
            type: "shape",
            id: "12",
            rare: 2,
            index: 1
        }, {
            type: "money",
            au: true,
            id: "13",
            rare: 2,
            amount: 100
        }, {
            type: "money",
            ag: true,
            id: "16",
            rare: 2,
            amount: 1e6
        }],
        cost: 10
    }, {
        source: "./images/copper_lootbox.png",
        rewards: [{
            index: 1,
            type: "weapon",
        }, {
            index: 5,
            type: "shape",
            id: "LOL",
            rare: 10
        }, {
            type: "shape",
            index: 6,
            id: "12",
            rare: 3
        }, {
            type: "weapon",
            index: 5,
            id: "13",
            rare: 3
        }, {
            type: "money",
            au: true,
            amount: 100
        }, {
            type: "money",
            au: true,
            amount: 200
        }, {
            type: "money",
            au: true,
            amount: 250
        }, {
            type: "money",
            au: true,
            amount: 1e3,
            id: "124",
            rare: 3
        }, {
            type: "shape",
            index: 3,
            id: "1212",
            rare: 1
        }, {
            type: "shape",
            index: 4,
            id: "12222231",
            rare: 1
        }, {
            type: "money",
            ag: true,
            amount: 100e3
        }, {
            type: "money",
            ag: true,
            amount: 200e3
        }, {
            type: "money",
            ag: true,
            amount: 1e6
        }, {
            type: "weapon",
            index: 3,
            id: "12123",
            rare: 1
        }],
        cost: 100
    }, {
        source: "./images/gold_lootbox.png",
        rewards: [{
            type: "weapon",
            index: 6
        }, {
            type: "weapon",
            index: 7
        }, {
            type: "weapon",
            index: 10
        }, {
            type: "weapon",
            index: 13
        }, {
            type: "shape",
            index: 13
        }, {
            type: "weapon",
            index: 5
        }, {
            type: "money",
            ag: true,
            amount: 2e6
        }, {
            type: "money",
            ag: true,
            amount: 1e6
        }, {
            type: "money",
            ag: true,
            amount: 4e6
        }, {
            type: "money",
            ag: true,
            amount: 8e6
        }, {
            type: "money",
            ag: true,
            amount: 10e6
        }, {
            type: "money",
            au: true,
            amount: 25e2
        }, {
            type: "money",
            au: true,
            amount: 1e3
        }, {
            type: "money",
            au: true,
            amount: 2e3
        }, {
            type: "shape",
            index: 5
        }, {
            type: "shape",
            index: 8
        }, {
            type: "shape",
            index: 9
        }, {
            type: "shape",
            index: 10
        }, {
            type: "money",
            keys: true,
            amount: 5e3,
            rare: 1
        }],
        cost: 1e3
    }, {
        source: "./images/diamond_lootbox.png",
        rewards: [{
            type: "weapon",
            index: 8
        }, {
            type: "shape",
            index: 21
        }, {
            type: "shape",
            id: "1231232",
            rare: 1,
            index: 18
        }, {
            type: "shape",
            id: "1231s232",
            rare: 1,
            index: 19
        }, {
            type: "weapon",
            index: 9
        }, {
            type: "weapon",
            index: 11
        }, {
            type: "weapon",
            index: 12
        }, {
            type: "weapon",
            index: 14
        }, {
            type: "weapon",
            index: 15
        }, {
            type: "shape",
            id: "1231213123232",
            rare: 1,
            index: 19
        }, {
            type: "money",
            ag: true,
            amount: 50e6
        }, {
            type: "money",
            ag: true,
            amount: 100e6
        }, {
            type: "money",
            ag: true,
            amount: 150e6
        }, {
            type: "money",
            ag: true,
            amount: 200e6
        }, {
            type: "shape",
            index: 14
        }, {
            type: "shape",
            index: 12
        }, {
            type: "shape",
            id: "LSMDLAMSDLSAD",
            rare: 4,
            index: 15
        }, {
            type: "money",
            au: true,
            amount: 5e3
        }, {
            type: "money",
            au: true,
            amount: 10e3
        }, {
            type: "money",
            au: true,
            amount: 15e3
        }, {
            type: "money",
            au: true,
            amount: 20e3
        }],
        cost: 10e3
    }];
    function lootboxGetItem(reward) {
        if (reward.type == "shape") {
            let sid = shapeSids;
            player.shapes.push(new shape(shapeData[reward.index]));
            let hardpoints = shapeData[reward.index].hardpoints.light + shapeData[reward.index].hardpoints.heavy;
            for (let i = 0; i < hardpoints; i++) {
                if (i < shapeData[reward.index].hardpoints.light && shapeData[reward.index].hardpoints.light > 0) {
                    player.weapons.push(new weapon(weaponData[0], sid, i));
                } else {
                    player.weapons.push(new weapon(weaponData[2], sid, i));
                }
            }
        } else if (reward.type == "weapon") {
            player.weapons.push(new weapon(weaponData[reward.index], null, null));
        } else {
            updateMoneyDisplay(reward.au ? "gold" : reward.keys ? "keys" : "sliver", reward.amount)
        }
    }
    function doLootboxAnimation(rewards, reward) {
        if (document.getElementById("rewardAnimation").style.display == "block") return;
        document.getElementById("rewardAnimation").innerHTML = "";
        document.getElementById("rewardAnimation").style.display = "block";
        document.getElementById("rewardAnimation").style.top = (window.innerHeight / 2 - 100) + "px";
        let indexx = 0;
        let rewardIndex = 0;
        let INDEXREWARDS = [];
        for (let tt = 0; tt < 6; tt++) {
            for (let i = 0; i < rewards.length; i++) {
                document.getElementById("rewardAnimation").innerHTML += `
                <div id="${`nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx * 200}px; background-color: ${indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
                <div style="color: ${indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
                ${abbreviateNumber(rewards[i].amount)}
                </div>
                </div>
                `;
                INDEXREWARDS.push(rewards[i].index);
                indexx++;
            }
        }
        for (let i = 0; i < rewards.length; i++) {
            document.getElementById("rewardAnimation").innerHTML += `
            <div id="${rewards[i] == reward ? `THEREWARD${indexx}${rewards[i].type}` : `${rewards[i].index}nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx * 200}px; background-color: ${rewards[i] == reward ? "rgb(255, 215, 0, 0.8)" : indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
            <div style="color: ${rewards[i] == reward ? "#000" : indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
            ${abbreviateNumber(rewards[i].amount)}
            </div>
            </div>
            `;
            INDEXREWARDS.push(rewards[i].index);
            if (rewards[i] == reward) {
                rewardIndex = indexx;
            }
            indexx++;
        }
        for (let tt = 0; tt < 6; tt++) {
            for (let i = 0; i < rewards.length; i++) {
                document.getElementById("rewardAnimation").innerHTML += `
                <div id="${`nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx * 200}px; background-color: ${indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
                <div style="color: ${indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
                ${abbreviateNumber(rewards[i].amount)}
                </div>
                </div>
                `;
                INDEXREWARDS.push(rewards[i].index);
                indexx++;
            }
        }
        let elements = document.getElementById("rewardAnimation").getElementsByTagName("div");
        let Elements = Array.from(elements);
        for (let i = 0; i < indexx; i++) {
            if (i == rewardIndex) {
                let element = Elements.find(e => e.id.includes("THEREWARD"));
                if (element) {
                    let last6Chars = element.id.slice(-6);
                    let last5Chars = element.id.slice(-5);
                    if (last6Chars == "weapon") {
                        let index = INDEXREWARDS[i];
                        let weapon = weaponData[index];
                        let image = getWeaponIcon(weapon, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    } else if (last5Chars == "shape") {
                        let index = INDEXREWARDS[i];
                        let robot = shapeData[index];
                        let image = getShapeSprite(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }
                }
            } else {
                let element = Elements.find(e => e.id.includes(`nothign${i}`));
                if (element) {
                    let last6Chars = element.id.slice(-6);
                    let last5Chars = element.id.slice(-5);
                    if (last6Chars == "weapon") {
                        let index = INDEXREWARDS[i];
                        let weapon = weaponData[index];
                        let image = getWeaponIcon(weapon, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    } else if (last5Chars == "shape") {
                        let index = INDEXREWARDS[i];
                        let robot = shapeData[index];
                        let image = getShapeSprite(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }
                }
            }
        }
        let scrollLocation = ((rewardIndex * 200) - (window.innerWidth / 2)) + 100;
        document.getElementById("rewardAnimation").scrollLeft = 0;
        let tmpScroll = 0;
        let lastUpdate = Date.now();
        function animate() {
            let delta = Date.now() - lastUpdate;
            lastUpdate = Date.now();
            let percent = (tmpScroll / scrollLocation) * 100;
            tmpScroll += (10 - ((percent / 10) % 10)) * delta * (keysPressed[32] ? 8 : 1);
            if (percent > 99.99 && percent < 100) {
                tmpScroll = scrollLocation;
                setTimeout(() => {
                    document.getElementById("rewardAnimation").style.display = "none";
                    document.getElementById("rewardAnimation").innerHTML = "";
                }, 1000 * (keysPressed[32] ? .1 : 1));
            }
            tmpScroll = Math.min(tmpScroll, scrollLocation);
            document.getElementById("rewardAnimation").scrollLeft = tmpScroll;
            if (document.getElementById("rewardAnimation").innerHTML !== "" && tmpScroll <= scrollLocation) {
                window.requestAnimationFrame(animate);
            }
        }
        window.requestAnimationFrame(animate);
    }
    function ULMIXP(xp) {
        player.ULIMATEXP = Math.min(player.ULIMATEXP + xp, 100e3);
        if (player.ULIMATEXP == 100e3) document.getElementById("GETULMIBOX").style.cursor = "pointer";
        document.getElementById("LOL").style.width = ((player.ULIMATEXP / 100e3) * 100) + "%";
        saveGameData();
    }
    var ULMI_LOOTBOX_PRICES = [{
        type: "money",
        au: true,
        amount: 100e3
    }, {
        type: "money",
        au: true,
        amount: 500e3
    }, {
        type: "shape",
        index: 18,
    }, {
        type: "shape",
        index: 22,
    }, {
        type: "shape",
        index: 19,
    }, {
        type: "money",
        ag: true,
        amount: 1e9
    }, {
        type: "money",
        ag: true,
        amount: 5e9
    }, {
        type: "money",
        ag: true,
        amount: 10e9
    }, {
        type: "shape",
        index: 18,
    }, {
        type: "shape",
        index: 15
    }, {
        type: "money",
        au: true,
        rare: 3,
        id: "123",
        amount: 1e6
    }, {
        type: "shape",
        index: 19,
    }];
    document.getElementById("lootBoxToggle").onclick = function () {
        document.getElementById("rewardAnimation").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = `
        <div id="GETULMIBOX" style="${player.ULIMATEXP == 100e3 ? "cursor: pointer;" : ""}position: absolute; left: ${(window.innerWidth - 375) / 2 - 50}px; width: 100px; height: 100px; background-image: url('${"images/ulimate_lootbox.png"}'); background-size: 100px 100px;">
        </div>
        <div style="position: absolute; top: 90px; left: 0px; width: 100%; height: 20px; background-color: #808080;">
        <div id="LOL" style="height: 100%; transition: 2s; width: ${(player.ULIMATEXP / 100e3) * 100}%; background-color: #ffff00;">
        </div>
        </div>
        <div style="position: absolute; top: 120px; left: 20px; width: 300px; height: 300px; background-image: url('${lootboxes[0].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Basic Box
        </div>
        <div id="getBasicBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[0].cost)} Keys)
        </div>
        </div>
        <div style="position: absolute; top: 120px; left: 340px; width: 300px; height: 300px; background-image: url('${lootboxes[1].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Copper Box
        </div>
        <div id="getCopperBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[1].cost)} Keys)
        </div>
        </div>
        <div style="position: absolute; top: 440px; left: 20px; width: 300px; height: 300px; background-image: url('${lootboxes[2].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Gold Box
        </div>
        <div id="getGoldBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[2].cost)} Keys)
        </div>
        </div>
        <div style="position: absolute; top: 440px; left: 340px; width: 300px; height: 300px; background-image: url('${lootboxes[3].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Diamond Box
        </div>
        <div id="getDiamondBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[3].cost)} Keys)
        </div>
        </div>
        `;
        document.getElementById("getBasicBox").onclick = function () {
            if (player.keys - lootboxes[0].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[0].cost);
                ULMIXP(lootboxes[0].cost);
                let reward = lootboxes[0].rewards[Math.floor(lootboxes[0].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[0].rewards[Math.floor(lootboxes[0].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[0].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("getCopperBox").onclick = function () {
            if (player.keys - lootboxes[1].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[1].cost);
                ULMIXP(lootboxes[1].cost);
                let reward = lootboxes[1].rewards[Math.floor(lootboxes[1].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[1].rewards[Math.floor(lootboxes[1].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[1].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("getGoldBox").onclick = function () {
            if (player.keys - lootboxes[2].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[2].cost);
                ULMIXP(lootboxes[2].cost);
                let reward = lootboxes[2].rewards[Math.floor(lootboxes[2].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[2].rewards[Math.floor(lootboxes[2].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[2].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("getDiamondBox").onclick = function () {
            if (player.keys - lootboxes[3].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[3].cost);
                ULMIXP(lootboxes[3].cost);
                let reward = lootboxes[3].rewards[Math.floor(lootboxes[3].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[3].rewards[Math.floor(lootboxes[3].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[3].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("GETULMIBOX").onclick = function () {
            if (player.ULIMATEXP >= 100e3) {
                player.ULIMATEXP = 0;
                ULMIXP(0);
                let reward = ULMI_LOOTBOX_PRICES[Math.floor(ULMI_LOOTBOX_PRICES.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = ULMI_LOOTBOX_PRICES[Math.floor(ULMI_LOOTBOX_PRICES.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(ULMI_LOOTBOX_PRICES, reward);
            }
        }
    }
    function betterEquipShape(slot, oldShape, unequipedShapes) {
        let adjust = window.innerWidth - 375;
        let filteredRobots = [];
        for (let i = 0; i < unequipedShapes.length; i++) {
            filteredRobots.push(unequipedShapes[i]);
        }
        filteredRobots = filteredRobots.sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
        if (oldShape) filteredRobots.unshift(oldShape);
        let currentIndex = 0;
        document.getElementById("sideDisplay").innerHTML = `
        <div id="goToPre" style="display: none; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
        </div>
        <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
        </div>
        <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
        </div>
        <div id="Unequip" style="display: ${oldShape ? "block" : "none"}; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
        <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 66}px;">UNEQUIP</span>
        </div>
        <div id="Equip" style="display: ${oldShape ? "none" : "block"}; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
        <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">EQUIP</span>
        </div>
        <div id="Sell" style="cursor: pointer; color: #fff; position: absolute; left: ${adjust / 2 - 137}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
        <span style="position: absolute; font-size: 20px; top: 5px; left: ${203 / 2 - 21.5}px;">SELL</span>
        <span style="position: absolute; font-size: 10px; top: 20px; width: 100%; text-align: center;"></span>
        </div>
        `;
        drawShapeEquip(filteredRobots[currentIndex], currentIndex, oldShape);
        document.getElementById("Unequip").onclick = function () {
            if (oldShape && currentIndex == 0) {
                slotData[oldShape.slot].used = false;
                oldShape.slot = null;
                document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                updateSlots();
                saveGameData();
            }
        }
        document.getElementById("Equip").onclick = function () {
            if ((currentIndex > 0) || (!oldShape && currentIndex == 0)) {
                filteredRobots[currentIndex].slot = slot;
                slotData[slot].used = true;
                if (oldShape) {
                    oldShape.slot = null;
                }
                document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                updateSlots();
                saveGameData();
            }
        }
        document.getElementById("Sell").onclick = function () {
            let index = player.shapes.findIndex(e => e == filteredRobots[currentIndex]);
            updateMoneyDisplay("sliver", filteredRobots[currentIndex].sellPrice);
            if (currentIndex == 0) {
                slotData[slot].used = false;
            }
            let weapons = player.weapons.filter(e => player.shapes[index].sid == e.owner);
            weapons.forEach(e => {
                e.owner = null;
                e.slot = null;
            });
            let modules = player.modules.filter(e => player.shapes[index].sid == e.owner);
            modules.forEach(e => {
                e.owner = null;
                e.slot = null;
            });
            let microchipS = microships.filter(e => player.shapes[index].sid == e.owner);
            microchipS.forEach(e => {
                e.owner = null;
                e.slot = null;
            });
            player.shapes.splice(index, 1);
            document.getElementById("sideDisplay").innerHTML = mainDisplayText;
            saveGameData();
            updateSlots();
        }
        if (!filteredRobots[currentIndex + 1]) {
            document.getElementById("goToNext").style.display = "none";
        }
        document.getElementById("goToNext").onclick = function () {
            if (filteredRobots[currentIndex + 1]) {
                currentIndex++;
                drawShapeEquip(filteredRobots[currentIndex], currentIndex, oldShape);
                if (filteredRobots[currentIndex + 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredRobots[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "block";
                } else {
                    document.getElementById("goToPre").style.display = "none";
                }
            }
        }
        document.getElementById("goToPre").onclick = function () {
            if (filteredRobots[currentIndex - 1]) {
                currentIndex--;
                drawShapeEquip(filteredRobots[currentIndex], currentIndex, oldShape);
                if (filteredRobots[currentIndex - 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredRobots[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "block";
                } else {
                    document.getElementById("goToNext").style.display = "none";
                }
            }
        }
        saveGameData();
    }
    function equipShape(slot) {
        let unequipedShapes = player.shapes.filter(e => e.slot == null || e.slot == undefined);
        if (unequipedShapes.length == 0) {
            let factored = window.innerWidth - 375;
            document.getElementById("sideDisplay").innerHTML = `
            <div id="poorBuddy" style="position: absolute; top: ${window.innerHeight / 2 - 16}px; left: ${factored / 2 - 183.5}px; font-size: 24px;">
            <strong>There are no robots in inventory.</strong>
            </div>
            `;
        } else {
            document.getElementById("sideDisplay").innerHTML = "";
            let oldShape = player.shapes.find(e => e.slot == slot);
            betterEquipShape(slot, oldShape, unequipedShapes);
        }
    }
    function tierColor(obj) {
        return obj.tier == 4 ? "#fa0032" : obj.tier == 3 ? "#fcdf00" : obj.tier == 2 ? "#7702bf" : obj.tier == 1 ? "#38b0f5" : "#d3d3d3";
    }
    function updateSlots() {
        document.getElementById("shapesDisplay").innerHTML = "";
        let INDEX = slotData.findIndex(e => !e.unlocked);
        for (let i = 0; i < 8; i++) {
            let slot = slotData[i];
            if (slot.unlocked) {
                if (slot.used) {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; cursor: pointer; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    </div>
                    `;
                } else {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; cursor: pointer; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    <div style="position: absolute; top: ${(375 / 2) - 38 / 2}px; left: ${(375 / 2) - 159 / 2}px; font-size: 28px;">
                    Equip Robot
                    <div>
                    </div>
                    `;
                }
            } else {
                if (i > INDEX) {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; pointer-events: auto; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    <div style="position: absolute; top: ${(375 / 2) - 65 / 2}px; left: ${(375 / 2) - 183 / 2}px; font-size: 48px;">
                    LOCKED
                    </div>
                    </div>
                    `;
                } else {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; cursor: pointer; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    <div style="position: absolute; top: 87.5px; left: 87.5px; font-size: 28px; width: 200px; height: 200px;">
                    Unlock: ${abbreviateNumber(slot.cost)} Gold
                    </div>
                    </div>
                    `;
                }
            }
        }
        for (let i = 0; i < 8; i++) {
            let slot = slotData[i];
            if (slot.unlocked) {
                if (slot.used) {
                    let shape = player.shapes.find(e => e.slot == i);
                    let tmpImage = getShapeSprite(shape, true);
                    tmpImage.style = `position: absolute; top: 0px; left: 0px; width: 375px; height: 375px;`;
                    document.getElementById("slot" + i).innerHTML = `
                    <div style="color: ${tierColor(shape)}; position: absolute; bottom: 5px; right: 5px; font-size: 30px;">
                    <strong>${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}</strong>
                    </div>
                    `;
                    document.getElementById("slot" + i).appendChild(tmpImage);
                    let weapons = player.weapons.filter(e => e.owner == shape.sid);
                    let heavy = weapons.filter(e => e.type == "Heavy").length;
                    let light = weapons.filter(e => e.type == "Light").length;
                    if (heavy > shape.hardpoints.heavy || light > shape.hardpoints.light) {
                        weapons.forEach(e => {
                            e.slot = null;
                            e.owner = null;
                        });
                        weapons = [];
                    }
                    if (shape.hardpoints.light && weapons.find(e => e.owner == shape.sid && e.slot == 0 && e.type == "Heavy")) {
                        weapons.forEach(e => {
                            e.slot = null;
                            e.owner = null;
                        });
                        weapons = [];
                    }
                    for (let t = 0; t < Math.min(weapons.length, 8); t++) {
                        let tmpImage = getWeaponIcon(weapons[t], true);
                        tmpImage.style = `position: absolute; bottom: ${40 + (70 * (t >= 4 ? t-4 : t))}px; right: ${t >= 4 ? 65 : 5}px; width: 60px; height: 60px;`;
                        document.getElementById("slot" + i).appendChild(tmpImage);
                    }
                    document.getElementById("slot" + i).onclick = function () {
                        customizeShape(shape);
                        saveGameData();
                    }
                } else {
                    document.getElementById("slot" + i).onclick = function () {
                        equipShape(i);
                        saveGameData();
                    }
                }
            } else if (i <= INDEX) {
                document.getElementById("slot" + i).onclick = function () {
                    if (player.gold - slot.cost >= 0) {
                        updateMoneyDisplay("gold", -slot.cost);
                        slot.unlocked = true;
                        updateSlots();
                        saveGameData();
                    }
                }
            }
        }
    }
    var operationData = {
        xp: 0,
        currentIndex: 0,
        data: []
    };
    function addOperationXP(amount) {
        if (!operationData.data.length || !operationData.data.some(e => e.collected == null)) {
            generateOperation();
        }
        if ((operationData.xp + amount) >= operationData.data[operationData.currentIndex].maxxp) {
            amount -= (operationData.data[operationData.currentIndex].maxxp - operationData.xp);
            operationData.data[operationData.currentIndex].done = true;
            if (amount <= 0) {
                operationData.currentIndex++;
                if (!operationData.data[operationData.currentIndex]) {
                    operationData.currentIndex = operationData.data.length - 1;
                }
            }
            operationData.xp = 0;
            while (amount > 0) {
                operationData.currentIndex++;
                if (!operationData.data[operationData.currentIndex]) {
                    operationData.currentIndex = operationData.data.length - 1;
                    amount = 0;
                } else if (amount >= operationData.data[operationData.currentIndex].maxxp) {
                    amount -= operationData.data[operationData.currentIndex].maxxp;
                    operationData.data[operationData.currentIndex].done = true;
                } else {
                    operationData.xp += amount;
                    amount = 0;
                }
            }
        } else {
            operationData.xp += amount;
        }
    }
    var keysSource = "./images/keys_icon.png";
    function generateOperation() {
        operationData.xp = 0;
        operationData.currentIndex = 0;
        operationData.data = [];
        let operationLevels = [60, 80, 100, 120, 140, 160, 180, 200];
        let maxLevels = operationLevels[Math.floor(Math.random() * operationLevels.length)];
        for (let i = 0; i < maxLevels; i++) {
            let amount = 0;
            let rewardType = "silver";
            if (Math.random() < .5) {
                rewardType = "silver";
                if (i >= 140) {
                    amount = i * 150e3;
                } else if (i >= 100) {
                    amount = i * 80e3;
                } else if (i >= 80) {
                    amount = i * 50e3;
                } else if (i >= 40) {
                    amount = i * 20e3;
                } else if (i >= 5) {
                    amount = i * 10e3;
                } else {
                    amount = Math.max(i * 5000, 2500);
                }
            } else if (Math.random() < .5) {
                rewardType = "keys";
                if (i >= 140) {
                    amount = i * 50;
                } else if (i >= 100) {
                    amount = i * 30;
                } else if (i >= 80) {
                    amount = i * 20;
                } else if (i >= 40) {
                    amount = i * 6;
                } else if (i >= 5) {
                    amount = i * 4;
                } else {
                    amount = Math.max(i * 2, 1);
                }
            } else {
                rewardType = "gold";
                if (i >= 140) {
                    amount = i * 60;
                } else if (i >= 100) {
                    amount = i * 40;
                } else if (i >= 80) {
                    amount = i * 20;
                } else if (i >= 40) {
                    amount = i * 10;
                } else if (i >= 5) {
                    amount = i * 7;
                } else {
                    amount = Math.max(i * 5, 2);
                }
            }
            operationData.data.push({
                maxxp: 100 + (i * 50),
                done: false,
                type: rewardType,
                amount: amount
            });
        }
    }
    function displayOperation() {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="width: 100%; text-align: center; font-size: 40px;">
        Operation
        </div>
        <hr>
        <div style="position: absolute; left: ${(window.innerWidth - 375) / 2 - 25}px; top: ${window.innerHeight / 2 - 160}px;">
        Lvl ${operationData.currentIndex + 1}
        </div>
        <div style="position: absolute; left: ${(window.innerWidth - 375) / 2 - 300}px; top: ${window.innerHeight / 2 - 130}px; height: 20px; width: 600px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 0px; left: 0px; height: 100%; width: ${(operationData.xp / operationData.data[operationData.currentIndex].maxxp) * 100}%; background-color: #07faf2;">
        </div>
        <span style="position: absolute; top: 0px; left: 0px; margin-left: 5px; color: #fff;">${operationData.xp}/${operationData.data[operationData.currentIndex].maxxp}</span>
        </div>
        <div id="rewards" style="position: absolute; top: ${window.innerHeight / 2 - 100}px; overflow-x: scroll; height: 200px; width: ${window.innerWidth - 375}px; background-color: rgb(0, 0, 0, .3);">
        </div>
        `;
        for (let i = 0; i < operationData.data.length; i++) {
            let data = operationData.data[i];
            if (data) {
                let backgroundImage = data.type == "silver" ? agSource : data.type == "gold" ? auSource : keysSource;
                document.getElementById("rewards").innerHTML += `
                <div id="OPREWARD${i}" style="position: absolute; top: 0px; left: ${200 * i}px; height: 200px; width: 200px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.4)" : "rgb(255, 255, 255, 0.6)"}; background-size: 200px 200px; background-image: url('${backgroundImage}')">
                <div style="position: absolute; font-size: 24px; bottom: 5px; right: 5px; color: ${i % 2 == 0 ? "#fff" : "#000"}">
                ${abbreviateNumber(data.amount)}
                </div>
                </div>
                `;
            }
        }
        for (let i = 0; i < operationData.data.length; i++) {
            let data = operationData.data[i];
            if (data && data.done) {
                if (data.collected) {
                    document.getElementById(`OPREWARD${i}`).style.backgroundColor = "rgb(0, 255, 0, .4)";
                } else {
                    document.getElementById(`OPREWARD${i}`).style.cursor = "pointer";
                    document.getElementById(`OPREWARD${i}`).style.backgroundColor = "rgb(0, 0, 255, .4)";
                    document.getElementById(`OPREWARD${i}`).onclick = function () {
                        if (data.type == "silver") {
                            data.collected = true;
                            updateMoneyDisplay("sliver", data.amount);
                        } else if (data.type == "gold") {
                            data.collected = true;
                            updateMoneyDisplay("gold", data.amount);
                        } else {
                            data.collected = true;
                            updateMoneyDisplay("keys", data.amount);
                        }
                        document.getElementById("operationToggle").onclick();
                        let indexx = operationData.data.findIndex(e => e.collected == null && e.done);
                        document.getElementById("rewards").scrollLeft = (indexx * 200) - 50;
                    }
                }
            }
        }
    }
    document.getElementById("operationToggle").onclick = function () {
        if (!operationData.data.length || !operationData.data.some(e => e.collected == null)) {
            generateOperation();
            displayOperation();
        } else {
            displayOperation();
            let indexx = operationData.data.findIndex(e => e.collected == null && e.done);
            document.getElementById("rewards").scrollLeft = (indexx * 200) - 50;
        }
        saveGameData();
    }
    document.addEventListener("click", () => {
        saveGameData();
    });
    function saveGameData() {
        saveValue("hasSaved", 1);
        saveValue("shapeSids", shapeSids);
        let shapes = [];
        for (let i = 0; i < player.shapes.length; i++) {
            let shape = player.shapes[i];
            shapes.push({
                name: shape.name,
                sid: shape.sid,
                level: shape.level,
                slot: shape.slot
            });
        }
        let weapons = [];
        for (let i = 0; i < player.weapons.length; i++) {
            let weapon = player.weapons[i];
            weapons.push({
                name: weapon.name,
                owner: weapon.owner,
                slot: weapon.slot,
                level: weapon.level
            });
        }
        let modules = [];
        for (let i = 0; i < player.modules.length; i++) {
            let MODLUE = player.modules[i];
            modules.push({
                name: MODLUE.name,
                owner: MODLUE.owner,
                slot: MODLUE.slot,
                level: MODLUE.level
            });
        }
        let chips = [];
        for (let i = 0; i < microships.length; i++) {
            let MODLUE = microships[i];
            chips.push({
                name: MODLUE.name,
                owner: MODLUE.owner,
                slot: MODLUE.slot
            });
        }
        saveValue("slotData", JSON.stringify(slotData));
        saveValue("chips", JSON.stringify(chips));
        saveValue("shapes", JSON.stringify(shapes));
        saveValue("weapons", JSON.stringify(weapons));
        saveValue("modules", JSON.stringify(modules));
        saveValue("ULIMATEXP", player.ULIMATEXP);
        saveValue("league", player.league);
        saveValue("keys", player.keys);
        saveValue("sliver", player.sliver);
        saveValue("gold", player.gold);
        saveValue("tasks", JSON.stringify(tasks));
        saveValue("workshopPoints", player.workshopPoints);
        saveValue("operationData", JSON.stringify(operationData));
        saveValue("workshopQueue", JSON.stringify(workshopQueue));
    }
    setTimeout(() => {
        if (getValue("hasSaved")) {
            player.shapes = [];
            player.weapons = [];
            player.modules = [];
            let ShapeData = JSON.parse(getValue("shapes"));
            let WeaponData = JSON.parse(getValue("weapons"));
            let ModuleData = JSON.parse(getValue("modules"));
            let chipData = JSON.parse(getValue("chips"));
            for (let i = 0; i < ShapeData.length; i++) {
                let data = ShapeData[i];
                if (data) {
                    try {
                        let sid = shapeSids;
                        let Shape = shapeData.find(e => data.name == e.name);
                        let newShape = new shape(Shape, data.slot);
                        newShape.slot = data.slot;
                        if (data.slot) {
                            slotData[data.slot].unlocked = true;
                            slotData[data.slot].used = true;
                        }
                        newShape.sid = data.sid;
                        if (newShape.sid == undefined || newShape.sid == null) {
                            newShape.sid = sid;
                        }
                        for (let t = 0; t < data.level - 1; t++) {
                            upgradeShape(newShape, true);
                        }
                        player.shapes.push(newShape);
                    } catch (e) {
                    }
                }
            }
            for (let i = 0; i < WeaponData.length; i++) {
                let data = WeaponData[i];
                if (data) {
                    let Weapon = weaponData.find(e => data.name == e.name);
                    let newWeapon = new weapon(Weapon, data.owner, data.slot);
                    let shapeSid = player.shapes.find(e => e.sid == data.owner);
                    if (!shapeSid) {
                        newWeapon.owner = null;
                        newWeapon.slot = null;
                    }
                    for (let t = 0; t < data.level - 1; t++) {
                        upgradeWeapon(newWeapon, null, null, true);
                    }
                    player.weapons.push(newWeapon);
                }
            }
            for (let i = 0; i < ModuleData.length; i++) {
                let data = ModuleData[i];
                if (data) {
                    let Module = moduleData.find(e => data.name == e.name);
                    let newModule = new module(Module, data.owner, data.slot);
                    let shapeSid = player.shapes.find(e => e.sid == data.owner);
                    if (!shapeSid) {
                        newModule.owner = null;
                        newModule.slot = null;
                    }
                    for (let t = 0; t < data.level - 1; t++) {
                        upgradeModule(newModule, null, null, true);
                    }
                    player.modules.push(newModule);
                }
            }
            if (getValue("workshopPoints")) {
                player.workshopPoints = parseInt(getValue("workshopPoints"));
            } else {
                player.workshopPoints = 0;
            }
            if (chipData) {
                for (let i = 0; i < chipData.length; i++) {
                    let data = chipData[i];
                    if (data) {
                        let Module = microShipData.find(e => data.name == e.name);
                        let newModule = new microship(Module, data.owner, data.slot);
                        let shapeSid = player.shapes.find(e => e.sid == data.owner);
                        if (!shapeSid) {
                            newModule.owner = null;
                            newModule.slot = null;
                        }
                        microships.push(newModule);
                    }
                }
            }
            let slotdata = JSON.parse(getValue("slotData"));
            if (slotdata) {
                slotData = [...slotdata];
            }
            if (getValue("ULIMATEXP")) {
                player.ULIMATEXP = parseInt(getValue("ULIMATEXP"));
            } else {
                player.ULIMATEXP = 0;
            }
            if (getValue("league")) {
                player.league = parseInt(getValue("league"));
            } else {
                player.league = 0;
            }
            if (getValue("workshopQueue")) {
                workshopQueue = JSON.parse(getValue("workshopQueue"));
            }
            if (getValue("tasks")) {
                tasks = JSON.parse(getValue("tasks"));
            }
            generateTasks();
            if (getValue("operationData")) {
                operationData = JSON.parse(getValue("operationData"));
                let hasKeys = operationData.data.find(e => e.type == "keys");
                if (!hasKeys) {
                    generateOperation();
                    addOperationXP(10e3);
                }
            }
            player.keys = parseInt(getValue("keys"));
            player.sliver = parseInt(getValue("sliver"));
            player.gold = parseInt(getValue("gold"));
            updateMoneyDisplay();
            if (getValue("shapeSids") && getValue("shapeSids") != "NaN") {
                shapeSids = parseInt(getValue("shapeSids"));
            } else {
                saveGameData();
            }
            setTimeout(() => {
                updateSlots();
                setInterval(() => {
                    updateProductionDisplay();
                }, 500);
            }, 100)
        } else {
            updateSlots();
        }
        resize();
    }, 250);
    var offset = {
        x: 0,
        y: 0
    }
    function renderBackground() {
        let cam = { x: 0, y: 0 };
        if (players[0].robotIndex == -1) {
            cam = {
                x: mapInfo.x / 2,
                y: mapInfo.y / 2
            };
        } else {
            cam = {
                x: players[0].robots[players[0].robotIndex].x,
                y: players[0].robots[players[0].robotIndex].y
            };
        }
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000";
        ctx.globalAlpha = 0.06;
        ctx.beginPath();
        for (var x = -cam.x; x < maxScreen.x; x += maxScreen.y / 18) {
            if (x > 0) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, maxScreen.y);
            }
        }
        for (var y = -cam.y; y < maxScreen.y; y += maxScreen.y / 18) {
            if (x > 0) {
                ctx.moveTo(0, y);
                ctx.lineTo(maxScreen.x, y);
            }
        }
        ctx.stroke();
        ctx.fillStyle = "#000";
        ctx.globalAlpha = 0.18;
        if (offset.x <= 0) {
            ctx.fillRect(0, 0, -offset.x, maxScreen.y);
        } if (mapInfo.x - offset.x <= maxScreen.x) {
            var tmpY = Math.max(0, -offset.y);
            ctx.fillRect(mapInfo.x - offset.x, tmpY, maxScreen.x - (mapInfo.x - offset.x), maxScreen.y - tmpY);
        } if (offset.y <= 0) {
            ctx.fillRect(-offset.x, 0, maxScreen.x + offset.x, -offset.y);
        } if (mapInfo.y - offset.y <= maxScreen.y) {
            var tmpX = Math.max(0, -offset.x);
            var tmpMin = 0;
            if (mapInfo.x - offset.x <= maxScreen.x)
                tmpMin = maxScreen.x - (mapInfo.x - offset.x);
            ctx.fillRect(tmpX, mapInfo.y - offset.y,
                (maxScreen.x - tmpX) - tmpMin, maxScreen.y - (mapInfo.y - offset.y));
        }
    }
    var mouseX = 0;
    var mouseY = 0;
    canvas.addEventListener('mousemove', gameInput, false);
    function gameInput(e) {
        e.preventDefault();
        e.stopPropagation();
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    function renderPlayer() {
        let player = players[0];
        let weaponNames = {};
        if (player.robotIndex >= 0) {
            let robot = player.robots[player.robotIndex];
            robot.dir = Math.atan2(mouseY - (innerHeight / 2), mouseX - (innerWidth / 2));
            if (robot.health > 0) {
                ctx.save();
                ctx.globalAlpha = 1;
                ctx.translate(robot.x - offset.x, robot.y - offset.y);
                for (let i = 0; i < robot.weapons.length; i++) {
                    let weapon = robot.weapons[i];
                    if (!weaponNames[weapon.name]) {
                        weaponNames[weapon.name] = weapon.range;
                    }
                }
                let weaponArray = [];
                for (let weaponName in weaponNames) {
                    if (weaponName != "Cinder") {
                        weaponArray.push({ name: weaponName, range: weaponNames[weaponName] });
                    }
                }
                weaponArray.sort((a, b) => b.range - a.range);
                for (let i = 0; i < weaponArray.length; i++) {
                    let weapon = weaponArray[i];
                    let range = weapon.range;
                    let endPointX = range * Math.cos(robot.dir);
                    let endPointY = range * Math.sin(robot.dir);
                    ctx.save();
                    ctx.globalAlpha = 0.2;
                    ctx.lineWidth = 10;
                    ctx.strokeStyle = "#f00";
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(endPointX, endPointY);
                    ctx.stroke();
                    ctx.restore();
                }
                let haveAOEWeapon = robot.weapons.find(e => e.name == "Cinder");
                if (haveAOEWeapon) {
                    renderCircle(0, 0, haveAOEWeapon.range, ctx, false, true, "rgb(255, 0, 0, 0.3)", "rgb(255, 0, 0, 0.6)");
                }
                ctx.globalAlpha = robot.invis ? 0.025 : robot.effects.find(e => e.name == "phase shift") ? 0.4 : 1;
                if (robot.name.includes("Circle")) {
                    renderCircle(0, 0, robot.scale, ctx, false, false, Date.now() - robot.damagedTime <= 20 ? "#fff" : robot.color, robot.isFREEZE ? "#fff" : "#000");
                } else if (robot.name.includes("Pentagon")) {
                    ctx.rotate(robot.dir + Math.PI / 2);
                    ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                    ctx.lineWidth = 12;
                    ctx.fillStyle = robot.color;
                    renderStar(ctx, 2.5, robot.scale, robot.scale);
                    ctx.stroke();
                    ctx.fill();
                } else if (robot.name.includes("Hexagon")) {
                    ctx.rotate(robot.dir + Math.PI / 2);
                    ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                    ctx.lineWidth = 12;
                    ctx.fillStyle = robot.color;
                    renderStar(ctx, 3, robot.scale, robot.scale);
                    ctx.stroke();
                    ctx.fill();
                } else if (robot.name.includes("Heptagon")) {
                    ctx.rotate(robot.dir + Math.PI / 2);
                    ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                    ctx.lineWidth = 12;
                    ctx.fillStyle = robot.color;
                    renderStar(ctx, 3.5, robot.scale, robot.scale);
                    ctx.stroke();
                    ctx.fill();
                }
                ctx.restore();
            }
        }
    }
    var enemies = [];
    var projectiles = [];
    Math.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    function getRandomOffset(offset) {
        let random = Math.randInt(-offset, offset);
        return ((random / 180) * Math.PI);
    }
    function fireWeapon(weapon, shape, isAlly) {
        if ((shape.isMe ? true : shape.target)) {
            let hardpoints = shape.hardpoints.light + shape.hardpoints.heavy;
            let dir = 0;
            let x = 0;
            let y = 0;
            let scale = 0;
            scale = 15;
            if (weapon.name == "Blaze" || weapon.name == "Ember") {
                scale = 30;
            }else if(weapon.name == "Devastator" || weapon.name == "Scatter" || weapon.name == "Evora" || weapon.name == "Veyron") {
                scale = 25;
            }
            let hScale = scale / 2;
            if (shape.target && !shape.isMe) {
                shape.dir = Math.atan2(shape.target.y - shape.y, shape.target.x - shape.x);
            }
            if (hardpoints == 1) {
                x = shape.x + Math.cos(shape.dir) * (shape.scale - hScale);
                y = shape.y + Math.sin(shape.dir) * (shape.scale - hScale);
            } else if (hardpoints == 2) {
                if (weapon.slot == 0) {
                    x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - hScale);
                } else {
                    x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - hScale);
                }
            } else if (hardpoints == 3) {
                if (weapon.slot == 0) {
                    x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - hScale);
                } else if (weapon.slot == 1) {
                    x = shape.x + Math.cos(shape.dir) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir) * (shape.scale - hScale);
                } else {
                    x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - hScale);
                }
            } else {
                if (weapon.slot == 0 || weapon.slot == 4) {
                    x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - 7.5);
                } else if (weapon.slot == 1 || weapon.slot == 5) {
                    x = shape.x + Math.cos(shape.dir + 0.39) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir + 0.39) * (shape.scale - 7.5);
                } else if (weapon.slot == 2 || weapon.slot == 6) {
                    x = shape.x + Math.cos(shape.dir - 0.39) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir - 0.39) * (shape.scale - 7.5);
                } else {
                    x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - 7.5);
                }
            }
            if (!shape.isMe) {
                if (shape.target) {
                    dir = Math.atan2(shape.target.y - y, shape.target.x - x);
                }
            } else {
                let offsetX = x - offset.x;
                let offsetY = y - offset.y;
                let mosX = (mouseX / window.innerWidth) * maxScreen.x;
                let mosY = (mouseY / window.innerHeight) * maxScreen.y;
                dir = Math.atan2(mosY - offsetY, mosX - offsetX);
            }
            if (weapon.name == "Punisher") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    projType: weapon.projType,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Rime" || weapon.name == "Glacier") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    projType: weapon.projType,
                    vely: 0,
                    scale: scale,
                    speed: 0.12,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/white_bullet.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    aoeRange: weapon.aoeRange,
                    owner: shape,
                    freezeEffect: {
                        name: "freezing",
                        last: weapon.name == "Glacier" ? 75e2 : 5e3,
                        power: weapon.name == "Glacier" ? 3 : 1
                    },
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level,
                        cold: true
                    }
                });
            } else if (weapon.name == "Landslide" || weapon.name == "Avalanche") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    projType: weapon.projType,
                    vely: 0,
                    scale: scale,
                    speed: 0.15,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/rocket.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    aoeRange: weapon.aoeRange,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Slumber" || weapon.name == "Delay") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.4,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    slowEffect: {
                        name: "slowdown",
                        last: 2e3,
                        power: 0.016
                    },
                    color: "./images/bullets/purple_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Shocker" || weapon.name == "Reaper") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.4,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    owner: shape,
                    bypassReflector: weapon.name == "Reaper" ? true : false,
                    defensePointsBypass: weapon.name == "Reaper" ? .5 : 0,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Blaze" || weapon.name == "Ember") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    speed: 0.1,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + getRandomOffset(10 * (Math.random() < .5 ? -1 : 1)),
                    isAlly: isAlly,
                    dotEffect: {
                        name: "dot",
                        last: 15e3,
                        dmg: weapon.dotDamage,
                        owner: shape
                    },
                    color: `rgb(255, ${(Math.random() < .5 ? 255 : 0)}, 0, ${Math.randInt(6, 10) / 10})`,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Destroyer") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + getRandomOffset(5),
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    range: weapon.range,
                    dir: dir - getRandomOffset(5),
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Evora" || weapon.name == "Veyron") {
                let spread = 4;
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + getRandomOffset(spread),
                    isAlly: isAlly,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    color: "./images/bullets/sonic_blast.png",
                    owner: shape,
                    grayDamageAmount: 1,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + (-1 * getRandomOffset(spread)),
                    isAlly: isAlly,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    color: "./images/bullets/sonic_blast.png",
                    owner: shape,
                    grayDamageAmount: 1,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Devastator" || weapon.name == "Scatter") {
                for (let i = 0; i < 7; i++) {
                    projectiles.push({
                        projType: weapon.projType,
                        x: x,
                        y: y,
                        oldX: x,
                        oldY: y,
                        velx: 0,
                        vely: 0,
                        scale: scale,
                        speed: 0.25,
                        dmg: weapon.dmg,
                        range: weapon.range,
                        dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(8)),
                        isAlly: isAlly,
                        avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                        color: "./images/bullets/sonic_blast.png",
                        owner: shape,
                        knockback: .15,
                        weaponOwner: {
                            name: weapon.name,
                            level: weapon.level
                        }
                    });
                }
            } else if (weapon.name == "Thunder" || weapon.name == "Storm") {
                for (let i = 0; i < (weapon.name == "Storm" ? 15 : 25); i++) {
                    projectiles.push({
                        projType: weapon.projType,
                        x: x,
                        y: y,
                        oldX: x,
                        oldY: y,
                        velx: 0,
                        vely: 0,
                        scale: scale,
                        speed: 0.25,
                        dmg: weapon.dmg,
                        range: weapon.range,
                        dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(7)),
                        isAlly: isAlly,
                        avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                        color: "./images/bullets/bullet.png",
                        owner: shape,
                        weaponOwner: {
                            name: weapon.name,
                            level: weapon.level
                        }
                    });
                }
            } else if (weapon.name == "Viper" || weapon.name == "Sting") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(2)),
                    isAlly: isAlly,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    dotEffect: {
                        name: "dot",
                        last: 4e3,
                        dmg: weapon.dotDamage,
                        owner: shape
                    },
                    color: "./images/bullets/dot_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                let spread = (weapon.firedTime / 12000) * 12;
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(spread)),
                    isAlly: isAlly,
                    color: "./images/bullets/energy_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            }
        }
    }
    function getLeaguePoints(rewardsMulti) {
        let points = player.league;
        let reward = 0;
        let E = rewardsMulti == 3 ? false : true;
        if (points >= 7e3) {
            reward = E ? -100 : 15;
        } else if (points >= 6e3) {
            reward = E ? -75 : 45;
        } else if (points >= 5e3) {
            reward = E ? -50 : 75;
        } else if (points >= 4e3) {
            reward = E ? -35 : 105;
        } else if (points >= 3e3) {
            reward = E ? -25 : 150;
        } else if (points >= 2e3) {
            reward = E ? -15 : 225;
        } else if (points >= 1e3) {
            reward = E ? -10 : 255;
        } else if (points < 1e3) {
            reward = E ? -5 : 300;
        }
        player.league += reward;
        if (player.league < 0) {
            player.league = 0;
        }
    }
    function endGame(Player, rewardsMulti) {
        enemies = [];
        projectiles = [];
        players = [];
        buildings = [];
        shieldEffects = [];
        let allElements = document.getElementsByTagName("*");
        let elementsWithTracer = [];
        for (let i = 0; i < allElements.length; i++) {
            let element = allElements[i];
            if (element.id) {
                if (element.id.indexOf("radar") !== -1) {
                    elementsWithTracer.push(element);
                }
            }
        }
        elementsWithTracer.forEach(e => {
            e.remove();
        })
        KILLLOGS = [];
        beaconPoints.enemy = 0;
        beaconPoints.ally = 0;
        text = [];
        bombeffect = [];
        gameTimePlayed = 0;
        try {
            let LEGUASDAPLPPINT = 0;
            let oldYAY = rewardsMulti;
            if (rewardsMulti == "YAY WIN") {
                rewardsMulti = 3;
            }
            if (player.gameMode == 3 || player.gameMode == 2 || oldYAY == "YAY WIN") {
                let lastAMOUNT = player.league;
                getLeaguePoints(rewardsMulti);
                LEGUASDAPLPPINT = player.league - lastAMOUNT;
            }
            player.gameMode = -1;
            document.getElementById("lootBoxToggle").style.display = "block";
            document.getElementById("operationToggle").style.display = "block";
            document.getElementById("chooseSlot").style.display = "none";
            document.getElementById("shapesDisplay").style.display = "block";
            document.getElementById("sideDisplay").style.display = "block";
            document.getElementById("shopToggle").style.display = "block";
            document.getElementById("workshopToggle").style.display = "block";
            document.getElementById("microshipsToggle").style.display = "block";
            document.getElementById("settingsToggle").style.display = "block";
            document.getElementById("offersToggles").style.display = "block";
            document.getElementById("moneyDisplay").style.display = "block";
            document.getElementById("goToBattle").style.display = "block";
            document.getElementById("gameModesDisplay").style.display = "none";
            let adjust = window.innerWidth - 375;
            if (Player.dmg == null) Player.dmg = 0;
            if (Player.kills == null) Player.kills = 0;
            addTaskXP("kills", Player.kills);
            addTaskXP("dmg", Math.abs(Player.dmg));
            let KEY = 0;
            let SLIVER = 0;
            let GOLD = 0;
            SLIVER += (10e3 * Player.kills);
            SLIVER += (1e2 * (Math.abs(Player.dmg) / 750));
            SLIVER += Math.max(Math.round(Player.dmg / 500e3), 0) * 150e3;
            SLIVER += Math.max(Math.round(Player.dmg / 1e6), 0) * 500e3;
            SLIVER = parseInt(removeDecimals(SLIVER));
            for (let i = 0; i < Player.kills; i++) {
                if (GOLD < 25) {
                    GOLD += (rewardsMulti == 2 || rewardsMulti == .5) ? 1.25 : 0.75;
                } else {
                    GOLD += (rewardsMulti == 2 || rewardsMulti == .5) ? 1.75 : 0.25;
                }
            }
            GOLD = Math.floor(GOLD);
            GOLD += Math.floor(Math.abs(Player.dmg) / ((rewardsMulti == 2 || rewardsMulti == .5) ? 75000 : 100000));
            for (let i = 0; i < Player.kills; i++) {
                if (KEY >= 50) {
                    KEY += (rewardsMulti == 2 || rewardsMulti == .5) ? 0.1 : 0.075;
                } else if (KEY >= 25) {
                    KEY += (rewardsMulti == 2 || rewardsMulti == .5) ? 0.25 : 0.1;
                } else {
                    KEY += (rewardsMulti == 2 || rewardsMulti == .5) ? .5 : 0.25;
                }
            }
            KEY = Math.floor(KEY);
            KEY = Math.min(KEY, 1000);
            let OXP = 0;
            for (let i = 0; i < Player.kills; i++) {
                OXP += (rewardsMulti == 2 || rewardsMulti == .5) ? 4 : 2;
            }
            OXP = Math.floor(OXP);
            if (Player.rewardBonus) {
                SLIVER += Player.rewardBonus.silver;
                GOLD += Player.rewardBonus.gold;
                KEY += Player.rewardBonus.keys;
                OXP += Player.rewardBonus.OXP;
            }
            if (Player.beacons) {
                SLIVER += Player.beacons * 25e2;
                GOLD += Player.beacons;
                KEY += Player.beacons * 2;
                OXP += Player.beacons * 4;
            }
            SLIVER *= (rewardsMulti || 1);
            GOLD *= (rewardsMulti || 1);
            KEY *= (rewardsMulti || 1);
            OXP *= (rewardsMulti || 1);
            if (oldYAY != "YAY WIN" && rewardsMulti == 2) {
                SLIVER += 15e3;
                GOLD += 20;
                KEY += 10;
                OXP += 20;
            }
            SLIVER = Math.floor(SLIVER);
            GOLD = Math.floor(GOLD);
            KEY = Math.floor(KEY);
            OXP = Math.floor(OXP);
            let WSP = Player.rewardBonus ? (Player.rewardBonus.WSP || 0) : 0;
            if (Player.rewardBonus && Player.rewardBonus.WSP != null && Player.rewardBonus.WSP !== undefined && WSP > 0 && WSP !== undefined && WSP != null) {
                updateMoneyDisplay("workshopPoints", WSP);
            } else {
                WSP = 0;
            }
            if(!isNaN(SLIVER)) updateMoneyDisplay("sliver", SLIVER);
            if(!isNaN(GOLD)) updateMoneyDisplay("gold", GOLD);
            if(!isNaN(KEY)) updateMoneyDisplay("keys", KEY);
            if(!isNaN(OXP)) addOperationXP(OXP);
            document.getElementById("sideDisplay").innerHTML = `
            <div style="width: 100%; text-align: center; font-size: 40px;">
            ${rewardsMulti == .5 ? "Defeat" : rewardsMulti == 3 ? "Victory" : "Battle Overview"}
            </div>
            <hr>
            <div style="width: 100%;">
            <div style="position: absolute; top: 130px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Dmg Dealt</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(Player.dmg))}
            </span>
            </div>
            <div style="position: absolute; top: 190px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Kills</span>
            <span style="position: absolute; right: 5px;">
            ${Math.abs(Player.kills)}
            </span>
            </div>
            <div style="position: absolute; top: 250px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Sliver Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(SLIVER))}
            </span>
            </div>
            <div style="position: absolute; top: 310px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Gold Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(GOLD))}
            </span>
            </div>
            <div style="position: absolute; top: 370px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Key Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(KEY))}
            </span>
            </div>
            <div style="position: absolute; top: 430px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">OXP Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(OXP))}
            </span>
            </div>
            </div>
            <div style="position: absolute; top: 490px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">League Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(LEGUASDAPLPPINT)}
            </span>
            </div>
            </div>
            <div style="position: absolute; top: 550px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">WSP Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(WSP || 0)}
            </span>
            </div>
            </div>
            `;
        } catch (e) { console.log(e); }
    }
    var deltaTimer = 0;
    var shieldEffects = [];
    function addGrayDamage(shape, amount, graydmg) {
        let grayDamageMulti = 1;
        if (shape.modules && shape.modules.length) {
            shape.modules.forEach(e => {
                if (e.grayDamageDecrease) {
                    grayDamageMulti -= e.grayDamageDecrease;
                }
            });
        }
        let grayDmg = (graydmg || .4);
        if(shape.effects && shape.effects.find(e => e.name == "stampede")) {
            grayDmg /= 8;
        }else if(shape.name == "Orange Circle") {
            graydmg /= 1.6;
        }
        shape.grayDamage += Math.abs(amount * grayDmg * grayDamageMulti);
    }
    canvas.addEventListener("wheel", function(event) {
        let Player = players[0];
        if (Player.robotIndex >= 0) {
            let robot = Player.robots[Player.robotIndex];
            if(event.deltaY > 0) {
                maxScreen.x *= 0.95;
                maxScreen.y *= 0.95;
            }else {
                maxScreen.x /= 0.95;
                maxScreen.y /= 0.95;
            }
            maxScreen = {
                x: Math.min(Math.max(maxScreen.x, 1980), 1980 * robot.fieldOfViewMulti * (robot.ABILITYSPEEDMULTI == 3 ? 1.4 : 1)),
                y: Math.min(Math.max(maxScreen.y, 1080), 1080 * robot.fieldOfViewMulti * (robot.ABILITYSPEEDMULTI == 3 ? 1.4 : 1))
            }
            resize();
        }
    });
    function updatePlayer(delta) {
        let Player = players[0];
        if (Player.robotIndex >= 0) {
            let robot = Player.robots[Player.robotIndex];
            if (robot.dotDamage == null) robot.dotDamage = 0;
            if (robot.ABILITYSPEEDMULTI == null) robot.ABILITYSPEEDMULTI = 1;
            robot.builtInDefensePoints = robot.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE;
            document.getElementById("weaponThing").style.display = "block";
            document.getElementById("healthBar").style.display = "block";
            document.getElementById("weaponThing").innerHTML = "";
            robot.lastX = robot.x;
            robot.lastY = robot.y;
            if(robot.dotConverter && robot.dotConverter.length) {
                let amount = 0;
                for(let i = 0; i < robot.dotConverter.length; i++) {
                    let info = robot.dotConverter[i];
                    amount += info.amount;
                }
                let duration = robot.dotConverter[0].duration;
                robot.effects.push({
                    name: "dot",
                    dmg: Math.abs(amount) / duration,
                    turned: true,
                    lastTime: duration * 1000
                });
            }
            robot.dotConverter = [];
            let amountOfLastStand = robot.modules.filter(e => e.name == "Last Stand");
            if (amountOfLastStand.length && !robot.lastStandUpdate) {
                robot.lastStandDuration = (amountOfLastStand.sort((a, b) => b.lastingTime - a.lastingTime)[0]).lastingTime;
                robot.lastStandUpdate = true;
                robot.lastStandThreshold = 0;
                for (let i = 0; i < amountOfLastStand.length; i++) {
                    robot.lastStandThreshold += amountOfLastStand[i].immunePercent;
                }
                robot.lastStandThreshold = Math.min(robot.lastStandThreshold, 0.99);
            } else if (!robot.lastStandUpdate) {
                robot.lastStandDuration = 0;
                robot.lastStandUpdate = true;
                robot.lastStandThreshold = 0;
            }
            document.getElementById("healthBar").innerHTML = `
            <div style="position: absolute; top: 0px; right: 0px; width: ${100 * (robot.grayDamage / robot.maxhealth)}%; height: 100%; background-color: #808080;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; width: ${100 * (robot.health / robot.maxhealth)}%; height: 100%; background-color: #45ff45;">
            </div>
            <div style="position: absolute; top: 0px; right: ${100 - (100 * (robot.health / robot.maxhealth))}%; width: ${robot.effects.find(e => e.name == "phase shift") ? 0 : (100 * (Math.min(robot.dotDamage, robot.health) / robot.maxhealth))}%; height: 100%; background-color: #ffff00;">
            </div>
            <div id="lastStand" style="display: true; position: absolute; top: 0px; left: 0px; width: ${100 * ((robot.lastStandThreshold * robot.maxhealth) / robot.maxhealth)}%; height: 100%; background-color: rgb(0, 0, 0, .2);">
            </div>
            <div style="position: absolute; top: 0px; left: 5px; font-size: 30px; color: ${player.league <= 300 && player.gameMode == 2 ? "#00f" : "#000"};">
            ${removeDecimals(robot.health)}
            </div>
            `;
            document.getElementById("shields").innerHTML = "";
            if (robot.shieldRegen == null) robot.shieldRegen = 1;
            let shieldRegenMulti = 1;
            robot.modules.forEach(e => {
                if (e.shieldRegen) {
                    shieldRegenMulti -= e.shieldRegen;
                }
            })
            for (let i = 0; i < robot.shields.length; i++) {
                let shield = robot.shields[i];
                if(i > 5) break;
                document.getElementById("shields").innerHTML += `
                <div style="display: block; position: absolute; top: ${30 * i}px; left: 10px; width: 300px; height: 25px; background-color: rgb(0, 0, 0, 0.2); border: solid; border-color: #fff; border-width: 1px;">
                <div style="position: absolute; top: 0px; left: 0px; width: ${shield.type == "purple" ? 100 : (100 * (shield.health / shield.maxhealth))}%; height: 100%; background-color: ${shield.type == "yellow" ? "#ffff00" : shield.type == "purple" ? "#800080" : "#02ccaa"};">
                </div>
                <div style="display: ${shield.type == "purple" ? "none" : "block"}; position: absolute; top: 0px; left: 5px; font-size: 17px;">
                ${removeDecimals(shield.health)}
                </div>
                </div>
                `;
            }
            let hasPhaseShift = robot.effects.find(e => e.name == "phase shift");
            for (let i = 0; i < robot.shields.length; i++) {
                let shield = robot.shields[i];
                if(shield) {
                    if (shield.regen) {
                        if (shield.lastRegen == null) shield.lastRegen = false;
                        if (Date.now() - shield.lastRegen >= (5e3 * robot.shieldRegen * shieldRegenMulti)) {
                            shield.lastRegen = Date.now();
                            shield.health += shield.maxhealth * shield.regen;
                        }
                        if (shield.health > shield.maxhealth) {
                            shield.health = shield.maxhealth;
                        }
                    }
                    if (shield.health < 0) {
                        shield.health = 0;
                    }
                    if (shield.health > 0 || shield.type == "purple") {
                        let touchBullets = projectiles.filter(e => !e.isAlly && e.projType != shield.type && checkIfHit(e, robot, "shield"));
                        for (let t = 0; t < touchBullets.length; t++) {
                            shieldEffects.push({
                                location: robot,
                                scale: robot.scale + 20,
                                dir: Math.atan2(touchBullets[t].y - robot.y, touchBullets[t].x - robot.x),
                                type: shield.type
                            });
                            changeHealth(shield, {
                                amount: (touchBullets[t].dmg * (shield.type == "purple" ? 1 : -1)),
                            }, false, touchBullets[t].owner);
                            touchBullets[t].dmg = 0;
                            touchBullets[t].kill = true;
                        }
                    }
                    if(shield.health <= 0 && !shield.regen) {
                        if(shield.type == "yellow" && robot.ability.name == "Paladin") {
                            bombeffect.push({
                                location: robot,
                                scale: 0,
                                maxScale: 1200,
                                color: "blue"
                            });
                            for (let t = 1; t < players.length; t++) {
                                let player = players[t].robots[players[t].robotIndex];
                                if (player && players[t].isAlly != players[0].isAlly) {
                                    if (Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                                        player.weapons.forEach(e => {
                                            if(e.name != "Atomizer" && e.name != "Nucleon") {
                                                e.ammo = 0;
                                            }
                                        });
                                        if(player.ability) {
                                            let hasPS = player.effects.find(e => e.name == "phase shift");
                                            if(hasPS) hasPS.lastTime = 0;
                                            player.abilityLast = 0;
                                            player.abilityReload = player.ability.reload;
                                            if(player.ability.charges) {
                                                player.ability.charges = 0;
                                            }
                                            if(player.ability.name == "Paladin") {
                                                player.shields = [];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        robot.shields.splice(i, 1);
                    }
                }
            }
            robot.shieldRegen = 1;
            robot.isFREEZE = false;
            let effectNames = {};
            robot.dotDamage = 0;
            if (robot.usedLastStand) {
                document.getElementById("lastStand").style.display = "none";
            }
            let LMAODJASOUD = false;
            robot.invis = false;
            let slowdownMulti = 1;
            let freezingAMount = 0;
            if (robot.name != "Pink Circle") {
                robot.turnDmgIntoDOT = false;
            }
            for (let tt = 0; tt < robot.effects.length; tt++) {
                let effect = robot.effects[tt];
                if (effect) {
                    if(!effect.turned && effect.neg && effect.LMAOOOOOKAOSDKASOIDKASDIOAS == null && robot.negEffectReduction) {
                        effect.LMAOOOOOKAOSDKASOIDKASDIOAS = true;
                        effect.lastTime *= robot.negEffectReduction;
                    }
                    if (effect.oldLastTime == null) effect.oldLastTime = effect.lastTime;
                    effect.lastTime -= delta;
                    if(effect.lastTime > 0) {
                        if (hasPhaseShift ? (effect.name == "phase shift" || effect.name == "last stand" || effect.name == "stealth dash") : true) {
                            if (effectNames[effect.name] == null) {
                                effectNames[effect.name] = {
                                    amount: 1,
                                    duration: effect.lastTime,
                                    orginal: effect.oldLastTime
                                };
                            } else {
                                effectNames[effect.name].amount++;
                                effectNames[effect.name].duration = effect.lastTime;
                            }
                            if (effectNames[effect.name].orginal < effect.lastTime) {
                                effectNames[effect.name].orginal = effect.lastTime;
                            }
                        }
                        if (effect.name == "cold pulse") {
                            if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            robot.isFREEZE = true;
                            effect.dmgOverTime -= delta;
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                            if (effect.dmgOverTime <= 0) {
                                changeHealth(robot, {
                                    amount: -50
                                });
                                effect.dmgOverTime = 500;
                            }
                        } else if (effect.name == "dot") {
                            if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            effect.dmgOverTime -= delta;
                            robot.dotDamage += (Math.floor(effect.lastTime / 1000) * effect.dmg) * (robot.dotResistance ? robot.dotResistance : 1);
                            if (effect.dmgOverTime <= 0) {
                                if (effect.turned && !robot.LASTSTANDISON) {
                                    addGrayDamage(robot, effect.dmg);
                                    addText(robot.x, robot.y, effect.dmg, 1000, "#f00");
                                }
                                let didHealth = robot.health > 0;
                                changeHealth(robot, {
                                    amount: -effect.dmg
                                }, false, null, true);
                                effect.dmgOverTime = 1000;
                                if(robot.health <= 0 && didHealth) {
                                    addLogger("unknown bot", {
                                        name: "DOT EFFECT",
                                        level: 1
                                    }, "player");
                                }
                            }
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                        } else if (effect.name == "last stand") {
                            if (effect.LOLOL == null) effect.LOLOL = 0;
                            effect.LOLOL += delta;
                            if (effect.LOLOL >= 100) {
                                effect.LOLOL = 0;
                                if (document.getElementById("lastStand").style.display == "none") {
                                    document.getElementById("lastStand").style.display = "block";
                                } else {
                                    document.getElementById("lastStand").style.display = "none";
                                }
                            }
                            LMAODJASOUD = true;
                            robot.LASTSTANDISON = true;
                        } else if (effect.name == "stealth dash") {
                            if (effect.lastTime >= effect.oldLastTime - 350) {
                                let moveSpeed = 0.02 * robot.reloadMoveMulti * slowdownMulti;
                                robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                                robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                            }
                            robot.invis = true;
                        } else if (effect.name == "slowdown") {
                            slowdownMulti -= effect.power;
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                        } else if (effect.name == "phase shift") {
                            slowdownMulti += 1.5;
                        } else if (effect.name == "dash") {
                            let moveSpeed = 0.015 * robot.reloadMoveMulti * slowdownMulti;
                            robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                            robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                        } else if (effect.name == "freezing") {
                            freezingAMount++;
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                        } else if (effect.name == "stampede") {
                            if(effect.lastTime > 4e3) slowdownMulti += 1.5;
                            robot.turnDmgIntoDOT = true;
                            if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            effect.dmgOverTime -= delta;
                            if (effect.dmgOverTime <= 0) {
                                effect.dmgOverTime = 150;
                                let abilityRange = 400;
                                bombeffect.push({
                                    location: robot,
                                    scale: 0,
                                    maxScale: abilityRange,
                                    color: "stamp"
                                });
                                let near = [];
                                if (player.gameMode == 2 || player.gameMode == 3) {
                                    for (let t = 1; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[0].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= abilityRange + player.scale) {
                                                near.push(player);
                                            }
                                        }
                                    }
                                } else {
                                    near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= abilityRange + e.scale);
                                }
                                for (let i = 0; i < near.length; i++) {
                                    let enemy = near[i];
                                    if (enemy) {
                                        let angle = Math.atan2(enemy.y - robot.y, enemy.x - robot.x);
                                        enemy.velx += Math.cos(angle) * 1.5;
                                        enemy.vely += Math.sin(angle) * 1.5;
                                        let hasHealth = enemy.health > 0;
                                        changeHealth(enemy, {
                                            amount: -robot.ability.dmg
                                        }, true);
                                        if(hasHealth && enemy.health <= 0) {
                                            addLogger("player", {
                                                name: "Stampede",
                                                level: robot.level
                                            }, enemy.PLAYERNAME || "unknown bot")
                                        }
                                    }
                                }
                            }
                        } else if (effect.name == "defense points") {
                            robot.builtInDefensePoints += effect.amount;
                        } else if(effect.name == "overload") {
                            slowdownMulti += 1;
                        }
                    }
                    if (effect.lastTime <= 0) {
                        if (effect.name == "overload") {
                            let near = [];
                            let abilityRange = 500;
                            bombeffect.push({
                                location: robot,
                                doFaster: true,
                                scale: 0,
                                maxScale: abilityRange
                            });
                            if (player.gameMode == 2 || player.gameMode == 3) {
                                for (let t = 1; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[0].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= abilityRange + player.scale) {
                                            near.push(player);
                                        }
                                    }
                                }
                            } else {
                                near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= abilityRange + e.scale);
                            }
                            for (let i = 0; i < near.length; i++) {
                                let enemy = near[i];
                                if (enemy) {
                                    let angle = Math.atan2(enemy.y - robot.y, enemy.x - robot.x);
                                    enemy.velx += Math.cos(angle) * 5;
                                    enemy.vely += Math.sin(angle) * 5;
                                    let hasHealth = enemy.health > 0;
                                    changeHealth(enemy, {
                                        amount: -robot.ability.dmg
                                    }, true);
                                    if (hasHealth && enemy.health <= 0) {
                                        addLogger("player", {
                                            name: "Overload",
                                            level: robot.level
                                        }, enemy.PLAYERNAME || "unknown bot")
                                    }
                                }
                            }
                        }
                        robot.effects.splice(tt, 1);
                    }
                }
            }
            if(freezingAMount >= freezinnnnnng) {
                robot.effects.push({
                    name: "cold pulse",
                    neg: true,
                    lastTime: 1e3
                });
                for (let tt = 0; tt < robot.effects.length; tt++) {
                    let effect = robot.effects[tt];
                    if (effect) {
                        if (effect.name == "freezing") {
                            effect.lastTime = 0;
                        }
                    }
                }
            }
            slowdownMulti = Math.max(slowdownMulti, 0.01);
            if (!LMAODJASOUD) {
                robot.LASTSTANDISON = false;
            }
            if (!robot.usedLastStand && robot.health <= (robot.lastStandThreshold * robot.maxhealth)) {
                robot.health = (robot.lastStandThreshold * robot.maxhealth);
                robot.effects.push({
                    name: "last stand",
                    lastTime: robot.lastStandDuration
                });
                robot.usedLastStand = true;
            }
            let INDEXXXXXX = 0;
            document.getElementById("LMAOLMAOLMAOLMAO").innerHTML = "";
            if (robot.reloadMoveMulti == null) robot.reloadMoveMulti = 1;
            let hasStampede = robot.effects.find(e => e.name == "stampede");
            if (!robot.isFREEZE && (keysPressed[87] || keysPressed[65] || keysPressed[83] || keysPressed[68])) {
                let dx = (keysPressed[68]) - (keysPressed[65]);
                let dy = (keysPressed[83]) - (keysPressed[87]);
                let moveDir = Math.atan2(dy, dx);
                robot.targetDir = moveDir;
                if (hasStampede && hasStampede.lastTime > 4e3) {
                    if(robot.movedir == null) {
                        robot.movedir = moveDir;
                    }
                    if (robot.movedir != moveDir) {
                        robot.movedir %= (Math.PI * 2);
                        let netAngle = (robot.movedir - moveDir + (Math.PI * 2)) % (Math.PI * 2);
                        let amnt = Math.min(Math.abs(netAngle - (Math.PI * 2)), netAngle, 0.0018 * delta);
                        let sign = (netAngle - Math.PI) >= 0 ? 1 : -1;
                        if (!isNaN(netAngle)) {
                            robot.movedir += sign * amnt + (Math.PI * 2);
                        }
                        moveDir = robot.movedir;
                    }
                }
                let moveSpeed = robot.speed * robot.reloadMoveMulti;
                moveSpeed *= robot.ABILITYSPEEDMULTI;
                moveSpeed *= slowdownMulti;
                robot.velx += Math.cos(moveDir) * (moveSpeed * delta);
                robot.vely += Math.sin(moveDir) * (moveSpeed * delta);
            }
            if (robot.x + (robot.velx * delta) >= robot.scale && robot.x + (robot.velx * delta) <= mapInfo.x - robot.scale) {
                robot.x += (robot.velx * delta);
            } else {
                if (robot.x + (robot.velx * delta) >= mapInfo.x - robot.scale) {
                    robot.x = mapInfo.x - robot.scale;
                } else {
                    robot.x = robot.scale;
                }
            }
            if (robot.y + (robot.vely * delta) >= robot.scale && robot.y + (robot.vely * delta) <= mapInfo.y - robot.scale) {
                robot.y += (robot.vely * delta);
            } else {
                if (robot.y + (robot.vely * delta) >= mapInfo.y - robot.scale) {
                    robot.y = mapInfo.y - robot.scale;
                } else {
                    robot.y = robot.scale;
                }
            }
            if (robot.velx) robot.velx *= Math.pow(0.993, delta);
            if (robot.vely) robot.vely *= Math.pow(0.993, delta);
            for (let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                let rgb = "";
                if (weapon.firedTime == null) weapon.firedTime = 0;
                if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                    let colorValue = ((weapon.firedTime / 12000) * 100);
                    rgb = `rgb(${Math.min(255, Math.floor((colorValue) * 255 / 100))}, ${Math.min(235, Math.floor((100 - colorValue) * 235 / 100))}, 0)`;
                }
                document.getElementById("weaponThing").innerHTML += `
                <div style="position: absolute; bottom: ${80*(i >= 4 ? i-4 : i)}px; left: ${i >= 4 ? 320 : 0}px; width: 200px; height: 75px; margin-top: 20px;">
                <div id="weaponICON${i}" style="position: absolute; z-index: 2; top: 0px; left: 0px; background-color: #404040; border-radius: 100%; width: 75px; height: 75px;">
                </div>
                <div style="position: absolute; top: 23px; left: 60px; background-color: #404040; border-radius: 12px; width: 250px; height: 30px;">
                <div style="width: ${weapon.name == "Atomizer" || weapon.name == "Nucleon" ? ((weapon.firedTime / 12000) * 100) : ((weapon.ammo / weapon.maxammo) * 100)}%; height: 100%; border-radius: 12px; background-color: ${weapon.name == "Atomizer" || weapon.name == "Nucleon" ? rgb : "#fff"};">
                </div>
                </div>
                </div>
                `;
            }
            let shownCinderEffects = false;
            for (let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                let weaponImg = getWeaponIcon(weapon, true);
                weaponImg.style = "width: 100%; height: 100%";
                document.getElementById(`weaponICON${i}`).appendChild(weaponImg);
                if (weapon.continuousReload) {
                    if (weapon.lastFire == null) weapon.lastFire = 0;
                    if (weapon.ammo > 0 && !robot.isFREEZE && keysPressed[32] && Date.now() - weapon.lastFire >= weapon.fireRate) {
                        weapon.lastFire = Date.now();
                        if (weapon.name == "Cinder") {
                            if (player.gameMode == 2 || player.gameMode == 3) {
                                for (let t = 1; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[0].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                            let hasHealth = player.health > 0;
                                            changeHealth(player, {
                                                amount: -weapon.dmg
                                            }, true, robot);
                                            if(player.health <= 0 && hasHealth) {
                                                addLogger("player", {
                                                    name: "Cinder",
                                                    level: weapon.level
                                                }, player.PLAYERNAME || "unknown bot");
                                            }
                                        }
                                    }
                                }
                            } else {
                                enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range + e.scale).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x)).forEach(enemy => {
                                    let hasHealth = enemy.health > 0;
                                    changeHealth(enemy, {
                                        amount: -weapon.dmg
                                    }, true, robot);
                                    if (enemy.health <= 0 && hasHealth) {
                                        addLogger("player", {
                                            name: "Cinder",
                                            level: weapon.level
                                        }, "unknown bot");
                                    }
                                });
                            }
                            if (!shownCinderEffects) {
                                shownCinderEffects = true;
                                bombeffect.push({
                                    location: robot,
                                    doFaster: true,
                                    scale: 0,
                                    maxScale: weapon.range
                                });
                            }
                        } else {
                            fireWeapon(weapon, robot, true);
                        }
                        weapon.ammo--;
                    }
                    if (weapon.ammo < weapon.maxammo) {
                        if (keysPressed[82] && !robot.isFREEZE) {
                            robot.reloadMoveMulti = .5;
                        } else {
                            robot.reloadMoveMulti = 1;
                        }
                        if (weapon.lastChange == null) weapon.lastChange = 0;
                        if (Date.now() - weapon.lastChange >= (weapon.reload * robot.reloadMoveMulti)) {
                            weapon.lastChange = Date.now();
                            if (weapon.name == "Avalanche" || weapon.name == "Rime" || weapon.name == "Glacier") {
                                weapon.ammo = Math.min(weapon.ammo + 4, weapon.maxammo);
                            } else {
                                weapon.ammo++;
                            }
                        }
                    }
                } else {
                    if (weapon.canFire == null) weapon.canFire = true;
                    if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                        if (keysPressed[32]) {
                            weapon.firedTime = Math.min(weapon.firedTime + delta, 12000);
                        } else {
                            weapon.firedTime = Math.max((weapon.firedTime - (delta * 3)), 0);
                        }
                    }else if(weapon.name == "Evora" || weapon.name == "Veyron") {
                        if (keysPressed[32]) {
                            weapon.firedTime = Math.min(weapon.firedTime + delta, 1e3);
                        } else {
                            weapon.firedTime = Math.max((weapon.firedTime - delta), 0);
                        }
                    }
                    if (weapon.canFire) {
                        if (weapon.lastFire == null) weapon.lastFire = 0;
                        robot.reloadMoveMulti = 1;
                        let fireRateMulti = (weapon.name == "Evora" || weapon.name == "Veyron" ? (weapon.firedTime/1000 == 1 ? 0.4 : 1) : (weapon.firedTime / 12000));
                        if (keysPressed[32] && !robot.isFREEZE && Date.now() - weapon.lastFire >= weapon.fireRate * (weapon.name == "Atomizer" || weapon.name == "Nucleon" ? 1 + fireRateMulti : weapon.name == "Evora" || weapon.name == "Veyron" ? fireRateMulti : 1)) {
                            weapon.lastFire = Date.now();
                            if (weapon.name == "Hawk" || weapon.name == "Eagle") {
                                let nearestEnemies = [];
                                if (player.gameMode == 2 || player.gameMode == 3) {
                                    for (let t = 1; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[0].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                                nearestEnemies.push(player);
                                            }
                                        }
                                    }
                                    nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                } else {
                                    nearestEnemies = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range + e.scale).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                }
                                for (let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    if (enemy) {
                                        changeHealth(enemy, {
                                            amount: -weapon.dmg
                                        }, true, robot);
                                    }
                                }
                                if (nearestEnemies.length) {
                                    weapon.ammo--;
                                }
                            } else {
                                fireWeapon(weapon, robot, true);
                                weapon.ammo--;
                            }
                        }
                        if (weapon.ammo <= 0) {
                            weapon.canFire = false;
                        }
                    } else {
                        if (keysPressed[82] && !robot.isFREEZE) {
                            robot.reloadMoveMulti = .5;
                        } else {
                            robot.reloadMoveMulti = 1;
                        }
                        weapon.ammo += ((weapon.maxammo / weapon.reload) * delta) * (keysPressed[82] ? 2 : 1);
                        if (weapon.ammo >= weapon.maxammo) {
                            weapon.ammo = weapon.maxammo;
                            weapon.canFire = true;
                        }
                    }
                }
            }
            if (robot.ABILITYSPEEDMULTI != 3) {
                for (let i = 0; i < ACTUALBUILDINGSTOTOUCH.length; i++) {
                    let obj = ACTUALBUILDINGSTOTOUCH[i];
                    if (obj) {
                        if (obj.name == "beacon") {
                            if (!robot.isFREEZE && Math.hypot(obj.y - robot.y, obj.x - robot.x) <= 400) {
                                obj.isHAVEON = true;
                                if (obj.ENEMYPOINTS) {
                                    obj.ENEMYPOINTS -= delta;
                                    if (obj.ENEMYPOINTS < 0) {
                                        obj.ENEMYPOINTS = 0;
                                    }
                                } else {
                                    obj.LASTALLYPOINTS = obj.ALLYPOINTS;
                                    obj.ALLYPOINTS += delta;
                                    if (obj.ALLYPOINTS > 5e3) {
                                        if (obj.LASTALLYPOINTS < 5e3) {
                                            if (players[0].beacons == null) players[0].beacons = 0;
                                            players[0].beacons++;
                                            addTaskXP("beacon", 1);
                                        }
                                        obj.ALLYPOINTS = 5e3;
                                    }
                                }
                            }
                        }
                        if (obj.name == "wall rect") {
                            if (circleSquareCollision(robot, obj, true)) {
                                let Px = Math.max(obj.x, Math.min(robot.x, obj.x + obj.width));
                                let Py = Math.max(obj.y, Math.min(robot.y, obj.y + obj.height));
                                robot.velx *= 0.75;
                                robot.vely *= 0.75;
                                robot.velx += Math.cos(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                                robot.vely += Math.sin(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                            }
                        }
                    }
                }
            }
            let MATH1HA___ = 320 * (Math.min(4, robot.weapons.length)/4);
            robot.ABILITYSPEEDMULTI = 1;
            if(robot.ability) {
                document.getElementById("useAbility").style.left = robot.weapons.length > 4 ? robot.effects.length ? `165px` : "20px" : "350px";
                document.getElementById("useAbility").style.bottom = robot.weapons.length > 4 ? `${MATH1HA___+20}px` : "40px";
                document.getElementById("abilityCharges").style.left = robot.weapons.length > 4 ? robot.effects.length ? `165px` : "20px" : "480px";
                document.getElementById("abilityCharges").style.bottom = robot.weapons.length > 4 ? `${MATH1HA___+150}px` : "40px";
            }
            for (let i in effectNames) {
                let string = (effectNames[i].duration / 1000).toString();
                let DOTINDEXXX = string.indexOf('.');
                if (DOTINDEXXX == -1) {
                    string += ".0";
                } else string = string.slice(0, DOTINDEXXX + 2);
                if(effectNames[i].duration >= 1e100) {
                    string = "";
                }
                document.getElementById("LMAOLMAOLMAOLMAO").innerHTML += `
                <div style="position: absolute; left: 20px; width: 125px; height: 43px; background-color: rgb(0, 0, 0, 0.35); bottom: ${(60 * INDEXXXXXX) + (MATH1HA___ + 15)}px; border-radius: 4px;">
                <div style="position: absolute; top: 0px; left: 5px; height: 40px; width: 40px; background-size: 40px 40px; background-image: url('${i == "repair amp" ? "./images/modules/repair_amplifier.png" : i == "overload" ? "./images/weapons/cinder.png" : i == "defense points" ? "./images/full_action.png" : i == "stampede" ? "./images/stampede.png" : i == "freezing" ? "./images/weapons/rime.png" : i == "dot" ? "./images/weapons/viper.png" : i == "last stand" ? "./images/modules/last_stand.png" : i == "phase shift" ? "./images/phase_shift.png" : i == "dash" ? "./images/dash.png" : i == "stealth dash" ? "./images/stealth.png" : i == "slowdown" ? "./images/slowdown_effect.png" : "./images/cold_pulse.png"}');">
                </div>
                <div style="position: absolute; top: 9px; right: 5px; color: #fff;">
                ${effectNames[i].amount}
                </div>
                <div style="position: absolute; top: 9px; left: 50px; color: #fff;">
                ${string}
                </div>
                <div style="position: absolute; bottom: 0px; left: 0px; height: 3px; width: ${(effectNames[i].duration / effectNames[i].orginal) * 100}%; background-color: #fff;">
                </div>
                </div>
                `;
                INDEXXXXXX++;
            }
            if (robot.AUTOMICROREPAIRHAL == null) robot.AUTOMICROREPAIRHAL = 0;
            if (robot.AUTOMICROREPAIRHA > 0) {
                robot.AUTOMICROREPAIRHAL -= delta;
                if (robot.AUTOMICROREPAIRHAL <= 0) {
                    robot.AUTOMICROREPAIRHAL = 1e3;
                    changeHealth(robot, {
                        amount: robot.AUTOMICROREPAIRHA * robot.maxhealth
                    }, true);
                }
            }
            let repairampps = robot.effects.filter(e => e.name == "repair amp").length;
            if(repairampps > 0) {
                let percent = 0.0006 * repairampps;
                if(robot.LASTREPAIRAMPHEALHA == null) robot.LASTREPAIRAMPHEALHA = 0;
                robot.LASTREPAIRAMPHEALHA -= delta;
                if(robot.LASTREPAIRAMPHEALHA <= 0) {
                    robot.LASTREPAIRAMPHEALHA = 1e3;
                    changeHealth(robot, {amount: percent * robot.maxhealth}, true);
                }
            }
            for (let i = 0; i < robot.modules.length; i++) {
                let module = robot.modules[i];
                if (module.selfFixRepair && !robot.isFREEZE) {
                    if (module.lastRepair == null) module.lastRepair = 1000;
                    module.lastRepair -= delta;
                    if (module.lastRepair <= 0) {
                        module.lastRepair = 1000;
                        changeHealth(robot, {
                            amount: module.selfFixRepair
                        }, true);
                    }
                }
            }
            if (robot.oldScale == null) robot.oldScale = robot.scale;
            if (robot.oldFOV == null) robot.oldFOV = robot.fieldOfViewMulti;
            if(robot.isFREEZE && hasStampede) {
                let effect = hasStampede;
                if(robot.abilityLast != null && robot.abilityLast != 0) {
                    robot.abilityLast = effect.lastTime;
                }
            }
            let hasOVERLOAD = robot.effects.find(e => e.name == "overload");
            if(robot.isFREEZE && hasOVERLOAD) {
                if(robot.abilityLast != null && robot.abilityLast != 0) {
                    robot.abilityLast = hasOVERLOAD.lastTime;
                }
            }
            if (robot.ability && (robot.ability.name == "Phase Shift" ? true : !robot.isFREEZE)) {
                document.getElementById("useAbility").style.display = "block";
                document.getElementById("abilityCharges").innerHTML = "";
                if (robot.ability.charges >= robot.ability.maxcharge) {
                    robot.ability.charges = robot.ability.maxcharge;
                    robot.abilityReload = robot.ability.reload;
                }
                if (robot.ability.maxcharge) {
                    let amountHave = robot.ability.charges;
                    let amountDont = robot.ability.maxcharge - robot.ability.charges;
                    for (let i = 0; i < amountHave; i++) {
                        document.getElementById("abilityCharges").innerHTML += `
                        <div style="position: absolute; bottom: ${20 * i}px; width: 15px; height: 15px; border-radius: 100%; background-color: rgb(255, 255, 255, 0.8);">
                        </div>
                        `;
                    }
                    for (let i = 0; i < amountDont; i++) {
                        document.getElementById("abilityCharges").innerHTML += `
                        <div style="position: absolute; bottom: ${20 * (i + amountHave)}px; width: 15px; height: 15px; border-radius: 100%; background-color: rgb(0, 0, 0, 0.2);">
                        </div>
                        `;
                    }
                }
                if (keysPressed[69]) {
                    if (robot.abilityLast == null) robot.abilityLast = 0;
                    if (robot.abilityReload == null) robot.abilityReload = 0;
                    if (robot.ability.name == "Paladin" || robot.ability.name == "Overload" || robot.ability.name == "Stampede" || robot.ability.name == "Stealth" || robot.ability.name == "Retribution" || robot.ability.name == "Ultimate Defense" || robot.ability.name == "Self Heal" || robot.ability.name == "Dragon Flight" || robot.ability.name == "Shield Regeneration" || robot.ability.name == "Full Action") {
                        if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                            robot.abilityLast = robot.ability.lastingTime;
                            if (robot.ability.name == "Dragon Flight") {
                                maxScreen = {
                                    x: 1980 * robot.fieldOfViewMulti * 1.4,
                                    y: 1080 * robot.fieldOfViewMulti * 1.4
                                };
                                resize();
                            }else if(robot.ability.name == "Stampede") {
                                robot.effects.push({
                                    name: "stampede",
                                    lastTime: robot.ability.lastingTime
                                });
                            }else if(robot.ability.name == "Overload") {
                                robot.effects.push({
                                    name: "overload",
                                    lastTime: robot.ability.lastingTime
                                });
                            }else if(robot.ability.name == "Paladin") {
                                let increase = 1;
                                let fortifier = robot.modules.filter(e => e.shieldHealth);
                                fortifier.forEach(e => {
                                    increase += e.shieldHealth;
                                });
                                robot.shields.push({
                                    type: "yellow",
                                    maxhealth:robot.ability.shieldHp * increase,
                                    health: robot.ability.shieldHp * increase
                                });
                            }
                        }
                    } else if (robot.ability.name == "Cold Pulse") {
                        if (robot.abilityReload == 0) {
                            bombeffect.push({
                                x: robot.x,
                                y: robot.y,
                                scale: 0,
                                maxScale: 1200,
                                color: "white"
                            });
                            let near = [];
                            if (player.gameMode == 2 || player.gameMode == 3) {
                                for (let t = 1; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[0].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                                            near.push(player);
                                        }
                                    }
                                }
                            } else {
                                near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= 1200 + e.scale);
                            }
                            for (let i = 0; i < near.length; i++) {
                                let enemy = near[i];
                                if (enemy) {
                                    if (enemy.effects == null) enemy.effects = [];
                                    changeHealth(enemy, {
                                        amount: -robot.ability.dmg
                                    }, true);
                                    enemy.effects.push({
                                        name: "cold pulse",
                                        owner: robot,
                                        neg: true,
                                        lastTime: 3e3
                                    });
                                }
                            }
                            if (near.length) {
                                changeHealth(robot, {
                                    amount: (5000 * near.length)
                                }, true)
                            }
                            robot.abilityReload = robot.ability.reload;
                        }
                    } else if (robot.ability.maxcharge) {
                        if (robot.abilityLast == 0 && robot.ability.charges > 0) {
                            robot.ability.charges--;
                            robot.abilityLast = robot.ability.lastingTime;
                            if (robot.ability.name == "Stealth Dash") {
                                robot.effects.push({
                                    name: "stealth dash",
                                    lastTime: 2500,
                                    dir: robot.dir
                                });
                            } else if (robot.ability.name == "Phase Shift") {
                                robot.effects.push({
                                    name: "phase shift",
                                    lastTime: 2e3
                                });
                            } else if (robot.ability.name == "Dash") {
                                robot.effects.push({
                                    name: "dash",
                                    lastTime: 350,
                                    dir: robot.dir
                                });
                            } else if (robot.ability.name == "Fortify") {
                                let increase = 1;
                                let fortifier = robot.modules.filter(e => e.shieldHealth);
                                fortifier.forEach(e => {
                                    increase += e.shieldHealth;
                                });
                                robot.shields.push({
                                    type: robot.level >= 13 ? "yellow" : "energy",
                                    maxhealth: robot.ability.shieldHp * increase,
                                    health: robot.ability.shieldHp * increase
                                });
                            }
                        }
                    }
                }
                if (robot.abilityReload == null && robot.abilityLast == null) {
                    document.getElementById("cooldownText").innerHTML = "";
                }
                if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                    robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    document.getElementById("cooldownText").innerHTML = "";
                } else if (robot.abilityReload > 0) {
                    document.getElementById("useAbility").style.backgroundImage = "";
                } else {
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                }
                if (robot.abilityLast && robot.abilityLast > 0) {
                    robot.abilityLast -= delta;
                    if (robot.ability.maxcharge) {
                        document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    }
                    document.getElementById("cooldownText").innerHTML = `${(robot.abilityLast / 1000).toFixed(1)}`;
                    document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    if (robot.ability.name == "Self Heal") {
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            let amount = robot.maxhealth * (robot.name == "Pink Circle" ? 0.05 : .025);
                            changeHealth(robot,{
                                amount: Math.floor(amount)
                            }, true);
                            deltaTimer = 5e2;
                        }
                    } else if (robot.ability.name == "Stealth") {
                        robot.invis = true;
                        robot.ABILITYSPEEDMULTI = 2;
                    } else if (robot.ability.name == "Retribution") {
                        if (robot.shields.length == 0) {
                            robot.shields.push({
                                type: "purple",
                                health: 0
                            });
                        }
                        if (robot.abilityLast <= 4000) {
                            deltaTimer -= delta;
                            if (deltaTimer <= 0) {
                                deltaTimer = 100;
                                let dmgMulti = 1 + (Math.floor(robot.shields[0].health / 2500) * 0.075);
                                dmgMulti = Math.min(dmgMulti, 20);
                                for (let i = 0; i < 4; i++) {
                                    if (i == 0) {
                                        x = robot.x + Math.cos(robot.dir + 1.57) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir + 1.57) * (robot.scale - 7.5);
                                    } else if (i == 1) {
                                        x = robot.x + Math.cos(robot.dir + 0.39) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir + 0.39) * (robot.scale - 7.5);
                                    } else if (i == 2) {
                                        x = robot.x + Math.cos(robot.dir - 0.39) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir - 0.39) * (robot.scale - 7.5);
                                    } else {
                                        x = robot.x + Math.cos(robot.dir - 1.57) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir - 1.57) * (robot.scale - 7.5);
                                    }
                                    let offsetX = x - offset.x;
                                    let offsetY = y - offset.y;
                                    let mosX = (mouseX / window.innerWidth) * maxScreen.x;
                                    let mosY = (mouseY / window.innerHeight) * maxScreen.y;
                                    dir = Math.atan2(mosY - offsetY, mosX - offsetX);
                                    projectiles.push({
                                        x: x,
                                        y: y,
                                        oldX: x,
                                        oldY: y,
                                        velx: 0,
                                        vely: 0,
                                        scale: 25,
                                        speed: 0.15,
                                        projType: "energy",
                                        dmg: robot.ability.dmg * dmgMulti,
                                        range: 800,
                                        dir: dir,
                                        color: "./images/bullets/energy_bullet.png",
                                        isAlly: true,
                                        owner: robot,
                                        weaponOwner: {
                                            name: "Retribution",
                                            level: robot.level
                                        }
                                    });
                                }
                            }
                        }
                    } else if (robot.ability.name == "Ultimate Defense") {
                        robot.turnDmgIntoDOT = true;
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            let amount = robot.maxhealth * 0.025;
                            changeHealth(robot, {
                                amount: Math.floor(amount)
                            }, true);
                            deltaTimer = 100;
                        }
                    } else if (robot.ability.name == "Dragon Flight") {
                        robot.builtInDefensePoints = 900;
                        robot.ABILITYSPEEDMULTI = 3;
                        robot.scale = Math.min(robot.scale + (0.08 * delta), robot.oldScale * 2);
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            deltaTimer = 50;
                            for (let asdasd = 0; asdasd < 2; asdasd++) projectiles.push({
                                x: robot.x,
                                y: robot.y,
                                oldX: robot.x,
                                oldY: robot.y,
                                velx: 0,
                                vely: 0,
                                scale: 25,
                                speed: 0.15,
                                avoidBuildings: true,
                                dmg: robot.ability.dmg,
                                range: 1200,
                                projType: "normal",
                                dir: robot.dir + getRandomOffset(5) * (Math.random() < .5 ? -1 : 1),
                                color: "#ff0000",
                                isAlly: true,
                                dotEffect: {
                                    name: "dot",
                                    last: 5e3,
                                    dmg: robot.ability.dotDamage,
                                    owner: robot
                                },
                                owner: robot,
                                weaponOwner: {
                                    name: "Dragon Breathe",
                                    level: robot.level
                                }
                            });
                        }
                    } else if (robot.ability.name == "Full Action") {
                        robot.builtInDefensePoints = robot.name == "Teal Circle" ? 200 : 60;
                    } else if (robot.ability.name == "Shield Regeneration") {
                        robot.shieldRegen = .1;
                    }
                    if (robot.abilityLast <= 0) {
                        robot.abilityLast = 0;
                        if (!robot.ability.maxcharge) robot.abilityReload = robot.ability.reload;
                        if (robot.ability.name == "Retribution" || robot.ability.name == "Paladin") {
                            if(robot.ability.name == "Paladin") {
                                if(robot.shields[0] && robot.shields[0].health > 0) {
                                    let increase = Math.min(robot.shields[0].health / 25, 100e3);
                                    robot.maxhealth += increase;
                                    changeHealth(robot, {
                                        amount: increase * 5
                                    }, true);
                                }
                            }
                            robot.shields = [];
                        }
                        if (robot.ability.name == "Dragon Flight") {
                            maxScreen = {
                                x: 1980 * robot.fieldOfViewMulti,
                                y: 1080 * robot.fieldOfViewMulti
                            };
                            resize();
                        }
                    }
                } else if (robot.ability.charges) {
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    document.getElementById("cooldownText").innerHTML = "";
                }
                if (robot.abilityReload && robot.abilityReload > 0) {
                    robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                    if (!robot.ability.maxcharge) {
                        document.getElementById("cooldownText").innerHTML = `${(robot.abilityReload / 1000).toFixed(1)}`;
                        document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    } else if (robot.ability.maxcharge && !robot.ability.charges) {
                        document.getElementById("useAbility").style.backgroundImage = null;
                        document.getElementById("cooldownText").innerHTML = `${(robot.abilityReload / 1000).toFixed(1)}`;
                        document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    }
                    robot.abilityReload -= delta;
                    if (robot.abilityReload <= 0) {
                        robot.abilityReload = 0;
                        if (robot.ability.maxcharge) {
                            robot.ability.charges++;
                            robot.abilityReload = robot.ability.reload;
                        }
                    }
                }
            } else {
                document.getElementById("useAbility").style.display = "none";
            }
            let touchBullets = projectiles.filter(e => !e.isAlly && checkIfHit(e, robot));
            let hasColdPulse = robot.effects.find(e => e.name == "cold pulse");
            for (let t = 0; t < touchBullets.length; t++) {
                let bullet = touchBullets[t];
                if (bullet.dmg > 0) {
                    if(bullet.knockback) {
                        robot.velx += Math.cos(bullet.dir) * bullet.knockback;
                        robot.vely += Math.sin(bullet.dir) * bullet.knockback;
                    }
                    if (bullet.dotEffect) {
                        robot.effects.push({
                            neg: true,
                            name: bullet.dotEffect.name,
                            dmg: bullet.dotEffect.dmg,
                            lastTime: bullet.dotEffect.last,
                            owner: bullet.owner
                        });
                    }
                    if (bullet.slowEffect) {
                        robot.effects.unshift({
                            name: bullet.slowEffect.name,
                            power: bullet.slowEffect.power,
                            lastTime: bullet.slowEffect.last
                        });
                    }
                    if (bullet.freezeEffect && !hasColdPulse) {
                        for(let asdasd = 0; asdasd < bullet.freezeEffect.power; asdasd++) {
                            robot.effects.push({
                                name: bullet.freezeEffect.name,
                                neg: true,
                                lastTime: bullet.freezeEffect.last
                            });
                        }
                    }
                }
                let hadHealth = robot.health > 0;
                if (!bullet.aoeRange) changeHealth(robot, {
                    amount: -bullet.dmg,
                    graydmg: bullet.grayDamageAmount,
                    defensePointsBypass: bullet.defensePointsBypass,
                    bypassReflector: bullet.bypassReflector
                }, false, bullet.owner);
                if (bullet.aoeRange != null) {
                    for (let asdasd = 0; asdasd < players.length; asdasd++) {
                        let ROBOBT = players[asdasd].robots[players[asdasd].robotIndex];
                        if (ROBOBT && players[asdasd].isAlly && Math.hypot(touchBullets[t].y - ROBOBT.y, touchBullets[t].x - ROBOBT.x) <= touchBullets[t].aoeRange + ROBOBT.scale) {
                            changeHealth(robot, {
                                amount: -touchBullets[t].dmg
                            }, false, touchBullets[t].owner);
                        }
                    }
                    bombeffect.push({
                        x: touchBullets[t].x,
                        y: touchBullets[t].y,
                        scale: 0,
                        color: touchBullets[t].weaponOwner && touchBullets[t].weaponOwner.cold ? "white" : "",
                        maxScale: touchBullets[t].aoeRange
                    })
                }
                if(robot.health <= 0 && hadHealth) {
                    addLogger(bullet.owner ? bullet.owner.PLAYERNAME || "unknown bot" : "unknown bot", touchBullets[t].weaponOwner, "player");
                }
                bullet.dmg = 0;
                bullet.kill = true;
            }
            if (robot.health > (robot.maxhealth - robot.grayDamage)) {
                robot.health = (robot.maxhealth - robot.grayDamage);
            }
            if (robot.health <= 0) {
                players[0].robotIndex = -1;
                document.getElementById("shields").innerHTML = "";
                document.getElementById("abilityCharges").innerHTML = "";
                document.getElementById("useAbility").style.display = "none";
                document.getElementById("weaponThing").style.display = "none";
                document.getElementById("healthBar").style.display = "none";
                let hasRobots = players[0].robots.find(e => e && !e.USED);
                document.getElementById("chooseSlot").style.display = "block";
                if (!hasRobots) {
                    endGame(players[0], (player.gameMode == 2 || player.gameMode == 3) ? .5 : null);
                }
                updateChooseSlots();
            }
        }
    }
    var lastUpdate = Date.now();
    class enemy {
        constructor(data, isBoss, multi = 1) {
            this.x = Math.random() * mapInfo.x;
            this.y = Math.random() * mapInfo.y;
            this.velx = 0;
            this.vely = 0;
            this.name = data.name;
            if (!isBoss) {
                this.reflector = data.reflector;
                this.dmg = data.dmg * multi;
                this.range = data.range;
                this.health = this.maxhealth = data.health * multi;
                this.fireRate = data.fireRate;
            } else {
                this.isBoss = true;
                this.health = this.maxhealth = data.health;
                if (data.AOEArea) {
                    this.AOEArea = {
                        dmg: data.AOEArea.dmg,
                        range: data.AOEArea.range,
                        fireRate: data.AOEArea.fireRate,
                        last: 0
                    };
                }
                if (data.BLASTWAVE) {
                    this.BLASTWAVE = {
                        range: data.BLASTWAVE.range,
                        dmg: data.BLASTWAVE.dmg,
                        knockback: data.BLASTWAVE.knockback
                    };
                }
                this.onKill = data.onKill;
            }
            this.speed = data.speed;
            this.scale = data.scale;
        }
    }
    function changeHealth(object, {amount, graydmg, defensePointsBypass, bypassReflector}, isPlayer, doer, noDefense) {
        try {
            amount = parseInt(removeDecimals(amount));
            if (!object || (object.health <= 0 && object.type != "purple")) return;
            if (amount < 0 && object.isFREEZE) {
                amount *= 2;
            }
            let resistance = 0;
            if (object.builtInDefensePoints) {
                resistance += object.builtInDefensePoints;
            }
            if (object.baseDP) {
                resistance += object.baseDP;
            }
            if(defensePointsBypass) {
                resistance *= defensePointsBypass;
            }
            if (noDefense) resistance = 0;
            let defense = defensePointsToResistance(resistance);
            if (amount < 0) {
                amount *= defense;
                if (object.LASTSTANDISON || (object.effects && object.effects.find(e => e.name == "phase shift"))) {
                    amount = 0;
                    return;
                }
            }
            if (isPlayer && isPlayer != "HEAL AHAHAHAHHA" && amount != 0) {
                if (players[0].dmg == null) {
                    players[0].dmg = 0;
                }
                let value = Math.abs(amount);
                players[0].dmg -= Math.min(value, isNaN(object.health) ? value : object.health);
                if (object.health + amount <= 0 && !object.GOTTENKILLED) {
                    if (players[0].kills == null) players[0].kills = 0;
                    object.GOTTENKILLED = true;
                    players[0].kills++;
                }
            }
            if (amount < 0 && noDefense && object.dotResistance) {
                amount *= object.dotResistance;
            }
            if (!object.turnDmgIntoDOT && amount < 0 && !object.LASTSTANDISON) {
                addGrayDamage(object, amount, graydmg);
            }
            if (amount != 0) {
                if (amount < 0 && object.reflector && !bypassReflector) {
                    changeHealth(doer, {
                        amount: ((amount / (defense || 1)) * object.reflector)
                    }, object.isMe);
                }
                if (isPlayer != "HEAL AHAHAHAHHA") {
                    if (!isPlayer) {
                        if (object.isMe) addText(object.x, object.y, amount, 1000, "#f00");
                    } else if (isPlayer != "LMAOLMAOLMAOLMAO") {
                        if (amount > 0) {
                            addText(object.x, object.y, amount, 1000, "#8ecc51");
                        } else if (!object.turnDmgIntoDOT) {
                            addText(object.x, object.y, amount, 1000, "#fff");
                        }
                    }
                }
                if (object.turnDmgIntoDOT && amount < 0 && doer && !noDefense) {
                    let duration = object.effects.find(e => e.name == "stampede") ? 7 : object.name == "Orange Circle" ? 15 : 10;
                    if(object.effects.filter(e => e.name == "defense points" && e.amount == 2).length < 250 && object.effects.find(e => e.name == "stampede")) {
                        object.effects.push({
                            name: "defense points",
                            amount: 2,
                            lastTime: 20e3
                        });
                    }
                    if(object.dotConverter == null) object.dotConverter = [];
                    object.dotConverter.push({
                        amount: amount,
                        duration: duration
                    });
                } else {
                    if (amount < 0) object.damagedTime = Date.now();
                    if(object.repairAmp && amount < 0) {
                        let maountofstaks = object.effects.filter(e => e.name == "repair amp").length;
                        if(maountofstaks < 60) {
                            if(object.HAHAHAHAMoUntDMGMMGMGGM == null) object.HAHAHAHAMoUntDMGMMGMGGM = 0;
                            object.HAHAHAHAMoUntDMGMMGMGGM += Math.abs(amount);
                            if(object.HAHAHAHAMoUntDMGMMGMGGM >= object.repairAmp.require) {
                                object.HAHAHAHAMoUntDMGMMGMGGM = 0;
                                let amount = object.repairAmp.amount;
                                if(maountofstaks + amount >= 60) {
                                    amount = 60 - maountofstaks;
                                    let percent = (5 - object.repairAmp.amount)/5;
                                    object.grayDamage *= percent;
                                    object.effects.push({
                                        name: "defense points",
                                        amount: object.repairAmp.defensePoints,
                                        lastTime: 1e300
                                    });
                                }
                                for(let i = 0; i < amount; i++) {
                                    object.effects.push({
                                        name: "repair amp",
                                        lastTime: 1e300
                                    });
                                }
                            }
                        }
                    }
                    object.health += amount;
                }
            }
        } catch (e) { console.log(e); }
    }
    const freezinnnnnng = 50;
    function spawnNewBoss() {
        if (arena.bosses[arena.bossIndex]) {
            enemies = [];
            setTimeout(() => {
                enemies.push(new enemy(arena.bosses[arena.bossIndex], true));
            }, 100);
        } else {
            setTimeout(() => {
                document.getElementById("useAbility").style.display = "none";
                document.getElementById("weaponThing").style.display = "none";
                document.getElementById("healthBar").style.display = "none";
                document.getElementById("chooseSlot").style.display = "block";
                endGame(players[0], "YAY WIN");
            }, 50);
        }
    }
    function spawnEnemy(multi) {
        let type = extermination.types[Math.floor(extermination.types.length * Math.random())];
        if (enemies.length <= 100) {
            enemies.push(new enemy(type, false, multi));
        }
    }
    function checkIfHit(proj, enemy, plus) {
        if (Math.hypot(proj.y - enemy.y, proj.x - enemy.x) <= (proj.scale * (plus == "shield" ? 1.5 : 1)) + enemy.scale + (plus == "shield" ? 20 : 0)) {
            return true;
        }
        let dist = Math.hypot(proj.lastY - enemy.y, proj.lastX - enemy.x);
        let velx = proj.x * 2 - proj.lastX;
        let vely = proj.y * 2 - proj.lastY;
        let d = Math.hypot(proj.y - vely, proj.x - velx);
        d = dist <= d ? dist : d;
        let tmplocation = {
            x: proj.lastX + Math.cos(proj.dir) * d,
            y: proj.lastY + Math.sin(proj.dir) * d
        };
        if(Math.hypot(tmplocation.y - enemy.y, tmplocation.x - enemy.x) <= (proj.scale * (plus == "shield" ? 1.5 : 1.2)) + enemy.scale + (plus == "shield" ? 20 : 0)) {
            return true;
        }
        return false;
    }
    var extermination = {
        last: 0,
        types: [{
            name: "Burner Circle",
            health: 5000,
            fireRate: 500,
            range: 400,
            dmg: 200,
            scale: 45,
            speed: 0.0028
        }, {
            name: "Sniper Circle",
            health: 7500,
            fireRate: 2000,
            range: 3000,
            dmg: 75,
            scale: 75,
            speed: 0.0014
        }, {
            name: "Smasher Circle",
            health: 2500,
            dmg: 750,
            scale: 35,
            speed: 0.012
        }, {
            name: "Reflector Circle",
            health: 15e3,
            scale: 300,
            speed: 0.0008,
            reflector: 0.05
        }],
        waveIndex: -1,
        last: 0
    };
    function updateEnemies(delta) {
        let playerRobot = players[0].robots[players[0].robotIndex];
        if (player.gameMode == 0 && playerRobot && (enemies.length == 0 || Date.now() - extermination.last >= 7500)) {
            extermination.last = Date.now();
            extermination.waveIndex++;
            for (let iii = 0; iii < 25; iii++) {
                spawnEnemy(1 + (extermination.waveIndex / 5));
            }
        }
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            if (enemy && playerRobot) {
                if (enemy.effects == null) enemy.effects = [];
                enemy.isFREEZE = false;
                let speedMULTIIIII = 1;
                let freezingAMount = 0;
                for (let tt = 0; tt < enemy.effects.length; tt++) {
                    let effect = enemy.effects[tt];
                    if (effect) {
                        effect.lastTime -= delta
                        if(effect.lastTime > 0) {
                            if (effect.name == "cold pulse") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                enemy.isFREEZE = true;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    changeHealth(enemy, {
                                        amount: -50
                                    }, true);
                                    effect.dmgOverTime = 500;
                                }
                            } else if (effect.name == "dot") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    changeHealth(enemy, {
                                        amount: -effect.dmg
                                    }, true, null, true);
                                    effect.dmgOverTime = 1000;
                                }
                            } else if (effect.name == "slowdown") {
                                speedMULTIIIII -= effect.power;
                            } else if (effect.name == "freezing") {
                                freezingAMount++;
                            }
                        }
                        if (effect.lastTime <= 0) {
                            enemy.effects.splice(tt, 1);
                        }
                    }
                }
                if(freezingAMount >= freezinnnnnng) {
                    enemy.effects.push({
                        name: "cold pulse",
                        owner: {},
                        neg: true,
                        lastTime: 1e3
                    });
                    for (let tt = 0; tt < enemy.effects.length; tt++) {
                        let effect = enemy.effects[tt];
                        if (effect) {
                            if (effect.name == "freezing") {
                                effect.lastTime = 0;
                            }
                        }
                    }
                }
                speedMULTIIIII = Math.max(speedMULTIIIII, 0.01);
                let moveSpeed = enemy.speed * (enemy.isFREEZE ? 0 : 1) * speedMULTIIIII;
                if (!enemy.isFREEZE && !playerRobot.invis) {
                    if (enemy.name == "Burner Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= enemy.range) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            if (enemy.lastFire == null) enemy.lastFire = 0;
                            if (Date.now() - enemy.lastFire >= enemy.fireRate) {
                                enemy.lastFire = Date.now();
                                changeHealth(playerRobot, {
                                    amount: -enemy.dmg
                                }, false, enemy);
                            }
                        }
                    } else if (enemy.name == "Reflector Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= 400) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                        }
                    } else if (enemy.name == "Sniper Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= 1000) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= enemy.fireRate) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: enemy.dmg,
                                range: enemy.range,
                                dir: Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x),
                                color: "#808080",
                                owner: enemy
                            });
                        }
                    } else if (enemy.name == "Smasher Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, {
                                amount: -enemy.dmg
                            }, false, enemy);
                            bombeffect.push({
                                x: enemy.x,
                                y: enemy.y,
                                scale: 0,
                                maxScale: enemy.scale * 2
                            });
                            enemy.health = 0;
                        } else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        }
                    } else if (enemy.name == "Level 1 Boss" || enemy.name == "Level 2 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let percent = (enemy.health / enemy.maxhealth) * 100;
                        enemy.velx += Math.cos(angle + (percent <= 10 ? Math.PI : 0)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (percent <= 10 ? Math.PI : 0)) * (moveSpeed * delta);
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.BLASTWAVE.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.BLASTWAVE.dmg
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * enemy.BLASTWAVE.knockback;
                            playerRobot.vely += Math.sin(angle) * enemy.BLASTWAVE.knockback;
                        }
                        if (Date.now() - enemy.AOEArea.last >= enemy.AOEArea.fireRate && Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.AOEArea.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.AOEArea.dmg
                            }, false, enemy);
                            enemy.AOEArea.last = Date.now();
                        }
                        if (enemy.name == "Level 1 Boss" && percent <= 10) {
                            if (enemy.x + (enemy.velx * delta) >= enemy.scale && enemy.x + (enemy.velx * delta) <= mapInfo.x - enemy.scale) {
                            } else {
                                enemy.health = Math.min(enemy.health + (enemy.maxhealth * 0.05), enemy.maxhealth);
                                enemy.x = Math.random() * mapInfo.x;
                                enemy.y = Math.random() * mapInfo.y;
                            }
                            if (enemy.y + (enemy.vely * delta) >= enemy.scale && enemy.y + (enemy.vely * delta) <= mapInfo.y - enemy.scale) {
                            } else {
                                enemy.health = Math.min(enemy.health + (enemy.maxhealth * 0.05), enemy.maxhealth);
                                enemy.x = Math.random() * mapInfo.x;
                                enemy.y = Math.random() * mapInfo.y;
                            }
                        }
                    } else if (enemy.name == "Level 3 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (Date.now() - enemy.AOEArea.last >= enemy.AOEArea.fireRate && Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.AOEArea.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.AOEArea.dmg
                            }, false, enemy);
                            enemy.AOEArea.last = Date.now();
                        }
                        if (enemy.lastHeal == null) enemy.lastHeal = 0;
                        if (Date.now() - enemy.lastHeal >= 5e3) {
                            enemy.lastHeal = Date.now();
                            enemy.health = Math.min(enemy.health + (enemy.maxhealth * 0.05), enemy.maxhealth);
                        }
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, {
                                amount: -10e3
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * 12;
                            playerRobot.vely += Math.sin(angle) * 12;
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 50) {
                            enemy.lastFire = Date.now();
                            let dmg = 300;
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: dmg,
                                range: 3200 + enemy.scale,
                                dir: angle + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                color: "./images/bullets/bullet.png",
                                owner: enemy
                            });
                            let x = 0;
                            let y = 0;
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    x = enemy.x + Math.cos(angle + 1.57) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle + 1.57) * (enemy.scale - 7.5);
                                } else if (i == 1) {
                                    x = enemy.x + Math.cos(angle + 0.39) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle + 0.39) * (enemy.scale - 7.5);
                                } else if (i == 2) {
                                    x = enemy.x + Math.cos(angle - 0.39) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle - 0.39) * (enemy.scale - 7.5);
                                } else {
                                    x = enemy.x + Math.cos(angle - 1.57) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle - 1.57) * (enemy.scale - 7.5);
                                }
                                projectiles.push({
                                    x: x,
                                    y: y,
                                    oldX: x,
                                    oldY: y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 20,
                                    speed: 0.3,
                                    dmg: dmg,
                                    range: 3200 + enemy.scale,
                                    dir: Math.atan2(playerRobot.y - y, playerRobot.x - x) + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                    color: "./images/bullets/bullet.png",
                                    owner: enemy
                                });
                            }
                        }
                    } else if (enemy.name == "Level 4 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (Date.now() - enemy.AOEArea.last >= enemy.AOEArea.fireRate && Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.AOEArea.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.AOEArea.dmg
                            }, false, enemy);
                            enemy.AOEArea.last = Date.now();
                        }
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, {
                                amount: -50e3
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * 12;
                            playerRobot.vely += Math.sin(angle) * 12;
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 75) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: 2500,
                                range: 3200 + enemy.scale,
                                dir: angle,
                                color: "./images/bullets/bullet.png",
                                owner: enemy
                            });
                        }
                    } else if (enemy.name == "Level 5 Boss" || enemy.name == "Level 6 Boss") {
                        mapInfo = {
                            x: 75e2,
                            y: 75e2
                        }
                        let percent = (enemy.health / enemy.maxhealth) * 100;
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (enemy.name == "Level 6 Boss") {
                            if (Date.now() - enemy.lastFire >= 50) {
                                enemy.lastFire = Date.now();
                                let dmg = 300;
                                projectiles.push({
                                    x: enemy.x,
                                    y: enemy.y,
                                    oldX: enemy.x,
                                    oldY: enemy.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 20,
                                    speed: 0.3,
                                    dmg: dmg,
                                    range: 3200 + enemy.scale,
                                    dir: angle + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                    color: "./images/bullets/bullet.png",
                                    owner: enemy
                                });
                                let x = 0;
                                let y = 0;
                                for (let i = 0; i < 4; i++) {
                                    if (i == 0) {
                                        x = enemy.x + Math.cos(angle + 1.57) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle + 1.57) * (enemy.scale - 7.5);
                                    } else if (i == 1) {
                                        x = enemy.x + Math.cos(angle + 0.39) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle + 0.39) * (enemy.scale - 7.5);
                                    } else if (i == 2) {
                                        x = enemy.x + Math.cos(angle - 0.39) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle - 0.39) * (enemy.scale - 7.5);
                                    } else {
                                        x = enemy.x + Math.cos(angle - 1.57) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle - 1.57) * (enemy.scale - 7.5);
                                    }
                                    projectiles.push({
                                        x: x,
                                        y: y,
                                        oldX: x,
                                        oldY: y,
                                        velx: 0,
                                        vely: 0,
                                        scale: 20,
                                        speed: 0.3,
                                        dmg: dmg,
                                        range: 3200 + enemy.scale,
                                        dir: Math.atan2(playerRobot.y - y, playerRobot.x - x) + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                        color: "./images/bullets/bullet.png",
                                        owner: enemy
                                    });
                                }
                            }
                        } else {
                            if (Date.now() - enemy.lastFire >= 500) {
                                enemy.lastFire = Date.now();
                                projectiles.push({
                                    x: enemy.x,
                                    y: enemy.y,
                                    oldX: enemy.x,
                                    oldY: enemy.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 20,
                                    speed: 0.3,
                                    dmg: 5e3,
                                    range: 3200 + enemy.scale,
                                    dir: angle,
                                    color: "./images/bullets/bullet.png",
                                    owner: enemy
                                });
                            }
                        }
                        if (enemy.lastSpawnEnemy == null) enemy.lastSpawnEnemy = 0;
                        if (Date.now() - enemy.lastSpawnEnemy >= (percent <= 10 ? 500 : 2500)) {
                            enemy.lastSpawnEnemy = Date.now();
                            for (let iii = 0; iii < (percent <= 10 ? 30 : 15); iii++) {
                                spawnEnemy(12);
                            }
                        }
                    } else if (enemy.name == "Level 7 Boss" || enemy.name == "Level 8 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 75) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: 8e3,
                                range: 9200 + enemy.scale,
                                dir: angle,
                                dotEffect: {
                                    name: "dot",
                                    last: 20e3,
                                    dmg: (enemy.name == "Level 8 Boss" ? 750 : 500),
                                    owner: enemy
                                },
                                color: "./images/bullets/dot_bullet.png",
                                owner: enemy
                            });
                        }
                        if (enemy.lastFir2e == null) enemy.lastFir2e = 0;
                        if (Date.now() - enemy.lastFir2e >= 15000 && distance <= 1200) {
                            enemy.lastFir2e = Date.now();
                            bombeffect.push({
                                x: enemy.x,
                                y: enemy.y,
                                scale: 0,
                                maxScale: 1200,
                                color: "white"
                            });
                            playerRobot.effects.push({
                                name: "cold pulse",
                                owner: {},
                                neg: true,
                                lastTime: (enemy.name == "Level 8 Boss" ? 7e3 : 6e3)
                            });
                        }
                    } else if (enemy.name == "Level 9 Boss") {
                        mapInfo = {
                            x: 5e3,
                            y: 5e3
                        }
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle) * (moveSpeed * delta);
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= playerRobot.scale + enemy.scale) {
                            changeHealth(playerRobot, {
                                amount: -50e3
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * 1.5;
                            playerRobot.vely += Math.sin(angle) * 1.5;
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 50) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: 10e3,
                                range: 9200 + enemy.scale,
                                dir: angle,
                                freezeEffect: {
                                    name: "freezing",
                                    last: 20e3,
                                    power: .5
                                },
                                slowEffect: {
                                    name: "slowdown",
                                    last: 5e3,
                                    power: 0.012
                                },
                                grayDamageAmount: 1,
                                color: "./images/bullets/energy_bullet.png",
                                owner: enemy
                            });
                        }
                    }
                }
                if (enemy.isFREEZE) {
                    enemy.velx = 0;
                    enemy.vely = 0;
                }
                if (enemy.x + (enemy.velx * delta) >= enemy.scale && enemy.x + (enemy.velx * delta) <= mapInfo.x - enemy.scale) {
                    enemy.x += (enemy.velx * delta);
                } else {
                    if (enemy.x + (enemy.velx * delta) >= mapInfo.x - enemy.scale) {
                        enemy.x = mapInfo.x - enemy.scale;
                    } else {
                        enemy.x = enemy.scale;
                    }
                }
                if (enemy.y + (enemy.vely * delta) >= enemy.scale && enemy.y + (enemy.vely * delta) <= mapInfo.y - enemy.scale) {
                    enemy.y += (enemy.vely * delta);
                } else {
                    if (enemy.y + (enemy.vely * delta) >= mapInfo.y - enemy.scale) {
                        enemy.y = mapInfo.y - enemy.scale;
                    } else {
                        enemy.y = enemy.scale;
                    }
                }
                if (enemy.velx) enemy.velx *= Math.pow(0.993, delta);
                if (enemy.vely) enemy.vely *= Math.pow(0.993, delta);
                let touchBullets = projectiles.filter(e => e.isAlly && checkIfHit(e, enemy));
                for (let t = 0; t < touchBullets.length; t++) {
                    if (!touchBullets[t].aoeRange) changeHealth(enemy, {
                        amount: -touchBullets[t].dmg,
                        graydmg: touchBullets[t].grayDamageAmount
                    }, true, playerRobot);
                    if (touchBullets[t].dmg > 0) {
                        if(touchBullets[t].knockback) {
                            enemy.velx += Math.cos(touchBullets[t].dir) * touchBullets[t].knockback;
                            enemy.vely += Math.sin(touchBullets[t].dir) * touchBullets[t].knockback;
                        }
                        if (touchBullets[t].dotEffect) {
                            enemy.effects.push({
                                neg: true,
                                name: touchBullets[t].dotEffect.name,
                                dmg: touchBullets[t].dotEffect.dmg,
                                lastTime: touchBullets[t].dotEffect.last,
                                owner: touchBullets[t].owner
                            });
                        }
                        if (touchBullets[t].slowEffect) {
                            enemy.effects.unshift({
                                neg: true,
                                name: touchBullets[t].slowEffect.name,
                                power: touchBullets[t].slowEffect.power,
                                lastTime: touchBullets[t].slowEffect.last
                            });
                        }
                        if (touchBullets[t].freezeEffect && !enemy.effects.find(e => e.name == "cold pulse")) {
                            for(let asdasd = 0; asdasd < touchBullets[t].freezeEffect.power; asdasd++) {
                                enemy.effects.push({
                                    neg: true,
                                    name: touchBullets[t].freezeEffect.name,
                                    lastTime: touchBullets[t].freezeEffect.last
                                });
                            }
                        }
                    }
                    if (touchBullets[t].aoeRange != null) {
                        let Enemies = enemies.filter(e => Math.hypot(e.y - touchBullets[t].y, e.x - touchBullets[t].x) <= touchBullets[t].aoeRange + e.scale);
                        Enemies.forEach(e => {
                            changeHealth(e, {
                                amount: -touchBullets[t].dmg
                            }, true, playerRobot);
                        });
                        bombeffect.push({
                            x: touchBullets[t].x,
                            y: touchBullets[t].y,
                            scale: 0,
                            color: touchBullets[t].weaponOwner && touchBullets[t].weaponOwner.cold ? "white" : "",
                            maxScale: touchBullets[t].aoeRange
                        })
                    }
                    touchBullets[t].dmg = 0;
                    touchBullets[t].kill = true;
                }
                if (enemy.health > (enemy.maxhealth - enemy.grayDamage)) {
                    enemy.health = (enemy.maxhealth - enemy.grayDamage);
                }
                if (enemy.health <= 0) {
                    if (enemy.isBoss) {
                        if(enemy.name == "Level 8 Boss") {
                            addTaskXP("8 boss", 1);
                        }
                        arena.bossIndex++;
                        if (players[0].rewardBonus == null) {
                            players[0].rewardBonus = {
                                silver: 0,
                                gold: 0,
                                keys: 0,
                                OXP: 0,
                                WSP: 0
                            };
                        }
                        players[0].rewardBonus.silver += enemy.onKill.silver;
                        players[0].rewardBonus.gold += enemy.onKill.gold;
                        players[0].rewardBonus.keys += enemy.onKill.keys;
                        players[0].rewardBonus.OXP += enemy.onKill.OXP;
                        if (enemy.onKill.WSP) {
                            players[0].rewardBonus.WSP += enemy.onKill.WSP;
                        }
                        spawnNewBoss();
                    }
                    enemies.splice(i, 1);
                }
            }
        }
    }
    function updateBullets(delta) {
        for (let i = 0; i < projectiles.length; i++) {
            let bullet = projectiles[i];
            if (bullet) {
                let asd = bullet.avoidBuildings ? false : buildings.find(e => e.name.includes("rect") && circleSquareCollision(bullet, e, true));
                if (asd || bullet.kill || Math.hypot(bullet.oldY - bullet.y, bullet.oldX - bullet.x) >= bullet.range) {
                    if (bullet.aoeRange && (asd || Math.hypot(bullet.oldY - bullet.y, bullet.oldX - bullet.x) >= bullet.range)) {
                        if (player.gameMode == 2 || player.gameMode == 3) {
                            for (let asdasd = 0; asdasd < players.length; asdasd++) {
                                let ROBOBT = players[asdasd].robots[players[asdasd].robotIndex];
                                if (ROBOBT && players[asdasd].isAlly != bullet.isAlly && Math.hypot(bullet.y - ROBOBT.y, bullet.x - ROBOBT.x) <= bullet.aoeRange + ROBOBT.scale) {
                                    changeHealth(ROBOBT, {
                                        amount: -bullet.dmg
                                    }, bullet.owner.isMe ? true : false, bullet.owner);
                                }
                            }
                            bombeffect.push({
                                x: bullet.x,
                                y: bullet.y,
                                scale: 0,
                                color: bullet.weaponOwner && bullet.weaponOwner.cold ? "white" : "",
                                maxScale: bullet.aoeRange
                            })
                        } else {
                            let touchedEnemies = enemies.filter(e => Math.hypot(bullet.y - e.y, bullet.x - e.x) <= bullet.aoeRange + e.scale);
                            for (let t = 0; t < touchedEnemies.length; t++) {
                                if (touchedEnemies[i]) {
                                    changeHealth(touchedEnemies[i], {
                                        amount: -bullet.dmg
                                    }, true, bullet.owner);
                                }
                            }
                            bombeffect.push({
                                x: bullet.x,
                                y: bullet.y,
                                scale: 0,
                                color: bullet.weaponOwner && bullet.weaponOwner.cold ? "white" : "",
                                maxScale: bullet.aoeRange
                            });
                        }
                    }
                    projectiles.splice(i, 1);
                } else {
                    bullet.velx = Math.cos(bullet.dir) * (bullet.speed * delta);
                    bullet.vely = Math.sin(bullet.dir) * (bullet.speed * delta);
                    bullet.lastX = bullet.x;
                    bullet.lastY = bullet.y;
                    bullet.x += (bullet.velx * delta);
                    bullet.y += (bullet.vely * delta);
                    if (isNaN(bullet.dir) || isNaN(bullet.x) || isNaN(bullet.y) || isNaN(bullet.velx) || isNaN(bullet.vely)) {
                        bullet.kill = true;
                    }
                }
            }
        }
    }
    function renderEnemies() {
        ctx.globalAlpha = 1;
        for (let i = 0; i < 250; i++) {
            let enemy = enemies[i];
            if (enemy) {
                ctx.save();
                ctx.translate(enemy.x - offset.x, enemy.y - offset.y);
                if (!enemy.name.includes("Boss")) renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : enemy.name == "Burner Circle" ? "#f00" : enemy.name == "Smasher Circle" ? "#ffff00" : "#808080", enemy.isFREEZE ? "#fff" : "#000");
                if (enemy.name == "Burner Circle") {
                    ctx.globalAlpha = 0.6;
                    renderCircle(0, 0, enemy.range, ctx, false, true, "#f00", "#f00", 17);
                } else if (enemy.name == "Level 1 Boss" || enemy.name == "Level 2 Boss") {
                    ctx.globalAlpha = 0.2;
                    renderCircle(0, 0, enemy.AOEArea.range, ctx, true, false, "#f00");
                    renderCircle(0, 0, enemy.BLASTWAVE.range, ctx, true, false, "#f00");
                    ctx.globalAlpha = 1;
                    renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : "#808080", enemy.isFREEZE ? "#fff" : "#000");
                } else if (enemy.name == "Level 3 Boss" || enemy.name == "Level 4 Boss") {
                    ctx.globalAlpha = 0.2;
                    renderCircle(0, 0, enemy.AOEArea.range, ctx, true, false, "#f00");
                    ctx.globalAlpha = 1;
                    renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : "#ffff00", enemy.isFREEZE ? "#fff" : "#000");
                } else if (enemy.name.includes("Boss")) {
                    renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : enemy.name == "Level 7 Boss" || enemy.name == "Level 8 Boss" ? "#0f0" : "#f00", enemy.isFREEZE ? "#fff" : "#000");
                }
                if (enemy.isBoss) {
                    ctx.fillStyle = "#fff";
                    ctx.font = "34px Open Sans";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillText(removeDecimals((enemy.health / enemy.maxhealth) * 100) + "%", 0, enemy.scale + 20);
                }
                ctx.restore();
            }
        }
    }
    var bulletImages = {};
    function getBulletImage(obj) {
        if(obj.color.includes("rgb")) return;
        let tmp = bulletImages[obj.color];
        if (!tmp) {
            tmp = new Image();
            tmp.src = obj.color;
            tmp.onload = function () {
                tmp.isLoaded = true;
            }
            bulletImages[obj.color] = tmp;
        }
        if (tmp.isLoaded) {
            return tmp;
        }
    }
    function renderBullets() {
        ctx.globalAlpha = 1;
        for (let i = 0; i < projectiles.length; i++) {
            let bullet = projectiles[i];
            if (bullet && isOnScreen(bullet.x - offset.x, bullet.y - offset.y, bullet.scale)) {
                ctx.save();
                ctx.translate(bullet.x - offset.x, bullet.y - offset.y);
                let image = getBulletImage(bullet);
                if (image) {
                    ctx.rotate(bullet.dir);
                    ctx.drawImage(image, -20, -20, 40, 40);
                } else {
                    renderCircle(0, 0, bullet.scale, ctx, false, false, bullet.color.includes("#") || bullet.color.includes("rgb") ? bullet.color : "#808080", "#000", 1);
                }
                ctx.restore();
            }
        }
    }
    var bombeffect = [];
    var gameTimePlayed = 0;
    function renderPlayers() {
        for (let i = 1; i < players.length; i++) {
            let player = players[i];
            if (player.robotIndex >= 0) {
                let robot = player.robots[player.robotIndex];
                if (isOnScreen(robot.x - offset.x, robot.y - offset.y, robot.scale)) {
                    ctx.save();
                    ctx.translate(robot.x - offset.x, robot.y - offset.y);
                    if(!robot.invis && !robot.effects.find(e => e.name == "phase shift")) {
                        ctx.globalAlpha = 1;
                        ctx.fillStyle = players[i].isAlly ? "#00f" : "#f00";
                        ctx.font = "34px Open Sans";
                        ctx.textBaseline = "middle";
                        ctx.textAlign = "center";
                        ctx.fillText(players[i].name, 0, -(robot.scale + 20));
                    }
                    ctx.globalAlpha = robot.invis ? 0.025 : robot.effects.find(e => e.name == "phase shift") ? 0.4 : 1;
                    if (robot.name.includes("Circle")) {
                        renderCircle(0, 0, robot.scale, ctx, false, false, Date.now() - robot.damagedTime <= 20 ? "#fff" : robot.color, robot.isFREEZE ? "#fff" : "#000");
                    } else if (robot.name.includes("Pentagon")) {
                        ctx.rotate(robot.dir + Math.PI / 2);
                        ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                        ctx.lineWidth = 12;
                        ctx.fillStyle = robot.color;
                        renderStar(ctx, 2.5, robot.scale, robot.scale);
                        ctx.stroke();
                        ctx.fill();
                        ctx.rotate(-(robot.dir + Math.PI / 2) || 0);
                    } else if (robot.name.includes("Hexagon")) {
                        ctx.rotate(robot.dir + Math.PI / 2);
                        ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                        ctx.lineWidth = 12;
                        ctx.fillStyle = robot.color;
                        renderStar(ctx, 3, robot.scale, robot.scale);
                        ctx.stroke();
                        ctx.fill();
                        ctx.rotate(-(robot.dir + Math.PI / 2) || 0);
                    } else if (robot.name.includes("Heptagon")) {
                        ctx.rotate(Math.PI / 2);
                        ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                        ctx.lineWidth = 12;
                        ctx.fillStyle = robot.color;
                        renderStar(ctx, 3.5, robot.scale, robot.scale);
                        ctx.stroke();
                        ctx.fill();
                        ctx.rotate(-(robot.dir + Math.PI / 2) || 0);
                    }
                    ctx.fillStyle = players[i].isAlly ? "#000" : "#fff";
                    ctx.font = "34px Open Sans";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillText(removeDecimals((robot.health / robot.maxhealth) * 100) + "%", 0, robot.scale + 20);
                    ctx.restore();
                }
            }
        }
    }
    function drawTracer(_, sid, isAlly) {
        let player = players[0].robots[players[0].robotIndex];
        if (player && !_.invis) {
            if (!document.getElementById("enemyradar" + sid)) {
                let newE = document.createElement("div");
                newE.id = `enemyradar${sid}`;
                newE.style = `
                display: none;
                position: absolute;
                left: 0;
                top: 0;
                color: ${isAlly ? "#00f" : "#f00"};
                width: 0;
                height: 0;
                border: solid;
                border-color: transparent transparent transparent ${isAlly ? "#00f" : "#f00"};
                `;
                document.body.appendChild(newE);
            }
            let center_x = window.innerWidth / 2, center_y = window.innerHeight / 2;
            let rad = Math.atan2(_.y - player.y, _.x - player.x), alpha = Math.sqrt(Math.pow(0 - (player.x - _.x), 2) + Math.pow(0 - (player.y - _.y) * (16 / 9), 2)) * 100 / (maxScreen.y / 2) / center_y;
            if (alpha > 1.0) alpha = 1.0;
            let tx = center_x + (center_y * alpha) * Math.cos(rad) - 20 / 2, ty = center_y + (center_y * alpha) * Math.sin(rad) - 20 / 2;
            document.getElementById("enemyradar" + sid).style.borderWidth = "10px 0px 10px 20px";
            document.getElementById("enemyradar" + sid).style.pointerEvents = "none";
            document.getElementById("enemyradar" + sid).style.left = Math.max(20, Math.min(tx, window.innerWidth - 20)) + "px";
            document.getElementById("enemyradar" + sid).style.top = Math.max(20, Math.min(ty, window.innerHeight - 20)) + "px";
            document.getElementById("enemyradar" + sid).style.opacity = alpha;
            document.getElementById("enemyradar" + sid).style.transform = `rotate(${((rad * 180) / Math.PI)}deg)`;
            document.getElementById("enemyradar" + sid).style.display = "block";
        }
    }
    function doMoveStuff(robot, isAlly) {
        let nearestBeacon = buildings.filter(e => e.name == "beacon" && (isAlly ? e.ALLYPOINTS < 5e3 : e.ENEMYPOINTS < 5e3)).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x))[0];
        let nearestEnemy = [];
        for (let i = 0; i < players.length; i++) {
            if (players[i].isAlly != isAlly) {
                if (players[i].robots[players[i].robotIndex]) {
                    nearestEnemy.push(players[i].robots[players[i].robotIndex]);
                }
            }
        }
        if (nearestEnemy.length) nearestEnemy = nearestEnemy.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x))[0];
        let TARGET = null;
        if (player.mapID == 0) {
            if (player.gameMode == 3 && Math.hypot(nearestEnemy.y - robot.y, nearestEnemy.x - robot.x) >= 100) {
                TARGET = nearestEnemy;
            } else if (nearestBeacon && Math.hypot(nearestBeacon.y - robot.y, nearestBeacon.x - robot.x) >= 400 - robot.scale * 2) {
                TARGET = nearestBeacon;
            } else {
                TARGET = null;
            }
            if (TARGET) {
                for (let i = 0; i < buildings.length; i++) {
                    let obj = buildings[i];
                    if (obj.name.includes("col")) {
                        if (Math.hypot(obj.y - robot.y, obj.x - robot.x) <= 25 + robot.scale) {
                            if (obj.name == "right col") {
                                if (TARGET.x <= obj.x) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.y > obj.middleY) {
                                        return Math.PI / 2;
                                    } else {
                                        return -Math.PI / 2;
                                    }
                                }
                            } else if (obj.name == "left col") {
                                if (TARGET.x >= obj.x) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.y > obj.middleY) {
                                        return Math.PI / 2;
                                    } else {
                                        return -Math.PI / 2;
                                    }
                                }
                            } else if (obj.name == "up col") {
                                if (TARGET.y >= obj.y) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.x > obj.middleX) {
                                        return 0;
                                    } else {
                                        return Math.PI;
                                    }
                                }
                            } else {
                                if (TARGET.y <= obj.y) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.x > obj.middleX) {
                                        return 0;
                                    } else {
                                        return Math.PI;
                                    }
                                }
                            }
                        }
                    } else if (obj.name == "wall rect" && robot.ABILITYSPEEDMULTI == 1) {
                        if (circleSquareCollision(robot, obj, true)) {
                            let Px = Math.max(obj.x, Math.min(robot.x, obj.x + obj.width));
                            let Py = Math.max(obj.y, Math.min(robot.y, obj.y + obj.height));
                            robot.velx *= 0.75;
                            robot.vely *= 0.75;
                            robot.velx += Math.cos(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                            robot.vely += Math.sin(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                        }
                    }
                }
                return Math.atan2(TARGET.y - robot.y, TARGET.x - robot.x);
            } else {
                return null;
            }
        }
    }
    function PLAYERKNOCKBACK(robot) {
        for (let i = 0; i < players.length; i++) {
            let ROBOT = players[i].robots[players[i].robotIndex];
            if (ROBOT) {
                let distance = Math.hypot(ROBOT.y - robot.y, ROBOT.x - robot.x);
                if (distance <= (robot.scale + ROBOT.scale) * .75) {
                    let angle = Math.atan2(ROBOT.y - robot.y, ROBOT.x - robot.x) + Math.PI;
                    let tmpInt = distance - (robot.scale + ROBOT.scale) * .75;
                    tmpInt = (tmpInt * -1) / 2;
                    robot.x += (tmpInt * Math.cos(angle));
                    robot.y += (tmpInt * Math.sin(angle));
                    ROBOT.x -= (tmpInt * Math.cos(angle));
                    ROBOT.y -= (tmpInt * Math.sin(angle));
                    if (player) {
                        robot.velx *= 0.9;
                        robot.vely *= 0.9;
                    }
                }
            }
        }
    }
    function updatePlayers(delta) {
        for (let i = 1; i < players.length; i++) {
            let robot = players[i].robots[players[i].robotIndex];
            if (robot) {
                PLAYERKNOCKBACK(robot);
                drawTracer(robot, i, players[i].isAlly);
                robot.isFREEZE = false;
                robot.lastX = robot.x;
                robot.lastY = robot.y;
                if(robot.dotConverter && robot.dotConverter.length) {
                    let amount = 0;
                    for(let i = 0; i < robot.dotConverter.length; i++) {
                        let info = robot.dotConverter[i];
                        amount += info.amount;
                    }
                    let duration = robot.dotConverter[0].duration;
                    robot.effects.push({
                        name: "dot",
                        dmg: Math.abs(amount) / duration,
                        turned: true,
                        lastTime: duration * 1000
                    });
                }
                robot.dotConverter = [];
                robot.invis = false;
                let slowdownMulti = 1;
                let freezingAMount = 0;
                for (let tt = 0; tt < robot.effects.length; tt++) {
                    let effect = robot.effects[tt];
                    if (effect) {
                        if (effect.oldLastTime == null) effect.oldLastTime = effect.lastTime;
                        effect.lastTime -= delta
                        if(effect.lastTime > 0) {
                            if (effect.name == "cold pulse") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                robot.isFREEZE = true;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    let hadHealth = robot.health > 0;
                                    changeHealth(robot, {
                                        amount: -50
                                    }, effect.owner && effect.owner.isMe ? true : "LMAOLMAOLMAOLMAO");
                                    effect.dmgOverTime = 500;
                                    if(robot.health <= 0 && hadHealth) {
                                        addLogger(effect.owner ? effect.owner.PLAYERNAME || "unknown bot" : "unknown bot", {
                                            name: "COLD PULSE",
                                            level: 1
                                        }, robot.PLAYERNAME);
                                    }
                                }
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if (effect.name == "dot") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    if (robot.turned) {
                                        addGrayDamage(robot, effect.dmg);
                                    }
                                    let hadHealth = robot.health > 0;
                                    changeHealth(robot, {
                                        amount: -effect.dmg
                                    }, "LMAOLMAOLMAOLMAO", null, true);
                                    if(robot.health <= 0 && hadHealth) {
                                        addLogger("unknown bot", {
                                            name: "DOT EFFECT",
                                            level: 1
                                        }, robot.PLAYERNAME);
                                    }
                                    effect.dmgOverTime = 1000;
                                }
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if (effect.name == "stealth dash") {
                                if (effect.lastTime >= effect.oldLastTime - 350) {
                                    let moveSpeed = 0.02 * slowdownMulti;
                                    robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                                    robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                                }
                                robot.invis = true;
                            } else if (effect.name == "slowdown") {
                                slowdownMulti -= effect.power;
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if (effect.name == "phase shift") {
                                slowdownMulti += 1.5;
                            } else if (effect.name == "dash") {
                                let moveSpeed = 0.015 * slowdownMulti;
                                robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                                robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                            } else if (effect.name == "freezing") {
                                freezingAMount++;
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if(effect.name == "overload") {
                                slowdownMulti += 1;
                            }
                        }
                        if (effect.lastTime <= 0) {
                            if (effect.name == "overload") {
                                let abilityRange = 500;
                                bombeffect.push({
                                    location: robot,
                                    doFaster: true,
                                    scale: 0,
                                    maxScale: abilityRange
                                });
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[i].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= abilityRange + player.scale) {
                                            let angle = Math.atan2(player.y - robot.y, player.x - robot.x);
                                            player.velx += Math.cos(angle) * 5;
                                            player.vely += Math.sin(angle) * 5;
                                            let hasHealth = player.health > 0;
                                            changeHealth(player, {
                                                amount: -robot.ability.dmg
                                            }, true);
                                            if (hasHealth && player.health <= 0) {
                                                addLogger(robot.PLAYERNAME, {
                                                    name: "Overload",
                                                    level: robot.level
                                                }, player.PLAYERNAME || "unknown bot")
                                            }
                                        }
                                    }
                                }
                            }
                            robot.effects.splice(tt, 1);
                        }
                    }
                }
                if(freezingAMount >= freezinnnnnng) {
                    robot.effects.push({
                        name: "cold pulse",
                        neg: true,
                        lastTime: 1e3
                    });
                    for (let tt = 0; tt < robot.effects.length; tt++) {
                        let effect = robot.effects[tt];
                        if (effect) {
                            if (effect.name == "freezing") {
                                effect.lastTime = 0;
                            }
                        }
                    }
                }
                slowdownMulti = Math.max(slowdownMulti, 0.01);
                if (robot.shieldRegen == null) robot.shieldRegen = 1;
                let SHIELDREGENPOWER = false;
                let shieldRegenMulti = 1;
                for (let tt = 0; tt < robot.shields.length; tt++) {
                    let shield = robot.shields[tt];
                    if (shield.regen) {
                        if (shield.lastRegen == null) shield.lastRegen = false;
                        if (shield.health < shield.maxhealth) {
                            SHIELDREGENPOWER = true;
                        }
                        if (Date.now() - shield.lastRegen >= (5e3 * robot.shieldRegen * shieldRegenMulti)) {
                            shield.lastRegen = Date.now();
                            shield.health += shield.maxhealth * shield.regen;
                        }
                        if (shield.health > shield.maxhealth) {
                            shield.health = shield.maxhealth;
                        }
                    }
                    if (shield.health < 0) {
                        shield.health = 0;
                        if(shield.type == "yellow" && robot.ability.name == "Paladin") {
                            bombeffect.push({
                                location: robot,
                                scale: 0,
                                maxScale: 1200,
                                color: "blue"
                            });
                            for (let t = 0; t < players.length; t++) {
                                let player = players[t].robots[players[t].robotIndex];
                                if (player && players[t].isAlly != players[i].isAlly) {
                                    if (Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                                        player.weapons.forEach(e => {
                                            if(e.name != "Atomizer" && e.name != "Nucleon") {
                                                e.ammo = 0;
                                            }
                                        });
                                        if(player.ability) {
                                            let hasPS = player.effects.find(e => e.name == "phase shift");
                                            if(hasPS) hasPS.lastTime = 0;
                                            let hasStamp = player.effects.find(e => e.name == "stampede");
                                            if(hasStamp) hasStamp.lastTime = 0;
                                            player.abilityLast = 0;
                                            player.abilityReload = player.ability.reload;
                                            if(player.ability.charges) {
                                                player.ability.charges = 0;
                                            }
                                            if(player.ability.name == "Paladin") {
                                                player.shields = [];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (shield.health > 0 || shield.type == "purple") {
                        let touchBullets = projectiles.filter(e => e.isAlly != players[i].isAlly && e.projType != shield.type && checkIfHit(e, robot, "shield"));
                        for (let t = 0; t < touchBullets.length; t++) {
                            shieldEffects.push({
                                location: robot,
                                scale: robot.scale + 20,
                                dir: Math.atan2(touchBullets[t].y - robot.y, touchBullets[t].x - robot.x),
                                type: shield.type
                            });
                            changeHealth(shield, {
                                amount: (touchBullets[t].dmg * (shield.type == "purple" ? 1 : -1))
                            }, false, touchBullets[t].owner);
                            touchBullets[t].dmg = 0;
                            touchBullets[t].kill = true;
                        }
                    }
                }
                robot.shieldRegen = 1;
                if (robot.ABILITYSPEEDMULTI == null) robot.ABILITYSPEEDMULTI = 1;
                if (!robot.isFREEZE) {
                    let moveDir = doMoveStuff(robot, players[i].isAlly);
                    if (moveDir != null) {
                        let moveSpeed = robot.speed;
                        moveSpeed *= robot.ABILITYSPEEDMULTI;
                        moveSpeed *= slowdownMulti;
                        robot.velx += Math.cos(moveDir) * (moveSpeed * delta);
                        robot.vely += Math.sin(moveDir) * (moveSpeed * delta);
                    }
                }
                robot.ABILITYSPEEDMULTI = 1;
                if (robot.x + (robot.velx * delta) >= robot.scale && robot.x + (robot.velx * delta) <= mapInfo.x - robot.scale) {
                    robot.x += (robot.velx * delta);
                } else {
                    if (robot.x + (robot.velx * delta) >= mapInfo.x - robot.scale) {
                        robot.x = mapInfo.x - robot.scale;
                    } else {
                        robot.x = robot.scale;
                    }
                }
                if (robot.y + (robot.vely * delta) >= robot.scale && robot.y + (robot.vely * delta) <= mapInfo.y - robot.scale) {
                    robot.y += (robot.vely * delta);
                } else {
                    if (robot.y + (robot.vely * delta) >= mapInfo.y - robot.scale) {
                        robot.y = mapInfo.y - robot.scale;
                    } else {
                        robot.y = robot.scale;
                    }
                }
                if (robot.velx) robot.velx *= Math.pow(0.993, delta);
                if (robot.vely) robot.vely *= Math.pow(0.993, delta);
                if (robot.isFREEZE) {
                    robot.doFireWeapons = false;
                    robot.target = null;
                } else {
                    let enemies = [];
                    for (let oioi = 0; oioi < players.length; oioi++) {
                        let ROBOTBO = players[oioi].robots[players[oioi].robotIndex];
                        if (ROBOTBO && !ROBOTBO.invis && players[oioi].isAlly != players[i].isAlly) {
                            enemies.push(ROBOTBO);
                        }
                    }
                    robot.target = enemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x))[0];
                    if (robot.target) {
                        let lowestRange = robot.weapons.sort((a, b) => a.range - b.range)[0];
                        if (Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= lowestRange.range) {
                            robot.doFireWeapons = true;
                        } else {
                            robot.doFireWeapons = false;
                        }
                    } else {
                        robot.doFireWeapons = false;
                    }
                }
                let shownCinderEffects = false;
                for (let yyy = 0; yyy < robot.weapons.length; yyy++) {
                    let weapon = robot.weapons[yyy];
                    if (weapon.continuousReload) {
                        if (weapon.lastFire == null) weapon.lastFire = 0;
                        if (weapon.ammo > 0 && robot.doFireWeapons && Date.now() - weapon.lastFire >= weapon.fireRate) {
                            weapon.lastFire = Date.now();
                            if (weapon.name == "Cinder") {
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[i].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                            let hasHealth = player.health > 0;
                                            changeHealth(player, {
                                                amount: -weapon.dmg
                                            }, player.isMe ? false : "LMAOLMAOLMAOLMAO", robot);
                                            if(player.health <= 0 && hasHealth) {
                                                addLogger(robot.PLAYERNAME, {
                                                    name: "Cinder",
                                                    level: weapon.level
                                                }, player.PLAYERNAME || "unknown bot");
                                            }
                                        }
                                    }
                                }
                                if (!shownCinderEffects) {
                                    shownCinderEffects = true;
                                    bombeffect.push({
                                        location: robot,
                                        doFaster: true,
                                        scale: 0,
                                        maxScale: weapon.range
                                    });
                                }
                            } else {
                                fireWeapon(weapon, robot, players[i].isAlly);
                            }
                            weapon.ammo--;
                        }
                        if (weapon.ammo < weapon.maxammo) {
                            if (weapon.lastChange == null) weapon.lastChange = 0;
                            if (Date.now() - weapon.lastChange >= weapon.reload) {
                                weapon.lastChange = Date.now();
                                if (weapon.name == "Avalanche" || weapon.name == "Rime" || weapon.name == "Glacier") {
                                    weapon.ammo = Math.min(weapon.ammo + 4, weapon.maxammo);
                                } else {
                                    weapon.ammo++;
                                }
                            }
                        }
                    } else {
                        if (weapon.canFire == null) weapon.canFire = true;
                        if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                            if (weapon.firedTime == null) weapon.firedTime = 0;
                            if (robot.doFireWeapons) {
                                weapon.firedTime = Math.min(weapon.firedTime + delta, 12000);
                            } else {
                                weapon.firedTime = Math.max((weapon.firedTime - (delta * 3)), 0);
                            }
                        }else if(weapon.name == "Evora" || weapon.name == "Veyron") {
                            if (weapon.firedTime == null) weapon.firedTime = 0;
                            if (robot.doFireWeapons) {
                                weapon.firedTime = Math.min(weapon.firedTime + delta, 1e3);
                            } else {
                                weapon.firedTime = Math.max((weapon.firedTime - delta), 0);
                            }
                        }
                        if (weapon.canFire) {
                            if (weapon.lastFire == null) weapon.lastFire = 0;
                            let fireRateMulti = (weapon.name == "Evora" || weapon.name == "Veyron" ? (weapon.firedTime/1000 == 1 ? .4 : 1) : (weapon.firedTime / 12000));
                            if (robot.doFireWeapons && Date.now() - weapon.lastFire >= weapon.fireRate * (weapon.name == "Atomizer" || weapon.name == "Nucleon" ? 1 + fireRateMulti : weapon.name == "Evora" || weapon.name == "Veyron" ? fireRateMulti : 1)) {
                                weapon.lastFire = Date.now();
                                if (weapon.name == "Hawk" || weapon.name == "Eagle") {
                                    let nearestEnemies = [];
                                    for (let t = 0; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[i].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                                nearestEnemies.push(player);
                                            }
                                        }
                                    }
                                    if (nearestEnemies.length) nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                    for (let ttt = 0; ttt < 3; ttt++) {
                                        let enemy = nearestEnemies[ttt];
                                        if (enemy) {
                                            changeHealth(enemy, {
                                                amount: -weapon.dmg
                                            }, false, robot);
                                        }
                                    }
                                    if (nearestEnemies.length) {
                                        weapon.ammo--;
                                    }
                                } else {
                                    fireWeapon(weapon, robot, players[i].isAlly);
                                    weapon.ammo--;
                                }
                            }
                            if (weapon.ammo <= 0) {
                                weapon.canFire = false;
                            }
                        } else {
                            weapon.ammo += ((weapon.maxammo / weapon.reload) * delta) * (keysPressed[82] ? 2 : 1);
                            if (weapon.ammo >= weapon.maxammo) {
                                weapon.ammo = weapon.maxammo;
                                weapon.canFire = true;
                            }
                        }
                    }
                }
                for (let itew = 0; itew < buildings.length; itew++) {
                    let obj = buildings[itew];
                    if (obj) {
                        if (obj.name == "beacon") {
                            if (!robot.isFREEZE && Math.hypot(obj.y - robot.y, obj.x - robot.x) <= 400) {
                                obj.isHAVEON = true;
                                if (players[i].isAlly) {
                                    if (obj.ENEMYPOINTS) {
                                        obj.ENEMYPOINTS -= delta;
                                        if (obj.ENEMYPOINTS < 0) {
                                            obj.ENEMYPOINTS = 0;
                                        }
                                    } else {
                                        obj.ALLYPOINTS += delta;
                                        if (obj.ALLYPOINTS > 5e3) {
                                            obj.ALLYPOINTS = 5e3;
                                        }
                                    }
                                } else {
                                    if (obj.ALLYPOINTS) {
                                        obj.ALLYPOINTS -= delta;
                                        if (obj.ALLYPOINTS < 0) {
                                            obj.ALLYPOINTS = 0;
                                        }
                                    } else {
                                        obj.ENEMYPOINTS += delta;
                                        if (obj.ENEMYPOINTS > 5e3) {
                                            obj.ENEMYPOINTS = 5e3;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                let touchBullets = projectiles.filter(e => e.isAlly != players[i].isAlly && checkIfHit(e, robot));
                for (let t = 0; t < touchBullets.length; t++) {
                    let bullet = touchBullets[t];
                    if (bullet.dmg > 0) {
                        if(bullet.knockback) {
                            robot.velx += Math.cos(bullet.dir) * bullet.knockback;
                            robot.vely += Math.sin(bullet.dir) * bullet.knockback;
                        }
                        if (bullet.dotEffect) {
                            robot.effects.push({
                                neg: true,
                                name: bullet.dotEffect.name,
                                dmg: bullet.dotEffect.dmg,
                                lastTime: bullet.dotEffect.last,
                                owner: bullet.owner
                            });
                        }
                        if (bullet.slowEffect) {
                            robot.effects.unshift({
                                neg: true,
                                name: bullet.slowEffect.name,
                                power: bullet.slowEffect.power,
                                lastTime: bullet.slowEffect.last
                            });
                        }
                        if (bullet.freezeEffect && !robot.effects.find(e => e.name == "cold pulse")) {
                            for(let asdasd = 0; asdasd < bullet.freezeEffect.power; asdasd++) {
                                robot.effects.push({
                                    neg: true,
                                    name: bullet.freezeEffect.name,
                                    lastTime: bullet.freezeEffect.last
                                });
                            }
                        }
                    }
                    let hadHealth = robot.health > 0;
                    if (!bullet.aoeRange) changeHealth(robot, {
                        amount: -bullet.dmg,
                        graydmg: bullet.grayDamageAmount,
                        defensePointsBypass: bullet.defensePointsBypass,
                        bypassReflector: bullet.bypassReflector
                    }, bullet.owner.isMe ? true : "LMAOLMAOLMAOLMAO", bullet.owner);
                    if (bullet.aoeRange != null) {
                        for (let asdasd = 0; asdasd < players.length; asdasd++) {
                            let ROBOBT = players[asdasd].robots[players[asdasd].robotIndex];
                            if (ROBOBT && players[asdasd].isAlly != bullet.isAlly && Math.hypot(touchBullets[t].y - ROBOBT.y, touchBullets[t].x - ROBOBT.x) <= touchBullets[t].aoeRange + ROBOBT.scale) {
                                changeHealth(robot, {
                                    amount: -bullet.dmg
                                }, bullet.owner.isMe ? true : "LMAOLMAOLMAOLMAO", touchBullets[t].owner);
                            }
                        }
                        bombeffect.push({
                            x: bullet.x,
                            y: bullet.y,
                            scale: 0,
                            color: bullet.weaponOwner && bullet.weaponOwner.cold ? "white" : "",
                            maxScale: bullet.aoeRange
                        })
                    }
                    if(robot.health <= 0 && hadHealth) {
                        addLogger(bullet.owner ? bullet.owner.isMe ? "player" : bullet.owner.PLAYERNAME || "unknown bot" : "unknown bot", bullet.weaponOwner, robot.PLAYERNAME);
                    }
                    bullet.dmg = 0;
                    bullet.kill = true;
                }
                robot.builtInDefensePoints = robot.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE;
                if (robot.dir == null) robot.dir = 0;
                if (robot.oldScale == null) robot.oldScale = robot.scale;
                if (robot.deltaTimer == null) robot.deltaTimer = 0;
                let hasOVERLOAD = robot.effects.find(e => e.name == "overload");
                if(robot.isFREEZE && hasOVERLOAD) {
                    if(robot.abilityLast != null && robot.abilityLast != 0) {
                        robot.abilityLast = hasOVERLOAD.lastTime;
                    }
                }
                if (robot.ability && (robot.ability.name == "Phase Shift" ? true : !robot.isFREEZE)) {
                    if (robot.ability.name == "Self Heal") {
                        let percent = robot.health / robot.maxhealth;
                        if (percent < 1) {
                            robot.doUseAbility = true;
                        } else {
                            robot.doUseAbility = false;
                        }
                    } else if (robot.ability.name == "Stealth" || robot.ability.name == "Ultimate Defense" || robot.ability.name == "Shield Regeneration" || robot.ability.name == "Full Action") {
                        if (SHIELDREGENPOWER == true && robot.ability.name == "Shield Regeneration") {
                            robot.doUseAbility = true;
                        } else if (robot.health < robot.maxhealth && (robot.ability.name == "Ultimate Defense" || robot.ability.name == "Full Action")) {
                            robot.doUseAbility = true;
                        } else if (robot.ability.name == "Stealth") {
                            robot.doUseAbility = true;
                        } else {
                            robot.doUseAbility = false;
                        }
                    } else if (robot.target && (robot.ability.name == "Cold Pulse" || robot.ability.name == "Retribution")) {
                        let lowestRange = robot.weapons.sort((a, b) => a.range - b.range)[0];
                        if (Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= lowestRange.range && Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= (robot.ability.name == "Retribution" ? 800 : 1200) + robot.target.scale) {
                            robot.doUseAbility = true;
                        } else {
                            robot.doUseAbility = false;
                        }
                    } else if (robot.ability.name == "Paladin" || robot.ability.name == "Dragon Flight" || robot.ability.name == "Overload") {
                        robot.doUseAbility = true;
                    } else if (robot.ability.maxcharge) {
                        robot.doUseAbility = true;
                    } else {
                        robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                        robot.doUseAbility = false;
                    }
                    if (robot.doUseAbility) {
                        if (robot.abilityLast == null) robot.abilityLast = 0;
                        if (robot.abilityReload == null) robot.abilityReload = 0;
                        if (robot.ability.name == "Paladin" || robot.ability.name == "Overload" || robot.ability.name == "Stealth" || robot.ability.name == "Retribution" || robot.ability.name == "Ultimate Defense" || robot.ability.name == "Self Heal" || robot.ability.name == "Dragon Flight" || robot.ability.name == "Shield Regeneration" || robot.ability.name == "Full Action") {
                            if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                                robot.abilityLast = robot.ability.lastingTime;
                                if(robot.ability.name == "Overload") {
                                    robot.effects.push({
                                        name: "overload",
                                        lastTime: robot.ability.lastingTime
                                    });
                                } else if(robot.ability.name == "Paladin") {
                                    let increase = 1;
                                    let fortifier = robot.modules.filter(e => e.shieldHealth);
                                    fortifier.forEach(e => {
                                        increase += e.shieldHealth;
                                    });
                                    robot.shields.push({
                                        type: "yellow",
                                        maxhealth:robot.ability.shieldHp * increase,
                                        health: robot.ability.shieldHp * increase
                                    });
                                }
                            }
                        } else if (robot.ability.name == "Cold Pulse") {
                            if (robot.abilityReload == 0) {
                                bombeffect.push({
                                    x: robot.x,
                                    y: robot.y,
                                    scale: 0,
                                    maxScale: 1200,
                                    color: "white"
                                });
                                let near = [];
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[i].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                                            near.push(player);
                                        }
                                    }
                                }
                                for (let iiiiii = 0; iiiiii < near.length; iiiiii++) {
                                    let enemy = near[iiiiii];
                                    if (enemy) {
                                        if (enemy.effects == null) enemy.effects = [];
                                        changeHealth(enemy, {
                                            amount: -robot.ability.dmg}, false);
                                        enemy.effects.push({
                                            name: "cold pulse",
                                            neg: true,
                                            lastTime: 3e3
                                        });
                                    }
                                }
                                if (near.length) {
                                    changeHealth(robot, {
                                        amount: (5000 * near.length)}, false);
                                }
                                robot.abilityReload = robot.ability.reload;
                            }
                        } else if (robot.ability.maxcharge) {
                            if (robot.abilityLast == 0 && robot.ability.charges > 0) {
                                robot.ability.charges--;
                                robot.abilityLast = robot.ability.lastingTime;
                                if (robot.ability.name == "Stealth Dash") {
                                    let moveDir = doMoveStuff(robot, players[i].isAlly);
                                    robot.effects.push({
                                        name: "stealth dash",
                                        lastTime: 2500,
                                        dir: moveDir || robot.dir
                                    })
                                } else if (robot.ability.name == "Phase Shift") {
                                    robot.effects.push({
                                        name: "phase shift",
                                        lastTime: 2e3
                                    });
                                } else if (robot.ability.name == "Dash") {
                                    let moveDir = doMoveStuff(robot, players[i].isAlly);
                                    robot.effects.push({
                                        name: "dash",
                                        lastTime: 350,
                                        dir: moveDir || robot.dir
                                    });
                                } else if (robot.ability.name == "Fortify") {
                                    let increase = 1;
                                    let fortifier = robot.modules.filter(e => e.shieldHealth);
                                    fortifier.forEach(e => {
                                        increase += e.shieldHealth;
                                    });
                                    robot.shields.push({
                                        type: robot.level >= 13 ? "yellow" : "energy",
                                        maxhealth: robot.ability.shieldHp * increase,
                                        health: robot.ability.shieldHp * increase
                                    });
                                }
                            }
                        }
                    }
                    if (robot.ability.charges >= robot.ability.maxcharge) {
                        robot.ability.charges = robot.ability.maxcharge;
                        robot.abilityReload = robot.ability.reload;
                    }
                    if (robot.abilityLast && robot.abilityLast > 0) {
                        robot.abilityLast -= delta;
                        if (robot.ability.name == "Self Heal") {
                            robot.deltaTimer -= delta;
                            if (robot.deltaTimer <= 0) {
                                let amount = robot.maxhealth * (robot.name == "Pink Circle" ? 0.05 : .025);
                                changeHealth(robot, {amount: Math.floor(amount)}, "HEAL AHAHAHAHHA");
                                robot.deltaTimer = 5e2;
                            }
                        } else if (robot.ability.name == "Stealth") {
                            robot.invis = true;
                            robot.ABILITYSPEEDMULTI = 2;
                        } else if (robot.ability.name == "Retribution") {
                            if (robot.shields.length == 0) {
                                robot.shields.push({
                                    type: "purple",
                                    health: 0
                                });
                            }
                            if (robot.abilityLast <= 4000 && robot.target) {
                                deltaTimer -= delta;
                                if (deltaTimer <= 0) {
                                    deltaTimer = 100;
                                    let dmgMulti = 1 + (Math.floor(robot.shields[0].health / 2500) * 0.075);
                                    dmgMulti = Math.min(dmgMulti, 20);
                                    let isAlly = players[i].isAlly;
                                    for (let i = 0; i < 4; i++) {
                                        if (i == 0) {
                                            x = robot.x + Math.cos(robot.dir + 1.57) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir + 1.57) * (robot.scale - 7.5);
                                        } else if (i == 1) {
                                            x = robot.x + Math.cos(robot.dir + 0.39) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir + 0.39) * (robot.scale - 7.5);
                                        } else if (i == 2) {
                                            x = robot.x + Math.cos(robot.dir - 0.39) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir - 0.39) * (robot.scale - 7.5);
                                        } else {
                                            x = robot.x + Math.cos(robot.dir - 1.57) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir - 1.57) * (robot.scale - 7.5);
                                        }
                                        dir = Math.atan2(robot.target.y - y, robot.target.x - x);
                                        projectiles.push({
                                            x: x,
                                            y: y,
                                            oldX: x,
                                            oldY: y,
                                            velx: 0,
                                            vely: 0,
                                            scale: 25,
                                            speed: 0.15,
                                            projType: "energy",
                                            dmg: robot.ability.dmg * dmgMulti,
                                            range: 800,
                                            dir: dir,
                                            color: "./images/bullets/energy_bullet.png",
                                            isAlly: isAlly,
                                            owner: robot,
                                            weaponOwner: {
                                                name: "Retribution",
                                                level: robot.level
                                            }
                                        });
                                    }
                                }
                            }
                        } else if (robot.ability.name == "Ultimate Defense") {
                            robot.turnDmgIntoDOT = true;
                            deltaTimer -= delta;
                            if (deltaTimer <= 0) {
                                let amount = robot.maxhealth * 0.025;
                                changeHealth(robot, {amount: Math.floor(amount)}, true);
                                deltaTimer = 100;
                            }
                        } else if (robot.ability.name == "Full Action") {
                            robot.builtInDefensePoints = robot.name == "Teal Circle" ? 200 : 60;
                        } else if (robot.ability.name == "Dragon Flight") {
                            robot.builtInDefensePoints = 900;
                            robot.ABILITYSPEEDMULTI = 3;
                            robot.scale = Math.min(robot.scale + (0.08 * delta), robot.oldScale * 2);
                            robot.deltaTimer -= delta;
                            if (robot.deltaTimer <= 0) {
                                robot.deltaTimer = 50;
                                for (let asdasd = 0; asdasd < 2; asdasd++) projectiles.push({
                                    x: robot.x,
                                    y: robot.y,
                                    oldX: robot.x,
                                    oldY: robot.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 25,
                                    speed: 0.15,
                                    avoidBuildings: true,
                                    dmg: robot.ability.dmg,
                                    range: 1200,
                                    dir: robot.dir + getRandomOffset(5) * (Math.random() < .5 ? -1 : 1),
                                    color: "#ff0000",
                                    isAlly: players[i].isAlly,
                                    dotEffect: {
                                        name: "dot",
                                        last: 5e3,
                                        dmg: robot.ability.dotDamage,
                                        owner: robot
                                    },
                                    owner: robot,
                                    weaponOwner: {
                                        name: "Dragon Breathe",
                                        level: robot.level
                                    }
                                });
                            }
                        } else if (robot.ability.name == "Shield Regeneration") {
                            robot.shieldRegen = .1;
                        }
                        if (robot.abilityLast <= 0) {
                            robot.abilityLast = 0;
                            robot.abilityReload = robot.ability.reload;
                            if (robot.ability.name == "Retribution") {
                                if(robot.ability.name == "Paladin") {
                                    if(robot.shields[0] && robot.shields[0].health > 0) {
                                        let increase = Math.min(robot.shields[0].health / 50, 100e3);
                                        robot.maxhealth += increase;
                                        changeHealth(robot, {amount: increase * 10}, "HEAL AHAHAHAHHA");
                                    }
                                }
                                robot.shields = [];
                            }
                        }
                    }
                    if (robot.abilityReload && robot.abilityReload > 0) {
                        robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                        robot.abilityReload -= delta;
                        if (robot.abilityReload <= 0) {
                            robot.abilityReload = 0;
                            if (robot.ability.maxcharge) {
                                robot.ability.charges++;
                                robot.abilityReload = robot.ability.reload;
                            }
                        }
                    }
                }
                if (robot.health > (robot.maxhealth - robot.grayDamage)) {
                    robot.health = (robot.maxhealth - robot.grayDamage);
                }
                if (robot.health <= 0) {
                    robot.USED = true;
                    players[i].robotIndex++;
                    if (!players[i].robots[players[i].robotIndex]) {
                        players[i].robotIndex = -1;
                        let haveEnemyes = true;
                        for (let asdasd = 0; asdasd < players.length; asdasd++) {
                            let ROBOBTS = players[asdasd].robots;
                            if (!players[asdasd].isAlly && ROBOBTS.some(e => e && !e.USED)) {
                                haveEnemyes = false;
                                break;
                            }
                        }
                        if (haveEnemyes) {
                            document.getElementById("useAbility").style.display = "none";
                            document.getElementById("weaponThing").style.display = "none";
                            document.getElementById("healthBar").style.display = "none";
                            document.getElementById("chooseSlot").style.display = "block";
                            endGame(players[0], player.gameMode == 3 ? 5 : 3);
                        }
                    }
                }
            } else {
                if (document.getElementById("enemyradar" + i)) {
                    document.getElementById("enemyradar" + i).style.display = "none";
                }
            }
        }
    }
    function circleSquareCollision(circle, square, predict) {
        if(circle.effects && circle.effects.find(e => e.name == "phase shift")) {
            return false;
        }
        let Px = Math.max(square.x, Math.min(circle.x, square.x + square.width));
        let Py = Math.max(square.y, Math.min(circle.y, square.y + square.height));
        let distance = Math.hypot(circle.x - Px, circle.y - Py);
        if (distance <= circle.scale && !predict) {
            return true;
        } else if (predict) {
            let velx = circle.x * 2 - circle.lastX;
            let vely = circle.y * 2 - circle.lastY;
            let d = Math.hypot(circle.y - vely, circle.x - velx);
            let Px = Math.max(square.x, Math.min(circle.x, square.x + square.width));
            let Py = Math.max(square.y, Math.min(circle.y, square.y + square.height));
            for (let i = 1; i <= 20; i++) {
                let div = (d / 20) * i;
                if (Math.hypot(circle.y - Py, circle.x - Px) + div <= circle.scale + 20) {
                    return true;
                }
            }
            if (circle.x >= square.x && circle.x <= square.x + square.width) {
                if (circle.y >= square.y && circle.y <= square.y + square.height) {
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }
    function isOnScreen(x, y, s) {
        return (x + s >= 0 && x - s <= maxScreen.x && y + s >= 0 && y - s <= maxScreen.y);
    }
    function updateBuildingObj(obj, delta) {
        if (obj.name == "beacon" && !obj.isHAVEON) {
            if (obj.ALLYPOINTS < 5e3) obj.ALLYPOINTS = Math.max(obj.ALLYPOINTS - delta * .25, 0);
            if (obj.ENEMYPOINTS < 5e3) obj.ENEMYPOINTS = Math.max(obj.ENEMYPOINTS - delta * .25, 0);
        }
        if (obj.name == "beacon") {
            if (obj.LASTLAST == null) obj.LASTLAST = 0;
            if (Date.now() - obj.LASTLAST >= 200) {
                obj.LASTLAST = Date.now();
                if (obj.ENEMYPOINTS >= 5e3) {
                    beaconPoints.enemy = Math.min(beaconPoints.enemy + 1, 3500);
                }
                if (obj.ALLYPOINTS >= 5e3) {
                    beaconPoints.ally = Math.min(beaconPoints.ally + 1, 3500);
                }
            }
        }
        obj.isHAVEON = false;
        if(obj.name == "beacon") {
            BEACONS.push(obj);
        }
        if(!obj.name.includes("col")) {
            ACTUALBUILDINGSTOTOUCH.push(obj);
        }
    }
    var BEACONS = [];
    var ACTUALBUILDINGSTOTOUCH = [];
    function renderBuildings(delta) {
        BEACONS = [];
        ACTUALBUILDINGSTOTOUCH = [];
        document.getElementById("gameDataThing").innerHTML = "";
        ctx.globalAlpha = 1;
        for (let i = 0; i < buildings.length; i++) {
            let obj = buildings[i];
            if (obj && (obj.name == "wall rect" || (obj.name == "beacon"))) {
                ctx.save();
                ctx.translate(obj.x - offset.x, obj.y - offset.y);
                if (obj.name == "beacon") {
                    if (obj.ALLYPOINTS == null) obj.ALLYPOINTS = 0;
                    if (obj.ENEMYPOINTS == null) obj.ENEMYPOINTS = 0;
                    let color = obj.ENEMYPOINTS >= 5000 ? "#f00" : obj.ALLYPOINTS >= 5000 ? "#00f" : "#fff";
                    renderCircle(0, 0, 35, ctx, false, false, "#808080", "#000");
                    renderCircle(0, 0, 20, ctx, true, false, color, "#000");
                    let color2 = obj.ENEMYPOINTS >= 5000 ? "rgb(255, 0, 0" : obj.ALLYPOINTS >= 5000 ? "rgb(0, 0, 255" : "rgb(255, 255, 255";
                    renderCircle(0, 0, 400, ctx, false, true, null, color2 + ", 0.55)", 14);
                    ctx.lineWidth = 14;
                    let multi = 1;
                    if (obj.ENEMYPOINTS > obj.ALLYPOINTS) {
                        color2 = "rgb(255, 0, 0";
                        multi = (obj.ENEMYPOINTS / 5e3);
                    } else {
                        color2 = "rgb(0, 0, 255";
                        multi = (obj.ALLYPOINTS / 5e3);
                    }
                    ctx.strokeStyle = color2 + ", 0.55)";
                    ctx.beginPath();
                    ctx.arc(0, 0, 400, 0, (Math.PI * 2) * multi);
                    ctx.stroke();
                    ctx.translate(0, 35);
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.translate(0, -70);
                    ctx.rotate(Math.PI)
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.save();
                    ctx.translate(35, -35);
                    ctx.rotate(-Math.PI + 1.57);
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.restore();
                    ctx.save();
                    ctx.translate(-35, -35);
                    ctx.rotate(-Math.PI - 1.57);
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.restore();
                } else if (obj.name == "wall rect") {
                    ctx.fillStyle = "#808080";
                    ctx.fillRect(0, 0, obj.width, obj.height);
                    ctx.fillStyle = "#969595";
                    ctx.fillRect(20, 20, obj.width - 40, obj.height - 40);
                }
                ctx.restore();
            }
            updateBuildingObj(obj, delta);
        }
    }
    var LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function updateBuilding() {
        let beaconIndexx = 0;
        for(let i = 0; i < BEACONS.length; i++) {
            let obj = BEACONS[i];
            let backgroundcolor = "#fff";
            let height = 1;
            let textColor = "#000";
            if (obj.ENEMYPOINTS > obj.ALLYPOINTS) {
                backgroundcolor = "#f00";
                height = obj.ENEMYPOINTS / 5e3;
            } else {
                backgroundcolor = "#00f";
                height = obj.ALLYPOINTS / 5e3;
                if (height > .5) {
                    textColor = "#fff";
                }
            }
            document.getElementById("gameDataThing").innerHTML += `
            <div style="position: absolute; top: ${60 * beaconIndexx}px; right: 18px; border-radius: 100%; width: 50px; height: 50px; background-color: #fff; overflow: hidden;">
            <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: ${height * 100}%; background-color: ${backgroundcolor};">
            </div>
            <div style="position: absolute; height: 100%; width: 100%; top: 0px; left: 0px; color: ${textColor};">
            <div style="height: 100%; width: 100%; text-align: center; font-size: 35px;">${LETTERS[beaconIndexx]}</div>
            </div>
            </div>
            `;
            beaconIndexx++;
        }
        document.getElementById("gameDataThing").innerHTML += `
        <div style="position: absolute; border-radius: 12px; top: 0px; right: 0px; width: 12px; height: ${(beaconIndexx * 60) - 10}px; background-color: #fff; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: ${(beaconPoints.ally / 3500) * 50}%; background-color: #00f;">
        </div>
        <div style="position: absolute; bottom: 0px; left: 0px; width: 100%; height: ${(beaconPoints.enemy / 3500) * 50}%; background-color: #f00;">
        </div>
        </div>
        `;
        if (beaconPoints.enemy >= 3500) {
            beaconPoints.enemy = 0;
            beaconPoints.ally = 0;
            document.getElementById("useAbility").style.display = "none";
            document.getElementById("weaponThing").style.display = "none";
            document.getElementById("healthBar").style.display = "none";
            document.getElementById("chooseSlot").style.display = "block";
            endGame(players[0], .5);
        } else if (beaconPoints.ally >= 3500) {
            beaconPoints.enemy = 0;
            beaconPoints.ally = 0;
            document.getElementById("useAbility").style.display = "none";
            document.getElementById("weaponThing").style.display = "none";
            document.getElementById("healthBar").style.display = "none";
            document.getElementById("chooseSlot").style.display = "block";
            endGame(players[0], 3);
        }
    }//18
    function levelToMKColor(level) {
        if(level == 18) {
            return "000";
        }else if(level == 17) {
            return "ffa500";
        }else if(level == 16) {
            return "800080";
        }else if(level == 15) {
            return "f00";
        }else if(level == 14) {
            return "ffff00";
        }else if(level == 13) {
            return "0f0";
        }
        return "#f00";
    }
    function levelToMKText(level) {
        return "MK" + ((level-12)+1);
    }
    var fpsInfo = {
        count: 0,
        real: 0,
        last: Date.now()
    }
    function updateGame() {
        let delta = Date.now() - lastUpdate;
        lastUpdate = Date.now();
        fpsInfo.count++;
        if(Date.now() - fpsInfo.last >= 1e3) {
            fpsInfo.last = Date.now();
            fpsInfo.real = fpsInfo.count;
            fpsInfo.count = 0;
        }
        if (player.gameMode >= 0) {
            if (players[0].robotIndex == -1) {
                document.getElementById("LMAOLMAOLMAOLMAO").innerHTML = "";
                offset = {
                    x: (mapInfo.x / 2) - maxScreen.x / 2,
                    y: (mapInfo.y / 2) - maxScreen.y / 2
                };
            } else {
                offset = {
                    x: (players[0].robots[players[0].robotIndex].x) - maxScreen.x / 2,
                    y: (players[0].robots[players[0].robotIndex].y) - maxScreen.y / 2
                };
            }
            renderBackground(ctx);
            renderBuildings(delta);
            renderBullets(ctx);
            renderPlayer(ctx);
            renderPlayers(ctx);
            renderEnemies(ctx);
            ctx.globalAlpha = 1;
            for (let i = 0; i < bombeffect.length; i++) {
                let effect = bombeffect[i];
                if (effect) {
                    effect.scale += (effect.color ? effect.color == "stamp" ? 1.5 : 3.84 : effect.doFaster ? 1.2 : 0.32) * delta;
                    let color = effect.color ? effect.color == "blue" ? "rgb(0, 0, 255, 0.3)" : effect.color == "stamp" ? "rgb(0, 0, 255, 0)" : "rgb(255, 255, 255, 0.3)" : "rgb(255, 0, 0, 0.3)";
                    let color2 = effect.color ? effect.color == "stamp" || effect.color == "blue" ? "rgb(0, 0, 255, 0.6)" : "rgb(255, 255, 255, 0.6)" : "rgb(255, 0, 0, 0.6)";
                    ctx.save();
                    ctx.translate((effect.location ? effect.location.x : effect.x) - offset.x, (effect.location ? effect.location.y : effect.y) - offset.y);
                    renderCircle(0, 0, effect.scale, ctx, false, false, color, color2, effect.color == "stamp" ? 12 : undefined);
                    ctx.restore();
                    if (effect.scale >= effect.maxScale) {
                        bombeffect.splice(i, 1);
                    }
                }
            }
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            for (let i = 0; i < text.length; i++) {
                let Text = text[i];
                ctx.fillStyle = Text.color;
                ctx.font = "50px Open Sans";
                ctx.fillText(abbreviateNumber(removeDecimals(Text.value)), Text.x - offset.x, Text.y - offset.y);
            }
            updatePlayer(delta);
            if (player.gameMode == 2 || player.gameMode == 3) updatePlayers(delta);
            ctx.globalAlpha = 1;
            if (players.length) {
                if (keysPressed[32] && players[0] && players[0].robots && players[0].robots.length) {
                    let robot = players[0].robots[players[0].robotIndex];
                    if (robot) {
                        for (let i = 0; i < robot.weapons.length; i++) {
                            let weapon = robot.weapons[i];
                            if ((weapon.name == "Hawk" || weapon.name == "Eagle") && weapon.canFire) {
                                let nearestEnemies = [];
                                if (player.gameMode == 2) {
                                    for (let t = 1; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[0].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                                nearestEnemies.push(player);
                                            }
                                        }
                                    }
                                    nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                } else {
                                    nearestEnemies = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range + e.scale).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                }
                                ctx.save();
                                ctx.lineWidth = 16;
                                ctx.strokeStyle = "rgb(255, 255, 255)";
                                ctx.beginPath();
                                for (let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    let enemy2 = nearestEnemies[ttt - 1];
                                    if (enemy) {
                                        if (ttt == 0) {
                                            ctx.moveTo(robot.x - offset.x, robot.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        } else {
                                            ctx.moveTo(enemy2.x - offset.x, enemy2.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        }
                                    }
                                }
                                ctx.stroke();
                                ctx.restore();
                                break;
                            }
                        }
                    }
                }
                for (let tttt = 1; tttt < players.length; tttt++) {
                    let robot = players[tttt].robots[players[tttt].robotIndex];
                    if (robot && robot.doFireWeapons) {
                        for (let i = 0; i < robot.weapons.length; i++) {
                            let weapon = robot.weapons[i];
                            if ((weapon.name == "Hawk" || weapon.name == "Eagle") && weapon.canFire) {
                                let nearestEnemies = [];
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[tttt].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                            nearestEnemies.push(player);
                                        }
                                    }
                                }
                                nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                ctx.save();
                                ctx.lineWidth = 16;
                                ctx.strokeStyle = players[tttt].isAlly ? "#fff" : "rgb(255, 0, 0)";
                                ctx.beginPath();
                                for (let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    let enemy2 = nearestEnemies[ttt - 1];
                                    if (enemy) {
                                        if (ttt == 0) {
                                            ctx.moveTo(robot.x - offset.x, robot.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        } else {
                                            ctx.moveTo(enemy2.x - offset.x, enemy2.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        }
                                    }
                                }
                                ctx.stroke();
                                ctx.restore();
                                break;
                            }
                        }
                    }
                }
            }
            if (player.gameMode == 2) updateBuilding(delta);
            updateBullets(delta);
            for (let i = 0; i < text.length; i++) {
                let Text = text[i];
                if (Text) {
                    Text.life -= delta;
                    Text.x += Math.cos(Text.dir) * 2;
                    Text.y += Math.sin(Text.dir) * 2;
                    if (Text.life <= 0) {
                        text.splice(i, 1);
                    }
                }
            }
            for (let i = 0; i < shieldEffects.length; i++) {
                let effect = shieldEffects[i];
                if (effect) {
                    if (effect.last == null) effect.last = Date.now();
                    ctx.save();
                    ctx.translate(effect.location.x - offset.x, effect.location.y - offset.y);
                    ctx.rotate(effect.dir - Math.PI / 8);
                    ctx.lineWidth = 12;
                    ctx.strokeStyle = effect.type == "energy" ? "#0000ff" : effect.type == "purple" ? "#800080" : "#ffff00";
                    ctx.beginPath();
                    ctx.arc(0, 0, effect.scale, 0, Math.PI / 4);
                    ctx.stroke();
                    ctx.restore();
                    if (Date.now() - effect.last >= 100) {
                        shieldEffects.splice(i, 1);
                    }
                }
            }
            if (player.gameMode == 0 || player.gameMode == 1) {
                updateEnemies(delta);
            }
            if (players[0] && players[0].robotIndex >= 0 || player.gameMode == 2) gameTimePlayed += delta;
            if (gameTimePlayed <= 60e3) {
                document.getElementById("timePlayed").innerHTML = `${player.gameMode == 3 && players[0] ? `Kills: ${(players[0].kills || 0)} | ` : player.gameMode == 0 ? `Wave: ${extermination.waveIndex+1} | ` : ""}${fpsInfo.real} | 0:${gameTimePlayed <= 10e3 ? "0" : ""}${removeDecimals(gameTimePlayed / 1000)}`;
            } else {
                let value = (gameTimePlayed / 1000) / 60;
                value = value.toString().split(".");
                let minutes = value[0];
                let seconds = parseFloat("0." + value[1]) * 60;
                document.getElementById("timePlayed").innerHTML = `${player.gameMode == 3 && players[0] ? `Kills: ${(players[0].kills || 0)} | ` : player.gameMode == 0 ? `Wave: ${extermination.waveIndex+1} | ` : ""}${fpsInfo.real} | ${minutes}:${seconds <= 10 ? "0" : ""}${removeDecimals(seconds)}`;
            }
            ctx.fillStyle = "rgb(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
            document.getElementById("LOGGER").innerHTML = "";
            for(let i = 0; i < KILLLOGS.length; i++) {
                let log = KILLLOGS[i];
                if(log.weapon && log.weapon.level) {
                    document.getElementById("LOGGER").innerHTML += `
                    <div>
                    <span style="color: ${log.attacker == "player" ? "#0f0" : "#fff"};">${log.attacker}</span> <span style="color: ${log.weapon.level >= 13 ? `#fff` : `#000`};">[${log.weapon.name}${log.weapon.level >= 13 ? ` <span style="color: #${levelToMKColor(log.weapon.level)}">${levelToMKText(log.weapon.level)}</span>` : ""}]</span> <span style="color: #fff;">${log.victim}</span>
                    </div>
                    `;
                }
            }
        } else {
            document.getElementById("LOGGER").innerHTML = "";
            document.getElementById("abilityCharges").innerHTML = "";
            document.getElementById("shields").innerHTML = "";
            document.getElementById("LMAOLMAOLMAOLMAO").innerHTML = "";
            document.getElementById("gameDataThing").innerHTML = "";
            document.getElementById("timePlayed").innerHTML = "";
            ctx.clearRect(0, 0, maxScreen.x, maxScreen.y);
            ctx.fillStyle = "rgb(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
        }
        window.requestAnimationFrame(updateGame);
    }
    window.requestAnimationFrame(updateGame);
}());