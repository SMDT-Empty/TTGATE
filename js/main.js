function Api() {
  fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
    .then(response => response.json())
    .then(json => {

      const link = window.location.search
      let query = ""

      if (link.includes("q")) {
        query = link
          .replaceAll("?", "")
          .split("&")
          .filter((q) => q.includes("q"))[0]
          .split("=")[1]
          .replaceAll("+", " ")
      }

      json.forEach(element => {

        if (!element.title.includes(query)) {
          return
        }

        document.querySelector(".container").insertAdjacentHTML('afterbegin', `
      <div class="message">
        <div class="message__title">
            <span class="name"></span>
            <p class="title">${element.title}</p>
        </div>
        <div class="message__body">
            <p class="body">${element.body}</p>
        </div>
        <input onClick="check(this)" type="checkbox">
      </div>
    `)
      });

    })
}
Api()

function check(e) {
  e.parentElement.classList.toggle('dark')
}