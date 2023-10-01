
    const customerImg = document.getElementById("customer-img");
    const customerName = document.getElementById("customer-name");
    const customerText = document.getElementById("custome-text");


    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    let index = 0;
    const customers = [];

    function Customer(img, name, text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        customers.push(customer);
    }
    createCustomer(1, 'Bem vindo ao Instituto de Irrigação', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error!');

    createCustomer(2, 'Histórias ineditas para investigar ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error!');

    createCustomer(3, 'Irrigação fonte do sucesso Agrícola.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error!');
    createCustomer(4, 'Agricultura sustentavel e rentavel..', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error!');
   
    next.addEventListener('click', slideNext);
    function slideNext(){

        if(index === customers.length){
                index = 0;
        }
        index ++;
        customerImg.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
    }

    // prev.addEventListener('click', slidePrev);
    // function slidePrev(){

    //     if(index === 0){
    //             index = customers.length;
    //     }
    //     index --;
    //     customerImg.src = customers[index].img;
    //     customerName.textContent = customers[index].name;
    //     customerText.textContent = customers[index].text;
    // }



    function autoSilde(){
        interva = setInterval(tempo, 2000);
        function tempo(){
            slideNext();
        }
    }autoSilde();

    
    let animeScroll = document.querySelectorAll(".anime");

    window.onscroll = () => {
        animeScroll.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
    
            if (top >= offset && top < offset + height){
                sec.classList.add('show-animate');
    
                //caso queira usar animacoes repititivas
            } else{
                sec.classList.remove('show-animate');
            }
        })
    }


