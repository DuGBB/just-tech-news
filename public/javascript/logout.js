async function logout() {
  console.log("can i log out??");
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  console.log("yes i can");
  if (response.ok) {
    console.log("LOgging Out!");
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
