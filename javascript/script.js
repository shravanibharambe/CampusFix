/**
 * CampusFix - Core Logic & Data Store
 */

const DEFAULT_ISSUES = [
  {
    id: "CF-2026-1001",
    studentName: "Aditya Verma",
    studentId: "2023CS014",
    email: "aditya.v@campus.edu",
    category: "Wi-Fi",
    title: "Wi-Fi disconnected in Computer Lab 2",
    description: "The primary router access point is rebooting every 10 minutes, disrupting the network programming class.",
    building: "Science & Tech Wing",
    room: "Lab 202, 2nd Floor",
    priority: "High",
    status: "In Progress",
    assignedDept: "IT Network Operations",
    date: "2026-09-02",
    image: null
  },
  {
    id: "CF-2026-1002",
    studentName: "Priya Nair",
    studentId: "2022EC089",
    email: "priya.nair@campus.edu",
    category: "Classroom",
    title: "Ceiling projector not displaying HDMI input",
    description: "Classroom projector powers on but fails to negotiate resolution from any connected laptop.",
    building: "Academic Block A",
    room: "Seminar Hall 1",
    priority: "Medium",
    status: "Assigned",
    assignedDept: "AV Support Desk",
    date: "2026-09-03",
    image: null
  },
  {
    id: "CF-2026-1003",
    studentName: "Rohan Das",
    studentId: "2024ME045",
    email: "rohan.das@campus.edu",
    category: "Water",
    title: "Water dispenser tap leaking continuously",
    description: "Cold water tap valve is worn out and leaking onto the corridor floor, causing a slip hazard.",
    building: "Mechanical Complex",
    room: "Near Workshop 3",
    priority: "High",
    status: "Resolved",
    assignedDept: "Plumbing & Maintenance",
    date: "2026-09-01",
    image: null
  },
  {
    id: "CF-2026-1004",
    studentName: "Neha Sharma",
    studentId: "2023CV112",
    email: "neha.s@campus.edu",
    category: "Electrical",
    title: "Fluorescent lights flickering vigorously",
    description: "Two light fixtures in the reading room are rapidly flickering causing eye strain.",
    building: "Central Library",
    room: "Reading Zone B",
    priority: "Low",
    status: "Reported",
    assignedDept: "Electrical Services",
    date: "2026-09-06",
    image: null
  },
  {
    id: "CF-2026-1005",
    studentName: "Tanmay Joshi",
    studentId: "2022IT033",
    email: "t.joshi@campus.edu",
    category: "Washroom",
    title: "Exhaust fan not operating",
    description: "Main exhaust unit is dead on the 3rd floor west wing washroom.",
    building: "Academic Block B",
    room: "Floor 3 West",
    priority: "Medium",
    status: "Under Review",
    assignedDept: "Housekeeping & Facilities",
    date: "2026-09-05",
    image: null
  },
  {
    id: "CF-2026-1006",
    studentName: "Meera Krishnan",
    studentId: "2023BT018",
    email: "m.krishnan@campus.edu",
    category: "Laboratory",
    title: "Fume hood suction pressure low",
    description: "The chemical exhaust hood airflow velocity reads under safe limits.",
    building: "BioTech Block",
    room: "Lab 105",
    priority: "Critical",
    status: "In Progress",
    assignedDept: "Safety & Compliance",
    date: "2026-09-04",
    image: null
  },
  {
    id: "CF-2026-1007",
    studentName: "Arjun Mehta",
    studentId: "2024CS220",
    email: "arjun.m@campus.edu",
    category: "Cleanliness",
    title: "Spilled paint residue after club activity",
    description: "Outdoor amphitheater steps have dried paint buckets and residue left behind.",
    building: "Student Activity Center",
    room: "Open Amphitheater",
    priority: "Low",
    status: "Resolved",
    assignedDept: "Campus Housekeeping",
    date: "2026-08-30",
    image: null
  },
  {
    id: "CF-2026-1008",
    studentName: "Siddharth Rao",
    studentId: "2021EE074",
    email: "siddharth.r@campus.edu",
    category: "Infrastructure",
    title: "Corridor stair railing loose",
    description: "Handrail support bracket has unfastened from the wall anchor on stairway 2.",
    building: "Academic Block A",
    room: "Stairway 2",
    priority: "Critical",
    status: "In Progress",
    assignedDept: "Civil Infrastructure",
    date: "2026-09-05",
    image: null
  },
  {
    id: "CF-2026-1009",
    studentName: "Kavita Sane",
    studentId: "2023MB009",
    email: "kavita.sane@campus.edu",
    category: "Library",
    title: "Self-checkout barcode scanner malfunctioning",
    description: "Terminal 2 laser fails to read book tags.",
    building: "Central Library",
    room: "Ground Floor Kiosk",
    priority: "Medium",
    status: "Reported",
    assignedDept: "Library IT",
    date: "2026-09-06",
    image: null
  },
  {
    id: "CF-2026-1010",
    studentName: "Gaurav Sen",
    studentId: "2022CS091",
    email: "gaurav.sen@campus.edu",
    category: "Classroom",
    title: "Broken desk armrest chairs in Lecture Hall 4",
    description: "Row 3 desks 4 & 5 are cracked and unstable for writing.",
    building: "Main Academic Block",
    room: "LH-04",
    priority: "Medium",
    status: "Assigned",
    assignedDept: "Carpentry & Furniture",
    date: "2026-09-04",
    image: null
  }
];

