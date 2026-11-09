  const buttons =document.querySelectorAll("#filters button");
            const cards=document.querySelectorAll("#grid.card");
            function filter(f){
                buttons.forEach(b => b.classList.toggle("on",b.dataset.f===f));
                cards.forEach(c => { c.hidden = !(f === "all" || c.dataset.c === f); });
            }
            buttons.forEach(b => b.addEventListener("click", () => filter(b.dataset.f)));
            document.querySelectorAll(".tile").forEach(t => t.addEventListener("click",() => filter(t.dataset.go)));

            //Mobile menu   
            const burger = document.getElementById("burger");   
            const menu = document.getElementById("menu");
            burger.addEventListener("click", () => {
                burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
            });
            menu.querySelectorAll("a").forEach(a => a.addEventListener("click",() =>{
                menu.classList.remove("open");
                burger.setAttribute("aria-expanded", "false");
            }))