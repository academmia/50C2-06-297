

## 06_02_projects_crud_refactor-to_global_context_reducer

- alternativa la redux

- vom folosi Context si Hooks pentru a crea un state global 
    - similar cu Redux


---

> ### 1. Cream un context pentru projects

---

> ### 2. Cream ProjectState

---

> ### 3. Cream primele tipuri de actiuni


---

> ### 4. Cream getProjects pe state-ul global

- si il stergem de pe `ProjectsPage`


---

> ### 5. ProjectReducer




> ### 6. Use ProjectContext in ProjectsPage

- nu mai avem proiectele incarcate
    - am mutat functia care le aducea in context (state-ul global)


- nu putem sa utilizam contextul decat in copii Provider-ului

- asa ca daca vrem sa utilizam useContext in ProjectsPage
    - trebuie sa folosim Providerul mai sus (ProjectState)

---

- Oriunde avem nevoie sa folosim lista de proiecte si getProjects
    - importam ProjectContext si folosim useContext
    - state-ul este acum independent de componenta

---