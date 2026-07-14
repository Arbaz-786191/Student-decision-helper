
function register() {
  let username = prompt("Create Username");
  let password = prompt("Create Password");

  if (!username || !password) {
    alert("Fill all details ❌");
    return;
  }

  // Save user data
  localStorage.setItem("user", username);
  localStorage.setItem("pass", password);

  alert("Registered Successfully ✅");

  // 👉 Go to Login Page
  window.location.href = "login.html";
}


// ================= LOGIN =================
function login() {
  let u = document.getElementById("username").value.trim();
  let p = document.getElementById("password").value.trim();

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (!u || !p) {
    document.getElementById("error").innerText = "⚠ Fill all fields";
    return;
  }

  if (u === savedUser && p === savedPass) {

    // 👉 Login → Dashboard
    window.location.href = "dashboard.html";

  } else {
    document.getElementById("error").innerText = "❌ Invalid Username or Password";
  }
}


// ================= FORGOT PASSWORD =================
function forgot() {
  let user = prompt("Enter Username");

  if (user === localStorage.getItem("user")) {
    alert("Your Password: " + localStorage.getItem("pass"));
  } else {
    alert("User not found ❌");
  }
}


// ================= LOGOUT =================
function logout() {
  window.location.href = "login.html";
}


// ================= DASHBOARD =================
function show(type) {
  let output = document.getElementById("output");

  let data = {

    career: `
      <h2>🎯 Career Options</h2>
      <ul>
        <li onclick="showCareerDetails('software')">💻 Software Developer</li>
        <li onclick="showCareerDetails('data')">📊 Data Analyst</li>
        <li onclick="showCareerDetails('ai')">🤖 AI Engineer</li>
        <li onclick="showCareerDetails('doctor')">🏥 Doctor</li>
        <li onclick="showCareerDetails('engineer')">⚙ Engineer</li>
        <li onclick="showCareerDetails('designer')">🎨 Designer</li>
        <li onclick="showCareerDetails('business')">📈 Business</li>
      </ul>
      <div id="career-details" style="margin-top:20px; color:#ffd700;"></div>
    `,

    skills: `
      <h2>📊 Skills</h2>
      <p>Coding: ███████░░ 70%</p>
      <p>Communication: ██████░░░ 60%</p>
      <p>Problem Solving: ████████░ 80%</p>
    `,

    study: `
      <h2>📚 Study Plan</h2>
      <p>Step 1: Learn Basics</p>
      <p>Step 2: Practice Daily</p>
      <p>Step 3: Build Projects</p>
      <p>Step 4: Revision</p>
    `,

    goal: `
      <h2>🏆 Goals</h2>
      <p>🎯 Short Term: Learn a skill</p>
      <p>🚀 Long Term: Get job / college</p>
    `,

    compare: `
      <h2>⚖ Career Comparison</h2>
      <table border="1" style="width:100%; text-align:center;">
        <tr><th>Career</th><th>Salary</th><th>Difficulty</th></tr>
        <tr><td>Developer</td><td>High</td><td>Medium</td></tr>
        <tr><td>Doctor</td><td>Very High</td><td>High</td></tr>
        <tr><td>Designer</td><td>Medium</td><td>Low</td></tr>
      </table>
    `,

    resume: `
      <h2>📄 Resume Tips</h2>
      <ul>
        <li>✔ Add skills</li>
        <li>✔ Add projects</li>
        <li>✔ Keep it simple</li>
      </ul>
    `,

    motivation: `
      <h2>🔥 Motivation</h2>
      <p>"Consistency is the key to success."</p>
      <p>"Start small, think big."</p>
    `,

    quiz: `
      <h2>🧠 Career Quiz</h2>
      <p>Do you like coding?</p>
      <button onclick="alert('Try Software Development')">Yes</button>
      <button onclick="alert('Explore other fields')">No</button>
    `,

    progress: `
      <h2>📈 Progress</h2>
      <p>Skills Improving 🔼</p>
      <p>Consistency Good 👍</p>
    `,

    tasks: `
      <h2>📅 Daily Tasks</h2>
      <ul>
        <li>✔ Study 2 hours</li>
        <li>✔ Practice skills</li>
        <li>✔ Watch tutorial</li>
      </ul>
    `,

    tips: `
      <h2>💡 Tips</h2>
      <p>Focus on one skill at a time</p>
      <p>Practice daily</p>
    `,

    profile: `
      <h2>👤 Profile</h2>
      <p><b>User:</b> ${localStorage.getItem("user")}</p>
      <p>Status: Learning Phase</p>
    `
  };

  output.innerHTML = data[type];
}


// ================= CAREER DETAILS =================
function showCareerDetails(career) {
  const detailsDiv = document.getElementById("career-details");

  let info = "";

  if (career === "software") {
    info = `
      <h3>Software Developer</h3>
      <p>💻 Skills: Coding, Problem Solving</p>
      <p>📚 Path: Learn → Practice → Projects → Job</p>
    `;
  }

  else if (career === "data") {
    info = `
      <h3>Data Analyst</h3>
      <p>📊 Skills: SQL, Excel, Python</p>
      <p>📚 Path: Tools → Projects → Internship → Job</p>
    `;
  }

  else if (career === "ai") {
    info = `
      <h3>AI Engineer</h3>
      <p>🤖 Skills: ML, Python, AI Models</p>
      <p>📚 Path: Basics → ML → Projects → Job</p>
    `;
  }

  else if (career === "doctor") {
    info = `
      <h3>Doctor</h3>
      <p>🩺 Biology, Diagnosis, Patient Care</p>
      <p>📚 Path: Medical School → Internship → Residency</p>
    `;
  }

  else if (career === "engineer") {
    info = `
      <h3>Engineer</h3>
      <p>⚙ Maths, Problem Solving, Design</p>
      <p>📚 Path: B.Tech → Internship → Job</p>
    `;
  }

  else if (career === "designer") {
    info = `
      <h3>Designer</h3>
      <p>🎨 Creativity, Figma, Photoshop</p>
      <p>📚 Path: Tools → Portfolio → Freelance/Job</p>
    `;
  }

  else if (career === "business") {
    info = `
      <h3>Business</h3>
      <p>📈 Marketing, Finance, Management</p>
      <p>📚 Path: Basics → Experience → Startup</p>
    `;
  }

  detailsDiv.innerHTML = info;
}


// ================= FINAL STEP (SUCCESS PAGE) =================
function goSuccess() {
  window.location.href = "dashboard.html";
}