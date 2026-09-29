export type Block =
  | { t: "p"; text: string }
  | { t: "h"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; text: string }
  | { t: "code"; text: string };

export type Item = {
  id: string;
  step?: number;
  title: string;
  summary: string;
  tag?: string;
  optional?: boolean;
  milestone?: boolean;
  blocks: Block[];
};

export type Section = {
  id: string;
  label: string;
  title: string;
  kind: "main" | "side" | "reference";
  intro?: string;
  checkable: boolean;
  items: Item[];
};

export const roadmapMeta = {
  title: "AION2",
  subtitle: "Launch to Endgame Progression Roadmap",
  goal:
    "Reach Sanctuary / the later endgame progression as quickly and efficiently as possible while avoiding unnecessary Odyle Energy spending, resource waste, and premature gear optimization.",
  source: "https://www.youtube.com/watch?v=9r4nDbBxRxk",
  discord: "validss",
};

export const sections: Section[] = [
  {
    id: "first-days",
    label: "First Days",
    title: "1 — First Days",
    kind: "main",
    checkable: true,
    intro: "What to prioritize immediately after launch.",
    items: [
      {
        id: "s1",
        step: 1,
        title: "Create Your Main + 3 Alts",
        summary: "1 main character and 3 alts for resource funneling.",
        blocks: [
          { t: "p", text: "Create:" },
          { t: "ul", items: ["1 Main character", "3 Alt characters"] },
          {
            t: "p",
            text:
              "The purpose of the alts is to generate additional materials, dungeon rewards, Kina, and other resources that can eventually be funneled into your main.",
          },
        ],
      },
      {
        id: "s2",
        step: 2,
        title: "Level All Characters to Level 22",
        summary: "Main and all three alts to Lv. 22.",
        tag: "Lv. 22",
        blocks: [
          { t: "p", text: "Get:" },
          { t: "ul", items: ["Main → Lv. 22", "Alt 1 → Lv. 22", "Alt 2 → Lv. 22", "Alt 3 → Lv. 22"] },
          { t: "p", text: "After all four characters reach Lv. 22, continue with the next step." },
        ],
      },
      {
        id: "s3",
        step: 3,
        title: "Push Your Main to Level 45",
        summary: "Unlocks daily recharge tickets for content such as Nightmares.",
        tag: "Lv. 45",
        milestone: true,
        blocks: [
          { t: "p", text: "Prioritize getting your main character to Lv. 45." },
          {
            t: "note",
            text:
              "Why Lv. 45 matters: Reaching Lv. 45 allows you to obtain the daily recharge tickets for certain content, such as Nightmares, etc.",
          },
        ],
      },
      {
        id: "s4",
        step: 4,
        title: "Complete Your Duty Quests",
        summary: "5 Duty Quests per day — pick rewards you actually need.",
        tag: "Daily",
        blocks: [
          { t: "p", text: "You can complete 5 Duty Quests per day." },
          { t: "p", text: "Prioritize useful rewards such as:" },
          { t: "ul", items: ["Keys", "Pet shards", "Enhancement stones", "Other progression materials"] },
          { t: "p", text: "See the Side Content section for more information." },
        ],
      },
      {
        id: "s5",
        step: 5,
        title: "Collect Abyss Feathers",
        summary: "Collect feathers in the Abyss whenever possible.",
        blocks: [
          { t: "p", text: "Collect the feathers in the Abyss whenever possible." },
          { t: "note", text: "Try to do this early, before the areas become heavily populated." },
        ],
      },
      {
        id: "s6",
        step: 6,
        title: "Finish Leveling All Alts to Lv. 45",
        summary: "All characters at Lv. 45 can recharge tickets for certain content.",
        tag: "Lv. 45",
        blocks: [
          { t: "p", text: "Once your main reaches Lv. 45, finish leveling:" },
          { t: "ul", items: ["Alt 1 → Lv. 45", "Alt 2 → Lv. 45", "Alt 3 → Lv. 45"] },
          {
            t: "p",
            text:
              "The purpose of getting all characters to Lv. 45 is to allow them to recharge tickets for certain content.",
          },
          {
            t: "p",
            text: "These additional runs can generate rewards that can eventually be funneled into your main character.",
          },
        ],
      },
    ],
  },
  {
    id: "early-progression",
    label: "Early Progression",
    title: "2 — Early Character Progression",
    kind: "main",
    checkable: true,
    intro: "Monolith, Strongholds & Sealed Dungeons.",
    items: [
      {
        id: "s7",
        step: 7,
        title: "Complete Your Map / Monolith Progression",
        summary: "Monolith progress is account-synced — do it on your main only.",
        blocks: [
          { t: "p", text: "Collect the feathers required for the Monolith." },
          {
            t: "note",
            text: "Important: Monolith progress is synced across your characters, so only do this on your main.",
          },
          { t: "p", text: "Also complete:" },
          { t: "ul", items: ["Strongholds", "Sealed Dungeons"] },
          {
            t: "p",
            text:
              "However, these can potentially be ignored temporarily on the enemy map if they only provide Abyss Points (AP).",
          },
          { t: "note", text: "Priority: Focus on activities that directly contribute to item-level progression first." },
        ],
      },
    ],
  },
  {
    id: "crafting",
    label: "Crafting",
    title: "3 — Crafting: Start Immediately",
    kind: "main",
    checkable: true,
    intro: "Crafting should be leveled passively from the beginning.",
    items: [
      {
        id: "s8",
        step: 8,
        title: "Spam the Cheapest Lv. 1 Craft While AFK",
        summary: "Level Handicrafting passively whenever you are AFK.",
        blocks: [
          { t: "p", text: "Whenever you are AFK, continuously craft the cheapest Lv. 1 Handicrafting recipe." },
          { t: "p", text: "The goal is to quickly level your crafting profession." },
          { t: "p", text: "Eventually, you want to reach: Professional Crafting." },
          { t: "p", text: "This will allow you to craft important materials and eventually your gear." },
        ],
      },
      {
        id: "s9",
        step: 9,
        title: "Reach at Least Professional Lv. 20",
        summary: "Unlocks Enhanced Thick Balaur Scale — you will need a lot of these.",
        tag: "Prof. Lv. 20",
        milestone: true,
        blocks: [
          { t: "p", text: "Once you reach Professional crafting, you can start crafting: Enhanced Thick Balaur Scale." },
          { t: "p", text: "You will need a large quantity of these later for crafting gear." },
          { t: "h", text: "Recommended progression" },
          {
            t: "code",
            text:
              "Lv. 1 Spam Crafting\n        ↓\nProfessional Crafting\n        ↓\nProfessional Lv. 20+\n        ↓\nCraft Enhanced Thick Balaur Scales\n        ↓\nLv. 25–30 Crafting\n        ↓\nBegin Crafting Gear",
          },
          {
            t: "note",
            text:
              "Important: Crafting success rate depends on your crafting level, so don't rush into expensive crafting before leveling the profession sufficiently.",
          },
        ],
      },
    ],
  },
  {
    id: "early-gear",
    label: "Early Gear",
    title: "4 — Early Gear & Upgrade Rules",
    kind: "main",
    checkable: true,
    items: [
      {
        id: "g-amulet",
        title: "Amulet & Belt — Baseline Gold Only",
        summary: "Upgrade to baseline Gold tier, then stop.",
        blocks: [
          { t: "p", text: "The materials you obtain through your progression can be used to upgrade your:" },
          { t: "ul", items: ["Amulet", "Belt"] },
          { t: "h", text: "Upgrade rule" },
          { t: "p", text: "Only upgrade them to the baseline Gold tier initially. Do not push them further immediately." },
          { t: "note", text: "Higher upgrades become significantly more expensive, so it is more efficient to wait." },
        ],
      },
      {
        id: "g-runes",
        title: "Clash Runes — Lv. 1 Only",
        summary: "They can break on a failed upgrade; you only want the item level.",
        blocks: [
          { t: "p", text: "You will obtain Clash Runes while leveling." },
          { t: "h", text: "Upgrade only to: Lv. 1" },
          { t: "p", text: "The reason is that these can potentially break when an upgrade fails." },
          { t: "p", text: "At this stage, you primarily want the item level they provide." },
          { t: "note", text: "Do not waste resources trying to fully optimize them early." },
        ],
      },
    ],
  },
  {
    id: "endgame",
    label: "Main Progression",
    title: "5 — Actual Progression Towards Endgame",
    kind: "main",
    checkable: true,
    intro:
      "Enter the later stages of dungeons while avoiding unnecessary Odyle Energy expenditure on early-level content.",
    items: [
      {
        id: "e-strategy",
        title: "Overall Strategy",
        summary: "Prioritize guaranteed, efficient item-level progression.",
        blocks: [
          {
            t: "p",
            text:
              "Your progression should prioritize activities that provide guaranteed or efficient item-level progression.",
          },
          { t: "p", text: "At the same time:" },
          {
            t: "ul",
            items: [
              "Preserve your Odyle Energy.",
              "Use your alts to farm lower-level content.",
              "Funnel materials and Kina from your alts into your main.",
              "Use your main to craft the important gear.",
              "Avoid optimizing gear that you will replace shortly afterward.",
            ],
          },
          { t: "note", text: "Ultimate Goal: Reach Sanctuary as soon as possible." },
        ],
      },
      {
        id: "s10",
        step: 10,
        title: "Spend Energy on Vakron Sky Island",
        summary: "Open 3 boxes → Selector Chest → pick Chestplate.",
        blocks: [
          { t: "p", text: "You can spend Odyle Energy on Vakron Sky Island exploration." },
          { t: "p", text: "The objective is to open 3 boxes. These provide a Selector Chest." },
          { t: "h", text: "Selector Chest Priority" },
          { t: "p", text: "Select: Chestplate." },
          { t: "p", text: "This provides an important early item-level increase." },
        ],
      },
      {
        id: "e-tiers",
        title: "Progress Through the Crafting Tiers",
        summary: "Final crafting level requires a Golden Craft Item.",
        blocks: [
          { t: "p", text: "Crafting requires progressing through the tiers step-by-step." },
          { t: "p", text: "You will eventually reach the final crafting level, which requires a Golden Craft Item." },
          { t: "h", text: "Golden Craft Item" },
          { t: "p", text: "This item may be obtainable from the market from other players." },
          { t: "p", text: "If the price is approximately 4 million Kina or less, it may be worth purchasing rather than trying to obtain it yourself." },
          { t: "p", text: "The alternative of crafting it step-by-step involves a significant amount of RNG." },
        ],
      },
      {
        id: "e-extra-mats",
        title: "What to Do With Extra Crafting Materials",
        summary: "Do not discard extras — Supply Requests and Marketplace.",
        blocks: [
          { t: "p", text: "When crafting, you will obtain various extra materials/items. Do not automatically discard them." },
          { t: "p", text: "You can:" },
          {
            t: "ul",
            items: [
              "Save them for Supply Requests",
              "List them on the Marketplace",
              "Sell them to players who need them for Supply Requests",
            ],
          },
        ],
      },
      {
        id: "e-first-crafts",
        title: "First Crafting Priorities",
        summary: "Necklace, earrings, rings, weapon — item level, not perfection.",
        blocks: [
          { t: "p", text: "Your initial crafting priority should be:" },
          { t: "ol", items: ["1× Necklace", "2× Earrings", "2× Rings", "Weapon"] },
          { t: "p", text: "Do not waste resources trying to perfectly optimize these items immediately." },
          {
            t: "p",
            text:
              "The primary purpose of this gear is to push your item level high enough to access the next progression stage.",
          },
        ],
      },
      {
        id: "e-conquest2",
        title: "Reach the Second Stage of Conquest",
        summary: "First major farming goal — chance at Blue Arcanas.",
        milestone: true,
        blocks: [
          {
            t: "p",
            text:
              "Your first major farming goal is to obtain enough item level to enter the second stage of Conquest.",
          },
          { t: "p", text: "This stage gives you a chance to obtain:" },
          { t: "ul", items: ["Blue Arcanas", "Other useful materials"] },
          { t: "p", text: "This is the first instance where you should begin seriously farming content on your main character." },
          { t: "h", text: "Do NOT optimize your Arcana set yet" },
          { t: "p", text: "Do not try to obtain specific Arcana set bonuses at this stage. Do not spend excessive resources trying to create the perfect setup." },
          { t: "p", text: "Why? You will replace these pieces relatively soon." },
          { t: "note", text: "The goal is simply: get enough item level to continue progressing." },
        ],
      },
      {
        id: "e-manastones",
        title: "Intermediate Manastones → ~Lv. 11",
        summary: "Embed crafted and other gear for extra item level.",
        blocks: [
          { t: "p", text: "You can embed crafted gear and other gear pieces with Intermediate Manastones." },
          { t: "p", text: "Level these pieces up to approximately Lv. 11." },
          { t: "p", text: "This provides additional item level." },
        ],
      },
      {
        id: "e-bracelets",
        title: "Bracelets & Soulstone Tapping",
        summary: "Blue → Lv. 10, Gold → Lv. 11. Worth the investment.",
        blocks: [
          { t: "p", text: "During progression you will obtain:" },
          { t: "ul", items: ["1× Blue Bracelet", "1× Gold Bracelet"] },
          { t: "p", text: "These should be treated differently from temporary gear." },
          { t: "h", text: "Upgrade them to" },
          { t: "ul", items: ["Blue Bracelet → Lv. 10", "Gold Bracelet → Lv. 11"] },
          { t: "p", text: "You will not be replacing these anytime soon, making the investment worthwhile." },
          { t: "h", text: "Bracelet Soulstone Tapping" },
          { t: "p", text: "You can also tap the bracelets using Intermediate Soulstones. Aim for at least:" },
          { t: "ul", items: ["1 Blue line", "1 Green line"] },
        ],
      },
      {
        id: "e-temp-gear",
        title: "Temporary Gear Rule",
        summary: "Do not invest heavily into gear you will replace.",
        blocks: [
          { t: "p", text: "For blue or otherwise temporary gear that you know you will replace: do not invest heavily into it." },
          { t: "p", text: "Avoid:" },
          { t: "ul", items: ["Expensive Manastone upgrades", "Soulstone tapping", "Excessive enhancement"] },
          { t: "p", text: "Only invest if you genuinely need the additional item level. If necessary, you can:" },
          { t: "ul", items: ["Enhance up to around Lv. 3", "Use lesser Soulstones for tapping"] },
        ],
      },
      {
        id: "s11",
        step: 11,
        title: "Reach 2100 Item Level",
        summary: "Unlocks the next farming stage: Ferocious Horn Den.",
        tag: "2100 iLvl",
        milestone: true,
        blocks: [
          { t: "p", text: "Once you reach 2100 Item Level, your farming progression changes." },
          { t: "p", text: "You can now move to: Ferocious Horn Den." },
        ],
      },
      {
        id: "e-fhd-expl",
        title: "Ferocious Horn Den Exploration",
        summary: "Open 3 chests — but do NOT open the Selector Chest yet.",
        blocks: [
          { t: "p", text: "Go into Ferocious Horn Den Exploration." },
          { t: "note", text: "The reason is the same as the previous exploration: efficiently obtain additional item-level progression through the exploration rewards." },
          { t: "p", text: "Open 3 chests to obtain the relevant Selector Chest." },
          { t: "h", text: "IMPORTANT" },
          { t: "p", text: "Do NOT open the Selector Chest immediately." },
          {
            t: "p",
            text:
              "Wait until you have completed the relevant Conquest farming because your final selection depends on what gear you obtain from the dungeon.",
          },
        ],
      },
      {
        id: "e-fhd-conquest",
        title: "Ferocious Horn Den Conquest ×28",
        summary: "28 runs with 2× Reward Collection → 2 Tickets → craft a Guard.",
        blocks: [
          { t: "p", text: "Might have a different name on Global." },
          { t: "p", text: "Run: Ferocious Horn Den Conquest ×28." },
          { t: "p", text: "At the same time, use the 2× Reward Collection." },
          { t: "p", text: "The goal is to obtain the relevant pity reward containing a ticket." },
          { t: "h", text: "Obtain 2 Tickets" },
          { t: "p", text: "You want to obtain 2× Tickets. These allow you to craft a Guard." },
          { t: "p", text: "Guards can be relatively difficult to obtain, making this an important part of the progression." },
        ],
      },
      {
        id: "e-fhd-selector",
        title: "Open Your Exploration Selector Chest",
        summary: "After the 28 double-claimed runs — fill your missing slot.",
        blocks: [
          {
            t: "p",
            text:
              "Once you have completed the 28 double-claimed runs, you can finally open your Ferocious Horn Den Exploration chest.",
          },
          { t: "p", text: "Select the gear piece you are still missing." },
          { t: "h", text: "Priority (if you are still missing them)" },
          { t: "ol", items: ["Boots", "Gloves"] },
          { t: "p", text: "Otherwise, select whichever piece provides the most useful item-level upgrade." },
        ],
      },
      {
        id: "s12",
        step: 12,
        title: "Upgrade Your Weapon — Dark Dragon → Ebony",
        summary: "Push the weapon roughly two crafting tiers, then other gear.",
        blocks: [
          { t: "p", text: "After completing the Ferocious Horn Den progression, your focus shifts back toward crafting." },
          { t: "p", text: "Progress your weapon through the crafting tiers by spending the materials you have accumulated." },
          { t: "p", text: "Upgrade it approximately two tiers, reaching tiers currently referred to as:" },
          { t: "ul", items: ["Dark Dragon", "Ebony"] },
          { t: "note", text: "The names may be different on Global." },
          { t: "p", text: "After upgrading the weapon, begin doing the same with your other gear pieces." },
        ],
      },
      {
        id: "e-transcendence",
        title: "Endgame Transition — Transcendence",
        summary: "Begin Transcendence farming and real build investment.",
        milestone: true,
        blocks: [
          { t: "p", text: "Once you have:" },
          {
            t: "ul",
            items: [
              "Completed the relevant Conquest progression",
              "Upgraded your weapon",
              "Upgraded your other important gear",
              "Reached the required item level",
            ],
          },
          { t: "p", text: "you can transition into the true endgame progression: Transcendence." },
          { t: "p", text: "At this stage, begin farming Transcendence. Your goals become:" },
          {
            t: "ul",
            items: [
              "Obtain your proper Arcana setup",
              "Upgrade missing gear",
              "Craft higher-tier equipment",
              "Farm materials",
              "Farm Kina",
              "Continue funneling resources from your alts",
            ],
          },
          { t: "p", text: "At this point, you can begin investing significantly more into your final build." },
        ],
      },
      {
        id: "e-ludra",
        title: "Final Progression Goal — Ludra",
        summary: "The long-term endpoint of this progression path.",
        milestone: true,
        blocks: [
          {
            t: "p",
            text:
              "Continue progressing through Transcendence and the associated crafting/gear systems until you reach: Ludra.",
          },
          { t: "p", text: "This represents the long-term endpoint of this progression path." },
        ],
      },
      {
        id: "e-emergency",
        title: "Emergency Item-Level Checkpoints",
        summary: "Short on item level? Three options.",
        optional: true,
        blocks: [
          { t: "p", text: "If you ever find yourself short on item level at any point in the progression, you have several options." },
          { t: "h", text: "Option 1 — Drapunir Exploration" },
          { t: "p", text: "Return to the Drapunir Exploration Dungeon. Use it to obtain a higher-item-level gear piece." },
          { t: "h", text: "Option 2 — Enhance Existing Gear" },
          { t: "p", text: "Increase the enhancement level of your current equipment." },
          { t: "h", text: "Option 3 — Higher-Level Manastones" },
          { t: "p", text: "Replace your current Manastones with higher-level ones." },
          {
            t: "note",
            text:
              "General Rule: Do whatever is necessary to reach the next progression threshold, but avoid investing heavily into equipment that you know will be replaced shortly.",
          },
        ],
      },
    ],
  },
  {
    id: "side-content",
    label: "Side Content",
    title: "6 — Side Content (Also Important)",
    kind: "side",
    checkable: true,
    intro:
      "Side content should generally not interrupt your primary progression, but several activities provide valuable resources and should still be incorporated into your routine.",
    items: [
      {
        id: "sc-daily-dungeons",
        title: "Daily Dungeons / Nightmares / Ascension Trial",
        summary: "Consider waiting until the last day before reset.",
        optional: true,
        blocks: [
          { t: "p", text: "Activities include:" },
          { t: "ul", items: ["Daily Dungeons", "Nightmares", "Ascension Trial"] },
          { t: "h", text: "Recommended timing" },
          { t: "p", text: "Consider waiting until the last day before reset to complete these." },
          {
            t: "p",
            text:
              "The rewards can depend on your performance, so waiting allows you to become stronger and potentially obtain better rewards before the weekly/daily reset.",
          },
        ],
      },
      {
        id: "sc-supply",
        title: "Supply Requests",
        summary: "Uncapped AP, Enhancement Stones, consumes spare materials.",
        optional: true,
        blocks: [
          { t: "p", text: "Supply Requests are useful because:" },
          {
            t: "ul",
            items: [
              "AP from them is uncapped.",
              "They provide Enhancement Stones.",
              "They can consume materials/items you obtain through normal progression.",
            ],
          },
          { t: "h", text: "Dungeon Gear Requirement" },
          { t: "p", text: "If a Supply Request requires dungeon gear:" },
          {
            t: "ul",
            items: [
              "Option 1: Send an alt into the relevant dungeon and transfer the item to your main.",
              "Option 2: Purchase the required item from the Marketplace.",
            ],
          },
          { t: "h", text: "Material Priority" },
          { t: "p", text: "For materials, prioritize Refining Stones." },
          { t: "p", text: "Other materials may be:" },
          { t: "ul", items: ["Too expensive", "Needed later for crafting", "Better saved for your own progression"] },
          { t: "h", text: "Crafted Gear Requests" },
          { t: "p", text: "For crafted gear requirements, crafting the required item can be worthwhile, depending on the cost. Evaluate the material/Kina cost before committing." },
        ],
      },
      {
        id: "sc-shugo",
        title: "Shugo Festival",
        summary: "Server-bound keys — use on main, prioritize Daevanion Crystals.",
        optional: true,
        blocks: [
          { t: "p", text: "Shugo Festival Keys are server-bound. Use them on your main." },
          { t: "h", text: "Recommended timing" },
          { t: "p", text: "Do them:" },
          { t: "ul", items: ["After reaching your final level, or", "When your keys are approaching the maximum capacity."] },
          { t: "p", text: "This ensures the rewards are not wasted due to level restrictions." },
          { t: "h", text: "Shugo Festival Shop" },
          { t: "p", text: "Prioritize purchasing Daevanion Crystals. These provide a significant item-level increase." },
          { t: "note", text: "Priority: Empty out the Daevanion Crystals first." },
        ],
      },
      {
        id: "sc-gathering",
        title: "Gathering",
        summary: "Not a priority for fast progression.",
        optional: true,
        blocks: [
          { t: "p", text: "Gathering can be useful, but it is not a priority for fast progression." },
          { t: "p", text: "If your goal is to progress as quickly as possible: do not prioritize Gathering early." },
          { t: "p", text: "Gathering takes considerable time and can slow down your main progression." },
          { t: "h", text: "Alternative — Early Economy" },
          {
            t: "p",
            text:
              "If you do not care about maximizing progression speed, gathering can become an early-game money-making opportunity. You can sell gathered materials to players who want to skip gathering themselves.",
          },
          { t: "h", text: "Gathering Level Priority" },
          { t: "ol", items: ["Odyle", "Whatever material you are actively farming — most commonly Herbs → Potion Crafting"] },
        ],
      },
      {
        id: "sc-pets",
        title: "Pet Farming & Genus Insight",
        summary: "No item level, but real character power. Don't dump Kina early.",
        optional: true,
        blocks: [
          { t: "p", text: "Pet farming does not provide item level." },
          { t: "p", text: "Therefore: ignore it during the earliest stages if your only objective is fast progression." },
          { t: "p", text: "However, pets provide significant actual character power, so they become worthwhile when you have spare time." },
          { t: "h", text: "Genus Insight" },
          { t: "p", text: "Genus Insight requires a relatively large amount of Kina to set up properly." },
          { t: "p", text: "Therefore: do not immediately dump your Kina into Genus Insight." },
          { t: "p", text: "You will naturally obtain a large amount of shards through:" },
          { t: "ul", items: ["Duty Quests", "Cubes"] },
          { t: "p", text: "This should be enough to level your Genus Insight to approximately Lv. 10." },
        ],
      },
      {
        id: "sc-kina",
        title: "Daily Kina Cap — 1,000,000",
        summary: "Farm the cap daily; combine with pet farming.",
        tag: "Daily",
        blocks: [
          { t: "p", text: "There is a 1,000,000 Kina Daily Cap. You should aim to farm this out every day." },
          { t: "h", text: "Combine Kina Farming With Pet Farming" },
          {
            t: "p",
            text:
              "A good way to efficiently farm your daily Kina is to kill the monsters required for your pet farming at the same time. This allows you to progress both systems simultaneously.",
          },
          { t: "p", text: "You may also obtain additional materials while farming that can be:" },
          { t: "ul", items: ["Sold", "Saved", "Used for crafting"] },
        ],
      },
      {
        id: "sc-ap",
        title: "Abyss Point Cap",
        summary: "Accumulates over time — no need to force the cap.",
        optional: true,
        blocks: [
          { t: "p", text: "Abyss Points accumulate over time." },
          { t: "p", text: "You do not need to force yourself to hit the cap immediately. Simply obtain your Abyss Points naturally whenever you have time." },
          { t: "note", text: "This is lower priority than direct item-level progression." },
        ],
      },
      {
        id: "sc-soulbinding",
        title: "Soul Binding",
        summary: "No item level. Invest once you have crafted gear.",
        optional: true,
        blocks: [
          { t: "p", text: "Soul Binding can become a significant resource sink early on." },
          { t: "h", text: "Early Game Rule" },
          { t: "p", text: "Do not attempt to obtain perfect lines immediately." },
          { t: "p", text: "Soul Binding:" },
          { t: "ul", items: ["Does not provide item level.", "Does provide actual character power."] },
          { t: "p", text: "Therefore, you can still roll some lines if you want to improve your gameplay experience." },
          { t: "h", text: "When to Invest" },
          { t: "p", text: "Once you obtain your:" },
          { t: "ul", items: ["Crafted Weapon", "Crafted Earrings", "Crafted Necklace"] },
          { t: "p", text: "begin looking for at least 2 good lines on these important pieces." },
          { t: "p", text: "Avoid spending excessive resources perfecting temporary gear." },
        ],
      },
      {
        id: "sc-pvp",
        title: "PvP",
        summary: "Low priority at launch — points scale with enemy rank.",
        optional: true,
        blocks: [
          { t: "p", text: "PvP should be treated as a low priority during the initial progression." },
          { t: "p", text: "The points you receive depend on the rank of the enemy you kill." },
          { t: "p", text: "At launch, most players will still have relatively low ranks." },
          {
            t: "p",
            text:
              "Therefore, spending a significant amount of time grinding PvP immediately may not provide particularly valuable rewards.",
          },
          { t: "h", text: "What PvP Content to Do" },
          { t: "ul", items: ["Battlefield", "Siege", "World Bosses", "Abyss Corridors", "Other weekly/time-gated PvP events"] },
          { t: "p", text: "Complete these when appropriate, but do not let them interfere with your main progression." },
        ],
      },
      {
        id: "sc-abyss-shop",
        title: "Abyss Shop",
        summary: "Stigma Shards first — but reassess on Global.",
        optional: true,
        blocks: [
          { t: "p", text: "Initially, you can prioritize Stigma Shards over purchasing gear." },
          { t: "h", text: "Global Version Consideration" },
          {
            t: "p",
            text:
              "There are reports circulating that Global may not have traditional PvP gear in the same way, with some of these items potentially being converted into skins with owned-effect bonuses.",
          },
          { t: "note", text: "Exception: The Amulet may remain relevant." },
          { t: "p", text: "Because the Global implementation and pricing/stats matter, reassess the shop once the actual system is confirmed." },
          { t: "p", text: "Depending on the final implementation, it may be more efficient to spend your Abyss currency on something other than Stigma Shards." },
        ],
      },
      {
        id: "sc-nightmare-shop",
        title: "Nightmare Shop",
        summary: "Stigma Shards, but keep enough for the Colossus Statue.",
        optional: true,
        blocks: [
          { t: "p", text: "Prioritize Stigma Shards while maintaining enough currency to purchase the Colossus Statue as soon as possible." },
          {
            t: "note",
            text:
              "General Rule: Do not spend all your Nightmare currency on Stigma Shards if doing so prevents you from obtaining the Colossus Statue.",
          },
        ],
      },
      {
        id: "sc-passes",
        title: "Battle Passes",
        summary: "Odyle Energy Pass + Cosmetics Pass; energy pass also on an alt.",
        optional: true,
        blocks: [
          { t: "p", text: "At launch, the plan is to obtain:" },
          { t: "ol", items: ["Odyle Energy Pass", "Cosmetics Pass"] },
          { t: "h", text: "Main Character" },
          { t: "p", text: "At minimum, consider purchasing the basic versions of these passes on your main." },
          { t: "h", text: "Alt Characters" },
          { t: "p", text: "You may also want to purchase the Odyle Energy Pass on an alt." },
          { t: "p", text: "Why? Odyle Energy is one of the most valuable resources during early progression." },
          { t: "p", text: "Additional energy on an alt can generate additional resources that can eventually be funneled into your main." },
        ],
      },
      {
        id: "sc-duty",
        title: "Duty Quests",
        summary: "5 per day — choose rewards based on current needs.",
        tag: "Daily",
        blocks: [
          { t: "p", text: "You can complete 5 Duty Quests per day." },
          { t: "p", text: "Prioritize quests that provide materials useful for your current progression." },
          { t: "h", text: "Priority Examples" },
          { t: "ul", items: ["Keys", "Pet Shards", "Enhancement Stones", "Other progression materials"] },
          { t: "p", text: "Choose rewards based on what you currently need rather than blindly selecting the same reward every day." },
        ],
      },
      {
        id: "sc-scrolls",
        title: "Command Scrolls",
        summary: "12 PvE + 20 PvP weekly scrolls — buy them, complete later.",
        tag: "Weekly",
        blocks: [
          { t: "p", text: "There are weekly Command Scrolls available for:" },
          { t: "ul", items: ["PvE: 12 PvE Weekly Scrolls", "PvP: 20 PvP Weekly Scrolls"] },
          { t: "p", text: "Purchase these when possible." },
          {
            t: "p",
            text:
              "The important part is that you can complete them later, so there is little reason to leave these purchases unused if you have the resources.",
          },
        ],
      },
      {
        id: "sc-morph",
        title: "Substance Morph",
        summary: "Weekly Odyle Energy Stones — do these every week.",
        tag: "Weekly",
        blocks: [
          { t: "p", text: "Substance Morph allows you to craft Odyle Energy Stones. There is a weekly limit." },
          { t: "note", text: "Priority: Do these every week." },
          { t: "p", text: "Odyle Energy is extremely valuable during the early progression phase." },
        ],
      },
      {
        id: "sc-sub-shop",
        title: "Subscriber Shop",
        summary: "Check weekly for progression materials.",
        tag: "Weekly",
        blocks: [
          { t: "p", text: "The Subscriber Shop provides materials that can be purchased on a weekly basis." },
          { t: "note", text: "Priority: Check the Subscriber Shop every week and purchase relevant progression materials." },
        ],
      },
    ],
  },
];

