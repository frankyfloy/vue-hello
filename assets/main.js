var app = new Vue({
    el: '#root',
    data: {
        message: `L'intruso è sempre `,
        message2: `"Napoletano..."`,
        // classi
        m_auto: "m-auto",
        classi_H1: "text-center mb-3 text-success",
        classi_H1_mark: "border rounded bg-danger text-success",
        flex_cont_Main: "d-flex flex-column width-100 heigth-100 justify-content-center",

        flex_cont:  "d-flex flex-column justify-content-center",
        btn_Lg: "btn btn-warning btn-lg mt-3 ml-auto mr-auto text-dark",

        imgBlackOut: "assets\\img\\buio.gif"
    },

    methods: {
        modifica: function () {
            this.classi_H1 = "text-center mb-3 text-danger text-underline"
            this.classi_H1_mark = "border rounded bg-warning text-danger text-underline"
            let imgSrc = this.imgBlackOut;
            // console.log(this.imgBlackOut);
            setTimeout(function (){

                document.getElementById('mainDiv').innerHTML = '';
                let img = document.createElement("img");
                // Creazione attributi
                var attrSrc = document.createAttribute("src");
                let attrClass = document.createAttribute("class");
                // Aggiunta valori attributi
                attrSrc.value = imgSrc;
                attrClass.value = "width-100 heigth-100";
                // Aggiunta degli attributi con valori al tag img
                img.setAttributeNode(attrSrc);
                img.setAttributeNode(attrClass);
                // Aggiunta del tag IMG con Attributi nel DOM (main_div)
                document.getElementById('mainDiv').appendChild(img);

            },1200);
            setTimeout(function (){
                document.getElementById('root').innerHTML = "";
            },2000);
        }
    }
});
