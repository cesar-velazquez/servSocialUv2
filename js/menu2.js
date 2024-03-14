var puntos="../";
//`+puntos+`
class Menu extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        
            <ul class="sidebar__lista">
                <li class="sidebar__elemento sidebar__elemento--borde"><a href="../index.html" class="sidebar__enlace">Home</a></li>
                <li class="sidebar__elemento"><a href="../general-information.html" class="sidebar__enlace">General information</a></li>
                <li class="sidebar__elemento sidebar__elemento--borde">
                    <a class="sidebar__enlace" href="`+puntos+`unit-1.html">Unit 1. Grammar and Use of English</a>
                    <ul class="sidebar__lista ps-4">
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-1.html">Topic 1.1</a></li>
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-2.html">Topic 1.2</a></li>
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-3.html">Topic 1.3</a></li>
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-4.html">Topic 1.4</a></li>
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-5.html">Topic 1.5</a></li>
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-6.html">Topic 1.6</a></li>
                        <li class="sidebar__elemento"><a class="sidebar__enlace" href="../unit-1/topic1-7.html">Topic 1.7</a></li>
                    </ul>
                </li>
                <li class="sidebar__elemento sidebar__elemento--borde">
                    <a href="`+puntos+`unit-2.html" class="sidebar__enlace">Unit 2. Reading and Writing</a>
                    <ul class="sidebar__lista ps-4">
                        <li class="sidebar__elemento">
                            <a href="../unit-2/topic2-1.html" class="sidebar__enlace">Topic 2.1</a>                            
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-2/topic2-2.html" class="sidebar__enlace">Topic 2.2</a>
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-2/topic2-3.html" class="sidebar__enlace">Topic 2.3</a>
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-2/topic2-4.html" class="sidebar__enlace">Topic 2.4</a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar__elemento sidebar__elemento--borde">
                    <a href="`+puntos+`unit-3.html" class="sidebar__enlace">Unit 3. Speaking and Listening</a>
                    <ul class="sidebar__lista ps-4">
                        <li class="sidebar__elemento">
                            <a href="../unit-3/topic3-1.html" class="sidebar__enlace">Topic 3.1</a>
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-3/topic3-2.html" class="sidebar__enlace">Topic 3.2</a>
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-3/topic3-3.html" class="sidebar__enlace">Topic 3.3</a>
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-3/topic3-4.html" class="sidebar__enlace">Topic 3.4</a>
                        </li>
                        <li class="sidebar__elemento">
                            <a href="../unit-3/topic3-5.html" class="sidebar__enlace">Topic 3.5</a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar__elemento sidebar__elemento--borde">
                    <a class="sidebar__enlace" href="`+puntos+`unit-4.html" >Unit 4. Getting to know additional C1 exams</a>
                    <ul class="sidebar__lista ps-4">
                        <li class="sidebar__elemento"><a href="../unit-4/topic4-1.html" class="sidebar__enlace">Topic 4.1</a></li>
                        <li class="sidebar__elemento"><a href="../unit-4/topic4-2.html" class="sidebar__enlace">Topic 4.2</a></li>
                    </ul>
                </li>
                <li class="sidebar__elemento">
                    <a class="sidebar__enlace" href="../final-exam.html">Final Exam</a>
                </li>
            </ul>
        

        `;

    }
}

customElements.define('menu-component', Menu);