export const priorities = [
  {
    level: "Highest Priority",
    tone: "high" as const,
    items: [
      "Level main to Lv. 45",
      "Level all alts to Lv. 45",
      "Complete 5 Duty Quests daily",
      "Farm daily Kina cap",
      "Progress crafting",
      "Preserve Odyle Energy",
      "Push item level",
      "Progress through Conquest",
      "Use alts to funnel resources to main",
      "Complete weekly Substance Morph",
      "Obtain relevant weekly Command Scrolls",
    ],
  },
  {
    level: "Medium Priority",
    tone: "mid" as const,
    items: [
      "Daily Dungeons",
      "Nightmares",
      "Ascension Trial",
      "Supply Requests",
      "Shugo Festival",
      "Abyss Points",
      "Pet farming",
      "Soul Binding",
      "Gathering",
      "Subscriber Shop",
      "Abyss Shop",
      "Nightmare Shop",
    ],
  },
  {
    level: "Low Priority During Early Progression",
    tone: "low" as const,
    items: [
      "Perfect Soul Binding",
      "Perfect Arcana sets",
      "Heavy investment into temporary gear",
      "Early PvP grinding",
      "Extensive Gathering",
      "Pet optimization",
      "Over-upgrading temporary equipment",
    ],
  },
];

export const coreFlow = `CREATE MAIN + 3 ALTS
        ↓
ALL → Lv. 22
        ↓
MAIN → Lv. 45
        ↓
ALTS → Lv. 45
        ↓
START DAILY TICKETS / ALT FUNNELING
        ↓
LEVEL CRAFTING WHILE AFK
        ↓
PROFESSIONAL CRAFTING
        ↓
CRAFT ENHANCED THICK BALAUR SCALES
        ↓
VAKRON SKY ISLAND
        ↓
3 BOXES → CHESTPLATE
        ↓
CRAFT
1 NECK
2 EARRINGS
2 RINGS
WEAPON
        ↓
REACH SECOND CONQUEST STAGE
        ↓
FARM BLUE ARCANAS FOR ITEM LEVEL
        ↓
INTERMEDIATE MANASTONES → ~Lv. 11
        ↓
UPGRADE BLUE + GOLD BRACELETS
        ↓
REACH 2100 ITEM LEVEL
        ↓
FEROCIOUS HORN DEN EXPLORATION
        ↓
3 BOXES → SAVE SELECTOR CHEST
        ↓
FEROCIOUS HORN DEN CONQUEST
        ↓
28 RUNS + 2× REWARD COLLECTION
        ↓
OBTAIN 2 TICKETS
        ↓
CRAFT GUARD
        ↓
OPEN EXPLORATION SELECTOR CHEST
        ↓
FILL MISSING GEAR
        ↓
UPGRADE WEAPON
        ↓
DARK DRAGON → EBONY
        ↓
UPGRADE OTHER GEAR
        ↓
HIGH ENOUGH ITEM LEVEL
        ↓
TRANSCENDENCE
        ↓
PROPER ARCANA FARMING
        ↓
CRAFT / UPGRADE REMAINING GEAR
        ↓
CONTINUE FARMING + ALT FUNNELING
        ↓
Sanctuary
        ↓
LUDRA`;

