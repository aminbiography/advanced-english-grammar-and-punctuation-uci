const grammarData = {
  tenses: {
    Past: {
      Simple: {
        name: "Simple Past",
        coreFunction: "Completed action at a definite past time.",
        verbPhrase: "Subject + past tense verb",
        sentencePattern: "Subject + past tense verb + (object/complement) + (time/place) + (optional second clause)",
        example: "I documented the results yesterday."
      },
      Progressive: {
        name: "Past Progressive",
        coreFunction: "Action in progress at a specific past time.",
        verbPhrase: "Subject + was/were + V-ing",
        sentencePattern: "Subject + was/were + V-ing + (object/complement) + (time/place) + (optional second clause)",
        example: "We were updating the system at noon."
      },
      Perfect: {
        name: "Past Perfect",
        coreFunction: "Completed before another past action.",
        verbPhrase: "Subject + had + V3",
        sentencePattern: "Subject + had + V3 + (object/complement) + (before/when/by + past time or clause)",
        example: "They had finished the report before the deadline."
      },
      "Perfect Progressive": {
        name: "Past Perfect Progressive",
        coreFunction: "Duration before a past point.",
        verbPhrase: "Subject + had been + V-ing",
        sentencePattern: "Subject + had been + V-ing + (object/complement) + (for/since) + (until/by + past point)",
        example: "I had been waiting for two hours before the call started."
      }
    },
    Present: {
      Simple: {
        name: "Simple Present",
        coreFunction: "Facts, routines, stative conditions.",
        verbPhrase: "Subject + base verb (add -s/-es for third-person singular)",
        sentencePattern: "Subject + base verb + (object/complement) + (frequency/condition) + (optional second clause)",
        example: "The program runs automatically."
      },
      Progressive: {
        name: "Present Progressive",
        coreFunction: "Happening now or temporary action.",
        verbPhrase: "Subject + am/is/are + V-ing",
        sentencePattern: "Subject + am/is/are + V-ing + (object/complement) + (now/currently/this week) + (optional second clause)",
        example: "I am working on the proposal now."
      },
      Perfect: {
        name: "Present Perfect",
        coreFunction: "Past with present relevance.",
        verbPhrase: "Subject + have/has + V3",
        sentencePattern: "Subject + have/has + V3 + (object/complement) + (already/just/yet) or (time-to-now marker)",
        example: "We have launched the new feature."
      },
      "Perfect Progressive": {
        name: "Present Perfect Progressive",
        coreFunction: "Duration up to now.",
        verbPhrase: "Subject + have/has been + V-ing",
        sentencePattern: "Subject + have/has been + V-ing + (object/complement) + (for/since) + (up to now)",
        example: "She has been leading the team since last year."
      }
    },
    Future: {
      Simple: {
        name: "Simple Future",
        coreFunction: "Decisions, promises, predictions, or plans.",
        verbPhrase: "Subject + will + base verb / am-is-are going to + base verb",
        sentencePattern: "Subject + will + base verb + (object/complement) + (future time) + (optional second clause)",
        example: "I will send the invoice tomorrow."
      },
      Progressive: {
        name: "Future Progressive",
        coreFunction: "Ongoing action at a future time.",
        verbPhrase: "Subject + will be + V-ing",
        sentencePattern: "Subject + will be + V-ing + (object/complement) + (during/at + future time) + (optional second clause)",
        example: "He will be traveling all day Tuesday."
      },
      Perfect: {
        name: "Future Perfect",
        coreFunction: "Completed before a future point.",
        verbPhrase: "Subject + will have + V3",
        sentencePattern: "Subject + will have + V3 + (object/complement) + (by/before + future time or clause)",
        example: "I will have completed the tasks by Friday."
      },
      "Perfect Progressive": {
        name: "Future Perfect Progressive",
        coreFunction: "Duration up to a future point.",
        verbPhrase: "Subject + will have been + V-ing",
        sentencePattern: "Subject + will have been + V-ing + (object/complement) + (for/since) + (by + future point)",
        example: "By June, I will have been working here for a year."
      }
    }
  },
  clauses: {
    independent: [
      "Adverb Clauses",
      "Time",
      "Cause",
      "Condition",
      "Reduced Clauses",
      "V-ing",
      "Having + V3"
    ],
    dependent: ["Time", "Cause", "Contrast", "Condition"]
  },
  punctuation: {
    box1: ["Comma", "Semicolon (;)"],
    box2: ["Comma", "Lists, clauses, FANBOYS"],
    box3: ["Colon", "Introduce list"],
    box4: ["Period", "End sentence"]
  },
  conjunctions: {
    fanboys: ["For", "And", "Nor", "But", "Or", "Yet", "So"],
    subordinating: ["because", "if"]
  },
  transitions: {
    transitions1: ["Addition", "In addition, Moreover"],
    transitions2: ["Contrast", "In contrast"],
    contrast: ["However,", "In contrast"],
    causeEffect: ["Therefore, As a result", "Therefore", "As a result"],
    example: ["For example, Such as", "For example,", "Such as"]
  }
};