function getIssues() {
  const data = localStorage.getItem("campusfix_issues");
  if (!data) {
    localStorage.setItem("campusfix_issues", JSON.stringify(DEFAULT_ISSUES));
    return DEFAULT_ISSUES;
  }
  return JSON.parse(data);
}

function saveIssues(issues) {
  localStorage.setItem("campusfix_issues", JSON.stringify(issues));
}

function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "✓";
  if (type === "warning") icon = "⚠";
  if (type === "error") icon = "✕";

  toast.innerHTML = `<span><strong>${icon}</strong></span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add("open");
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobileNavBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  initReportPage();
  initTrackPage();
  initAdminPage();
});

function initReportPage() {
  const reportForm = document.getElementById("reportIssueForm");
  if (!reportForm) return;

  const photoInput = document.getElementById("issuePhoto");
  const photoPreview = document.getElementById("photoPreview");
  const previewImg = document.getElementById("previewImg");
  let uploadedBase64 = null;

  if (photoInput) {
    photoInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          showToast("Image size must be less than 5MB", "warning");
          this.value = "";
          return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
          uploadedBase64 = e.target.result;
          previewImg.src = uploadedBase64;
          photoPreview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const validateField = (id, condition) => {
      const field = document.getElementById(id);
      const parent = field.closest(".form-group");
      if (!condition) {
        parent.classList.add("has-error");
        isValid = false;
      } else {
        parent.classList.remove("has-error");
      }
    };

    const name = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const category = document.getElementById("issueCategory").value;
    const title = document.getElementById("issueTitle").value.trim();
    const description = document.getElementById("issueDesc").value.trim();
    const building = document.getElementById("campusBuilding").value.trim();
    const room = document.getElementById("roomNumber").value.trim();
    const priority = document.getElementById("issuePriority").value;

    validateField("studentName", name.length >= 2);
    validateField("studentId", studentId.length >= 3);
    validateField("studentEmail", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    validateField("issueCategory", category !== "");
    validateField("issueTitle", title.length >= 5);
    validateField("issueDesc", description.length >= 15);
    validateField("campusBuilding", building !== "");
    validateField("roomNumber", room.length >= 1);
    validateField("issuePriority", priority !== "");

    if (!isValid) {
      showToast("Please correct the marked fields", "warning");
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `CF-2026-${randomSuffix}`;

    const newIssue = {
      id: newId,
      studentName: name,
      studentId: studentId,
      email: email,
      category: category,
      title: title,
      description: description,
      building: building,
      room: room,
      priority: priority,
      status: "Reported",
      assignedDept: "Triage & Facilities",
      date: new Date().toISOString().split("T")[0],
      image: uploadedBase64
    };

    const issues = getIssues();
    issues.unshift(newIssue);
    saveIssues(issues);

    document.getElementById("modalIssueId").innerText = newId;
    document.getElementById("modalTrackBtn").href = `track.html?id=${newId}`;
    openModal("successModal");
    reportForm.reset();
    if (photoPreview) photoPreview.style.display = "none";
    uploadedBase64 = null;
  });
}

function initTrackPage() {
  const trackBtn = document.getElementById("btnTrackSearch");
  const trackInput = document.getElementById("trackIssueInput");
  const resultBox = document.getElementById("trackResultBox");
  if (!trackBtn || !trackInput || !resultBox) return;

  const performLookup = (searchId) => {
    if (!searchId) {
      showToast("Please enter an Issue ID", "warning");
      return;
    }

    const issues = getIssues();
    const issue = issues.find(i => i.id.toLowerCase() === searchId.trim().toLowerCase());

    if (!issue) {
      showToast(`No report found for ID "${searchId}"`, "error");
      resultBox.style.display = "none";
      return;
    }

    document.getElementById("resIssueId").innerText = issue.id;
    document.getElementById("resTitle").innerText = issue.title;
    document.getElementById("resCategory").innerText = issue.category;
    document.getElementById("resLocation").innerText = `${issue.building} — ${issue.room}`;
    document.getElementById("resDate").innerText = issue.date;
    document.getElementById("resDept").innerText = issue.assignedDept || "Pending Assignment";
    document.getElementById("resDescription").innerText = issue.description;

    const prioBadge = document.getElementById("resPriority");
    prioBadge.className = `badge badge-prio-${issue.priority}`;
    prioBadge.innerText = `${issue.priority} Priority`;

    const statusBadge = document.getElementById("resStatusBadge");
    const sanitizedStatus = issue.status.replace(/\s+/g, '-');
    statusBadge.className = `badge badge-${sanitizedStatus}`;
    statusBadge.innerText = issue.status;

    const stages = ["Reported", "Under Review", "Assigned", "In Progress", "Resolved"];
    const statusIndex = stages.indexOf(issue.status);

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, idx) => {
      item.classList.remove("completed", "active");
      if (issue.status === "Rejected") {
        if (idx === 0) item.classList.add("completed");
      } else if (idx < statusIndex) {
        item.classList.add("completed");
      } else if (idx === statusIndex) {
        item.classList.add("active");
      }
    });

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
  };

  trackBtn.addEventListener("click", () => performLookup(trackInput.value));
  trackInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performLookup(trackInput.value);
  });

  const urlParams = new URLSearchParams(window.location.search);
  const qId = urlParams.get("id");
  if (qId) {
    trackInput.value = qId;
    performLookup(qId);
  }
}

function initAdminPage() {
  const adminTableBody = document.getElementById("adminTableBody");
  if (!adminTableBody) return;

  const searchInput = document.getElementById("adminSearch");
  const filterCategory = document.getElementById("adminFilterCat");
  const filterStatus = document.getElementById("adminFilterStatus");
  const filterPriority = document.getElementById("adminFilterPriority");

  function renderAdmin() {
    const issues = getIssues();
    
    const totalCount = issues.length;
    const pendingCount = issues.filter(i => ["Reported", "Under Review"].includes(i.status)).length;
    const inProgressCount = issues.filter(i => ["Assigned", "In Progress"].includes(i.status)).length;
    const resolvedCount = issues.filter(i => i.status === "Resolved").length;

    document.getElementById("statTotal").innerText = totalCount;
    document.getElementById("statPending").innerText = pendingCount;
    document.getElementById("statProgress").innerText = inProgressCount;
    document.getElementById("statResolved").innerText = resolvedCount;

    const statusKeys = ["Reported", "Under Review", "Assigned", "In Progress", "Resolved"];
    statusKeys.forEach(st => {
      const count = issues.filter(i => i.status === st).length;
      const pct = totalCount > 0 ? (count / totalCount) * 100 : 0;
      const countEl = document.getElementById(`count-st-${st.replace(/\s+/g, '')}`);
      const barEl = document.getElementById(`bar-st-${st.replace(/\s+/g, '')}`);
      if (countEl) countEl.innerText = count;
      if (barEl) barEl.style.width = `${pct}%`;
    });

    const sQuery = (searchInput.value || "").toLowerCase().trim();
    const catVal = filterCategory.value;
    const statVal = filterStatus.value;
    const prioVal = filterPriority.value;

    const filtered = issues.filter(item => {
      const matchesSearch = item.id.toLowerCase().includes(sQuery) ||
                            item.title.toLowerCase().includes(sQuery) ||
                            item.studentName.toLowerCase().includes(sQuery) ||
                            item.building.toLowerCase().includes(sQuery);
      const matchesCat = !catVal || item.category === catVal;
      const matchesStat = !statVal || item.status === statVal;
      const matchesPrio = !prioVal || item.priority === prioVal;
      return matchesSearch && matchesCat && matchesStat && matchesPrio;
    });

    adminTableBody.innerHTML = "";

    if (filtered.length === 0) {
      adminTableBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align:center; padding: 2rem; color: var(--text-muted);">
            No campus issues match your search criteria.
          </td>
        </tr>`;
      return;
    }

    filtered.forEach(issue => {
      const tr = document.createElement("tr");
      const sanitizedStatus = issue.status.replace(/\s+/g, '-');
      tr.innerHTML = `
        <td data-label="Issue ID"><strong>${issue.id}</strong></td>
        <td data-label="Student">${escapeHtml(issue.studentName)}</td>
        <td data-label="Issue Title" style="max-width: 220px;"><strong>${escapeHtml(issue.title)}</strong></td>
        <td data-label="Category">${issue.category}</td>
        <td data-label="Location">${escapeHtml(issue.building)}</td>
        <td data-label="Priority"><span class="badge badge-prio-${issue.priority}">${issue.priority}</span></td>
        <td data-label="Status"><span class="badge badge-${sanitizedStatus}">${issue.status}</span></td>
        <td data-label="Action">
          <button type="button" class="btn btn-secondary btn-sm" onclick="openAdminDetailModal('${issue.id}')">Manage</button>
        </td>
      `;
      adminTableBody.appendChild(tr);
    });
  }

  [searchInput, filterCategory, filterStatus, filterPriority].forEach(el => {
    if (el) {
      el.addEventListener("input", renderAdmin);
      el.addEventListener("change", renderAdmin);
    }
  });

  renderAdmin();
  window.refreshAdminDashboard = renderAdmin;
}