export const goldenRules = [
  { title: "Don't waste Odyle Energy.", text: "Save it for content that actually advances your progression." },
  { title: "Item level comes first.", text: "Early gear does not need to be perfect." },
  {
    title: "Don't optimize temporary gear.",
    text: "If you know you're replacing an item soon, keep investment to the minimum required to progress.",
  },
  { title: "Use your alts.", text: "Their purpose is to generate additional resources that can be funneled into your main." },
  { title: "Level crafting early.", text: "AFK crafting lets you progress the profession passively." },
  { title: "Don't chase perfect Arcanas early.", text: "Use early Arcanas primarily to increase item level." },
  {
    title: "Don't chase perfect Soul Binding early.",
    text: "Only start investing seriously once you have important crafted gear.",
  },
  {
    title: "Prioritize guaranteed progression.",
    text:
      "When choosing between content, favor activities that directly increase your ability to reach the next item-level threshold.",
  },
  {
    title: "Save resources for gear you will actually keep.",
    text: "Bracelets and later crafted gear deserve more investment than temporary blue pieces.",
  },
  {
    title: "The ultimate objective is Sanctuary → Ludra.",
    text:
      "Every early-game decision should be evaluated against one question: Does this help me reach the next major progression threshold faster, or am I spending resources on something I will replace soon?",
  },
];

export const allCheckableIds: string[] = sections
  .filter((s) => s.checkable)
  .flatMap((s) => s.items.map((i) => i.id));
