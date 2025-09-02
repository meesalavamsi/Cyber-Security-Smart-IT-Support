
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyber Interrogation</title>
  <link rel="icon" type="image/png" href="bg.jpg">

  <style>
    body {
      margin: 0;
      font-family: 'Courier New', monospace;
      background-color: #0d0d0d;
      color: #e6e6e6;
      background-image: url("bg3.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container {
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      background: #1a1a1a;
      border-radius: 15px;
      box-shadow: 0 0 20px red;
    }

    h1 span {
      color: red;
      text-shadow: 0 0 5px red;
    }

    select, input, button {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      background: #0f0f0f;
      color: white;
      border: 2px solid red;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background: red;
      color: black;
    }

    .hidden {
      display: none;
    }

    .question-block {
      margin: 20px 0;
      padding: 10px;
      background: #2b2b2b;
      border-left: 5px solid red;
      border-radius: 8px;
    }

    .option {
      display: block;
      margin: 10px 0;
      cursor: pointer;
    }

    .option input {
      width: auto;
      margin-right: 10px;
    }

    .leaderboard {
      margin: 20px 0;
      padding: 15px;
      background: #2b2b2b;
      border-radius: 8px;
      border: 2px solid red;
    }

    .leaderboard h3 {
      color: red;
      margin-top: 0;
    }

    .leaderboard ul {
      list-style: none;
      padding: 0;
    }

    .leaderboard li {
      padding: 8px;
      border-bottom: 1px solid #444;
    }

    .cyber-intro {
      text-align: center;
      font-size: 28px;
      color: red;
      text-shadow: 0 0 10px red;
      background: rgba(26, 26, 26, 0.8);
      padding: 20px 40px;
      border: 2px solid red;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 300px;
    }

    .cyber-intro:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px red;
    }

    .inner-box {
      width: 95%;
      height:95%;
      border: 3px solid red;
      border-radius: 10px;
      background: #0f0f0f;
      box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      animation: pulse 2s infinite ease-in-out;
      transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
      font-weight: bold;
    }

    .inner-box:hover {
      border-color: #ff3333;
      box-shadow: 0 0 25px rgba(255, 0, 0, 0.8);
      transform: scale(1.1);
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
      }
      50% {
        box-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
      }
      100% {
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
      }
    }
  </style>