function openAdminDetailModal(issueId) {
  const issues = getIssues();
  const issue = issues.find(i => i.id === issueId);
  if (!issue) return;

  document.getElementById("admDetailId").innerText = issue.id;
  document.getElementById("admDetailStudent").innerText = `${issue.studentName} (${issue.studentId})`;
  document.getElementById("admDetailEmail").innerText = issue.email;
  document.getElementById("admDetailTitle").innerText = issue.title;
  document.getElementById("admDetailCategory").innerText = issue.category;
  document.getElementById("admDetailLocation").innerText = `${issue.building} — ${issue.room}`;
  document.getElementById("admDetailDate").innerText = issue.date;
  document.getElementById("admDetailDesc").innerText = issue.description;
  document.getElementById("admStatusSelect").value = issue.status;
  document.getElementById("admDeptInput").value = issue.assignedDept || "";

  const photoContainer = document.getElementById("admPhotoContainer");
  if (issue.image) {
    photoContainer.innerHTML = `<img src="${issue.image}" alt="Issue Evidence" style="width:100%; border-radius: var(--radius-sm); border:1px solid var(--border);">`;
    photoContainer.style.display = "block";
  } else {
    photoContainer.innerHTML = "";
    photoContainer.style.display = "none";
  }

  const saveBtn = document.getElementById("admSaveStatusBtn");
  saveBtn.onclick = () => {
    const newStatus = document.getElementById("admStatusSelect").value;
    const newDept = document.getElementById("admDeptInput").value.trim();

    issue.status = newStatus;
    issue.assignedDept = newDept || "Facilities Maintenance";
    saveIssues(issues);

    showToast(`Issue ${issue.id} updated to "${newStatus}"`, "success");
    closeModal("adminDetailModal");
    if (window.refreshAdminDashboard) window.refreshAdminDashboard();
  };

  openModal("adminDetailModal");
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}