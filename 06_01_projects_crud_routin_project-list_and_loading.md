## Projects CRUD with Hooks

- apiserver
- hooks: useState, useEffects, useContext, useReducer

---

> ### 1. Componenta noua ProjectsPage

[snippet:projects-page.js.md]


---

> ### 2. Componenta noua ProjectForm

[snippet:project-form.js.md]


- ruta noua `projects/add`

---

>> ## Patterns: Trei moduri pentru activarea rutelor

- `Link/NavLink`
- `history.push()`
- declarative, using `<Redirect />`

---

> ### 3. Activate Add Project form

- Pentru Save and close folosim modul imperativ

- Pentru Back to list folosim modul declarativ
    - utilizam `<Redirect />`

---

> ### 4. Request projects from apiserver


---

> ### 5. Add `Loading...` indicator till projects are loaded

- repornim serverul json-server cu parametrul -d 2000 (delay 2sec)

- la activarea ProjectsPage nu avem indicator de incarcare
    - nu stim daca trebuie sau nu sa asteptam sau e eroare

- mai intai punem un text simplu si folosim state-ul loading

- definim o componenta dedicata pentru loading

---

> ### 6. Cream si utilizam o componenta `Loading`

- folosim snippet-ul projects-page.js.md pentru a genera un content static

- acesta va afisa o lista cu opacitate mica in spatele Loading-ului

- pot exista mai multe astfel de content-uri in functie de locul unde va fi utilizat

---

- modificam utilizarea loader-ului

- sa functioneze automat in functie de atributele: loading si content

- va functiona ca un HOC

---

> ### 7. Modificam Loading sa functioneze ca un HOC

- incepem cu utilizarea lui in ProjectsPage.js

- Componenta LoaderContentList ramane la fel

- Modificam componenta Loader

---

- acum, oriunde vrem loading, facem un wrap cu componenta `<Loader/>`
    - componenta are code default
    - si poate primi orice fel de content pe care sa-l afiseze in spate


