
/** Main Diagnostic Quiz Function **/
//

  var questions = [
    //

    {
      //1
      //
      //b1
      qType: "Section A: Comprehension & Summary",
      question: "What is the main idea of the passage?",
      choices: ["A) AI is negatively impacting all aspects of society.",
                "B) AI is transforming various sectors while also posing certain challenges.",
                "C) AI has been fully integrated into society with no challenges.",
                "D) AI’s progress is limited to virtual assistants like Siri and Alexa."],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q1-5.png",
      // content: "",
      explanation: "The correct answer is: 'B) AI is transforming various sectors while also posing certain challenges'.  This passage is a nuanced look at the pros and cons of the AI boom that is under way.  The final two sentences of the passage display even more evidence that B is correct: 'Undeniably, AI has a significant impact on society.  It is therefore essential to address its challenges and to keep harnessing its potential to ensure a balanced and beneficial future'."
    },
    {
      //2
      //
      //c2
      qType: "Section A: Comprehension & Summary",
      question: "In the context of the passage, what does the term '<u>ubiquitous</u>' mean?",
      choices: ["A) Unnecessary",
                "B) Rare",
                "C) Present everywhere",
                "D) Challenging"],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q1-5.png",
      // content: "",
      explanation: "The word 'ubiquitous' means 'present everywhere'.  Hence, the answer choice 'C) Present everywhere' is correct."
    },
    {
      //3
      //
      //b1
      qType: "Section A: Comprehension & Summary",
      question: "Based on the passage, why might AI systems trained on biased data pose a problem?",
      choices: ["A) They lead to more efficient decision-making.",
                "B) They can perpetuate and amplify societal biases.",
                "C) They are unable to process large amounts of data.",
                "D) They can only be used in specific industries."],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q1-5.png",
      // content: "",
      explanation: "The sentence in the passage that relays the correct answer is: 'For example, AI systems trained on biased data can perpetuate and even amplify these biases, leading to unfair treatment in hiring and law enforcement areas'.  Hence, the correct answer is: 'B) They can perpetuate and amplify societal biases'."
    },
    {
      //4
      //
      //a0
      qType: "Section A: Comprehension & Summary",
      question: "What does the phrase '<u>employment displacement</u>' mean in the context of the passage?",
      choices: ["A) Workers are losing their jobs due to automation.",
                "B) AI is creating new jobs in technology.",
                "C) AI is causing employees to be transferred within their workplace.",
                "D) AI is making work more enjoyable for people."],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q1-5.png",
      // content: "",
      explanation: "If an employee is displaced, he/she is replaced.  Hence, the correct answer is: 'A) Workers are losing their jobs due to automation'."
    },
    {
      //5
      //
      //b1
      qType: "Section A: Comprehension & Summary",
      question: "How does AI impact the healthcare sector, according to the passage?",
      choices: ["A) AI replaces doctors in diagnosing diseases.",
                "B) AI helps with disease detection and improves record-keeping accuracy.",
                "C) AI is primarily used for entertainment purposes.",
                "D) AI only helps in minor administrative tasks."],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q1-5.png",
      // content: "",
      explanation: "The sentence in the passage that relays the correct answer is: 'In healthcare, the accuracy and speed of disease detection as well as records and documentation are being enhanced by AI-powered tools'."
    },
    {
      //6
      //
      //c2
      qType: "Section A: Comprehension & Summary",
      question: "The bank has launched a new ______(6)______ that allows customers to transfer money between accounts more easily.",
      choices: ["A) loan",
                "B) balance",
                "C) service",
                "D) expense"],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "A bank launches a new 'C) service' that will allow its customers to transfer money between accounts more easily.  The answer choices 'loan', 'balance', and 'expense' don't make sense."
    },
    {
      //7
      //
      //d3
      qType: "Section A: Comprehension & Summary",
      question: "Every month, the bank sends out a ______(7)______ detailing all the transactions that have taken place within the account.",
      choices: [
                    "A) budget",
                    "B) loan",
                    "C) invoice",
                    "D) statement"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "An 'invoice' is a documented request for payment while a 'statement' is a document that details transactions.  The answer choices 'budget' and 'loan' don't make sense here.  Hence, the correct answer is: 'D) statement'."
    },
    {
      //8
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "Customers must ensure that their ______(8)______ matches the bank’s records to avoid discrepancies.",
      choices: [
                  "A) expense",
                  "B) balance",
                  "C) equity",
                  "D) liability"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "A customer's bank balance should match the bank's records of that balance to avoid discrepancies.  Hence, the correct answer is: 'B) balance'."
    },
    {
      //9
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "It is important for businesses to carefully track their ______(9)______, which refers to the total money they owe to suppliers and creditors.",
      choices: [
                "A) assets",
                "B) accounts receivable",
                "C) accounts payable",
                "D) profits"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "The correct answer is 'C) accounts payable' because that is the total money due to accounts of vendors and/or suppliers and/or creditors."
    },
    {
      //10
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "On the other hand, ______(10)______ is the money that is expected to come in from customers.",
      choices: [
                  "A) accounts payable",
                  "B) accounts receivable",
                  "C) budget",
                  "D) debt"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "A company has accounts that it 'receives' money through which are called 'B) accounts receivable'."
    },
    {
      //11
      //
      //c2
      qType: "Section A: Comprehension & Summary",
      question: "To maintain accurate records, accountants often create a ______(11)______, which provides a summary of the company’s financial position, including its assets, liabilities, and equity.",
      choices: [
                  "A) loan",
                  "B) statement",
                  "C) balance sheet",
                  "D) receipt"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "A 'balance sheet' is what an accountant creates to provide 'a summary of the company's financial position, including its assets, liabilities, and equity'.  Hence, the correct answer is 'C) balance sheet'."
    },
    {
      //12
      //
      //b1
      qType: "Section A: Comprehension & Summary",
      question: "Companies also need to ensure that their ______(12)______ is up to date, as it includes records of all financial transactions.",
      choices: [
                  "A) liability",
                  "B) ledger",
                  "C) revenue",
                  "D) profit"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "The correct answer is 'B) ledger' as this is a book that 'includes records of all financial transactions'."
    },
    {
      //13
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "If the company is running low on funds, it might need to take out a ______(13)______ to cover its expenses.",
      choices: [
                    "A) statement",
                    "B) expense",
                    "C) budget",
                    "D) loan"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "If a company is running low on funds, it needs to raise capital (or make more money) somehow and this may be a loan.  Hence, the correct answer is 'D) loan'."
    },
    {
      //14
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "However, this will increase their ______(14)______ as they will have more money to repay.",
      choices: [
                  "A) assets",
                  "B) liabilities",
                  "C) balance",
                  "D) revenue"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "A company's 'assets' or 'balance' or 'revenue' all go down when they have to borrow money.  The only answer choice that makes sense here because it increases if a company takes out a loan is the correct answer: 'B) liabilities'."
    },
    {
      //15
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "When businesses calculate their profits, they must subtract their ______(15)______, which include costs like rent, salaries, and utilities, from their revenue.",
      choices: [
                  "A) expenses",
                  "B) assets",
                  "C) equity",
                  "D) statements"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q6-15.png",
      // content: "",
      explanation: "The answer choice 'A) expenses' is correct here since they include 'costs like rent, salaries, and utilities...'."
    },
    {
      //16
      //I want to try to have a clickable link in this section in the 'content' variable for q16-25...
      //
      qType: "Section A: Comprehension & Summary",
      question: "Who is the author of the book?",
      choices: [
        "A) Khadijat Abubakar Jalli",
        "B) Usman Mohammed",
        "C) Chimamanda Ngozie Adichie",
        "D) OlaJumoke Rachael Babatunde"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The title page relays the author of the book: 'A) Khadijat Abubakar Jalli'."
    },
    {
      //17
      //
      //c2
      qType: "Section A: Comprehension & Summary",
      question: "Omar was admitted to study law at which university?",
      choices: [
        "A) University of Lagos",
        "B) Obafemi Awolowo University",
        "C) Ahmadu Bello University",
        "D) University of Port Harcourt"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The passage in the text that relays the correct answer to this question is as follows: 'My son was given admission to study Law at the Kongo Campus of Ahmadu Bello University, Zaria' on page 4.  Hence, the correct answer is 'C) Ahmadu Bello University'."
    },
    {
      //18
      //
      //a0
      qType: "Section A: Comprehension & Summary",
      question: "Why did Bint's parents encourage her to learn French in primary school?",
      choices: [
        "A) They believed that learning a new language would be easier at a young age.",
        "B) They wanted her to attend a university in Congo.",
        "C) Bint aspired to become a French teacher.",
        "D) They lived in a bilingual community where both English and French were spoken."
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The passage in the text that relays the correct answer to this question is on page 1: 'French was an optional subject even at this level of primary school education.  We however encouraged her to take the option since we believed that language acquisition at an early age came relatively easy and with minimal effort'.  Hence, the correct answer is 'A) They believed that learning a new language would be easier at a young age'."
    },
    {
      //19
      //
      //a0
      qType: "Section A: Comprehension & Summary",
      question: "Which of the following best summarises the lesson Ummi learned from her grandmother?",
      choices: [
        "A) It is hard to forget habits learned in childhood.",
        "B) It is unwise to rely on only one source of income.",
        "C) One should always prioritise themselves when making decisions.",
        "D) The future holds better things for those who do not give up."
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The passage in the text that relays the correct answer to this question is as follows: 'My own grandmother used to tell us when we were young that <i>what you teach a child is like writing on a rock and when dried, it would be difficult to erase</i>'.  Hence, the correct answer is 'A) It is hard to forget habits learned in childhood' on pages 2-3."
    },
    {
      //20
      //
      //
      qType: "Section A: Comprehension & Summary",
      question: "Who is Bint’s immediate elder sister?",
      choices: [
        "A) Teemah",
        "B) Jamila",
        "C) Omar",
        "D) Sekinat"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The passage in the text that relays the correct answer to this question is on page 3: '...I wedged myself between Bint and Jamila, her immediate elder sister'.  Hence, the correct answer is 'B) Jamila'."
    },
    {
      //21
      //
      //a0
      qType: "Section A: Comprehension & Summary",
      question: "Who is Ummi’s eldest child?",
      choices: [
        "A) Omar",
        "B) Teemah",
        "C) Bayo",
        "D) Kayode"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "Page 3 features the evidence for the answer to this question: 'My first child was Omar'.  Ummi was speaking there.  Hence, the correct answer is: 'A) Omar'."
    },
    {
      //22
      //b1
      //
      qType: "Section A: Comprehension & Summary",
      question: "What does Ummi’s name mean in English?",
      choices: [
        "A) Warrior",
        "B) Mother",
        "C) Star",
        "D) Peace"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "Page 3 relays the evidence of the correct answer: 'They couldn't call me Ummi, which was my name at home, which incidentally also meant mummy.  It actually translated to My Mother in Arabic...'.  Hence, the correct answer is 'B) Mother'."
    },
    {
      //23
      //
      //b1
      qType: "Section A: Comprehension & Summary",
      question: "How many daughters does Ummi have?",
      choices: [
        "A) 1",
        "B) 2",
        "C) 3",
        "D) 4"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The children are named early in the text as 'Bint', 'Jamila', and 'Omar'.  Hence, the correct answer is 'C) 3'."
    },
    {
      //24
      //
      //d3
      qType: "Section A: Comprehension & Summary",
      question: "What was Ummi's first observation upon arriving at the university?",
      choices: [
        "A) The scenic beauty of the campus",
        "B) The large crowd of students from various backgrounds",
        "C) The wide variety of food at the campus restaurants",
        "D) The carefree behaviour and dress of the students"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "Page 11 features the passages that make the correct answer to this question clear: 'The first thing that struck me was the carefree attitude of the people there...[T]he students were not required to wear uniforms.  As for difference in dressing, that was one of the first things you would notice'.  Here, Ummi discusses her first visit to the university.  Hence, the correct answer to this question is: 'D) The carefree behaviour and dress of the students'."
    },
    {
      //25
      //
      //d3
      qType: "Section A: Comprehension & Summary",
      question: "Who does Salma compare university lecturers to?",
      choices: [
            "A) Parents",
            "B) Judges",
            "C) Policemen",
            "D) Politicians"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q16-25.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "Salma refers to the university lecturers on page 12 as 'policemen at the checkpoint'.  Hence, the correct answer is 'C) Policemen'."
    },
    {
      //26
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "Despite the difficulties, John decided to bite the bullet and complete the project.",
      choices: [
        "A) John decided to quit the project.",
        "B) John decided to avoid the project.",
        "C) John decided to face the challenge.",
        "D) John decided to ask for help."
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q26-30.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If John decided to complete the project, he obviously decided to face the challenge (as opposed to the other options).  Hence, the correct answer is 'C) John decided to face the challenge'."
    },
    {
      //27
      //
      //c2
      qType: "Section B: Lexis & Structure",
      question: "After years of practice, Amy finally hit the nail on the head with her presentation.",
      choices: [
        "A) Amy made an irrelevant point.",
        "B) Amy struggled with her presentation.",
        "C) Amy spoke precisely about the issue.",
        "D) Amy hammered something during her presentation."
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q26-30.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The answer choices A, B, and D don't make sense in terms of being synonymous with the sentence.  Hence, the answer choice 'C) Amy spoke precisely about the issue' makes sense and is the correct answer."
    },
    {
      //28
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "When the opportunity to travel to Paris came up, Mark jumped at the chance.",
      choices: [
        "A) Mark ignored the opportunity.",
        "B) Mark quickly accepted the opportunity.",
        "C) Mark hesitated to take the opportunity.",
        "D) Mark refused the opportunity."
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q26-30.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "When someone 'jumps at the chance' to do something or to go somewhere, it means that they don't hesitate and they do it immediately or go to that place immediately.  Hence, the correct answer is 'B) Mark quickly accepted the opportunity'."
    },
    {
      //29
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "Jane’s new business idea seemed too good to be true so we took it with a grain of salt.",
      choices: [
        "A) They were sceptical of Jane’s idea.",
        "B) They ignored Jane’s idea.",
        "C) They believed Jane completely.",
        "D) They immediately invested in Jane’s business."
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q26-30.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "First off, the word 'sceptical' is the British English spelling whereas that word would be spelled 'skeptical' in the American English version.  Secondly, the answer choice 'A) They were sceptical of Jane’s idea' is correct because they took it 'with a grain of salt' which literally means that they possessed a healthy amount of scepticism regarding Jane's idea."
    },
    {
      //30
      //
      //b1
      qType: "Section B: Lexis & Structure",
      question: "Even though the meeting was long, it felt like pulling teeth to get everyone to agree.",
      choices: [
        "A) It was very easy to get people to agree.",
        "B) It was extremely difficult to get people to agree.",
        "C) It was painful to sit through the meeting.",
        "D) It was a dental meeting."
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q26-30.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If 'it felt like pulling teeth to get everyone to agree', then that means that it was difficult to get everyone to agree.  Hence, the correct answer is 'B) It was extremely difficult to get people to agree'."
    },
    {
      //31
      //
      //a0
      qType: "Section B: Lexis & Structure",
      question: "The actress’s performance was <i>mediocre</i>.",
      choices: [
        "A) excellent",
        "B) ordinary",
        "C) disappointing",
        "D) boring"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q31-35.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most opposite in meaning to the word 'mediocre' is the answer choice 'A) excellent' since 'mediocre' means lackluster or below average."
    },
    {
      //32
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "The politician’s response was <i>evasive</i>.",
      choices: [
        "A) straightforward",
        "B) deceptive",
        "C) defensive",
        "D) unclear"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q31-35.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most opposite in meaning to the word 'evasive' is 'straightforward' since 'evasive' means being avoidant and not clear and transparent and honest in one's speech."
    },
    {
      //33
      //
      //a0
      qType: "Section B: Lexis & Structure",
      question: "The manager was known for his <i>lenient</i> treatment of the employees.",
      choices: [
        "A) strict",
        "B) kind",
        "C) understanding",
        "D) careless"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q31-35.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most opposite in meaning to the word 'strict' is 'strict' since 'lenient' means overly tolerant and forgiving."
    },
    {
      //34
      //
      //d3
      qType: "Section B: Lexis & Structure",
      question: "The professor’s explanation was <i>convoluted</i> and hard to follow.",
      choices: [
        "A) mundane",
        "B) complicated",
        "C) confusing",
        "D) simple"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q31-35.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most opposite in meaning to the word 'convoluted' is 'D) simple' because 'convoluted' means confusing and hard to follow and 'simple' is the opposite of that."
    },
    {
      //35
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "Her story was very <i>plausible</i>.",
      choices: [
        "A) creditable",
        "B) believable",
        "C) presumptive",
        "D) unlikely"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q31-35.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most opposite in meaning to the word 'plausible' is 'D) unlikely' because 'plausible' means believable and 'unlikely' is the opposite of that."
    },
    {
      //36
      //
      //b1
      qType: "Section B: Lexis & Structure",
      question: "The community reacted with <i>acrimony</i> to the government’s new policy.",
      choices: [
        "A) kindness",
        "B) bitterness",
        "C) indifference",
        "D) joy"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q36-40.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most synonymous with 'acrimony' in the answer choices is 'B) bitterness'.  The word 'acrimony' is negative and means 'anger, bitterness, conflict'.  The other answer choices are neutral ('indifference') or positive ('kindness', 'joy') so they are incorrect."
    },
    {
      //37
      //
      //b1
      qType: "Section B: Lexis & Structure",
      question: "The professor’s explanation was <i>lucid</i>.",
      choices: [
        "A) vague",
        "B) clear",
        "C) complicated",
        "D) confusing"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q36-40.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word most synonymous with 'lucid' in the answer choices is 'B) clear' because 'lucid' means 'clear and not confusing at all'."
    },
    {
      //38
      //b1
      //
      qType: "Section B: Lexis & Structure",
      question: "The CEO's speech was <i>incisive</i>.",
      choices: [
        "A) dull",
        "B) sharp",
        "C) vague",
        "D) lengthy"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q36-40.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'incisive' means 'intelligently analytical and clear thinking'; hence, the correct answer is 'B) sharp'."
    },
    {
      //39
      //
      //a0
      qType: "Section B: Lexis & Structure",
      question: "His <i>reluctance</i> to join the project was evident to everyone in the room.",
      choices: [
        "A) hesitation",
        "B) eagerness",
        "C) commitment",
        "D) confidence"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q36-40.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'reluctance' means 'unwilling and hesitant; disinclined'.  Therefore, the correct answer is 'A) hesitation'."
    },
    {
      //40
      //
      //a0
      qType: "Section B: Lexis & Structure",
      question: "The lawyer’s argument was <i>flimsy</i> and failed to convince the jury.",
      choices: [
        "A) weak",
        "B) robust",
        "C) unclear",
        "D) conclusive"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q36-40.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If an object is 'flimsy', it means it's weak and not well-made.  This works the same for an argument also.  If an argument in a courtroom is 'flimsy', it means that it is 'weak'.  Hence, the correct answer is 'A) weak'."
    },
    {
      //41
      //
      //c2
      qType: "Section B: Lexis & Structure",
      question: "The meeting was ______ because the manager was sick.",
      choices: [
        "A) called out",
        "B) called up",
        "C) called off",
        "D) called in"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q41-45.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "A manager or employee might 'call out' and stay home if they're sick.  Someone might get 'called up' on the phone.  A crime tip, for example, might be 'called in'.  However, a meeting gets 'called off' if it is cancelled.  Hence, the correct answer is 'B) called off'."
    },
    {
      //42
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "We ran ______ some old friends at the mall yesterday.",
      choices: [
        "A) into",
        "B) across",
        "C) over",
        "D) on"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q41-45.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The phrase 'run into...old friends' doesn't literally mean to bump into them.  It just means to randomly come across them somewhere in public.  Hence, the correct answer is 'A) into'."
    },
    {
      //43
      //
      //a0
      qType: "Section B: Lexis & Structure",
      question: "I need to ______ the forms before submitting them.",
      choices: [
        "A) fill out",
        "B) fill in",
        "C) fill over",
        "D) fill on"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q41-45.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "Forms are normally 'filled out', meaning that people write in them and submit them for some reason in a formal setting like a business setting, for example.  Hence, the correct answer is 'A) fill out'."
    },
    {
      //44
      //
      //
      qType: "Section B: Lexis & Structure",
      question: "Please ______ your shoes before entering the house.",
      choices: [
        "A) take up",
        "B) take in",
        "C) take off",
        "D) take out"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q41-45.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "Some house rules are for visitors to 'take off' their shoes before entering a residence.  Hence, the correct answer is 'C) take off'."
    },
    {
      //45
      //
      //b1
      qType: "Section B: Lexis & Structure",
      question: "She stayed up late to ______ her work after taking the day off.",
      choices: [
        "A) catch in",
        "B) catch up on",
        "C) catch on to",
        "D) catch up with"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q41-45.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The correct phrase is catching up on one's work; therefore, the correct answer is: 'B) catch up on'."
    },
    {
      //46
      //
      //
      qType: "Section C: Oral Forms",
      question: "Rehearsal",
      choices: [
        "A) RE-hear-sal",
        "B) re-HEAR-sal",
        "C) re-hear-SAL",
        "D) re-HEAR-SAL"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q46-50.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If you practice saying the word 'rehearsal', you'll realize that the emphasis is on the second syllable.  Hence, this is why the correct answer choice is 'B) re-HEAR-sal'."
    },
    {
      //47
      //
      //
      qType: "Section C: Oral Forms",
      question: "Anomaly",
      choices: [
             "A) AN-o-ma-ly",
             "B) a-NO-ma-ly",
             "C) an-o-MA-ly",
             "D) an-o-ma-LY"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q46-50.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If you practice saying the word 'anomaly', you'll realize that the emphasis is on the second syllable.  Hence, this is why the correct answer choice is 'B) a-NO-ma-ly'."
    },
    {
      //48
      //
      //
      qType: "Section C: Oral Forms",
      question: "Ambiguity",
      choices: [
        "A) AM-bi-gu-i-ty",
        "B) am-BI-gu-i-ty",
        "C) am-bi-GU-i-ty",
        "D) am-bi-gu-I-ty"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q46-50.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If you practice saying the word 'ambiguity', you'll realize that the emphasis is on the third syllable.  Hence, this is why the correct answer is 'C) am-bi-GU-i-ty'."
    },
    {
      //49
      //
      //
      qType: "Section C: Oral Forms",
      question: "Cemetery",
      choices: [
        "A) CE-me-te-ry",
        "B) ce-ME-te-ry",
        "C) ce-me-TE-RY",
        "D) CE-me-te-RY"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q46-50.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If you practice saying the word 'cemetery', you'll realize that the emphasis is on the first syllable.  Hence, this is why the correct answer is 'A) CE-me-te-ry'."
    },
    {
      //50
      //
      //
      qType: "Section C: Oral Forms",
      question: "Eclectic",
      choices: [
        "A) EC-lec-tic",
        "B) ec-lect-IC",
        "C) ec-lec-TIC",
        "D) ec-LEC-tic"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q46-50.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "If you practice saying the word 'eclectic', you'll realize that the emphasis is on the second syllable.  Hence, this is why the correct answer is 'D) ec-LEC-tic'."
    },
    {
      //51
      //
      //
      qType: "Section C: Oral Forms",
      question: "M<u>y</u>th (y)",
      choices: [
        "A) Pin",
        "B) Cycle",
        "C) Ripe",
        "D) Take"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q51-55.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'Pin' sounds like 'Myth'.  Hence, the correct answer is A."
    },
    {
      //52
      //
      //
      qType: "Section C: Oral Forms",
      question: "F<u>i</u>nd (i)",
      choices: [
        "A) Sit",
        "B) Type",
        "C) Need",
        "D) Four"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q51-55.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'Type' sounds like 'Find'.  Hence, the correct answer is B."
    },
    {
      //53
      //
      //
      qType: "Section C: Oral Forms",
      question: "B<u>u</u>s (u)",
      choices: [
        "A) Hot",
        "B) Sun",
        "C) Cue",
        "D) Bat"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q51-55.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'Sun' sounds like 'Bus'.  Hence, the correct answer is B."
    },
    {
      //54
      //
      //
      qType: "Section C: Oral Forms",
      question: "/tʃ/",
      choices: [
        "A) Shovel",
        "B) Travel",
        "C) Stake",
        "D) Match"
              ],
      correctAnswer: 3,
      // audio: "",
      image: "img/jamb7_q51-55.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'Match' has the 'ch' sound.  Hence, the correct answer is D."
    },
    {
      //55
      //
      //
      qType: "Section C: Oral Forms",
      question: "/dʒ/",
      choices: [
        "A) Dog",
        "B) Giraffe",
        "C) Zoo",
        "D) Dark"
              ],
      correctAnswer: 1,
      // audio: "",
      image: "img/jamb7_q51-55.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The word 'Giraffe' has the 'g' sound.  Hence, the answer is B."
    },
    {
      //56
      //
      //
      qType: "Section C: Oral Forms",
      question: "The dog is BARKING loudly in the yard.",
      choices: [
        "A) Is the dog sleeping in the yard?",
        "B) Is the dog barking softly in the yard?",
        "C) Is the dog barking loudly in the house?",
        "D) What is the cat doing in the yard?"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q56-60.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The capitalized word 'BARKING' will be changed to another verb.  In this case, it's 'sleeping'.  Hence, the correct answer is 'A) Is the dog sleeping in the yard'?"
    },
    {
      //57
      //
      //
      qType: "Section C: Oral Forms",
      question: "She bought a NEW car yesterday.",
      choices: [
        "A) Did she buy a used car yesterday?",
        "B) Did she buy a new car last week?",
        "C) Did she buy a new bike yesterday?",
        "D) What brand of car did she buy yesterday?"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q56-60.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The capitalized word 'NEW' will be changed to another adjective.  In this case, it's 'used'.  Hence, the correct answer is 'A) Did she buy a used car yesterday'?"
    },
    {
      //58
      //
      //a0
      qType: "Section C: Oral Forms",
      question: "He finished the project EARLY.",
      choices: [
        "A) Did he finish the project late?",
        "B) Did he start the project on time?",
        "C) Did he start the project early?",
        "D) What time did he finish the project?"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q56-60.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The capitalized word 'EARLY' will be changed to another adverb.  In this case, it's 'late'.  Hence, the correct answer is 'A) Did he finish the project late'?"
    },
    {
      //59
      //
      //
      qType: "Section C: Oral Forms",
      question: "They went to the BEACH for vacation.",
      choices: [
        "A) Did they go to the beach last year?",
        "B) Did they go to the beach for work?",
        "C) Did they go to the mountains for vacation?",
        "D) What country did they go to for vacation?"
              ],
      correctAnswer: 2,
      // audio: "",
      image: "img/jamb7_q56-60.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The capitalized word 'BEACH' will be changed to another noun.  In this case, it's 'mountains'.  Hence, the correct answer is 'C) Did they go to the mountains for vacation'?"
    },
    {
      //60
      //
      //
      qType: "Section C: Oral Forms",
      question: "She wore a RED dress to the party.",
      choices: [
        "A) Did she wear a blue dress to the party?",
        "B) Did she wear a red dress to the office?",
        "C) Did she wear a red dress to the party last year?",
        "D) What colour was her dress at the funeral?"
              ],
      correctAnswer: 0,
      // audio: "",
      image: "img/jamb7_q56-60.png",
      // content: "https://drive.google.com/file/d/1_Uztb4Awe8OMGqwe37Peoe_KeU4PuIVB/view?usp=sharing",
      explanation: "The capitalized word 'RED' will be changed to another adjective.  In this case, it's 'blue'.  Hence, the correct answer is 'A) Did she wear a blue dress to the party'?"
    },

  ];

