document.addEventListener("DOMContentLoaded", async () => {
  const sidebarMenu = document.getElementById("sidebarMenu");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const welcomeText = document.getElementById("welcomeText");
  const roleText = document.getElementById("roleText");
  const logoutBtn = document.getElementById("logoutBtn");
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  // Mobile Menu Toggle
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // 1. Mirkaneessuu Nama Seene (Session Check)
  const { data: { session }, error: sessionError } = await window.KEYRA_DB.auth.getSession();
  
  if (sessionError || !session) {
    window.location.href = "login.html";
    return;
  }

  // 2. Odeeffannoo Profile Fudhachuu
  const { data: profile, error: profileError } = await window.KEYRA_DB
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (profileError || !profile) {
    alert("Dogoggora: Odeeffannoo herrega keessan argachuu hin dandeenye.");
    window.location.href = "login.html";
    return;
  }

  // 3. Maqaa fi Role Agarsiisuu
  userNameDisplay.innerText = profile.full_name || profile.email;
  welcomeText.innerText = `Baga nagaan dhuftan, ${profile.full_name || 'Barataa'}!`;
  roleText.innerText = `Role: ${profile.role.toUpperCase()}`;

  // 4. Menu Uumuu (Role irratti hundaa'e)
  const menus = {
    admin: [
      { name: "Dashboard", icon: "📊", link: "#" },
      { name: "Barattoota (Students)", icon: "👨‍🎓", link: "#" },
      { name: "Barsiisota (Teachers)", icon: "👨‍🏫", link: "#" },
      { name: "Qormaata (Exams)", icon: "📝", link: "#" },
      { name: "Hojii Manaa (Assignments)", icon: "📚", link: "#" },
      { name: "Qabxii (Results)", icon: "🎯", link: "#" }
    ],
    teacher: [
      { name: "Dashboard", icon: "📊", link: "#" },
      { name: "Qormaata Uumuu", icon: "📝", link: "#" },
      { name: "Hojii Manaa", icon: "📚", link: "#" },
      { name: "Qabxii Barattootaa", icon: "🎯", link: "#" }
    ],
    student: [
      { name: "Dashboard", icon: "📊", link: "#" },
      { name: "Qormaata Hojjechuu", icon: "📝", link: "#" },
      { name: "Qabxii Koo", icon: "🎯", link: "#" },
      { name: "Hojii Manaa", icon: "📚", link: "#" }
    ]
  };

  const userMenus = menus[profile.role] || menus["student"];
  
  sidebarMenu.innerHTML = "";
  userMenus.forEach(menu => {
    const a = document.createElement("a");
    a.href = menu.link;
    a.className = "sidebar-link";
    a.innerHTML = `${menu.icon} ${menu.name}`;
    sidebarMenu.appendChild(a);
  });

  // 5. Logout
  logoutBtn.addEventListener("click", async () => {
    await window.KEYRA_DB.auth.signOut();
    window.location.href = "login.html";
  });
});