</head>
<body>
  <div id="cyber-intro-screen" class="screen">
    <div class="cyber-intro" onclick="showIntroScreen()">
      <div class="inner-box">INTERRAOGATION  START</div>
    </div>
  </div>

  <div class="container">
    <div id="intro-screen" class="screen hidden">
      <h1>🛡️ Welcome to <span>Cyber Interrogation</span></h1>
      <p>created by Cyber Guardians & Developped by Team Leviathan</p>
      <div class="leaderboard">
        <h3>🏆 Leaderboard - Top 10</h3>
        <ul id="leaderboard-list"></ul>
      </div>
      <p>Please mention your name:</p>
      <input type="text" id="username" placeholder="Enter your name..." />
      <p id="time-restriction" class="hidden" style="color: red;"></p>
      <p>Select your cyber issue:</p>
      <select id="issue-type">
        <option value="">-- Select an Issue --</option>
        <option value="account">Account Access Issues</option>
        <option value="network">Network Issues</option>
        <option value="security">Security Alerts</option>
        <option value="software">Software Problems</option>
        <option value="hardware">Hardware Issues</option>
        <option value="data">Data Recovery</option>
        <option value="performance">System Performance</option>
        <option value="role">User Role Requests</option>
        <option value="installation">Software Installation</option>
        <option value="reporting">Incident Reporting</option>
      </select>
      <button onclick="startQuiz()">Start Interrogation</button>
    </div>

    <div id="quiz-screen" class="screen hidden">
      <h2 id="question-title">Cyber Quiz</h2>
      <div id="questions"></div>
      <button onclick="submitQuiz()">Submit</button>
    </div>

    <div id="result-screen" class="screen hidden">
      <h2>🔍 Interrogation Complete</h2>
      <p id="final-score"></p>
      <p id="badge"></p>
      <button onclick="goBack()">Back to Start</button>
    </div>
  </div>

  <script>
    const quizData = {
      account: [
        {
          question: "What is the safest way to store passwords?",
          options: [
            "On a sticky note under your keyboard",
            "Use the same password for all accounts",
            "Use a password manager",
            "Memorize all passwords"
          ],
          correct: "Use a password manager"
        },
        {
          question: "What does MFA stand for?",
          options: [
            "Multi-File Access",
            "Multi-Factor Authentication",
            "Main Firewall Activation",
            "Manual Function Alert"
          ],
          correct: "Multi-Factor Authentication"
        },
        {
          question: "Sharing passwords with friends is:",
          options: [
            "Safe if you trust them",
            "Okay for temporary access",
            "Never allowed",
            "Required by IT team"
          ],
          correct: "Never allowed"
        }
      ],
      network: [
        {
          question: "Using public Wi-Fi without protection can lead to:",
          options: [
            "Faster internet",
            "Higher security",
            "Data theft",
            "Cheaper browsing"
          ],
          correct: "Data theft"
        },
        {
          question: "A VPN helps in:",
          options: [
            "Slowing down internet",
            "Hiding your IP and encrypting data",
            "Making gaming faster",
            "Crashing the network"
          ],
          correct: "Hiding your IP and encrypting data"
        },
        {
          question: "What should you do if you notice frequent disconnections?",
          options: [
            "Ignore it",
            "Restart the PC",
            "Inform IT support",
            "Use mobile hotspot"
          ],
          correct: "Inform IT support"
        }
      ],
      security: [
        {
          question: "If antivirus shows an alert, you should:",
          options: [
            "Click “Ignore”",
            "Uninstall antivirus",
            "Check the alert and report to IT",
            "Restart PC"
          ],
          correct: "Check the alert and report to IT"
        },
        {
          question: "A sign of malware can be:",
          options: [
            "Fast PC speed",
            "Ads popping up randomly",
            "Updated software",
            "Clean desktop"
          ],
          correct: "Ads popping up randomly"
        },
        {
          question: "Suspicious login from another country means:",
          options: [
            "System glitch",
            "Someone hacked your account",
            "VPN is working",
            "Your friend logged in"
          ],
          correct: "Someone hacked your account"
        }
      ],
      software: [
        {
          question: "The best way to prevent software bugs is:",
          options: [
            "Avoid using software",
            "Disable auto-updates",
            "Keep software updated",
            "Use pirated apps"
          ],
          correct: "Keep software updated"
        },
        {
          question: "Pirated software can:",
          options: [
            "Improve performance",
            "Be free and safe",
            "Contain malware and legal issues",
            "Give admin access"
          ],
          correct: "Contain malware and legal issues"
        },
        {
          question: "If a software crashes frequently:",
          options: [
            "Restart the app only",
            "Uninstall and install from random site",
            "Send error report and screenshot to IT",
            "Ignore it"
          ],
          correct: "Send error report and screenshot to IT"
        }
      ],
      hardware: [
        {
          question: "What should you do if your system emits smoke?",
          options: [
            "Pour water",
            "Call friends",
            "Power off and inform IT",
            "Keep using it"
          ],
          correct: "Power off and inform IT"
        },
        {
          question: "Who should fix internal hardware?",
          options: [
            "You",
            "Classmate",
            "Authorized IT technician",
            "Online forum guide"
          ],
          correct: "Authorized IT technician"
        },
        {
          question: "Which of these is NOT a hardware issue?",
          options: [
            "Broken keyboard",
            "Cracked screen",
            "Malware attack",
            "Overheating CPU"
          ],
          correct: "Malware attack"
        }
      ],
      data: [
        {
          question: "Where should important data be backed up?",
          options: [
            "Only on pen drive",
            "On desktop",
            "On authorized cloud storage",
            "On social media"
          ],
          correct: "On authorized cloud storage"
        },
        {
          question: "Data loss can occur due to:",
          options: [
            "Power failure",
            "Virus attacks",
            "Hard disk crash",
            "All of the above"
          ],
          correct: "All of the above"
        },
        {
          question: "If you delete a file accidentally, what should you do?",
          options: [
            "Panic",
            "Try undo",
            "Contact IT/data recovery team",
            "Shut down"
          ],
          correct: "Contact IT/data recovery team"
        }
      ],
      performance: [
        {
          question: "Regular system maintenance includes:",
          options: [
            "Deleting system files",
            "Ignoring updates",
            "Restarting and closing unused apps",
            "Installing heavy games"
          ],
          correct: "Restarting and closing unused apps"
        },
        {
          question: "If your system lags frequently:",
          options: [
            "Add more tabs",
            "Report to IT",
            "Ignore",
            "Watch movies"
          ],
          correct: "Report to IT"
        },
        {
          question: "Task Manager helps in:",
          options: [
            "Playing music",
            "Tracking employee performance",
            "Monitoring system resource usage",
            "Browsing web"
          ],
          correct: "Monitoring system resource usage"
        }
      ],
      role: [
        {
          question: "Who should request higher access roles?",
          options: [
            "Everyone",
            "Only people who need it for their work",
            "Interns",
            "New employees"
          ],
          correct: "Only people who need it for their work"
        },
        {
          question: "Higher access comes with:",
          options: [
            "Less responsibility",
            "No change",
            "More responsibility",
            "More vacation days"
          ],
          correct: "More responsibility"
        },
        {
          question: "If you don’t need a role anymore?",
          options: [
            "Keep it",
            "Sell it",
            "Request revocation",
            "Give to others"
          ],
          correct: "Request revocation"
        }
      ],
      installation: [
        {
          question: "Software should be installed via:",
          options: [
            "IT helpdesk or authorized portal",
            "Torrent websites",
            "Friend’s pen drive",
            "YouTube links"
          ],
          correct: "IT helpdesk or authorized portal"
        },
        {
          question: "Unknown installers may contain:",
          options: [
            "Free updates",
            "Malware and viruses",
            "Extra features",
            "Wallpapers"
          ],
          correct: "Malware and viruses"
        },
        {
          question: "What’s a safe source for software?",
          options: [
            "Cracked websites",
            "Fake app stores",
            "Official vendor websites",
            "Blogs"
          ],
          correct: "Official vendor websites"
        }
      ],
      reporting: [
        {
          question: "Which of these is a reportable incident?",
          options: [
            "Phishing email",
            "Data breach",
            "Suspicious login",
            "All of the above"
          ],
          correct: "All of the above"
        },
        {
          question: "The faster you report an incident:",
          options: [
            "The better the chance to contain damage",
            "The more reward",
            "The more work",
            "The lesser the security"
          ],
          correct: "The better the chance to contain damage"
        },
        {
          question: "Where should you report security incidents?",
          options: [
            "Ignore them",
            "Friends",
            "Cyber Guardian Incident Form",
            "Social media"
          ],
          correct: "Cyber Guardian Incident Form"
        }
      ]
    };

    let selectedIssue = "";
    let userName = "";
    let userAnswers = [];
    let lastUser = "";

    // Leaderboard and time restriction storage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    let userAttempts = JSON.parse(localStorage.getItem('userAttempts')) || {};

    function showIntroScreen() {
      document.getElementById("cyber-intro-screen").classList.add("hidden");
      document.getElementById("intro-screen").classList.remove("hidden");
    }

    function updateLeaderboard(name, score) {
      leaderboard.push({ name, score, timestamp: new Date().getTime() });
      leaderboard.sort((a, b) => b.score - a.score);
      leaderboard = leaderboard.slice(0, 10); // Keep top 10
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
      displayLeaderboard();
    }

    function displayLeaderboard() {
      const leaderboardList = document.getElementById('leaderboard-list');
      leaderboardList.innerHTML = '';
      leaderboard.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${entry.name}: ${entry.score}/15`;
        leaderboardList.appendChild(li);
      });
    }

    function checkTimeRestriction(name) {
      // Reset restriction message
      const restrictionMessage = document.getElementById('time-restriction');
      restrictionMessage.classList.add('hidden');
      restrictionMessage.innerText = '';

      // Check if user has changed
      if (name !== lastUser) {
        lastUser = name;
        return true; // Allow new user to start quiz immediately
      }

      // Check time restriction for same user
      const lastAttempt = userAttempts[name];
      if (lastAttempt) {
        const now = new Date().getTime();
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
        if (now - lastAttempt < oneHour) {
          const timeLeft = Math.ceil((oneHour - (now - lastAttempt)) / 60000);
          restrictionMessage.innerText = 
            `Please wait ${timeLeft} minutes before trying again.`;
          restrictionMessage.classList.remove('hidden');
          return false;
        }
      }
      return true;
    }

    function startQuiz() {
      userName = document.getElementById('username').value.trim();
      selectedIssue = document.getElementById('issue-type').value;

      if (!userName || !selectedIssue) {
        alert("Please enter your name and select a cyber issue.");
        return;
      }

      if (!checkTimeRestriction(userName)) {
        return;
      }

      const questionsContainer = document.getElementById('questions');
      questionsContainer.innerHTML = "";
      userAnswers = [];

      quizData[selectedIssue].forEach((qData, index) => {
        const block = document.createElement("div");
        block.className = "question-block";

        const q = document.createElement("p");
        q.innerText = `Q${index + 1}: ${qData.question}`;
        block.appendChild(q);

        qData.options.forEach((option, optIndex) => {
          const optionDiv = document.createElement("div");
          optionDiv.className = "option";

          const input = document.createElement("input");
          input.type = "radio";
          input.name = `question-${index}`;
          input.value = option;
          input.id = `q${index}-opt${optIndex}`;

          const label = document.createElement("label");
          label.htmlFor = `q${index}-opt${optIndex}`;
          label.innerText = option;

          optionDiv.appendChild(input);
          optionDiv.appendChild(label);
          block.appendChild(optionDiv);
        });

        questionsContainer.appendChild(block);
      });

      document.getElementById("intro-screen").classList.add("hidden");
      document.getElementById("quiz-screen").classList.remove("hidden");
    }

    function submitQuiz() {
      const questions = quizData[selectedIssue];
      userAnswers = [];

      questions.forEach((qData, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        userAnswers[index] = selectedOption ? selectedOption.value : null;
      });

      if (userAnswers.includes(null)) {
        alert("Please answer all questions.");
        return;
      }

      let score = 0;
      userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
          score += 5;
        }
      });

      // Update user attempt time
      userAttempts[userName] = new Date().getTime();
      localStorage.setItem('userAttempts', JSON.stringify(userAttempts));

      // Update leaderboard
      updateLeaderboard(userName, score);

      const badge = score === 15 ? "🏅 Cyber Agent Badge Unlocked!" : "⚙️ Keep Practicing to earn your badge.";

      document.getElementById("quiz-screen").classList.add("hidden");
      document.getElementById("result-screen").classList.remove("hidden");
      document.getElementById("final-score").innerText = `🧠 ${userName}, your final score is: ${score}/15`;
      document.getElementById("badge").innerText = badge;
    }

    function goBack() {
      document.getElementById("result-screen").classList.add("hidden");
      document.getElementById("intro-screen").classList.remove("hidden");
      document.getElementById("username").value = "";
      document.getElementById("issue-type").value = "";
      document.getElementById("time-restriction").classList.add("hidden");
    }

    // Display leaderboard on page load
    window.onload = displayLeaderboard;
  </script>
</body>
</html>
